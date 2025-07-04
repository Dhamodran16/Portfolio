import React from 'react';

const About = () => (
  <section className="about" id="about">
    <div className="content">
      <div className="title"><span>About Me</span></div>
      <div className="about-details">
        <div className="left">
          <img src="/portfolio-logo_1.webp" alt="Dhamodraprasath CM" />
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
                <div style={{ display: 'flex', gap: '0.5rem', margin: '10px 0' }}>
            <button
              className="resume-btn small"
              style={{ padding: '2px 6px' }}
              onClick={() => window.open('/Resume-Dhamodran.pdf', '_blank', 'noopener,noreferrer')}
            >
              View Resume
            </button>
            <button
              className="resume-btn small"
              style={{ padding: '2px 6px' }}
              onClick={() => {
                // Use a direct link for the download attribute
                const link = document.createElement('a');
                link.href = '/Resume-Dhamodran.pdf'; // This must match the file name in your public folder
                link.setAttribute('download', 'Resume-Dhamodran.pdf');
                link.setAttribute('target', '_blank'); // Optional: open in new tab if browser blocks download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </button>
          </div>
          <div className="button">
            <button onClick={() => window.open("https://github.com/Dhamodran16", "_blank")}>View All Projects</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 
