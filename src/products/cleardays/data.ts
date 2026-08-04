import { getProductBySlug } from '@/content/products';

export const cleardaysData = getProductBySlug('cleardays')!;

export const cleardaysMetrics = [
  { label: 'Tenant Isolation', value: '100%', detail: 'PostgreSQL schema-per-tenant' },
  { label: 'Core Modules', value: '9+', detail: 'Employee to Payroll & RBAC' },
  { label: 'Compliance', value: 'Automated', detail: 'Tax & audit-ready exports' },
  { label: 'Uptime SLA', value: '99.9%', detail: 'Multi-region cloud infrastructure' },
];
