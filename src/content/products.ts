import { Product } from '@/types';

export const productsData: Product[] = [
  {
    name: 'ClearDays',
    slug: 'cleardays',
    tagline: 'Modern Multi-Tenant HRMS for Startups & SMEs',
    description:
      'A modern multi-tenant Human Resource Management System (HRMS) built for startups, SMEs, and growing organizations. Designed for clarity, compliance, and frictionless employee experiences.',
    status: 'current',
    highlights: [
      'Multi-tenant cloud architecture with strict tenant isolation',
      'Configurable RBAC with custom permissions for HR, managers, and employees',
      'Automated leave balance calculation and payroll compliance exports',
    ],
    features: [
      {
        title: 'Employee Management',
        description: '360-degree employee directory, onboarding checklists, and document vault.',
        iconName: 'Users',
        category: 'Core HR',
      },
      {
        title: 'Attendance Management',
        description: 'Biometric and geo-fenced attendance tracking with real-time logs.',
        iconName: 'Clock',
        category: 'Workforce',
      },
      {
        title: 'Leave Management',
        description: 'Custom leave policies, automated accruals, and one-click manager approvals.',
        iconName: 'Calendar',
        category: 'Workforce',
      },
      {
        title: 'Payroll Automation',
        description: 'Automated tax deductions, salary slip generation, and compliance reporting.',
        iconName: 'CreditCard',
        category: 'Finance',
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        description: 'Granular security roles to ensure data privacy across organizational tiers.',
        iconName: 'Shield',
        category: 'Security',
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'Isolated data schemas and high-performance routing for multiple organizations.',
        iconName: 'Layers',
        category: 'Infrastructure',
      },
      {
        title: 'Organization Management',
        description: 'Multi-branch hierarchy, department modeling, and cost-center tracking.',
        iconName: 'Building',
        category: 'Core HR',
      },
      {
        title: 'Analytics & Reporting',
        description: 'Interactive attrition dashboards, attendance trends, and payroll forecasts.',
        iconName: 'BarChart3',
        category: 'Insights',
      },
      {
        title: 'Workflow Automation',
        description: 'Custom approval pipelines for expense reimbursements and asset allocations.',
        iconName: 'GitBranch',
        category: 'Automation',
      },
    ],
    architectureNotes: [
      'Isolated multi-tenant PostgreSQL schemas ensuring zero data bleed',
      'JWT + refresh token authentication with automated session revocation',
      'Event-driven webhook engine for third-party payroll & accounting sync',
    ],
  },
  {
    name: 'PrepForge',
    slug: 'prepforge',
    tagline: 'Comprehensive Interview Preparation Platform for Software Engineers',
    description:
      'A comprehensive interview preparation platform designed for software engineers. Master algorithms, system design, and behavioral interviews with structured tracking and AI guidance.',
    status: 'current',
    highlights: [
      'Curated DSA tracker with pattern-based categorization',
      'Interactive STAR story builder for behavioral excellence',
      'System design blueprints from real-world scale challenges',
    ],
    features: [
      {
        title: 'DSA Tracker',
        description: 'Track progress across 150+ essential algorithms and data structure patterns.',
        iconName: 'Code2',
        category: 'Algorithms',
      },
      {
        title: 'System Design Learning',
        description: 'Interactive blueprints for high-throughput distributed architectures.',
        iconName: 'Cpu',
        category: 'Architecture',
      },
      {
        title: 'Behavioral Prep',
        description: 'Structured framework for leadership principles and situational questions.',
        iconName: 'MessageSquare',
        category: 'Behavioral',
      },
      {
        title: 'STAR Story Builder',
        description: 'Craft, refine, and store impactful interview stories using the STAR method.',
        iconName: 'Star',
        category: 'Behavioral',
      },
      {
        title: 'Interview Checklists',
        description: 'Step-by-step prep timelines from phone screen to onsite system design.',
        iconName: 'CheckSquare',
        category: 'Strategy',
      },
      {
        title: 'Progress Tracking',
        description: 'Visual analytics showing mastery levels across algorithms and design topics.',
        iconName: 'TrendingUp',
        category: 'Analytics',
      },
      {
        title: 'AI-powered Learning',
        description: 'Instant feedback on code time/space complexity and STAR story refinement (Coming Soon).',
        iconName: 'Sparkles',
        category: 'AI Assistant',
      },
    ],
    architectureNotes: [
      'Real-time markdown & diagram rendering for system design schematics',
      'Local-first progress synchronization with cloud backup',
      'AI assistant pipeline powered by low-latency LLM evaluation',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}
