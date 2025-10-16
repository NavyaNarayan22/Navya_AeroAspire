from flask import Flask, request, jsonify, abort

app = Flask(__name__)

tasks = [
    {"id": 1, "title": "Buy groceries", "completed": False},
    {"id": 2, "title": "Clean the room", "completed": True},
]


@app.route("/tasks", methods=["GET"])
def get_tasks():
    completed_filter = request.args.get("completed")
    if completed_filter is not None:
        # Convert string 'true'/'false' to boolean
        is_completed = completed_filter.lower() == "true"
        filtered = [t for t in tasks if t["completed"] == is_completed]
        return jsonify(filtered)
    return jsonify(tasks)


@app.route("/tasks", methods=["POST"])
def add_task():
    data = request.get_json()
    if not data or "title" not in data:
        abort(400, "Missing 'title' field")

    new_task = {
        "id": tasks[-1]["id"] + 1 if tasks else 1,
        "title": data["title"],
        "completed": data.get("completed", False),
    }
    tasks.append(new_task)
    return jsonify(new_task), 201


@app.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    task = next((t for t in tasks if t["id"] == task_id), None)
    if not task:
        abort(404, f"Task with id {task_id} not found")

    data = request.get_json()
    task["title"] = data.get("title", task["title"])
    task["completed"] = data.get("completed", task["completed"])
    return jsonify(task)


@app.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    global tasks
    tasks = [t for t in tasks if t["id"] != task_id]
    return jsonify({"message": f"Task {task_id} deleted successfully"})


@app.route("/")
def home():
    return "✅ Flask Task API is running!"

if __name__ == "__main__":
    app.run(debug=True)
