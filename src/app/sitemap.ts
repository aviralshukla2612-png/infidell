import { MetadataRoute } from 'next';
import { verifiedJobs } from '@/data/jobs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://infidelltech.com';
  const locales = ['en'];
  const routes = [
    '',
    '/about',
    '/jobs',
    '/employers',
    '/services',
    '/refer-earn',
    '/success-stories',
    '/contact',
    '/login',
    '/register/candidate',
    '/register/employer',
    '/privacy',
    '/terms'
  ];

  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/jobs' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route === '/jobs' || route === '/employers' ? 0.9 : 0.7
      });
    });

    // Add individual jobs
    verifiedJobs.forEach((job) => {
      entries.push({
        url: `${baseUrl}/${locale}/jobs/${job.id}`,
        lastModified: new Date(job.postedDate),
        changeFrequency: 'weekly',
        priority: 0.8
      });
    });
  });

  return entries;
}

