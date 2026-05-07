'use client';

import React from 'react';

interface HeroProps {
  onDownloadCV?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDownloadCV }) => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-margin py-xl grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">
        <div className="lg:col-span-7 space-y-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-caps text-label-caps w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
          <h1 className="font-display text-display text-on-surface">
            Professional <span className="text-primary">Mobile Developer</span>
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            Building digital experiences with React Native, Laravel, and modern web systems. Experienced in technical precision and robust system architecture with over 6 years in the IT industry.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#portfolio" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-h2 text-h2 shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2">
              View My Work
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <button 
              onClick={onDownloadCV}
              className="bg-surface-container-lowest border border-outline-variant text-primary px-8 py-4 rounded-xl font-h2 text-h2 hover:bg-primary-fixed/10 transition-all active:scale-95 flex items-center gap-2"
            >
              Download CV
              <span className="material-symbols-outlined">download</span>
            </button>
            <a href="#contact" className="bg-surface-container-lowest border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-h2 text-h2 hover:bg-surface-container-low transition-all active:scale-95 flex items-center gap-2">
              Get In Touch
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
          {/* Tech Stack Chips */}
          <div className="pt-md flex flex-wrap gap-3">
            {['React Native', 'Laravel', 'Next.js', 'WordPress', 'n8n', 'CodeIgniter'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-surface-container-low text-primary rounded-lg font-label-caps text-label-caps border border-outline-variant/30">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-container-lowest p-2">
            <img 
              alt="Ilham Tegar Bintang Ananda" 
              className="w-full aspect-[4/5] object-cover rounded-lg" 
              src="/assets/img/profile.jpg"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface/90 backdrop-blur-md rounded-xl shadow-lg border border-outline-variant/30">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <div className="font-h2 text-h2 text-primary">6+</div>
                  <div className="font-label-caps text-label-caps text-secondary uppercase">Years Exp.</div>
                </div>
                <div className="w-px h-10 bg-outline-variant/30"></div>
                <div className="text-center">
                  <div className="font-h2 text-h2 text-primary">19+</div>
                  <div className="font-label-caps text-label-caps text-secondary uppercase">Projects</div>
                </div>
                <div className="w-px h-10 bg-outline-variant/30"></div>
                <div className="text-center">
                  <div className="font-h2 text-h2 text-primary">BS</div>
                  <div className="font-label-caps text-label-caps text-secondary uppercase">Information System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-xl border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-start">
            <div className="space-y-sm">
              <h2 className="font-h1 text-h1 text-on-surface">About My Journey</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <p className="font-body-lg text-body-lg text-secondary pt-4">
                I have 3 years of experience in IT Support and transitioned into a Mobile Developer role in December 2022. I recently earned my Bachelor’s degree in Information Systems from Universitas Bina Sarana Informatika.
              </p>
              <p className="font-body-md text-body-md text-secondary">
                I specialize in building cross-platform mobile applications using React Native and have hands-on experience developing and integrating API endpoints using Laravel. Passionate about continuous learning and creating impactful tech solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: 'smartphone', title: 'Mobile Dev', desc: 'Expertise in React Native slicing and API integration.' },
                { icon: 'language', title: 'Web Development', desc: 'Proficient in Laravel, Next.js, and WordPress ecosystem.' },
                { icon: 'settings_ethernet', title: 'IT Support', desc: '4 years of experience in network and hardware infrastructure.' },
                { icon: 'search', title: 'SEO & Content', desc: 'Passionate about content strategy and search optimization.' }
              ].map((item) => (
                <div key={item.title} className="p-6 bg-white rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
                  <h3 className="font-h2 text-h2 text-on-surface mb-2">{item.title}</h3>
                  <p className="font-body-sm text-body-sm text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
