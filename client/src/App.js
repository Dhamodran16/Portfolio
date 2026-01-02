import React, { lazy, Suspense, useState, useEffect } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Announcement from './components/Announcement';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const TechStackScroller = lazy(() => import('./components/TechStackScroller'));
const Internships = lazy(() => import('./components/Internships'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [announcementClosed, setAnnouncementClosed] = useState(false);

  useEffect(() => {
    if (announcementClosed) {
      // Initialize AOS animations - only trigger when scrolling to sections
      AOS.init({
        duration: 1200,
        once: true,
        easing: 'ease-in-out',
        offset: 150, // Start animation when element is 150px from viewport bottom
        delay: 0,
        startEvent: 'DOMContentLoaded',
        throttleDelay: 99,
        debounceDelay: 50,
      });
      
      // Refresh AOS to detect elements currently in viewport
      // Home section will animate immediately if already visible
      requestAnimationFrame(() => {
        AOS.refresh();
      });
    }
  }, [announcementClosed]);

  return (
    <div className={announcementClosed ? 'animations-enabled' : 'animations-disabled'}>
      <Announcement onClose={() => setAnnouncementClosed(true)} />
      <Navbar />
      <Home />
      <Suspense fallback={<div style={{minHeight: '100vh', background: 'black'}}></div>}>
        <About />
        <Skills />
        <Projects />
        <TechStackScroller />
        <Internships />
        <Services />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
