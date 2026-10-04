import { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Flame,
  CircleDot,
} from 'lucide-react';
import { SKILLS_DATA, CURRENTLY_LEARNING_LIST } from '../data/portfolioData.ts';
import { ProficiencyLevel, SkillCategory } from '../types.ts';
import SkillIcon from './SkillIcon.tsx';

type FilterType = 'all' | 'learning_only' | SkillCategory;

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filterTabs: { id: FilterType; label: string; count: number }[] = [
    { id: 'all', label: 'All Skills', count: SKILLS_DATA.length },
    {
      id: 'learning_only',
      label: 'Currently Learning',
      count: SKILLS_DATA.filter((s) => s.isCurrentlyLearning).length,
    },
    {
      id: 'languages',
      label: 'Languages',
      count: SKILLS_DATA.filter((s) => s.category === 'languages').length,
    },
    {
      id: 'web',
      label: 'Web Dev',
      count: SKILLS_DATA.filter((s) => s.category === 'web').length,
    },
    {
      id: 'databases',
      label: 'Databases',
      count: SKILLS_DATA.filter((s) => s.category === 'databases').length,
    },
    {
      id: 'aiml',
      label: 'AI & ML',
      count: SKILLS_DATA.filter((s) => s.category === 'aiml').length,
    },
    {
      id: 'cs_dsa',
      label: 'DS & CS',
      count: SKILLS_DATA.filter((s) => s.category === 'cs_dsa').length,
    },
    {
      id: 'tools',
      label: 'Tools & Tech',
      count: SKILLS_DATA.filter((s) => s.category === 'tools').length,
    },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'learning_only') return skill.isCurrentlyLearning;
    return skill.category === selectedFilter;
  });

  const getLevelBadge = (level: ProficiencyLevel) => {
    switch (level) {
      case 'Intermediate':
        return {
          label: 'Intermediate',
          pillClass: 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300',
          dotClass: 'bg-emerald-500 dark:bg-emerald-400',
          desc: 'Solid grasp & practical implementation',
        };
      case 'Familiar':
        return {
          label: 'Familiar',
          pillClass: 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-200 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-300',
          dotClass: 'bg-indigo-500 dark:bg-indigo-400',
          desc: 'Working knowledge & coursework use',
        };
      case 'Learning':
        return {
          label: 'Learning',
          pillClass: 'bg-sky-50 dark:bg-sky-950/70 border-sky-200 dark:border-sky-500/40 text-sky-700 dark:text-sky-300',
          dotClass: 'bg-sky-500 dark:bg-sky-400',
          desc: 'Actively studying concepts & code syntax',
        };
      case 'Beginner':
        return {
          label: 'Beginner',
          pillClass: 'bg-amber-50 dark:bg-amber-950/70 border-amber-200 dark:border-amber-500/40 text-amber-800 dark:text-amber-300',
          dotClass: 'bg-amber-500 dark:bg-amber-400',
          desc: 'Foundational stage & early exploration',
        };
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative z-10 bg-slate-100/50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-500/30 text-xs font-medium text-indigo-700 dark:text-indigo-300 mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Honest Student Portfolio · 2nd Year B.Tech CSE (AI & ML)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Technical Skills & Technologies
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-balance">
            Divided into clear categories reflecting my computer science curriculum and personal development journey. I do not claim professional mastery; each skill indicates my honest current stage.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CURRENTLY LEARNING SPOTLIGHT                                              */}
        {/* ========================================================================= */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/80 dark:from-indigo-950/80 dark:via-slate-900/90 dark:to-purple-950/80 border border-indigo-200 dark:border-indigo-500/30 p-6 sm:p-8 backdrop-blur-md shadow-md dark:shadow-xl relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-600/30 border border-indigo-200 dark:border-indigo-500/40 flex items-center justify-center text-indigo-700 dark:text-indigo-300">
                  <Flame className="w-4 h-4 text-amber-500 dark:text-amber-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Currently Learning Spotlight</span>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300">
                      Active Sprint
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    High-priority technical focus areas I am actively studying and coding every week
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedFilter('learning_only')}
                className="text-xs font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-xs"
              >
                <span>Filter by active learning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 6 Spotlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {CURRENTLY_LEARNING_LIST.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-400/50 transition-all duration-200 group flex items-start gap-3.5 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <SkillIcon type={item.icon} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
                        {item.name}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-300">
                        <CircleDot className="w-2 h-2 text-indigo-500 dark:text-indigo-400 animate-ping" />
                        <span>Learning</span>
                      </span>
                    </div>
                    <div className="text-[11px] text-indigo-600 dark:text-indigo-400/90 font-mono mb-1">
                      {item.category}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug line-clamp-2">
                      {item.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CATEGORY TABS                                                 */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl max-w-full shadow-xs">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? 'bg-indigo-800/80 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Legend for Honest Proficiency Labels */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 text-xs text-slate-600 dark:text-slate-400">
          <span className="text-slate-500 font-mono">Proficiency Guide:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            <strong className="text-slate-800 dark:text-slate-200">Intermediate:</strong> Solid grasp
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
            <strong className="text-slate-800 dark:text-slate-200">Familiar:</strong> Working knowledge
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400" />
            <strong className="text-slate-800 dark:text-slate-200">Learning:</strong> Active study
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400" />
            <strong className="text-slate-800 dark:text-slate-200">Beginner:</strong> Early foundations
          </span>
        </div>

        {/* ========================================================================= */}
        {/* SKILLS CARDS GRID                                                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const levelInfo = getLevelBadge(skill.level);
            const isHovered = hoveredCard === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredCard(skill.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-5 rounded-xl bg-white/90 dark:bg-slate-900/60 border transition-all duration-200 flex flex-col justify-between group shadow-xs ${
                  skill.isCurrentlyLearning
                    ? 'border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/60 shadow-md shadow-indigo-950/10'
                    : 'border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                } hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-900/90`}
              >
                <div>
                  {/* Top Row: Icon + Names + Level */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-indigo-400 dark:group-hover:border-indigo-500/40 transition-colors shrink-0">
                        <SkillIcon type={skill.iconType} className="w-5 h-5" />
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors flex items-center gap-2">
                          <span>{skill.name}</span>
                        </h4>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {skill.categoryLabel}
                        </div>
                      </div>
                    </div>

                    {/* Proficiency Badge (Honest Label) */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border ${levelInfo.pillClass}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${levelInfo.dotClass}`} />
                      <span>{levelInfo.label}</span>
                    </span>
                  </div>

                  {/* Short Description */}
                  {skill.shortDescription && (
                    <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed mb-4">
                      {skill.shortDescription}
                    </p>
                  )}
                </div>

                {/* Card Footer: Currently Learning Tag or Category Metric */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-between text-xs">
                  {skill.isCurrentlyLearning ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>Currently Learning</span>
                    </span>
                  ) : (
                    <span className="text-slate-500 font-mono text-[11px]">
                      {levelInfo.desc}
                    </span>
                  )}

                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                    2nd Year B.Tech
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Note on Updates */}
        <div className="mt-12 text-center p-4 rounded-xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 max-w-xl mx-auto shadow-xs">
          <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400 inline mr-2" />
          <span>
            Every technology listed is tied to active coursework at Marwadi University or verified self-directed project building.
          </span>
        </div>
      </div>
    </section>
  );
}
