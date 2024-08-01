import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { TiTickOutline } from "react-icons/ti";
import './Todo.css'

export default function List({todo , checked , deleteTodo , handleCheck} ) {
  return (
    <li className={checked ? "chek":"nockeck"}>
      <p >{todo}</p>
      <div className="icons">
        <div className="tick" onClick={()=>{
          handleCheck(todo);
        }}><TiTickOutline/></div>
        <div className="delete"><MdDeleteForever onClick={()=>{
          deleteTodo(todo);
        }}/></div>
      </div>
    </li>
  )
}
