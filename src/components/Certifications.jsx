import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Cloud } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Cisco Certified Support Technician (CCST)',
      authority: 'Cisco Networking Academy',
      id: 'CCST-CYBER-SEC-921',
      desc: 'Validated foundations in cybersecurity concepts, network security principles, threat analysis, end-point management, and network protocols audits.',
      badgeColor: 'text-cyber-green',
      icon: ShieldCheck,
      logoColor: 'from-[#005073] to-[#009bde]',
      linkText: 'VERIFY_CISCO_KEY'
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      authority: 'Microsoft',
      id: 'AZ-900-CLOUD-448',
      desc: 'Demonstrated foundational knowledge of cloud services, Core Azure services, security, privacy, compliance, trust, and Azure pricing and service levels.',
      badgeColor: 'text-cyber-cyan',
      icon: Cloud,
      logoColor: 'from-[#0089d0] to-[#0072c6]',
      linkText: 'VERIFY_AZURE_KEY'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-cyber-bg relative">
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyber-green/5 rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-element reveal-fade">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyber-green mb-2">// 05 . COMPLIANCE_KEYS</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">Certifications</h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-green mx-auto mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div 
                key={index} 
                className={`glow-card rounded-lg p-6 flex flex-col justify-between border border-cyber-border/40 bg-cyber-dark/30 text-left reveal-element`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  {/* Badge visual */}
                  <div className="flex items-center space-x-4">
                    <span className={`p-3 rounded-lg bg-gradient-to-br ${cert.logoColor} shadow-md`}>
                      <Icon className="w-8 h-8 text-white" />
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-white font-sans tracking-tight leading-snug">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-xs text-slate-500">{cert.authority}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed font-sans pt-2">
                    {cert.desc}
                  </p>
                </div>

                {/* Footer validation code */}
                <div className="border-t border-slate-800/80 pt-4 mt-6 flex items-center justify-between">
                  <div className="font-mono text-xs text-slate-500">
                    <span>KEY_ID: </span>
                    <span className="text-white font-bold">{cert.id}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono text-xs text-cyber-green">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="cursor-pointer hover:underline" onClick={() => alert(`Verification system validation mock payload for ID: ${cert.id}`)}>
                      {cert.linkText}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
