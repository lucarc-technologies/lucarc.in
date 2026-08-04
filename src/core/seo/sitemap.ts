import { MetadataRoute } from 'next';

export function getSitemapConfig(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lucarc.in';
  const routes = [
    '',
    '/products/siloamhr',
    '/products/prepforge',
    '/company/about',
    '/company/mission',
    '/company/values',
    '/company/team',
    '/company/careers',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
