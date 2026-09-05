/**
 * Kamiita Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36405).
 * Do not mix 板野 (36404) / 石井 / 藍住 / 松茂 / 北島 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const KAMIITA = {
  nameJa: '上板町',
  nameEn: 'Kamiita Town',
  reading: 'かみいたちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'kamiita',
  jis: '36405',
  jlis: '364053',
  sameAs: 'https://www.townkamiita.jp/',
  hall: {
    postalCode: '771-1392',
    addressJa: '徳島県板野郡上板町七條字経塚42',
    addressEn: '42 Kyozuka, Shichijo, Kamiita, Itano District, Tokushima 771-1392, Japan',
    phone: '088-694-3111'
  },
  sources: {
    home: 'https://www.townkamiita.jp/',
    hall: 'https://www.townkamiita.jp/',
    kanko: 'https://www.townkamiita.jp/illustmap',
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

/** Cover: File:Anrakuji_20191119_01.jpg — 第六番 安楽寺. Not 板野 / 石井 / 藍住. */
export const KAMIITA_PLACE_PHOTO = wikiPhoto(
  'anrakuji-kamiita.jpg',
  'https://commons.wikimedia.org/wiki/File:Anrakuji_20191119_01.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Dokudami',
  'https://commons.wikimedia.org/wiki/User:Dokudami',
  '2019-11-19',
  '安楽寺（上板町・四国霊場第六番）',
  'Anraku-ji, Shikoku pilgrimage temple 6, Kamiita Town'
);

const TABELOG_36007182 = 'https://tabelog.com/tokushima/A3603/A360301/36007182/';
const TABELOG_36005631 = 'https://tabelog.com/tokushima/A3603/A360301/36005631/';
const TABELOG_36005669 = 'https://tabelog.com/tokushima/A3603/A360303/36005669/';
const TABELOG_36004892 = 'https://tabelog.com/tokushima/A3603/A360301/36004892/';
const TABELOG_36008674 = 'https://tabelog.com/tokushima/A3603/A360301/36008674/';
const TABELOG_36009117 = 'https://tabelog.com/tokushima/A3603/A360303/36009117/';
const TABELOG_36007343 = 'https://tabelog.com/tokushima/A3603/A360301/36007343/';
const TABELOG_36003813 = 'https://tabelog.com/tokushima/A3603/A360303/36003813/';
const TABELOG_36006045 = 'https://tabelog.com/tokushima/A3603/A360303/36006045/';
const TABELOG_36005949 = 'https://tabelog.com/tokushima/A3603/A360301/36005949/';
const TABELOG_36008318 = 'https://tabelog.com/tokushima/A3603/A360301/36008318/';
const TABELOG_36005653 = 'https://tabelog.com/tokushima/A3603/A360303/36005653/';
const TABELOG_36001163 = 'https://tabelog.com/tokushima/A3603/A360303/36001163/';
const TABELOG_36005257 = 'https://tabelog.com/tokushima/A3603/A360301/36005257/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const KAMIITA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '第六番 安楽寺': KAMIITA_PLACE_PHOTO,
  '大山寺': wikiPhoto(
    'taisanji-kamiita.jpg',
    'https://commons.wikimedia.org/wiki/File:Butsuozan_Taisanji_02.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-09-21',
    '大山寺（上板町）',
    'Taisan-ji, Kamiita Town'
  ),
  '技の館': wikiPhoto(
    'kamiita-waza-no-yakata.jpg',
    'https://commons.wikimedia.org/wiki/File:上板町_技の館.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'AWA.kanko',
    'https://commons.wikimedia.org/wiki/User:AWA.kanko',
    '2024-09-21',
    '技の館（上板町）',
    'Waza-no-yakata craft hall, Kamiita Town'
  ),
  '上板町歴史民俗資料館': wikiPhoto(
    'kamiita-rekishi-minzoku.jpg',
    'https://commons.wikimedia.org/wiki/File:上板町_歴史民俗資料館.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'AWA.kanko',
    'https://commons.wikimedia.org/wiki/User:AWA.kanko',
    '2024-09-21',
    '上板町歴史民俗資料館',
    'Kamiita Town History and Folklore Museum'
  ),
  'ファミリースポーツ公園': wikiPhoto(
    'kamiita-family-sports-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Kamiita_Family_Sports_Park.jpg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'AWA.kanko',
    'https://commons.wikimedia.org/wiki/User:AWA.kanko',
    '2024-09-21',
    '上板町ファミリースポーツ公園',
    'Kamiita Family Sports Park'
  ),
  '第十の堰': wikiPhoto(
    'yoshinogawa-daijuzeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Yoshinogawa_Daijuzeki.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Tamago915',
    'https://commons.wikimedia.org/wiki/User:Tamago915',
    '2005-05-03',
    '第十の堰（上板町・吉野川）',
    'Daiju Weir (Yoshino River), Kamiita Town'
  ),
  '乳保神社のイチョウ': wikiPhoto(
    'nyuho-icho-kamiita.jpg',
    'https://commons.wikimedia.org/wiki/File:乳保神社のイチョウ.jpeg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-11-23',
    '乳保神社のイチョウ（上板町）',
    'Ginkgo at Nyūho Shrine, Kamiita Town'
  ),
  "亀井製麺所": sourcePhoto(
    'kamiita-36007182-dish.jpg',
    "亀井製麺所の料理写真",
    "亀井製麺所 food photo",
    TABELOG_36007182,
    '食べログ'
  ),
  "和楽や": sourcePhoto(
    'kamiita-36005631-dish.jpg',
    "和楽やの料理写真",
    "和楽や food photo",
    TABELOG_36005631,
    '食べログ'
  ),
  "岡萬本舗 北本店": sourcePhoto(
    'kamiita-36005669-dish.jpg',
    "岡萬本舗 北本店の料理写真",
    "岡萬本舗 北本店 food photo",
    TABELOG_36005669,
    '食べログ'
  ),
  "お好み焼き 丸金": sourcePhoto(
    'kamiita-36004892-dish.jpg',
    "お好み焼き 丸金の料理写真",
    "お好み焼き 丸金 food photo",
    TABELOG_36004892,
    '食べログ'
  ),
  "Za Classic": sourcePhoto(
    'kamiita-36008674-dish.jpg',
    "Za Classicの料理写真",
    "Za Classic food photo",
    TABELOG_36008674,
    '食べログ'
  ),
  "つけ麺ヤー": sourcePhoto(
    'kamiita-36009117-dish.jpg',
    "つけ麺ヤーの料理写真",
    "つけ麺ヤー food photo",
    TABELOG_36009117,
    '食べログ'
  ),
  "ダイニング酒飯 じゅれーむ": sourcePhoto(
    'kamiita-36007343-dish.jpg',
    "ダイニング酒飯 じゅれーむの料理写真",
    "ダイニング酒飯 じゅれーむ food photo",
    TABELOG_36007343,
    '食べログ'
  ),
  "中国料理龍盛": sourcePhoto(
    'kamiita-36003813-dish.jpg',
    "中国料理龍盛の料理写真",
    "中国料理龍盛 food photo",
    TABELOG_36003813,
    '食べログ'
  ),
  "徳島ラーメン 麺王 上板スクエア店": sourcePhoto(
    'kamiita-36006045-dish.jpg',
    "徳島ラーメン 麺王 上板スクエア店の料理写真",
    "徳島ラーメン 麺王 上板スクエア店 food photo",
    TABELOG_36006045,
    '食べログ'
  ),
  "ニヤカフェ": sourcePhoto(
    'kamiita-36005949-dish.jpg',
    "ニヤカフェの料理写真",
    "ニヤカフェ food photo",
    TABELOG_36005949,
    '食べログ'
  ),
  "ひより家": sourcePhoto(
    'kamiita-36008318-dish.jpg',
    "ひより家の料理写真",
    "ひより家 food photo",
    TABELOG_36008318,
    '食べログ'
  ),
  "斉藤食堂": sourcePhoto(
    'kamiita-36005653-dish.jpg',
    "斉藤食堂の料理写真",
    "斉藤食堂 food photo",
    TABELOG_36005653,
    '食べログ'
  ),
  "三玄": sourcePhoto(
    'kamiita-36001163-dish.jpg',
    "三玄の料理写真",
    "三玄 food photo",
    TABELOG_36001163,
    '食べログ'
  ),
  "寿食堂": sourcePhoto(
    'kamiita-36005257-dish.jpg',
    "寿食堂の料理写真",
    "寿食堂 food photo",
    TABELOG_36005257,
    '食べログ'
  ),
};
