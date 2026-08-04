import { getProductBySlug } from '@/content/products';

export const cleardaysData = getProductBySlug('cleardays')!;

export const cleardaysMetrics = [
  { label: 'Setup Time', value: '<1 Day', detail: 'From signup to your first payroll run' },
  { label: 'HR Modules', value: '9+', detail: 'Attendance, leaves, payroll & more' },
  { label: 'Compliance', value: 'Automated', detail: 'Tax & audit-ready reports on demand' },
  { label: 'Uptime', value: '99.9%', detail: 'Reliable across all devices & offices' },
];
