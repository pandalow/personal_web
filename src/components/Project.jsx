import React from 'react';
import "../App.css";

function Project({ title, description }) {
    return (
      <section>
        <ul class='cyberpunk'>
            <li>{title}</li>
            <li> {description}</li>


        </ul>
        
      </section>
    );
  }

export default Project;