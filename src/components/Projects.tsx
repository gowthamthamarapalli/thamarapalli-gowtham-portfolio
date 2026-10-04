import { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Code2,
  CheckCircle2,
  Sparkles,
  Layers,
  Monitor,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData.ts';

export default function Projects() {
  const [showArchitectureModal, setShowArchitectureModal] = useState(false);
  const project = PROJECTS_DATA[0];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative z-10 bg-slate-100/40 dark:bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            My journey of building real-world applications begins here. This portfolio is my inaugural web development project.
          </p>
        </div>

        {/* Project Card */}
        <div className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-300 shadow-md dark:shadow-xl overflow-hidden group">
          {/* Subtle top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-600" />

          <div className="p-6 sm:p-8 lg:p-10">
            {/* Header row: Badge & Type */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/90 border border-indigo-200 dark:border-indigo-500/40 text-xs font-semibold text-indigo-700 dark:text-indigo-300 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  {project.badge}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  v1.0 · Live & Responsive
                </span>
              </div>

              {/* View Modes Indicators */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Monitor className="w-3.5 h-3.5 text-slate-400" /> Desktop
                </span>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <span className="flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-slate-400" /> Mobile Ready
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                Technologies Used
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Architectural Highlights */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 mb-8 space-y-2">
              <div className="text-xs font-mono text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-1">
                <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Project Highlights & Implementation Details</span>
              </div>
              {project.keyHighlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            {/* Actions: GitHub Placeholder & Architecture Breakdown */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-xs sm:text-sm font-medium transition-all shadow-sm group/btn"
                >
                  <FolderGit2 className="w-4 h-4 text-slate-300 group-hover/btn:text-white" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <button
                  onClick={() => setShowArchitectureModal(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                >
                  <Code2 className="w-4 h-4" />
                  <span>View Project Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Author: {PERSONAL_INFO.shortName}
              </div>
            </div>
          </div>
        </div>

        {/* Future Projects Notice */}
        <div className="mt-8 text-center p-4 rounded-xl bg-white/70 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-400 max-w-xl mx-auto shadow-xs">
          <span>More full-stack and AI/ML projects will be added here as I build and deploy them during my engineering studies.</span>
        </div>
      </div>

      {/* Architecture Breakdown Modal */}
      {showArchitectureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setShowArchitectureModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white text-lg p-1 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
              <Code2 className="w-5 h-5" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                System Overview
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Portfolio Website Architecture
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Built as a modern, maintainable single-page web application with Vite, React 19, and TypeScript.
            </p>

            <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300 max-h-[60vh] overflow-y-auto pr-2">
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Frontend Stack</div>
                <div>React 19 + TypeScript + Vite for instant HMR and optimized production bundles.</div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Styling & Dual-Theme System</div>
                <div>Tailwind CSS v4 with custom dark variant, smooth transitions, and high-contrast AA typography for light and dark modes.</div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Modular Component Design</div>
                <div>All data lives in <code className="text-indigo-600 dark:text-indigo-300 font-mono">portfolioData.ts</code>, separating content from UI templates so Gowtham can easily add projects, skills, and certifications in the future.</div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Accessibility & Motion</div>
                <div>Respects <code className="text-indigo-600 dark:text-indigo-300 font-mono">prefers-reduced-motion</code>, compliant with WCAG AA contrast standards, and touch-target safe for mobile phones.</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowArchitectureModal(false)}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium cursor-pointer"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
