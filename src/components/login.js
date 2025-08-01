import { useState } from "react";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      alert('Login successful!');
      // set auth context, redirect, etc.
    } else {
      alert(data.message);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input value={username} onChange={e=>setUsername(e.target.value)} placeholder='Username' />
      <input value={password} type="password" onChange={e=>setPassword(e.target.value)} placeholder='Password' />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login