import { Target, Compass, ArrowRight, CircleDot } from 'lucide-react';
import { PERSONAL_INFO, CAREER_JOURNEY } from '../data/portfolioData.ts';

export default function CareerGoals() {
  return (
    <section id="goals" className="py-20 px-4 sm:px-6 relative z-10 bg-slate-100/40 dark:bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            Vision & Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Career Goals
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Strategic focus areas guiding my daily learning, coding practice, and project building.
          </p>
        </div>

        {/* Goal Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 via-white to-indigo-50/50 dark:from-indigo-950/70 dark:via-slate-900 dark:to-slate-900 border border-indigo-200 dark:border-indigo-500/30 p-6 sm:p-8 mb-12 backdrop-blur-sm relative overflow-hidden shadow-sm dark:shadow-none">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                <Target className="w-5 h-5" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Primary Objective
                </span>
              </div>
              <p className="text-lg sm:text-xl font-medium text-slate-900 dark:text-white leading-relaxed">
                &ldquo;{PERSONAL_INFO.careerGoalStatement}&rdquo;
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-500/40 text-xs text-indigo-800 dark:text-indigo-200">
                <Compass className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Dual Discipline Target</span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center font-mono">
                Full-Stack + AI/ML
              </div>
            </div>
          </div>
        </div>

        {/* The 5-Step Journey: Learn → Build → Improve → Deploy → Grow */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              My Growth Pipeline
            </h3>
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
              Current Stage: Step 1 & 2
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {CAREER_JOURNEY.map((item, index) => {
              const isCurrent = item.isCurrent;

              return (
                <div
                  key={item.step}
                  className={`relative p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between shadow-xs ${
                    isCurrent
                      ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-500/50 shadow-md dark:shadow-indigo-950/50'
                      : 'bg-white/90 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Step number and status indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                        0{item.step}
                      </span>
                      {isCurrent ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/30">
                          <CircleDot className="w-2.5 h-2.5 animate-pulse" />
                          <span>Active Focus</span>
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                          Planned
                        </span>
                      )}
                    </div>

                    <div className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                      <span>{item.label}</span>
                      {index < CAREER_JOURNEY.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 hidden md:inline ml-auto" />
                      )}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800/60 text-[10px] text-slate-500 font-mono">
                    {isCurrent ? 'Undergraduate 2nd Year' : 'Target Milestone'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
