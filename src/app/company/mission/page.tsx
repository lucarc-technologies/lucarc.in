import { Metadata } from 'next';
import { MissionView } from '@/company/mission/mission-view';
import { constructMetadata } from '@/core/seo/meta';

export const metadata: Metadata = constructMetadata({
  title: 'Our Vision & Roadmap',
  description:
    'Our long-term vision is to build an ecosystem of products that improve how businesses operate and how developers learn.',
  path: '/company/mission',
});

export default function MissionPage() {
  return <MissionView />;
}
