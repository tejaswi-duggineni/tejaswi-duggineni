// Importing necessary dependencies
import React, { Component } from 'react';
import './App.css'; // Importing CSS file for styling

// Defining the Skills class component
class Skills extends Component {
  render() {
    return (
      <div>
        {/* Main section for the Skills page */}
        <section className="thirdSection" id="teja">
          
          {/* Header section with title and description */}
          <section className="top">
            <h1 className="top-h1">Skills</h1>
            <p className="top-p">Here are some of the skills I have learned</p>
          </section>

          <br />
          <br />

          {/* Bottom section containing skill categories */}
          <section className="bottom">
            
            {/* Technical Skills Card */}
            <div className="services-card1">
              <h1 className="sub-h1">Technical Skills</h1>
              <div className="s1">
                <p className="sub-p">CSS</p> {/* Skill 1 */}
                <p className="sub-p">HTML</p> {/* Skill 2 */}
                <p className="sub-p">Java</p> {/* Skill 3 */}
                <p className="sub-p">Python</p> {/* Skill 4 */}
              </div>
            </div>
            
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; {/* Spacer for layout adjustment */}

            {/* Non-Technical Skills Card */}
            <div className="services-card1">
              <h1 className="sub-h1">Non-Technical Skills</h1>
              <div className="s1">
                <p className="sub-p">Communication</p> {/* Skill 1 */}
                <p className="sub-p">Adaptability</p> {/* Skill 2 */}
                <p className="sub-p">Time Management</p> {/* Skill 3 */}
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

// Exporting the Skills component to be used in other parts of the application
export default Skills;
