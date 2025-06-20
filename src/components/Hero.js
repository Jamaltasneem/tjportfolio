import React from 'react';
import './Hero.css';
import heroImage from '../assets/heroImage.jpg';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Tasneem Jamal</span></h1>
        <h2>A Computer Science Enthusiast</h2>
        <p>Machine Learning & Deep Learning | Backend Developer | Java | MySQL</p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume-btn">Resume</a>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Tasneem Jamal" />
      </div>

    </section>
  );
}

export default Hero;
