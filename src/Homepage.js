import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"; // (Create this .css file for styles)

function Homepage() {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className="logo">Tic-Tac-Toe</div>
        <nav className="nav-actions">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </nav>
      </header>
      <main className="homepage-main">
        <button className="menu-btn">
          <Link to="/game">New Game</Link>
        </button>
        <button className="menu-btn">
          <Link to="/leaderboard">Leaderboard</Link>
        </button>
        <button className="menu-btn">
          <Link to="/multiplayer">Multiplayer</Link>
        </button>
        <button className="menu-btn">
          <Link to="/quit">Quit</Link>
        </button>
      </main>
    </div>
  );
}

export default Homepage;
