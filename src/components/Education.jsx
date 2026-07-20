import React from 'react';
import { GraduationCap, Server, Shield, Calendar } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      type: 'training',
      title: 'Cyber Security Training',
      institution: 'Offenso Hackers Academy',
      duration: 'Ongoing',
      description: 'Advanced study focusing on Ethical Hacking, Network Security, penetration testing frameworks, and hands-on simulation labs. Gaining deep insights into vulnerability scanning, cyber defense practices, and exploit analysis.',
      color: 'text-cyber-green',
      glow: 'shadow-[0_0_15px_rgba(0,255,157,0.15)]',
      border: 'border-cyber-green/30',
      icon: Shield
    },
    {
      type: 'degree',
      title: 'Bachelor of Computer Applications (BCA)',
      institution: 'University of Calicut / BCA Graduate',
      duration: 'Graduated',
      description: 'Acquired core computing fundamentals, software engineering concepts, database management systems (DBMS), data structures, and object-oriented programming methodologies.',
      color: 'text-cyber-cyan',
      glow: 'shadow-[0_0_15px_rgba(0,212,255,0.15)]',
      border: 'border-cyber-cyan/30',
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-20 bg-cyber-dark/40 relative">
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-element reveal-fade">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyber-cyan mb-2">// 02 . CURRICULUM_TIMELINE</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">Education & Training</h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-green mx-auto mt-4" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-32 space-y-12">
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative pl-8 md:pl-12 reveal-element reveal-slide-right">
                {/* Timeline node icon */}
                <span className={`absolute -left-5 top-1.5 flex items-center justify-center w-10 h-10 rounded-lg bg-cyber-bg border ${item.border} ${item.glow}`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </span>

                {/* Left Side Meta Info (Desktop only) */}
                <div className="md:absolute md:right-full md:mr-12 md:top-2.5 text-left md:text-right font-mono text-xs text-slate-500 mb-2 md:mb-0 md:w-28">
                  <div className="flex items-center md:justify-end space-x-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span className="uppercase tracking-wider font-semibold">{item.duration}</span>
                  </div>
                  <div className="text-[10px] text-slate-600">ID: EDU_NODE_0{index + 1}</div>
                </div>

                {/* Main Card */}
                <div className="glow-card rounded-lg p-6 text-left border border-cyber-border/40 hover:border-cyber-green/30">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-bold text-white font-sans tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  
                  <div className="font-mono text-xs text-cyber-cyan mb-4 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
