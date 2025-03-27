// Importing necessary dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import './App.css'; // Importing CSS file for styling
import soft from './software-development.png'; // Importing an image for display
import Typed from 'typed.js'; // Importing Typed.js for text animation effect

// Defining the Home class component
export class Home extends Component {
  
  // Lifecycle method that runs after the component has been added to the DOM
  componentDidMount() {
    // Initializing Typed.js instance for animated typing effect
    this.typed = new Typed('#element', {
      strings: ['Web Developer'], // Text to be displayed in the animation
      typeSpeed: 100, // Speed at which text is typed
    });
  }

  // Lifecycle method that runs before the component is removed from the DOM
  componentWillUnmount() {
    // Destroying the Typed.js instance to prevent memory leaks
    if (this.typed) {
      this.typed.destroy();
    }
  }

  // Render method that defines the UI of the component
  render() {
    return (
      <div>
        {/* Header section containing the navigation bar */}
        <header>
          <nav>
            {/* Left section displaying the portfolio title */}
            <div className="left">Tejaswi's Portfolio</div>
            
            {/* Right section containing navigation links */}
            <div className="right">
              <ul>
                <li><Link to="/">Home</Link></li> {/* Link to Home page */}
                <li><Link to="/about">About</Link></li> {/* Link to About page */}
                <li><Link to="/skills">Skills</Link></li> {/* Link to Skills page */}
                <li><Link to="/visionary">Visionary</Link></li> {/* Link to Visionary page */}
                <li><Link to="/projects">Projects</Link></li> {/* Link to Projects page */}
                <li><Link to="/contacts">Contacts</Link></li> {/* Link to Contacts page */}
              </ul>
            </div>
          </nav>
        </header>

        {/* Main section containing introduction text and image */}
        <section className="firstSection"> 
          
          {/* Left section displaying introduction text */}
          <div className="leftSection"> 
            Hi, My name is <span className="purple">Tejaswi</span> {/* Highlighting the name */}
            <div>and I am a passionate</div>
            
            {/* Animated typing effect displaying profession */}
            <span id="element"></span>

            {/* Adding extra space below */}
            <br />
            <br />
          </div>

          {/* Right section displaying an image related to software development */}
          <div className="rightSection"> 
            <img className="img" src={soft} alt="Software Development" /> {/* Displaying the image */}
          </div>

        </section>
      </div>
    );
  }
}

// Exporting the Home component to be used in other parts of the application
export default Home;
