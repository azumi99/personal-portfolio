'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Logistika Mobile',
    category: 'APP',
    tech: 'REACT NATIVE',
    desc: 'Comprehensive mobile solution for logistics tracking and management, featuring real-time data sync.',
    img: '/assets/img/logistika.jpg'
  },
  {
    title: 'Mobile CRM Transys',
    category: 'APP',
    tech: 'REACT NATIVE',
    desc: 'Customer Relationship Management app designed for Transys, focusing on field agent efficiency.',
    img: '/assets/img/crm-mobile.jpg'
  },
  {
    title: 'FedEx Monitoring Service',
    category: 'APP',
    tech: 'REACT NATIVE',
    desc: 'TPS Online monitoring service for FedEx. Base project, slicing, and API integration.',
    img: '/assets/img/fedex.jpg'
  },
  {
    title: 'Daya Unggul Foundation',
    category: 'WORDPRESS',
    tech: 'WORDPRESS',
    desc: 'Digital platform for Daya Unggul foundation to manage community outreach and programs.',
    img: '/assets/img/landing-yayasan.png'
  },
  {
    title: 'Anugerah Cinta',
    category: 'WORDPRESS',
    tech: 'WORDPRESS',
    desc: 'Program management system for Anugerah Cinta foundation, facilitating social impact tracking.',
    img: '/assets/img/landing-yayasan2.png'
  },
  {
    title: 'Cahaya Pelita Karya',
    category: 'WORDPRESS',
    tech: 'WORDPRESS',
    desc: 'Organizational platform for Cahaya Pelita Karya to coordinate foundation activities.',
    img: '/assets/img/landing-yayasan3.png'
  },
  {
    title: 'CMS Penjualan PHP CI',
    category: 'WEB',
    tech: 'CODEIGNITER',
    desc: 'Full-featured Sales Content Management System built with PHP and CodeIgniter framework.',
    img: '/assets/img/cms-landing-ac.png'
  },
  {
    title: 'Aplikasi Pertanian CI4',
    category: 'WEB',
    tech: 'CODEIGNITER 4',
    desc: 'Web-based agricultural management application for crop tracking and resource planning.',
    img: '/assets/img/manajemen-pertanian.png'
  },
  {
    title: 'Serah Terima Dokumen',
    category: 'WEB',
    tech: 'PHP & MYSQL',
    desc: 'Secure document handover management system with complete CRUD functionality.',
    img: '/assets/img/serah-terima-dokumen.png'
  },
  {
    title: 'Smartcard Paratekno',
    category: 'WEB',
    tech: 'EXPO WEB',
    desc: 'Modern identification card system with dynamic theme support and QR integration using Expo Web.',
    img: '/assets/img/card.png'
  },
  {
    title: 'All Indonesian - AI Media',
    category: 'WORDPRESS',
    tech: 'AI AGENT & CMS',
    desc: 'Advanced WordPress media platform featuring automated content research and thumbnail generation using AI Agent Hermes.',
    img: '/assets/img/all-indonesian-blog.png'
  },
  {
    title: 'Internal Corporate App',
    category: 'APP',
    tech: 'REACT NATIVE',
    desc: 'Internal utility application for corporate task automation and employee self-service.',
    img: '/assets/img/manajemen-project.jpg'
  },
  {
    title: 'WA Verification AI Automation',
    category: 'N8N',
    tech: 'n8n & AI AGENT',
    desc: 'Advanced workflow for account verification, password recovery, and WhatsApp FAQ automation for the FSM application.',
    img: '/assets/img/n8n-workflow.png'
  },
  {
    title: 'Intelligent OCR & CRM Automation',
    category: 'N8N',
    tech: 'n8n & OPENAI',
    desc: 'Automated intelligent OCR system for scanning AWB documents (PDF/Photos) from WhatsApp, with real-time CRM synchronization.',
    img: '/assets/img/n8n-ocr-workflow.png'
  },
  {
    title: 'AWB OCR Management Dashboard',
    category: 'WEB',
    tech: 'LARAVEL FILAMENT',
    desc: 'Professional admin panel built with Filament PHP for managing AWB OCR results, featuring webhook integration for CRM synchronization.',
    img: '/assets/img/ocr-admin-filament.png'
  },
  {
    title: 'Lancar - Business Finance Tracker',
    category: 'APP',
    tech: 'EXPO (REACT NATIVE)',
    desc: 'Professional financial recording mobile application designed for small business management with multi-theme support.',
    img: '/assets/img/lancar-app.png'
  },
  {
    title: 'Transys Master Data (ERPNext)',
    category: 'WEB',
    tech: 'FRAPPE & ERPNEXT',
    desc: 'Comprehensive master data management system built with Frappe Framework for Transys, centralizing logistics and geographical data.',
    img: '/assets/img/frappe-transys.png'
  },
  {
    title: 'WP Auto - AI Content SaaS',
    category: 'WEB',
    tech: 'LARAVEL FILAMENT & AI',
    desc: 'Professional SaaS platform for automated AI content generation and multi-site WordPress management, featuring smart scheduling.',
    img: '/assets/img/wp-auto-saas.png'
  },
  {
    title: 'FSM - Field Service Management',
    category: 'APP',
    tech: 'RN EXPO CUSTOM CLIENT',
    desc: 'Mobile application for field installers to manage interactive TV distribution in schools, featuring status tracking and task management.',
    img: '/assets/img/fsm-installer-app.png'
  }
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterButtons = ['ALL', 'APP', 'WEB', 'WORDPRESS', 'N8N'];

  return (
    <div className="py-xl">
      <section className="max-w-7xl mx-auto px-margin mb-xl text-center md:text-left">
        <h1 className="font-display text-display text-on-surface mb-xs tracking-tight">Featured Projects</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">A specialized collection of mobile applications and backend systems engineered for corporate efficiency and digital growth.</p>
      </section>

      <section className="max-w-7xl mx-auto px-margin mb-md flex flex-wrap gap-xs justify-center md:justify-start">
        {filterButtons.map((filter) => (
          <button 
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-label-caps text-label-caps border transition-all duration-300 ${
              activeFilter === filter 
                ? 'bg-primary text-on-primary border-primary shadow-md' 
                : 'bg-surface-container-lowest text-secondary border-outline-variant/30 hover:border-primary/50 hover:bg-primary-fixed/10'
            }`}
          >
            {filter === 'ALL' ? 'ALL PROJECTS' : filter}
          </button>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg min-h-[400px]">
        {filteredProjects.map((project, index) => (
          <article 
            key={project.title + index} 
            className="project-card animate-in fade-in slide-in-from-bottom-4 duration-500 group bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="aspect-video bg-surface-container overflow-hidden">
              <Image 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt={project.title} 
                src={project.img}
                width={600}
                height={340}
              />
            </div>
            <div className="p-lg flex flex-col flex-grow">
              <div className="flex gap-2 mb-sm">
                <span className="px-2.5 py-0.5 bg-primary/5 text-primary rounded text-label-caps font-bold">{project.category}</span>
                <span className="px-2.5 py-0.5 bg-secondary-container text-on-secondary-container rounded text-label-caps font-bold">{project.tech}</span>
              </div>
              <h3 className="font-h2 text-h2 text-on-surface mb-xs leading-tight">{project.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md flex-grow">{project.desc}</p>
              <div className="flex items-center text-primary font-bold gap-1 cursor-pointer group/link w-fit">
                <span className="text-body-md">View Details</span>
                <span className="material-symbols-outlined card-action-icon transition-transform duration-200">arrow_forward</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
