import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './signup.css';

function Signup() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
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
      login(data.token); // Optional: You can auto-login
      navigate('/');
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="input-group">
          <label>Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
