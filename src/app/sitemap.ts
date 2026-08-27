import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';
import {liveListings, listingRest} from '@/lib/listings';
import {canonicalUrl} from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', 'tokushima', 'tokushima/mima', ...liveListings().map((row) => listingRest(row.id))];
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    for (const rest of paths) {
      entries.push({
        url: canonicalUrl(locale, rest),
        changeFrequency: rest === '' ? 'weekly' : 'monthly',
        priority: rest === '' ? 1 : rest === 'tokushima/mima' ? 0.9 : 0.7
      });
    }
  }
  return entries;
}
