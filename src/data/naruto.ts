/**
 * Naruto City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-05). JIS 36202. Not 徳島市 / 北島 / 松茂 / 藍住.
 * Scaffold: photo-only tourism hub. Empty dining. No frozen pack.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const NARUTO = {
  nameJa: '鳴門市',
  nameEn: 'Naruto City',
  reading: 'なるとし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'naruto',
  jis: '36202',
  jlis: '362026',
  sameAs: 'https://www.city.naruto.tokushima.jp/',
  hall: {
    postalCode: '772-8501',
    addressJa: '徳島県鳴門市撫養町南浜字東浜170番地',
    addressEn: '170 Higashi-hama, Minamihama, Muya-cho, Naruto, Tokushima 772-8501, Japan',
    phone: '088-684-1111'
  },
  sources: {
    home: 'https://www.city.naruto.tokushima.jp/',
    hall: 'https://www.city.naruto.tokushima.jp/docs/2025090900052/',
    kanko: 'https://www.city.naruto.tokushima.jp/category/bunya/kanko/',
    tourism: 'https://naruto-tourism.jp/',
    uzushio: 'https://uzushio-guruguru.com/',
    uzunomichi: 'https://www.uzunomichi.jp/',
    accessed: '2026-09-05'
  }
} as const;

export const NARUTO_EXPECTED_ROW_COUNT = 1;
export const NARUTO_EXPECTED_GEO_COUNT = 1;

function wikiPhoto(
  file: string,
  commons: string,
  license: string,
  licenseUrl: string,
  author: string,
  authorUrl: string,
  taken: string,
  altJa: string,
  altEn: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons,
    license,
    licenseUrl,
    author,
    authorUrl,
    taken,
    accessed: '2026-09-05',
    altJa,
    altEn
  };
}

/** Cover: File:Naruto Whirlpools from the Uzunomichi.jpg — 鳴門の渦潮（渦の道から）. Not Bizan / Oboke / 土柱 / Kitajima tulips. */
export const NARUTO_PLACE_PHOTO = wikiPhoto(
  'naruto-whirlpools-uzunomichi.jpg',
  'https://commons.wikimedia.org/wiki/File:Naruto_Whirlpools_from_the_Uzunomichi.jpg',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0',
  'Kounosu',
  'https://commons.wikimedia.org/wiki/User:Kounosu',
  '2010-08-11',
  '渦の道から見た鳴門の渦潮（鳴門市）',
  'Naruto whirlpools from Uzunomichi, Naruto City'
);

/** Exact travel/sight name_ja only. Empty dining photos for scaffold. No 徳島市 / 北島 / 松茂 photos. */
export const NARUTO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '鳴門の渦潮': NARUTO_PLACE_PHOTO,
  '渦の道': NARUTO_PLACE_PHOTO
};

function sight(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string,
  lat: number,
  lon: number
): FacilityRow {
  return {
    id,
    jis: NARUTO.jis,
    name_ja,
    reading: null,
    category: 'tourism',
    lat,
    lon,
    address,
    phone,
    official_url: source_url,
    hours: null,
    source_url,
    license: '市公式サイト掲載情報',
    accessed: NARUTO.sources.accessed
  };
}

/** Scaffold: one tourism row with cover photo. No frozen jsonl. Wikipedia coords. */
export const NARUTO_FACILITIES: readonly FacilityRow[] = [
  sight(
    'naruto-sight-01',
    '鳴門の渦潮',
    '徳島県鳴門市鳴門町土佐泊浦',
    null,
    NARUTO.sources.uzushio,
    34.23833333,
    134.65138889
  )
];
