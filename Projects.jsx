// Importing necessary dependencies
import React, { Component } from 'react';
import './App.css'; // Importing CSS file for styling
import pro from './pro.png'; // Importing an image used in project cards

// Defining the Projects class component
class Projects extends Component {
  render() {
    return (
      <div>
        {/* Section for the projects page */}
        <section className="fiveSection" id="five">
          
          {/* Upper section with heading and introductory text */}
          <section className="up">
            <h1 className="top-h1">Projects</h1>
            <p className="top-p">
              I have worked on some projects in FrontEnd and IoT. Here are my projects:
            </p>
          </section>

          {/* Section containing project cards */}
          <section className="b">
            <div className="services-sub-cont">
              
              {/* First project card - Portfolio Website */}
              <div className="services-card">
                <img src={pro} className="test-logo" alt="Portfolio Project" /> {/* Project image */}

                {/* Technologies used in the project */}
                <div className="s2">
                  <p className="sub-p1">CSS</p>
                  <p className="sub-p1">HTML</p>
                </div>

                {/* Project title and description */}
                <div>
                  <h2
                    style={{
                      fontSize: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <u>PORTFOLIO</u> {/* Project name */}
                  </h2>
                  <p
                    style={{
                      fontSize: '15px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Developed a portfolio webpage for an educational institution that highlights
                    the institution's offerings and achievements.
                  </p>
                </div>
              </div>

              {/* Second project card - Smart Bag System */}
              <div className="services-card">
                <img src={pro} className="test-logo" alt="Smart Bag Project" /> {/* Project image */}

                {/* Technologies used in the project */}
                <div className="s2">
                  <p className="sub-p1">IoT</p>
                  <p className="sub-p1">AI</p>
                </div>

                {/* Project title and description */}
                <div>
                  <h2
                    style={{
                      fontSize: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <u>SMART BAG</u> {/* Project name */}
                  </h2>
                  <p
                    style={{
                      fontSize: '15px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Developed an intelligent system that uses IoT sensors to detect, monitor, and
                    manage chili bags in the yard. This system aims to optimize storage, track inventory, 
                    and ensure quality control.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

// Exporting the Projects component to be used in other parts of the application
export default Projects;
