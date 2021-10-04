import React, { useState } from "react";
import Home from "./components/home";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details: any) => {};
  const Logout = (details: any) => {};

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="Welcome">
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <Home Login={Login} error={error} />
      )}
    </div>
  );
}
export default App;