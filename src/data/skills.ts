import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming Languages',
    description: 'Core languages for algorithmic mastery, system design, and scalable application logic.',
    skills: [
      { name: 'C++', proficiency: 'proficient', highlight: true },
      { name: 'JavaScript', proficiency: 'proficient', highlight: true },
      { name: 'Java', proficiency: 'learning', highlight: false }, // Actively Exploring
    ]
  },
  {
    id: 'cs-fundamentals',
    name: 'CS Fundamentals',
    description: 'Foundational computer science principles essential for scalable software engineering.',
    skills: [
      { name: 'Data Structures & Algorithms', proficiency: 'proficient', highlight: true },
      { name: 'Object-Oriented Programming', proficiency: 'proficient', highlight: true },
      { name: 'Operating Systems', proficiency: 'proficient' },
      { name: 'DBMS', proficiency: 'proficient', highlight: true },
      { name: 'Computer Networks', proficiency: 'proficient' },
      { name: 'Software Engineering', proficiency: 'proficient' },
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Crafting responsive, dynamic, and accessible interfaces.',
    skills: [
      { name: 'HTML5', proficiency: 'proficient' },
      { name: 'CSS3', proficiency: 'proficient' },
      { name: 'React.js', proficiency: 'learning', highlight: false }, // Actively Exploring
      { name: 'Tailwind CSS', proficiency: 'proficient', highlight: true },
    ]
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'Server runtime, micro-services, and architectural data communication.',
    skills: [
      { name: 'Node.js', proficiency: 'proficient', highlight: true },
      { name: 'Express.js', proficiency: 'proficient', highlight: true },
      { name: 'REST APIs', proficiency: 'proficient', highlight: true },
    ]
  },
  {
    id: 'database',
    name: 'Database Systems',
    description: 'Relational data modeling, querying, and document storage.',
    skills: [
      { name: 'MySQL', proficiency: 'proficient', highlight: true },
      { name: 'MongoDB', proficiency: 'proficient', highlight: true },
    ]
  },
  {
    id: 'ai-technologies',
    name: 'AI Technologies & LLMs',
    description: 'Integrating next-generation intelligence into software workflows.',
    skills: [
      { name: 'LLM Fundamentals', proficiency: 'proficient', highlight: true }, // Proficient
      { name: 'Prompt Engineering', proficiency: 'proficient', highlight: true },
      { name: 'Gemini API', proficiency: 'learning', highlight: false }, // Actively Exploring
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    description: 'Version control, API testing, and productive development environments.',
    skills: [
      { name: 'Git', proficiency: 'proficient', highlight: true },
      { name: 'GitHub', proficiency: 'proficient', highlight: true },
      { name: 'Postman', proficiency: 'proficient', highlight: true },
      { name: 'VS Code', proficiency: 'proficient' },
    ]
  }
];
