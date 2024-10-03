from flask import Flask, send_from_directory, send_file, url_for
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

import os
from .config import AppConfig

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
api = Api()

def create_app():
    app = Flask(__name__, static_url_path='/static')
    app.config.from_object('app.config.Config')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    
    # Set up CORS
    CORS(app, resources={"/*": {"origins": "*"}})

    # Register resources
    from app.resources import Teacher, Admin, AdminLog, TeachersData, UpdatePaySuccess, Check
    api.add_resource(Teacher, "/register/success/<int:emp_contact>")
    api.add_resource(Admin, "/admin/dashboard/<int:emp_contact>")
    api.add_resource(AdminLog, "/login")
    api.add_resource(TeachersData, "/admin/teachers")
    api.add_resource(UpdatePaySuccess, "/paymentstatus")
    api.add_resource(Check, "/getIp")

    # api.add_resource(get_image, "/images/<filename>")

    api.init_app(app)

    # for images
    @app.route('/image/<filename>')
    def serve_image(filename):
        image_path = os.path.join(
            os.path.dirname(os.path.abspath(__file__)),
            '..',
            AppConfig.IMG_UPLOAD_FOLDER,
            filename)
        if os.path.exists(image_path):
            return send_file(image_path, mimetype='image/png')
        else:
            print(image_path)
            return {'error': 'Image not found'}, 404

    return app
