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
          Professional Mobile Developer with over 6 years of experience in the IT industry. Transitioned from IT Support to Development in 2022, specializing in React Native and Laravel API integration. Recently earned a Bachelor’s degree in Information Systems. Proven track record in building complex automation workflows, OCR systems, and large-scale ERP data management platforms.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-[14pt] font-bold uppercase border-b border-gray-300 mb-2">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-x-8 text-[11pt]">
          <div>
            <p><strong>Core:</strong> React Native, Laravel, Next.js, Filament</p>
          </div>
          <div>
            <p><strong>Ecosystem:</strong> n8n, AI Agents, OpenAI, ERPNext, Frappe, Expo, Firebase, WordPress, MikroTik, Networking</p>
            <p className="mt-1"><strong>AI & Agents:</strong> Claude Code, Antigravity, Gemini, Hermes, OpenClaw, Z.ai</p>
            <p className="mt-1"><strong>Databases:</strong> MySQL, PostgreSQL, SQLite, Supabase</p>
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
            <li>Developing and maintaining mobile projects including HRIS, Wakita apps, CRM, and FedEx Monitoring.</li>
            <li>Engineered advanced automation workflows with n8n & AI Agents for WhatsApp verification and Intelligent OCR.</li>
            <li>Built AWB OCR Management Dashboard (Filament) and Transys Master Data system (ERPNext).</li>
            <li>Developed FSM (Field Service Management) app using React Native Expo Custom Client.</li>
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
          <h3>Bachelor of Information Systems (S1)</h3>
          <span>2020 — 2024</span>
        </div>
        <p className="italic">Universitas Bina Sarana Informatika</p>
      </section>
    </div>
  );
};

export default CVTemplate;
