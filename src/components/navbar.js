
import React, { useState } from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">Tasneem Jamal</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">Resume</a></li>
      </ul>
      <div className="social-icons">
        <a href="https://github.com/jamaltasneem" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/tasneemjamal" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;