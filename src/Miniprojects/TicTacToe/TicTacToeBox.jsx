import React, { useEffect } from 'react'
import "./tictac.css";

export default function TicTacToeBox({ 
  turnX, 
  setTurnX, 
  setHeader, 
  content, 
  setContent, 
  winner, 
  setWinner, 
  wonPattern, 
  setWonPattern, 
  count, 
  setCount,
  updateScore 
}) {
  const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  const checkWinner = () => {
    for (let arr of winPattern) {
      const [a, b, c] = arr;
      if (content[a] && content[b] && content[c] && 
          content[a] === content[b] && content[a] === content[c]) {
        setWinner(true);
        setWonPattern(arr);
        const winnerPlayer = content[a].toUpperCase();
        setHeader(`Winner: ${winnerPlayer}!`);
        updateScore(winnerPlayer);
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (!checkWinner() && count === 9) {
      setHeader("It's a Draw!");
      updateScore('Draw');
      setTimeout(() => {
        resetGame();
      }, 2000);
    }
  }, [content, count]);

  const resetGame = () => {
    setContent(["", "", "", "", "", "", "", "", ""]);
    setWinner(false);
    setWonPattern([]);
    setHeader("Tic Tac Toe Game");
    setCount(0);
    setTurnX(true);
  };

  const handleClick = (index) => {
    if (winner || content[index]) return;
    
    const newContent = [...content];
    newContent[index] = turnX ? "x" : "o";
    setContent(newContent);
    setTurnX(!turnX);
    setCount(count + 1);
  };

  const isWinningCell = (index) => {
    return wonPattern.includes(index);
  };

  const getCellClass = (index) => {
    let classes = "box";
    if (content[index]) {
      classes += ` ${content[index]}-cell`;
    }
    if (isWinningCell(index)) {
      classes += " winning-cell";
    }
    if (!content[index] && !winner) {
      classes += " hoverable";
    }
    return classes;
  };

  return (
    <div className='box-container'>
      <div className="game-board">
        <div className="row row1">
          <div 
            onClick={() => handleClick(0)} 
            className={getCellClass(0)}
          >
            {content[0]}
          </div>
          <div 
            onClick={() => handleClick(1)} 
            className={getCellClass(1)}
          >
            {content[1]}
          </div>
          <div 
            onClick={() => handleClick(2)} 
            className={getCellClass(2)}
          >
            {content[2]}
          </div>
        </div>
        <div className="row row2">
          <div 
            onClick={() => handleClick(3)} 
            className={getCellClass(3)}
          >
            {content[3]}
          </div>
          <div 
            onClick={() => handleClick(4)} 
            className={getCellClass(4)}
          >
            {content[4]}
          </div>
          <div 
            onClick={() => handleClick(5)} 
            className={getCellClass(5)}
          >
            {content[5]}
          </div>
        </div>
        <div className="row row3">
          <div 
            onClick={() => handleClick(6)} 
            className={getCellClass(6)}
          >
            {content[6]}
          </div>
          <div 
            onClick={() => handleClick(7)} 
            className={getCellClass(7)}
          >
            {content[7]}
          </div>
          <div 
            onClick={() => handleClick(8)} 
            className={getCellClass(8)}
          >
            {content[8]}
          </div>
        </div>
      </div>
    </div>
  );
}
