/**
 * Mitoyo City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37208. Ninth Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji + Sakaide + Naoshima + Shodoshima + Zentsuji.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split) + Commons michinoeki experience.
 * Note: 高屋神社・天空の鳥居 is Kanonji (already LIVE) — not double-counted here.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MITOYO = {
  nameJa: '三豊市',
  nameEn: 'Mitoyo',
  reading: 'みとよし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'mitoyo',
  jis: '37208',
  jlis: '372080',
  sameAs: 'https://www.city.mitoyo.lg.jp/',
  hall: {
    postalCode: '767-8585',
    addressJa: '香川県三豊市高瀬町下勝間2373番地1',
    addressEn: '2373-1 Shimokatsuma, Takase-cho, Mitoyo, Kagawa 767-8585, Japan',
    phone: '0875-73-3000'
  },
  sources: {
    home: 'https://www.city.mitoyo.lg.jp/',
    hall: 'https://www.city.mitoyo.lg.jp/',
    kankou: 'https://www.mitoyo-kanko.com/',
    chichibu: 'https://www.mitoyo-kanko.com/chichibugahama/',
    tabelogCity: 'https://tabelog.com/kagawa/C37208/rstLst/',
    lepaule: 'https://travel.rakuten.co.jp/HOTEL/140762/140762.html',
    mino: 'https://travel.rakuten.co.jp/HOTEL/136191/136191.html',
    accessed: '2026-09-07'
  }
} as const;

export const MITOYO_EXPECTED_ROW_COUNT = 11;
export const MITOYO_EXPECTED_GEO_COUNT = 11;

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

/** Cover: Chichibugahama mirror beach — strongest Mitoyo landmark. */
export const MITOYO_PLACE_PHOTO = wikiPhoto(
  'mitoyo-chichibugahama.jpg',
  'https://commons.wikimedia.org/wiki/File:Titibugahama_20230718_1.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  'Araiyasushige',
  'https://commons.wikimedia.org/wiki/User:Araiyasushige',
  '2023-07-18',
  '父母ヶ浜の干潟と空の映り込み（三豊市仁尾町）',
  'Chichibugahama tidal flats reflecting the sky, Nio, Mitoyo'
);

const TABELOG_37013446 = 'https://tabelog.com/kagawa/A3703/A370303/37013446/';
const TABELOG_37010021 = 'https://tabelog.com/kagawa/A3703/A370303/37010021/';
const TABELOG_37007909 = 'https://tabelog.com/kagawa/A3703/A370303/37007909/';
const TABELOG_37006145 = 'https://tabelog.com/kagawa/A3703/A370303/37006145/';
const TABELOG_37009271 = 'https://tabelog.com/kagawa/A3703/A370303/37009271/';
const TABELOG_37005581 = 'https://tabelog.com/kagawa/A3703/A370303/37005581/';
const TABELOG_37000093 = 'https://tabelog.com/kagawa/A3703/A370303/37000093/';
const TABELOG_37001870 = 'https://tabelog.com/kagawa/A3703/A370303/37001870/';
const TABELOG_37006870 = 'https://tabelog.com/kagawa/A3703/A370303/37006870/';
const TABELOG_37003972 = 'https://tabelog.com/kagawa/A3703/A370303/37003972/';
const TABELOG_37009564 = 'https://tabelog.com/kagawa/A3703/A370303/37009564/';
const TABELOG_37011445 = 'https://tabelog.com/kagawa/A3703/A370303/37011445/';
const TABELOG_37003311 = 'https://tabelog.com/kagawa/A3703/A370303/37003311/';
const TABELOG_37003264 = 'https://tabelog.com/kagawa/A3703/A370303/37003264/';
const TABELOG_37012794 = 'https://tabelog.com/kagawa/A3703/A370303/37012794/';
const TABELOG_37002004 = 'https://tabelog.com/kagawa/A3703/A370303/37002004/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa Files. */
export const MITOYO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '父母ヶ浜': MITOYO_PLACE_PHOTO,
  '紫雲出山': wikiPhoto(
    'mitoyo-shiude.jpg',
    'https://commons.wikimedia.org/wiki/File:Siundeyama_20200407_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2020-04-07',
    '紫雲出山からの瀬戸内海の眺め（三豊市）',
    'Seto Inland Sea view from Mount Shiude, Mitoyo'
  ),
  '本山寺': wikiPhoto(
    'mitoyo-motoyamaji.jpg',
    'https://commons.wikimedia.org/wiki/File:Motoyama-ji,_Nio_Gate_001.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2017-06-08',
    '四国八十八箇所第70番札所 本山寺の仁王門（三豊市）',
    'Niō Gate of Motoyama-ji (Shikoku pilgrimage temple 70), Mitoyo'
  ),
  '弥谷寺': wikiPhoto(
    'mitoyo-iyadaniji.jpg',
    'https://commons.wikimedia.org/wiki/File:Iyadani-ji,_108Stairs_001.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-05-04',
    '四国八十八箇所第71番札所 弥谷寺の百八段（三豊市）',
    '108 stone steps at Iyadani-ji (Shikoku pilgrimage temple 71), Mitoyo'
  ),
  '大興寺': wikiPhoto(
    'mitoyo-daikoji.jpg',
    'https://commons.wikimedia.org/wiki/File:Daikouji20220316_1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2022-03-16',
    '四国八十八箇所第67番札所 大興寺（三豊市）',
    'Daikō-ji (Shikoku pilgrimage temple 67), Mitoyo'
  ),
  '津嶋神社': wikiPhoto(
    'mitoyo-tsushima.jpg',
    'https://commons.wikimedia.org/wiki/File:Tsushima_Shrine,_Mitoyo.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'RadishSlice',
    'https://commons.wikimedia.org/wiki/User:RadishSlice',
    '2017-08-03',
    '津嶋神社（三豊市）',
    'Tsushima Shrine, Mitoyo'
  ),
  '詫間駅': wikiPhoto(
    'mitoyo-takuma-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Takuma_Station_March_31_2021_various.jpeg',
    'CC BY 4.0',
    'https://creativecommons.org/licenses/by/4.0',
    'Nesnad',
    'https://commons.wikimedia.org/wiki/User:Nesnad',
    '2021-03-31',
    'JR予讃線 詫間駅（三豊市）',
    'Takuma Station on the Yosan Line, Mitoyo'
  ),
  '不動の滝': wikiPhoto(
    'mitoyo-fudonotaki.jpg',
    'https://commons.wikimedia.org/wiki/File:Hudounotaki_20200407_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2020-04-07',
    '不動の滝（三豊市）',
    'Fudō Falls, Mitoyo'
  ),
  '道の駅たからだのさと': wikiPhoto(
    'mitoyo-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E3%81%9F%E3%81%8B%E3%82%89%E3%81%A0%E3%81%AE%E3%81%95%E3%81%A8.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E3%81%9F%E3%81%8B%E3%82%89%E3%81%A0%E3%81%AE%E3%81%95%E3%81%A8.jpg',
    '2010',
    '道の駅たからだのさと（三豊市財田町）',
    'Michinoeki Takara-da-no-sato, Mitoyo'
  ),
  'ル・ポール粟島': sourcePhoto(
    'mitoyo-stay-lepaule.jpg',
    'ル・ポール粟島のキャビン室内写真',
    'Le Port Awashima cabin interior photo',
    'https://travel.rakuten.co.jp/HOTEL/140762/gallery.html',
    '楽天トラベル'
  ),
  '天然いやだに温泉大師の湯ふれあいパークみの': sourcePhoto(
    'mitoyo-stay-mino.jpg',
    'ふれあいパークみのの宿泊室写真',
    'Fureai Park Mino guest room photo',
    'https://travel.rakuten.co.jp/HOTEL/136191/gallery.html',
    '楽天トラベル'
  ),
  'ル・ポール粟島 大浴場': sourcePhoto(
    'mitoyo-onsen-lepaule.jpg',
    'ル・ポール粟島の大浴場写真',
    'Le Port Awashima large bath photo',
    'https://travel.rakuten.co.jp/HOTEL/140762/gallery.html',
    '楽天トラベル'
  ),
  'ふれあいパークみの 露天風呂': sourcePhoto(
    'mitoyo-onsen-mino.jpg',
    'ふれあいパークみの男性露天風呂写真',
    'Fureai Park Mino open-air bath photo',
    'https://travel.rakuten.co.jp/HOTEL/136191/gallery.html',
    '楽天トラベル'
  ),
  '瀬戸内料理 かど家': sourcePhoto('mitoyo-37013446-dish.jpg', '瀬戸内料理 かど家の料理写真', '瀬戸内料理 かど家 food photo', TABELOG_37013446, '食べログ'),
  '居酒屋一心': sourcePhoto('mitoyo-37010021-dish.jpg', '居酒屋一心の料理写真', '居酒屋一心 food photo', TABELOG_37010021, '食べログ'),
  '豚太郎 詫間店': sourcePhoto('mitoyo-37007909-dish.jpg', '豚太郎 詫間店の料理写真', '豚太郎 詫間店 food photo', TABELOG_37007909, '食べログ'),
  '呆呑': sourcePhoto('mitoyo-37006145-dish.jpg', '呆呑の料理写真', '呆呑 food photo', TABELOG_37006145, '食べログ'),
  '台湾料理 順鑫閣': sourcePhoto('mitoyo-37009271-dish.jpg', '台湾料理 順鑫閣の料理写真', '台湾料理 順鑫閣 food photo', TABELOG_37009271, '食べログ'),
  'こがね製麺所 高瀬店': sourcePhoto('mitoyo-37005581-dish.jpg', 'こがね製麺所 高瀬店の料理写真', 'こがね製麺所 高瀬店 food photo', TABELOG_37005581, '食べログ'),
  '手打うどん 渡辺': sourcePhoto('mitoyo-37000093-dish.jpg', '手打うどん 渡辺の料理写真', '手打うどん 渡辺 food photo', TABELOG_37000093, '食べログ'),
  'とくしげ': sourcePhoto('mitoyo-37001870-dish.jpg', 'とくしげの料理写真', 'とくしげ food photo', TABELOG_37001870, '食べログ'),
  '武蔵 詫間店': sourcePhoto('mitoyo-37006870-dish.jpg', '武蔵 詫間店の料理写真', '武蔵 詫間店 food photo', TABELOG_37006870, '食べログ'),
  '千明': sourcePhoto('mitoyo-37003972-dish.jpg', '千明の料理写真', '千明 food photo', TABELOG_37003972, '食べログ'),
  '浜堂ラーメン': sourcePhoto('mitoyo-37009564-dish.jpg', '浜堂ラーメンの料理写真', '浜堂ラーメン food photo', TABELOG_37009564, '食べログ'),
  'ピッツァ エ バール テンピオ': sourcePhoto('mitoyo-37011445-dish.jpg', 'ピッツァ エ バール テンピオの料理写真', 'ピッツァ エ バール テンピオ food photo', TABELOG_37011445, '食べログ'),
  'curry 冬椿': sourcePhoto('mitoyo-37003311-dish.jpg', 'curry 冬椿の料理写真', 'curry 冬椿 food photo', TABELOG_37003311, '食べログ'),
  '海鮮 夢太郎': sourcePhoto('mitoyo-37003264-dish.jpg', '海鮮 夢太郎の料理写真', '海鮮 夢太郎 food photo', TABELOG_37003264, '食べログ'),
  '焼肉丼 炙り一番 ゆめタウン三豊店': sourcePhoto('mitoyo-37012794-dish.jpg', '焼肉丼 炙り一番 ゆめタウン三豊店の料理写真', '焼肉丼 炙り一番 ゆめタウン三豊店 food photo', TABELOG_37012794, '食べログ'),
  '鉄平': sourcePhoto('mitoyo-37002004-dish.jpg', '鉄平の料理写真', '鉄平 food photo', TABELOG_37002004, '食べログ'),
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
    jis: MITOYO.jis,
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
    license: '市公式・公式観光サイト掲載情報',
    accessed: MITOYO.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const MITOYO_FACILITIES: readonly FacilityRow[] = [
  sight('mitoyo-sight-01', '父母ヶ浜', '香川県三豊市仁尾町仁尾乙273-1', '0875-56-5880', 'https://www.mitoyo-kanko.com/chichibugahama/', 34.18833, 133.64908),
  sight('mitoyo-sight-02', '紫雲出山', '香川県三豊市詫間町大浜乙451-1', '0875-84-7896', 'https://www.mitoyo-kanko.com/facility/mt-shiude_02/', 34.243653, 133.595763),
  sight('mitoyo-sight-03', '本山寺', '香川県三豊市豊中町本山甲1445', '0875-62-2005', 'https://www.mitoyo-kanko.com/', 34.139667, 133.694056),
  sight('mitoyo-sight-04', '弥谷寺', '香川県三豊市三野町大見乙70', '0875-72-3446', 'https://www.mitoyo-kanko.com/', 34.229722, 133.724261),
  sight('mitoyo-sight-05', '大興寺', '香川県三豊市山本町辻234', '0875-63-0123', 'https://www.mitoyo-kanko.com/', 34.10218, 133.71916),
  sight('mitoyo-sight-06', '津嶋神社', '香川県三豊市三野町津島', null, 'https://www.mitoyo-kanko.com/', 34.239333, 133.704908),
  sight('mitoyo-sight-07', '詫間駅', '香川県三豊市詫間町松崎', null, 'https://www.city.mitoyo.lg.jp/', 34.220825, 133.692736),
  sight('mitoyo-sight-08', '不動の滝', '香川県三豊市', null, 'https://www.mitoyo-kanko.com/', 34.150860, 133.672165),
  sight('mitoyo-experience-01', '道の駅たからだのさと', '香川県三豊市財田町財田中2586-2', '0875-67-2611', 'https://www.mitoyo-kanko.com/', 34.11017, 133.79794),
  sight('mitoyo-onsen-01', 'ル・ポール粟島 大浴場', '香川県三豊市詫間町粟島1418-2', '0875-84-7878', 'https://travel.rakuten.co.jp/HOTEL/140762/gallery.html', 34.268953, 133.631634),
  sight('mitoyo-onsen-02', 'ふれあいパークみの 露天風呂', '香川県三豊市三野町大見乙74', '0875-72-2601', 'https://travel.rakuten.co.jp/HOTEL/136191/gallery.html', 34.226482, 133.722538)
];
