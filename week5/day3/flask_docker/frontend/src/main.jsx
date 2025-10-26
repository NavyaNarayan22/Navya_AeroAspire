import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/test`)
      .then(res => res.json())
      .then(data => setMsg(data.message || data.error))
      .catch(err => setMsg(err.message));
  }, []);

  return (
    <div>
      <h1>React + Flask + MySQL</h1>
      <p>{msg}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
