import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './login.css';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
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
      login(data.token, data.username);
      navigate('/');
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
