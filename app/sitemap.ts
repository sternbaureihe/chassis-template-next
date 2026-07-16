import { MetadataRoute } from 'next';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, '');
  const now = new Date().toISOString();
  return [
    { url: base + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: base + '/specs', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: base + '/history', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/guides', lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: base + '/market', lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: base + '/classifieds', lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: base + '/news', lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: base + '/specialists', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/recalls', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/registry', lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: base + '/privacy', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: base + '/terms', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}