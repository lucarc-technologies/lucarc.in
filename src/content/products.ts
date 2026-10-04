import { Product } from '@/types';

export const productsData: Product[] = [
  {
    name: 'SiloamHR',
    slug: 'siloamhr',
    tagline: 'Frictionless HR, Attendance & Payroll for Modern Workforces',
    description:
      'An all-in-one Human Resource platform designed to eliminate spreadsheets and administrative clutter. Streamline employee onboarding, automate leave tracking, simplify attendance, and run error-free payroll in minutes.',
    status: 'current',
    demoUrl: 'https://siloam.rupesh-yadav.fun/',
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
    demoUrl: 'https://prepforge.rupesh-yadav.fun/',
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
  {
    name: 'Lucarc Interview',
    slug: 'interview',
    tagline: 'Collaborative Technical Hiring Platform with Sandboxed Execution & AI Rubrics',
    description:
      'A real-time technical interviewing workspace designed for engineering teams and recruiters. Conduct frictionless live coding sessions, evaluate system designs on an interactive canvas, and generate objective candidate scorecards automatically.',
    status: 'future',
    highlights: [
      'Multi-language sandboxed code editor with automated test assertions',
      'Interactive architecture canvas for deep system design rounds',
      'AI-powered interview co-pilot with live audio transcription & rubric scoring',
    ],
    features: [
      {
        title: 'Collaborative Monaco Editor',
        description: 'Sub-millisecond multi-cursor pair programming with syntax highlighting across 25+ programming languages.',
        iconName: 'Code2',
        category: 'Live Coding',
      },
      {
        title: 'Sandboxed Code Runner',
        description: 'Isolated containerized execution with strict CPU/memory limits, custom I/O, and automated test cases.',
        iconName: 'Terminal',
        category: 'Execution',
      },
      {
        title: 'System Design Canvas',
        description: 'Infinite collaborative whiteboard equipped with cloud architecture components, databases, and microservice stencils.',
        iconName: 'Cpu',
        category: 'Architecture',
      },
      {
        title: 'Standardized Rubric Scoring',
        description: 'Evaluate problem solving, code quality, communication, and architecture with synchronized interviewer notes.',
        iconName: 'CheckSquare',
        category: 'Evaluation',
      },
      {
        title: 'AI Interview Intelligence',
        description: 'Live transcription, objective competency ratings, and instant executive summaries for hiring committees.',
        iconName: 'Sparkles',
        category: 'AI Assistant',
      },
      {
        title: 'Anti-Cheat Telemetry',
        description: 'Focus tracking, window blur alerts, and paste payload monitoring to maintain high hiring integrity.',
        iconName: 'Shield',
        category: 'Integrity',
      },
    ],
    architectureNotes: [
      'Built on WebSockets + Yjs CRDT for zero-latency collaborative synchronization',
      'MicroVM / Docker container clustering for safe isolated code evaluation',
      'End-to-end encrypted WebRTC audio, video, and screen sharing streams',
    ],
  },
  {
    name: 'create-lucarc-app',
    slug: 'cli',
    tagline: 'The Ultimate Full-Stack Project Generator for Modern Software Teams',
    description:
      'An interactive NPX CLI tool that scaffolds production-ready, fully-configured applications in seconds. Choose your preferred frontend (Next.js, React, Angular), backend (Fastify, Express, Spring Boot, FastAPI), database, and UI tokens with zero boilerplate friction.',
    status: 'future',
    highlights: [
      'Composable modular scaffolding across Next.js, React, Angular, Spring Boot, & FastAPI',
      'Auto-configured Tailwind CSS v4, shadcn/ui, and Prisma/Drizzle ORM bindings',
      'One-command Docker Compose orchestration and CI/CD pipelines',
    ],
    features: [
      {
        title: 'Interactive CLI Engine',
        description: 'Beautiful, prompt-driven terminal interface powered by Clack with instant project configuration.',
        iconName: 'Terminal',
        category: 'Developer Experience',
      },
      {
        title: 'Multi-Framework Frontend',
        description: 'Seamlessly initialize Next.js 15 (App Router), React 19 (Vite), Angular 19, or Vue with strict TypeScript.',
        iconName: 'Layers',
        category: 'Frontend',
      },
      {
        title: 'Polyglot Backend Stacks',
        description: 'Choose between Node.js (Fastify/Express), Java 21 (Spring Boot 3), or Python 3.12 (FastAPI).',
        iconName: 'GitBranch',
        category: 'Backend',
      },
      {
        title: 'Automated DB & ORM Wiring',
        description: 'Generates ready-to-run PostgreSQL, MySQL, or MongoDB configurations with Drizzle, Prisma, or JPA.',
        iconName: 'BarChart3',
        category: 'Database',
      },
      {
        title: 'Instant UI & Design Systems',
        description: 'Pre-configures Tailwind CSS v4, Lucide icons, and shadcn/ui components out of the box.',
        iconName: 'Sparkles',
        category: 'Styling',
      },
      {
        title: 'DevOps & Container Ready',
        description: 'Includes auto-generated docker-compose.yml, GitHub Actions workflows, and pre-commit hooks.',
        iconName: 'Shield',
        category: 'DevOps',
      },
    ],
    architectureNotes: [
      'Modular AST-based and templated generation engine for zero conflicting dependencies',
      'Zero external installation needed: run directly via npx create-lucarc-app',
      'Strict TypeScript and ESLint pre-configured across all generated workspaces',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

