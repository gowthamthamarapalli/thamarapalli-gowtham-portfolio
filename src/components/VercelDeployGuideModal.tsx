import { useState } from 'react';
import { Terminal, Copy, Check, ExternalLink } from 'lucide-react';

interface VercelDeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VercelDeployGuideModal({
  isOpen,
  onClose,
}: VercelDeployGuideModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: 'Step 1: Test & Run Locally',
      desc: 'Verify everything runs smoothly on your computer with Node.js 18+:',
      commands: `npm install\nnpm run dev`,
    },
    {
      title: 'Step 2: Initialize Git & Push to GitHub',
      desc: 'Push your portfolio to your GitHub account (https://github.com/gowthamthamarapalli):',
      commands: `git init\ngit add .\ngit commit -m "Initial commit: Thamarapalli Gowtham Portfolio"\ngit branch -M main\ngit remote add origin https://github.com/gowthamthamarapalli/thamarapalli-gowtham-portfolio.git\ngit push -u origin main`,
    },
    {
      title: 'Step 3: Deploy to Vercel (Free & Instant)',
      desc: 'Go to vercel.com, log in with GitHub, and import your repository:',
      commands: `# Vercel will automatically detect:
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build
Output Directory: dist`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xl text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
          <Terminal className="w-5 h-5" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider">
            Beginner-Friendly Guide
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Run Locally & Deploy to Vercel
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
          Everything in this project is pre-configured for standard Vite production builds (<code className="text-indigo-600 dark:text-indigo-300 font-mono">npm run build</code>) and zero-config Vercel hosting.
        </p>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{step.title}</span>
                </h4>
                <button
                  onClick={() => handleCopy(step.commands, idx)}
                  className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300 bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer shadow-xs"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">{step.desc}</p>

              <pre className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 font-mono text-xs text-indigo-700 dark:text-indigo-200 overflow-x-auto leading-relaxed">
                {step.commands}
              </pre>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors"
          >
            <span>Open Vercel Dashboard</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
