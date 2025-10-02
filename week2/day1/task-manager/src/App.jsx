import { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, List, ListItem } from "@mui/material";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // Dummy fetch effect
  useEffect(() => {
    console.log("Fetching tasks... (dummy effect)");
  }, []);

  const handleAddTask = () => {
    // Validation checks
    if (!task.trim()) {
      setError("Task is required");
      return;
    }
    if (task.length < 3) {
      setError("Task must be at least 3 characters long");
      return;
    }

    // Add new task
    setTasks([...tasks, task]);
    setTask(""); // clear input
    setError(""); // clear error
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>

      {/* Input field */}
      <TextField
        label="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        error={!!error}
        helperText={error}
        fullWidth
        margin="normal"
      />

      {/* Add button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        style={{ marginBottom: "1rem" }}
      >
        Add Task
      </Button>

      {/* Task List */}
      <List>
        {tasks.map((t, i) => (
          <ListItem key={i}>{t}</ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;