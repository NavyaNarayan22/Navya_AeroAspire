import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function NavBar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="navbar">
      <div className="brand">My Tasks</div>
      <div className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/add">Add Task</NavLink>
        <NavLink to="/about">About</NavLink>
        <button onClick={toggle} aria-label="Toggle theme" className="theme-btn">
          {theme === "light" ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
