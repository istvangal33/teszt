import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://restartphysio.hu';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-27'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/bemutatkozas`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/szolgaltatasok`,
      lastModified: new Date('2026-03-27'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/arak`,
      lastModified: new Date('2026-03-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/elerhetoseg`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galeria`,
      lastModified: new Date('2026-03-27'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
