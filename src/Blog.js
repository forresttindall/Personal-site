import React, { useState } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      title: "The Open Source Revolution: A Beacon of Hope in the Age of Surveillance Capitalism",
      excerpt: "...in our world of rent and subscriptions, open source is a beacon of hope.",
      date: "12-29-2024",
      category: "open source",
      readTime: "7 min read",
      image: "/images/beacon.jpg",
      slug: "open-source-revolution"
    },
    {
      title: "The Solution Looking For a Problem",
      excerpt: "The tech industry has mastered something peculiar - the ability to convince users they need something they don't.",
      date: "10-27-2024",
      category: "tech",
      readTime: "8 min read",
      image: "/images/arc3.jpg",
      slug: "solution-paradox"
    },
    // Add more blog posts here
  ];

  const categories = ['all', 'open source', 'tech', 'developing', 'security'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="blog-section" id="blog">
      <div className="blog-header">
        <h2 className="section-title">
          Latest Articles
        </h2>
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post, index) => (
          <Link to={`/blog/${post.slug}`} className="blog-card-link" key={index}>
            <article className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <div className="category-tag">{post.category}</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="date">{new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="read-more">
                  <span>Read Article</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3f74ff" />
                        <stop offset="50%" stopColor="#915AFF" />
                        <stop offset="100%" stopColor="#7b3fff" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="url(#gradient)" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
