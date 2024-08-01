import React, { useState } from 'react';
import impstyle from "../Main.module.css";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isClick, setClick] = useState(true);

  const handleClick = () => {
    setClick(!isClick);
  };

  return (
    <>
      <header>
        <nav className={impstyle.flex}>
          <div className={`${impstyle.logo} ${impstyle.flex}`}>
            <img src="profile.jpg" alt="" />
            <h1>Saish Sachin Patil</h1>
          </div>
          <div onClick={handleClick} className={`${impstyle.navBtn}`}>
            <img style={{
              display: isClick ? "block" : "none"
            }} src="ham.svg" alt="" />
            <img style={{
              display: !isClick ? "block" : "none"
            }} src="close.svg" alt="" />
          </div>

          <ul style={{
            right: isClick ? "-100%" : "-10px"
          }} >
            <li><NavLink to="/todo">Home</NavLink></li>
            <li className={impstyle.miniprojectli}><div>MiniProjects</div><ul className={impstyle.drop}>
              <li><NavLink to="/todo">Todo Application</NavLink></li>
              <li><NavLink to="/tictactoe">Tic Tac Toe</NavLink></li>
            </ul></li>

            <li><NavLink to="/skills">About Me</NavLink></li>
            <li><NavLink to="/">About Us</NavLink></li>
          </ul>
        </nav>
        <div onClick={handleClick} className={isClick ? '' : impstyle.blurBackground}></div>
      </header>
    </>
  );
}
