from flask import Flask, jsonify
from mysql.connector import connect, Error
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

DB_HOST = os.getenv("DB_HOST", "mysql-db")
DB_USER = os.getenv("DB_USER", "navya")
DB_PASSWORD = os.getenv("DB_PASSWORD", "navya@123$")
DB_NAME = os.getenv("DB_NAME", "librarydb")

@app.route("/api/test")
def test_db():
    try:
        with connect(
            host=DB_HOST,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME
        ) as connection:
            return jsonify({"message": "DB connected successfully!"})
    except Error as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
