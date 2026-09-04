/**
 * Ishii Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36341).
 * Do not mix 松茂 (36401) / 北島 (36402) / 藍住 (36403) / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const ISHII = {
  nameJa: '石井町',
  nameEn: 'Ishii Town',
  reading: 'いしいちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'ishii',
  jis: '36341',
  jlis: '363413',
  sameAs: 'https://www.town.ishii.lg.jp/',
  hall: {
    postalCode: '779-3295',
    addressJa: '徳島県名西郡石井町高川原字高川原121-1',
    addressEn: '121-1 Takagawara, Takagawara, Ishii, Myozai District, Tokushima 779-3295, Japan',
    phone: '088-674-1111'
  },
  sources: {
    home: 'https://www.town.ishii.lg.jp/',
    hall: 'https://www.town.ishii.lg.jp/docs/2018110500219/',
    kanko: 'https://www.town.ishii.lg.jp/navi/kanko/',
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

/** Cover: File:Yoshinogawa Daijuzeki.jpg — 吉野川第十堰. Not Naruto / 月見ヶ丘 / 土柱. */
export const ISHII_PLACE_PHOTO = wikiPhoto(
  'yoshinogawa-daijuzeki.jpg',
  'https://commons.wikimedia.org/wiki/File:Yoshinogawa_Daijuzeki.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Tamago915',
  'https://commons.wikimedia.org/wiki/User:Tamago915',
  '2005-05-03',
  '吉野川第十堰（石井町）',
  'Yoshino River Daiju Weir, Ishii Town'
);

const TABELOG_36001237 = 'https://tabelog.com/tokushima/A3601/A360101/36001237/';
const TABELOG_36004405 = 'https://tabelog.com/tokushima/A3603/A360303/36004405/';
const TABELOG_36001390 = 'https://tabelog.com/tokushima/A3603/A360303/36001390/';
const TABELOG_36006797 = 'https://tabelog.com/tokushima/A3603/A360303/36006797/';
const TABELOG_36000184 = 'https://tabelog.com/tokushima/A3603/A360303/36000184/';
const TABELOG_36007455 = 'https://tabelog.com/tokushima/A3603/A360303/36007455/';
const TABELOG_36007056 = 'https://tabelog.com/tokushima/A3603/A360303/36007056/';
const TABELOG_36004796 = 'https://tabelog.com/tokushima/A3603/A360303/36004796/';
const TABELOG_36003060 = 'https://tabelog.com/tokushima/A3603/A360303/36003060/';
const TABELOG_36008215 = 'https://tabelog.com/tokushima/A3603/A360303/36008215/';
const TABELOG_36007122 = 'https://tabelog.com/tokushima/A3603/A360303/36007122/';
const TABELOG_36000048 = 'https://tabelog.com/tokushima/A3603/A360303/36000048/';
const TABELOG_36001504 = 'https://tabelog.com/tokushima/A3603/A360303/36001504/';
const TABELOG_36003239 = 'https://tabelog.com/tokushima/A3603/A360301/36003239/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const ISHII_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '吉野川第十堰': ISHII_PLACE_PHOTO,
  '前山公園': wikiPhoto(
    'maeyama-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Maeyama_Park1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Sorrysorry',
    'https://ja.wikipedia.org/wiki/User:Sorrysorry',
    '2008-02-15',
    '前山公園（石井町）',
    'Maeyama Park, Ishii Town'
  ),
  '野鳥の森': wikiPhoto(
    'yacho-no-mori.jpg',
    'https://commons.wikimedia.org/wiki/File:Yacho-no-mori.jpeg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Sorrysorry',
    'https://ja.wikipedia.org/wiki/User:Sorrysorry',
    '2021-03-20',
    '野鳥の森（石井町）',
    'Yacho-no-mori bird forest, Ishii Town'
  ),
  '地福寺の藤': wikiPhoto(
    'jifuku-ji-fuji.jpg',
    'https://commons.wikimedia.org/wiki/File:Jifuku-ji2.jpeg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Sorrysorry',
    'https://ja.wikipedia.org/wiki/User:Sorrysorry',
    '2019-04-22',
    '地福寺の藤（石井町）',
    'Wisteria at Jifuku-ji, Ishii Town'
  ),
  '十三八': sourcePhoto(
    'ishii-36001237-dish.jpg',
    '十三八の料理写真',
    '十三八 food photo',
    TABELOG_36001237,
    '食べログ'
  ),
  '源喜亭': sourcePhoto(
    'ishii-36004405-dish.jpg',
    '源喜亭の料理写真',
    '源喜亭 food photo',
    TABELOG_36004405,
    '食べログ'
  ),
  '福助': sourcePhoto(
    'ishii-36001390-dish.jpg',
    '福助の料理写真',
    '福助 food photo',
    TABELOG_36001390,
    '食べログ'
  ),
  'うどんのふじい': sourcePhoto(
    'ishii-36006797-dish.jpg',
    'うどんのふじいの料理写真',
    'うどんのふじい food photo',
    TABELOG_36006797,
    '食べログ'
  ),
  '直心庵': sourcePhoto(
    'ishii-36000184-dish.jpg',
    '直心庵の料理写真',
    '直心庵 food photo',
    TABELOG_36000184,
    '食べログ'
  ),
  '手打ちそば まこ': sourcePhoto(
    'ishii-36007455-dish.jpg',
    '手打ちそば まこの料理写真',
    '手打ちそば まこ food photo',
    TABELOG_36007455,
    '食べログ'
  ),
  'そば米居酒屋 雫': sourcePhoto(
    'ishii-36007056-dish.jpg',
    'そば米居酒屋 雫の料理写真',
    'そば米居酒屋 雫 food photo',
    TABELOG_36007056,
    '食べログ'
  ),
  'ナッシュカリーアメリカン 徳島本店': sourcePhoto(
    'ishii-36004796-dish.jpg',
    'ナッシュカリーアメリカン 徳島本店の料理写真',
    'ナッシュカリーアメリカン 徳島本店 food photo',
    TABELOG_36004796,
    '食べログ'
  ),
  '黄琳': sourcePhoto(
    'ishii-36003060-dish.jpg',
    '黄琳の料理写真',
    '黄琳 food photo',
    TABELOG_36003060,
    '食べログ'
  ),
  '中華そば 猪虎 石井店': sourcePhoto(
    'ishii-36008215-dish.jpg',
    '中華そば 猪虎 石井店の料理写真',
    '中華そば 猪虎 石井店 food photo',
    TABELOG_36008215,
    '食べログ'
  ),
  'シェコレット': sourcePhoto(
    'ishii-36007122-dish.jpg',
    'シェコレットの料理写真',
    'シェコレット food photo',
    TABELOG_36007122,
    '食べログ'
  ),
  'たらいうどん 山のせ 石井店': sourcePhoto(
    'ishii-36000048-dish.jpg',
    'たらいうどん 山のせ 石井店の料理写真',
    'たらいうどん 山のせ 石井店 food photo',
    TABELOG_36000048,
    '食べログ'
  ),
  '出多寿司': sourcePhoto(
    'ishii-36001504-dish.jpg',
    '出多寿司の料理写真',
    '出多寿司 food photo',
    TABELOG_36001504,
    '食べログ'
  ),
  '中華そば もりしょう': sourcePhoto(
    'ishii-36003239-dish.jpg',
    '中華そば もりしょうの料理写真',
    '中華そば もりしょう food photo',
    TABELOG_36003239,
    '食べログ'
  ),
};
