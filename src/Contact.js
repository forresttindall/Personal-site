import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { blastConfetti } from './confetti';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ ...status, isSubmitting: true });

    emailjs.sendForm(
      '*/ SERVICE ID /*', // add service ID
      '*/ TEMPLATE ID /*', // add template ID
      form.current,
      '*/ YOUR PUBLIC KEY /*' // You need to add your public key here
    )
      .then((result) => {
        setStatus({
          message: 'Message sent successfully!',
          isError: false,
          isSubmitting: false
        });
        form.current.reset();
        blastConfetti();
      }, (error) => {
        setStatus({
          message: 'Failed to send message. Please try again.',
          isError: true,
          isSubmitting: false
        });
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            required
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="contact-input"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="contact-input"
            rows="6"
          ></textarea>

          <button 
            type="submit" 
            className="submit-button"
            disabled={status.isSubmitting}
          >
            {status.isSubmitting ? (
              <span className="loading-spinner"></span>
            ) : (
              'Send Message'
            )}
          </button>

          {status.message && (
            <div className={`status-message ${status.isError ? 'error' : 'success'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>

      <div className="contact-gradient left"></div>
      <div className="contact-gradient right"></div>
    </section>
  );
};

export default Contact;
