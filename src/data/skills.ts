export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  isPrimary?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Next.js', isPrimary: true },
      { name: 'Vue' },
      { name: 'Angular' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'SASS' },
      { name: 'Redux' },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'NestJS' },
      { name: 'Laravel', isPrimary: true },
      { name: 'PHP' },
      { name: 'Django' },
      { name: 'Python' },
      { name: 'Java Core' },
      { name: 'C++' },
    ],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', isPrimary: true },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'Redis' },
      { name: 'Supabase' },
    ],
  },
  {
    name: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'VS Code' },
      { name: 'Figma' },
      { name: 'Postman' },
      { name: 'Jira' },
    ],
  },
  {
    name: 'Other',
    icon: '📦',
    skills: [
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'WebSockets' },
      { name: 'Payment Integration' },
      { name: 'SEO' },
      { name: 'Testing' },
      { name: 'Domains & Hosting' },
      { name: 'ERP Systems' },
    ],
  },
];

export const currentlyLearning: string[] = ['Spring Boot'];
