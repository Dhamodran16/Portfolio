import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
