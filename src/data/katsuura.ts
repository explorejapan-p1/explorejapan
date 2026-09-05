/**
 * Katsuura Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36301).
 * Do not mix 神山 / 上板 / 板野 / 石井 / 藍住 / 松茂 / 北島 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const KATSUURA = {
  nameJa: '勝浦町',
  nameEn: 'Katsuura Town',
  reading: 'かつうらちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'katsuura',
  jis: '36301',
  jlis: '363011',
  sameAs: 'https://www.town.katsuura.lg.jp/',
  hall: {
    postalCode: '771-4395',
    addressJa: '徳島県勝浦郡勝浦町大字久国字久保田3',
    addressEn: '3 Kubota, Hisakuni, Katsuura, Katsuura District, Tokushima 771-4395, Japan',
    phone: '0885-42-2511'
  },
  sources: {
    home: 'https://www.town.katsuura.lg.jp/',
    hall: 'https://www.town.katsuura.lg.jp/docs/2010111200280/',
    kanko: 'https://katsuura-tourism.jp/',
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

/** Cover: File:Kakurin_temple_entrance.jpg — 鶴林寺（四国霊場20番）. Not 神山 / 上板 / 板野. */
export const KATSUURA_PLACE_PHOTO = wikiPhoto(
  'kakurinji-katsuura.jpg',
  'https://commons.wikimedia.org/wiki/File:Kakurin_temple_entrance.jpg',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0/',
  'Mti',
  'https://commons.wikimedia.org/wiki/User:Mti',
  '2011-07-04',
  '鶴林寺入口（勝浦町・四国霊場第二十番）',
  'Kakurin-ji entrance, Shikoku pilgrimage temple 20, Katsuura Town'
);

const TABELOG_36005670 = 'https://tabelog.com/tokushima/A3601/A360103/36005670/';
const TABELOG_36004711 = 'https://tabelog.com/tokushima/A3601/A360104/36004711/';
const TABELOG_36006067 = 'https://tabelog.com/tokushima/A3601/A360103/36006067/';
const TABELOG_36003366 = 'https://tabelog.com/tokushima/A3601/A360103/36003366/';
const TABELOG_36003453 = 'https://tabelog.com/tokushima/A3601/A360104/36003453/';
const TABELOG_36006065 = 'https://tabelog.com/tokushima/A3601/A360103/36006065/';
const TABELOG_36004095 = 'https://tabelog.com/tokushima/A3601/A360103/36004095/';
const TABELOG_36004741 = 'https://tabelog.com/tokushima/A3601/A360104/36004741/';
const TABELOG_36003185 = 'https://tabelog.com/tokushima/A3601/A360103/36003185/';
const TABELOG_36003433 = 'https://tabelog.com/tokushima/A3603/A360301/36003433/';
const TABELOG_36007751 = 'https://tabelog.com/tokushima/A3601/A360103/36007751/';
const TABELOG_36006059 = 'https://tabelog.com/tokushima/A3601/A360104/36006059/';
const TABELOG_36004114 = 'https://tabelog.com/tokushima/A3601/A360104/36004114/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const KATSUURA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '鶴林寺': KATSUURA_PLACE_PHOTO,
  '星谷寺(星の岩屋)': wikiPhoto(
    'hoshi-no-iwaya-katsuura.jpg',
    'https://commons.wikimedia.org/wiki/File:Hoshi-no-iwaya_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2011-02-26',
    '星の岩屋（星谷寺）入口（勝浦町）',
    'Hoshi-no-iwaya (Shōkoku-ji) entrance, Katsuura Town'
  ),
  '立川渓谷': wikiPhoto(
    'tachikawa-keikoku-katsuura.jpg',
    'https://commons.wikimedia.org/wiki/File:Tazukawakeikoku.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-06-06',
    '立川渓谷（勝浦町）',
    'Tachikawa Gorge, Katsuura Town'
  ),
  '恐竜の里': wikiPhoto(
    'kyoryu-no-sato-katsuura.jpg',
    'https://commons.wikimedia.org/wiki/File:Kyouryuunosato.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-06-06',
    '恐竜の里（勝浦町）',
    'Kyōryū-no-sato dinosaur park, Katsuura Town'
  ),
  '道の駅ひなの里かつうら': wikiPhoto(
    'hinanosato-katsuura.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%B2%E3%81%AA%E3%81%AE%E9%87%8C%E3%81%8B%E3%81%A4%E3%81%86%E3%82%89.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami',
    'https://commons.wikimedia.org/wiki/User:Osamiw',
    '2012-07',
    '道の駅ひなの里かつうら（勝浦町生名）',
    'Michinoeki Hinanosato Katsuura, Katsuura Town'
  ),
  '勝浦川、星谷運動公園': wikiPhoto(
    'hoshitani-park-katsuura.jpg',
    'https://commons.wikimedia.org/wiki/File:Hoshitani_undo_park.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-09-19',
    '星谷運動公園（勝浦町）',
    'Hoshitani Athletic Park, Katsuura Town'
  ),
  '鹿背山・稼勢山': wikiPhoto(
    'kaseyama-katsuura.jpg',
    'https://commons.wikimedia.org/wiki/File:%E7%A8%BC%E5%8B%A2%E5%B1%B1.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-12-02',
    '稼勢山（勝浦町）',
    'Mount Kaseyama, Katsuura Town'
  ),
  '坂本八幡神社': wikiPhoto(
    'sakamoto-hachiman-katsuura.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%9D%82%E6%9C%AC%E5%85%AB%E5%B9%A1%E7%A5%9E%E7%A4%BE%E3%81%AE%E8%8A%B1%E6%89%8B%E6%B0%B4.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Skate-song',
    'https://commons.wikimedia.org/wiki/User:Skate-song',
    '2021-07-21',
    '坂本八幡神社の花手水（勝浦町）',
    'Flower chōzuya, Sakamoto Hachiman Shrine, Katsuura Town'
  ),
  Maeno: sourcePhoto(
    'katsuura-36005670-dish.jpg',
    'Maenoの料理写真',
    'Maeno food photo',
    TABELOG_36005670,
    '食べログ'
  ),
  'つばめ食堂': sourcePhoto(
    'katsuura-36004711-dish.jpg',
    'つばめ食堂の料理写真',
    'つばめ食堂 food photo',
    TABELOG_36004711,
    '食べログ'
  ),
  '金子屋': sourcePhoto(
    'katsuura-36006067-dish.jpg',
    '金子屋の料理写真',
    '金子屋 food photo',
    TABELOG_36006067,
    '食べログ'
  ),
  'このむ': sourcePhoto(
    'katsuura-36003366-dish.jpg',
    'このむの料理写真',
    'このむ food photo',
    TABELOG_36003366,
    '食べログ'
  ),
  '前松堂': sourcePhoto(
    'katsuura-36003453-dish.jpg',
    '前松堂の料理写真',
    '前松堂 food photo',
    TABELOG_36003453,
    '食べログ'
  ),
  '滝口清水堂': sourcePhoto(
    'katsuura-36006065-dish.jpg',
    '滝口清水堂の料理写真',
    '滝口清水堂 food photo',
    TABELOG_36006065,
    '食べログ'
  ),
  '喫茶オレンジ': sourcePhoto(
    'katsuura-36004095-dish.jpg',
    '喫茶オレンジの料理写真',
    '喫茶オレンジ food photo',
    TABELOG_36004095,
    '食べログ'
  ),
  '田舎寿し　なか山': sourcePhoto(
    'katsuura-36004741-dish.jpg',
    '田舎寿し　なか山の料理写真',
    '田舎寿し　なか山 food photo',
    TABELOG_36004741,
    '食べログ'
  ),
  'うおよし': sourcePhoto(
    'katsuura-36003185-dish.jpg',
    'うおよしの料理写真',
    'うおよし food photo',
    TABELOG_36003185,
    '食べログ'
  ),
  'みりか': sourcePhoto(
    'katsuura-36003433-dish.jpg',
    'みりかの料理写真',
    'みりか food photo',
    TABELOG_36003433,
    '食べログ'
  ),
  '江戸蕎麦 一竿風月': sourcePhoto(
    'katsuura-36007751-dish.jpg',
    '江戸蕎麦 一竿風月の料理写真',
    '江戸蕎麦 一竿風月 food photo',
    TABELOG_36007751,
    '食べログ'
  ),
  '魚達': sourcePhoto(
    'katsuura-36006059-dish.jpg',
    '魚達の料理写真',
    '魚達 food photo',
    TABELOG_36006059,
    '食べログ'
  ),
  '手打ちうどん　みやこ家': sourcePhoto(
    'katsuura-36004114-dish.jpg',
    '手打ちうどん　みやこ家の料理写真',
    '手打ちうどん　みやこ家 food photo',
    TABELOG_36004114,
    '食べログ'
  )
};
