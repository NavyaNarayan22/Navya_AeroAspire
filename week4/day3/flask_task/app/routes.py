from flask import Blueprint, request, jsonify, current_app
from .models import Task
from . import db
from sqlalchemy import or_, and_
from datetime import datetime

bp = Blueprint("main", __name__, url_prefix="/api")

def parse_iso_date(param_value):
    try:
        return datetime.fromisoformat(param_value)
    except Exception:
        return None

@bp.route("/task", methods=["GET"])
def list_tasks():
    """
    Query params:
      - status: filter by status (e.g., todo,in_progress,done) or comma-separated list
      - due_before: ISO datetime string, include tasks with due_date <= due_before
      - due_after: ISO datetime string, include tasks with due_date >= due_after
      - q: text search on title (case-insensitive, substring)
      - page: page number (1-based)
      - per_page: items per page
    """
    q = request.args.get("q", type=str)
    status = request.args.get("status", type=str)
    due_before = request.args.get("due_before", type=str)
    due_after = request.args.get("due_after", type=str)
    page = request.args.get("page", default=1, type=int)
    per_page = request.args.get("per_page", default=20, type=int)
    per_page = min(per_page, 100)  # cap page size

    query = Task.query

    # Filter by status (support comma-separated)
    if status:
        statuses = [s.strip() for s in status.split(",") if s.strip()]
        if statuses:
            query = query.filter(Task.status.in_(statuses))

    # Filter by due_date range
    if due_before:
        dt = parse_iso_date(due_before)
        if dt:
            query = query.filter(Task.due_date <= dt)
    if due_after:
        dt = parse_iso_date(due_after)
        if dt:
            query = query.filter(Task.due_date >= dt)

    # Simple search by title (case-insensitive substring)
    if q:
        # Use ilike for case-insensitive search (works with MySQL when using lower()/collation)
        pattern = f"%{q}%"
        query = query.filter(Task.title.ilike(pattern))

    # Optional: sorting (example: by due_date then created_at)
    sort = request.args.get("sort", default="due_date")
    if sort == "due_date":
        query = query.order_by(Task.due_date.asc().nulls_last(), Task.created_at.desc())
    elif sort == "-due_date":
        query = query.order_by(Task.due_date.desc().nulls_last(), Task.created_at.desc())
    else:
        query = query.order_by(Task.created_at.desc())

    # Pagination using Flask-SQLAlchemy paginate (returns Pagination object)
    pag = query.paginate(page=page, per_page=per_page, error_out=False)

    result = {
        "items": [t.to_dict() for t in pag.items],
        "page": pag.page,
        "per_page": pag.per_page,
        "total": pag.total,
        "pages": pag.pages,
        "has_next": pag.has_next,
        "has_prev": pag.has_prev
    }
    return jsonify(result)
