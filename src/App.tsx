import React, { useState } from "react";
import Home from "./components/home";
import Button from "react-bootstrap/Button";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details: any) => {
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details dont match");
    }
  };
  const Logout = (details: any) => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="Welcome" style={{ textAlign: "center" }}>
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <Button onClick={Logout} variant="primary">
            Logout
          </Button>
        </div>
      ) : (
        <Home Login={Login} error={error} />
      )}
    </div>
  );
}
export default App;
