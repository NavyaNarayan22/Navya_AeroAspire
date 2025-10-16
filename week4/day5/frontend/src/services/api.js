import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export const getTasks = async () => {
  try {
    const res = await axios.get(`${API_URL}/tasks`);
    return res.data;
  } catch (err) {
    console.error("Error fetching tasks:", err);
    return { error: "Unable to connect to database" };
  }
};

export const addTask = async (task) => {
  try {
    const res = await axios.post(`${API_URL}/tasks`, task);
    return res.data;
  } catch (err) {
    console.error("Error adding task:", err);
    return { error: "Database write failed" };
  }
};
