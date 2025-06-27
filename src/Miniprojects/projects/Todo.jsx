import React from 'react'
import { useState, useEffect } from 'react'
import './Todo.css'
import Input from './Input';
import List from './List';
import Datee from './Datee';

const todoKey = "reactTodo"

export default function Todo() {
    const [todos, setTodos] = useState(() => {
        const get = localStorage.getItem(todoKey);
        if (!get) return [];
        return JSON.parse(get);
    });

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem(todoKey, JSON.stringify(todos));
    }, [todos]);

    let addTodos = (item) => {
        if (item.trim() === '') return; // Don't add empty todos
        setTodos((pre) => {
            const newTodos = [...pre, { 
                id: Date.now() + Math.random(), // Better unique ID
                content: item.trim(), 
                checked: false,
                createdAt: new Date().toISOString()
            }];
            return newTodos;
        });
    }

    let deleteTodo = (id) => {
        setTodos((pre) => {
            const newTodos = pre.filter((curr) => curr.id !== id);
            return newTodos;
        });
    }

    let handleCheck = (id) => {
        setTodos((pre) => {
            const newTodos = pre.map((curr) => {
                if (curr.id === id) {
                    return { ...curr, checked: !curr.checked };
                }
                else return curr;
            })
            return newTodos;
        })
    }

    let deleteAll = () => {
        if (todos.length === 0) return;
        if (window.confirm('Are you sure you want to delete all todos?')) {
            setTodos([]);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4">
            <div className="todo-container">
                {/* Header Section */}
                <div className="top">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            To-Do List
                        </span>
                    </h1>
                    <p className="text-gray-300 text-center mb-8 max-w-md">
                        Organize your tasks and boost your productivity
                    </p>
                    <Input addTodos={addTodos} todos={todos} />
                </div>

                {/* Todo List Section */}
                <div className="scroll-container">
                    {todos.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-lg mb-2">No tasks yet</div>
                            <div className="text-gray-500 text-sm">Add your first task above to get started!</div>
                        </div>
                    ) : (
                        <ul>
                            {todos.map((todo) => (
                                <List 
                                    key={todo.id} 
                                    todo={todo.content} 
                                    checked={todo.checked} 
                                    deleteTodo={() => deleteTodo(todo.id)} 
                                    handleCheck={() => handleCheck(todo.id)}
                                />
                            ))}
                        </ul>
                    )}
                </div>

                {/* Delete All Button */}
                {todos.length > 0 && (
                    <button 
                        onClick={deleteAll} 
                        className='deleteAll'
                        title="Delete all tasks"
                    >
                        Delete All
                    </button>
                )}

                {/* Task Counter */}
                {todos.length > 0 && (
                    <div className="text-gray-400 text-sm mt-4 text-center">
                        {todos.filter(todo => todo.checked).length} of {todos.length} tasks completed
                    </div>
                )}
            </div>
            <Datee />
        </div>
    )
}
