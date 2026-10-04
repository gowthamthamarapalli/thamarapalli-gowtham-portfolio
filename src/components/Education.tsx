import { GraduationCap, MapPin, Calendar, Award, BookCheck } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData.ts';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Education
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Formal undergraduate education in Computer Science and Engineering with specialization in AI & ML.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="relative">
          {/* Subtle vertical spine accent */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-sky-500/50 to-transparent" />

          <div className="relative flex flex-col sm:flex-row items-start gap-6">
            {/* Timeline Icon Node */}
            <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-indigo-950 border-2 border-indigo-500/50 items-center justify-center text-indigo-400 shadow-lg shadow-indigo-950/60 shrink-0 z-10">
              <GraduationCap className="w-8 h-8" />
            </div>

            {/* Main Education Card */}
            <div className="flex-1 w-full rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm hover:border-slate-700 transition-all duration-200">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex sm:hidden items-center gap-2 mb-2 text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                    <span className="text-xs font-medium uppercase tracking-wider">Higher Education</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {EDUCATION_DATA.institution}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{EDUCATION_DATA.location}</span>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="px-4 py-2 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-right">
                  <div className="text-[11px] text-emerald-300 font-medium uppercase tracking-wider">
                    Current CGPA
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                    {EDUCATION_DATA.cgpa}{' '}
                    <span className="text-xs font-normal text-emerald-300/80">/ 10</span>
                  </div>
                </div>
              </div>

              {/* Degree & Specialization */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-indigo-200">
                  <BookCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{EDUCATION_DATA.degree}</span>
                </div>

                <div className="text-xs sm:text-sm text-slate-300 font-medium pl-6">
                  Specialization in <span className="text-white font-semibold">{EDUCATION_DATA.specialization}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 pl-6 pt-1">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-sky-300 font-medium">{EDUCATION_DATA.currentYear}</span>
                  <span className="text-slate-600">·</span>
                  <span>Full-Time Degree Program</span>
                </div>
              </div>

              {/* Highlights & Study Focus */}
              <div>
                <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Academic Focus Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Data Structures & Algorithmic Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Database Management Systems (DBMS & SQL)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Object-Oriented Programming (C++ & Python)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Artificial Intelligence & Machine Learning Foundations</span>
                  </div>
                </div>
              </div>

              {/* Footnote note */}
              <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-[11px] text-slate-500">
                <Award className="w-3.5 h-3.5 text-slate-400" />
                <span>Maintaining strong academic standing with continuous hands-on laboratory practice.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
