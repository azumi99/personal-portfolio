'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MagicPortfolioProps {
  onDownloadCV?: () => void;
}

const work = [
  {
    company: 'ATT Group, Jakarta Barat',
    role: 'Mobile Developer',
    period: 'Dec 2022 - Present',
    description:
      'Developing and maintaining mobile projects including HRIS, Wakita apps, CRM, FedEx Monitoring Service, FSM installer app, automation workflows, OCR dashboards, and ERPNext master data systems.',
  },
  {
    company: 'ATT Group, Jakarta Barat',
    role: 'IT Support Specialist',
    period: '2019 - 2022',
    description:
      'Responsible for technical support, network installation, hardware maintenance, VMware ESXi, Synology NAS infrastructure, SEO, and internal WordPress profile development.',
  },
  {
    company: 'SMKN 1 Simpang Pematang, Lampung',
    role: 'IT Support',
    period: '2018 - 2019',
    description:
      'Handled school IT infrastructure, computer labs, server preparation for exams, PCs, printers, and networking equipment.',
  },
];

const education = [
  {
    school: 'Universitas Bina Sarana Informatika',
    degree: 'S1 Sistem Informasi',
    period: '2020 - 2024',
  },
  {
    school: 'SMKN 1 Simpang Pematang',
    degree: 'Teknik Komputer Jaringan',
    period: '2016 - 2018',
  },
];

const skills = [
  'React Native',
  'Expo',
  'Laravel',
  'Filament',
  'Next.js',
  'WordPress',
  'Frappe',
  'ERPNext',
  'n8n',
  'OpenAI',
  'Claude Code',
  'Antigravity',
  'MySQL',
  'PostgreSQL',
  'SQLite',
  'Supabase',
  'Firebase',
  'MikroTik',
  'Networking',
  'VMware ESXi',
  'Synology NAS',
  'SEO',
];

const projects = [
  {
    title: 'FSM - Field Service Management',
    category: 'APP',
    dates: '2026',
    description:
      'Offline-first Expo mobile app for remote field installers, with background photo sync, installation tracking, and dashboard integration.',
    image: '/assets/img/fsm-field-service-management.png',
    technologies: ['RN Expo Custom Client', 'Laravel', 'Offline-first', 'Background Sync'],
  },
  {
    title: 'FSM - Distribution & Installation Dashboard',
    category: 'WEB',
    dates: '2026',
    description:
      'Web-based Field Service Management dashboard for monitoring nationwide TV distribution and school installation progress.',
    image: '/assets/img/fsm-dashboard.png',
    technologies: ['Laravel Filament', 'Dashboard', 'Operations'],
  },
  {
    title: 'Lancar - Business Finance Tracker',
    category: 'APP',
    dates: '2026',
    description:
      'Professional financial recording mobile application for small business management with multi-theme support.',
    image: '/assets/img/lancar-app.png',
    technologies: ['Expo', 'React Native', 'Finance'],
  },
  {
    title: 'Intelligent OCR & CRM Automation',
    category: 'N8N',
    dates: '2026',
    description:
      'Automated OCR workflow for scanning AWB documents from WhatsApp and synchronizing the extracted result into CRM.',
    image: '/assets/img/n8n-ocr-workflow.png',
    technologies: ['n8n', 'OpenAI', 'OCR', 'Webhook'],
  },
  {
    title: 'AWB OCR Management Dashboard',
    category: 'WEB',
    dates: '2026',
    description:
      'Filament admin panel for managing AWB OCR results with webhook integration for CRM synchronization.',
    image: '/assets/img/ocr-admin-filament.png',
    technologies: ['Laravel Filament', 'CRM', 'OCR'],
  },
  {
    title: 'WP Auto - AI Content SaaS',
    category: 'WEB',
    dates: '2026',
    description:
      'SaaS platform for automated AI content generation and multi-site WordPress management with smart scheduling.',
    image: '/assets/img/wp-auto-saas.png',
    technologies: ['Laravel Filament', 'AI', 'WordPress'],
  },
  {
    title: 'All Indonesian - AI Media',
    category: 'WORDPRESS',
    dates: '2026',
    description:
      'WordPress media platform featuring automated content research and thumbnail generation using AI agents.',
    image: '/assets/img/all-indonesian-blog.png',
    technologies: ['WordPress', 'AI Agent', 'CMS'],
  },
  {
    title: 'WA Verification AI Automation',
    category: 'N8N',
    dates: '2026',
    description:
      'Workflow for account verification, password recovery, and WhatsApp FAQ automation for the FSM application.',
    image: '/assets/img/n8n-workflow.png',
    technologies: ['n8n', 'AI Agent', 'WhatsApp'],
  },
  {
    title: 'Transys Master Data (ERPNext)',
    category: 'WEB',
    dates: '2026',
    description:
      'Master data management system built with Frappe Framework for logistics and geographical data.',
    image: '/assets/img/frappe-transys.png',
    technologies: ['Frappe', 'ERPNext', 'Master Data'],
  },
  {
    title: 'FedEx Monitoring Service',
    category: 'APP',
    dates: '2024',
    description: 'TPS Online monitoring service for FedEx, covering base project setup, slicing, and API integration.',
    image: '/assets/img/fedex.jpg',
    technologies: ['React Native', 'API Integration'],
  },
  {
    title: 'Mobile CRM Transys',
    category: 'APP',
    dates: '2024',
    description: 'CRM mobile app designed for Transys to improve field agent efficiency.',
    image: '/assets/img/crm-mobile.jpg',
    technologies: ['React Native', 'CRM'],
  },
  {
    title: 'Logistika Mobile',
    category: 'APP',
    dates: '2024',
    description: 'Mobile solution for logistics tracking and management with real-time data sync.',
    image: '/assets/img/logistika.jpg',
    technologies: ['React Native', 'Logistics'],
  },
];

function TimelineItem({ title, subtitle, period, description }: { title: string; subtitle: string; period: string; description: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex min-w-0 items-start gap-3">
        <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-outline-variant bg-background shadow-sm ring-2 ring-outline-variant/20">
          <span className="material-symbols-outlined text-[18px] text-primary">work</span>
        </div>
        <div className="min-w-0 space-y-1">
          <h3 className="font-semibold leading-none text-on-surface">{title}</h3>
          <p className="text-sm text-on-surface-variant">{subtitle}</p>
          <p className="text-sm leading-relaxed text-on-surface-variant">{description}</p>
        </div>
      </div>
      <p className="shrink-0 text-right text-xs tabular-nums text-on-surface-variant">{period}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Card className="group h-full overflow-hidden border-outline-variant/50 bg-background transition-all duration-200 hover:ring-2 hover:ring-outline-variant/50">
      <div className="relative h-48 overflow-hidden bg-surface-container">
        <Image src={project.image} alt={project.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <CardContent className="flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <Badge variant="secondary" className="w-fit">{project.category}</Badge>
            <h3 className="font-semibold leading-tight text-on-surface">{project.title}</h3>
            <time className="text-xs text-on-surface-variant">{project.dates}</time>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-on-surface-variant">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="outline" className="h-6 rounded-md px-2 text-[11px] font-medium">
              {technology}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function MagicPortfolio({ onDownloadCV }: MagicPortfolioProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col gap-14 px-6 py-12 sm:py-16">
      <section id="home" className="space-y-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="order-2 flex flex-col gap-2 md:order-1">
            <h1 className="text-3xl font-semibold tracking-tighter text-on-surface sm:text-4xl lg:text-5xl">Hi, I&apos;m Ilham</h1>
            <p className="max-w-[600px] text-on-surface-variant md:text-lg lg:text-xl">
              Mobile Apps Developer specializing in React Native, Expo, Laravel, Filament, and operational automation.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative size-24 overflow-hidden rounded-full border bg-surface-container shadow-lg ring-4 ring-outline-variant/20 md:size-32">
              <Image src="/assets/img/profile.jpg" alt="Ilham Tegar Bintang Ananda" fill sizes="128px" className="object-cover" priority />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="#portfolio">
            <Button size="sm">View Work</Button>
          </a>
          <Button size="sm" variant="outline" onClick={onDownloadCV}>Download CV</Button>
          <a href="https://wa.link/x5uayn" target="_blank">
            <Button size="sm" variant="outline">Hire Me</Button>
          </a>
        </div>
      </section>

      <section id="about" className="flex min-h-0 flex-col gap-y-4">
        <h2 className="text-xl font-bold text-on-surface">About</h2>
        <div className="space-y-3 text-pretty leading-relaxed text-on-surface-variant">
          <p>
            I have 3 years of experience in IT Support and transitioned into a Mobile Developer role in December 2022. I recently earned my Bachelor&apos;s degree in Information Systems from Universitas Bina Sarana Informatika.
          </p>
          <p>
            I specialize in cross-platform mobile applications using React Native and Expo, with hands-on experience developing Laravel API integrations, Filament dashboards, automation workflows, and business systems that support real operations.
          </p>
        </div>
      </section>

      <section id="experience" className="flex min-h-0 flex-col gap-y-6">
        <h2 className="text-xl font-bold text-on-surface">Work Experience</h2>
        <div className="flex flex-col gap-8">
          {work.map((item) => (
            <TimelineItem key={item.company + item.role} title={item.company} subtitle={item.role} period={item.period} description={item.description} />
          ))}
        </div>
      </section>

      <section id="education" className="flex min-h-0 flex-col gap-y-6">
        <h2 className="text-xl font-bold text-on-surface">Education</h2>
        <div className="flex flex-col gap-8">
          {education.map((item) => (
            <div key={item.school} className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm ring-2 ring-outline-variant/20">
                  <span className="material-symbols-outlined text-[18px] text-primary">school</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-none text-on-surface">{item.school}</h3>
                  <p className="text-sm text-on-surface-variant">{item.degree}</p>
                </div>
              </div>
              <p className="shrink-0 text-right text-xs tabular-nums text-on-surface-variant">{item.period}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="flex min-h-0 flex-col gap-y-4">
        <h2 className="text-xl font-bold text-on-surface">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div key={skill} className="flex h-8 w-fit items-center rounded-xl border border-outline-variant bg-background px-4 text-sm font-medium text-on-surface shadow-sm ring-2 ring-outline-variant/20">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm font-medium text-primary">My Projects</p>
          <h2 className="text-3xl font-bold tracking-tighter text-on-surface sm:text-4xl">Check out my latest work</h2>
          <p className="mx-auto max-w-[600px] text-on-surface-variant">
            I&apos;ve worked on mobile apps, dashboards, automation workflows, WordPress systems, and operational tools.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-4 text-center">
        <p className="text-sm font-medium text-primary">Contact</p>
        <h2 className="text-3xl font-bold tracking-tighter text-on-surface sm:text-4xl">Get in Touch</h2>
        <p className="mx-auto max-w-[600px] text-on-surface-variant">
          Want to discuss a mobile app, dashboard, or automation project? Reach me directly through email, WhatsApp, GitHub, or my blog.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <a href="mailto:ilhambintang399@gmail.com"><Button size="sm" variant="outline">Email</Button></a>
          <a href="https://wa.link/x5uayn" target="_blank"><Button size="sm" variant="outline">WhatsApp</Button></a>
          <a href="https://github.com/azumi99" target="_blank"><Button size="sm" variant="outline">GitHub</Button></a>
          <a href="https://allindonesian.com" target="_blank"><Button size="sm" variant="outline">Blog</Button></a>
        </div>
      </section>
    </div>
  );
}
