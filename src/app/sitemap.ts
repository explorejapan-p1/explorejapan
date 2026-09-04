import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';
import {liveListings, listingRest} from '@/lib/listings';
import {canonicalUrl} from '@/lib/seo';

export const dynamic = 'force-static';

/** Ready municipality hubs (美馬・つるぎ・吉野川・三好・徳島市). */
const READY_HUBS = [
  'tokushima/tokushima',
  'tokushima/mima',
  'tokushima/tsurugi',
  'tokushima/yoshinogawa',
  'tokushima/miyoshi',
  'tokushima/awa',
  'tokushima/higashimiyoshi',
  'tokushima/kitajima'
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', 'tokushima', ...READY_HUBS, ...liveListings().map((row) => listingRest(row.id, row.slug))];
  const hubSet = new Set<string>(READY_HUBS);
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    for (const rest of paths) {
      entries.push({
        url: canonicalUrl(locale, rest),
        changeFrequency: rest === '' ? 'weekly' : 'monthly',
        priority: rest === '' ? 1 : hubSet.has(rest) ? 0.9 : rest === 'tokushima' ? 0.85 : 0.7
      });
    }
  }
  return entries;
}
