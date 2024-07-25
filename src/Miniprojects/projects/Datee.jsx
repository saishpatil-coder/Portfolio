import React, { useEffect, useState } from 'react'
import './Todo.css'
export default function Datee() {
    const [dateTime , setDateTime] = useState(`${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
    useEffect(()=>{
        const interval = setInterval(() => {
            const date = new Date();
            setDateTime(`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`);
        }, 1000);
        return ()=> clearInterval(interval);
    },[])


  return (
    <div className='date'>
      {dateTime}
      <h1></h1>
    </div>
  )
}
