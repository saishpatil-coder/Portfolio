import React, { useState } from 'react'
import './Todo.css'
export default function Input({addTodos , todos}) {
    const [item , setItem] = useState("");
    let handleOnchange = (e)=>{
        setItem(e.target.value) ;
    }
    let handleOnClick = (e) => {
        e.preventDefault();

        if(item === "" ) return ;
        const include = todos.find((curr)=>curr.content===item);
        if (include) {
            setItem("");
            return ;
        }
        addTodos(item) ;
        setItem("") ;
    };
    
  return (
    <form className='input-field'>
      <input id="hi" type="text" className='input' value={item} onChange={handleOnchange} />
      <button onClick={handleOnClick} type='submit'>Add</button>
    </form>
  )
}
