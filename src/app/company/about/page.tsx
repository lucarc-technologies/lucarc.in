import { Metadata } from 'next';
import { AboutView } from '@/company/about/about-view';
import { constructMetadata } from '@/core/seo/meta';

export const metadata: Metadata = constructMetadata({
  title: 'About Lucarc & Engineering Principles',
  description:
    'Lucarc is a software product company focused on building reliable, scalable, and user-centric applications that empower businesses and developers.',
  path: '/company/about',
});

export default function AboutPage() {
  return <AboutView />;
}
