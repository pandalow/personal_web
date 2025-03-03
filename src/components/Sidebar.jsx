// src/Sidebar.jsx
import React from 'react';
import "../App.css"

function Sidebar() {
  return (

    <div>
      <section class='nes-container with-title is-centered'>
        <img src="145511053.png" width='250px' alt="Your Name" class='nes-text is-primary'/>
        <h1 class='nes-text is-primary'>Xiaojian Zhuang</h1>
        
      </section>
 
     <section class='nes-container with-title is-centered'>
      <p class = 'nes-text is-primary'>Light - Shadow - Chaos</p>
      <p>
        llll
      </p>
      <nav>
        <div class='list'>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
      </nav>
    </section>
    </div>

  );
}

export default Sidebar;