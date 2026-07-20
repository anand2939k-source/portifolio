import React from 'react';
import { Lock } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'proj-01',
      title: 'Skin Lesion Classification Using Deep Learning',
      category: 'Deep Learning / AI Healthcare',
      description: 'Developed an AI-powered deep learning model for skin lesion classification to assist in the early detection of skin diseases using image classification techniques.',
      tags: ['Python', 'Deep Learning', 'AI', 'Image Classification'],
      codeLink: 'https://skinlesion-frontend.vercel.app',
      status: 'ACTIVE_DEPLOY',
      statusColor: 'text-cyber-green border-cyber-green/30 bg-cyber-green/10',
      active: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cyber-dark/40 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-element reveal-fade">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyber-cyan mb-2">// 04 . DEPLOYED_SERVICES</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">Featured Projects</h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-green mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glow-card rounded-lg flex flex-col justify-between h-full border border-cyber-border/40 text-left bg-cyber-bg/50 relative overflow-hidden reveal-element`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Blur accent */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-cyber-cyan/10 to-cyber-green/10 rounded-full filter blur-xl" />

              {/* Card Body */}
              <div className="p-6 space-y-4 relative z-10">
                {/* Header Info */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{project.id}</span>
                  <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-cyber-cyan font-mono tracking-wider">{project.category}</span>
                  <h4 className="text-xl font-bold text-white font-sans tracking-tight leading-tight group-hover:text-cyber-green transition-colors duration-200">
                    {project.title}
                  </h4>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed font-sans min-h-[80px]">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 relative z-10 flex items-center justify-between">
                {project.active ? (
                  <>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xs font-mono text-cyber-green hover:text-white transition-colors duration-200"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span>https://skinlesion-frontend.vercel.app</span>
                    </a>
                    <span className="text-slate-600 text-xs font-mono select-none">SHA_256: VALID</span>
                  </>
                ) : (
                  <>
                    <span className="flex items-center space-x-2 text-xs font-mono text-slate-600">
                      <Lock className="w-4 h-4" />
                      <span>ACCESS_LOCKED</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-700">SEC_LEVEL_3</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
