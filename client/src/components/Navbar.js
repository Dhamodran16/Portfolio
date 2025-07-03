import React from 'react';

const Navbar = () => (
  <nav>
    <div className="nav-container">
      <div className="logo">
        Dhamodraprasath <span>C M</span>
      </div>
      <div className="links">
        <div className="link"><a href="#home">Home</a></div>
        <div className="link"><a href="#about">About</a></div>
        <div className="link"><a href="#skills">Skills</a></div>
        <div className="link"><a href="#projects">Projects</a></div>
        <div className="link"><a href="#services">Services</a></div>
        <div className="link"><a href="#contact">Contact</a></div>
      </div>
      <i className="fa-solid fa-bars hamburg" onClick={() => window.hamburg && window.hamburg()}></i>
    </div>
    <div className="dropdown">
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <i className="fa-solid fa-xmark cancel" onClick={() => window.cancel && window.cancel()}></i>
      </div>
    </div>
  </nav>
);

export default Navbar; 