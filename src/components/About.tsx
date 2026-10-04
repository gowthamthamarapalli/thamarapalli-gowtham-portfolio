import { useState } from 'react';
import {
  GraduationCap,
  Laptop,
  BarChart3,
  Rocket,
  Bot,
  Camera,
  Info,
  Check,
  Code2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export default function About() {
  const [showPhotoGuide, setShowPhotoGuide] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [photoInput, setPhotoInput] = useState('');

  const handleApplyPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (photoInput.trim()) {
      setCustomPhotoUrl(photoInput.trim());
      setShowPhotoGuide(false);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhotoUrl(null);
    setPhotoInput('');
  };

  const infoCards = [
    {
      icon: GraduationCap,
      label: 'B.Tech Student',
      caption: '2nd Year Undergraduate',
      accentColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: Laptop,
      label: 'CSE – AI & ML',
      caption: 'Marwadi University, Rajkot',
      accentColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: BarChart3,
      label: 'CGPA: 8.5',
      caption: 'Current Academic Performance',
      accentColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      isNumeric: true,
    },
    {
      icon: Rocket,
      label: 'Aspiring Full-Stack Developer',
      caption: 'Modern Web Engineering',
      accentColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    },
    {
      icon: Bot,
      label: 'Aspiring AI/ML Engineer',
      caption: 'Machine Learning & Systems',
      accentColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Get To Know Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            About Me
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            A glimpse into my background, focus, and passion for software engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photo / Avatar Placeholder (Clearly Marked) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group w-64 sm:w-72">
              {/* Outer frame styling */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-indigo-500/30 via-slate-800 to-slate-900 shadow-2xl">
                <div className="relative rounded-[14px] bg-slate-950 p-6 flex flex-col items-center text-center overflow-hidden min-h-[300px] justify-center">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 to-slate-900/50" />
                  
                  {customPhotoUrl ? (
                    <div className="relative w-36 h-36 rounded-2xl overflow-hidden mb-4 border border-slate-700 shadow-md">
                      <img
                        src={customPhotoUrl}
                        alt="Thamarapalli Gowtham Profile"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        onError={() => {
                          setCustomPhotoUrl(null);
                        }}
                      />
                    </div>
                  ) : (
                    /* Clearly marked photo placeholder */
                    <div className="relative mb-5 flex flex-col items-center">
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-850 border border-indigo-500/30 flex flex-col items-center justify-center text-slate-300 shadow-inner group-hover:border-indigo-400/60 transition-colors">
                        <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-300 via-sky-200 to-white bg-clip-text text-transparent font-mono">
                          TG
                        </span>
                        <span className="text-[10px] text-indigo-400/80 font-mono mt-1">
                          STUDENT PORTFOLIO
                        </span>
                      </div>

                      {/* Photo Placeholder Tag */}
                      <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-950/80 border border-indigo-500/30 text-[11px] font-medium text-indigo-300">
                        <Camera className="w-3 h-3 text-indigo-400" />
                        <span>Profile Photo Placeholder</span>
                      </div>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-white mb-0.5">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Marwadi University, Rajkot
                  </p>

                  {/* Replace Photo Helper Action */}
                  <button
                    onClick={() => setShowPhotoGuide(!showPhotoGuide)}
                    className="inline-flex items-center gap-1.5 text-xs text-indigo-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>{customPhotoUrl ? 'Change Photo' : 'How to add your photo'}</span>
                  </button>
                </div>
              </div>

              {/* Photo replacement guide modal / dropdown */}
              {showPhotoGuide && (
                <div className="mt-3 p-4 rounded-xl bg-slate-900 border border-indigo-500/40 text-xs text-slate-300 shadow-xl space-y-2">
                  <div className="font-semibold text-white flex items-center justify-between">
                    <span>How to replace with your photo:</span>
                    <button
                      onClick={() => setShowPhotoGuide(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    <strong>Option 1 (Code):</strong> Save your photo as <code className="text-indigo-300 font-mono">public/profile.jpg</code> in your project repository.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    <strong>Option 2 (Live Preview):</strong> Enter a direct image URL below to test:
                  </p>
                  <form onSubmit={handleApplyPhoto} className="flex gap-1.5 pt-1">
                    <input
                      type="url"
                      placeholder="https://example.com/photo.jpg"
                      value={photoInput}
                      onChange={(e) => setPhotoInput(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-700 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-indigo-400"
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-500 text-white px-2.5 py-1 rounded text-xs font-medium cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                  {customPhotoUrl && (
                    <button
                      type="button"
                      onClick={handleResetPhoto}
                      className="text-[11px] text-red-400 hover:underline pt-1 block"
                    >
                      Reset to placeholder monogram
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Bio Prose & Small Info Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            {/* About Me Quote Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-xs font-mono font-semibold tracking-wider text-indigo-300 uppercase">
                  Statement & Aspirations
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                &ldquo;{PERSONAL_INFO.aboutMe}&rdquo;
              </blockquote>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  First Portfolio Project
                </span>
                <span>Continuously learning & building</span>
              </div>
            </div>

            {/* Required Small Information Cards */}
            <div>
              <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-3">
                Key Highlights
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {infoCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 flex items-start gap-3.5 group"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 ${card.accentColor} group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div
                          className={`text-sm font-semibold text-slate-100 ${
                            card.isNumeric ? 'font-mono tabular-nums text-emerald-300' : ''
                          }`}
                        >
                          {card.label}
                        </div>
                        <div className="text-xs text-slate-400 truncate mt-0.5">
                          {card.caption}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
