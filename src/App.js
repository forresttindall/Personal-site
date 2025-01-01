import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import About from './About';
import Links from './Links';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route exact path="/" element={
          <main>
            <HeroSection />
            <Projects />
            <Blog />
            <Testimonials />
            <Newsletter />
          </main>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<Links />} />
        <Route path="/blog/solution-paradox" element={<SolutionParadox />} />
        <Route path="/blog/open-source-revolution" element={<OpenSourceRevolution />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
