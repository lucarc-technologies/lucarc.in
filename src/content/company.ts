import { EngineeringPrinciple, RoadmapItem } from '@/types';

export const companyOverview = {
  name: 'Lucarc',
  tagline: 'Building software that helps businesses work smarter and developers grow.',
  url: 'https://lucarc.in',
  description:
    'We create modern SaaS products, developer tools, and AI-powered solutions designed to solve real-world problems.',
  visionQuote: 'Build products that solve meaningful problems while maintaining exceptional engineering quality.',
  philosophy:
    'We believe software should be intuitive, scalable, secure, and enjoyable to use. Every product we build is designed with long-term maintainability, performance, and user experience in mind.',
  longTermVision:
    'Our long-term vision is to build an ecosystem of products that improve how businesses operate and how developers learn. We are not building isolated applications. We are building a platform of products connected by great engineering, thoughtful design, and exceptional user experience.',
  closingTagline: 'Software that grows with you.',
};

export const whatWeBuild = [
  {
    title: 'Enterprise SaaS',
    description: 'Scalable software that simplifies business operations.',
    iconName: 'Building2',
    accentColor: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'HR & Workforce Management',
    description: 'Modern platforms for employee and organizational management.',
    iconName: 'Users',
    accentColor: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Developer Tools',
    description: 'Tools that improve developer productivity and engineering workflows.',
    iconName: 'Terminal',
    accentColor: 'from-indigo-400 to-blue-500',
  },
  {
    title: 'Career Platforms',
    description: 'Applications that help developers prepare, learn, and grow.',
    iconName: 'Rocket',
    accentColor: 'from-purple-400 to-pink-500',
  },
  {
    title: 'AI Applications',
    description: 'Practical AI solutions that automate repetitive work and improve productivity.',
    iconName: 'Sparkles',
    accentColor: 'from-amber-400 to-orange-500',
  },
];

export const expertiseList = [
  'Enterprise Software',
  'SaaS Platforms',
  'Multi-Tenant Architecture',
  'Backend Engineering',
  'Cloud-Native Applications',
  'Workflow Automation',
  'AI-Powered Applications',
  'Developer Experience',
  'Secure Authentication & Authorization',
  'API Design',
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: 'scale',
    title: 'Build for Scale',
    description: 'Design systems that continue to perform seamlessly as businesses grow.',
    iconName: 'TrendingUp',
    tagline: 'Architecture built for the next decade',
  },
  {
    id: 'simple',
    title: 'Keep It Simple',
    description: 'Simple software is easier to understand, maintain, and extend.',
    iconName: 'Minimize2',
    tagline: 'Clarity over unnecessary complexity',
  },
  {
    id: 'real-problems',
    title: 'Solve Real Problems',
    description: 'Every feature should create meaningful value and measurable impact.',
    iconName: 'Target',
    tagline: 'Value-driven product development',
  },
  {
    id: 'quality',
    title: 'Quality Over Quantity',
    description: 'We focus on building fewer products exceptionally well rather than spreading thin.',
    iconName: 'ShieldCheck',
    tagline: 'Precision engineering in every release',
  },
  {
    id: 'learning',
    title: 'Continuous Learning',
    description: 'Technology evolves every day, and so do we. We adapt with cutting-edge standards.',
    iconName: 'BookOpen',
    tagline: 'Always innovating and iterating',
  },
];

export const productRoadmap: RoadmapItem[] = [
  {
    id: 'siloamhr',
    name: 'SiloamHR',
    category: 'HR & Workforce',
    status: 'Current',
    description: 'Modern multi-tenant HRMS built for startups, SMEs, and growing organizations.',
  },
  {
    id: 'prepforge',
    name: 'PrepForge',
    category: 'Developer Tools',
    status: 'Current',
    description: 'Comprehensive interview preparation platform designed for software engineers.',
  },
  {
    id: 'ai-suite',
    name: 'AI Productivity Suite',
    category: 'AI & Productivity',
    status: 'Future',
    description: 'Intelligent assistants that streamline operational tasks and document workflows.',
  },
  {
    id: 'workflow-platform',
    name: 'Enterprise Workflow Platform',
    category: 'Enterprise Infrastructure',
    status: 'Future',
    description: 'Customizable automation engine for multi-stage organizational approvals.',
  },
  {
    id: 'dev-productivity',
    name: 'Developer Productivity Tools',
    category: 'Developer Tools',
    status: 'Future',
    description: 'CLI utilities and IDE companions for modern cloud-native engineering.',
  },
  {
    id: 'auth-platform',
    name: 'Shared Authentication Platform',
    category: 'Enterprise Infrastructure',
    status: 'Future',
    description: 'Unified RBAC, SSO, and identity provider across the entire Lucarc ecosystem.',
  },
  {
    id: 'notification-platform',
    name: 'Notification Platform',
    category: 'Enterprise Infrastructure',
    status: 'Future',
    description: 'High-throughput multi-channel messaging and alerting infrastructure.',
  },
  {
    id: 'analytics-platform',
    name: 'Analytics Platform',
    category: 'Enterprise Infrastructure',
    status: 'Future',
    description: 'Real-time telemetry and business intelligence dashboard for enterprise customers.',
  },
];

export const openSourceCommitment = {
  title: 'Open Source at Lucarc',
  description:
    'We believe in giving back to the developer community. Whenever possible, we open-source reusable libraries, utilities, templates, and tools that help other developers build better software.',
  githubUrl: 'https://github.com/lucarc-technologies',
};

export const connectLinks = {
  linkedin: 'https://linkedin.com/company/lucarc',
  email: 'rupesh.dev2002@gmail.com',
  website: 'https://lucarc.in',
};
