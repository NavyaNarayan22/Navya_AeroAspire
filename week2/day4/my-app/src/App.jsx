import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import About from "./pages/About";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
