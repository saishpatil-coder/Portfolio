import React, { useEffect, useRef, useState } from 'react'
import "./tictac.css";
export default function TicTacToeBox({ turnX, setTurnX, setHeader, content, setContent, winner, setWinner, wonPattern, setWonPattern , count , setCount}) {
    let winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
    let checkwinner = () => {
        for (let arr of winPattern) {
            let [a, b, c] = arr;
            a = content[a];
            b = content[b];
            c = content[c];
            if (a && b && c && a === b && a === c) {
                setWinner(true);
                setWonPattern(arr);
                setHeader("Winner : " + a.toUpperCase());
                return true;
            }
        }
        return false;
    }
    useEffect(() => {
        if (!checkwinner() && count === 9) {
            setHeader("It's a Draw!");
            setTimeout(() => {
                setContent(["", "", "", "", "", "", "", "", ""]);
                setWinner(false);
                setWonPattern([]);
                setHeader("Tic Tac Toe Game");
                setCount(0);
                setTurnX(true);
            }, 2000);
        }
    }, [content]);

    let handleClick = (e) => {
        if (winner) return;
        let index = Number(e.target.classList[1][3] - 1);
        if (content[index]) return;
        let temp = [...content];
        temp[index] = turnX ? "x" : "o";
        setContent(temp);
        setHeader(!turnX ? "Turn X" : "Turn O");
        setTurnX(!turnX);
        setCount(count+1);
        console.log(count)
    }
    let getId = (idx) => {
        return wonPattern.includes(idx) ? "checked" : "";
    }
    return (
        <>
            <div className='box-container'>
                <div className="row row1">
                    <div onClick={(e) => { handleClick(e) }} id={`${getId(0)}`} className="box box1">{content[0]}</div>
                    <hr />
                    <div onClick={(e) => { handleClick(e) }} id={`${getId(1)}`} className="box box2">{content[1]}</div>
                    <hr />
                    <div onClick={(e) => { handleClick(e) }} id={`${getId(2)}`} className="box box3">{content[2]}</div>
                </div>
                <hr />
                <div className="row row2">
                    <div onClick={(e) => { handleClick(e) }} id={`${getId(3)}`} className="box box4">{content[3]}</div>
                    <hr />
                    <div onClick={(e) => { handleClick(e) }} id={`${getId(4)}`} className="box box5">{content[4]}</div>
                    <hr />
                    <div onClick={(e) => { handleClick(e) }} id={`${getId(5)}`} className="box box6">{content[5]}</div>
                </div>
                <hr />
                <div className="row row3">
                    <div onClick={(e) => { handleClick(e) }} id={`${getId(6)}`} className="box box7">{content[6]}</div>
                    <hr />
                    <div onClick={(e) => { handleClick(e) }} id={`${getId(7)}`} className="box box8">{content[7]}</div>
                    <hr />
                    <div onClick={(e) => { handleClick(e) }} id={`${getId(8)}`} className="box box9">{content[8]}</div>
                </div>
            </div>
        </>
    )
}
