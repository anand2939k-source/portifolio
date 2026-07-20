import React from 'react';
import { Trophy, CheckCircle, ShieldAlert, Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-cyber-dark/40 relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-element reveal-fade">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyber-cyan mb-2">// 06 . MILESTONE_SCOPES</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">Achievements</h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-green mx-auto mt-4" />
        </div>

        {/* Achievement Card */}
        <div className="reveal-element reveal-slide-left">
          <div className="glow-card rounded-lg p-8 border border-cyber-green/30 bg-cyber-bg/75 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            
            {/* Left verified check banner visual */}
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-cyber-green/10 border border-cyber-green/30 shadow-[0_0_15px_rgba(0,255,157,0.2)]">
              <Award className="w-8 h-8 text-cyber-green" />
            </div>

            {/* Achievement text content */}
            <div className="flex-grow text-center md:text-left space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-cyber-green font-bold uppercase tracking-wider">
                  VERIFIED_RECRUITMENT_NODE
                </span>
                <h4 className="text-2xl font-bold text-white font-sans tracking-tight">
                  TCS Smart Hiring – Selected Candidate
                </h4>
              </div>

              <p className="text-slate-300 text-base leading-relaxed font-sans">
                Selected through the TCS Smart Hiring recruitment process for the role of Graduate Trainee.
              </p>

              {/* System details */}
              <div className="font-mono text-xs text-slate-500 flex flex-wrap gap-x-6 gap-y-2 pt-2 justify-center md:justify-start">
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-green" />
                  <span>ORGANIZATION: Tata Consultancy Services</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-green" />
                  <span>ROLE_NODE: Graduate Trainee</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-green" />
                  <span>STATUS: COMMITTED / SECURED</span>
                </div>
              </div>
            </div>

            {/* Micro verification seal (Right) */}
            <div className="absolute top-4 right-4 hidden md:flex items-center space-x-1.5 font-mono text-[9px] text-slate-500 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
              <CheckCircle className="w-3 h-3 text-cyber-green" />
              <span>OFFICIAL_PASS</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
