/**
 * Kamiyama Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36342).
 * Do not mix 上板 / 板野 / 石井 / 藍住 / 松茂 / 北島 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const KAMIYAMA = {
  nameJa: '神山町',
  nameEn: 'Kamiyama Town',
  reading: 'かみやまちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'kamiyama',
  jis: '36342',
  jlis: '363421',
  sameAs: 'https://www.town.kamiyama.lg.jp/',
  hall: {
    postalCode: '771-3395',
    addressJa: '徳島県名西郡神山町神領字本野間100',
    addressEn: '100 Motonoma, Jinryo, Kamiyama, Myozai District, Tokushima 771-3395, Japan',
    phone: '088-676-1111'
  },
  sources: {
    home: 'https://www.town.kamiyama.lg.jp/',
    hall: 'https://www.town.kamiyama.lg.jp/docs/2025061900079/',
    kanko: 'https://www.town.kamiyama.lg.jp/enjoy/map/index_genre@kanko.html',
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

/** Cover: File:Shozanji_01.JPG — 焼山寺【四国霊場12番札所】. Not 上板 / 板野 / 石井 / 藍住. */
export const KAMIYAMA_PLACE_PHOTO = wikiPhoto(
  'shozanji-kamiyama.jpg',
  'https://commons.wikimedia.org/wiki/File:Shozanji_01.JPG',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0/',
  'Reggaeman',
  'https://commons.wikimedia.org/wiki/User:Reggaeman',
  '2009-05-04',
  '焼山寺入口（神山町・四国霊場第十二番）',
  'Shōsan-ji entrance, Shikoku pilgrimage temple 12, Kamiyama Town'
);

const TABELOG_36003919 = 'https://tabelog.com/tokushima/A3603/A360301/36003919/';
const TABELOG_36007305 = 'https://tabelog.com/tokushima/A3603/A360301/36007305/';
const TABELOG_36007412 = 'https://tabelog.com/tokushima/A3603/A360301/36007412/';
const TABELOG_36004022 = 'https://tabelog.com/tokushima/A3603/A360301/36004022/';
const TABELOG_36007347 = 'https://tabelog.com/tokushima/A3603/A360301/36007347/';
const TABELOG_36004888 = 'https://tabelog.com/tokushima/A3603/A360301/36004888/';
const TABELOG_36003956 = 'https://tabelog.com/tokushima/A3603/A360301/36003956/';
const TABELOG_36006591 = 'https://tabelog.com/tokushima/A3601/A360104/36006591/';
const TABELOG_36003790 = 'https://tabelog.com/tokushima/A3603/A360301/36003790/';
const TABELOG_36006009 = 'https://tabelog.com/tokushima/A3603/A360301/36006009/';
const TABELOG_36008036 = 'https://tabelog.com/tokushima/A3603/A360301/36008036/';
const TABELOG_36004254 = 'https://tabelog.com/tokushima/A3603/A360301/36004254/';
const TABELOG_36003889 = 'https://tabelog.com/tokushima/A3603/A360301/36003889/';
const TABELOG_36003485 = 'https://tabelog.com/tokushima/A3603/A360301/36003485/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const KAMIYAMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '焼山寺【四国霊場12番札所】': KAMIYAMA_PLACE_PHOTO,
  '雨乞の滝（あまごいのたき）': wikiPhoto(
    'amagoi-falls-kamiyama.jpg',
    'https://commons.wikimedia.org/wiki/File:AmagoiOdaki.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '1999-08-12',
    '雨乞の滝・雄滝（神山町）',
    'Amagoi Falls (Odaki), Kamiyama Town'
  ),
  '上一之宮大粟神社': wikiPhoto(
    'oawa-jinja-kamiyama.jpg',
    'https://commons.wikimedia.org/wiki/File:Kamiichinomiya_Oawa_Jinja_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-05-04',
    '上一之宮大粟神社一の鳥居（神山町）',
    'First torii, Kamiichinomiya Ōawa-jinja, Kamiyama Town'
  ),
  '悲願寺（ひがんじ）': wikiPhoto(
    'higanji-kamiyama.jpg',
    'https://commons.wikimedia.org/wiki/File:Kamiyama_Higanji.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Hotaru2022',
    'https://commons.wikimedia.org/wiki/User:Hotaru2022',
    '2023-10-23',
    '悲願寺（神山町）',
    'Higan-ji temple, Kamiyama Town'
  ),
  '徳島県立 神山森林公園 イルローザの森': wikiPhoto(
    'kamiyama-forest-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Kamiyama_sinrinkouen.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2022-11-15',
    '徳島県立神山森林公園',
    'Tokushima Prefectural Kamiyama Forest Park'
  ),
  '神光寺（じんこうじ）のぼり藤': wikiPhoto(
    'jinkoji-kamiyama.jpg',
    'https://commons.wikimedia.org/wiki/File:Jinko-ji.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2019-04-25',
    '神光寺（神山町鬼籠野）',
    'Jinkō-ji temple, Kamiyama Town'
  ),
  "粟カフェ": sourcePhoto(
    'kamiyama-36003919-dish.jpg',
    "粟カフェの料理写真",
    "粟カフェ food photo",
    TABELOG_36003919,
    '食べログ'
  ),
  "神山のラーメン居酒屋どちらいか": sourcePhoto(
    'kamiyama-36007305-dish.jpg',
    "神山のラーメン居酒屋どちらいかの料理写真",
    "神山のラーメン居酒屋どちらいか food photo",
    TABELOG_36007305,
    '食べログ'
  ),
  "旬彩茶屋": sourcePhoto(
    'kamiyama-36007412-dish.jpg',
    "旬彩茶屋の料理写真",
    "旬彩茶屋 food photo",
    TABELOG_36007412,
    '食べログ'
  ),
  "観月茶屋": sourcePhoto(
    'kamiyama-36004022-dish.jpg',
    "観月茶屋の料理写真",
    "観月茶屋 food photo",
    TABELOG_36004022,
    '食べログ'
  ),
  "めし処萬や山びこ": sourcePhoto(
    'kamiyama-36007347-dish.jpg',
    "めし処萬や山びこの料理写真",
    "めし処萬や山びこ food photo",
    TABELOG_36007347,
    '食べログ'
  ),
  "焼肉 梅里": sourcePhoto(
    'kamiyama-36004888-dish.jpg',
    "焼肉 梅里の料理写真",
    "焼肉 梅里 food photo",
    TABELOG_36004888,
    '食べログ'
  ),
  "お食事処　ふなと": sourcePhoto(
    'kamiyama-36003956-dish.jpg',
    "お食事処　ふなとの料理写真",
    "お食事処　ふなと food photo",
    TABELOG_36003956,
    '食べログ'
  ),
  "かま屋": sourcePhoto(
    'kamiyama-36006591-dish.jpg',
    "かま屋の料理写真",
    "かま屋 food photo",
    TABELOG_36006591,
    '食べログ'
  ),
  "茶房松葉庵": sourcePhoto(
    'kamiyama-36003790-dish.jpg',
    "茶房松葉庵の料理写真",
    "茶房松葉庵 food photo",
    TABELOG_36003790,
    '食べログ'
  ),
  "マスの家": sourcePhoto(
    'kamiyama-36006009-dish.jpg',
    "マスの家の料理写真",
    "マスの家 food photo",
    TABELOG_36006009,
    '食べログ'
  ),
  "てくてく栗生野": sourcePhoto(
    'kamiyama-36008036-dish.jpg',
    "てくてく栗生野の料理写真",
    "てくてく栗生野 food photo",
    TABELOG_36008036,
    '食べログ'
  ),
  "レストラン かわせみ": sourcePhoto(
    'kamiyama-36004254-dish.jpg',
    "レストラン かわせみの料理写真",
    "レストラン かわせみ food photo",
    TABELOG_36004254,
    '食べログ'
  ),
  "秀乃家　料理仕出し": sourcePhoto(
    'kamiyama-36003889-dish.jpg',
    "秀乃家　料理仕出しの料理写真",
    "秀乃家　料理仕出し food photo",
    TABELOG_36003889,
    '食べログ'
  ),
  "あけぼの堂": sourcePhoto(
    'kamiyama-36003485-dish.jpg',
    "あけぼの堂の料理写真",
    "あけぼの堂 food photo",
    TABELOG_36003485,
    '食べログ'
  )
};
