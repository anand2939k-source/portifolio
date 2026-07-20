import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal, Download } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].name.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-cyber-bg/85 backdrop-blur-md border-b border-cyber-border py-4'
      : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-cyber-cyan group-hover:text-cyber-green transition-colors duration-300" />
            <div className="font-mono text-xl font-bold tracking-tight">
              <span className="text-white">ANAND</span>
              <span className="text-cyber-green">.</span>
              <span className="text-cyber-cyan">K</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-mono text-sm tracking-wide transition-colors duration-200 hover:text-cyber-green relative py-1 ${activeSection === link.name.toLowerCase()
                    ? 'text-cyber-green'
                    : 'text-slate-400'
                    }`}
                >
                  {link.name}
                  {activeSection === link.name.toLowerCase() && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-green shadow-[0_0_8px_#00ff9d]" />
                  )}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="/ANANDK.pdf"
              download="ANANDK.pdf"
              className="flex items-center space-x-2 px-4 py-2 rounded border border-cyber-green/40 bg-cyber-green/5 text-cyber-green hover:bg-cyber-green hover:text-cyber-bg font-mono text-xs tracking-wider transition-all duration-300 shadow-[0_0_10px_rgba(0,255,157,0.1)] hover:shadow-[0_0_15px_rgba(0,255,157,0.35)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ACCESS_RESUME</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 rounded focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-cyber-bg/95 border-b border-cyber-border backdrop-blur-lg transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
        <div className="px-4 pt-2 pb-6 space-y-3 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded font-mono text-base tracking-wide transition-colors ${activeSection === link.name.toLowerCase()
                ? 'bg-cyber-green/10 text-cyber-green border-l-2 border-cyber-green'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/ANANDK.pdf"
            download="ANANDK.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded border border-cyber-green bg-cyber-green/10 text-cyber-green font-mono text-sm transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            <span>ACCESS_RESUME</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
