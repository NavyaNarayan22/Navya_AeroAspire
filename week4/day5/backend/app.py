from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import SQLAlchemyError
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# DB configuration
user = os.environ.get('DB_USER', 'root')
pw = os.environ.get('DB_PASS', 'navya%40123%24')
host = os.environ.get('DB_HOST', '127.0.0.1')
db_name = 'myapp_db'

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{user}:{pw}@{host}/{db_name}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Task model
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))

with app.app_context():
    db.create_all()

# Routes
@app.route('/tasks', methods=['GET'])
def get_tasks():
    try:
        tasks = Task.query.all()
        if not tasks:
            return jsonify({"message": "No tasks found"}), 200
        return jsonify([{"id": t.id, "title": t.title, "description": t.description} for t in tasks])
    except SQLAlchemyError as e:
        return jsonify({"error": "Database error", "details": str(e)}), 500

@app.route('/tasks', methods=['POST'])
def add_task():
    try:
        data = request.json
        if not data.get("title"):
            return jsonify({"error": "Title cannot be blank"}), 400
        
        # Read description (optional)
        description = data.get("description", "")
        
        task = Task(title=data["title"], description=description)
        db.session.add(task)
        db.session.commit()
        return jsonify({"message": "Task added successfully"}), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({"error": "Database write failed", "details": str(e)}), 500

@app.route('/')
def home():
    return "Flask API is running!"

if __name__ == '__main__':
    app.run(debug=True)
