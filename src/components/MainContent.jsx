import React from 'react';
import "../App.css"
import Chatbot from './ChatBot';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

function MainContent() {
  return (
    <div className="main-content">
      <Chatbot />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default MainContent;