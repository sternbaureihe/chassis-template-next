import { MetadataRoute } from 'next';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: siteUrl.replace(/\/$/, '') + '/sitemap.xml',
  };
}