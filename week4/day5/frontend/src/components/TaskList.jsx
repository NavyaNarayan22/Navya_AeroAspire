import React, { useEffect, useState } from "react";
import { getTasks, addTask } from "../services/api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");


  const fetchTasks = async () => {
    const data = await getTasks();
    if (data.error) {
      setError(data.error);
    } else if (data.message === "No tasks found") {
      setError("No tasks yet — add one!");
      setTasks([]);
    } else {
      setTasks(data);
      setError("");
    }
  };

  const handleAdd = async () => {
  if (!title.trim()) {
    setError("Task title cannot be blank!");
    return;
  }

  const res = await addTask({ title, description });
  if (res.error) {
    setError(res.error);
  } else {
    setTitle("");
    setDescription(""); 
    fetchTasks();
  }
};


  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Tasks</h2>
      <input
        type="text"
        value={title}
        placeholder="Enter task title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        placeholder="Enter task description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleAdd}>Add Task</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
  {tasks.map((t) => (
    <li key={t.id}>
      <strong>{t.title}</strong>: {t.description || "No description"}
    </li>
  ))}
</ul>
    </div>
  );
};

export default TaskList;