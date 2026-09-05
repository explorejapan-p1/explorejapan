/**
 * Itano Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36404).
 * Do not mix 松茂 (36401) / 北島 (36402) / 藍住 (36403) / 石井 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const ITANO = {
  nameJa: '板野町',
  nameEn: 'Itano Town',
  reading: 'いたのちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'itano',
  jis: '36404',
  jlis: '364041',
  sameAs: 'http://www.town.itano.tokushima.jp/',
  hall: {
    postalCode: '779-0192',
    addressJa: '徳島県板野郡板野町吹田字町南22-2',
    addressEn: '22-2 Minami, Suita, Itano, Itano District, Tokushima 779-0192, Japan',
    phone: '088-672-5980'
  },
  sources: {
    home: 'http://www.town.itano.tokushima.jp/',
    hall: 'http://www.town.itano.tokushima.jp/',
    kanko: 'http://www.town.itano.tokushima.jp/syokai/',
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

/** Cover: File:ASUTAMULAND TOKUSHIMA.JPG — あすたむらんど徳島. Not 藍住 / 北島 / 鳴門. */
export const ITANO_PLACE_PHOTO = wikiPhoto(
  'asutamuland-tokushima.jpg',
  'https://commons.wikimedia.org/wiki/File:ASUTAMULAND_TOKUSHIMA.JPG',
  'Public Domain',
  'https://creativecommons.org/publicdomain/mark/1.0/',
  'Sorrysorry',
  'https://commons.wikimedia.org/wiki/User:Sorrysorry',
  '2007-01-06',
  'あすたむらんど徳島（板野町）',
  'Asutamu Land Tokushima, Itano Town'
);

const TABELOG_36003089 = 'https://tabelog.com/tokushima/A3603/A360303/36003089/';
const TABELOG_36000266 = 'https://tabelog.com/tokushima/A3603/A360303/36000266/';
const TABELOG_36000652 = 'https://tabelog.com/tokushima/A3603/A360303/36000652/';
const TABELOG_36007885 = 'https://tabelog.com/tokushima/A3603/A360303/36007885/';
const TABELOG_36003266 = 'https://tabelog.com/tokushima/A3603/A360303/36003266/';
const TABELOG_36000188 = 'https://tabelog.com/tokushima/A3603/A360303/36000188/';
const TABELOG_36007886 = 'https://tabelog.com/tokushima/A3603/A360303/36007886/';
const TABELOG_36001541 = 'https://tabelog.com/tokushima/A3603/A360303/36001541/';
const TABELOG_36004633 = 'https://tabelog.com/tokushima/A3603/A360303/36004633/';
const TABELOG_36006117 = 'https://tabelog.com/tokushima/A3603/A360303/36006117/';
const TABELOG_36009419 = 'https://tabelog.com/tokushima/A3603/A360303/36009419/';
const TABELOG_36008521 = 'https://tabelog.com/tokushima/A3603/A360303/36008521/';
const TABELOG_36007360 = 'https://tabelog.com/tokushima/A3603/A360303/36007360/';
const TABELOG_36001723 = 'https://tabelog.com/tokushima/A3603/A360303/36001723/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const ITANO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  'あすたむらんど徳島': ITANO_PLACE_PHOTO,
  '金泉寺（四国霊場第三番札所）': wikiPhoto(
    'konsenji-itano.jpg',
    'https://commons.wikimedia.org/wiki/File:Konsenji20220215_1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2022-02-15',
    '金泉寺（板野町・四国霊場第三番）',
    'Konsen-ji, Shikoku pilgrimage temple 3, Itano Town'
  ),
  '大日寺（四国霊場第四番札所）': wikiPhoto(
    'dainichiji-itano.jpg',
    'https://commons.wikimedia.org/wiki/File:Kokuganzan_Dainichiji_02.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-04-18',
    '大日寺（板野町・四国霊場第四番）',
    'Dainichi-ji, Shikoku pilgrimage temple 4, Itano Town'
  ),
  '地蔵寺（四国霊場第五番札所）': wikiPhoto(
    'jizoji-itano.jpg',
    'https://commons.wikimedia.org/wiki/File:Zizouji20220308_1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2022-03-08',
    '地蔵寺（板野町・四国霊場第五番）',
    'Jizō-ji, Shikoku pilgrimage temple 5, Itano Town'
  ),
  '板野町歴史文化公園': wikiPhoto(
    'itano-history-culture-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Itano-cho_History_culture_Park.jpg',
    'Public Domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2011-02-27',
    '板野町歴史文化公園',
    'Itano Town History and Culture Park'
  ),
  '道の駅いたの': wikiPhoto(
    'michinoeki-itano.jpg',
    'https://commons.wikimedia.org/wiki/File:Michinoeli-itano.jpeg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-04-06',
    '道の駅いたの（板野町）',
    'Michi-no-eki Itano roadside station, Itano Town'
  ),
  "丸池製麺所": sourcePhoto(
    'itano-36003089-dish.jpg',
    "丸池製麺所の料理写真",
    "丸池製麺所 food photo",
    TABELOG_36003089,
    '食べログ'
  ),
  "金屋": sourcePhoto(
    'itano-36000266-dish.jpg',
    "金屋の料理写真",
    "金屋 food photo",
    TABELOG_36000266,
    '食べログ'
  ),
  "こんせん": sourcePhoto(
    'itano-36000652-dish.jpg',
    "こんせんの料理写真",
    "こんせん food photo",
    TABELOG_36000652,
    '食べログ'
  ),
  "恵食堂": sourcePhoto(
    'itano-36007885-dish.jpg',
    "恵食堂の料理写真",
    "恵食堂 food photo",
    TABELOG_36007885,
    '食べログ'
  ),
  "花岡製麺": sourcePhoto(
    'itano-36003266-dish.jpg',
    "花岡製麺の料理写真",
    "花岡製麺 food photo",
    TABELOG_36003266,
    '食べログ'
  ),
  "いぬぶし": sourcePhoto(
    'itano-36000188-dish.jpg',
    "いぬぶしの料理写真",
    "いぬぶし food photo",
    TABELOG_36000188,
    '食べログ'
  ),
  "そらいろ": sourcePhoto(
    'itano-36007886-dish.jpg',
    "そらいろの料理写真",
    "そらいろ food photo",
    TABELOG_36007886,
    '食べログ'
  ),
  "鮨八鮨": sourcePhoto(
    'itano-36001541-dish.jpg',
    "鮨八鮨の料理写真",
    "鮨八鮨 food photo",
    TABELOG_36001541,
    '食べログ'
  ),
  "ナッチーノエル": sourcePhoto(
    'itano-36004633-dish.jpg',
    "ナッチーノエルの料理写真",
    "ナッチーノエル food photo",
    TABELOG_36004633,
    '食べログ'
  ),
  "フジムラ ベーカリー": sourcePhoto(
    'itano-36006117-dish.jpg',
    "フジムラ ベーカリーの料理写真",
    "フジムラ ベーカリー food photo",
    TABELOG_36006117,
    '食べログ'
  ),
  "からあげや カリッジュ TRIAL板野店": sourcePhoto(
    'itano-36009419-dish.jpg',
    "からあげや カリッジュ TRIAL板野店の料理写真",
    "からあげや カリッジュ TRIAL板野店 food photo",
    TABELOG_36009419,
    '食べログ'
  ),
  "LATTE Itano gelato": sourcePhoto(
    'itano-36008521-dish.jpg',
    "LATTE Itano gelatoの料理写真",
    "LATTE Itano gelato food photo",
    TABELOG_36008521,
    '食べログ'
  ),
  "ナンカレーハウス": sourcePhoto(
    'itano-36007360-dish.jpg',
    "ナンカレーハウスの料理写真",
    "ナンカレーハウス food photo",
    TABELOG_36007360,
    '食べログ'
  ),
  "キャロット": sourcePhoto(
    'itano-36001723-dish.jpg',
    "キャロットの料理写真",
    "キャロット food photo",
    TABELOG_36001723,
    '食べログ'
  ),
};
