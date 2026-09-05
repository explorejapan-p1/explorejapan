/**
 * Sanagochi Village sourced facts. Do not invent population.
 * Hall / JIS from village HP (accessed 2026-09-05) and the frozen pack (JIS 36321).
 * Do not mix 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 藍住 / 松茂 / 北島 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const SANAGOCHI = {
  nameJa: '佐那河内村',
  nameEn: 'Sanagochi Village',
  reading: 'さなごうちそん',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'sanagochi',
  jis: '36321',
  jlis: '363219',
  sameAs: 'https://www.vill.sanagochi.lg.jp/',
  hall: {
    postalCode: '771-4195',
    addressJa: '徳島県名東郡佐那河内村下字西ノハナ31番地',
    addressEn: '31 Nishinohana, Shimo, Sanagochi, Myodo District, Tokushima 771-4195, Japan',
    phone: '088-679-2111'
  },
  sources: {
    home: 'https://www.vill.sanagochi.lg.jp/',
    hall: 'https://www.vill.sanagochi.lg.jp/',
    kanko: 'https://www.vill.sanagochi.lg.jp/kankoevent/kanko.html',
    accessed: '2026-09-05'
  }
} as const;

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

function sourcePhoto(
  file: string,
  altJa: string,
  altEn: string,
  page: string,
  author: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons: page,
    license: '出典',
    licenseUrl: page,
    author,
    authorUrl: page,
    taken: '2026',
    accessed: '2026-09-05',
    altJa,
    altEn
  };
}

/** Cover: File:大川原高原_-_panoramio.jpg — 大川原高原. Not 上勝 / 勝浦. */
export const SANAGOCHI_PLACE_PHOTO = wikiPhoto(
  'okawara-kogen-sanagochi.jpg',
  'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%B7%9D%E5%8E%9F%E9%AB%98%E5%8E%9F_-_panoramio.jpg',
  'CC BY 3.0',
  'https://creativecommons.org/licenses/by/3.0/',
  'akiakane',
  'https://www.panoramio.com/user/2285547',
  '2011-11-05',
  '大川原高原からの眺望（佐那河内村）',
  'View from Okawara Highlands, Sanagochi Village'
);

const TABELOG_36005383 = 'https://tabelog.com/tokushima/A3601/A360104/36005383/';
const TABELOG_36007906 = 'https://tabelog.com/tokushima/A3601/A360104/36007906/';
const TABELOG_36009124 = 'https://tabelog.com/tokushima/A3601/A360104/36009124/';
const TABELOG_36008627 = 'https://tabelog.com/tokushima/A3601/A360104/36008627/';
const TABELOG_36007307 = 'https://tabelog.com/tokushima/A3601/A360101/36007307/';
const TABELOG_36005985 = 'https://tabelog.com/tokushima/A3601/A360104/36005985/';
const TABELOG_36007793 = 'https://tabelog.com/tokushima/A3601/A360104/36007793/';
const TABELOG_36003182 = 'https://tabelog.com/tokushima/A3601/A360101/36003182/';
const TABELOG_36008512 = 'https://tabelog.com/tokushima/A3601/A360104/36008512/';
const TABELOG_36000369 = 'https://tabelog.com/tokushima/A3601/A360104/36000369/';
const TABELOG_36007805 = 'https://tabelog.com/tokushima/A3603/A360301/36007805/';
const TABELOG_36003955 = 'https://tabelog.com/tokushima/A3601/A360101/36003955/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const SANAGOCHI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '大川原高原': SANAGOCHI_PLACE_PHOTO,
  '嵯峨峡': wikiPhoto(
    'saga-kyo-sanagochi.jpg',
    'https://commons.wikimedia.org/wiki/File:Saga-kyou.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2019-04-27',
    '嵯峨峡（佐那河内村・嵯峨橋より）',
    'Saga Gorge from Saga Bridge, Sanagochi Village'
  ),
  'しゃくなげ(徳円寺)': wikiPhoto(
    'tokuenji-sanagochi.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokuen-ji.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2019-04-27',
    '徳円寺（佐那河内村・しゃくなげ）',
    'Tokuen-ji Temple, Sanagochi Village'
  ),
  "YOME厨房": sourcePhoto(
    'sanagochi-36005383-dish.jpg',
    "YOME厨房の料理写真",
    "YOME厨房 food photo",
    TABELOG_36005383,
    '食べログ'
  ),
  "佐那河内ジェラート": sourcePhoto(
    'sanagochi-36007906-dish.jpg',
    "佐那河内ジェラートの料理写真",
    "佐那河内ジェラート food photo",
    TABELOG_36007906,
    '食べログ'
  ),
  "大川原高原ヒルトップハウス": sourcePhoto(
    'sanagochi-36009124-dish.jpg',
    "大川原高原ヒルトップハウスの料理写真",
    "大川原高原ヒルトップハウス food photo",
    TABELOG_36009124,
    '食べログ'
  ),
  "Ramus": sourcePhoto(
    'sanagochi-36008627-dish.jpg',
    "Ramusの料理写真",
    "Ramus food photo",
    TABELOG_36008627,
    '食べログ'
  ),
  "ふる里物産直売所": sourcePhoto(
    'sanagochi-36007307-dish.jpg',
    "ふる里物産直売所の料理写真",
    "ふる里物産直売所 food photo",
    TABELOG_36007307,
    '食べログ'
  ),
  "村のおっさん 四代目桑原豆腐店": sourcePhoto(
    'sanagochi-36005985-dish.jpg',
    "村のおっさん 四代目桑原豆腐店の料理写真",
    "村のおっさん 四代目桑原豆腐店 food photo",
    TABELOG_36005985,
    '食べログ'
  ),
  "府能商店": sourcePhoto(
    'sanagochi-36007793-dish.jpg',
    "府能商店の料理写真",
    "府能商店 food photo",
    TABELOG_36007793,
    '食べログ'
  ),
  "嵯峨峡 渡月": sourcePhoto(
    'sanagochi-36003182-dish.jpg',
    "嵯峨峡 渡月の料理写真",
    "嵯峨峡 渡月 food photo",
    TABELOG_36003182,
    '食べログ'
  ),
  "お食事処 ゆいね": sourcePhoto(
    'sanagochi-36008512-dish.jpg',
    "お食事処 ゆいねの料理写真",
    "お食事処 ゆいね food photo",
    TABELOG_36008512,
    '食べログ'
  ),
  "虎屋 壺中庵": sourcePhoto(
    'sanagochi-36000369-dish.jpg',
    "虎屋 壺中庵の料理写真",
    "虎屋 壺中庵 food photo",
    TABELOG_36000369,
    '食べログ'
  ),
  "巻き寿司工房ぜんまる": sourcePhoto(
    'sanagochi-36007805-dish.jpg',
    "巻き寿司工房ぜんまるの料理写真",
    "巻き寿司工房ぜんまる food photo",
    TABELOG_36007805,
    '食べログ'
  ),
  "佐那の里": sourcePhoto(
    'sanagochi-36003955-dish.jpg',
    "佐那の里の料理写真",
    "佐那の里 food photo",
    TABELOG_36003955,
    '食べログ'
  )
};
