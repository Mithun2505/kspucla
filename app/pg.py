import base64
import json
import hashlib
import requests
import uuid

from .config import PGConfig
from .utils import CustomException

def generate_payment(teacher_id,mobile_number):
  try:
    merchant_transaction_id = str(uuid.uuid4())[:-2]
    merchant_user_id = f"KSPUCLA{1000+teacher_id}"

    payload = {
      **PGConfig.payload_constants,
      "redirectUrl":PGConfig.payload_constants['redirectUrl']+merchant_transaction_id,
      "merchantTransactionId": merchant_transaction_id,
      "merchantUserId": merchant_user_id,
      "amount": 100,
      "mobileNumber": mobile_number
    }

    json_data = json.dumps(payload)
    base64_payload = base64.b64encode(json_data.encode('utf-8')).decode('utf-8')
    x_verify = hashlib.sha256()
    x_verify.update((base64_payload + "/pg/v1/pay" + PGConfig.salt_key).encode('utf-8'))
    x_verify = x_verify.hexdigest()

    body = {
        'request': base64_payload
    }

    headers = {
      'Content-Type': 'application/json',
      'X-VERIFY': x_verify+"###"+PGConfig.salt_index
    }
    
    response = requests.post(PGConfig.test_url, headers=headers, json=body)
    # response_code = 429
    # response_json = {'success': False, 'code': 'TOO_MANY_REQUESTS', 'message': 'Too many requests. Please try again.', 'data': {}}
    if response.status_code == 200:
      data = response.json()
      redirect_info = data.get('data', {}).get('instrumentResponse', {}).get('redirectInfo', {})
      payment_page_link = redirect_info.get('url', '')
      return merchant_transaction_id, merchant_user_id, payment_page_link
    raise (response.status_code,response.json())
  except Exception as e:
    print('here ..',e)
    raise CustomException(e)


def is_valid_x_verify(x_verify, base64response):
    base_string = base64response + PGConfig.salt_key

    # Compute the SHA256 hash of the base string
    hash_object = hashlib.sha256(base_string.encode('utf-8'))
    hash_digest = hash_object.hexdigest()
    expected_x_verify = f"{hash_digest}###{PGConfig.salt_index}"
    return x_verify == expected_x_verify
