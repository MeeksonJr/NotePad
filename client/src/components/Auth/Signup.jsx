import React, { useState } from 'react';

const Signup = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.username === username)) {
      setError('Username already exists');
      return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', username);
    onLogin(); // Call to update the parent App component's state
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
