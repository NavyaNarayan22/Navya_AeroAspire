 Flask Task API (v1) 

A modern Flask REST API with versioning, OpenAPI (Swagger) docs, full CRUD, smart error handling, CORS, and input validation. Easily consume from React, Postman, or browser.

---

## Features
- All endpoints are versioned under `/api/v1`
- Endpoints: `GET /tasks`, `POST /tasks`, `PUT /tasks/<id>`, `DELETE /tasks/<id>` (with optional `?completed=true`)
- Returns JSON errors (400, 404)
- Validates inputs: non-empty strings, correct JSON only
- Built-in CORS for frontend/browser support
- Interactive Swagger UI docs at `/apidocs`

---

## Setup

1. **Install dependencies**
    ```
    pip install -r requirements.txt
    ```

2. **Run the server**
    ```
    python app.py
    ```

3. **Docs & Testing UI**
    - Go to [http://localhost:5000/apidocs](http://localhost:5000/apidocs)

---

## Example Usage

**Get tasks (optionally filter):**
GET /api/v1/tasks?completed=true



**Add a task:**
curl -X POST http://127.0.0.1:5000/api/v1/tasks
-H "Content-Type: application/json"
-d '{"title": "Do homework"}'



**Update a task:**
curl -X PUT http://127.0.0.1:5000/api/v1/tasks/1
-H "Content-Type: application/json"
-d '{"title": "New title", "completed": true}'



**Delete a task:**
curl -X DELETE http://127.0.0.1:5000/api/v1/tasks/2



**React Example:**
fetch('http://localhost:5000/api/v1/tasks', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title: 'Read book' }),
})
.then(res => res.json())
.then(console.log);



---

## API Error Examples

- **400 Bad Request:** `{ "error": "Field 'title' is required." }`
- **404 Not Found:** `{ "error": "Resource not found" }`

---

## OpenAPI Spec Example (`static/openapi.yaml`)

openapi: 3.0.3
info:
title: Flask Task API
version: "1.0.0"
description: Versioned base API with CRUD and error handling.
