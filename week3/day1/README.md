# Flask Versioned API with Swagger UI

A simple Flask project demonstrating API versioning (`v1`), OpenAPI/Swagger documentation, and local testing. Includes an example `openapi.yaml` spec, interactive Swagger UI, and example endpoints.

## Project Structure

project_root/
│
├── static/
│ └── openapi.yaml # OpenAPI spec
│
├── v1/
│ ├── routes.py # Version 1 API endpoints
│ └── pycache/
│
├── app.py # Main app and registration
├── requirements.txt # Dependencies

## Features

- **Versioned API**: All endpoints are prefixed with `/api/v1`
- **Swagger UI**: Interactive API documentation and testing at `/apidocs`
- **OpenAPI Spec**: Edit static `openapi.yaml` for your API docs

## Getting Started

### 1. Install Dependencies

pip install -r requirements.txt


### 2. Start the Development Server

python app.py

### 3. Open API Docs in Browser

Visit [http://localhost:5000/apidocs](http://localhost:5000/apidocs) to view and test your API via Swagger UI.

## Example Endpoints

- `GET /api/v1/test`  
  Test endpoint: returns a simple JSON message.

- `POST /api/v1/echo`  
  Echo endpoint: send JSON, receive the same JSON in the response.

## Customization

- **Change Swagger UI Theme:**  
  You can override the default Swagger UI styles by adding and linking a custom CSS file in your `static/` folder.

- **Edit API spec:**  
  Modify `static/openapi.yaml` to update your documented endpoints and models.
