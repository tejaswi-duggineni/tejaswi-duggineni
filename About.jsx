// Importing the React library and Component class to create a React component
import React, { Component } from 'react';

// Importing the CSS file for styling the component
import './App.css';

// Importing the profile image (Ensure the file name is properly formatted)
import image from './WhatsApp Image 2024-09-27 at 08.23.11.jpeg';

// Defining the About class component
class About extends Component {
  // The render method is responsible for returning the JSX structure of the component
  render() {
    return (
      // Main container for the About section
      <div className="about">
        
        {/* Section containing both the profile image and about text */}
        <section className="secondSection" id="me">
          
          {/* Left section containing the profile image */}
          <section className="leftsection">
            {/* Adding spacing before the image using non-breaking spaces (&ensp;) */}
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <img className="img-1" src={image} alt="Tejaswi's Profile Picture" />
          </section>

          {/* Right section containing the About Me text */}
          <section className="rightsection">
            
            {/* Heading for the About Me section */}
            <div className="about-p">
              <h1>About Me</h1>
            </div>

            {/* Paragraph containing details about professional background */}
            <div className="abouts">
              <p 
                style={{
                  "display": "flex", 
                  "justifyContent": "center", 
                  "alignItems": "center"
                }}
              >
                Seeking full-time career with an organization, which will permit me to use and contribute my 
                abilities in software development and also to enhance my knowledge towards its growth by 
                committed and high-quality work. Having good knowledge of Python, C, HTML, CSS, JavaScript, 
                SQL queries. Good problem-solving skills, well-organized, quick learner, with hard work, good 
                communication, and commitments.
              </p>
            </div>

          </section>
        </section>
      </div>
    );
  }
}

// Exporting the About component so it can be used in other parts of the application
export default About;
