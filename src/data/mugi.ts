/**
 * Mugi Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07) and the frozen pack (JIS 36383).
 * Do not mix 那賀 / 佐那河内 / 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 藍住 / 松茂 / 北島 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const MUGI = {
  nameJa: '牟岐町',
  nameEn: 'Mugi Town',
  reading: 'むぎちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'mugi',
  jis: '36383',
  jlis: '363839',
  sameAs: 'https://www.town.tokushima-mugi.lg.jp/',
  hall: {
    postalCode: '775-8570',
    addressJa: '徳島県海部郡牟岐町大字中村字本村7-4',
    addressEn: '7-4 Honmura, Nakamura, Mugi, Kaifu District, Tokushima 775-8570, Japan',
    phone: '0884-72-1111'
  },
  sources: {
    home: 'https://www.town.tokushima-mugi.lg.jp/',
    hall: 'https://www.town.tokushima-mugi.lg.jp/doc/2024122001101/',
    kanko: 'https://www.town.tokushima-mugi.lg.jp/category/bunya/kanko/',
    accessed: '2026-09-07'
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
    accessed: '2026-09-07',
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
    accessed: '2026-09-07',
    altJa,
    altEn
  };
}

/** Cover: File:Morasukomugi20220524_1.jpg — モラスコむぎ. Not 那賀 / 佐那河内. */
export const MUGI_PLACE_PHOTO = wikiPhoto(
  'morasuko-mugi.jpg',
  'https://commons.wikimedia.org/wiki/File:Morasukomugi20220524_1.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Dokudami',
  'https://commons.wikimedia.org/wiki/User:Dokudami',
  '2022-05-24',
  '牟岐町モデル木造施設 モラスコむぎ（牟岐町）',
  'Mollusco Mugi wooden model facility, Mugi Town'
);

const TABELOG_36002586 = 'https://tabelog.com/tokushima/A3602/A360203/36002586/';
const TABELOG_36009060 = 'https://tabelog.com/tokushima/A3602/A360203/36009060/';
const TABELOG_36000984 = 'https://tabelog.com/tokushima/A3602/A360203/36000984/';
const TABELOG_36002810 = 'https://tabelog.com/tokushima/A3602/A360203/36002810/';
const TABELOG_36003486 = 'https://tabelog.com/tokushima/A3602/A360203/36003486/';
const TABELOG_36003189 = 'https://tabelog.com/tokushima/A3602/A360203/36003189/';
const TABELOG_36008574 = 'https://tabelog.com/tokushima/A3602/A360203/36008574/';
const TABELOG_36005075 = 'https://tabelog.com/tokushima/A3602/A360203/36005075/';
const TABELOG_36009012 = 'https://tabelog.com/tokushima/A3602/A360203/36009012/';
const TABELOG_36004908 = 'https://tabelog.com/tokushima/A3602/A360203/36004908/';
const TABELOG_36000367 = 'https://tabelog.com/tokushima/A3602/A360203/36000367/';
const TABELOG_36005952 = 'https://tabelog.com/tokushima/A3602/A360203/36005952/';
const TABELOG_36008858 = 'https://tabelog.com/tokushima/A3602/A360203/36008858/';
const TABELOG_36000084 = 'https://tabelog.com/tokushima/A3602/A360203/36000084/';
const TABELOG_36002819 = 'https://tabelog.com/tokushima/A3602/A360203/36002819/';
const TABELOG_36009054 = 'https://tabelog.com/tokushima/A3602/A360203/36009054/';
const TABELOG_36005954 = 'https://tabelog.com/tokushima/A3602/A360203/36005954/';
const TABELOG_36004648 = 'https://tabelog.com/tokushima/A3602/A360203/36004648/';
const TABELOG_36002037 = 'https://tabelog.com/tokushima/A3602/A360203/36002037/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const MUGI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '牟岐町モデル木造施設 モラスコむぎ': MUGI_PLACE_PHOTO,
  '出羽島伝統的建造物群保存地区': wikiPhoto(
    'tebajima-mugi.jpg',
    'https://commons.wikimedia.org/wiki/File:Tebajima_1.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'Bakkai',
    'https://ja.wikipedia.org/wiki/User:Bakkai',
    '2008',
    '出羽島（牟岐町）',
    'Tebajima island, Mugi Town'
  ),
  '松坂隧道': wikiPhoto(
    'matsuzaka-zuidou-mugi.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%9D%BE%E5%9D%82%E9%9A%A7%E9%81%93%EF%BC%88%E7%99%BB%E9%8C%B2%E6%9C%89%E5%BD%A2%E6%96%87%E5%8C%96%E8%B2%A1%EF%BC%89_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'akiakane',
    'https://www.panoramio.com/user/2285547',
    '2011',
    '松坂隧道（牟岐町）',
    'Matsuzaka Tunnel, Mugi Town'
  ),
  '出羽島港口の東西の大波止の石積み': wikiPhoto(
    'mugi-tebajima-2.jpg',
    'https://commons.wikimedia.org/wiki/File:Tebajima_2.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'Bakkai',
    'https://commons.wikimedia.org/wiki/User:Bakkai',
    '2009-12-19',
    '出羽島の港と石積み（牟岐町）',
    'Tebajima harbor stone quay, Mugi'
  ),

  "つくしお好焼店": sourcePhoto(
    'mugi-36002586-dish.jpg',
    "つくしお好焼店の料理写真",
    "つくしお好焼店 food photo",
    TABELOG_36002586,
    '食べログ'
  ),
  "牟岐朝日食堂": sourcePhoto(
    'mugi-36009060-dish.jpg',
    "牟岐朝日食堂の料理写真",
    "牟岐朝日食堂 food photo",
    TABELOG_36009060,
    '食べログ'
  ),
  "揚子江": sourcePhoto(
    'mugi-36000984-dish.jpg',
    "揚子江の料理写真",
    "揚子江 food photo",
    TABELOG_36000984,
    '食べログ'
  ),
  "亜梨巣": sourcePhoto(
    'mugi-36002810-dish.jpg',
    "亜梨巣の料理写真",
    "亜梨巣 food photo",
    TABELOG_36002810,
    '食べログ'
  ),
  "WADA": sourcePhoto(
    'mugi-36003486-dish.jpg',
    "WADAの料理写真",
    "WADA food photo",
    TABELOG_36003486,
    '食べログ'
  ),
  "しらきや": sourcePhoto(
    'mugi-36003189-dish.jpg',
    "しらきやの料理写真",
    "しらきや food photo",
    TABELOG_36003189,
    '食べログ'
  ),
  "徳島スモーク": sourcePhoto(
    'mugi-36008574-dish.jpg',
    "徳島スモークの料理写真",
    "徳島スモーク food photo",
    TABELOG_36008574,
    '食べログ'
  ),
  "牟岐５５ラーメン": sourcePhoto(
    'mugi-36005075-dish.jpg',
    "牟岐５５ラーメンの料理写真",
    "牟岐５５ラーメン food photo",
    TABELOG_36005075,
    '食べログ'
  ),
  "魚秀やかた": sourcePhoto(
    'mugi-36009012-dish.jpg',
    "魚秀やかたの料理写真",
    "魚秀やかた food photo",
    TABELOG_36009012,
    '食べログ'
  ),
  "ほどほど": sourcePhoto(
    'mugi-36004908-dish.jpg',
    "ほどほどの料理写真",
    "ほどほど food photo",
    TABELOG_36004908,
    '食べログ'
  ),
  "家形船": sourcePhoto(
    'mugi-36000367-dish.jpg',
    "家形船の料理写真",
    "家形船 food photo",
    TABELOG_36000367,
    '食べログ'
  ),
  "HORAI 牟岐店": sourcePhoto(
    'mugi-36005952-dish.jpg',
    "HORAI 牟岐店の料理写真",
    "HORAI 牟岐店 food photo",
    TABELOG_36005952,
    '食べログ'
  ),
  "ねんねこ": sourcePhoto(
    'mugi-36008858-dish.jpg',
    "ねんねこの料理写真",
    "ねんねこ food photo",
    TABELOG_36008858,
    '食べログ'
  ),
  "フルール": sourcePhoto(
    'mugi-36000084-dish.jpg',
    "フルールの料理写真",
    "フルール food photo",
    TABELOG_36000084,
    '食べログ'
  ),
  "貴美": sourcePhoto(
    'mugi-36002819-dish.jpg',
    "貴美の料理写真",
    "貴美 food photo",
    TABELOG_36002819,
    '食べログ'
  ),
  "海賊茶屋": sourcePhoto(
    'mugi-36009054-dish.jpg',
    "海賊茶屋の料理写真",
    "海賊茶屋 food photo",
    TABELOG_36009054,
    '食べログ'
  ),
  "ふくまつ": sourcePhoto(
    'mugi-36005954-dish.jpg',
    "ふくまつの料理写真",
    "ふくまつ food photo",
    TABELOG_36005954,
    '食べログ'
  ),
  "ポケット": sourcePhoto(
    'mugi-36004648-dish.jpg',
    "ポケットの料理写真",
    "ポケット food photo",
    TABELOG_36004648,
    '食べログ'
  ),
  "ブー": sourcePhoto(
    'mugi-36002037-dish.jpg',
    "ブーの料理写真",
    "ブー food photo",
    TABELOG_36002037,
    '食べログ'
  ),
  '砂美かたやま': sourcePhoto(
    'mugi-stay-01.jpg',
    '砂美かたやまの客室・外観写真',
    '砂美かたやま room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/164686/164686.html',
    '楽天トラベル'
  ),
  'Casa TEBA': sourcePhoto(
    'mugi-stay-02.jpg',
    'Casa TEBAの客室・外観写真',
    'Casa TEBA room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/195745/195745.html',
    '楽天トラベル'
  ),

};
