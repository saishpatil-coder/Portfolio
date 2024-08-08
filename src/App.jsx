import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Head/Navbar';
import Profile from './Components/Head/Profile';
import Skills from './Components/Head/Skills';
import TicTac from './Miniprojects/TicTacToe/TicTac';
import Todo from './Miniprojects/projects/Todo'
import Payment from './Miniprojects/Payment/Payment';
import { isdark } from './Components/context/dark';
import { useState } from 'react';
const Float = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Float />, // Use the Float component here
      children: [
        { path: "skills", element: <Skills /> },
        { path: "payment", element: <Payment></Payment> },
        { path: "/", element: <Profile></Profile> },
        { path: "tictactoe" , element : <TicTac></TicTac>},
        { path:"todo",element:<Todo></Todo>}
      ]
    }
  ]);
const [isDark , setISDark] = useState(true);
let setDark = ()=>{
  setISDark(!isDark);
}
  return (
    <>
    <isdark.Provider value={{isDark , setDark}}>
      <RouterProvider router={router} />
      </isdark.Provider>
    </>
  );
}

export default App;
