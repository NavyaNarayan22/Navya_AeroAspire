# Flask Task API (v1) – Advanced

A versioned Flask API with OpenAPI docs, featuring strong input validation, error handling, CORS for frontend integration, and full CRUD operations.

## Features

- **API Versioning:** All endpoints under `/api/v1`
- **CRUD for Tasks:** Add, update, delete, list tasks
- **Filtering:** GET `/tasks?completed=true`
- **Error Handling:** Cleaner JSON errors for 400/404
- **Input Validation:** Rejects empty/invalid requests
- **CORS Enabled:** Plug-and-play with React frontend
- **Tested With:** React fetch, Postman, browser

## Error Handling & Input Validation

- Returns JSON `{ "error": "..." }` with correct HTTP status for bad input or missing resource.
- Ensures `"title"` is a non-empty string and incoming data is valid JSON.

## Enabling CORS

CORS is enabled, so you can make calls directly from React or any frontend app.

## How to Use From React

Example using `fetch` in a React component:

// Get all tasks (optionally filter)
fetch('http://localhost:5000/api/v1/tasks?completed=true')
.then(res => res.json())
.then(data => console.log(data));

// Add a task
fetch('http://localhost:5000/api/v1/tasks', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title: 'Do homework', done: false })
}).then(res => res.json())
.then(data => console.log(data));


## How to Test With Postman

- List tasks with filter:  
  `GET http://localhost:5000/api/v1/tasks?completed=false`
- Add task:  
  `POST http://localhost:5000/api/v1/tasks`
- Update task:  
  `PUT http://localhost:5000/api/v1/tasks/1`
- Delete task:  
  `DELETE http://localhost:5000/api/v1/tasks/1`

## How to Test From Browser

- View all tasks in browser:  
  `http://localhost:5000/api/v1/tasks`
- Invalid URLs (e.g. `/invalid`) will return a JSON 404.

## Example Error Responses

- **404 Not Found**  
{ "error": "Resource not found" }


- **400 Bad Request**  
{ "error": "Field 'title' is required." }



## Project Setup

### 1. Install Requirements

pip install -r requirements.txt



### 2. Run the App

python app.py


### 3. Browse Swagger UI

Go to [http://localhost:5000/apidocs](http://localhost:5000/apidocs)

---

MIT License
