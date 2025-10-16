from flask import Blueprint, jsonify, request, abort

bp = Blueprint('main', __name__)

# Dummy in-memory "database"
# This is just a list of dicts. It resets whenever the process restarts.
_tasks = []
_next_id = 1

@bp.route('/', methods=['GET'])
def hello():
    return jsonify({"message": "🌈 Hello, world! This Flask app is bright and alive."})

@bp.route('/tasks', methods=['GET'])
def list_tasks():
    """
    GET /tasks
    Returns a JSON list of tasks.
    """
    return jsonify(_tasks)

@bp.route('/tasks', methods=['POST'])
def create_task():
    """
    POST /tasks
    Expected JSON body: { "title": "Do something", "done": false }
    """
    global _next_id
    data = request.get_json(silent=True)
    if not data or 'title' not in data:
        abort(400, description="JSON body required with a 'title' field.")

    task = {
        "id": _next_id,
        "title": data['title'],
        "done": bool(data.get('done', False))
    }
    _tasks.append(task)
    _next_id += 1
    return jsonify(task), 201
