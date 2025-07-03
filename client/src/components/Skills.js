import React from 'react';

const Skills = () => (
  <section className="skills" id="skills">
    <div className="content">
      <div className="title"><span>My Skills</span></div>
      <div className="skills-container">
        {/* Technical Skills */}
        <div className="skills-category">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill">
              <div className="skill-name">Programming Languages</div>
              <div className="skill-list">C , C++ , Java , Python </div>
            </div>
            <div className="skill">
              <div className="skill-name">Web Technologies</div>
              <div className="skill-list">HTML , CSS , JavaScript, React , Node.js(Express) , TypeScript , Tailwind</div>
            </div>
            <div className="skill">
              <div className="skill-name">Databases</div>
              <div className="skill-list">MongoDB , FireBase </div>
            </div>
            <div className="skill">
              <div className="skill-name">AI & Machine Learning</div>
              <div className="skill-list">TensorFlow , OpenCV , NLP </div>
            </div>
          </div>
        </div>
        {/* Soft Skills */}
        <div className="skills-category">
          <h2>Soft Skills</h2>
          <div className="skills-grid">
            <div className="skill">
              <div className="skill-name">Problem-solving</div>
            </div>
            <div className="skill">
              <div className="skill-name">Time management</div>
            </div>
            <div className="skill">
              <div className="skill-name">Communication skills</div>
            </div>
            <div className="skill">
              <div className="skill-name">Adaptability & Learning mindset</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 