import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Register with Email: ${email}, Password: ${password}`);
    // Integrate with backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
}