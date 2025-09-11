import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleHamburgerClick = () => setDropdownOpen(true);
  const handleCancelClick = () => setDropdownOpen(false);
  const handleLinkClick = () => setDropdownOpen(false);

  return (
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
        <i className="fa-solid fa-bars hamburg" onClick={handleHamburgerClick}></i>
    </div>
      <div className={`dropdown${dropdownOpen ? ' open' : ''}`}>
        {dropdownOpen && (
      <div className="links">
            <a href="#home" onClick={handleLinkClick}>Home</a>
            <a href="#about" onClick={handleLinkClick}>About</a>
            <a href="#skills" onClick={handleLinkClick}>Skills</a>
            <a href="#projects" onClick={handleLinkClick}>Projects</a>
            <a href="#services" onClick={handleLinkClick}>Services</a>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
            <i className="fa-solid fa-xmark cancel" onClick={handleCancelClick}></i>
      </div>
        )}
    </div>
  </nav>
);
};

export default Navbar; 