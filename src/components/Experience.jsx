import React from 'react';
import { ShieldCheck, Calendar, BookOpen, Terminal, CheckSquare } from 'lucide-react';

export default function Experience() {
  const learningAreas = [
    { title: 'Cyber Security', desc: 'Understanding core threat landscapes, defense strategies, and application safety.' },
    { title: 'Ethical Hacking Fundamentals', desc: 'Penetration testing methodologies, vulnerability detection, and system security assessments.' },
    { title: 'Network Security', desc: 'Analyzing network topologies, firewall routing mechanisms, and secure protocol enforcement.' },
    { title: 'Security Best Practices', desc: 'Information security principles, password hashes, encryption layers, and administrative audits.' },
    { title: 'Practical Security Labs', desc: 'Hands-on training, virtual sandboxes, vulnerability reproduction, and CTF challenges.' }
  ];

  return (
    <section id="experience" className="py-20 bg-cyber-bg relative">
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-element reveal-fade">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyber-green mb-2">// 07 . ACTIVITY_LOGS</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">Experience</h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-green mx-auto mt-4" />
        </div>

        {/* Experience details container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline node details */}
          <div className="lg:col-span-4 reveal-element reveal-slide-left">
            <div className="glow-card rounded-lg p-6 border border-cyber-border/40 text-left space-y-4 bg-cyber-dark/40">
              <div className="flex items-center space-x-2 text-cyber-green font-mono text-xs">
                <Calendar className="w-4 h-4" />
                <span className="uppercase tracking-wider">CURRENT_ROLE</span>
              </div>
              <h4 className="text-xl font-bold text-white font-sans">Cyber Security Student</h4>
              <p className="font-mono text-xs text-cyber-cyan">Offenso Hackers Academy</p>
              
              <div className="border-t border-slate-800/80 pt-4 mt-4 font-mono text-[11px] text-slate-500 space-y-2">
                <div>LOG_TYPE: TRAINING</div>
                <div>FOCUS: OFFENSIVE_DEFENSIVE</div>
                <div>LOCATION: REMOTE_LABS</div>
                <div>AUDIT: ONGOING</div>
              </div>
            </div>
          </div>

          {/* Checklist areas */}
          <div className="lg:col-span-8 space-y-4 text-left reveal-element reveal-slide-right">
            <div className="p-6 rounded-lg bg-cyber-dark/25 border border-slate-800/60 space-y-6">
              <div className="flex items-center space-x-3 border-b border-slate-800/60 pb-3">
                <Terminal className="w-5 h-5 text-cyber-cyan" />
                <span className="font-mono text-xs text-white uppercase tracking-wider">CORE_SYLLABUS_MILESTONES</span>
              </div>

              {/* Tasks list */}
              <div className="space-y-4">
                {learningAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group">
                    <span className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded border border-cyber-green/50 bg-cyber-green/5 flex items-center justify-center group-hover:bg-cyber-green group-hover:border-cyber-green transition-all duration-200">
                        <CheckSquare className="w-3.5 h-3.5 text-cyber-green group-hover:text-cyber-bg transition-colors" />
                      </div>
                    </span>
                    <div className="space-y-1">
                      <h5 className="font-mono text-sm font-semibold text-white group-hover:text-cyber-green transition-colors duration-200">
                        {area.title}
                      </h5>
                      <p className="text-slate-400 text-xs font-sans leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
