'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const experiences = [
  {
    role: 'Mobile Developer',
    company: 'ATT Group, Jakarta Barat',
    period: 'Dec 2022 — Present',
    desc: 'Developing and maintaining mobile projects including HRIS, Wakita apps, CRM, and FedEx Monitoring Service. Engineered advanced automation workflows with n8n & AI Agents for WhatsApp verification and Intelligent OCR. Built the AWB OCR Management Dashboard (Filament) and Transys Master Data system (ERPNext). Developed the comprehensive FSM (Field Service Management) system, featuring an offline-first React Native installer app for remote school installations with automated background photo synchronization and a Filament-based distribution dashboard.',
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
      <section className="mx-auto max-w-3xl px-margin mb-xl">
        <div>
          <h1 className="font-display text-display text-on-surface mb-sm">Work Experience</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            From technical infrastructure to specialized mobile development. My path is driven by a curiosity for how things work and a passion for building robust solutions.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-xl px-margin">
        {/* Experience Timeline */}
        <section>
          <div className="space-y-md">
            {experiences.map((exp, index) => (
              <Card key={index} className="metric-card">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-sm">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit uppercase">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-on-surface-variant mb-md leading-relaxed max-w-3xl">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="soft">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Aside */}
        <aside className="space-y-lg">
          <Card className="metric-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <CardTitle>Technical Stack</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-lg">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">Core Proficiency</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'React Native' },
                    { name: 'Laravel' },
                    { name: 'Next.js' },
                    { name: 'Filament' }
                  ].map((skill) => (
                    <Card key={skill.name} size="sm" className="bg-surface-container-low border-outline-variant/10 shadow-none">
                      <CardContent className="flex items-center justify-center">
                      <span className="font-semibold text-primary">{skill.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">Ecosystem</p>
                <div className="flex flex-wrap gap-2">
                    {[
                      { icon: 'layers', name: 'Frappe' },
                      { icon: 'devices', name: 'Expo' },
                      { icon: 'database', name: 'Firebase' },
                      { icon: 'language', name: 'WordPress' },
                      { icon: 'router', name: 'MikroTik' },
                      { icon: 'settings_ethernet', name: 'Networking' }
                    ].map((item) => (
                    <Badge key={item.name} variant="outline" className="rounded-md bg-surface-container font-body-sm normal-case tracking-normal">
                      <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">AI & Agents</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: 'hub', name: 'n8n' },
                    { icon: 'smart_toy', name: 'Claude Code' },
                    { icon: 'bolt', name: 'Antigravity' },
                    { icon: 'psychology', name: 'Gemini' },
                    { icon: 'auto_awesome', name: 'Hermes' },
                    { icon: 'terminal', name: 'OpenClaw' },
                    { icon: 'model_training', name: 'Z.ai' }
                  ].map((ai) => (
                    <Badge key={ai.name} variant="outline" className="rounded-md bg-surface-container font-body-sm normal-case tracking-normal">
                      <span className="material-symbols-outlined text-[16px]">{ai.icon}</span>
                      {ai.name}
                    </Badge>
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
                    <Badge key={db.name} variant="outline" className="rounded-md bg-surface-container font-body-sm normal-case tracking-normal">
                      <span className="material-symbols-outlined text-[16px]">{db.icon}</span>
                      {db.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="pt-md">
                <Separator className="mb-md" />
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
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default ExperienceSkills;
