/**
 * Naka Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36368).
 * Do not mix 佐那河内 / 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 藍住 / 松茂 / 北島 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const NAKA = {
  nameJa: '那賀町',
  nameEn: 'Naka Town',
  reading: 'なかちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'naka',
  jis: '36368',
  jlis: '363685',
  sameAs: 'https://www.town.tokushima-naka.lg.jp/',
  hall: {
    postalCode: '771-5295',
    addressJa: '徳島県那賀郡那賀町和食郷字南川104番地1',
    addressEn: '104-1 Minamigawa, Wajikigo, Naka, Naka District, Tokushima 771-5295, Japan',
    phone: '0884-62-1121'
  },
  sources: {
    home: 'https://www.town.tokushima-naka.lg.jp/',
    hall: 'https://www.town.tokushima-naka.lg.jp/',
    kanko: 'https://www.town.tokushima-naka.lg.jp/gyosei/kankoguide/',
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

/** Cover: File:高の瀬峡_-_panoramio_-_akiakane.jpg — 高の瀬峡. Not 佐那河内 / 上勝. */
export const NAKA_PLACE_PHOTO = wikiPhoto(
  'kounosekyo-naka.jpg',
  'https://commons.wikimedia.org/wiki/File:%E9%AB%98%E3%81%AE%E7%80%AC%E5%B3%A1_-_panoramio_-_akiakane.jpg',
  'CC BY 3.0',
  'https://creativecommons.org/licenses/by/3.0/',
  'akiakane',
  'https://www.panoramio.com/user/2285547',
  '2011',
  '高の瀬峡（那賀町）',
  'Kōnosekyō gorge, Naka Town'
);

const TABELOG_36009044 = 'https://tabelog.com/tokushima/A3603/A360302/36009044/';
const TABELOG_36006513 = 'https://tabelog.com/tokushima/A3601/A360101/36006513/';
const TABELOG_36009140 = 'https://tabelog.com/tokushima/A3602/A360203/36009140/';
const TABELOG_36004894 = 'https://tabelog.com/tokushima/A3601/A360104/36004894/';
const TABELOG_36003100 = 'https://tabelog.com/tokushima/A3602/A360203/36003100/';
const TABELOG_36005082 = 'https://tabelog.com/tokushima/A3602/A360201/36005082/';
const TABELOG_36006500 = 'https://tabelog.com/tokushima/A3602/A360203/36006500/';
const TABELOG_36007962 = 'https://tabelog.com/tokushima/A3602/A360201/36007962/';
const TABELOG_36000767 = 'https://tabelog.com/tokushima/A3601/A360104/36000767/';
const TABELOG_36004447 = 'https://tabelog.com/tokushima/A3602/A360202/36004447/';
const TABELOG_36004354 = 'https://tabelog.com/tokushima/A3601/A360104/36004354/';
const TABELOG_36005658 = 'https://tabelog.com/tokushima/A3602/A360202/36005658/';
const TABELOG_36006492 = 'https://tabelog.com/tokushima/A3601/A360104/36006492/';
const TABELOG_36005506 = 'https://tabelog.com/tokushima/A3601/A360104/36005506/';
const TABELOG_36006010 = 'https://tabelog.com/tokushima/A3601/A360104/36006010/';
const TABELOG_36007527 = 'https://tabelog.com/tokushima/A3602/A360202/36007527/';
const TABELOG_36004914 = 'https://tabelog.com/tokushima/A3601/A360104/36004914/';
const TABELOG_36005661 = 'https://tabelog.com/tokushima/A3602/A360202/36005661/';
const TABELOG_36007461 = 'https://tabelog.com/tokushima/A3603/A360301/36007461/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const NAKA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '高の瀬峡平の里': NAKA_PLACE_PHOTO,
  'のぎくの館 （道の駅わじき）': wikiPhoto(
    'michinoeki-wajiki-naka.jpg',
    'https://commons.wikimedia.org/wiki/File:Mitinoeki_wajiki.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Osamiw',
    'https://commons.wikimedia.org/wiki/User:Osamiw',
    '2009-09-17',
    '道の駅わじき・のぎくの館（那賀町）',
    'Michinoeki Wajiki (Nogiku-no-yakata), Naka Town'
  ),
  '鷲の里 （観光物産センター）': wikiPhoto(
    'washinosato-naka.jpg',
    'https://commons.wikimedia.org/wiki/File:Road_Station_Washinosato.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Mti',
    'https://commons.wikimedia.org/wiki/User:Mti',
    '2011-07-04',
    '道の駅鷲の里（那賀町）',
    'Michinoeki Washinosato, Naka Town'
  ),
  'もみじ川温泉 （道の駅もみじ川温泉）': wikiPhoto(
    'michinoeki-momijigawa-naka.jpg',
    'https://commons.wikimedia.org/wiki/File:Mitinoeki_momijikawaonnsenn.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Osamiw',
    'https://commons.wikimedia.org/wiki/User:Osamiw',
    '2009-09-17',
    '道の駅もみじ川温泉（那賀町）',
    'Michinoeki Momijigawa Onsen, Naka Town'
  ),
  '鷲敷ラインおよび氷柱観音': wikiPhoto(
    'wajiki-line-naka.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%B7%B2%E6%95%B7%E3%83%A9%E3%82%A4%E3%83%B3_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'akiakane',
    'https://web.archive.org/web/20161013084957/http://www.panoramio.com/user/2285547',
    '2008-11-26',
    '鷲敷ライン（那賀町）',
    'Wajiki Line gorge, Naka Town'
  ),
  '剣山並びに亜寒帯植物林': wikiPhoto(
    'tsurugi-rindo-naka.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%89%A3%E5%B1%B1%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E6%9E%97%E9%81%93_-_Mt.Tsurugi_super_forest_road_-_panoramio_%283%29.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'yano@mama.akari.ne.jp',
    'https://web.archive.org/web/20161102154126/http://www.panoramio.com/user/5198788',
    '2014-11-02',
    '剣山スーパー林道付近の山並み（那賀町）',
    'Mt. Tsurugi forest-road scenery, Naka Town'
  ),
  '四季美谷温泉｜休業中': wikiPhoto(
    'shikibidani-onsen-naka.jpg',
    'https://commons.wikimedia.org/wiki/File:Shikibidani_Onsen_in_Naka,_Tokushima_prefecture,_Japan.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'K.F.',
    'https://commons.wikimedia.org/wiki/User:K.F.',
    '2014-05-10',
    '四季美谷温泉外観（那賀町・休業中）',
    'Shikibidani Onsen exterior (closed), Naka Town'
  ),
  "木頭カフェ西宇森": sourcePhoto(
    'naka-36009044-dish.jpg',
    "木頭カフェ西宇森の料理写真",
    "木頭カフェ西宇森 food photo",
    TABELOG_36009044,
    '食べログ'
  ),
  "きとうむら": sourcePhoto(
    'naka-36006513-dish.jpg',
    "きとうむらの料理写真",
    "きとうむら food photo",
    TABELOG_36006513,
    '食べログ'
  ),
  "Cafe ATARI": sourcePhoto(
    'naka-36009140-dish.jpg',
    "Cafe ATARIの料理写真",
    "Cafe ATARI food photo",
    TABELOG_36009140,
    '食べログ'
  ),
  "菩提樹": sourcePhoto(
    'naka-36004894-dish.jpg',
    "菩提樹の料理写真",
    "菩提樹 food photo",
    TABELOG_36004894,
    '食べログ'
  ),
  "もみじ川温泉レストラン　湖畔": sourcePhoto(
    'naka-36003100-dish.jpg',
    "もみじ川温泉レストラン　湖畔の料理写真",
    "もみじ川温泉レストラン　湖畔 food photo",
    TABELOG_36003100,
    '食べログ'
  ),
  "道の駅 わじき": sourcePhoto(
    'naka-36005082-dish.jpg',
    "道の駅 わじきの料理写真",
    "道の駅 わじき food photo",
    TABELOG_36005082,
    '食べログ'
  ),
  "宮田製菓": sourcePhoto(
    'naka-36006500-dish.jpg',
    "宮田製菓の料理写真",
    "宮田製菓 food photo",
    TABELOG_36006500,
    '食べログ'
  ),
  "釜揚げうどん まるお": sourcePhoto(
    'naka-36007962-dish.jpg',
    "釜揚げうどん まるおの料理写真",
    "釜揚げうどん まるお food photo",
    TABELOG_36007962,
    '食べログ'
  ),
  "やじろべえ食堂": sourcePhoto(
    'naka-36000767-dish.jpg',
    "やじろべえ食堂の料理写真",
    "やじろべえ食堂 food photo",
    TABELOG_36000767,
    '食べログ'
  ),
  "さんが　きっちんまま": sourcePhoto(
    'naka-36004447-dish.jpg',
    "さんが　きっちんままの料理写真",
    "さんが　きっちんまま food photo",
    TABELOG_36004447,
    '食べログ'
  ),
  "津田千寿苑": sourcePhoto(
    'naka-36004354-dish.jpg',
    "津田千寿苑の料理写真",
    "津田千寿苑 food photo",
    TABELOG_36004354,
    '食べログ'
  ),
  "たちばな食堂": sourcePhoto(
    'naka-36005658-dish.jpg',
    "たちばな食堂の料理写真",
    "たちばな食堂 food photo",
    TABELOG_36005658,
    '食べログ'
  ),
  "いわさ料理店": sourcePhoto(
    'naka-36006492-dish.jpg',
    "いわさ料理店の料理写真",
    "いわさ料理店 food photo",
    TABELOG_36006492,
    '食べログ'
  ),
  "若竹": sourcePhoto(
    'naka-36005506-dish.jpg',
    "若竹の料理写真",
    "若竹 food photo",
    TABELOG_36005506,
    '食べログ'
  ),
  "どん栗": sourcePhoto(
    'naka-36006010-dish.jpg',
    "どん栗の料理写真",
    "どん栗 food photo",
    TABELOG_36006010,
    '食べログ'
  ),
  "カントリーロード": sourcePhoto(
    'naka-36007527-dish.jpg',
    "カントリーロードの料理写真",
    "カントリーロード food photo",
    TABELOG_36007527,
    '食べログ'
  ),
  "ゆり野 食堂": sourcePhoto(
    'naka-36004914-dish.jpg',
    "ゆり野 食堂の料理写真",
    "ゆり野 食堂 food photo",
    TABELOG_36004914,
    '食べログ'
  ),
  "くるく": sourcePhoto(
    'naka-36005661-dish.jpg',
    "くるくの料理写真",
    "くるく food photo",
    TABELOG_36005661,
    '食べログ'
  ),
  "ファガスの森 高城": sourcePhoto(
    'naka-36007461-dish.jpg',
    "ファガスの森 高城の料理写真",
    "ファガスの森 高城 food photo",
    TABELOG_36007461,
    '食べログ'
  ),
};
