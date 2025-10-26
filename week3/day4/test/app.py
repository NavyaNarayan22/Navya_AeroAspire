from flask import Flask, jsonify
from flask_swagger_ui import get_swaggerui_blueprint
from v1.routes import api_v1

app = Flask(__name__)


app.register_blueprint(api_v1, url_prefix='/api/v1')


SWAGGER_URL = '/apidocs'
API_URL = '/static/openapi.yaml'  
swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={'app_name': "My API v1"}
)
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to My API v1!"})

if __name__ == "__main__":
    app.run(debug=True)
