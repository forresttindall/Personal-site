import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Blog from './Blog';
import Newsletter from './Newsletter';
import Contact from './Contact';
import SolutionParadox from './articles/SolutionParadox';
import OpenSourceRevolution from './articles/OpenSourceRevolution';
import Testimonials from './Testimonials';
import './Testimonials.css';
import About from './About';
import './About.css';
import Links from './Links';
import './Links.css';
function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <HeroSection />
            <Projects />
            <Blog />
            <Testimonials />
            <Newsletter />
          </main>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/solution-paradox" element={<SolutionParadox />} />
        <Route path="/blog/open-source-revolution" element={<OpenSourceRevolution />} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;
