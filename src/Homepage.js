import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import './components/Board';
import './Homepage.css';

function Homepage() {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className="logo">Tic-Tac-Toe</div>
        <nav className="nav-actions">
          {auth.isAuthenticated ? (
            <>
              <span className="nav-link">Hello, {auth.username}</span>
              <button onClick={logout} className="nav-link">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </>
          )}
        </nav>
      </header>

      <main className="homepage-main">
        <button className="menu-btn"><Link to="/game">New Game</Link></button>
        <button className="menu-btn"><Link to="/leaderboard">Leaderboard</Link></button>
        <button className="menu-btn"><Link to="/multiplayer">Multiplayer</Link></button>
        <button className="menu-btn"><Link to="/quit">Quit</Link></button>
      </main>
    </div>
  );
}

export default Homepage;
