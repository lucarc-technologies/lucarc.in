import { Metadata } from 'next';
import { PrepForgePage } from '@/products/prepforge/page';
import { constructMetadata } from '@/core/seo/meta';
import { getSoftwareApplicationSchema } from '@/core/seo/schema';
import { prepforgeData } from '@/products/prepforge/data';

export const metadata: Metadata = constructMetadata({
  title: 'PrepForge — Comprehensive Interview Preparation Platform for Software Engineers',
  description: prepforgeData.description,
  path: '/products/prepforge',
});

export default function Page() {
  const schema = getSoftwareApplicationSchema(
    'PrepForge',
    prepforgeData.description,
    'DeveloperApplication'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PrepForgePage />
    </>
  );
}
