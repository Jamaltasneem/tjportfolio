// src/components/Skills.js
import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaReact, FaJava, FaLinux } from 'react-icons/fa';
import{
  SiTensorflow,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiMysql
} from 'react-icons/si'
function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'Keras', icon: <SiKeras /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
