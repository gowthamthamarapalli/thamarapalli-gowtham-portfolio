export type SkillCategory =
  | 'languages'
  | 'web'
  | 'databases'
  | 'aiml'
  | 'cs_dsa'
  | 'tools';

export type ProficiencyLevel = 'Beginner' | 'Learning' | 'Familiar' | 'Intermediate';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  level: ProficiencyLevel;
  isCurrentlyLearning?: boolean;
  shortDescription?: string;
  iconType: string;
}

export interface EducationInfo {
  institution: string;
  location: string;
  degree: string;
  specialization: string;
  currentYear: string;
  cgpa: string;
  statusNote: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  keyHighlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerIcon: string;
  focusArea: string;
}

export interface CareerJourneyStep {
  step: number;
  label: string;
  subtitle: string;
  isCurrent?: boolean;
}
