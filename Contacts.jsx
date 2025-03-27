// Importing the React library and Component class from React
import React, { Component } from 'react';

// Importing the CSS file for styling the component
import './App.css';

// Importing the resume PDF file from the local directory
import resume from './tejaswi_resume (1).pdf';

// Defining the Contacts class component
export class Contacts extends Component {
  // The render method is responsible for rendering the UI of the component
  render() {
    return (
      <div>
        {/* Section for the Contact Me heading */}
        <section className="sixSection"> 
          <section className="up">
            {/* Main heading for the contact section */}
            <h1 className="top-h1">Contact Me</h1>
            {/* Short description for the contact section */}
            <p className="top-p">Below are the details to reach out to me!</p>
          </section>
        </section>

        {/* Main container for the contact details */}
        <section className="contact-section">
          <div className="contact-container">
            
            {/* Contact item for Address */}
            <div className="contact-item">
              {/* Globe icon for address */}
              <i className="icon">&#127760;</i>
              <p>Address</p>
              {/* Displaying the address */}
              <p className="contact-detail">Guntur, India</p>
            </div>

            {/* Contact item for Phone Number */}
            <div className="contact-item">
              {/* Phone icon */}
              <i className="icon">&#128222;</i>
              <p>Contact Number</p>
              {/* Displaying the phone number */}
              <p className="contact-detail">+91 9436832736</p>
            </div>

            {/* Contact item for Email */}
            <div className="contact-item">
              {/* Email icon */}
              <i className="icon">&#9993;</i>
              <p>Email Address</p>
              {/* Clickable mailto link to open an email client */}
              <a href="mailto:tejaswiduggineni@gmail.com" className="contact-detail">tejaswiduggineni@gmail.com</a>
            </div>

            {/* Contact item for Resume Download */}
            <div className="contact-item">
              {/* Document icon */}
              <i className="icon">&#128196;</i>
              <p>Download Resume</p>
              {/* Link to download the resume */}
              <a href={resume} className="contact-detail">Download here</a>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

// Exporting the Contacts component so it can be used in other parts of the project
export default Contacts;
