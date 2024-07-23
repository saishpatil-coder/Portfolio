import React, { useState } from 'react';
import impstyle from "../Main.module.css";

export default function Navbar() {
  const [isClick, setClick] = useState(true);

  const handleClick = () => {
    setClick(!isClick);
  };

  return (
    <header> 
      <nav className={impstyle.flex}>
        <div className={`${impstyle.logo} ${impstyle.flex}`}>
          <img src="profile.jpg" alt="" />
          <h1>Saish Sachin Patil</h1>
        </div>
        <div onClick={handleClick} className={`${impstyle.navBtn}`}>
          <img style={{
            display:isClick?"block":"none"
          }} src="ham.svg" alt="" />
        <img style={{
          display:!isClick?"block":"none"
        }} src="close.svg" alt="" />
        </div>

        <ul style={{
          right:isClick?"-100%":"10px"
        }} >
          <li><a href="#">Projects</a></li>
          <li><a href="#">MiniProjects</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}
