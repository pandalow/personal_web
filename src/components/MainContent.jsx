// MainContent.js
import React from 'react';
import Chatbot from './ChatBot';
import AboutMe from './AboutMe';

function MainContent({ currentPage }) {
  return (
    <div className="space-y-6">
      {currentPage === 'chatbot' ? <Chatbot /> : <AboutMe />}
    </div>
  );
}

export default MainContent;
