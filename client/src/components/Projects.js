import React from 'react';

const projectUrls = [
  "https://github.com/Dhamo/weather-forecasting",
  "https://github.com/Dhamodran16/webscraping.git",
  "https://github.com/Dhamodran16/GenAI-Quezz-game.git",
  "https://github.com/Dhamodran16/FoodExpress.git"
];

const Projects = () => (
  <section className="projects" id="projects">
    <div className="content">
      <div className="title"><span>Projects</span></div>
      <div className="boxes">
        {/* Project 1 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-cloud"></i>
          </div>
          <div className="topic">Machine Learning-Based Weather Forecasting</div>
          <p>Developed a predictive model for accurate weather forecasting using Python and Machine Learning.</p>
          <p><strong>Technologies used:</strong> Python, TensorFlow, Flask, OpenWeather API</p>
          <a href={projectUrls[0]} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Project 2 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="topic">Web Scraping Automation</div>
          <p>Built a web scraper to extract large-scale data from websites efficiently. Achieved 1st place in a Web Scraping competition.</p>
          <p><strong>Technologies used:</strong> Python, BeautifulSoup, Selenium</p>
          <a href={projectUrls[1]} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Project 3 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-gamepad"></i>
          </div>
          <div className="topic">Gen AI Interactive Learning Games</div>
          <p>Developed an AI-powered interactive learning game to enhance user engagement. Officially certified by Intel Gen AI.</p>
          <p><strong>Technologies used:</strong> HTML , CSS , JavaScript , Python (Model)</p>
          <a href={projectUrls[2]} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Project 4 */}
        <div className="box">
          <div className="icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="topic">FoodExpress – Smart Food Delivery Website</div>
          <p>Built a full-stack food delivery app with real-time ordering, user login, and dynamic restaurant listings using React, Node.js, Tailwind CSS, and MongoDB Atlas.</p>
          <p><strong>Technologies used:</strong> React, TypeScript , Tailwind , MongoDB Atlas , Node.js , Express </p>
          <a href={projectUrls[3]} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 