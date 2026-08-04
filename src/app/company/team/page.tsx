import { Metadata } from 'next';
import { TeamView } from '@/company/team/team-view';
import { constructMetadata } from '@/core/seo/meta';

export const metadata: Metadata = constructMetadata({
  title: 'Team & Open Source Commitment',
  description:
    'We believe in giving back to the developer community by open-sourcing reusable libraries, utilities, templates, and tools.',
  path: '/company/team',
});

export default function TeamPage() {
  return <TeamView />;
}
