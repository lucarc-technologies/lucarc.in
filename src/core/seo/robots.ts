import { MetadataRoute } from 'next';

export function getRobotsConfig(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://lucarc.in/sitemap.xml',
  };
}
