import React, { useState } from 'react';
import './Newsletter.css';
import { blastConfetti } from './confetti';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://api.sender.net/v2/subscribers', {
        method: 'POST',
        headers: {
          'Authorization': 'XXXXXXXXX', // add key here 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          firstname: firstName,
          groups: ['Newsletter Subscribers']
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setFirstName('');
        blastConfetti();
      } else {
        const error = await response.json();
        setStatus('error');
        console.error('Subscription failed:', error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-content">
        <h2 className="newsletter-title">
          Join My <span className="gradient-text">Newsletter</span>
        </h2>
        <p className="newsletter-description">
        Get updates and early access to my open source projects.
        </p>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="input-group">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
              className="newsletter-input"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="newsletter-input"
            />
            <button 
              type="submit" 
              className="subscribe-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          
          {status === 'success' && (
            <div className="status-message success">
              Thanks for subscribing, {firstName}! Check your email to confirm.
            </div>
          )}
          
          {status === 'error' && (
            <div className="status-message error">
              Oops! Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
