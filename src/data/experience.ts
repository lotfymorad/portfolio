export interface Experience {
  id: string;
  title: string;
  company: string;
  type: 'freelance' | 'fulltime' | 'parttime' | 'internship';
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  major: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: 'freelance',
    title: 'Freelance Software Engineer',
    company: 'Self-Employed',
    type: 'freelance',
    period: '2025 — Present',
    description: 'Self-taught full-stack developer building web applications, ERP systems, and automation tools for clients and personal projects.',
    responsibilities: [
      'Designed and developed 4+ production-ready applications',
      'Built full-stack web platforms using Laravel, Next.js, and Python',
      'Created custom ERP solutions for business operations',
      'Developed Telegram bots with API integrations',
      'Managed domains, hosting, and deployment',
    ],
    technologies: ['Next.js', 'Laravel', 'MySQL', 'Python', 'JavaScript', 'TypeScript'],
  },
];

export const education: Education = {
  institution: 'El Obour Higher Institute',
  degree: "Bachelor's Degree",
  major: 'Business Information Systems (BIS)',
  year: '2026',
};

export const certifications: Certification[] = [
  {
    name: 'Million AI Experts',
    issuer: 'UAE National AI Program',
    icon: '🤖',
  },
  {
    name: 'Data Analysis',
    issuer: 'Cisco',
    icon: '📊',
  },
  {
    name: 'Java Programming',
    issuer: 'Udemy',
    icon: '☕',
  },
];
