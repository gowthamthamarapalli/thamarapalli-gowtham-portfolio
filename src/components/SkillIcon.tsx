import React from 'react';
import {
  Terminal,
  Code2,
  FileCode,
  Braces,
  Layout,
  Palette,
  Atom,
  Server,
  Database,
  Layers,
  Cpu,
  Brain,
  Network,
  GitBranch,
  Github,
  Monitor,
  BookOpen,
  Sparkles,
  Binary,
  Workflow,
  Laptop,
} from 'lucide-react';

interface SkillIconProps {
  type: string;
  className?: string;
}

export default function SkillIcon({ type, className = 'w-5 h-5' }: SkillIconProps) {
  switch (type) {
    case 'c':
      return (
        <span className="font-mono font-bold text-xs text-sky-400 bg-sky-950/70 border border-sky-500/30 rounded px-1.5 py-0.5">
          C
        </span>
      );
    case 'cpp':
      return (
        <span className="font-mono font-bold text-xs text-indigo-400 bg-indigo-950/70 border border-indigo-500/30 rounded px-1 py-0.5">
          C++
        </span>
      );
    case 'python':
      return <Terminal className={`${className} text-amber-400`} />;
    case 'javascript':
      return <Braces className={`${className} text-yellow-400`} />;
    case 'html5':
      return <Layout className={`${className} text-orange-400`} />;
    case 'css3':
      return <Palette className={`${className} text-sky-400`} />;
    case 'responsive':
      return <Monitor className={`${className} text-teal-400`} />;
    case 'react':
      return <Atom className={`${className} text-cyan-400 animate-spin-slow`} />;
    case 'nodejs':
      return <Server className={`${className} text-emerald-400`} />;
    case 'express':
      return <Workflow className={`${className} text-slate-300`} />;
    case 'fullstack':
      return <Layers className={`${className} text-violet-400`} />;
    case 'sql':
      return <Database className={`${className} text-blue-400`} />;
    case 'mysql':
      return <Database className={`${className} text-cyan-300`} />;
    case 'dbms':
      return <Server className={`${className} text-indigo-400`} />;
    case 'mongodb':
      return <Database className={`${className} text-emerald-500`} />;
    case 'ai':
      return <Brain className={`${className} text-purple-400`} />;
    case 'ml':
      return <Cpu className={`${className} text-pink-400`} />;
    case 'datascience':
      return <Binary className={`${className} text-indigo-300`} />;
    case 'dsa':
      return <Network className={`${className} text-blue-400`} />;
    case 'algo':
      return <Workflow className={`${className} text-sky-400`} />;
    case 'oop':
      return <Code2 className={`${className} text-violet-400`} />;
    case 'problemsolving':
      return <Sparkles className={`${className} text-amber-400`} />;
    case 'git':
      return <GitBranch className={`${className} text-orange-400`} />;
    case 'github':
      return <Github className={`${className} text-slate-200`} />;
    case 'vscode':
      return <Laptop className={`${className} text-blue-400`} />;
    case 'colab':
      return <FileCode className={`${className} text-amber-400`} />;
    case 'jupyter':
      return <BookOpen className={`${className} text-orange-400`} />;
    default:
      return <Code2 className={`${className} text-indigo-400`} />;
  }
}
