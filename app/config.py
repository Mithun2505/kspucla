class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql://surya:password@1@localhost/teachers_db'
    SECRET_KEY = 'dontreveal'

class PGConfig:
    salt_key = "c27f072c-3fad-4ccf-95ac-4940f7bfad7d"
    salt_index = "1"
    # env = Env.SANDBOX # Change to Env.PROD when you go live
    payload_constants = {
        "merchantId": "PGTESTPAYUAT73",
        "redirectUrl": "https://kspuclaassociationblr.org/id-card.html?transactionId=",
        "redirectMode": "REDIRECT",
        "callbackUrl": "https://api.kspuclaassociationblr.org/paymentstatus",
        "paymentInstrument": {
            "type": "PAY_PAGE"
        }
    }
    test_url = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
    prod_url = "https://api.phonepe.com/apis/hermes/pg/v1/pay"

class AppConfig:
    BASE_URL = 'https://api.kspuclaassociationblr.org/'
    IMG_UPLOAD_FOLDER = 'uploads'