from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)

# MySQL connection
connection = pymysql.connect(
    host='localhost',
    user='root',
    password='navya@123$',
    database='librarydb',
    cursorclass=pymysql.cursors.DictCursor
)

# ----------------------------
# Error handlers
# ----------------------------
@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "Resource not found"}), 404

@app.errorhandler(400)
def bad_request(e):
    return jsonify({"error": "Bad request"}), 400

# ----------------------------
# Helper validation
# ----------------------------
def validate_book_data(data):
    if not data or not isinstance(data, dict):
        return "Invalid JSON"
    title = data.get("title")
    author = data.get("author")
    if not title or not author:
        return "Fields 'title' and 'author' are required."
    return None

# ----------------------------
# Routes
# ----------------------------
@app.route('/')
def home():
    return jsonify({"message": "Flask PyMySQL API Running!"})

@app.route('/books', methods=['POST'])
def add_book():
    data = request.get_json(silent=True)
    error = validate_book_data(data)
    if error:
        return jsonify({"error": error}), 400

    with connection.cursor() as cursor:
        cursor.execute(
            "INSERT INTO books (title, author) VALUES (%s, %s)",
            (data["title"], data["author"])
        )
    connection.commit()
    return jsonify({"message": "Book added successfully"}), 201

@app.route('/books', methods=['GET'])
def get_books():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM books")
        books = cursor.fetchall()
    return jsonify(books)

@app.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM books WHERE id = %s", (book_id,))
        book = cursor.fetchone()
    if not book:
        return jsonify({"error": "Book not found"}), 404
    return jsonify(book)

@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    data = request.get_json(silent=True)
    error = validate_book_data(data)
    if error:
        return jsonify({"error": error}), 400

    with connection.cursor() as cursor:
        cursor.execute(
            "UPDATE books SET title=%s, author=%s WHERE id=%s",
            (data["title"], data["author"], book_id)
        )
    connection.commit()
    return jsonify({"message": "Book updated successfully"})

@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    with connection.cursor() as cursor:
        cursor.execute("DELETE FROM books WHERE id = %s", (book_id,))
    connection.commit()
    return jsonify({"message": "Book deleted successfully"})

if __name__ == '__main__':
    app.run(debug=True)
