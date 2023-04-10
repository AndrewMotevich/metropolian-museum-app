import React from 'react';
import '../assets/styles/AboutUsPage.css';

const AboutUs = () => {
  return (
    <div className="aboutUsWrapper">
      <div className="aboutUs">
        <h1>About</h1>
        <a href="https://metmuseum.github.io/">The Metropolitan Museum of Art Collection API</a>
        <p>This App use free Api from The Metropolitan Museum of Art</p>
        <p>
          The Metropolitan Museum of Art provides select datasets of information on more than
          470,000 artworks in its Collection for unrestricted commercial and noncommercial use.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
