# React Task Manager (Vite, MUI, Router, Persistence)

A modern Task Manager web app built with React, Vite, Material UI, and React Router. Features persistent tasks via localStorage, navigation with routing, responsive MUI UI, theming, and icons.

***

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Technical Overview](#technical-overview)
  - [Routing](#routing)
  - [State Persistence](#state-persistence)
  - [UI & Theming](#ui--theming)
- [Sample Code](#sample-code)
- [How to Run](#how-to-run)
- [Possible Extensions](#possible-extensions)

***

## Features

- **Navigation Bar:** Links for Home, Add Task, About pages.
- **Routing:** Dynamic page switching via React Router (`react-router-dom`).
- **Task Management:** Create, view, check, and delete tasks.
- **State Persistence:** Tasks auto-save to localStorage & reload on app mount.
- **Material UI:** Polished design, theming (light/dark), and responsive layout.
- **Controlled Forms & Validation:** Add tasks with form checks.
- **Icons:** Enhance UI with Material UI Icons.
- **Component Architecture:** Reusable TaskCard, Header, NavBar, etc.

***

## Screenshots
<img width="1920" height="1080" alt="Screenshot (237)" src="https://github.com/user-attachments/assets/90545f9d-4260-46fd-9ce0-9ff606436738" />


### 1. Scaffold with Vite + React

```sh
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

### 2. Install Dependencies

```sh
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom
```

***

## Folder Structure

```
my-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskCard.js
│   │   ├── NavBar.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── AddTask.js
│   │   └── About.js
│   ├── App.js
│   ├── main.jsx
│   └── ...
├── package.json
└── ...
```

***

## Technical Overview

### Routing

- Uses `react-router-dom` for client-side navigation.
- Example routes: `/` (Home: task list), `/add` (Add Task form), `/about` (About app/developer).
- `<NavBar />` provides links and active style.

### State Persistence

- Tasks are stored in localStorage.
- On app mount (`useEffect`), load tasks from localStorage.
- After each add/remove, update localStorage automatically.

### UI & Theming

- Uses MUI's `ThemeProvider`—custom colors and palettes available.
- Optional toggle for light/dark mode.
- Components use MUI Cards, Typography, Buttons, Icons.
- Responsive design and hover/focus effects.

***

## Sample Code

### Routing Example (`App.js`)

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Persist State Example (`Home.js`)

```jsx
import { useState, useEffect } from "react";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Task display/remove logic ...
}
```

### Navigation Bar Example (`NavBar.js`)

```jsx
import { AppBar, Toolbar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddTaskIcon from "@mui/icons-material/AddTask";
import InfoIcon from "@mui/icons-material/Info";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={NavLink} to="/" startIcon={<HomeIcon />}>Home</Button>
        <Button color="inherit" component={NavLink} to="/add" startIcon={<AddTaskIcon />}>Add Task</Button>
        <Button color="inherit" component={NavLink} to="/about" startIcon={<InfoIcon />}>About</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
```

***

## How to Run

```sh
npm run dev
```
Go to [http://localhost:5173](http://localhost:5173) to use the app.

***

## Possible Extensions

- Edit tasks & change completion status
- Filter/search tasks
- Sort by due date or priority
- User authentication and multi-user support
- Backend API for data persistence (optional)
- More MUI icon usage, tooltips, and animations

rDw8y17XxsRL7%2Brx8N%2FuBpizzt%2BPAs36NDot7oSyrKRFOLDr%2BAR%2BlLZSSnWxAoH2C4Ug3IOuPXscRca8m%2F1uO3Meo8u3WiIQSR%2FYQdsC12gSzhjGMdw%3D%3D&Expires=1759425253)
