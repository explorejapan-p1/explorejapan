/**
 * Tonosho Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07). JIS 37322. Eleventh Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji + Sakaide + Naoshima + Shodoshima + Zentsuji + Mitoyo + Utazu.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split).
 * Shodoshima-island twin; exclude Shodoshima Town-only landmarks (Olive Park, Kankakei, Twenty-Four Eyes, Marukin).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TONOSHO = {
  nameJa: '土庄町',
  nameEn: 'Tonosho',
  reading: 'とのしょうちょう',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'tonosho',
  jis: '37322',
  jlis: '373221',
  sameAs: 'https://www.town.tonosho.kagawa.jp/',
  hall: {
    postalCode: '761-4192',
    addressJa: '香川県小豆郡土庄町淵崎甲1400番地2',
    addressEn: 'Fuchizaki Ko 1400-2, Tonosho-cho, Shozu-gun, Kagawa 761-4192, Japan',
    phone: '0879-62-7000'
  },
  sources: {
    home: 'https://www.town.tonosho.kagawa.jp/',
    hall: 'https://www.town.tonosho.kagawa.jp/access.html',
    kankou: 'https://www.town.tonosho.kagawa.jp/kanko/',
    angel: 'https://www.town.tonosho.kagawa.jp/kanko/sightseeing/575.html',
    tabelogCity: 'https://tabelog.com/kagawa/C37322/rstLst/',
    kokusai: 'https://travel.rakuten.co.jp/HOTEL/17990/17990.html',
    greenplaza: 'https://travel.rakuten.co.jp/HOTEL/188032/188032.html',
    accessed: '2026-09-07'
  }
} as const;

export const TONOSHO_EXPECTED_ROW_COUNT = 9;
export const TONOSHO_EXPECTED_GEO_COUNT = 9;

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

/** Cover: Angel Road — strongest Tonosho landmark. */
export const TONOSHO_PLACE_PHOTO = wikiPhoto(
  'tonosho-angel-road.jpg',
  'https://commons.wikimedia.org/wiki/File:Angel_Road_Shodo_Island_Japan01s3.jpg',
  'CC BY 2.5',
  'https://creativecommons.org/licenses/by/2.5',
  '663highland',
  'https://ja.wikipedia.org/wiki/user:663highland',
  '2012-04-29',
  'エンジェルロード（香川県小豆郡土庄町）',
  'Angel Road sandbar, Tonosho, Kagawa'
);
const TABELOG_37004672 = 'https://tabelog.com/kagawa/A3705/A370501/37004672/';
const TABELOG_37014217 = 'https://tabelog.com/kagawa/A3705/A370501/37014217/';
const TABELOG_37010501 = 'https://tabelog.com/kagawa/A3705/A370501/37010501/';
const TABELOG_37006291 = 'https://tabelog.com/kagawa/A3705/A370501/37006291/';
const TABELOG_37008675 = 'https://tabelog.com/kagawa/A3705/A370501/37008675/';
const TABELOG_37005340 = 'https://tabelog.com/kagawa/A3705/A370501/37005340/';
const TABELOG_37004779 = 'https://tabelog.com/kagawa/A3705/A370501/37004779/';
const TABELOG_37006736 = 'https://tabelog.com/kagawa/A3705/A370501/37006736/';
const TABELOG_37001080 = 'https://tabelog.com/kagawa/A3705/A370501/37001080/';
const TABELOG_37005583 = 'https://tabelog.com/kagawa/A3705/A370501/37005583/';
const TABELOG_37011318 = 'https://tabelog.com/kagawa/A3705/A370501/37011318/';
const TABELOG_37007483 = 'https://tabelog.com/kagawa/A3705/A370501/37007483/';
const TABELOG_37007016 = 'https://tabelog.com/kagawa/A3705/A370501/37007016/';
const TABELOG_37005704 = 'https://tabelog.com/kagawa/A3705/A370501/37005704/';
const TABELOG_37005597 = 'https://tabelog.com/kagawa/A3705/A370501/37005597/';
const TABELOG_37000727 = 'https://tabelog.com/kagawa/A3705/A370501/37000727/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa/Shodoshima-Town Files. */
export const TONOSHO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  'エンジェルロード': TONOSHO_PLACE_PHOTO,
  '銚子渓': wikiPhoto(
    'tonosho-choshikei.jpg',
    'https://commons.wikimedia.org/wiki/File:Choshikei05bs5.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2006-10-28',
    '銚子渓（土庄町）',
    'Choshikei Gorge, Tonosho'
  ),
  '土庄港': wikiPhoto(
    'tonosho-port.jpg',
    'https://commons.wikimedia.org/wiki/File:Port_of_Tonosho_ac_(3).jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2023-11',
    '土庄港（土庄町）',
    'Tonosho Port, Tonosho'
  ),
  '迷路のまち': wikiPhoto(
    'tonosho-meiro.jpg',
    'https://commons.wikimedia.org/wiki/File:Meiro-no-machi_Tonosho_Kagawa_pref_Japan02s3.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2012-04-29',
    '迷路のまち（土庄町）',
    'Meiro-no-machi maze district, Tonosho'
  ),
  '小豆島大観音': wikiPhoto(
    'tonosho-daikannon.jpg',
    'https://commons.wikimedia.org/wiki/File:Shodoshima_Daikannon_(6453337505).jpg',
    'CC BY 2.0',
    'https://creativecommons.org/licenses/by/2.0',
    'Maarten Heerlien',
    'https://www.flickr.com/people/65847118@N06',
    '2010-09-27',
    '小豆島大観音（土庄町）',
    'Shodoshima Daikannon, Tonosho'
  ),
  '大坂城残石記念公園': wikiPhoto(
    'tonosho-zanseki.jpg',
    'https://commons.wikimedia.org/wiki/File:Stones_of_Osaka_Castle_Commemorative_Park31s3.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2012-04-28',
    '大坂城残石記念公園（土庄町）',
    'Osaka Castle Stone Memorial Park, Tonosho'
  ),
  '銚子渓自然動物園お猿の国': wikiPhoto(
    'tonosho-osaru.jpg',
    'https://commons.wikimedia.org/wiki/File:Choshikei_Monkey_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Suikotei',
    'https://commons.wikimedia.org/wiki/File:Choshikei_Monkey_01.jpg',
    '2010-05-03',
    '銚子渓自然動物園お猿の国（土庄町）',
    'Choshikei Monkey Park, Tonosho'
  ),
  '小豆島国際ホテル': sourcePhoto(
    'tonosho-stay-kokusai.jpg',
    '小豆島国際ホテルのスタンダード和洋室写真',
    'Shodoshima International Hotel standard Japanese-Western room photo',
    'https://travel.rakuten.co.jp/HOTEL/17990/gallery.html',
    '楽天トラベル'
  ),
  'ホテルグリーンプラザ小豆島': sourcePhoto(
    'tonosho-stay-greenplaza.jpg',
    'ホテルグリーンプラザ小豆島の和風ツインルーム写真',
    'Hotel Green Plaza Shodoshima Japanese-style twin room photo',
    'https://travel.rakuten.co.jp/HOTEL/188032/gallery.html',
    '楽天トラベル'
  ),
  '小豆島国際ホテル 大浴場': sourcePhoto(
    'tonosho-onsen-kokusai.jpg',
    '小豆島国際ホテルの1階大浴場「オリーブの湯」写真',
    'Shodoshima International Hotel large bath Olive-no-Yu photo',
    'https://travel.rakuten.co.jp/HOTEL/17990/gallery.html',
    '楽天トラベル'
  ),
  'ホテルグリーンプラザ小豆島 大浴場': sourcePhoto(
    'tonosho-onsen-greenplaza.jpg',
    'ホテルグリーンプラザ小豆島の大浴場写真',
    'Hotel Green Plaza Shodoshima large bath photo',
    'https://travel.rakuten.co.jp/HOTEL/188032/gallery.html',
    '楽天トラベル'
  ),
  '島活': sourcePhoto('tonosho-37004672-dish.jpg', '島活の料理写真', '島活 food photo', TABELOG_37004672, '食べログ'),
  '別邸　銀四郎': sourcePhoto('tonosho-37014217-dish.jpg', '別邸　銀四郎の料理写真', '別邸　銀四郎 food photo', TABELOG_37014217, '食べログ'),
  'ピッツァ カモス': sourcePhoto('tonosho-37010501-dish.jpg', 'ピッツァ カモスの料理写真', 'ピッツァ カモス food photo', TABELOG_37010501, '食べログ'),
  '小豆島ラーメンHISHIO 小豆島エンジェルロード店': sourcePhoto('tonosho-37006291-dish.jpg', '小豆島ラーメンHISHIO 小豆島エンジェルロード店の料理写真', '小豆島ラーメンHISHIO 小豆島エンジェルロード店 food photo', TABELOG_37006291, '食べログ'),
  '手延べ麺お食事処 銀四郎': sourcePhoto('tonosho-37008675-dish.jpg', '手延べ麺お食事処 銀四郎の料理写真', '手延べ麺お食事処 銀四郎 food photo', TABELOG_37008675, '食べログ'),
  '居酒屋 南国': sourcePhoto('tonosho-37005340-dish.jpg', '居酒屋 南国の料理写真', '居酒屋 南国 food photo', TABELOG_37005340, '食べログ'),
  '味彩': sourcePhoto('tonosho-37004779-dish.jpg', '味彩の料理写真', '味彩 food photo', TABELOG_37004779, '食べログ'),
  'オアシス': sourcePhoto('tonosho-37006736-dish.jpg', 'オアシスの料理写真', 'オアシス food photo', TABELOG_37006736, '食べログ'),
  '來家': sourcePhoto('tonosho-37001080-dish.jpg', '來家の料理写真', '來家 food photo', TABELOG_37001080, '食べログ'),
  'おおみねのうどん屋さん': sourcePhoto('tonosho-37005583-dish.jpg', 'おおみねのうどん屋さんの料理写真', 'おおみねのうどん屋さん food photo', TABELOG_37005583, '食べログ'),
  '宝来軒': sourcePhoto('tonosho-37011318-dish.jpg', '宝来軒の料理写真', '宝来軒 food photo', TABELOG_37011318, '食べログ'),
  '海のレストラン': sourcePhoto('tonosho-37007483-dish.jpg', '海のレストランの料理写真', '海のレストラン food photo', TABELOG_37007483, '食べログ'),
  '海蘆': sourcePhoto('tonosho-37007016-dish.jpg', '海蘆の料理写真', '海蘆 food photo', TABELOG_37007016, '食べログ'),
  '本格中国料理　錦華': sourcePhoto('tonosho-37005704-dish.jpg', '本格中国料理　錦華の料理写真', '本格中国料理　錦華 food photo', TABELOG_37005704, '食べログ'),
  'なぎさ': sourcePhoto('tonosho-37005597-dish.jpg', 'なぎさの料理写真', 'なぎさ food photo', TABELOG_37005597, '食べログ'),
  '料理芸術 かりえん': sourcePhoto('tonosho-37000727-dish.jpg', '料理芸術 かりえんの料理写真', '料理芸術 かりえん food photo', TABELOG_37000727, '食べログ'),
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
    jis: TONOSHO.jis,
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
    accessed: TONOSHO.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const TONOSHO_FACILITIES: readonly FacilityRow[] = [
  sight('tonosho-sight-01', 'エンジェルロード', '香川県小豆郡土庄町甲24-92', null, 'https://www.town.tonosho.kagawa.jp/kanko/sightseeing/575.html', 34.4776107, 134.1886468),
  sight('tonosho-sight-02', '銚子渓', '香川県小豆郡土庄町肥土山1341', '0879-82-1775', 'https://www.town.tonosho.kagawa.jp/kanko/', 34.5145000, 134.2420000),
  sight('tonosho-sight-03', '土庄港', '香川県小豆郡土庄町甲6194', null, 'https://www.town.tonosho.kagawa.jp/', 34.4890145, 134.1720787),
  sight('tonosho-sight-04', '迷路のまち', '香川県小豆郡土庄町淵崎', null, 'https://www.town.tonosho.kagawa.jp/kanko/', 34.4845640, 134.1864820),
  sight('tonosho-sight-05', '小豆島大観音', '香川県小豆郡土庄町小海甲1723-8', '0879-62-0787', 'https://www.town.tonosho.kagawa.jp/kanko/', 34.51190278, 134.21314722),
  sight('tonosho-sight-06', '大坂城残石記念公園', '香川県小豆郡土庄町小海甲909-1', '0879-67-2341', 'https://www.town.tonosho.kagawa.jp/kanko/', 34.5338978, 134.2425788),
  sight('tonosho-experience-01', '銚子渓自然動物園お猿の国', '香川県小豆郡土庄町肥土山蛙子3387-10', '0879-62-0768', 'http://www.osaru-no-kuni.sakura.ne.jp/', 34.5153878, 134.2426350),
  sight('tonosho-onsen-01', '小豆島国際ホテル 大浴場', '香川県小豆郡土庄町甲24-67', '0879-62-2111', 'https://travel.rakuten.co.jp/HOTEL/17990/gallery.html', 34.4791706, 134.1880000),
  sight('tonosho-onsen-02', 'ホテルグリーンプラザ小豆島 大浴場', '香川県小豆郡土庄町伊喜末2464', '0879-62-8161', 'https://travel.rakuten.co.jp/HOTEL/188032/gallery.html', 34.4996493, 134.1676139)
];
