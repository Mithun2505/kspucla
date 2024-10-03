from app import db
from datetime import datetime

class Teachers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    college_type = db.Column(db.String(20), nullable=False)
    kgid_hrms = db.Column(db.String(50), nullable=False)
    mode_of_recuritment_or_aided_date = db.Column(db.String(20), nullable=False)
    subject = db.Column(db.String(100), nullable=False)
    qualification = db.Column(db.String(100), nullable=False)
    date_of_birth = db.Column(db.String(20), nullable=False)
    clg_name = db.Column(db.String(100), nullable=False, default='')
    clg_street_name = db.Column(db.String(100), nullable=False)
    clg_state = db.Column(db.String(20), nullable=False)
    clg_city = db.Column(db.String(50), nullable=False)
    clg_country = db.Column(db.String(10), nullable=False)
    clg_zip_code = db.Column(db.String(10), nullable=False)
    clg_code = db.Column(db.String(15), nullable=False)
    clg_taluk = db.Column(db.String(50), nullable=False)
    emp_street_name = db.Column(db.String(100), nullable=False)
    emp_state = db.Column(db.String(20), nullable=False)
    emp_city = db.Column(db.String(50), nullable=False)
    emp_country = db.Column(db.String(15), nullable=False)
    emp_zip_code = db.Column(db.String(10), nullable=False)
    emp_taluk = db.Column(db.String(50), nullable=False)
    emp_contact = db.Column(db.String(10), nullable=False)
    emp_alt_contact = db.Column(db.String(10), nullable=False)
    issue_date = db.Column(db.String(15), nullable=False)
    joining_date = db.Column(db.String(10), nullable=False)
    fee = db.Column(db.String(10), nullable=False)
    transact_date = db.Column(db.String(10), nullable=False)
    reciept_num = db.Column(db.String(50), nullable=False)
    blood_grp = db.Column(db.String(10), nullable=False)
    img_name = db.Column(db.String(200), nullable=True)
    is_active = db.Column(db.Boolean, nullable=False, default=False)
    payment_order_id = db.Column(db.String(100), nullable=True)
    transaction_payment_id = db.Column(db.String(100), nullable=True)
    payment_signature = db.Column(db.String(200), nullable=True)
    payments = db.relationship('Payment', backref='teacher', lazy=True)
    
    def __repr__(self):
        return str(self.id)

class Admins(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    email_id = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(150), nullable=False)

    def __repr__(self):
        return f"AdminLog(full_name={self.full_name}, email_id={self.email_id}, password={self.password})"

class Payment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    payment_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    merchant_transaction_id = db.Column(db.String(100), nullable=False)
    merchant_user_id = db.Column(db.String(100), nullable=False)
    payment_page_link = db.Column(db.String(800), nullable=False)
    status = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'Payment(id={self.id})'

class PaymentStatus(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    merchant_transaction_id = db.Column(db.String(100), nullable=False)
    payment_id = db.Column(db.Integer, db.ForeignKey('payment.id'), nullable=False)
    status_response_obj = db.Column(db.JSON, nullable=False)  # Assuming JSON field for response object

    payment = db.relationship('Payment', backref='status_updates')

    def __repr__(self):
        return f'<PaymentStatus {self.id}>'
