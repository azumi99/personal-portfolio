'use client';

import React from 'react';

const experiences = [
  {
    role: 'Mobile Developer',
    company: 'ATT Group, Jakarta Barat',
    period: 'Dec 2022 — Present',
    desc: 'Developing and maintaining mobile projects including HRIS, Wakita apps, CRM, and FedEx Monitoring Service. Engineered advanced automation workflows with n8n & AI Agents for WhatsApp verification and Intelligent OCR. Built the AWB OCR Management Dashboard (Filament) and Transys Master Data system (ERPNext). Developed the FSM (Field Service Management) app using React Native Expo Custom Client for school TV distribution programs.',
    tech: ['React Native', 'Laravel', 'n8n', 'Filament', 'ERPNext']
  },
  {
    role: 'IT Support Specialist',
    company: 'ATT Group, Jakarta Barat',
    period: '2019 — 2022',
    desc: 'Responsible for technical support, network installation (LAN/Wireless), and hardware maintenance. Specialized in virtualization using VMware ESXi, managed Synology NAS infrastructure, and handled SEO and web development for internal WordPress profiles.',
    tech: ['VMware ESXi', 'Synology NAS', 'SEO', 'Networking', 'WordPress']
  },
  {
    role: 'IT Support',
    company: 'SMKN 1 Simpang Pematang, Lampung',
    period: '2018 — 2019',
    desc: 'Handled school IT infrastructure, managed computer labs, and server preparation for exams. Performed maintenance for PCs, printers, and networking equipment.',
    tech: ['Lab Management', 'Hardware', 'Networking', 'MikroTik']
  }
];

const ExperienceSkills: React.FC = () => {
  return (
    <div className="py-xl">
      <section className="max-w-7xl mx-auto px-margin mb-xl">
        <div className="max-w-4xl">
          <h1 className="font-display text-display text-on-surface mb-sm">Professional Journey & Expertise</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            From technical infrastructure to specialized mobile development. My path is driven by a curiosity for how things work and a passion for building robust solutions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Experience Timeline */}
        <section className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-lg">
            <span className="material-symbols-outlined text-primary">work</span>
            <h2 className="font-h1 text-h1 text-on-surface">Experience</h2>
          </div>
          <div className="space-y-xl relative pl-8 timeline-line">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="absolute -left-[35.5px] top-2 w-3 h-3 rounded-full bg-outline-variant border-2 border-surface z-10 group-hover:bg-primary transition-colors"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="font-h2 text-h2 text-on-surface">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 font-label-caps text-label-caps text-on-surface-variant uppercase">{exp.period}</span>
                </div>
                <p className="text-on-surface-variant mb-md leading-relaxed max-w-3xl">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-surface-container-low text-primary border border-outline-variant/30 rounded-full text-label-caps">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Aside */}
        <aside className="lg:col-span-4 space-y-lg">
          <div className="border border-outline-variant/30 p-md rounded-xl bg-surface-container-lowest sticky top-28">
            <div className="flex items-center gap-3 mb-md">
              <span className="material-symbols-outlined text-primary">terminal</span>
              <h2 className="font-h2 text-h2 text-on-surface">Technical Stack</h2>
            </div>
            <div className="space-y-lg">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">Core Proficiency</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'React Native' },
                    { name: 'Laravel' },
                    { name: 'Next.js' },
                    { name: 'Filament' }
                  ].map((skill) => (
                    <div key={skill.name} className="px-4 py-3 bg-surface-container-low rounded-lg flex items-center justify-center border border-outline-variant/10">
                      <span className="font-semibold text-primary">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">Ecosystem</p>
                <div className="flex flex-wrap gap-2">
                    {[
                      { icon: 'hub', name: 'n8n' },
                      { icon: 'layers', name: 'Frappe' },
                      { icon: 'devices', name: 'Expo' },
                      { icon: 'database', name: 'Firebase' },
                      { icon: 'language', name: 'WordPress' },
                      { icon: 'router', name: 'MikroTik' },
                      { icon: 'settings_ethernet', name: 'Networking' }
                    ].map((item) => (
                    <span key={item.name} className="px-3 py-1.5 bg-surface-container text-on-surface-variant rounded-md font-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">AI & Agents</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: 'smart_toy', name: 'Claude Code' },
                    { icon: 'bolt', name: 'Antigravity' },
                    { icon: 'psychology', name: 'Gemini' },
                    { icon: 'auto_awesome', name: 'Hermes' },
                    { icon: 'terminal', name: 'OpenClaw' },
                    { icon: 'model_training', name: 'Z.ai' }
                  ].map((ai) => (
                    <span key={ai.name} className="px-3 py-1.5 bg-surface-container text-on-surface-variant rounded-md font-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">{ai.icon}</span>
                      {ai.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">Databases</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: 'storage', name: 'MySQL' },
                    { icon: 'database', name: 'PostgreSQL' },
                    { icon: 'data_object', name: 'SQLite' },
                    { icon: 'cloud_done', name: 'Supabase' }
                  ].map((db) => (
                    <span key={db.name} className="px-3 py-1.5 bg-surface-container text-on-surface-variant rounded-md font-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">{db.icon}</span>
                      {db.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-md border-t border-outline-variant/30">
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">Education</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-on-surface">S1 Sistem Informasi</h4>
                    <p className="text-body-sm text-secondary">Univ. Bina Sarana Informatika</p>
                    <p className="text-xs text-on-surface-variant">2020 — 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface">Teknik Komputer Jaringan</h4>
                    <p className="text-body-sm text-secondary">SMKN 1 Simpang Pematang</p>
                    <p className="text-xs text-on-surface-variant">2016 — 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ExperienceSkills;
