import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Board from "./components/Board";
import Login from './components/login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Board />} />
        <Route path="/leaderboard" element={<div>Leaderboard Coming Soon</div>} />
        <Route path="/multiplayer" element={<div>Multiplayer Coming Soon</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quit" element={<div>Thanks for playing!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
