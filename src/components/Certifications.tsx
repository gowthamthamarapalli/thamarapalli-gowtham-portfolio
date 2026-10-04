import { Award, ShieldCheck, CheckCircle2, BookmarkCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData.ts';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Continuous Learning & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Certifications
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Verified course certifications completed to deepen technical knowledge and programming proficiency.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => {
            const isCisco = cert.id === 'cisco-python';

            return (
              <div
                key={cert.id}
                className="relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/90 hover:border-indigo-500/40 p-6 sm:p-7 backdrop-blur-sm transition-all duration-200 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Top Bar: Issuer & Verified Emblem */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 ${
                          isCisco
                            ? 'bg-sky-950/80 border-sky-500/30 text-sky-400'
                            : 'bg-amber-950/80 border-amber-500/30 text-amber-400'
                        }`}
                      >
                        {isCisco ? (
                          <ShieldCheck className="w-6 h-6" />
                        ) : (
                          <Award className="w-6 h-6" />
                        )}
                      </div>

                      <div>
                        <span className="text-xs font-medium text-slate-400">
                          {cert.issuer}
                        </span>
                        <div className="text-[11px] text-slate-500 font-mono">
                          Official Curriculum
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-500/30 text-[11px] font-medium text-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Certified</span>
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Description / Focus Area */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {cert.focusArea}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <BookmarkCheck className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Skill Verification</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {cert.issuer}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Certifications Placeholder */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Currently pursuing additional specialized certifications in Full-Stack Web Development and Deep Learning.
        </div>
      </div>
    </section>
  );
}
