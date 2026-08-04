import { getProductBySlug } from '@/content/products';

export const prepforgeData = getProductBySlug('prepforge')!;

export const prepforgeStats = [
  { label: 'DSA Patterns', value: '22', detail: 'Core patterns that cover 90% of interviews' },
  { label: 'Challenges', value: '300+', detail: 'Curated across all difficulty levels' },
  { label: 'Prep Modules', value: '3-in-1', detail: 'Coding, design & behavioral in one place' },
  { label: 'AI Coach', value: 'Coming Soon', detail: 'Real-time feedback on your approach' },
];
