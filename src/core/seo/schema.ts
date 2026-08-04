export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lucarc',
    url: 'https://lucarc.in',
    logo: 'https://lucarc.in/logo.png',
    description:
      'We create modern SaaS products, developer tools, and AI-powered solutions designed to solve real-world problems.',
    sameAs: ['https://linkedin.com/company/lucarc'],
    email: 'rupesh.dev2002@gmail.com',
  };
}

export function getSoftwareApplicationSchema(appName: string, description: string, category: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: appName,
    operatingSystem: 'Web-based, Cloud',
    applicationCategory: category,
    description: description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lucarc',
      url: 'https://lucarc.in',
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lucarc',
    url: 'https://lucarc.in',
    description: 'Lucarc software ecosystem — SiloamHR HRMS and PrepForge interview preparation platform.',
  };
}
