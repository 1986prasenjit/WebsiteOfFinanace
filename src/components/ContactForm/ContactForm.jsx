import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;