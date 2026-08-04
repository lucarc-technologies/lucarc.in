import { Metadata } from 'next';
import { ClearDaysPage } from '@/products/cleardays/page';
import { constructMetadata } from '@/core/seo/meta';
import { getSoftwareApplicationSchema } from '@/core/seo/schema';
import { cleardaysData } from '@/products/cleardays/data';

export const metadata: Metadata = constructMetadata({
  title: 'ClearDays — Modern Multi-Tenant HRMS for Startups & SMEs',
  description: cleardaysData.description,
  path: '/products/cleardays',
});

export default function Page() {
  const schema = getSoftwareApplicationSchema(
    'ClearDays HRMS',
    cleardaysData.description,
    'BusinessApplication'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ClearDaysPage />
    </>
  );
}
