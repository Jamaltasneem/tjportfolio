import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to work together or have a feedback, feel free to reach out!</p>

      <form
        action="https://formspree.io/f/your-form-id" // ← Replace with your Formspree endpoint
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-links">
        <a href="https://github.com/jamaltasneem" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/tasneemjamal" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
