import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    if (window.location.hash === '#/' || window.location.hash === '') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page first, then scroll
      window.location.href = '/#/';
      
      // Keep checking for the element until it exists
      const checkForElement = setInterval(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearInterval(checkForElement);
        }
      }, 100);

      // Clear interval after 3 seconds to prevent infinite checking
      setTimeout(() => clearInterval(checkForElement), 3000);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-main">
          <span className="hero-eyebrow">Software Engineer</span>
          <div className="hero-title">
            <div className="gradient-text">Forrest Tindall</div>
            <div className="hero-subtitle">
              Advancing leading edge web solutions
            </div>
          </div>
          <p className="hero-description">
            Frontend engineer leading innovation with modern technologies.
            Focused on clean architecture and exceptional user experiences.
          </p>
          <div className="cta-group">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="primary-button"
            >
              View Projects
              <span className="button-arrow">→</span>
            </button>
            <Link to="/contact" className="secondary-button">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className="gradient-blur right"></div>
    </section>
  );
};

export default HeroSection;
