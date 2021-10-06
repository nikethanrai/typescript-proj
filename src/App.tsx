import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Preferences from "./components/Preferences/Preferences";
import Home from "./components/home";
import "./App.css";
const App: React.FC = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <Home setToken={setToken} />;
  }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
