'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ExperienceSkills from '@/components/ExperienceSkills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import CVTemplate from '@/components/CVTemplate';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = React.useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ], []);

  // High-reliability CV Download using a new window to ensure isolated styling
  const handleDownloadCV = () => {
    const cvElement = document.getElementById('printable-cv');
    if (!cvElement) return;

    const printWindow = window.open('', '_blank', 'width=800,height=1000');
    if (!printWindow) {
      alert('Please allow popups to download the CV');
      return;
    }

    const cvHtml = cvElement.innerHTML;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>CV - Ilham Tegar Bintang Ananda</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
            body { 
              font-family: 'Inter', sans-serif; 
              background: white !important; 
              color: black !important;
              margin: 0;
              padding: 0;
            }
            #printable-cv { display: block !important; }
            @page { size: auto; margin: 20mm; }
            @media print {
              body { padding: 0; margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="p-8">
            ${cvHtml}
          </div>
          <script>
            // Ensure tailwind is loaded before printing
            setTimeout(() => {
              window.print();
              // Optional: window.close(); // Keep it open for a better user experience on some browsers
            }, 500);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Scroll spy effect to update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(navLinks[index].id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <main className="min-h-screen selection-primary">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
        <nav className="flex justify-between items-center h-20 px-margin max-w-7xl mx-auto">
          <div className="font-h2 text-h2 font-bold text-primary">Ilham Tegar</div>
          
          <div className="hidden md:flex items-center relative gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveSection(link.id)}
                className={`relative py-2 text-label-caps font-label-caps transition-colors duration-300 ${
                  activeSection === link.id ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in slide-in-from-left-2 duration-300"></span>
                )}
              </a>
            ))}
          </div>

          <a href="https://wa.link/x5uayn" target="_blank" className="active:scale-95 transition-transform duration-150 bg-primary text-on-primary px-6 py-2.5 rounded-xl font-label-caps text-label-caps shadow-sm hover:opacity-90">
            HIRE ME
          </a>
        </nav>
      </header>

      {/* Hero & About Section */}
      <section id="home">
        <Hero onDownloadCV={handleDownloadCV} />
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-surface border-t border-outline-variant/10">
        <ExperienceSkills />
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="bg-background border-t border-outline-variant/10">
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-surface border-t border-outline-variant/10">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="w-full py-lg mt-xl bg-surface border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-xs px-margin max-w-7xl mx-auto">
          <div className="text-center md:text-left">
            <div className="font-label-caps text-label-caps text-secondary uppercase mb-unit">ILHAM TEGAR</div>
            <p className="font-body-sm text-body-sm text-secondary opacity-80">
              © 2024 Ilham Tegar Bintang Ananda. Engineering Excellence.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/azumi99" target="_blank" className="text-secondary font-body-sm text-body-sm hover:text-primary hover:underline transition-all duration-200">GitHub</a>
            <a href="https://www.anandanesia.com" target="_blank" className="text-secondary font-body-sm text-body-sm hover:text-primary hover:underline transition-all duration-200">Blog</a>
            <a href="https://www.tiktok.com/@wb.kind" target="_blank" className="text-secondary font-body-sm text-body-sm hover:text-primary hover:underline transition-all duration-200">TikTok</a>
            <a href="mailto:ilhambintang399@gmail.com" className="text-secondary font-body-sm text-body-sm hover:text-primary hover:underline transition-all duration-200">Email</a>
          </div>
        </div>
      </footer>

      {/* Hidden CV template used as a data source for the print window */}
      <div className="hidden">
        <CVTemplate isForcedVisible={true} />
      </div>
    </main>
  );
}
