import React, { useState } from 'react';
import { login, register } from './services/authService';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(null);

  const handleAuth = async () => {
    try {
      const authFunction = isRegistering ? register : login;
      const result = await authFunction(email, password);
      if (result.token) {
        onLogin(email);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleAuth}>{isRegistering ? "Register" : "Login"}</button>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Switch to Login" : "Switch to Register"}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;