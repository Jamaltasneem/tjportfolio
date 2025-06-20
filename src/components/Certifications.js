import React from 'react';
import './Certifications.css';
import { data } from 'autoprefixer';

function Certifications() {
  const certs = [
    {
      title: 'The Complete Web Developer Course',
      issuer: 'Udemy',
      date: '2023',
      
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: '2025',
      
    },
    {
      title: 'Google AI Essentials',
      issuer: 'Google',
      date: '2024',
      
    },
    {
      title: 'Google Cybersecurity Professional Course',
      issuer: 'Google',
      date: '2024',
      
    },
    {
      title: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
    
    },
    {
        title: 'Data Analytics Training',
        issuer: 'Trainity',
        date: '2023'
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2 className='certifications-sectionh2'>Certifications</h2>
      <div className="certifications-grid">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
          </div>
        ))}
      </div>
     

    </section>
  );
}

export default Certifications;
