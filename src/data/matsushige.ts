/**
 * Matsushige Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36401).
 * Do not mix 北島 (36402) / 藍住 (36403) / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const MATSUSHIGE = {
  nameJa: '松茂町',
  nameEn: 'Matsushige Town',
  reading: 'まつしげちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'matsushige',
  jis: '36401',
  jlis: '364011',
  sameAs: 'https://www.town.matsushige.tokushima.jp/',
  hall: {
    postalCode: '771-0295',
    addressJa: '徳島県板野郡松茂町広島字東裏30番地',
    addressEn: '30 Higashiura, Hiroshima, Matsushige, Itano District, Tokushima 771-0295, Japan',
    phone: '088-699-2111'
  },
  sources: {
    home: 'https://www.town.matsushige.tokushima.jp/',
    hall: 'https://www.town.matsushige.tokushima.jp/docs/2015111800591/',
    kanko: 'https://www.town.matsushige.tokushima.jp/category/bunya/kanko_sangyo_rodo/kanko_shisetsu/',
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

/** Cover: File:Tsukimigaoka-Kaihin-Koen.jpg — 月見ヶ丘海浜公園 / 月見ヶ丘海水浴場. Not Naruto whirlpools / Kitajima / Bizan. */
export const MATSUSHIGE_PLACE_PHOTO = wikiPhoto(
  'tsukimigaoka-kaihin-koen.jpg',
  'https://commons.wikimedia.org/wiki/File:Tsukimigaoka-Kaihin-Koen.jpg',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0/',
  'Tamago915',
  'https://commons.wikimedia.org/wiki/User:Tamago915',
  '2008-10-13',
  '月見ヶ丘海浜公園・海水浴場（松茂町）',
  'Tsukimigaoka seaside park and beach, Matsushige Town'
);

const TABELOG_36005033 = 'https://tabelog.com/tokushima/A3601/A360102/36005033/';
const TABELOG_36003504 = 'https://tabelog.com/tokushima/A3601/A360102/36003504/';
const TABELOG_36003792 = 'https://tabelog.com/tokushima/A3601/A360102/36003792/';
const TABELOG_36006716 = 'https://tabelog.com/tokushima/A3601/A360102/36006716/';
const TABELOG_36007034 = 'https://tabelog.com/tokushima/A3601/A360102/36007034/';
const TABELOG_36000295 = 'https://tabelog.com/tokushima/A3601/A360102/36000295/';
const TABELOG_36000548 = 'https://tabelog.com/tokushima/A3601/A360102/36000548/';
const TABELOG_36007008 = 'https://tabelog.com/tokushima/A3601/A360102/36007008/';
const TABELOG_36000358 = 'https://tabelog.com/tokushima/A3601/A360102/36000358/';
const TABELOG_36004234 = 'https://tabelog.com/tokushima/A3601/A360102/36004234/';
const TABELOG_36000051 = 'https://tabelog.com/tokushima/A3601/A360102/36000051/';
const TABELOG_36004146 = 'https://tabelog.com/tokushima/A3601/A360102/36004146/';
const TABELOG_36007639 = 'https://tabelog.com/tokushima/A3601/A360102/36007639/';
const TABELOG_36003575 = 'https://tabelog.com/tokushima/A3601/A360102/36003575/';

/** Exact pack/travel name_ja only. No 北島 / 藍住 / 鳴門 / 徳島市 photos. */
export const MATSUSHIGE_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '月見ヶ丘海水浴場': MATSUSHIGE_PLACE_PHOTO,
  '徳島空港': wikiPhoto(
    'tokushima-airport.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokushima_Airport_(TKS-RJOS).jpg',
    'CC BY-SA 2.0',
    'https://creativecommons.org/licenses/by-sa/2.0/',
    'Hyougushi / Hideyuki KAMON',
    'https://commons.wikimedia.org/wiki/User:Hyougushi',
    '2007-02-03',
    '徳島空港（松茂町）',
    'Tokushima Airport, Matsushige Town'
  ),
  'とくしまとくとくターミナル': wikiPhoto(
    'tokushima-tokutoku-terminal.jpg',
    'https://commons.wikimedia.org/wiki/File:Matsushige_Bus_Terminal_for_Osaka.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'RiceCracker',
    'https://commons.wikimedia.org/wiki/User:RiceCracker',
    '2012-10-07',
    'とくしまとくとくターミナル（松茂町）',
    'Tokushima Tokutoku Terminal, Matsushige Town'
  ),
  '松茂町歴史民俗資料館・人形浄瑠璃芝居資料館': wikiPhoto(
    'matsushige-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%9D%BE%E8%8C%82%E7%94%BA%E6%AD%B4%E5%8F%B2%E6%B0%91%E4%BF%97%E8%B3%87%E6%96%99%E9%A4%A8%E3%83%BB%E4%BA%BA%E5%BD%A2%E6%B5%84%E7%91%A0%E7%92%83%E8%8A%9D%E5%B1%85%E8%B3%87%E6%96%99%E9%A4%A8_20210504.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Shizuha',
    'https://commons.wikimedia.org/wiki/User:Shizuha',
    '2021-05-04',
    '松茂町歴史民俗資料館・人形浄瑠璃芝居資料館',
    'Matsushige Historical Folk Museum and Joruri Puppet Museum'
  ),
  '宝ラーメン 徳島阿波おどり空港店': sourcePhoto(
    'matsushige-36005033-dish.jpg',
    '宝ラーメン 徳島阿波おどり空港店の料理写真',
    '宝ラーメン 徳島阿波おどり空港店 food photo',
    TABELOG_36005033,
    '食べログ'
  ),
  'ひろっちゃん': sourcePhoto(
    'matsushige-36003504-dish.jpg',
    'ひろっちゃんの料理写真',
    'ひろっちゃん food photo',
    TABELOG_36003504,
    '食べログ'
  ),
  'RICH BURGER FACTORY': sourcePhoto(
    'matsushige-36003792-dish.jpg',
    'RICH BURGER FACTORYの料理写真',
    'RICH BURGER FACTORY food photo',
    TABELOG_36003792,
    '食べログ'
  ),
  '中華そば 村田商店': sourcePhoto(
    'matsushige-36006716-dish.jpg',
    '中華そば 村田商店の料理写真',
    '中華そば 村田商店 food photo',
    TABELOG_36006716,
    '食べログ'
  ),
  '肉吸い専門店': sourcePhoto(
    'matsushige-36007034-dish.jpg',
    '肉吸い専門店の料理写真',
    '肉吸い専門店 food photo',
    TABELOG_36007034,
    '食べログ'
  ),
  '小鮎': sourcePhoto(
    'matsushige-36000295-dish.jpg',
    '小鮎の料理写真',
    '小鮎 food photo',
    TABELOG_36000295,
    '食べログ'
  ),
  'たらいうどん 山のせ 松茂店': sourcePhoto(
    'matsushige-36000548-dish.jpg',
    'たらいうどん 山のせ 松茂店の料理写真',
    'たらいうどん 山のせ 松茂店 food photo',
    TABELOG_36000548,
    '食べログ'
  ),
  '璃椿': sourcePhoto(
    'matsushige-36007008-dish.jpg',
    '璃椿の料理写真',
    '璃椿 food photo',
    TABELOG_36007008,
    '食べログ'
  ),
  'めん処 陣内': sourcePhoto(
    'matsushige-36000358-dish.jpg',
    'めん処 陣内の料理写真',
    'めん処 陣内 food photo',
    TABELOG_36000358,
    '食べログ'
  ),
  'ハレルヤスイーツキッチン': sourcePhoto(
    'matsushige-36004234-dish.jpg',
    'ハレルヤスイーツキッチンの料理写真',
    'ハレルヤスイーツキッチン food photo',
    TABELOG_36004234,
    '食べログ'
  ),
  '山かつ 空港店': sourcePhoto(
    'matsushige-36000051-dish.jpg',
    '山かつ 空港店の料理写真',
    '山かつ 空港店 food photo',
    TABELOG_36000051,
    '食べログ'
  ),
  '豚太郎 空港店': sourcePhoto(
    'matsushige-36004146-dish.jpg',
    '豚太郎 空港店の料理写真',
    '豚太郎 空港店 food photo',
    TABELOG_36004146,
    '食べログ'
  ),
  '江戸屋珈琲 松茂本店': sourcePhoto(
    'matsushige-36007639-dish.jpg',
    '江戸屋珈琲 松茂本店の料理写真',
    '江戸屋珈琲 松茂本店 food photo',
    TABELOG_36007639,
    '食べログ'
  ),
  'ハレルヤ 本社工場直売店': sourcePhoto(
    'matsushige-36003575-dish.jpg',
    'ハレルヤ 本社工場直売店の料理写真',
    'ハレルヤ 本社工場直売店 food photo',
    TABELOG_36003575,
    '食べログ'
  ),
};

