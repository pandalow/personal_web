import React, { useState } from 'react';
import "../App.css";

function Chatbot() {
    return (
      <section class='nes-container with-title is-centered'>
        <h2>About Me</h2>
        <div >
          <textarea type="text" placeholder="Hello! How can I assist you?"  class = 'nes-textarea' id='textarea_field' />
          <button class='nes-btn is-success'>Send</button>
        </div>
      </section>
    );
  }

export default Chatbot;