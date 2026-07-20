import React from 'react';
import { ShieldAlert, User, Cpu, Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cyber-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyber-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyber-green/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-element reveal-fade">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyber-green mb-2">// 01 . IDENTITY_CHECK</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">About Me</h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-green mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual Profile Photo & Diagnostics (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-8 reveal-element reveal-slide-left">
            {/* Cyber Profile Image Frame */}
            <div className="glow-card rounded-lg overflow-hidden border border-cyber-border/40 p-4 bg-cyber-dark/40 flex flex-col items-center justify-center relative group">
              {/* Sci-fi scanner overlay lines */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-green shadow-[0_0_10px_#00ff9d] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none z-20" />
              
              {/* Corner brackets details */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyber-cyan" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyber-cyan" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyber-cyan" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyber-cyan" />

              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-cyber-border/30 overflow-hidden bg-[#070a10] flex items-center justify-center">
                {/* Fallback SVG profile or photo */}
                <img 
                  src={`${import.meta.env.BASE_URL}PHOTO1.jpeg`} 
                  alt="Anand K" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-900 flex-col space-y-2">
                  <User className="w-20 h-20 text-cyber-cyan/50 animate-pulse" />
                  <span className="font-mono text-[9px] text-cyber-cyan/60 uppercase">PROFILE_IMAGE</span>
                </div>
              </div>

              <div className="mt-4 font-mono text-[10px] text-slate-500 tracking-wider flex items-center justify-between w-full px-2">
                <span>SUBJECT: <span className="text-white">ANAND_K.JPEG</span></span>
                <a 
                  href={`${import.meta.env.BASE_URL}ANANDK.pdf`} 
                  download="ANANDK.pdf"
                  className="text-cyber-green hover:text-white flex items-center space-x-1 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>DOWNLOAD_CV</span>
                </a>
              </div>
            </div>

            <div className="glow-card rounded-lg overflow-hidden border border-cyber-border/40 p-6 bg-cyber-dark/40">
              <div className="flex items-center space-x-3 border-b border-cyber-border/20 pb-4 mb-6">
                <Cpu className="w-6 h-6 text-cyber-cyan animate-pulse" />
                <span className="font-mono text-sm font-bold text-white tracking-wider">SECURE_PROFILE_DIAGNOSTICS</span>
              </div>

              <div className="space-y-4 font-mono text-xs text-left">
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-500">SUBJECT_NAME:</span>
                  <span className="text-white font-semibold">ANAND K</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-500">CREDENTIAL:</span>
                  <span className="text-cyber-cyan">BCA GRADUATE</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-500">SECTOR_EXPERTISE:</span>
                  <span className="text-cyber-green">CYBER SECURITY / SEC-DEV</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-500">TRAINING_ACADEMY:</span>
                  <span className="text-white">OFFENSO HACKERS ACADEMY</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-500">CURRENT_STATUS:</span>
                  <span className="flex items-center space-x-1.5 text-cyber-green">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-ping" />
                    <span>LABS_ACTIVE</span>
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">SECURITY_CLEARANCE:</span>
                  <span className="text-cyber-green">LEVEL_1_AUTHORIZED</span>
                </div>
              </div>

              {/* Graphical nodes mock */}
              <div className="mt-8 pt-6 border-t border-cyber-border/20 flex justify-around">
                <div className="text-center">
                  <div className="text-cyber-cyan font-mono text-lg font-bold">100%</div>
                  <div className="text-slate-500 font-mono text-[9px] uppercase tracking-wider mt-1">Integrity</div>
                </div>
                <div className="text-center">
                  <div className="text-cyber-green font-mono text-lg font-bold">ACTIVE</div>
                  <div className="text-slate-500 font-mono text-[9px] uppercase tracking-wider mt-1">Audit Mode</div>
                </div>
                <div className="text-center">
                  <div className="text-cyber-cyan font-mono text-lg font-bold">SECURE</div>
                  <div className="text-slate-500 font-mono text-[9px] uppercase tracking-wider mt-1">Core Shield</div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Text Column (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left reveal-element reveal-slide-right">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyber-cyan">
                <User className="w-5 h-5" />
                <h4 className="font-mono text-sm font-semibold tracking-wider">BIO_RETRIEVAL_SUCCESSFUL</h4>
              </div>
              <p className="text-slate-300 leading-relaxed font-sans text-base">
                I am a BCA Graduate with a strong passion for Cyber Security, Ethical Hacking, Cloud Technologies, and Software Development. I am currently pursuing Cyber Security training at Offenso Hackers Academy and continuously improving my technical skills through hands-on learning, certifications, and real-world projects.
              </p>
              <p className="text-slate-300 leading-relaxed font-sans text-base">
                I enjoy solving security challenges, learning emerging technologies, and building innovative applications that combine Artificial Intelligence and Cyber Security.
              </p>
            </div>

            {/* Objective Box */}
            <div className="relative overflow-hidden rounded-lg border border-cyber-green/30 bg-cyber-green/5 p-6 mt-8">
              {/* Corner accent glow indicator */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyber-green/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-start space-x-3">
                <ShieldAlert className="w-6 h-6 text-cyber-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-sm font-semibold text-cyber-green tracking-wide uppercase mb-2">
                    Career Objective
                  </h4>
                  <p className="text-slate-300 font-sans text-sm leading-relaxed">
                    To build a successful career in Cyber Security by applying my technical knowledge, continuously learning new technologies, and contributing to innovative and secure digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
