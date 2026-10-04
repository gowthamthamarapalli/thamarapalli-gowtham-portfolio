import { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/Education.tsx';
import Projects from './components/Projects.tsx';
import Certifications from './components/Certifications.tsx';
import CareerGoals from './components/CareerGoals.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import TechBackground from './components/TechBackground.tsx';
import VercelDeployGuideModal from './components/VercelDeployGuideModal.tsx';

export default function App() {
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Subtle tech ambient background canvas & grid */}
      <TechBackground />

      {/* Sticky top navigation bar */}
      <Navbar onOpenDeployGuide={() => setDeployGuideOpen(true)} />

      {/* Main content sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <CareerGoals />
        <Contact />
      </main>

      {/* Clean footer */}
      <Footer onOpenDeployGuide={() => setDeployGuideOpen(true)} />

      {/* Vercel & GitHub deployment guide modal */}
      <VercelDeployGuideModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
      />
    </div>
  );
}
