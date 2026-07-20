import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Mail, MapPin, ArrowRight, Play, Download } from 'lucide-react';
import MatrixRain from './MatrixRain';

export default function Hero() {
  // Subtitle typewriter effect logic
  const titles = ["BCA Graduate", "Cyber Security Student", "Ethical Hacking Enthusiast"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTitles = 1500;

  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenTitles);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  // Terminal Simulator State
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: 'Initializing ANAND-SEC OS [v1.0.4]...' },
    { type: 'system', text: 'Security bypass: ENABLED. Access level: GUEST.' },
    { type: 'system', text: "Type 'help' to see list of available commands." }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalBottomRef = useRef(null);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    if (!command) return;

    const newHistory = [...terminalHistory, { type: 'input', text: `guest@anand-sec:~$ ${terminalInput}` }];

    switch (command) {
      case 'help':
        newHistory.push({ 
          type: 'output', 
          text: 'Available Commands:\n  about     - Brief background of Anand K\n  skills    - List core competencies\n  projects  - Show featured developments\n  stats     - System metrics & credentials\n  contact   - Display encrypted channels\n  clear     - Wipe console screen' 
        });
        break;
      case 'about':
        newHistory.push({ 
          type: 'output', 
          text: 'Anand K: BCA Graduate with a core focus on Ethical Hacking, Cyber Security, and AI. Pursuing advanced training at Offenso Hackers Academy.' 
        });
        break;
      case 'skills':
        newHistory.push({ 
          type: 'output', 
          text: 'Core Stack:\n  Languages: Python, HTML, CSS, JavaScript\n  Security : Networking, Pentesting, Secure Software Dev\n  Tools    : Git, GitHub, Linux, VS Code' 
        });
        break;
      case 'projects':
        newHistory.push({ 
          type: 'output', 
          text: 'Featured Project:\n  Skin Lesion Classification Using Deep Learning\n  - Tech: Python, Deep Learning, Image Classification\n  - Link: https://github.com/anand2939k-source' 
        });
        break;
      case 'stats':
        newHistory.push({ 
          type: 'output', 
          text: 'System Metrics:\n  - Focus Level   : [██████████] 100%\n  - Caffeine Index: [███████░░░] 70%\n  - Clearance Level: GUEST_ACC\n  - Status        : ONLINE / LABS_ACTIVE' 
        });
        break;
      case 'contact':
        newHistory.push({ 
          type: 'output', 
          text: 'Communication Channels:\n  - Email: anand2939k@gmail.com\n  - GitHub: https://github.com/anand2939k-source\n  - LinkedIn: linkedin.com/in/anand-k-011743378/' 
        });
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        newHistory.push({ 
          type: 'error', 
          text: `Command not found: '${command}'. Type 'help' for valid command list.` 
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-cyber-bg cyber-grid">
      {/* Background MatrixRain */}
      <MatrixRain opacity={0.07} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text column */}
        <div className="lg:col-span-7 space-y-6 text-left reveal-element reveal-fade reveal-visible">
          {/* Status badge */}
          <div className="inline-flex items-center space-x-2 bg-cyber-green/10 border border-cyber-green/30 px-3 py-1 rounded-full text-xs font-mono text-cyber-green tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
            <span>SECURE_SHELL_CONNECTED</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-green">Anand K</span>
          </h1>

          {/* Subtitle typewriter */}
          <div className="font-mono text-xl sm:text-2xl text-slate-300 h-8 flex items-center">
            <span>&gt;&nbsp;</span>
            <span className="text-cyber-cyan">{displayText}</span>
            <span className="border-r-2 border-cyber-green ml-1 animate-caret">&nbsp;</span>
          </div>

          {/* Hook & Location */}
          <p className="text-slate-400 text-lg max-w-xl font-sans">
            Building secure digital solutions through code and curiosity.
          </p>

          <div className="flex items-center space-x-2 text-slate-500 font-mono text-sm">
            <MapPin className="w-4 h-4 text-cyber-green" />
            <span>Calicut, Kerala, India</span>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="flex items-center space-x-2 px-6 py-3 rounded bg-cyber-cyan text-cyber-bg hover:bg-transparent hover:text-cyber-cyan hover:border-cyber-cyan border border-cyber-cyan font-mono text-sm tracking-wider font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.25)] hover:shadow-[0_0_20px_rgba(0,212,255,0.45)]"
            >
              <span>VIEW_PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={`${import.meta.env.BASE_URL}ANANDK.pdf`}
              download="ANANDK.pdf"
              className="flex items-center space-x-2 px-6 py-3 rounded border border-cyber-green/50 bg-cyber-green/10 text-cyber-green hover:bg-cyber-green hover:text-cyber-bg font-mono text-sm tracking-wider font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,255,157,0.15)] hover:shadow-[0_0_20px_rgba(0,255,157,0.4)]"
            >
              <Download className="w-4 h-4" />
              <span>ACCESS_RESUME</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center space-x-2 px-6 py-3 rounded border border-slate-700 bg-slate-800/40 text-slate-300 hover:border-cyber-green hover:text-cyber-green font-mono text-sm tracking-wider transition-all duration-300"
            >
              <span>CONTACT_ME</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 pt-4 text-slate-500">
            <a 
              href="https://github.com/anand2939k-source" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyber-green transition-colors duration-200 animate-pulse-glow"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/anand-k-011743378/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyber-cyan transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/anaanddhh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyber-purple transition-colors duration-200"
              aria-label="Instagram Profile"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="mailto:anand2939k@gmail.com" 
              className="hover:text-cyber-green transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Terminal column */}
        <div className="lg:col-span-5 w-full max-w-lg mx-auto reveal-element reveal-fade reveal-visible">
          <div className="terminal-window rounded-lg overflow-hidden bg-cyber-dark/85 backdrop-blur-lg flex flex-col h-80 text-left">
            {/* Terminal Header */}
            <div className="terminal-header px-4 py-3 flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="terminal-btn bg-red-500/80" />
                <span className="terminal-btn bg-yellow-500/80" />
                <span className="terminal-btn bg-green-500/80" />
              </div>
              <div className="flex items-center space-x-2 text-slate-500 font-mono text-xs">
                <TerminalIcon className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>guest@anand-sec:~</span>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-2 select-text">
              {terminalHistory.map((item, index) => (
                <div 
                  key={index} 
                  className={
                    item.type === 'system' 
                      ? 'text-slate-500' 
                      : item.type === 'input' 
                      ? 'text-white font-semibold' 
                      : item.type === 'error' 
                      ? 'text-red-400' 
                      : 'text-cyber-green whitespace-pre-wrap'
                  }
                >
                  {item.text}
                </div>
              ))}
              <div ref={terminalBottomRef} />
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleTerminalSubmit} className="border-t border-cyber-border/40 p-2 flex items-center bg-[#070a10]">
              <span className="font-mono text-xs text-cyber-cyan px-2 select-none">guest@anand-sec:~$</span>
              <input 
                type="text" 
                value={terminalInput} 
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help'..." 
                className="flex-1 bg-transparent border-0 outline-none text-cyber-green font-mono text-xs caret-cyber-green focus:ring-0 p-1 w-full"
                autoComplete="off"
                spellCheck="false"
              />
              <button 
                type="submit" 
                className="p-1.5 text-slate-500 hover:text-cyber-cyan transition-colors"
                aria-label="Run command"
              >
                <Play className="w-3 h-3 fill-current" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
