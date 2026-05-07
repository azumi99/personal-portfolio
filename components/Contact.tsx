'use client';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-start">
          <div>
            <span className="text-primary font-label-caps uppercase tracking-widest mb-xs block">Contact</span>
            <h1 className="font-display text-display text-on-surface mb-md">Let&apos;s build something <span className="text-primary">exceptional</span>.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-md">
              Whether you&apos;re looking for a specialized mobile developer or want to discuss technical infrastructure, my inbox is always open.
            </p>
            <div className="space-y-sm">
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <p className="font-body-md text-on-surface">ilhambintang399@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <p className="font-body-md text-on-surface">+62 822 5111 6009</p>
                </div>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <p className="font-body-md text-on-surface">Tangerang Selatan, Indonesia</p>
                </div>
              </div>
            </div>
            <div className="mt-lg flex gap-xs">
              <a className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-all active:scale-95" href="https://github.com/azumi99" target="_blank">
                <span className="material-symbols-outlined">code</span>
              </a>
              <a className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-all active:scale-95" href="https://www.anandanesia.com" target="_blank">
                <span className="material-symbols-outlined">language</span>
              </a>
              <a className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-all active:scale-95" href="https://wa.link/x5uayn" target="_blank">
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </div>
          <div>
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant/30">
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
                    <label className="font-label-caps text-on-surface-variant block mb-1" htmlFor="name">Full Name</label>
                    <input className="w-full px-4 py-3 bg-surface-bright border border-outline-variant rounded focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-on-surface" id="name" name="name" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-unit">
                    <label className="font-label-caps text-on-surface-variant block mb-1" htmlFor="email">Email Address</label>
                    <input className="w-full px-4 py-3 bg-surface-bright border border-outline-variant rounded focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-on-surface" id="email" name="email" placeholder="john@example.com" type="email"/>
                  </div>
                </div>
                <div className="space-y-unit">
                  <label className="font-label-caps text-on-surface-variant block mb-1" htmlFor="subject">Subject</label>
                  <input className="w-full px-4 py-3 bg-surface-bright border border-outline-variant rounded focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-on-surface" id="subject" name="subject" placeholder="Project Inquiry" type="text"/>
                </div>
                <div className="space-y-unit">
                  <label className="font-label-caps text-on-surface-variant block mb-1" htmlFor="message">Your Message</label>
                  <textarea className="w-full px-4 py-3 bg-surface-bright border border-outline-variant rounded focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-on-surface resize-none" id="message" name="message" placeholder="Tell me about your project or role..." rows={4}></textarea>
                </div>
                <button className="w-full bg-primary text-on-primary font-h2 py-4 rounded shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <section className="max-w-7xl mx-auto px-margin mt-xl mb-xl">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-outline-variant/30 shadow-lg">
          <img 
            className="w-full h-full object-cover" 
            alt="Professional workspace in Jakarta"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx-DXQz_tn4dzXyTJQQQdpIIchkT49CnvEdZzh2qJeEYdeIGiChwGvTqLsRQfDWw9VrCqQCFJzmeMG1IY0coLFgVkJy9PN8NY6C1TQ5Q3haOu4sIyp_baF7yIAOZKdCH7UsECrOmCHSlYcKoVfGDegMt9mVNsTJ9z9icLsWRYgSsOhNEiBHER2KbDGHf0ZfpcWFKOVT-3k0PGu3VOTTGUQJoVevML-tLrAa0j5v1RiMfgwrOt5GOQfpnrCLJr1-P_L4fbemH5UQ6s"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40"></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
