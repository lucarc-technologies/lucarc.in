import { Metadata } from 'next';
import { SiloamHRPage } from '@/products/siloamhr/page';
import { constructMetadata } from '@/core/seo/meta';
import { getSoftwareApplicationSchema } from '@/core/seo/schema';
import { siloamhrData } from '@/products/siloamhr/data';

export const metadata: Metadata = constructMetadata({
  title: 'SiloamHR — Modern Multi-Tenant HRMS for Startups & SMEs',
  description: siloamhrData.description,
  path: '/products/siloamhr',
});

export default function Page() {
  const schema = getSoftwareApplicationSchema(
    'SiloamHR HRMS',
    siloamhrData.description,
    'BusinessApplication'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiloamHRPage />
    </>
  );
}
