import React from 'react';

const Services = () => (
  <section className="services" id="services">
    <div className="content">
      <div className="title"><span>Services</span></div>
      <div className="boxes">
        {/* Service 1 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="topic">Web Development</div>
          <p>Creating responsive and optimized websites.</p>
        </div>
        {/* Service 2 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-brain"></i>
          </div>
          <div className="topic">AI & Machine Learning</div>
          <p>Developing AI-powered solutions.</p>
        </div>
        {/* Service 3 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-database"></i>
          </div>
          <div className="topic">Web Scraping & Data Automation</div>
          <p>Extracting valuable insights from web data.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services; 