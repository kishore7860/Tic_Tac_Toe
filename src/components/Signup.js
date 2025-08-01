import { useState } from "react";


function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSignup(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (res.ok) {
      alert('Signup successful!');
    } else {
      alert(data.message);
    }
  }

  return (
    <form onSubmit={handleSignup}>
      <input value={username} onChange={e=>setUsername(e.target.value)} placeholder='Username' />
      <input value={password} type="password" onChange={e=>setPassword(e.target.value)} placeholder='Password' />
      <button type="submit">Sign Up</button>
    </form>
  );
}
export default Signup