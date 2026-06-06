'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  return (
    <div className="py-xl">
      <div className="mx-auto max-w-3xl px-margin">
        <div className="grid grid-cols-1 gap-lg items-start">
          <div className="text-center">
            <Badge variant="soft" className="mb-xs w-fit">CONTACT</Badge>
            <h1 className="font-display text-display text-on-surface mb-md">Let&apos;s build something <span className="text-primary">exceptional</span>.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg mx-auto max-w-xl">
              Whether you&apos;re looking for a specialized mobile developer or want to discuss technical infrastructure, my inbox is always open.
            </p>
            <div className="grid grid-cols-1 gap-sm text-left sm:grid-cols-3">
              <Card className="metric-card" size="sm">
                <CardContent className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <p className="font-body-md text-on-surface">ilhambintang399@gmail.com</p>
                </CardContent>
              </Card>
              <Card className="metric-card" size="sm">
                <CardContent className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <p className="font-body-md text-on-surface">+62 822 5111 6009</p>
                </CardContent>
              </Card>
              <Card className="metric-card" size="sm">
                <CardContent className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <p className="font-body-md text-on-surface">Tangerang Selatan, Indonesia</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-lg flex justify-center gap-xs">
              <a className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))} href="https://github.com/azumi99" target="_blank">
                <span className="material-symbols-outlined">code</span>
              </a>
              <a className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))} href="https://allindonesian.com" target="_blank">
                <span className="material-symbols-outlined">language</span>
              </a>
              <a className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))} href="https://wa.link/x5uayn" target="_blank">
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </div>
          <div>
            <Card className="metric-card [--card-spacing:2.5rem]">
              <CardContent>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  window.location.href = `mailto:ilhambintang399@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
                }}
                className="space-y-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-unit">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-unit">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-unit">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Project Inquiry" type="text" />
                </div>
                <div className="space-y-unit">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project or role..." rows={4} />
                </div>
                <Button className="w-full" size="lg" type="submit">
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </Button>
              </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
