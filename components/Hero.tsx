'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface HeroProps {
  onDownloadCV?: () => void;
}

const heroMetrics = [
  { label: 'Years Experience', value: '6+', trend: 'IT support to mobile engineering' },
  { label: 'Delivered Projects', value: '19+', trend: 'Apps, dashboards, and automation' },
  { label: 'Primary Stack', value: 'RN', trend: 'Expo, Laravel, Filament' }
];

const Hero: React.FC<HeroProps> = ({ onDownloadCV }) => {
  return (
    <>
      <section className="mx-auto max-w-3xl px-margin py-xl">
        <div className="space-y-md">
          <div className="flex items-center gap-sm">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-outline-variant/30 bg-primary text-on-primary shadow-sm">
              <div className="flex h-full w-full items-center justify-center font-h2 text-h2">IT</div>
            </div>
            <div>
              <p className="font-h2 text-h2 text-on-surface">Hi, I&apos;m Ilham Tegar</p>
              <p className="font-body-md text-body-md text-on-surface-variant">Mobile Apps Developer</p>
            </div>
          </div>
          <h1 className="font-display text-display text-on-surface">
            Building mobile apps, dashboards, and automation systems.
          </h1>
          <p className="font-body-lg text-body-lg text-secondary">
            I work with React Native, Expo, Laravel, Filament, and automation tools to ship practical software for business operations.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#portfolio" className={cn(buttonVariants({ size: 'lg' }))}>
              View My Work
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <Button 
              onClick={onDownloadCV}
              variant="outline"
              size="lg"
            >
              Download CV
              <span className="material-symbols-outlined">download</span>
            </Button>
            <a href="#contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
              Get In Touch
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
          <div className="pt-sm flex flex-wrap gap-2">
            {['React Native', 'Laravel', 'Next.js', 'Filament', 'Claude Code', 'Antigravity', 'PostgreSQL', 'Supabase'].map((tech) => (
              <Badge key={tech} variant="outline" className="rounded-md bg-white text-on-surface-variant">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-sm pt-sm sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <Card key={metric.label} size="sm" className="metric-card">
                <CardHeader>
                  <CardDescription className="font-label-caps text-label-caps uppercase">{metric.label}</CardDescription>
                  <CardTitle className="text-[30px] text-primary">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{metric.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="border-t border-outline-variant/20 py-xl">
        <div className="mx-auto max-w-3xl px-margin">
          <div className="grid grid-cols-1 gap-lg items-start">
            <div className="space-y-sm">
              <h2 className="font-h1 text-h1 text-on-surface">About</h2>
              <p className="font-body-lg text-body-lg text-secondary pt-4">
                I have 3 years of experience in IT Support and transitioned into a Mobile Developer role in December 2022. I recently earned my Bachelor’s degree in Information Systems from Universitas Bina Sarana Informatika.
              </p>
              <p className="font-body-md text-body-md text-secondary">
                I specialize in building cross-platform mobile applications using React Native and have hands-on experience developing and integrating API endpoints using Laravel. Passionate about continuous learning and creating impactful tech solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'smartphone', title: 'Mobile Dev', desc: 'Expertise in React Native slicing and API integration.' },
                { icon: 'language', title: 'Web Development', desc: 'Proficient in Laravel, Next.js, and WordPress ecosystem.' },
                { icon: 'settings_ethernet', title: 'IT Support', desc: '4 years of experience in network and hardware infrastructure.' },
                { icon: 'search', title: 'SEO & Content', desc: 'Passionate about content strategy and search optimization.' }
              ].map((item) => (
                <Card key={item.title} className="metric-card">
                  <CardContent>
                    <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
                    <h3 className="font-h2 text-h2 text-on-surface mb-2">{item.title}</h3>
                    <p className="font-body-sm text-body-sm text-secondary">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
