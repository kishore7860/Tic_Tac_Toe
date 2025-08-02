import Square from "./Square";
import { useState } from "react";
import "../App.css"

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);

    function handleClick(i) {
        if (squares[i] || winner) return;
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? "X" : "O";
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    function renderSquare(i) {
        return (
            <Square value={squares[i]} onClick={() => handleClick(i)} />
        );
    }

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if (squares.every(Boolean)) {
        status = "Draw!";
    } else if (squares.every(square => square === null)){
        status = "First Move: X"
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className="Board">
            <h1>Tic Tac Toe</h1>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
            <button className="restart-button" onClick={() => {
                setSquares(Array(9).fill(null));
                setXIsNext(true);
            }}>Restart Game</button>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;
