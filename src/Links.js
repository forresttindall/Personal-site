import React from 'react';
import './Links.css';

const Links = () => {
  const links = [
    {
      title: "Creationbase (Software Lab)",
      url: "https://creationbase.io",
    },
    {
      title: "Paradox Labs (Web3 Project Marketplace)",
      url: "https://paradoxlabs.tech",
    },
    {
      title: "Newsletter",
      url: "https://forresttindall.com/#newsletter",
    },
    {
      title: "Github",
      url: "https://github.com/forresttindall",
    }
  ];

  return (
    <section className="links-section">
      {/* Gradient effects from contact page */}
      <div className="links-gradient left"></div>
      <div className="links-gradient right"></div>

      <div className="links-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/images/me-new-blur-2.jpg" alt="Forrest Tindall" />
          </div>
          <h1 className="profile-name">Forrest Tindall</h1>
          <p className="profile-bio">Software engineer leading innovation with modern technologies. Building with React, Three.js, and Web3 technologies.</p>
        </div>
        
        <div className="links-grid">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className="link-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
