/**
 * Shodoshima Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07). JIS 37324. Seventh Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji + Sakaide + Naoshima.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split).
 * Exclude Tonosho-only landmarks (Angel Road, Choshikei, Green Plaza).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SHODOSHIMA = {
  nameJa: '小豆島町',
  nameEn: 'Shodoshima Town',
  reading: 'しょうどしまちょう',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'shodoshima',
  jis: '37324',
  jlis: '373249',
  sameAs: 'https://www.town.shodoshima.lg.jp/',
  hall: {
    postalCode: '761-4492',
    addressJa: '香川県小豆郡小豆島町片城甲44番地95',
    addressEn: 'Katashiro Ko 44-95, Shodoshima-cho, Shozu-gun, Kagawa 761-4492, Japan',
    phone: '0879-82-7000'
  },
  sources: {
    home: 'https://www.town.shodoshima.lg.jp/',
    hall: 'https://www.town.shodoshima.lg.jp/gyousei/choseijoho/shisetsu/3178.html',
    kankou: 'https://www.town.shodoshima.lg.jp/kanko/index.html',
    olive: 'https://www.olive-pk.jp/',
    kankakei: 'https://www.kankakei.co.jp/',
    nijushi: 'https://www.24hitomi.or.jp/',
    marukin: 'https://marukin.moritakk.com/kinenkan/',
    tabelogCity: 'https://tabelog.com/kagawa/C37324/rstLst/',
    kokumin: 'https://travel.rakuten.co.jp/HOTEL/28288/28288.html',
    bay: 'https://travel.rakuten.co.jp/HOTEL/44874/44874.html',
    accessed: '2026-09-07'
  }
} as const;

export const SHODOSHIMA_EXPECTED_ROW_COUNT = 9;
export const SHODOSHIMA_EXPECTED_GEO_COUNT = 9;

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

/** Cover: Olive Park Greek windmill — strongest Shodoshima Town landmark. */
export const SHODOSHIMA_PLACE_PHOTO = wikiPhoto(
  'shodoshima-olive-park.jpg',
  'https://commons.wikimedia.org/wiki/File:Shodoshima_Olive_Park_Shodo_Island_Japan21bs3.jpg',
  'CC BY 2.5',
  'https://creativecommons.org/licenses/by/2.5',
  '663highland',
  'https://ja.wikipedia.org/wiki/user:663highland',
  '2012-04-28',
  '道の駅 小豆島オリーブ公園のギリシャ風車（小豆島町）',
  'Greek windmill at Shodoshima Olive Park, Shodoshima Town'
);

const TABELOG_37009234 = 'https://tabelog.com/kagawa/A3705/A370501/37009234/';
const TABELOG_37014264 = 'https://tabelog.com/kagawa/A3705/A370501/37014264/';
const TABELOG_37009288 = 'https://tabelog.com/kagawa/A3705/A370501/37009288/';
const TABELOG_37006253 = 'https://tabelog.com/kagawa/A3705/A370501/37006253/';
const TABELOG_37010531 = 'https://tabelog.com/kagawa/A3705/A370501/37010531/';
const TABELOG_37002315 = 'https://tabelog.com/kagawa/A3705/A370501/37002315/';
const TABELOG_37010080 = 'https://tabelog.com/kagawa/A3705/A370501/37010080/';
const TABELOG_37014909 = 'https://tabelog.com/kagawa/A3705/A370501/37014909/';
const TABELOG_37006455 = 'https://tabelog.com/kagawa/A3705/A370501/37006455/';
const TABELOG_37013004 = 'https://tabelog.com/kagawa/A3705/A370501/37013004/';
const TABELOG_37005612 = 'https://tabelog.com/kagawa/A3705/A370501/37005612/';
const TABELOG_37009414 = 'https://tabelog.com/kagawa/A3705/A370501/37009414/';
const TABELOG_37010812 = 'https://tabelog.com/kagawa/A3705/A370501/37010812/';
const TABELOG_37009538 = 'https://tabelog.com/kagawa/A3705/A370501/37009538/';
const TABELOG_37014756 = 'https://tabelog.com/kagawa/A3705/A370501/37014756/';
const TABELOG_37012485 = 'https://tabelog.com/kagawa/A3705/A370501/37012485/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa/Tonosho Files. */
export const SHODOSHIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '道の駅 小豆島オリーブ公園': SHODOSHIMA_PLACE_PHOTO,
  '寒霞渓': wikiPhoto(
    'shodoshima-kankakei.jpg',
    'https://commons.wikimedia.org/wiki/File:201211Kankakei_Shodoshima_Kagawa_pref_Japan08s3.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2012-11-22',
    '寒霞渓（小豆島町）',
    'Kankakei Gorge, Shodoshima Town'
  ),
  '二十四の瞳映画村': wikiPhoto(
    'shodoshima-nijushi.jpg',
    'https://commons.wikimedia.org/wiki/File:201211_Twenty-four_eyes22s3.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2012-11-24',
    '二十四の瞳映画村（小豆島町）',
    'Twenty-Four Eyes Movie Village, Shodoshima Town'
  ),
  'マルキン醤油記念館': wikiPhoto(
    'shodoshima-marukin.jpg',
    'https://commons.wikimedia.org/wiki/File:Marukin_Soy_Sauce_ac_(1).jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2023-11',
    'マルキン醤油記念館（小豆島町）',
    'Marukin Soy Sauce Museum, Shodoshima Town'
  ),
  '草壁港': wikiPhoto(
    'shodoshima-kusakabe.jpg',
    'https://commons.wikimedia.org/wiki/File:Kusakabe_Port_Shodoshima_Kagawa_pref_Japan01s3.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2012-11-22',
    '草壁港（小豆島町）',
    'Kusakabe Port, Shodoshima Town'
  ),
  '福田港': wikiPhoto(
    'shodoshima-fukuda.jpg',
    'https://commons.wikimedia.org/wiki/File:Fukuda_port_in_Shodoshima,_Kagawa_pref_Japan(22850714847).jpg',
    'CC BY 2.0',
    'https://creativecommons.org/licenses/by/2.0',
    'hiropiro.',
    'https://commons.wikimedia.org/wiki/File:Fukuda_port_in_Shodoshima,_Kagawa_pref_Japan(22850714847).jpg',
    '2015-08-18',
    '福田港（小豆島町）',
    'Fukuda Port, Shodoshima Town'
  ),
  '寒霞渓ロープウェイ': wikiPhoto(
    'shodoshima-kankakei-ropeway.jpg',
    'https://commons.wikimedia.org/wiki/File:Kankakei_Ropeway.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    '藤谷良秀',
    'https://commons.wikimedia.org/wiki/File:Kankakei_Ropeway.jpg',
    '2012-08-24',
    '寒霞渓ロープウェイ（小豆島町）',
    'Kankakei Ropeway, Shodoshima Town'
  ),
  '国民宿舎 小豆島': sourcePhoto(
    'shodoshima-stay-kokumin.jpg',
    '国民宿舎 小豆島の客室写真（本館デラックスルーム）',
    'Kokuminshukusha Shodoshima deluxe room photo',
    'https://travel.rakuten.co.jp/HOTEL/28288/gallery.html',
    '楽天トラベル'
  ),
  'ベイリゾートホテル小豆島': sourcePhoto(
    'shodoshima-stay-bay.jpg',
    'ベイリゾートホテル小豆島の客室写真（モダンツイン）',
    'Bay Resort Hotel Shodoshima Modern Twin room photo',
    'https://travel.rakuten.co.jp/HOTEL/44874/gallery.html',
    '楽天トラベル'
  ),
  '国民宿舎 小豆島 大浴場': sourcePhoto(
    'shodoshima-onsen-kokumin.jpg',
    '国民宿舎 小豆島の大浴場写真',
    'Kokuminshukusha Shodoshima large bath photo',
    'https://travel.rakuten.co.jp/HOTEL/28288/gallery.html',
    '楽天トラベル'
  ),
  'ベイリゾートホテル小豆島 しょうどしま温泉': sourcePhoto(
    'shodoshima-onsen-bay.jpg',
    'ベイリゾートホテル小豆島のしょうどしま温泉・展望大浴場写真',
    'Bay Resort Hotel Shodoshima Shodoshima Onsen panoramic bath photo',
    'https://travel.rakuten.co.jp/HOTEL/44874/gallery.html',
    '楽天トラベル'
  ),
  '井上誠耕園 ファームズテーブル 忠左衛門': sourcePhoto('shodoshima-37009234-dish.jpg', '井上誠耕園 ファームズテーブル 忠左衛門の料理写真', '井上誠耕園 ファームズテーブル 忠左衛門 food photo', TABELOG_37009234, '食べログ'),
  'cultiva': sourcePhoto('shodoshima-37014264-dish.jpg', 'cultivaの料理写真', 'cultiva food photo', TABELOG_37014264, '食べログ'),
  '木原食堂': sourcePhoto('shodoshima-37009288-dish.jpg', '木原食堂の料理写真', '木原食堂 food photo', TABELOG_37009288, '食べログ'),
  'オリーブパレス レストレア': sourcePhoto('shodoshima-37006253-dish.jpg', 'オリーブパレス レストレアの料理写真', 'オリーブパレス レストレア food photo', TABELOG_37006253, '食べログ'),
  'さんばし食堂': sourcePhoto('shodoshima-37010531-dish.jpg', 'さんばし食堂の料理写真', 'さんばし食堂 food photo', TABELOG_37010531, '食べログ'),
  '松亭': sourcePhoto('shodoshima-37002315-dish.jpg', '松亭の料理写真', '松亭 food photo', TABELOG_37002315, '食べログ'),
  'マザーズ': sourcePhoto('shodoshima-37010080-dish.jpg', 'マザーズの料理写真', 'マザーズ food photo', TABELOG_37010080, '食べログ'),
  'MENTETSU 忠左衛門': sourcePhoto('shodoshima-37014909-dish.jpg', 'MENTETSU 忠左衛門の料理写真', 'MENTETSU 忠左衛門 food photo', TABELOG_37014909, '食べログ'),
  'サン・オリーブ': sourcePhoto('shodoshima-37006455-dish.jpg', 'サン・オリーブの料理写真', 'サン・オリーブ food photo', TABELOG_37006455, '食べログ'),
  'ガバチョ': sourcePhoto('shodoshima-37013004-dish.jpg', 'ガバチョの料理写真', 'ガバチョ food photo', TABELOG_37013004, '食べログ'),
  'こまめ食堂': sourcePhoto('shodoshima-37005612-dish.jpg', 'こまめ食堂の料理写真', 'こまめ食堂 food photo', TABELOG_37005612, '食べログ'),
  '大ちゃん': sourcePhoto('shodoshima-37009414-dish.jpg', '大ちゃんの料理写真', '大ちゃん food photo', TABELOG_37009414, '食べログ'),
  '海鮮居酒屋 益丸': sourcePhoto('shodoshima-37010812-dish.jpg', '海鮮居酒屋 益丸の料理写真', '海鮮居酒屋 益丸 food photo', TABELOG_37010812, '食べログ'),
  '創作郷土料理 暦こよみ': sourcePhoto('shodoshima-37009538-dish.jpg', '創作郷土料理 暦こよみの料理写真', '創作郷土料理 暦こよみ food photo', TABELOG_37009538, '食べログ'),
  'edén 瀬戸内小豆島': sourcePhoto('shodoshima-37014756-dish.jpg', 'edén 瀬戸内小豆島の料理写真', 'edén 瀬戸内小豆島 food photo', TABELOG_37014756, '食べログ'),
  '平和堂 本店': sourcePhoto('shodoshima-37012485-dish.jpg', '平和堂 本店の料理写真', '平和堂 本店 food photo', TABELOG_37012485, '食べログ'),
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
    jis: SHODOSHIMA.jis,
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
    accessed: SHODOSHIMA.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const SHODOSHIMA_FACILITIES: readonly FacilityRow[] = [
  sight('shodoshima-sight-01', '道の駅 小豆島オリーブ公園', '香川県小豆郡小豆島町西村甲1941-1', '0879-82-2200', 'https://www.olive-pk.jp/', 34.47243, 134.27413),
  sight('shodoshima-sight-02', '寒霞渓', '香川県小豆郡小豆島町神懸通', null, 'https://www.kankakei.co.jp/', 34.51565, 134.30036),
  sight('shodoshima-sight-03', '二十四の瞳映画村', '香川県小豆郡小豆島町田浦甲931', '0879-82-2455', 'https://www.24hitomi.or.jp/', 34.44546, 134.28555),
  sight('shodoshima-sight-04', 'マルキン醤油記念館', '香川県小豆郡小豆島町苗羽甲1850', '0879-82-0047', 'https://marukin.moritakk.com/kinenkan/', 34.46708, 134.31939),
  sight('shodoshima-sight-05', '草壁港', '香川県小豆郡小豆島町草壁本町', null, 'https://www.town.shodoshima.lg.jp/kanko/index.html', 34.47920, 134.29941),
  sight('shodoshima-sight-06', '福田港', '香川県小豆郡小豆島町福田', null, 'https://www.town.shodoshima.lg.jp/kanko/index.html', 34.54346, 134.34463),
  sight('shodoshima-exp-01', '寒霞渓ロープウェイ', '香川県小豆郡小豆島町神懸通乙168', '0879-82-2171', 'https://www.kankakei.co.jp/', 34.51210, 134.29850),
  sight('shodoshima-onsen-01', '国民宿舎 小豆島 大浴場', '香川県小豆郡小豆島町池田1500-4', '0879-75-1115', 'https://travel.rakuten.co.jp/HOTEL/28288/gallery.html', 34.47203, 134.23122),
  sight('shodoshima-onsen-02', 'ベイリゾートホテル小豆島 しょうどしま温泉', '香川県小豆郡小豆島町古江乙16-3', '0879-82-5000', 'https://travel.rakuten.co.jp/HOTEL/44874/gallery.html', 34.46168, 134.31657)
];
