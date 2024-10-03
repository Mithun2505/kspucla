from .config import AppConfig

import datetime
import os
import base64
from io import BytesIO
from PIL import Image

os.makedirs(AppConfig.IMG_UPLOAD_FOLDER, exist_ok=True)

def image_name():
    return f"{datetime.datetime.now().strftime('%Y%m%d%H%M%S%f')}.png"

def upload_image(image_in_bytes, file_name):
    try:
        image_data = base64.b64decode(image_in_bytes)
        image = Image.open(BytesIO(image_data))
        image_path = os.path.join(AppConfig.IMG_UPLOAD_FOLDER, file_name)
        image.save(image_path)
        return True
    except Exception as e:
        print(e)
        return False

class CustomException(Exception):
    def __init__(self, m):
        self.message = m
    def __str__(self):
        return self.message
