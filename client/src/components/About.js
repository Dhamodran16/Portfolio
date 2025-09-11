import React from 'react';

const About = () => (
  <section className="about" id="about">
    <div className="content">
      <div className="title"><span>About Me</span></div>
      <div className="about-details">
        <div className="left">
          <img src="/portfolio-logo.avif" alt="Dhamodraprasath CM" />
        </div>
        <div className="right">
          <div className="exp-area">
            <p className="exp">
              <strong>I'm Dhamodraprasath C M</strong><br /><br />
              I’m a passionate Full-Stack Developer and AI enthusiast from Salem, India, currently pursuing a B.Tech in Artificial Intelligence at Kongu Engineering College. My primary focus is on building modern, scalable web applications using React, JavaScript, TypeScript, Tailwind CSS, and MongoDB Atlas.
              
              I enjoy designing clean, responsive UIs and developing intuitive user experiences that run smoothly across platforms. I'm also experienced in integrating APIs, deploying web services, and building end-to-end solutions with cloud-based databases.
              
              As part of my internship at ShineLogics, I contributed to a web-based AI project focused on intelligent data automation and user interaction systems. This experience deepened my skills in real-time processing, UI/UX optimization, and collaboration within a professional development environment.
             
              Outside of development, I love exploring new tools in AI, experimenting with productivity-based projects, and staying on top of emerging trends in the tech ecosystem.
            </p>
          </div>
          <div className="resume-actions">
            <button
              className="resume-btn"
              onClick={() => window.open('/resume.html', '_blank', 'noopener,noreferrer')}
            >
              View Resume
            </button>
            <button
              className="resume-btn"
              onClick={async () => {
                try {
                  const response = await fetch('/Resume-Dhamodran.pdf', { cache: 'no-store' });
                  const blob = await response.blob();
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = 'Resume-Dhamodran.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  URL.revokeObjectURL(url);
                } catch (e) {
                  // Fallback for older mobile browsers
                  window.location.href = '/Resume-Dhamodran.pdf';
                }
              }}
            >
              Download Resume
            </button>
          </div>
          <div className="button">
            <button onClick={() => window.open("https://github.com/Dhamodran16?tab=repositories", "_blank")}>View All Projects</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 