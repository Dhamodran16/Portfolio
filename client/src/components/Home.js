import React from 'react';
import Typewriter from './Typewriter';

const Home = () => (
  <section id="home">
    <div className="main-container">
      <div className="image">
        <img src="/portfolio-logo.avif" alt="Dhamodraprasath CM" />
      </div>
      <div className="content">
        <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
          Hey I'm <span>Dhamodraprasath CM</span>
        </h1>
        <div className="typewriter" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900">
          I'm a <Typewriter /><label>|</label>
        </div>
        <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1100">
          I'm a passionate developer focused on building modern web applications using the MERN stack (MongoDB, Express, React, Node.js) and TypeScript. I love crafting responsive UIs, scalable APIs, and real-time interactive systems. I also explore automation, scripting, and intelligent systems using Python occasionally.
        </p>
        <div className="social-links">
          <a href="https://github.com/Dhamodran16" data-aos="fade-up" target="_blank" rel="noopener noreferrer" data-aos-duration="1500" data-aos-delay="1300"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/dhamodra-prasath-cm" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="btn" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1800">
          <button onClick={() => window.location.href = "mailto:dhamodran17@gmail.com?subject=Hire%20Request&body=Hi%20Dhamodraprasath%2C%20I%20am%20interested%20in%20hiring%20you."}>Hire me</button>
        </div>
      </div>
    </div>
  </section>
);

export default Home; 