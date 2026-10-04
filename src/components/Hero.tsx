import { ArrowDown, Mail, FolderGit2, Sparkles, Terminal, Code, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import ProfileImage from './ProfileImage.tsx';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Photo / Avatar */}
        <div className="flex justify-center mb-5">
          <ProfileImage size="md" />
        </div>

        {/* Subtle Tech Badge / Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>2nd-Year B.Tech Student</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-indigo-400">Open to Learning & Collaborating</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 text-balance">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 mb-4 max-w-3xl mx-auto text-balance">
          {PERSONAL_INFO.title}
          <span className="hidden sm:inline text-slate-600 mx-2">|</span>
          <br className="sm:hidden" />
          <span className="text-indigo-300">Aspiring Full-Stack Developer & AI/ML Engineer</span>
        </p>

        {/* Introduction */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollTo('projects')}
            className="group px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/25 transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <FolderGit2 className="w-4 h-4 text-indigo-200 group-hover:scale-110 transition-transform" />
            <span>View My Projects</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Subtle Interactive Tech Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-800/50 flex items-center justify-center text-indigo-400 shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Education</div>
              <div className="text-xs font-semibold text-slate-200">Marwadi University</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Specialization</div>
              <div className="text-xs font-semibold text-slate-200">CSE – AI & ML</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Academic CGPA</div>
              <div className="text-xs font-semibold text-emerald-300 font-mono tabular-nums">
                8.5 / 10.0
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-14 flex flex-col items-center gap-2">
          <button
            onClick={() => scrollTo('about')}
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span>Explore my journey</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
