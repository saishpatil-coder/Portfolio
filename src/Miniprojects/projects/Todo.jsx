import React from 'react'
import { useState } from 'react'
import './Todo.css'
import Input from './Input';
import List from './List';
import Datee from './Datee';
import { json } from 'react-router-dom';
const todoKey = "reactTodo"

export default function Todo() {
    const [todos , setTodos] = useState(()=>{
        const get = localStorage.getItem(todoKey) ;
        if(!get) return [];
        return JSON.parse(get) ;
    });
    let addTodos = (item)=>{
        setTodos((pre)=>{
            const newTodos = [...pre , {id:item , content : item , checked : false}]; 
            return newTodos ;
        }) ;
    }
    localStorage.setItem(todoKey , JSON.stringify(todos));
    let deleteTodo = (element)=>{
        setTodos((pre)=>{
            const newTodos = pre.filter((curr)=> curr.content!== element); 
            return newTodos ;
        }) ;
    }
    let handleCheck = (element)=>{
        setTodos((pre)=>{
            const newTodos = pre.map((curr)=>{
                if(curr.content === element){
                    return {id:curr.id ,content:curr.content , checked : !curr.checked};
                }
                else return curr;
            })
            return newTodos;
        })
    }
    let deleteAll = ()=>{
        setTodos([]);
    }

    return(
        <>
            <div className="todo-container">
                <div className="top" >
                <h1>To-do List</h1>
                <Input addTodos = {addTodos} todos={todos}></Input>
                </div>
               <div className="scroll-container">
               <ul>
                    {todos.map((todo)=>{
                        return <List key={todo.id} todo = {todo.content} checked = {todo.checked} deleteTodo={deleteTodo} handleCheck={handleCheck}></List>
                })}
                </ul>
               </div>
                <button onClick={()=>{
                    deleteAll();
                }} className='deleteAll'>Delete All</button>
            </div>
            <Datee></Datee>
        </>
    )

}
