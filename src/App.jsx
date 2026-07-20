import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize scroll reveal observer
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200 selection:bg-cyber-green selection:text-cyber-bg">
      <CustomCursor />
      {/* Background digital overlay grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-repeat cyber-grid" />
      
      {/* Background terminal scanning effect */}
      <div className="fixed inset-0 pointer-events-none z-20 pointer-events-none h-2 bg-gradient-to-b from-cyber-cyan/5 to-transparent animate-scanline" />

      {/* Main UI */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
