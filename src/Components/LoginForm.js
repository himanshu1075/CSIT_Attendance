import React, { useState } from 'react';
import FalseCredentials from './FalseCredentials';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'correctUsername' && password === 'correctPassword') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {loggedIn ? <p>Welcome back, {username}!</p> : <FalseCredentials />}
    </div>
  );
}

export default LoginForm;
