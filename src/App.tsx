import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/layout/BackToTop';
import { ScrollProgress } from './components/common/ScrollProgress';
import { CommandPalette } from './components/common/CommandPalette';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Achievements } from './components/achievements/Achievements';
import { Terminal } from './components/terminal/Terminal';
import { Leadership } from './components/leadership/Leadership';
import { Journey } from './components/journey/Journey';
import { Contact } from './components/contact/Contact';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F3F4F6] relative selection:bg-[#CCFF00] selection:text-[#08090C]">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Global Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Section B: Hero Section with 3D Canvas Wireframe */}
        <Hero />

        {/* Section C: About Me */}
        <About />

        {/* Section D: Technical Skills */}
        <Skills />

        {/* Section E: Featured Projects */}
        <Projects />

        {/* Section F: Achievements & Certifications (Coder of Year 2025/2026, LeetCode 200, 8 Certs) */}
        <Achievements />

        {/* Section 1 Enhancement: Custom Interactive Developer Terminal */}
        <Terminal />

        {/* Section G: Leadership & Community */}
        <Leadership />

        {/* Section H: The Journey So Far (Interactive Timeline) */}
        <Journey />

        {/* Section I: Contact Section with Validated Form */}
        <Contact />
      </main>

      {/* Section J: Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default App;
