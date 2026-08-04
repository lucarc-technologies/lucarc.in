import { Metadata } from 'next';
import { CareersView } from '@/company/careers/careers-view';
import { constructMetadata } from '@/core/seo/meta';

export const metadata: Metadata = constructMetadata({
  title: 'Careers & Partnership — Work With Us',
  description:
    'Join Lucarc to build modern SaaS products and developer tools, or collaborate with us as a technical partner who values clean architecture and maintainability.',
  path: '/company/careers',
});

export default function CareersPage() {
  return <CareersView />;
}
