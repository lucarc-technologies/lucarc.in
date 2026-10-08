import { Metadata } from 'next';
import { CliPage } from '@/products/cli/page';
import { constructMetadata } from '@/core/seo/meta';
import { getSoftwareApplicationSchema } from '@/core/seo/schema';
import { cliData } from '@/products/cli/data';

export const metadata: Metadata = constructMetadata({
  title: 'create-lucarc-app — Modern Full-Stack Project Generator for Developers',
  description: cliData.description,
  path: '/products/cli',
});

export default function Page() {
  const schema = getSoftwareApplicationSchema(
    'create-lucarc-app',
    cliData.description,
    'DeveloperApplication'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CliPage />
    </>
  );
}
