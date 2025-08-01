import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Board from "./components/Board";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Board />} />
        <Route path="/leaderboard" element={<div>Leaderboard Coming Soon</div>} />
        <Route path="/multiplayer" element={<div>Multiplayer Coming Soon</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
        <Route path="/quit" element={<div>Thanks for playing!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
