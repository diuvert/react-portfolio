
// App.jsx
// Student name: Diuvert Lopez
// StudentID: 301487978
// Date: 2025-09-19
// Main App Layout with Navigation

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../client/components/home.jsx';
import About from '../client/components/about.jsx';
import Projects from '../client/components/projects.jsx';
import Services from '../client/components/services.jsx';
import Mission from '../client/components/mission.jsx';
import Contact from '../client/components/contact.jsx';
import Footer from '../client/components/footer.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="logo-container">
          <img src="/dl-logo.webp" alt="DL Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main id="content" className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
