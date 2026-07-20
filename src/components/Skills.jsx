import React from 'react';
import { Code2, ShieldAlert, Wrench, Shield, Network, Lock, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'text-cyber-cyan border-cyber-cyan/30',
      description: 'Languages used for scripting, web development, and secure coding systems.',
      skills: [
        {
          name: 'Python',
          level: 'Intermediate',
          percent: 75,
          svg: (
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#3776AB]">
              <path d="M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2zm.052 3.109c-1.892 0-3.328.188-3.957.513-.93.48-1.57 1.341-1.616 2.766-.051 1.57.014 2.378.014 2.378s.77-.07 1.63-.092v-1.8c0-1.223.864-2.148 2.052-2.148h3.69c1.077 0 1.942.756 1.942 1.838v1.393h-4.305c-1.39 0-2.617.925-2.617 2.327v1.895c0 1.393 1.18 2.316 2.57 2.316h5.819s1.303-.016 1.849-.624c.484-.542.544-1.423.544-2.314v-2.733c0-2.457-1.782-4.889-4.876-4.889h-1.066zm-2.038 8.922H5.819c-1.076 0-1.942-.756-1.942-1.838v-1.394h4.305c1.39 0 2.617-.925 2.617-2.327V7.577c0-1.394-1.18-2.317-2.57-2.317H2.41s-1.303.016-1.849.624C.077 6.426.017 7.307.017 8.198v2.733c0 2.457 1.782 4.889 4.876 4.889h1.066c1.892 0 3.328-.188 3.957-.513.93-.48 1.57-1.341 1.616-2.766.051-1.57-.014-2.378-.014-2.378s-.77.07-1.63.092v1.8c0 1.223-.864 2.148-2.052 2.148zm2.038-7.397a.64.64 0 1 1 0-1.278.64.64 0 0 1 0 1.278zm2.038 8.016a.64.64 0 1 1 0-1.278.64.64 0 0 1 0 1.278z" />
            </svg>
          )
        },
        {
          name: 'HTML5',
          level: 'Advanced',
          percent: 85,
          svg: (
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#E34F26]">
              <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 15.3l.3-3.2H8.3l-.2-2.3h7.9l.2-2.3H5.7l.6 6.9h8.8l-.3 3.2-2.8.9-2.8-.9-.2-2.2H6.8l.3 4.5 4.9 1.5 4.9-1.5.3-2.1z" />
            </svg>
          )
        },
        {
          name: 'CSS3',
          level: 'Intermediate',
          percent: 75,
          svg: (
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#1572B6]">
              <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16 6H6.3l.2 2.3h10.8l-.3 3.2H8.5l-.2-2.3H6l.4 4.6 5.6 1.8 5.6-1.8.6-6.9.1-1.6z" />
            </svg>
          )
        },
        {
          name: 'JavaScript',
          level: 'Intermediate',
          percent: 70,
          svg: (
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#F7DF1E]">
              <path d="M0 0h24v24H0V0zm20.3 18.7c-.8-.5-1.5-.9-2.2-.4-.6.4-.8.9-.6 1.4.2.6.9.8 1.6.5.6-.3.9-.9.8-1.5zm-5.7-1.4c-.6-.4-1.2-.5-1.8-.2-.5.3-.7.8-.5 1.3.2.5.8.7 1.4.4.6-.3.8-.9.7-1.5zM24 24h-6v-2.3c0-1.1-.6-1.9-1.5-2.2-.6-.2-1.3-.2-1.9 0-.9.3-1.5 1.1-1.5 2.2V24H7v-8.2c0-1.7 1.4-3.1 3.1-3.1h4.8c1.7 0 3.1 1.4 3.1 3.1V24h6v-8c0-4.4-3.6-8-8-8h-4V0H0v24h24V24z" />
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M24 24H0V0h24v24z" fill="none"/>
              <path d="M18.82 17.05c-.83-.48-1.78-.22-2.25.61-.43.76-.23 1.7.53 2.14.76.44 1.7.23 2.14-.53.47-.83.21-1.78-.62-2.25zM12.35 15.65c-.83-.48-1.78-.22-2.25.61-.43.76-.23 1.7.53 2.14.76.44 1.7.23 2.14-.53.47-.83.21-1.78-.62-2.25z" fill="#000"/>
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12.2 16.5c0-.6.5-1 1-1s1 .4 1 1-.5 1-1 1-1-.4-1-1zm-6 0c0-.6.5-1 1-1s1 .4 1 1-.5 1-1 1-1-.4-1-1z" fill="#000"/>
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.6 18.6c-.6.8-1.6 1.3-2.6 1.3-.9 0-1.8-.4-2.4-1.1-.6-.7-.9-1.6-.9-2.5 0-1.9 1.5-3.4 3.4-3.4 1.9 0 3.4 1.5 3.4 3.4.1.9-.3 1.8-.9 2.3zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#F7DF1E"/>
              <path d="M13.2 16.5c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5-.5-.2-.5-.5zm-6 0c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5-.5-.2-.5-.5z" fill="#000"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Technical Skills',
      icon: ShieldAlert,
      color: 'text-cyber-green border-cyber-green/30',
      description: 'Hands-on focus in digital protection, threats verification, and secure practices.',
      skills: [
        {
          name: 'Cyber Security',
          level: 'Basic',
          percent: 55,
          icon: Shield
        },
        {
          name: 'Networking Fundamentals',
          level: 'Basic',
          percent: 50,
          icon: Network
        },
        {
          name: 'Secure Software Dev',
          level: 'Intermediate',
          percent: 70,
          icon: Lock
        }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'text-cyber-purple border-cyber-purple/30',
      description: 'Environments and version control pipelines used in daily development.',
      skills: [
        {
          name: 'Git',
          level: 'Advanced',
          percent: 80,
          icon: GitBranch
        },
        {
          name: 'GitHub',
          level: 'Advanced',
          percent: 85,
          icon: () => (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-cyber-bg relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-element reveal-fade">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyber-green mb-2">// 03 . CAPABILITIES_MATRIX</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">Core Skillset</h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-green mx-auto mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = category.icon;
            return (
              <div 
                key={catIndex} 
                className={`glow-card rounded-lg p-6 flex flex-col h-full border border-cyber-border/40 text-left bg-cyber-dark/45 reveal-element`}
                style={{ transitionDelay: `${catIndex * 150}ms` }}
              >
                {/* Category Title */}
                <div className="flex items-center space-x-3 mb-4 border-b border-slate-800/80 pb-4">
                  <span className={`p-2 rounded bg-slate-900 border ${category.color}`}>
                    <CatIcon className="w-5 h-5" />
                  </span>
                  <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                    {category.title}
                  </h4>
                </div>

                <p className="text-slate-400 text-xs font-sans mb-6">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-6 flex-1">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skillIndex} className="space-y-2 group">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2.5">
                            {skill.svg ? (
                              <span className="w-6 h-6 flex items-center justify-center shrink-0">
                                {skill.svg}
                              </span>
                            ) : SkillIcon ? (
                              <span className="p-1 rounded bg-slate-900 border border-slate-800 text-cyber-green group-hover:text-white transition-colors duration-200">
                                <SkillIcon className="w-4 h-4" />
                              </span>
                            ) : null}
                            <span className="font-mono text-xs text-slate-300 font-semibold group-hover:text-cyber-green transition-colors duration-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-slate-500 uppercase">
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/60">
                          <div 
                            className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-green rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_#00ff9d]"
                            style={{ width: `${skill.percent}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
