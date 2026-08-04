import { Product } from '@/types';

export const productsData: Product[] = [
  {
    name: 'SiloamHR',
    slug: 'siloamhr',
    tagline: 'Frictionless HR, Attendance & Payroll for Modern Workforces',
    description:
      'An all-in-one Human Resource platform designed to eliminate spreadsheets and administrative clutter. Streamline employee onboarding, automate leave tracking, simplify attendance, and run error-free payroll in minutes.',
    status: 'current',
    demoUrl: 'https://hr-portal-web-nd7c.onrender.com/',
    highlights: [
      'Instant employee directory & self-service document vault',
      'One-click leave approvals & automated attendance tracking',
      'Effortless salary slip generation & compliance-ready reports',
    ],
    features: [
      {
        title: '360° Employee Hub',
        description: 'Centralize employee profiles, onboarding checklists, and personal documents in one secure workspace.',
        iconName: 'Users',
        category: 'Core HR',
      },
      {
        title: 'Smart Attendance',
        description: 'Effortless biometric and geo-verified attendance tracking with real-time team visibility.',
        iconName: 'Clock',
        category: 'Workforce',
      },
      {
        title: 'Frictionless Leaves',
        description: 'Custom leave policies, transparent balances, and instant one-click manager approvals.',
        iconName: 'Calendar',
        category: 'Workforce',
      },
      {
        title: 'Automated Payroll',
        description: 'Calculate deductions, generate salary slips, and export compliance reports without spreadsheet headaches.',
        iconName: 'CreditCard',
        category: 'Finance',
      },
      {
        title: 'Team & Role Permissions',
        description: 'Custom access levels for HR leaders, department managers, and team members.',
        iconName: 'Shield',
        category: 'Security',
      },
      {
        title: 'Multi-Branch Hierarchy',
        description: 'Easily manage multiple offices, remote teams, and department cost-centers from a single dashboard.',
        iconName: 'Building',
        category: 'Organization',
      },
      {
        title: 'Workforce Analytics',
        description: 'Interactive dashboards tracking headcounts, attendance trends, and leave utilization at a glance.',
        iconName: 'BarChart3',
        category: 'Insights',
      },
      {
        title: 'Custom Workflows',
        description: 'Automate expense approvals, reimbursement claims, and asset requests effortlessly.',
        iconName: 'GitBranch',
        category: 'Automation',
      },
    ],
    architectureNotes: [
      'Enterprise-grade security with isolated organization workspaces',
      'Seamless automated sync for payroll and accounting exports',
      'Built for 99.9% uptime and instant page loads across all devices',
    ],
  },
  {
    name: 'PrepForge',
    slug: 'prepforge',
    tagline: 'The Smarter Way to Master Tech Interviews & Land Your Dream Role',
    description:
      'A proven, pattern-driven preparation platform built by senior engineers. Move beyond memorizing solutions—master the 22 core algorithmic patterns, tackle real-world system design, and structure winning behavioral stories.',
    status: 'current',
    demoUrl: 'https://dsa-tracker-frontend-3kke.onrender.com/',
    highlights: [
      '22 high-yield algorithmic patterns across 300+ curated challenges',
      'Interactive STAR story builder for standout behavioral interviews',
      'Visual system design roadmaps from first principles to scale',
    ],
    features: [
      {
        title: 'Pattern-Driven DSA Roadmap',
        description: 'Master the 22 essential problem-solving patterns instead of memorizing hundreds of random questions.',
        iconName: 'Code2',
        category: 'Algorithms',
      },
      {
        title: 'System Design Blueprints',
        description: 'Step-by-step visual roadmaps to design scalable, fault-tolerant architectures with confidence.',
        iconName: 'Cpu',
        category: 'Architecture',
      },
      {
        title: 'Interactive STAR Story Builder',
        description: 'Structure your career achievements into memorable, high-impact stories that win over hiring committees.',
        iconName: 'Star',
        category: 'Behavioral',
      },
      {
        title: 'Behavioral Prep Framework',
        description: 'Guided templates for leadership principles, difficult conversations, and situational questions.',
        iconName: 'MessageSquare',
        category: 'Behavioral',
      },
      {
        title: 'Interview Timelines & Checklists',
        description: 'Structured 4, 8, and 12-week preparation schedules tailored to your target company tier.',
        iconName: 'CheckSquare',
        category: 'Strategy',
      },
      {
        title: 'Interview Readiness Score',
        description: 'Track your progress across coding, design, and behavioral modules with real-time confidence metrics.',
        iconName: 'TrendingUp',
        category: 'Analytics',
      },
      {
        title: 'AI Mock Assistant',
        description: 'Get instant feedback on your approach, code efficiency, and communication clarity (Coming Soon).',
        iconName: 'Sparkles',
        category: 'AI Assistant',
      },
    ],
    architectureNotes: [
      'Interactive visual diagramming for real-time architecture sketches',
      'Offline-first progress saving with seamless cloud sync',
      'Engineered for distraction-free learning and rapid pattern mastery',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

