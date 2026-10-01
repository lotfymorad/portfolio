export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  role: string;
  type: string;
  features: string[];
  techStack: string[];
  buildTime: string;
  status: 'live' | 'local' | 'in-progress';
  liveUrl?: string;
  githubUrl?: string;
  dataScale?: string[];
  results: string[];
  images: string[];
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    id: 'gold-gym',
    title: 'Gold Gym',
    shortDescription: 'Full-featured fitness platform with online training, subscription plans, trainer booking, and supplements store.',
    problem: 'Fitness businesses lack an integrated digital platform combining trainer booking, subscription management, supplement sales, and exercise scheduling in one place.',
    solution: 'Built a comprehensive fitness platform with trainer profiles and booking system, 3-tier subscription plans, supplements e-commerce store, daily exercise schedules with video integration, and a community section.',
    role: 'Solo Developer — Full Design & Development',
    type: 'Fitness Platform',
    features: [
      'Trainer profiles with booking & Online/Offline status',
      '3 Subscription tiers with feature comparison',
      'Supplements store with search & product cards',
      'Daily exercise schedule with video links',
      'Community section & testimonials',
      'Admin panel',
      'Authentication system',
      'Bilingual support (AR/EN)',
      'Dark/Light mode toggle'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'PHP', 'MySQL', 'Vite'],
    buildTime: '~5 days',
    status: 'local',
    results: [
      'Most feature-rich project with 6+ integrated modules',
      'Premium dark UI with gold branding',
      'Complete admin panel for content management'
    ],
    images: ['/images/projects/goldgym-1.png', '/images/projects/goldgym-2.png', '/images/projects/goldgym-3.png'],
    featured: true,
    order: 1,
  },
  {
    id: 'timetrack-hr-pro',
    title: 'TimeTrack HR Pro',
    shortDescription: 'Professional recruitment and job portal platform with advanced search, filtering, and application management.',
    problem: 'Job seekers in the software industry face difficulty finding relevant positions across scattered platforms with poor filtering capabilities.',
    solution: 'Created a dedicated job portal with a powerful 5-filter search system, advanced job filtering by category, type, experience level, and location, along with user dashboards for managing applications.',
    role: 'Solo Developer — Full Design & Development',
    type: 'Job Portal Platform',
    features: [
      'Hero with 5-filter search bar',
      'Advanced job filtering (Category, Type, Level, Location)',
      'Featured jobs section',
      'Detailed job listings with salary info',
      'User dashboard with quick actions',
      'Job posting capability',
      'Application management system',
      'Authentication (Login/Register/Forgot Password)',
      'Dark/Light mode',
      'Bilingual (EN/AR) with i18n'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'PHP', 'MySQL'],
    buildTime: '~4 days',
    status: 'live',
    liveUrl: 'https://2bruce.com',
    results: [
      '114 jobs posted across 14 categories',
      '153 applications submitted',
      '109 registered users',
      'Live production deployment'
    ],
    dataScale: ['114 Jobs', '14 Categories', '153 Applications', '109 Users'],
    images: ['/images/projects/timetrack-1.png', '/images/projects/timetrack-2.png', '/images/projects/timetrack-3.png'],
    featured: true,
    order: 2,
  },
  {
    id: 'hurricane-x',
    title: 'Hurricane X',
    shortDescription: 'Telegram bot for automated social media marketing services with full admin dashboard and external API integration.',
    problem: 'Social media service providers need an automated, scalable way to sell and manage thousands of SMM services across multiple platforms.',
    solution: 'Built a Telegram bot integrated with an external SMM API that syncs 3,800+ services across 11+ social platforms, with a complete admin dashboard for service management, user management, and broadcasting.',
    role: 'Solo Developer',
    type: 'Telegram Bot / SMM Platform',
    features: [
      'Multi-platform service catalog (Facebook, Instagram, TikTok, YouTube, Twitter, etc.)',
      'External API sync with 3,821 services',
      'User balance & referral system',
      'Complete admin dashboard',
      'Broadcasting & ad campaigns',
      'Percentage-based pricing system',
      'Currency/exchange rate management',
      'Service customization (enable/disable)',
      'User management',
      'Admin role management'
    ],
    techStack: ['Python', 'SQLite', 'Telegram Bot API', 'External SMM API'],
    buildTime: '~10 hours',
    status: 'live',
    results: [
      '3,821 services synced across 782 categories',
      '3,793 active services',
      'Full admin control panel',
      'Live and actively serving users'
    ],
    dataScale: ['3,821 Services', '782 Categories', '11+ Platforms'],
    images: ['/images/projects/hurricane-1.png', '/images/projects/hurricane-2.png'],
    featured: true,
    order: 3,
  },
  {
    id: 'alfarabi-erp',
    title: 'ALFARABI ERP System',
    shortDescription: 'Custom ERP system for managing worker accommodation operations, built with Google Sheets and JavaScript in just 12 hours.',
    problem: 'Al-Farabi Labor Company faced duplicate/overlapping worker data and extreme difficulty managing accommodation operations using raw Google Sheets.',
    solution: 'Built a custom ERP system with an intuitive dashboard, worker management, housing allocation, supplier tracking, and a notes/reports system — all powered by Google Sheets as the backend.',
    role: 'Solo Developer — Voluntary',
    type: 'ERP / Business Application',
    features: [
      'Dashboard with live analytics & charts',
      'Worker management (2,581 employees)',
      'Housing allocation with bed capacity tracking',
      'Supplier CRUD operations (16 suppliers)',
      'Employee search (by code, national ID, phone)',
      'Available housing management',
      'Notes & reports system with priorities',
      'Admin role management',
      'One-click worker accommodation'
    ],
    techStack: ['Google Sheets', 'JavaScript', 'Google Apps Script'],
    buildTime: '~12 hours',
    status: 'live',
    results: [
      'Managing 2,581 employees and 624 beds',
      'Reduced data errors significantly',
      'Improved operational efficiency',
      'Built in just 12 hours — live in production'
    ],
    dataScale: ['2,581 Employees', '624 Beds', '16 Suppliers'],
    images: ['/images/projects/alfarabi-1.png', '/images/projects/alfarabi-2.png', '/images/projects/alfarabi-3.png'],
    featured: true,
    order: 4,
  },
];
