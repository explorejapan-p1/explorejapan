/**
 * Kitajima Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36402).
 * Do not mix 松茂 (36401) / 藍住 (36403) / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const KITAJIMA = {
  nameJa: '北島町',
  nameEn: 'Kitajima Town',
  reading: 'きたじまちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'kitajima',
  jis: '36402',
  jlis: '364029',
  sameAs: 'https://www.town.kitajima.lg.jp/',
  hall: {
    postalCode: '771-0285',
    addressJa: '徳島県板野郡北島町中村字上地23-1',
    addressEn: '23-1 Kamiichi, Nakamura, Kitajima, Itano District, Tokushima 771-0285, Japan',
    phone: '088-698-9801'
  },
  sources: {
    home: 'https://www.town.kitajima.lg.jp/',
    hall: 'https://www.town.kitajima.lg.jp/institution/shisetsu/shisetsu1/',
    kanko: 'https://www.town.kitajima.lg.jp/docs/61.html',
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

/** Cover: File:Kitajima Tulip Park 01.jpg — 北島チューリップ公園. Not Naruto whirlpools / 土柱 / 大クス / Oboke. */
export const KITAJIMA_PLACE_PHOTO = wikiPhoto(
  'kitajima-tulip-park.jpg',
  'https://commons.wikimedia.org/wiki/File:Kitajima_Tulip_Park_01.jpg',
  'CC BY 2.1 JP',
  'https://creativecommons.org/licenses/by/2.1/jp/deed.en',
  'タクドラの金太郎',
  'https://commons.wikimedia.org/wiki/File:Kitajima_Tulip_Park_01.jpg',
  '2009-04-08',
  '北島チューリップ公園（北島町）',
  'Kitajima Tulip Park, Kitajima Town'
);

const TABELOG_ABURIYA = 'https://tabelog.com/tokushima/A3601/A360101/36008413/';
const TABELOG_IKKOU = 'https://tabelog.com/tokushima/A3601/A360101/36008250/';
const TABELOG_FUKUROU = 'https://tabelog.com/tokushima/A3601/A360101/36008569/';
const TABELOG_TAMI = 'https://tabelog.com/tokushima/A3603/A360303/36006745/';
const TABELOG_QUEEN = 'https://tabelog.com/tokushima/A3601/A360102/36007872/';
const TABELOG_YANO = 'https://tabelog.com/tokushima/A3601/A360101/36008209/';
const TABELOG_MAKAPUU = 'https://tabelog.com/tokushima/A3601/A360101/36007808/';
const TABELOG_AU = 'https://tabelog.com/tokushima/A3601/A360102/36000858/';
const TABELOG_GUTE = 'https://tabelog.com/tokushima/A3601/A360102/36007416/';
const TABELOG_SAWA = 'https://tabelog.com/tokushima/A3601/A360101/36006174/';
const TABELOG_EBISU = 'https://tabelog.com/tokushima/A3601/A360102/36009453/';
const TABELOG_MARCO = 'https://tabelog.com/tokushima/A3603/A360303/36008665/';
const TABELOG_CARINA = 'https://tabelog.com/tokushima/A3601/A360101/36005424/';
const TABELOG_IKEHIRO = 'https://tabelog.com/tokushima/A3601/A360101/36007647/';

/** Exact pack/travel name_ja only. No 松茂 / 藍住 / 鳴門 / 徳島市 photos. */
export const KITAJIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '北島チューリップ公園': KITAJIMA_PLACE_PHOTO,
  '焼肉レストラン 炙家bis  北島店': sourcePhoto(
    'aburiya-bis-kitajima-dish.jpg',
    '焼肉レストラン 炙家bis 北島店の料理写真',
    'Aburiya bis Kitajima food photo',
    TABELOG_ABURIYA,
    '食べログ'
  ),
  '一鴻 北島店': sourcePhoto(
    'ikkou-kitajima-dish.jpg',
    '一鴻 北島店の料理写真',
    'Ikkou Kitajima food photo',
    TABELOG_IKKOU,
    '食べログ'
  ),
  '焼肉 福朗': sourcePhoto(
    'yakiniku-fukurou-dish.jpg',
    '焼肉 福朗の料理写真',
    'Yakiniku Fukurou food photo',
    TABELOG_FUKUROU,
    '食べログ'
  ),
  'くるくる炭火焼き 民': sourcePhoto(
    'kurukuru-sumibi-tami-dish.jpg',
    'くるくる炭火焼き 民の料理写真',
    'Kurukuru Sumibi-yaki Tami food photo',
    TABELOG_TAMI,
    '食べログ'
  ),
  "クラフトビールと肉が旨いカフェ Queen of Meat's": sourcePhoto(
    'queen-of-meats-dish.jpg',
    "クラフトビールと肉が旨いカフェ Queen of Meat'sの料理写真",
    "Queen of Meat's food photo",
    TABELOG_QUEEN,
    '食べログ'
  ),
  'フレッシュベーカリー 矢野': sourcePhoto(
    'fresh-bakery-yano-dish.jpg',
    'フレッシュベーカリー 矢野の料理写真',
    'Fresh Bakery Yano food photo',
    TABELOG_YANO,
    '食べログ'
  ),
  "makapu'u CAFE": sourcePhoto(
    'makapuu-cafe-dish.jpg',
    "makapu'u CAFEの料理写真",
    "makapu'u CAFE food photo",
    TABELOG_MAKAPUU,
    '食べログ'
  ),
  'パティスリー　オゥ・ポワヴル': sourcePhoto(
    'au-poivre-dish.jpg',
    'パティスリー オゥ・ポワヴルの料理写真',
    'Pâtisserie Au Poivre food photo',
    TABELOG_AU,
    '食べログ'
  ),
  'グテ': sourcePhoto(
    'gute-dish.jpg',
    'グテの料理写真',
    'Gute food photo',
    TABELOG_GUTE,
    '食べログ'
  ),
  '麺喰屋 澤 徳島店': sourcePhoto(
    'menkuiya-sawa-dish.jpg',
    '麺喰屋 澤 徳島店の料理写真',
    'Menkuiya Sawa food photo',
    TABELOG_SAWA,
    '食べログ'
  ),
  'ゑびす寿司': sourcePhoto(
    'ebisu-zushi-dish.jpg',
    'ゑびす寿司の料理写真',
    'Ebisu-zushi food photo',
    TABELOG_EBISU,
    '食べログ'
  ),
  'たこやき マルコ': sourcePhoto(
    'takoyaki-marco-dish.jpg',
    'たこやき マルコの料理写真',
    'Takoyaki Marco food photo',
    TABELOG_MARCO,
    '食べログ'
  ),
  'カリーナ': sourcePhoto(
    'carina-dish.jpg',
    'カリーナの料理写真',
    'Carina food photo',
    TABELOG_CARINA,
    '食べログ'
  ),
  'ハンバーグダイニング イケヒロ': sourcePhoto(
    'ikehiro-dish.jpg',
    'ハンバーグダイニング イケヒロの料理写真',
    'Hamburg Dining Ikehiro food photo',
    TABELOG_IKEHIRO,
    '食べログ'
  )
};
