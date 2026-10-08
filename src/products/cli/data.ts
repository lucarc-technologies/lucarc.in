import { getProductBySlug } from '@/content/products';

export const cliData = getProductBySlug('cli')!;

export const cliStats = [
  { label: 'Published Version', value: 'v0.3.0', detail: 'Live on the official NPM Registry' },
  { label: 'Supported Stacks', value: '10+ Stacks', detail: 'Next.js, React, Angular, Spring, Fastify, FastAPI' },
  { label: 'Installation', value: 'Zero Setup', detail: 'Runs directly with standard NPX' },
  { label: 'License', value: 'MIT Open Source', detail: 'Free forever for developers & teams' },
];
