'use client';

import React, { useEffect, useState } from 'react';

interface CVTemplateProps {
  isForcedVisible?: boolean;
}

const CVTemplate: React.FC<CVTemplateProps> = ({ isForcedVisible }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const baseUrl = mounted && typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <div 
      id="printable-cv" 
      className={`${isForcedVisible ? 'block' : 'print-cv-container'} bg-white text-black font-sans p-8 max-w-[210mm] mx-auto text-[12pt] leading-relaxed`}
    >
      {/* Header */}
      <header className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-tight mb-1">Ilham Tegar Bintang Ananda</h1>
        <div className="flex flex-wrap gap-4 text-[10pt] text-gray-700">
          <span>Tangerang Selatan, Indonesia</span>
          <span>•</span>
          <span>+62 822 5111 6009</span>
          <span>•</span>
          <span>ilhambintang399@gmail.com</span>
        </div>
        <div className="text-[10pt] text-blue-700 mt-1 font-semibold">
          Portfolio: {baseUrl}
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-[14pt] font-bold uppercase border-b border-gray-300 mb-2">Professional Summary</h2>
        <p className="text-[11pt]">
          I have 3 years of experience in IT Support and transitioned into a Mobile Developer role in December 2022. I recently earned my Bachelor's degree in Information Systems from Universitas Bina Sarana Informatika. I specialize in cross-platform mobile applications using React Native and Expo, with hands-on experience developing Laravel API integrations, Filament dashboards, automation workflows, and business systems that support real operations.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-[14pt] font-bold uppercase border-b border-gray-300 mb-2">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-x-8 text-[11pt]">
          <div>
            <p><strong>Framework & App:</strong> React Native, Expo, Laravel, Filament, Next.js</p>
            <p className="mt-1"><strong>CMS & Backend:</strong> WordPress, ERPNext, Frappe</p>
          </div>
          <div>
            <p><strong>AI Agent & Automation:</strong> n8n, Claude Code, Antigravity, OpenClaw, Hermes</p>
            <p className="mt-1"><strong>Databases & Cloud:</strong> MySQL, PostgreSQL, SQLite, Supabase, Firebase</p>
            <p className="mt-1"><strong>Infrastructure & Ops:</strong> MikroTik, Networking, VMware ESXi, Synology NAS</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-[14pt] font-bold uppercase border-b border-gray-300 mb-2">Professional Experience</h2>
        
        {/* Mobile Developer */}
        <div className="mb-4">
          <div className="flex justify-between font-bold">
            <h3>Mobile Developer</h3>
            <span>Dec 2022 — Present</span>
          </div>
          <p className="italic mb-1">ATT Group, Jakarta Barat</p>
          <ul className="list-disc ml-5 text-[11pt] space-y-1">
            <li>Developed and maintained mobile projects including HRIS, Wakita apps, CRM, FedEx Monitoring Service, and FSM.</li>
            <li>Engineered automation workflows with n8n and AI agents for WhatsApp verification and intelligent OCR.</li>
            <li>Built AWB OCR Management Dashboard with Filament and integrated it with CRM via webhook synchronization.</li>
            <li>Built Transys Master Data management system with ERPNext (Frappe Framework) for logistics and geographical data, including RMS Rate Management and CRM integration.</li>
            <li>Developed an offline-first React Native (Expo) installer app for remote field installations with automated background photo synchronization.</li>
            <li>Implemented the FSM distribution and installation dashboard using Laravel Filament to monitor nationwide TV distribution and school installation progress.</li>
          </ul>
        </div>

        {/* IT Support Specialist */}
        <div className="mb-4">
          <div className="flex justify-between font-bold">
            <h3>IT Support Specialist</h3>
            <span>2019 — 2022</span>
          </div>
          <p className="italic mb-1">ATT Group, Jakarta Barat</p>
          <ul className="list-disc ml-5 text-[11pt] space-y-1">
            <li>Responsible for technical support, network installation (LAN/Wireless), and hardware maintenance.</li>
            <li>Specialized in virtualization using VMware ESXi and managed Synology NAS infrastructure.</li>
            <li>Handled SEO and web development for internal corporate WordPress profiles.</li>
          </ul>
        </div>

        {/* IT Support */}
        <div>
          <div className="flex justify-between font-bold">
            <h3>IT Support</h3>
            <span>2018 — 2019</span>
          </div>
          <p className="italic mb-1">SMKN 1 Simpang Pematang, Lampung</p>
          <ul className="list-disc ml-5 text-[11pt] space-y-1">
            <li>Managed school IT infrastructure and lab equipment for national exams.</li>
            <li>Maintained hardware, printers, and networking equipment (MikroTik).</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-[14pt] font-bold uppercase border-b border-gray-300 mb-2">Education</h2>
        <div className="flex justify-between font-bold">
          <h3>Bachelor of Information Systems (S1 Sistem Informasi)</h3>
          <span>2020 — 2024</span>
        </div>
        <p className="italic mb-3">Universitas Bina Sarana Informatika</p>
        <div className="flex justify-between font-bold">
          <h3>Teknik Komputer Jaringan</h3>
          <span>2016 — 2018</span>
        </div>
        <p className="italic">SMKN 1 Simpang Pematang, Lampung</p>
      </section>
    </div>
  );
};

export default CVTemplate;
