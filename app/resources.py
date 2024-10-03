from flask import request, json
from flask_restful import Resource, reqparse, abort, fields, marshal_with
from flask_cors import cross_origin

from app import db
from app.models import Teachers, Admins, Payment, PaymentStatus
from app.utils import image_name, upload_image
from app.config import Config, AppConfig
from .pg import generate_payment, is_valid_x_verify

from functools import wraps
import base64
import jwt
import datetime

resource_fields = {
    'full_name': fields.String,
    'subject': fields.String,
    'qualification': fields.String,
    'date_of_birth': fields.String,
	'kgid_hrms': fields.String,
	'membership_id': fields.String,
    'clg_name': fields.String,
    'clg_street_name': fields.String,
    'clg_state': fields.String,
    'clg_city': fields.String,
	'clg_taluk': fields.String,
    'clg_country': fields.String,
    'clg_zip_code': fields.String,
    'clg_code': fields.String,
    'emp_street_name': fields.String,
    'emp_state': fields.String,
    'emp_city': fields.String,
    'emp_country': fields.String,
    'emp_zip_code': fields.String,
    'emp_contact': fields.String,
    'emp_alt_contact': fields.String,
    'issue_date': fields.String,
    'joining_date': fields.String,
    'fee': fields.String,
    'transact_date': fields.String,
    'reciept_num': fields.String,
    'blood_grp': fields.String,
    'img_name': fields.String,
    'message': fields.String
}

log_in_fields = {
    'full_name': fields.String,
    'email_id': fields.String,
    'password': fields.String
}

teacher_post_args = reqparse.RequestParser()
teacher_post_args.add_argument("full_name", type=str, help="Name is required", required=True)
teacher_post_args.add_argument("college_type", type=str, help="Type of employee is required", required=True)
teacher_post_args.add_argument("kgid_hrms", type=str, help="kgid or hrms is required", required=True)
teacher_post_args.add_argument("mode_of_recuritment_or_aided_date", type=str, help="mode of requirement is required", required=True)
teacher_post_args.add_argument("subject", type=str, help="Content/Subject is required", required=True)
teacher_post_args.add_argument("qualification", type=str, help="Qualification is required", required=True)
teacher_post_args.add_argument("date_of_birth", type=str, help="date of birth is required", required=True)
teacher_post_args.add_argument("clg_name", type=str, help="College Name is required", required=True)
teacher_post_args.add_argument("clg_street_name", type=str, help="College street name is required", required=True)
teacher_post_args.add_argument("clg_state", type=str, help="College state is required", required=True)
teacher_post_args.add_argument("clg_city", type=str, help="College city is required", required=True)
teacher_post_args.add_argument("clg_country", type=str, help="College contry is required", required=True)
teacher_post_args.add_argument("clg_zip_code", type=str, help="College ZIP code is required", required=True)
teacher_post_args.add_argument("clg_code", type=str, help="College code is required", required=True)
teacher_post_args.add_argument("clg_taluk", type=str, help="College taluk is required", required=True)
teacher_post_args.add_argument("emp_street_name", type=str, help="Employee street name is required", required=True)
teacher_post_args.add_argument("emp_state", type=str, help="Employee state is required", required=True)
teacher_post_args.add_argument("emp_city", type=str, help="Employee city is required", required=True)
teacher_post_args.add_argument("emp_country", type=str, help="Employee contry is required", required=True) 
teacher_post_args.add_argument("emp_zip_code", type=str, help="Employee ZIP code is required", required=True)
teacher_post_args.add_argument("emp_taluk", type=str, help="Employee taluk is required", required=True)
teacher_post_args.add_argument("emp_contact", type=str, help="Employee contact number is required", required=True)
teacher_post_args.add_argument("emp_alt_contact", type=str, help="Employee alternate contact number is required", required=True)
teacher_post_args.add_argument("issue_date", type=str, help="Issue date is required", required=True)
teacher_post_args.add_argument("joining_date", type=str, help="Joining date is required", required=True)
teacher_post_args.add_argument("fee", type=str, help="Fee details are required", required=True)
teacher_post_args.add_argument("transact_date", type=str, help="Transaction date is required", required=True)
teacher_post_args.add_argument("reciept_num", type=str, help="Reciept number is required", required=True)
teacher_post_args.add_argument("blood_grp", type=str, help="Blood group is required", required=True)

teacher_put_args = reqparse.RequestParser()
teacher_put_args.add_argument("full_name", type=str, help="Name is required")
teacher_put_args.add_argument("content_subject", type=str, help="Content/Subject is required")
teacher_put_args.add_argument("eligibility", type=str, help="Eligibility is required")
teacher_put_args.add_argument("clg_name", type=str, help="College name is required")
teacher_put_args.add_argument("clg_street_name", type=str, help="College street name is required")
teacher_put_args.add_argument("clg_state", type=str, help="College state is required")
teacher_put_args.add_argument("clg_city", type=str, help="College city is required")
teacher_put_args.add_argument("clg_contry", type=str, help="College contry is required")
teacher_put_args.add_argument("clg_zip_code", type=str, help="College ZIP code is required")
teacher_put_args.add_argument("clg_code", type=str, help="College code is required")
teacher_put_args.add_argument("emp_street_name", type=str, help="Employee street name is required")
teacher_put_args.add_argument("emp_state", type=str, help="Employee state is required")
teacher_put_args.add_argument("emp_city", type=str, help="Employee city is required")
teacher_put_args.add_argument("emp_contry", type=str, help="Employee contry is required")
teacher_put_args.add_argument("emp_zip_code", type=str, help="Employee ZIP code is required")
teacher_put_args.add_argument("emp_alt_contact", type=str, help="Employee alternate contact number is required")
teacher_put_args.add_argument("issue_date", type=str, help="Issue date is required")
teacher_put_args.add_argument("joining_date", type=str, help="Joining date is required")
teacher_put_args.add_argument("fee", type=str, help="Fee details are required")
teacher_put_args.add_argument("transact_date", type=str, help="Transaction date is required")
teacher_put_args.add_argument("reciept_num", type=str, help="Reciept number is required")
teacher_put_args.add_argument("blood_grp", type=str, help="Blood group is required")

admin_post_args = reqparse.RequestParser()
admin_post_args.add_argument("email_id", type=str, help="Email Id is required", required=True)
admin_post_args.add_argument("password", type=str, help="Password is required", required=True)

admin_put_args = reqparse.RequestParser()
admin_put_args.add_argument("full_name", type=str, help="Name is required", required=True)
admin_put_args.add_argument("email_id", type=str, help="Email Id is required", required=True)
admin_put_args.add_argument("password", type=str, help="Password is required", required=True)

def token_check(f):
    @wraps(f)
    def request_check(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return {'message': 'This is not for Public!!!'}, 403
        try:
            data = jwt.decode(token, Config.SECRET_KEY, "HS256")
        except:
            return {'message': 'Login Required!!!'}, 403
        return f(*args, **kwargs)
    return request_check

class Teacher(Resource):
	@marshal_with(resource_fields)
	def get(self, emp_contact):
		try:
			result = Teachers.query.filter_by(emp_contact=emp_contact).first()
			if not result:
				abort(404, message="Could not find the MEMBER")

			return result
		except Exception as e:
			print(e)
			abort(404, message="Could not find the MEMBER")

	# @marshal_with(resource_fields)
	def post(self, emp_contact):
		args = teacher_post_args.parse_args()
		result = Teachers.query.filter_by(emp_contact=args['emp_contact']).first()
		
		if result:
			abort(409, message="Employee is already registered.")
		
		'''
		image_name is a function which takes the current filename of the image
		and renames it for current date, time and goes till milliseconds.
		'''
		bytes = request.json['image_base64']
		file_name = image_name()
		payment_order_id = 'sample1234samp'
		teacher = None
		try:
			teacher = Teachers(payment_order_id=payment_order_id,full_name=args['full_name'],college_type=args['college_type'], \
			kgid_hrms = args['kgid_hrms'], mode_of_recuritment_or_aided_date = args['mode_of_recuritment_or_aided_date'], \
			subject=args['subject'],qualification=args['qualification'],date_of_birth=args['date_of_birth'], \
			clg_street_name=args['clg_street_name'],clg_state=args['clg_state'],clg_city=args['clg_city'], \
			clg_country=args['clg_country'],clg_zip_code=args['clg_zip_code'],clg_code=args['clg_code'],clg_taluk=args['clg_taluk'], \
			emp_street_name=args['emp_street_name'],emp_state=args['emp_state'],emp_city=args['emp_city'], \
			emp_country=args['emp_country'],emp_zip_code=args['emp_zip_code'],emp_taluk=args['emp_taluk'], \
			emp_contact=args['emp_contact'],emp_alt_contact=args['emp_alt_contact'],issue_date=args['issue_date'], \
			joining_date=args['joining_date'],fee=args['fee'],transact_date=args['transact_date'],reciept_num=args['reciept_num'], \
			blood_grp=args['blood_grp'], img_name=file_name if bytes else None, is_active=False, clg_name=args['clg_name'])
			db.session.add(teacher)
			db.session.commit()
		except Exception as e:
			print(e)
			abort(500, message="Something Went Wrong ! Please contact ADMIN.")

		if bytes:
			upload_image(bytes, file_name)
				# return {'error': 'str(e)'}, 500
		
		try:
			merchant_transaction_id, merchant_user_id, payment_page_link = generate_payment(teacher.id, teacher.emp_contact)
			new_payment = Payment(
					teacher_id=teacher,
					amount=400,
					merchant_transaction_id=merchant_transaction_id,
					merchant_user_id=merchant_user_id,
					payment_page_link=payment_page_link
				)
			
			db.session.add(new_payment)
			db.session.commit()
				
			return {'data':{
				'payment_link':payment_page_link
			}}, 201
		except Exception as e:
			db.session.delete(teacher)
			db.session.commit()
			abort(500, message="Payment Creation Failed Please contact ADMIN.")

class Admin(Resource):
	@marshal_with(resource_fields)
	@token_check
	def get(self,emp_contact):
		
		
		if emp_contact:
			result = Teachers.query.filter_by(emp_contact=emp_contact).first()
		else:
			result = Teachers.query.all()
		


		if not result:
			abort(404, message="can't fetch the Datails.")
		
		return result
	
	@cross_origin(origin='*',headers=['Content-Type','Authorization'])
	@marshal_with(resource_fields)
	@token_check
	def put(self,emp_contact):
		args = teacher_put_args.parse_args()
		#print('args ok')
		result = Teachers.query.filter_by(emp_contact=emp_contact).first()
		if not result:
			abort(404, message="Member doesn't exist, cannot update")
		
		if args['full_name']:
			result.full_name = args['full_name']
		if args['content_subject']:
			result.subject = args['content_subject']
		if args['eligibility']:
			result.qualification = args['eligibility']
		if args['clg_street_name']:
			result.clg_street_name = args['clg_street_name']
		if args['clg_state']:
			result.clg_state = args['clg_state']
		if args['clg_city']:
			result.clg_city = args['clg_city']
		if args['clg_contry']:
			result.clg_country = args['clg_contry']
		if args['clg_zip_code']:
			result.clg_zip_code = args['clg_zip_code']
		if args['clg_code']:
			result.clg_code = args['clg_code']
		if args['emp_street_name']:
			result.emp_street_name = args['emp_street_name']
		if args['emp_state']:
			result.emp_state = args['emp_state']
		if args['emp_city']:
			result.emp_city = args['emp_city']
		if args['emp_contry']:
			result.emp_country = args['emp_contry']
		if args['emp_zip_code']:
			result.emp_zip_code = args['emp_zip_code']
		# if args['emp_contact']:
		# 	result.emp_contact = args['emp_contact']
		if args['emp_alt_contact']:
			result.emp_alt_contact = args['emp_alt_contact']
		if args['issue_date']:
			result.issue_date = args['issue_date']
		if args['joining_date']:
			result.joining_date = args['joining_date']
		if args['fee']:
			result.fee = args['fee']
		if args['transact_date']:
			result.transact_date = args['transact_date']
		if args['reciept_num']:
			result.reciept_num = args['reciept_num']
		if args['blood_grp']:
			result.blood_grp = args['blood_grp']
		
		db.session.commit()
		
		return result

	@token_check
	def delete(self,emp_contact):
		result = Teachers.query.filter_by(emp_contact=emp_contact).first()
		if not result:
			abort(404, message="Member doesn't exist, cannot delete")
		db.session.delete(result)
		db.session.commit()
		
		return '', 204

class AdminLog(Resource):
	@cross_origin(origin='*',headers=['Content-Type'])
	@marshal_with(log_in_fields)
	def post(self):
		#print(admin_post_args.parse_args())
		args = admin_post_args.parse_args()
		try:
			result = Admins.query.filter_by(email_id=args['email_id'],password=args['password']).first()
			if not result:
				abort(404, message="Account not found")
			else:
				token = jwt.encode({'email_id':args['email_id'], 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=20)}, Config.SECRET_KEY)
				result.password = token
				return result, 200
		except Exception as e:
			print(e)
			abort(400, message=e)
	
	
	@marshal_with(log_in_fields)
	def put(self):
		args = admin_put_args.parse_args()
		result = Admins.query.filter_by(email_id=args['email_id']).first()
		if result:
			# return result
			abort(409, message="Account is already registered")
		
		admin = Admins(full_name=args['full_name'],email_id=args['email_id'],password=args['password'])
		db.session.add(admin)
		db.session.commit()
		#print("Registered user ")
		return admin, 201
	
	# @marshal_with(log_in_fields)
	# def get(self):
	# 	result = Admins.query.all()
	# 	return result, 200

class TeachersData(Resource):

    @marshal_with(resource_fields)
    @token_check
    def test(teachers):
        return teachers
    
    def get(self):
        page = request.args.get('page', 1, int)
        per_page = request.args.get('per_page',10,int)
        district = request.args.get('district',"District", str)
        print(page,per_page,district)
        try:
            if district != "District":
                teachers = Teachers.query.filter(Teachers.clg_city == district).order_by(Teachers.id.desc()).paginate(page=page, per_page=per_page).items
            else:
                teachers = Teachers.query.order_by(Teachers.id.desc()).paginate(page=page, per_page=per_page).items
            if teachers:
                data = TeachersData.test(teachers)
                '''
                adding number_of_teachers at the end of the list 
                so that front end people will get the data 
                to generate the buttons dynamically for pagination
                '''
                
                number_of_teachers = {'number_of_teachers' : Teachers.query.count()}
                data.append(number_of_teachers)
                return data, 200
                
        except:	
        	return {'message' : 'data not present'}, 404

class UpdatePaySuccess(Resource):
	
	'''
	writing this class in order to update
	the payment_id and signature in the database
	'''

	def post(self):
		try:
			data = request.get_json()
			x_verify = request.headers.get('X-VERIFY')
			if request.content_type != 'application/json' or not x_verify:
				return {'error': 'Content-Type is different or X-VERIFY header is missing'}, 400
			
			if not is_valid_x_verify(x_verify, data['response']):
				return {'error': 'Invalid X-VERIFY value'}, 400
			
			if 'response' in data:
				encoded_response = data['response']
				decoded_response = base64.b64decode(encoded_response).decode('utf-8')
				response_data = json.loads(decoded_response)

				# Extract data from the decoded JSON
				status = response_data.get('success', False)
				merchant_transaction_id = response_data.get('data', {}).get('merchantTransactionId', '')
				# pd_transaction_id = response_data.get('data', {}).get('transactionId', '')
				# status_message = response_data
				# Update Payment status
				payment = Payment.query.filter_by(merchant_transaction_id=merchant_transaction_id).first()
				if payment:
					payment.status = status
					db.session.commit()
					# Create PaymentStatus record
					new_payment_status = PaymentStatus(
						merchant_transaction_id=merchant_transaction_id,
						payment_id=payment.id,
						status_response_obj=response_data
					)

					db.session.add(new_payment_status)
					db.session.commit()

					return {'message': 'Updated'}, 200
				else:
					return {'error': 'Invalid Merchant Transaction Id'}, 400
			else:
				return {'error': 'Invalid JSON payload'}, 400

		except Exception as e:
			print('here ..',e)
			return {'error': 'Please Contact Admin'}, 500
	
	@marshal_with(resource_fields)
	def convey(teacher):
		return teacher
	
	def get(self):
		merchant_transaction_id = request.args.get('merchant_transaction_id')
		if merchant_transaction_id:
			result = PaymentStatus.query.filter_by(merchant_transaction_id=merchant_transaction_id).first()
			if result and result.payment.status:
				teacher = Teachers.query.get(result.payment.teacher_id)
				teacher.img_name = AppConfig.BASE_URL+'image/'+teacher.img_name if teacher.img_name else None
				teacher.membership_id = result.payment.merchant_user_id
				return UpdatePaySuccess.convey(teacher), 200
			# teacher = Teachers.query.get(Payment.query.filter_by(merchant_transaction_id=merchant_transaction_id).first().teacher_id)
			# return UpdatePaySuccess.convey(teacher), 200
			return {'message':'Payment Not Succeess or Not Found'}, 404
		else:
			return {'message':'Provide Merchant Transaction Id'}, 400


class Check(Resource):
	def get(self):
		real_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
		return {"message": f"your ip: {real_ip}"}, 200
