import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
