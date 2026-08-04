export interface ProductFeature {
  title: string;
  description: string;
  iconName?: string;
  category?: string;
}

export interface Product {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: 'current' | 'future';
  features: ProductFeature[];
  highlights?: string[];
  architectureNotes?: string[];
  demoUrl?: string;
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tagline?: string;
}

export interface RoadmapItem {
  id: string;
  name: string;
  category: 'HR & Workforce' | 'Developer Tools' | 'AI & Productivity' | 'Enterprise Infrastructure';
  status: 'Current' | 'Future';
  description: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  linkedinUrl?: string;
  email?: string;
}
