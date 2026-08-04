import { CareerPosition } from '@/types';

export const careerCulture = {
  headline: 'Build Exceptional Software with Us',
  description:
    'At Lucarc, we value clean architecture, maintainability, and product thinking. Whether joining our core team or collaborating as a business partner, we operate with high ownership and precision.',
  perks: [
    {
      title: 'High Ownership',
      description: 'Lead features from initial architecture design to production release.',
      iconName: 'Award',
    },
    {
      title: 'Modern Stack',
      description: 'Work with Next.js, TypeScript, Cloud-Native AWS/GCP, and AI tooling.',
      iconName: 'Terminal',
    },
    {
      title: 'Remote-First Flexibility',
      description: 'We care about output, engineering quality, and collaboration, not hours.',
      iconName: 'Globe',
    },
    {
      title: 'Open Source Culture',
      description: 'Time dedicated to building and contributing to open-source software.',
      iconName: 'GitPullRequest',
    },
  ],
};

export const openPositions: CareerPosition[] = [
  {
    id: 'sen-fullstack',
    title: 'Senior Full-Stack Engineer',
    department: 'Core Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Lead feature development for ClearDays HRMS and contribute to our cloud-native micro-tenant architecture.',
    requirements: [
      '5+ years of experience in production web development',
      'Expertise in TypeScript, Next.js, and React',
      'Deep understanding of multi-tenant database design (PostgreSQL)',
      'Strong passion for clean code and automated testing',
    ],
  },
  {
    id: 'ai-product-eng',
    title: 'AI Product Engineer',
    department: 'PrepForge & AI Suite',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'Build practical AI assistants for PrepForge interview feedback and our future AI Productivity Suite.',
    requirements: [
      '3+ years building software products with LLM integrations',
      'Experience with vector search, RAG pipelines, and prompt optimization',
      'Proficiency in TypeScript, Python, and modern API design',
      'Focus on latency optimization and user experience',
    ],
  },
];

export const partnershipCallout = {
  title: 'Work With Us — Partnership & Collaboration',
  subtitle:
    'Alongside building our own products, we selectively collaborate with startups and businesses to develop scalable software solutions.',
  description:
    "If you're looking for a technical partner who values clean architecture, maintainability, and product thinking—we'd love to connect.",
  ctaText: 'Start a Conversation',
  email: 'rupesh.dev2002@gmail.com',
};
