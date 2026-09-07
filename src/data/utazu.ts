/**
 * Utazu Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07). JIS 37386. Tenth Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji + Sakaide + Naoshima + Shodoshima + Zentsuji + Mitoyo.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split) + Commons michinoeki experience.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const UTAZU = {
  nameJa: '宇多津町',
  nameEn: 'Utazu',
  reading: 'うたづちょう',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'utazu',
  jis: '37386',
  jlis: '373860',
  sameAs: 'https://www.town.utazu.lg.jp/',
  hall: {
    postalCode: '769-0292',
    addressJa: '香川県綾歌郡宇多津町1881番地',
    addressEn: '1881 Utazu, Ayauta District, Kagawa 769-0292, Japan',
    phone: '0877-49-0511'
  },
  sources: {
    home: 'https://www.town.utazu.lg.jp/',
    hall: 'https://www.town.utazu.lg.jp/',
    kankou: 'https://utazu-kanko.jp/',
    goldTower: 'https://www.town.utazu.lg.jp/page/1174.html',
    rinkai: 'https://utazu-kanko.jp/tourism/340.html',
    tabelogCity: 'https://tabelog.com/kagawa/C37386/rstLst/',
    grand: 'https://travel.rakuten.co.jp/HOTEL/15605/15605.html',
    az: 'https://travel.rakuten.co.jp/HOTEL/181836/181836.html',
    accessed: '2026-09-07'
  }
} as const;

export const UTAZU_EXPECTED_ROW_COUNT = 8;
export const UTAZU_EXPECTED_GEO_COUNT = 8;

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

/** Cover: Gold Tower — strongest Utazu landmark. */
export const UTAZU_PLACE_PHOTO = wikiPhoto(
  'utazu-gold-tower.jpg',
  'https://commons.wikimedia.org/wiki/File:%E3%82%B4%E3%83%BC%E3%83%AB%E3%83%89%E3%82%BF%E3%83%AF%E3%83%BC.jpg',
  'CC0',
  'https://creativecommons.org/publicdomain/zero/1.0/',
  'キアラア',
  'https://commons.wikimedia.org/wiki/User:%E3%82%AD%E3%82%A2%E3%83%A9%E3%82%A2',
  '2025-08-04',
  'ゴールドタワー（香川県綾歌郡宇多津町）',
  'Gold Tower, Utazu, Kagawa'
);

const TABELOG_37014623 = 'https://tabelog.com/kagawa/A3702/A370202/37014623/';
const TABELOG_37004143 = 'https://tabelog.com/kagawa/A3702/A370202/37004143/';
const TABELOG_37007830 = 'https://tabelog.com/kagawa/A3702/A370202/37007830/';
const TABELOG_37000853 = 'https://tabelog.com/kagawa/A3702/A370202/37000853/';
const TABELOG_37006739 = 'https://tabelog.com/kagawa/A3702/A370202/37006739/';
const TABELOG_37013119 = 'https://tabelog.com/kagawa/A3702/A370202/37013119/';
const TABELOG_37014450 = 'https://tabelog.com/kagawa/A3702/A370202/37014450/';
const TABELOG_37002291 = 'https://tabelog.com/kagawa/A3702/A370202/37002291/';
const TABELOG_37001422 = 'https://tabelog.com/kagawa/A3702/A370202/37001422/';
const TABELOG_37002329 = 'https://tabelog.com/kagawa/A3702/A370202/37002329/';
const TABELOG_37013867 = 'https://tabelog.com/kagawa/A3702/A370202/37013867/';
const TABELOG_37010157 = 'https://tabelog.com/kagawa/A3702/A370202/37010157/';
const TABELOG_37014869 = 'https://tabelog.com/kagawa/A3702/A370202/37014869/';
const TABELOG_37004793 = 'https://tabelog.com/kagawa/A3702/A370202/37004793/';
const TABELOG_37002798 = 'https://tabelog.com/kagawa/A3702/A370202/37002798/';
const TABELOG_37008588 = 'https://tabelog.com/kagawa/A3702/A370202/37008588/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa Files. */
export const UTAZU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  'ゴールドタワー': UTAZU_PLACE_PHOTO,
  '宇多津臨海公園': wikiPhoto(
    'utazu-rinkai.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%AE%87%E5%A4%9A%E6%B4%A5%E8%87%A8%E6%B5%B7%E5%85%AC%E5%9C%92.jpg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'キアラア',
    'https://commons.wikimedia.org/wiki/User:%E3%82%AD%E3%82%A2%E3%83%A9%E3%82%A2',
    '2025-08-04',
    '宇多津臨海公園（香川県宇多津町）',
    'Utazu Seaside Park, Utazu'
  ),
  '四国水族館': wikiPhoto(
    'utazu-aquarium.jpg',
    'https://commons.wikimedia.org/wiki/File:Shikoku_Aquarium1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Totti',
    'https://commons.wikimedia.org/wiki/User:Totti',
    '2020-06-19',
    '四国水族館の外観（宇多津町）',
    'Shikoku Aquarium exterior, Utazu'
  ),
  '復元塩田': wikiPhoto(
    'utazu-enden.jpg',
    'https://commons.wikimedia.org/wiki/File:Enden-Utadu1.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Toto-tarou',
    'https://commons.wikimedia.org/wiki/User:Toto-tarou',
    '2007-10',
    '宇多津臨海公園の復元塩田（宇多津町）',
    'Restored salt pans at Utazu Seaside Park'
  ),
  '宇多津駅': wikiPhoto(
    'utazu-station.jpg',
    'https://commons.wikimedia.org/wiki/File:JR_Utazu_Station_2021-08_ac_(1).jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2021-08',
    'JR宇多津駅（宇多津町）',
    'JR Utazu Station, Utazu'
  ),
  '青ノ山': wikiPhoto(
    'utazu-aonoyama.jpg',
    'https://commons.wikimedia.org/wiki/File:Aonoyama20220820_5.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2022-08-20',
    '青ノ山からの眺めとゴールドタワー（宇多津町）',
    'View from Mount Aono with Gold Tower, Utazu'
  ),
  '道の駅恋人の聖地うたづ臨海公園': wikiPhoto(
    'utazu-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Michinoeki_Utadu-Umihotaru.JPG',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク',
    'https://commons.wikimedia.org/wiki/File:Michinoeki_Utadu-Umihotaru.JPG',
    '2011-02-13',
    '道の駅恋人の聖地うたづ臨海公園・うたづ海ホタル（宇多津町）',
    'Michinoeki Lover\'s Sanctuary Utazu Seaside Park (Umi Hotaru)'
  ),
  '宇多津グランドホテル': sourcePhoto(
    'utazu-stay-grand.jpg',
    '宇多津グランドホテルのツインルーム写真',
    'Utazu Grand Hotel twin room photo',
    'https://travel.rakuten.co.jp/HOTEL/15605/gallery.html',
    '楽天トラベル'
  ),
  'ＨＯＴＥＬ　ＡＺ　香川宇多津店': sourcePhoto(
    'utazu-stay-az.jpg',
    'ＨＯＴＥＬ　ＡＺ　香川宇多津店のシングルルーム写真',
    'HOTEL AZ Kagawa Utazu single room photo',
    'https://travel.rakuten.co.jp/HOTEL/181836/gallery.html',
    '楽天トラベル'
  ),
  '宇多津グランドホテル 大浴場': sourcePhoto(
    'utazu-onsen-grand.jpg',
    '宇多津グランドホテルの大浴場写真',
    'Utazu Grand Hotel large bath photo',
    'https://travel.rakuten.co.jp/HOTEL/15605/gallery.html',
    '楽天トラベル'
  ),
  '旬処 栄': sourcePhoto('utazu-37014623-dish.jpg', '旬処 栄の料理写真', '旬処 栄 food photo', TABELOG_37014623, '食べログ'),
  '吾割食堂': sourcePhoto('utazu-37004143-dish.jpg', '吾割食堂の料理写真', '吾割食堂 food photo', TABELOG_37004143, '食べログ'),
  '魚民 宇多津店': sourcePhoto('utazu-37007830-dish.jpg', '魚民 宇多津店の料理写真', '魚民 宇多津店 food photo', TABELOG_37007830, '食べログ'),
  '焼肉ひらい 宇多津店': sourcePhoto('utazu-37000853-dish.jpg', '焼肉ひらい 宇多津店の料理写真', '焼肉ひらい 宇多津店 food photo', TABELOG_37000853, '食べログ'),
  '宇多津ホルモン': sourcePhoto('utazu-37006739-dish.jpg', '宇多津ホルモンの料理写真', '宇多津ホルモン food photo', TABELOG_37006739, '食べログ'),
  '青春のおそばやさん': sourcePhoto('utazu-37013119-dish.jpg', '青春のおそばやさんの料理写真', '青春のおそばやさん food photo', TABELOG_37013119, '食べログ'),
  '丸亀骨付鳥一丁 宇多津店': sourcePhoto('utazu-37014450-dish.jpg', '丸亀骨付鳥一丁 宇多津店の料理写真', '丸亀骨付鳥一丁 宇多津店 food photo', TABELOG_37014450, '食べログ'),
  '次男坊 宇多津店': sourcePhoto('utazu-37002291-dish.jpg', '次男坊 宇多津店の料理写真', '次男坊 宇多津店 food photo', TABELOG_37002291, '食べログ'),
  'めりけんや かけはし店': sourcePhoto('utazu-37001422-dish.jpg', 'めりけんや かけはし店の料理写真', 'めりけんや かけはし店 food photo', TABELOG_37001422, '食べログ'),
  '遊食房屋 宇多津店': sourcePhoto('utazu-37002329-dish.jpg', '遊食房屋 宇多津店の料理写真', '遊食房屋 宇多津店 food photo', TABELOG_37002329, '食べログ'),
  '麺処 たでや': sourcePhoto('utazu-37013867-dish.jpg', '麺処 たでやの料理写真', '麺処 たでや food photo', TABELOG_37013867, '食べログ'),
  'ぴこぴこ精肉店 宇多津': sourcePhoto('utazu-37010157-dish.jpg', 'ぴこぴこ精肉店 宇多津の料理写真', 'ぴこぴこ精肉店 宇多津 food photo', TABELOG_37010157, '食べログ'),
  '瀬戸パーク': sourcePhoto('utazu-37014869-dish.jpg', '瀬戸パークの料理写真', '瀬戸パーク food photo', TABELOG_37014869, '食べログ'),
  'エコランド鵜足津': sourcePhoto('utazu-37004793-dish.jpg', 'エコランド鵜足津の料理写真', 'エコランド鵜足津 food photo', TABELOG_37004793, '食べログ'),
  'つるぎ': sourcePhoto('utazu-37002798-dish.jpg', 'つるぎの料理写真', 'つるぎ food photo', TABELOG_37002798, '食べログ'),
  '穂の香': sourcePhoto('utazu-37008588-dish.jpg', '穂の香の料理写真', '穂の香 food photo', TABELOG_37008588, '食べログ'),
};

function sight(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string,
  lat: number,
  lon: number
): FacilityRow {
  return {
    id,
    jis: UTAZU.jis,
    name_ja,
    reading: null,
    category: 'tourism',
    lat,
    lon,
    address,
    phone,
    official_url: source_url,
    hours: null,
    source_url,
    license: '町公式・公式観光サイト掲載情報',
    accessed: UTAZU.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const UTAZU_FACILITIES: readonly FacilityRow[] = [
  sight('utazu-sight-01', 'ゴールドタワー', '香川県綾歌郡宇多津町浜一番丁8番地1', '0877-49-7070', 'https://www.town.utazu.lg.jp/page/1174.html', 34.31140278, 133.80838333),
  sight('utazu-sight-02', '宇多津臨海公園', '香川県綾歌郡宇多津町浜一番丁4番地', '0877-49-0860', 'https://utazu-kanko.jp/tourism/340.html', 34.3123308, 133.8077902),
  sight('utazu-sight-03', '四国水族館', '香川県綾歌郡宇多津町浜一番丁4番地', '0877-49-4590', 'https://utazu-kanko.jp/tourism/340.html', 34.3123308, 133.8077902),
  sight('utazu-sight-04', '復元塩田', '香川県綾歌郡宇多津町浜一番丁4番地', null, 'https://utazu-kanko.jp/tourism/340.html', 34.3132520, 133.8074640),
  sight('utazu-sight-05', '宇多津駅', '香川県綾歌郡宇多津町浜五番丁', null, 'https://www.town.utazu.lg.jp/', 34.3064382, 133.8138829),
  sight('utazu-sight-06', '青ノ山', '香川県綾歌郡宇多津町', null, 'https://www.town.utazu.lg.jp/', 34.3006110, 133.8223900),
  sight('utazu-experience-01', '道の駅恋人の聖地うたづ臨海公園', '香川県綾歌郡宇多津町浜一番丁4番地', '0877-49-0860', 'https://utazu-umihotaru.jp/about/', 34.3134855, 133.8078604),
  sight('utazu-onsen-01', '宇多津グランドホテル 大浴場', '香川県綾歌郡宇多津町浜三番丁22-1', '0877-41-1000', 'https://travel.rakuten.co.jp/HOTEL/15605/gallery.html', 34.3144580, 133.8156760)
];
