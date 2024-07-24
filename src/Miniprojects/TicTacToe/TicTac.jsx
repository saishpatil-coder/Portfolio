import React, { useState } from 'react'
import "./tictac.css";
import TicTacToeBox from './TicTacToeBox';
export default function TicTac() {
  const[winner ,setWinner] = useState(false);
  const [wonPattern , setWonPattern] = useState([]);
    const [header , setHeader] = useState("Tic Tac Toe Game");
    let [content , setContent] = useState(["","","","","","","",""]);
    const [turnX , setTurnX] = useState(true);
    const [count ,setCount]  = useState(0);
  return (
    <div className='game-container'>
        <h1>{header}</h1>
      <TicTacToeBox turnX = {turnX} setTurnX={setTurnX} setHeader={setHeader} content={content} setContent={setContent} winner={winner} setWinner={setWinner} wonPattern={wonPattern} setWonPattern={setWonPattern} count={count} setCount={setCount} ></TicTacToeBox>
      
      <button onClick={()=>{
        setContent(["","","","","","","",""]);
        setWinner(false);
        setWonPattern([]);
        setHeader("Tic Tac Toe Game");
      }}>Reset Button</button>
    </div>
  )
}
