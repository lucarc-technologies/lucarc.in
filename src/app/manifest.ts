import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lucarc — Software Ecosystem',
    short_name: 'Lucarc',
    description:
      'Building software that helps businesses work smarter and developers grow. Discover SiloamHR HRMS and PrepForge interview prep platform.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FAF6F0',
    theme_color: '#D45B3E',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'SiloamHR',
        short_name: 'SiloamHR',
        description: 'Multi-Tenant HRMS for Startups',
        url: '/products/siloamhr',
        icons: [{ src: '/logo.png', sizes: '96x96' }],
      },
      {
        name: 'PrepForge',
        short_name: 'PrepForge',
        description: 'Interview Prep Platform for Engineers',
        url: '/products/prepforge',
        icons: [{ src: '/logo.png', sizes: '96x96' }],
      },
    ],
  };
}
