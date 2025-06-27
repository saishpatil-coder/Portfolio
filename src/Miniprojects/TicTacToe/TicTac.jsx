import React, { useState } from 'react'
import "./tictac.css";
import TicTacToeBox from './TicTacToeBox';

export default function TicTac() {
  const [winner, setWinner] = useState(false);
  const [wonPattern, setWonPattern] = useState([]);
  const [header, setHeader] = useState("Tic Tac Toe Game");
  const [content, setContent] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turnX, setTurnX] = useState(true);
  const [count, setCount] = useState(0);
  const [scores, setScores] = useState({ X: 0, O: 0, Draw: 0 });

  const resetGame = () => {
    setContent(["", "", "", "", "", "", "", "", ""]);
    setWinner(false);
    setWonPattern([]);
    setHeader("Tic Tac Toe Game");
    setCount(0);
    setTurnX(true);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, Draw: 0 });
  };

  const updateScore = (winner) => {
    if (winner === 'X' || winner === 'O') {
      setScores(prev => ({ ...prev, [winner]: prev[winner] + 1 }));
    } else if (winner === 'Draw') {
      setScores(prev => ({ ...prev, Draw: prev.Draw + 1 }));
    }
  };

  return (
    <div className='game-container'>
      {/* Header */}
      <div className="game-header">
        <h1 className="game-title">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Tic Tac Toe
          </span>
        </h1>
        <p className="game-subtitle">Classic game with modern design</p>
      </div>

      {/* Score Board */}
      <div className="score-board">
        <div className="score-item">
          <span className="score-label">Player X</span>
          <span className="score-value x-score">{scores.X}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Draws</span>
          <span className="score-value draw-score">{scores.Draw}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Player O</span>
          <span className="score-value o-score">{scores.O}</span>
        </div>
      </div>

      {/* Game Status */}
      <div className="game-status">
        <h2 className={`status-text ${winner ? 'winner' : 'playing'}`}>
          {header}
        </h2>
        {!winner && count < 9 && (
          <div className="turn-indicator">
            <span className={`turn-player ${turnX ? 'x-turn' : 'o-turn'}`}>
              {turnX ? 'X' : 'O'}'s Turn
            </span>
          </div>
        )}
      </div>

      {/* Game Board */}
      <TicTacToeBox 
        turnX={turnX} 
        setTurnX={setTurnX} 
        setHeader={setHeader} 
        content={content} 
        setContent={setContent} 
        winner={winner} 
        setWinner={setWinner} 
        wonPattern={wonPattern} 
        setWonPattern={setWonPattern} 
        count={count} 
        setCount={setCount}
        updateScore={updateScore}
      />
      
      {/* Action Buttons */}
      <div className="game-actions">
        <button 
          onClick={resetGame}
          className="reset-btn"
          title="Start a new game"
        >
          New Game
        </button>
        <button 
          onClick={resetScores}
          className="reset-scores-btn"
          title="Reset all scores"
        >
          Reset Scores
        </button>
      </div>
    </div>
  )
}
