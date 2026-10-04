import { ArrowUp, FolderGit2, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface FooterProps {
  onOpenDeployGuide: () => void;
}

export default function Footer({ onOpenDeployGuide }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 relative z-10 pt-12 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Note */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
              {PERSONAL_INFO.initials}
            </span>
            <span className="font-bold text-slate-900 dark:text-white text-base">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
            2nd-Year B.Tech CSE (AI & ML) Student at Marwadi University, Rajkot. Aspiring Full-Stack Developer & AI/ML Engineer.
          </p>
          <div className="text-[11px] text-slate-500 dark:text-slate-500 mt-1">
            First Web Development Project · Version 1.0
          </div>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
            About
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
            Skills
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a href="#education" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
            Education
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
            Projects
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a href="#certifications" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
            Certifications
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a href="#goals" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
            Goals
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
            Contact
          </a>
        </div>

        {/* Actions: GitHub, Deploy Guide, Scroll to Top */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDeployGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
            title="View Vercel & GitHub instructions"
          >
            <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Vercel Guide</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="GitHub profile"
          >
            <FolderGit2 className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title="Back to Top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
        <span>Designed with modern developer aesthetics & responsive design.</span>
      </div>
    </footer>
  );
}
