import { useState } from 'react';
import {
  ArrowDown,
  Mail,
  FolderGit2,
  Terminal,
  Code,
  Cpu,
  GraduationCap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Exact path requested: /assets/profile/profile.jpeg
  const profileImagePath = PERSONAL_INFO.profileImagePath || '/assets/profile/profile.jpeg';

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Main Two-Column Hero Grid: Left (Text 58%) | Right (Large Portrait 42%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: HERO TEXT & INTRODUCTION (~58% on desktop)           */}
          {/* ================================================================= */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Subtle Tech Badge / Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>2nd-Year B.Tech Student</span>
              <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
              <span className="text-indigo-600 dark:text-indigo-400">Open to Learning & Collaborating</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 text-balance">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-500 dark:from-indigo-400 dark:via-sky-300 dark:to-indigo-200 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subtitle & Focus */}
            <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-700 dark:text-slate-300 mb-3 text-balance leading-snug">
              {PERSONAL_INFO.title}
              <span className="hidden sm:inline text-slate-300 dark:text-slate-600 mx-2">|</span>
              <br className="sm:hidden" />
              <span className="text-indigo-600 dark:text-indigo-300">
                Aspiring Full-Stack Developer & AI/ML Engineer
              </span>
            </p>

            {/* Short Introduction Tagline */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="group px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-600/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <FolderGit2 className="w-4 h-4 text-indigo-100 group-hover:scale-110 transition-transform" />
                <span>View My Projects</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto shadow-xs"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Compact Technical Highlights Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">
              <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-sm flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Education</div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">Marwadi Univ.</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-sm flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800/50 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Specialization</div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">CSE – AI & ML</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-sm flex items-center gap-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">CGPA</div>
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-300 font-mono">8.5 / 10.0</div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: LARGE PROMINENT PROFILE PORTRAIT (~42% on desktop)  */}
          {/* ================================================================= */}
          <div className="md:col-span-5 flex justify-center md:justify-end items-center w-full">
            <div className="relative group/portrait w-full max-w-[340px] sm:max-w-[400px] md:max-w-[360px] lg:max-w-[430px] xl:max-w-[460px] animate-float">
              
              {/* Subtle Glowing Blue/Purple Ambient Glow Behind Image */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 dark:from-blue-600/30 dark:via-indigo-600/25 dark:to-purple-600/30 rounded-[28px] blur-xl opacity-60 dark:opacity-70 group-hover/portrait:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Outer Card Frame with subtle gradient border & 24px rounded corners */}
              <div className="relative rounded-[24px] p-[2px] bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-blue-500/30 dark:from-indigo-500/50 dark:via-purple-500/30 dark:to-blue-500/40 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-indigo-950/50">
                
                {/* Inner Card Container */}
                <div className="relative rounded-[22px] bg-slate-100 dark:bg-slate-950 overflow-hidden w-full h-[450px] sm:h-[500px] md:h-[480px] lg:h-[540px] xl:h-[570px] flex items-center justify-center">
                  
                  {/* Real Profile Image: /assets/profile/profile.jpeg */}
                  {!imageError && (
                    <img
                      src={profileImagePath}
                      alt="Thamarapalli Gowtham profile photo"
                      loading="eager"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-top transition-all duration-500 group-hover/portrait:scale-[1.02] ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  )}

                  {/* Clean, Non-Broken Placeholder if file is missing during development */}
                  {(!imageLoaded || imageError) && (
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-between p-7 bg-gradient-to-tr from-slate-100 via-slate-50 to-indigo-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/70 text-slate-800 dark:text-slate-200"
                      aria-label="Thamarapalli Gowtham profile photo"
                    >
                      {/* Top status indicator in placeholder */}
                      <div className="w-full flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                          <span>Student Portfolio</span>
                        </span>
                        <span className="text-[11px] text-indigo-600 dark:text-indigo-400/80 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-500/30">
                          B.Tech CSE
                        </span>
                      </div>

                      {/* Center Monogram */}
                      <div className="flex flex-col items-center justify-center my-auto">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-500/40 shadow-sm dark:shadow-inner flex items-center justify-center mb-4 group-hover/portrait:border-indigo-400 transition-colors">
                          <span className="text-4xl sm:text-5xl font-black font-mono tracking-wider bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-500 dark:from-indigo-300 dark:via-sky-200 dark:to-white bg-clip-text text-transparent">
                            {PERSONAL_INFO.initials}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5 text-center">
                          {PERSONAL_INFO.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                          Marwadi University, Rajkot
                        </p>
                      </div>

                      {/* Bottom Path Note (so the user knows where their photo appears) */}
                      <div className="w-full text-center">
                        <div className="p-2 rounded-lg bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-indigo-600 dark:text-indigo-300/90 shadow-xs">
                          /assets/profile/profile.jpeg
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Subtle vignette gradient at bottom of photo for visual integration */}
                  {imageLoaded && !imageError && (
                    <div
                      className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  {/* Floating Tag Card over bottom of image */}
                  <div className="absolute bottom-3.5 inset-x-3.5 flex items-center justify-between backdrop-blur-md bg-white/90 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800/80 px-3.5 py-2 rounded-xl text-xs shadow-md">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      <span className="text-slate-800 dark:text-slate-200 font-medium truncate">
                        Thamarapalli Gowtham
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 px-2 py-0.5 rounded">
                      AI & ML
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-14 flex flex-col items-center gap-2">
          <button
            onClick={() => scrollTo('about')}
            className="text-xs text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
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
