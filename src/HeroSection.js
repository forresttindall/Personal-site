import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
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
            <a href="#projects" className="primary-button">
              View Projects
              <span className="button-arrow">→</span>
            </a>
            <a href="/contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="gradient-blur right"></div>
    </section>
  );
};

export default HeroSection;
