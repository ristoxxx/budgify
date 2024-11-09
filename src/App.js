import logo from './LogoBudgify.svg';
import './App.css';
import Login from "./Login";
import React, { useState } from "react";



function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
  };

  return (
      <div className="App">

      {isAuthenticated ? (
        <>
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
