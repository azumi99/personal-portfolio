'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsList } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

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
    desc: 'Offline-first Expo mobile app for remote field installers, with background photo sync, installation tracking, and dashboard integration.',
    img: '/assets/img/fsm-field-service-management.png',
    featured: true
  },
  {
    title: 'FSM - Distribution & Installation Dashboard',
    category: 'WEB',
    tech: 'LARAVEL FILAMENT',
    desc: 'Comprehensive web-based Field Service Management platform for monitoring and managing the nationwide distribution and installation of interactive TVs in schools.',
    img: '/assets/img/fsm-dashboard.png'
  }
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const sortedProjects = [...filteredProjects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  const filterButtons = ['ALL', 'APP', 'WEB', 'WORDPRESS', 'N8N'];

  return (
    <div className="py-xl">
      <section className="mx-auto max-w-3xl px-margin mb-lg text-center">
        <Badge variant="soft" className="mb-sm w-fit">My Projects</Badge>
        <h1 className="font-display text-display text-on-surface mb-xs tracking-tight">Check out my latest work</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          I&apos;ve worked on mobile apps, dashboards, automation workflows, and web systems for business operations.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-margin mb-lg flex justify-center">
        <TabsList>
          {filterButtons.map((filter) => (
            <Button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? 'default' : 'ghost'}
              size="sm"
              className={activeFilter === filter ? 'shadow-primary/20' : ''}
            >
              {filter === 'ALL' ? 'ALL PROJECTS' : filter}
            </Button>
          ))}
        </TabsList>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-margin md:grid-cols-2 min-h-[400px]">
        {sortedProjects.map((project, index) => (
          <Card
            key={project.title + index} 
            className={cn(
              'project-card animate-in fade-in slide-in-from-bottom-4 duration-500 group overflow-hidden flex flex-col',
              project.featured
                ? 'border-primary/20 bg-white shadow-md md:col-span-2'
                : 'metric-card'
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={cn('relative overflow-hidden bg-surface-container', project.featured ? 'aspect-[16/9] md:aspect-[2.4/1]' : 'aspect-video')}>
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-on-surface/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {project.featured && (
                <div className="absolute left-4 top-4 z-10">
                  <Badge>FEATURED APP</Badge>
                </div>
              )}
              <Image 
                className={cn(
                  'w-full h-full group-hover:scale-105 transition-transform duration-700',
                  project.featured ? 'object-cover object-center' : 'object-cover'
                )}
                alt={project.title} 
                src={project.img}
                width={600}
                height={340}
              />
            </div>
            <CardHeader className="pb-sm">
              <div className="flex flex-wrap gap-2 mb-xs">
                <Badge variant="soft">{project.category}</Badge>
                <Badge variant="secondary">{project.tech}</Badge>
              </div>
              <CardTitle className={project.featured ? 'text-[28px]' : ''}>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col">
              <CardDescription className="mb-md flex-grow leading-relaxed">{project.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
