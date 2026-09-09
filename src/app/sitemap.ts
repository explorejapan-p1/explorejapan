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
  'tokushima/kitajima',
  'tokushima/naruto',
  'tokushima/matsushige',
  'tokushima/ishii',
  'tokushima/itano',
  'tokushima/kamiita',
  'tokushima/kamiyama',
  'tokushima/katsuura',
  'tokushima/kamikatsu',
  'tokushima/sanagochi',
  'tokushima/naka',
  'tokushima/mugi',
  'tokushima/minami',
  'tokushima/kaiyo',
  'tokushima/aizumi',
  'tokushima/komatsushima',
  'tokushima/anan',
  'kagawa/takamatsu',
  'kagawa/kotohira',
  'kagawa/marugame',
  'kagawa/kanonji',
  'kagawa/sakaide',
  'kagawa/naoshima',
  'kagawa/shodoshima',
  'kagawa/zentsuji',
  'kagawa/mitoyo',
  'kagawa/utazu',
  'kagawa/tonosho',
  'kagawa/sanuki',
  'kagawa/higashikagawa',
  'kagawa/miki',
  'kagawa/ayagawa',
  'kagawa/tadotsu',
  'kagawa/manno',
  'kochi/kochi',
  'kochi/nankoku',
  'kochi/konan',
  'kochi/kami',
  'kochi/ino',
  'kochi/aki',
  'kochi/muroto',
  'kochi/tosa',
  'kochi/susaki',
  'kochi/shimanto',
  'kochi/tosashimizu',
  'kochi/sukumo',
  'kochi/kuroshio',
  'kochi/toyo',
  'kochi/nahari',
  'kochi/yasuda',
  'kochi/geisei',
  'kochi/kitagawa',
  'kochi/umaji',
  'kochi/motoyama',
  'kochi/otoyo',
  'kochi/tosacho',
  'kochi/okawa',
  'kochi/niyodogawa',
  'kochi/nakatosa',
  'kochi/ochi',
  'kochi/yusuhara',
  'kochi/hidaka',
  'kochi/tsuno',
  'kochi/shimantocho',
  'kochi/otsuki',
  'kochi/mihara',
  'ehime/matsuyama',
  'ehime/imabari',
  'ehime/uwajima',
  'ehime/yawatahama',
  'ehime/niihama',
  'ehime/saijo',
  'ehime/ozu',
  'ehime/iyo'
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', 'tokushima', 'kagawa', 'kochi', 'ehime', ...READY_HUBS, ...liveListings().map((row) => listingRest(row.id, row.slug))];
  const hubSet = new Set<string>(READY_HUBS);
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    for (const rest of paths) {
      entries.push({
        url: canonicalUrl(locale, rest),
        changeFrequency: rest === '' ? 'weekly' : 'monthly',
        priority: rest === '' ? 1 : hubSet.has(rest) ? 0.9 : rest === 'tokushima' || rest === 'kagawa' || rest === 'kochi' || rest === 'ehime' ? 0.85 : 0.7
      });
    }
  }
  return entries;
}
