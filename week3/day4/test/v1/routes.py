from flask import Blueprint, jsonify, request

api_v1 = Blueprint('api_v1', __name__)

@api_v1.route('/test', methods=['GET'])
def test():
    """Test endpoint"""
    return jsonify({"message": "API v1 is working!"})

@api_v1.route('/echo', methods=['POST'])
def echo():
    """Echo endpoint"""
    data = request.json
    return jsonify({"you_sent": data})
