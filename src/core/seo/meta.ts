import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://lucarc.in'),
  title: {
    default: 'Lucarc — Building software that helps businesses work smarter and developers grow',
    template: '%s | Lucarc',
  },
  description:
    'We create modern SaaS products, developer tools, and AI-powered solutions designed to solve real-world problems. Discover ClearDays HRMS and PrepForge interview prep platform.',
  keywords: [
    'Lucarc',
    'Enterprise SaaS',
    'HRMS',
    'ClearDays',
    'PrepForge',
    'Developer Tools',
    'AI Applications',
    'Software Engineering',
    'Multi-Tenant Architecture',
  ],
  authors: [{ name: 'Lucarc Engineering Team', url: 'https://lucarc.in' }],
  creator: 'Lucarc',
  publisher: 'Lucarc',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lucarc.in',
    title: 'Lucarc — Building software that helps businesses work smarter and developers grow',
    description:
      'Modern SaaS products, developer tools, and AI-powered solutions designed to solve real-world problems.',
    siteName: 'Lucarc',
    images: [
      {
        url: '/lucarc_dark.png',
        width: 1200,
        height: 630,
        alt: 'Lucarc Software Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucarc — Building software that helps businesses work smarter and developers grow',
    description:
      'Modern SaaS products, developer tools, and AI-powered solutions designed to solve real-world problems.',
    images: ['/lucarc_dark.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export function constructMetadata({
  title,
  description,
  image,
  path = '',
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}): Metadata {
  return {
    ...defaultMetadata,
    title: title ? `${title} | Lucarc` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ? `${title} | Lucarc` : (defaultMetadata.openGraph?.title as string),
      description: description || (defaultMetadata.openGraph?.description as string),
      url: `https://lucarc.in${path}`,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title || 'Lucarc' }]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ? `${title} | Lucarc` : defaultMetadata.twitter?.title,
      description: description || defaultMetadata.twitter?.description,
      images: image ? [image] : defaultMetadata.twitter?.images,
    },
  };
}
