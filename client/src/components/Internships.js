import React from 'react';

const Internships = () => (
  <section className="internships" id="internships">
    <div className="content">
      <div className="title"><span>Internships</span></div>
      <div className="boxes">
        {/* Internship 1 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-brain"></i>
          </div>
          <div className="topic">Intel Internship Training Programme on Generative AI</div>
          <div className="status-container">
            <span className="status-dot status-online"></span>
            <span className="status-text">Online</span>
          </div>
          <p>Intel India - Comprehensive training program on Generative AI technologies and applications.</p>
          <p><strong>Company:</strong> Intel India</p>
          <a href="https://github.com/Dhamodran16/GenAI-Quezz-game.git" className="internship-link" target="_blank" rel="noopener noreferrer">View Details</a>
        </div>
        {/* Internship 2 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="topic">1st Prize - HackSphere Hackathon</div>
          <div className="status-container">
            <span className="status-dot status-online"></span>
            <span className="status-text">Online</span>
          </div>
          <p>Awarded an internship at Shinelogics after winning 1st prize in the HackSphere Hackathon competition.</p>
          <p><strong>Company:</strong> Shinelogics</p>
          <a href="https://github.com/Dhamodran16/webscraping.git" className="internship-link" target="_blank" rel="noopener noreferrer">View Details</a>
        </div>
        {/* Internship 3 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-building"></i>
          </div>
          <div className="topic">Internship at Flatirons Solutions</div>
          <div className="status-container">
            <span className="status-dot status-offline"></span>
            <span className="status-text">Offline</span>
          </div>
          <p>US-based company in Chennai - Building a RAG (Retrieval-Augmented Generation) application for advanced AI solutions.</p>
          <p><strong>Company:</strong> Flatirons Solutions (US-based, Chennai)</p>
          <a href="/flatirons_cert.html" className="internship-link" target="_blank" rel="noopener noreferrer">View Details</a>
        </div>
      </div>
    </div>
  </section>
);

export default Internships;

