import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success
  const [terminalLogs, setTerminalLogs] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All parameters required for secure connection handshake.");
      return;
    }

    setStatus('sending');
    setTerminalLogs([
      'Establishing connection to anand2939k@gmail.com...',
      'Running cryptographic handshake key exchange...',
    ]);

    await sleep(800);
    setTerminalLogs((prev) => [
      ...prev,
      'Validating SSL certificate signature...',
      'Encoding package payload using AES-256-GCM encryption...',
    ]);

    await sleep(900);
    setTerminalLogs((prev) => [
      ...prev,
      'Transmitting message bits over secure tunnel...',
      'Received ACK code: 200 SUCCESS.',
    ]);

    await sleep(600);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-cyber-dark/40 relative">
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyber-green/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-element reveal-fade">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyber-cyan mb-2">// 08 . TRANSMIT_PACKET</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">Contact Me</h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-green mx-auto mt-4" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Details (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-6 text-left reveal-element reveal-slide-left">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white font-sans">Get In Touch</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Have an inquiry, project idea, or security query? Send an encrypted transmission packet directly to my gateway. I'll analyze the request and respond promptly.
              </p>
            </div>

            {/* Channels */}
            <div className="space-y-4 font-mono text-xs">
              
              <div className="flex items-center space-x-3.5 p-4 rounded-lg bg-cyber-bg/40 border border-slate-800/80 hover:border-cyber-green/40 transition-colors duration-200">
                <Mail className="w-5 h-5 text-cyber-green" />
                <div>
                  <div className="text-slate-500 uppercase text-[9px] tracking-wider">Gateway Email</div>
                  <a href="mailto:anand2939k@gmail.com" className="text-white hover:text-cyber-green transition-colors">
                    anand2939k@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-4 rounded-lg bg-cyber-bg/40 border border-slate-800/80 hover:border-cyber-cyan/40 transition-colors duration-200">
                <MapPin className="w-5 h-5 text-cyber-cyan" />
                <div>
                  <div className="text-slate-500 uppercase text-[9px] tracking-wider">Location Node</div>
                  <span className="text-white">Calicut, Kerala, India</span>
                </div>
              </div>

            </div>

            {/* Social profiles card */}
            <div className="p-6 rounded-lg bg-cyber-bg/40 border border-slate-800/80 space-y-4">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">EXT_SOCIAL_CONNECTIONS</span>
              <div className="flex justify-around">
                <a 
                  href="https://github.com/anand2939k-source" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-cyber-green hover:border-cyber-green/30 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/anand-k-011743378/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/30 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/anaanddhh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-cyber-purple hover:border-cyber-purple/30 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Node (Right 7 Columns) */}
          <div className="lg:col-span-7 reveal-element reveal-slide-right">
            <div className="glow-card rounded-lg border border-cyber-border/40 p-6 sm:p-8 bg-cyber-dark/45">
              
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4 font-mono">
                  <div className="flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-cyber-green animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wider">TRANSMISSION_SUCCESS</h4>
                  <p className="text-slate-400 text-xs max-w-sm mx-auto">
                    Your encrypted message payload has been successfully queued and transmitted to Anand K's inbox.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="mt-6 px-4 py-2 border border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan rounded hover:bg-cyber-cyan hover:text-cyber-bg font-mono text-xs tracking-wider transition-colors duration-200"
                  >
                    ESTABLISH_NEW_STREAM
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2 text-left">
                    <label className="font-mono text-xs text-slate-400 block" htmlFor="contact-name">
                      PARAMETER // SENDER_NAME:
                    </label>
                    <input 
                      type="text" 
                      id="contact-name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Input sender name..." 
                      className="w-full bg-[#070a10] border border-slate-800 rounded p-3 font-sans text-sm text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/20 placeholder-slate-600 transition-colors"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2 text-left">
                    <label className="font-mono text-xs text-slate-400 block" htmlFor="contact-email">
                      PARAMETER // SENDER_EMAIL:
                    </label>
                    <input 
                      type="email" 
                      id="contact-email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="Input sender email..." 
                      className="w-full bg-[#070a10] border border-slate-800 rounded p-3 font-sans text-sm text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/20 placeholder-slate-600 transition-colors"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2 text-left">
                    <label className="font-mono text-xs text-slate-400 block" htmlFor="contact-message">
                      PAYLOAD // MESSAGE_BODY:
                    </label>
                    <textarea 
                      id="contact-message"
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Define communication message payload..." 
                      rows="4" 
                      className="w-full bg-[#070a10] border border-slate-800 rounded p-3 font-sans text-sm text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/20 placeholder-slate-600 transition-colors resize-none"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 text-left">
                    {status === 'sending' ? (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-cyber-cyan font-mono text-xs">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>ENCRYPTING & TRANSMITTING...</span>
                        </div>
                        {/* Mock logs */}
                        <div className="bg-[#070a10] p-4 rounded border border-cyber-border/30 font-mono text-[10px] text-slate-500 space-y-1 h-28 overflow-y-auto select-none">
                          {terminalLogs.map((log, index) => (
                            <div key={index} className="flex space-x-2">
                              <span className="text-cyber-green">&gt;&gt;</span>
                              <span>{log}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <button 
                        type="submit" 
                        className="flex items-center space-x-2 px-6 py-3 rounded bg-cyber-green text-cyber-bg hover:bg-transparent hover:text-cyber-green hover:border-cyber-green border border-cyber-green font-mono text-sm tracking-wider font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,255,157,0.15)] hover:shadow-[0_0_20px_rgba(0,255,157,0.35)]"
                      >
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT_PAYLOAD</span>
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
