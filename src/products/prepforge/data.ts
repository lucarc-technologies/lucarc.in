import { getProductBySlug } from '@/content/products';

export const prepforgeData = getProductBySlug('prepforge')!;

export const prepforgeStats = [
  { label: 'DSA Patterns', value: '150+', detail: 'Time & space complexity verified' },
  { label: 'System Design', value: 'Scale', detail: 'High-throughput blueprints' },
  { label: 'STAR Framework', value: 'Interactive', detail: 'Leadership & behavioral builder' },
  { label: 'AI Assistance', value: 'Coming Soon', detail: 'Real-time code evaluation' },
];
