import { Metadata } from 'next';
import { ValuesView } from '@/company/values/values-view';
import { constructMetadata } from '@/core/seo/meta';

export const metadata: Metadata = constructMetadata({
  title: 'Engineering Values & Quality Standards',
  description:
    'Great software is built on strong fundamentals: Build for Scale, Keep It Simple, Solve Real Problems, Quality Over Quantity, and Continuous Learning.',
  path: '/company/values',
});

export default function ValuesPage() {
  return <ValuesView />;
}
