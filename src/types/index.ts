export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI & Systems' | 'IoT / Emerging';
  shortOverview: string;
  problemSolved: string;
  myContribution: string;
  techStack: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string; // Optional now, as Hospital Patient Record System does not have a live demo
  imageUrl?: string; // Actual project screenshot
  featured: boolean;
  accentColor?: string;
  architectureNotes?: string[];
}

export type SkillProficiency = 'proficient' | 'learning';

export interface SkillItem {
  name: string;
  proficiency: SkillProficiency;
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  yearOrStatus: string;
  category: 'Award' | 'AI & Cloud' | 'Software Engineering' | 'Data & APIs';
  description: string;
  verificationUrl?: string;
  imageUrl?: string; // Path to actual certificate image
  pdfUrl?: string;   // Path to actual certificate PDF if available
  imagePlaceholderText?: string;
  tags: string[];
  featured?: boolean;
  credentialId?: string;
  issueDate?: string;
}

export interface Milestone {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  iconName: string;
}

export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface TerminalCommandOutput {
  command: string;
  output: string | string[] | JSX.Element;
  timestamp: string;
}
