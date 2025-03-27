// Importing necessary dependencies
import React, { Component } from 'react';
import './App.css'; // Importing the CSS file for styling

// Defining the Visionary class component
export class Visionary extends Component {
  render() {
    return (
      <div>
        {/* Main section for the Visionary page */}
        <section className="fourSection" id="vinni">
          
          {/* Header section with title and description */}
          <section className="up">
            <h1 className="top-h1">Visionary</h1>
            <p className="top-p">Launching My Career: A Fresh Perspective on Web-Development</p>
          </section>

          {/* Middle section focusing on personalization */}
          <section className="middle">
            <div className="four-h1">
              <h1 className="h">Personalization</h1>
              <p className="p" style={{ color: '#999', opacity: 0.8 }}>
                A glimpse on my individuality
              </p>
              <p className="p1" style={{ fontSize: '1rem' }}>
                As a budding Web Developer, I am fervently dedicated to creating web experiences that transcend the
                ordinary, infusing every pixel with elegance and enchantment. My unwavering passion for unraveling
                intricate challenges fuels my journey in the realm of web development.
              </p>
            </div>
          </section>

          {/* Bottom section detailing reasons to hire */}
          <section className="under">
            <div className="fourh-2">
              <h1 className="h1">Reason to Hire Me</h1>
              <p className="p2" style={{ color: '#999', opacity: 0.8 }}>
                What Sets Me Apart
              </p>
              <p className="p3" style={{ fontSize: '1rem' }}>
                Aspiring Web Developer passionate about crafting exceptional user experiences. I bring fresh
                perspectives, boundless ambition, and unconventional thinking to every project. My goal is to create
                digital magic through energetic, innovative work. Let's connect and embark on a journey to bring
                unique, ambitious, and engaging experiences to life.
              </p>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

// Exporting the Visionary component to be used in other parts of the application
export default Visionary;
