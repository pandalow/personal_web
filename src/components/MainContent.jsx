// MainContent.js
import React from 'react';
import Chatbot from './ChatBot';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
function MainContent({ currentPage }) {
  return (
    <div className="space-y-6 h-full">
      {currentPage === 'chatbot' ? <Chatbot /> : currentPage === 'aboutMe' ? <AboutMe /> : <Portfolio />}
    </div>
  );
}

export default MainContent;
