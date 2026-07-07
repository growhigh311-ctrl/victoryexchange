export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/admin', '/_next'],
    },
    sitemap: 'https://cricketbet.guru/sitemap.xml',
  };
}