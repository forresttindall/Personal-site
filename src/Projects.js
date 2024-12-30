import React, { useState } from 'react';
import './Projects.css';


const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Enterprise Air Quality Sensor Integration",
      description: "I was hired by a leading environmental consulting firm to create a novel software solution that connects PurpleAir sensors to their data dashboards.",
      image: "/images/airtower2.jpeg",
      technologies: ["JavaScript", "PurpleAir API", "Node.js"],
      categories: ["hardware"],
      github: "https://github.com/forresttindall/PurpleAir-to-Eagle.io",
    },
    {
      title: "Web3 DIY Project Marketplace",
      description: "A decentralized marketplace for DIY projects, where users can create, buy, and sell their own diy hacker, 3d printed printing, software, and electronics projects.",
      image: "/images/paradoxlabs.png",
      technologies: ["React.js", "APIs", "Ethers.js"],
      categories: ["web", "design"],
      link: "https://paradoxlabs.tech",
      github: "https://github.com/forresttindall/paradox-labs",
    },
    {
        title: "CRT Decryption Animation",
        description: "A retro style terminal decryption animation and CRT pixel emulation made for personal website use.",
        image: "/images/crt.png",
        technologies: ["JavaScript", "HTML", "CSS"],
        categories: ["web", "design", "open source"],
        link: "https://forresttindall.github.io/CRT-Monitor-Terminal-Decryption-Animation/",
        github: "https://github.com/forresttindall/CRT-Monitor-Terminal-Decryption-Animation?tab=readme-ov-file"
      },
    {
      title: "Life Left",
      description: "A simple app with big impact. A calculator that estimates the percentage of your life left to live in real time.",
      image: "/images/lifeleftgray.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      categories: ["web"],
      link: "https://forresttindall.github.io/Life-Left/",
      github: "https://github.com/forresttindall/Life-Left",
    },
    {
      title: "Reactive RGB Illumination On Rev3 Network Device",
      description: "Adding reactive RGB functionality to the popular open source device that captures WiFidata, for the purpose of competitive wardriving.",
      image: "/images/litupwardriver.jpeg",
      technologies: ["C++", "Hardware", "IoT"],
      categories: ["hardware", "open source"],
      github: "https://github.com/forresttindall/RGB-JHewitt-Wardriver"
    },
    {
        title: "GitHub Activity Calendar",
        description: "The GitHub Activity Calendar is a JavaScript library that generates a visual representation of a user's GitHub activity calendar.",
        image: "/images/new-github-calendar2.png",
        technologies: ["JavaScript", "APIs"],
        categories: ["web", "design", "open source"],
        link: "https://forresttindall.github.io/Github-Activity-Calendar/",
        github: "https://github.com/forresttindall/Github-Activity-Calendar",
        featured: true
      },
  ];

  const categories = ['all', 'web', 'design', 'open source'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-tab ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <article 
            className={`project-card ${project.featured ? 'featured' : ''}`} 
            key={index}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
