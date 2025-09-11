import React from 'react';
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiTypescript, SiHtml5, SiCss3, SiMongodb, SiExpress, SiTailwindcss, SiTensorflow, SiFlask, SiSelenium, SiStreamlit } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { MdImage } from "react-icons/md";
import { AiOutlineCloud } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
  const duplicate = (arr) => [...arr, ...arr];
const TechStackScroller = () => {
  const coreTech = [
    { name: 'Python', icon: <SiPython style={{ color: '#3776AB' }} /> },
    { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
    { name: 'React', icon: <SiReact style={{ color: '#61DAFB' }} /> },
    { name: 'Node.js', icon: <SiNodedotjs style={{ color: '#339933' }} /> },
    { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
    { name: 'HTML5', icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
    { name: 'CSS3', icon: <SiCss3 style={{ color: '#1572B6' }} /> },
    { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> },
    { name: 'Express.js', icon: <SiExpress style={{ color: '#D1D5DB' }} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#06B6D4' }} /> },
  ];

  const toolsAi = [
    { name: 'TensorFlow', icon: <SiTensorflow style={{ color: '#FF6F00' }} /> },
    { name: 'Flask', icon: <SiFlask style={{ color: '#E5E7EB' }} /> },
    { name: 'BeautifulSoup', icon: <BiCodeCurly style={{ color: '#4B8BBE' }} /> },
    { name: 'Selenium', icon: <SiSelenium style={{ color: '#43B02A' }} /> },
    { name: 'Streamlit', icon: <SiStreamlit style={{ color: '#FF4B4B' }} /> },
    { name: 'Image Processing', icon: <MdImage style={{ color: '#F472B6' }} /> },
    { name: 'OpenWeather API', icon: <AiOutlineCloud style={{ color: '#1DA1F2' }} /> },
    { name: 'Computer Vision', icon: <MdImage style={{ color: '#FACC15' }} /> },
    { name: 'Web Scraping', icon: <BiCodeCurly style={{ color: '#22C55E' }} /> },
    { name: 'Machine Learning', icon: <FaBrain style={{ color: '#A855F7' }} /> },
  ];


  return (
    <section className="tech-stack-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="tech-stack-header">
          <span className="title-text">Tech Stack</span>
        </div>

        <div className="tech-rows">
          {/* Row 1 - Right to Left */}
          <div className="tech-row-wrap">
            <div className="tech-row animate-scroll-left">
              {duplicate(coreTech).map((item, idx) => (
                <div key={`core-${idx}`} className="tech-pill">
                  <span className="tech-icon">{item.icon}</span>
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Left to Right */}
          <div className="tech-row-wrap">
            <div className="tech-row animate-scroll-right">
              {duplicate(toolsAi).map((item, idx) => (
                <div key={`tools-${idx}`} className="tech-pill">
                  <span className="tech-icon">{item.icon}</span>
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackScroller;