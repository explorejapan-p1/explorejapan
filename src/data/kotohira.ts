/**
 * Kotohira Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07). JIS 37403. Second Kagawa hub after Takamatsu.
 * No frozen pack — photo-only tourism + Tabelog dining + official stay/onsen.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KOTOHIRA = {
  nameJa: '琴平町',
  nameEn: 'Kotohira Town',
  reading: 'ことひらちょう',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'kotohira',
  jis: '37403',
  jlis: '374032',
  sameAs: 'https://www.town.kotohira.kagawa.jp/',
  hall: {
    postalCode: '766-8502',
    addressJa: '香川県仲多度郡琴平町榎井817番地10',
    addressEn: '817-10 Enai, Kotohira, Nakatado, Kagawa 766-8502, Japan',
    phone: '0877-75-6700'
  },
  sources: {
    home: 'https://www.town.kotohira.kagawa.jp/',
    hall: 'https://www.town.kotohira.kagawa.jp/soshiki/2.html',
    kanko: 'https://www.town.kotohira.kagawa.jp/soshiki/8/',
    konpira: 'https://www.konpira.or.jp/',
    kanamaruza: 'https://www.town.kotohira.kagawa.jp/',
    kotosankaku: 'https://www.kotosankaku.jp/',
    shikishima: 'https://dormy-hotels.com/resort/hotels/shikishimakan/',
    tabelogCity: 'https://tabelog.com/kagawa/C37403/rstLst/',
    accessed: '2026-09-07'
  }
} as const;

export const KOTOHIRA_EXPECTED_ROW_COUNT = 8;
export const KOTOHIRA_EXPECTED_GEO_COUNT = 8;

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

/** Cover: 金刀比羅宮 — strongest Kotohira landmark. */
export const KOTOHIRA_PLACE_PHOTO = wikiPhoto(
  'kotohira-konpira.jpg',
  'https://commons.wikimedia.org/wiki/File:Kotohira-gu_(52005367223).jpg',
  'CC BY 2.0',
  'https://creativecommons.org/licenses/by/2.0',
  'Raita Futo',
  'https://commons.wikimedia.org/wiki/User:Raita_Futo',
  '2020-09-19',
  '金刀比羅宮（琴平町）',
  'Kotohira-gū shrine, Kotohira'
);

const TABELOG_37013981 = "https://tabelog.com/kagawa/A3703/A370302/37013981/";
const TABELOG_37014191 = "https://tabelog.com/kagawa/A3703/A370302/37014191/";
const TABELOG_37014974 = "https://tabelog.com/kagawa/A3703/A370302/37014974/";
const TABELOG_37013126 = "https://tabelog.com/kagawa/A3703/A370302/37013126/";
const TABELOG_37009828 = "https://tabelog.com/kagawa/A3703/A370302/37009828/";
const TABELOG_37012280 = "https://tabelog.com/kagawa/A3703/A370302/37012280/";
const TABELOG_37005602 = "https://tabelog.com/kagawa/A3703/A370302/37005602/";
const TABELOG_37002236 = "https://tabelog.com/kagawa/A3703/A370302/37002236/";
const TABELOG_37008131 = "https://tabelog.com/kagawa/A3703/A370302/37008131/";
const TABELOG_37000906 = "https://tabelog.com/kagawa/A3703/A370302/37000906/";
const TABELOG_37000722 = "https://tabelog.com/kagawa/A3703/A370302/37000722/";
const TABELOG_37007797 = "https://tabelog.com/kagawa/A3703/A370302/37007797/";

/** Exact travel/sight name_ja only. No Tokushima Files. */
export const KOTOHIRA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '金刀比羅宮': KOTOHIRA_PLACE_PHOTO,
  '旭社': wikiPhoto(
    'kotohira-asahi-sha.jpg',
    'https://commons.wikimedia.org/wiki/File:Asahi-sha_Kotohira-gu01s5s3999.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2010-09-19',
    '金刀比羅宮・旭社（琴平町）',
    'Asahi-sha hall at Kotohira-gū, Kotohira'
  ),
  '金刀比羅宮表参道': wikiPhoto(
    'kotohira-omotesando.jpg',
    'https://commons.wikimedia.org/wiki/File:Omotesando_of_Kotohira-gu12n4500.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2010-09-19',
    '金刀比羅宮表参道（琴平町）',
    'Omotesandō approach to Kotohira-gū, Kotohira'
  ),
  '鞘橋': wikiPhoto(
    'kotohira-saya-bridge.jpg',
    'https://commons.wikimedia.org/wiki/File:Saya-bridge_Kotohira_Kagawa_pref01s3s4500.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2010-09-19',
    '鞘橋（琴平町）',
    'Saya Bridge, Kotohira'
  ),
  '高灯篭': wikiPhoto(
    'kotohira-takatourou.jpg',
    'https://commons.wikimedia.org/wiki/File:Takatourou-Kotohira01.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Toto-tarou',
    'https://commons.wikimedia.org/wiki/User:Toto-tarou',
    '2010-07',
    '高灯篭（琴平町）',
    'Takatōrō lantern tower, Kotohira'
  ),
  '旧金毘羅大芝居': wikiPhoto(
    'kotohira-kanamaruza.jpg',
    'https://commons.wikimedia.org/wiki/File:Former_Konpira-ooshibai01n3999.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2010-09-19',
    '旧金毘羅大芝居・金丸座（琴平町）',
    'Former Konpira Grand Theatre (Kanamaruza), Kotohira'
  ),
  'ことひら温泉 琴参閣': sourcePhoto(
    'kotohira-stay-kotosankaku.jpg',
    'ことひら温泉 琴参閣の客室写真',
    'Kotosankaku room photo',
    'https://www.kotosankaku.jp/rooms/',
    '公式サイト'
  ),
  'ことひら温泉 御宿 敷島館': sourcePhoto(
    'kotohira-stay-shikishima.jpg',
    'ことひら温泉 御宿 敷島館の客室写真',
    'Shikishimakan room photo',
    'https://dormy-hotels.com/resort/hotels/shikishimakan/rooms/',
    '公式サイト'
  ),

  "大衆焼肉骨付鳥 金牛 琴平店": sourcePhoto(
    "kotohira-37013981-dish.jpg",
    "大衆焼肉骨付鳥 金牛 琴平店の料理写真",
    "大衆焼肉骨付鳥 金牛 琴平店 food photo",
    TABELOG_37013981,
    '食べログ'
  ),
  "美味処 寿&JAPANESE WHISKEY BAR 729": sourcePhoto(
    "kotohira-37014191-dish.jpg",
    "美味処 寿&JAPANESE WHISKEY BAR 729の料理写真",
    "美味処 寿&JAPANESE WHISKEY BAR 729 food photo",
    TABELOG_37014191,
    '食べログ'
  ),
  "ひだまり食堂": sourcePhoto(
    "kotohira-37014974-dish.jpg",
    "ひだまり食堂の料理写真",
    "ひだまり食堂 food photo",
    TABELOG_37014974,
    '食べログ'
  ),
  "cafe 森と山": sourcePhoto(
    "kotohira-37013126-dish.jpg",
    "cafe 森と山の料理写真",
    "cafe 森と山 food photo",
    TABELOG_37013126,
    '食べログ'
  ),
  "焼鳥 骨付鳥 田中屋": sourcePhoto(
    "kotohira-37009828-dish.jpg",
    "焼鳥 骨付鳥 田中屋の料理写真",
    "焼鳥 骨付鳥 田中屋 food photo",
    TABELOG_37009828,
    '食べログ'
  ),
  "焼肉 田中": sourcePhoto(
    "kotohira-37012280-dish.jpg",
    "焼肉 田中の料理写真",
    "焼肉 田中 food photo",
    TABELOG_37012280,
    '食べログ'
  ),
  "さぬき名物 骨付鳥 田中屋": sourcePhoto(
    "kotohira-37005602-dish.jpg",
    "さぬき名物 骨付鳥 田中屋の料理写真",
    "さぬき名物 骨付鳥 田中屋 food photo",
    TABELOG_37005602,
    '食べログ'
  ),
  "春日鮨": sourcePhoto(
    "kotohira-37002236-dish.jpg",
    "春日鮨の料理写真",
    "春日鮨 food photo",
    TABELOG_37002236,
    '食べログ'
  ),
  "喫茶 ヤオ": sourcePhoto(
    "kotohira-37008131-dish.jpg",
    "喫茶 ヤオの料理写真",
    "喫茶 ヤオ food photo",
    TABELOG_37008131,
    '食べログ'
  ),
  "紅梅亭": sourcePhoto(
    "kotohira-37000906-dish.jpg",
    "紅梅亭の料理写真",
    "紅梅亭 food photo",
    TABELOG_37000906,
    '食べログ'
  ),
  "手打ちうどん むさし": sourcePhoto(
    "kotohira-37000722-dish.jpg",
    "手打ちうどん むさしの料理写真",
    "手打ちうどん むさし food photo",
    TABELOG_37000722,
    '食べログ'
  ),
  "金陵の郷": sourcePhoto(
    "kotohira-37007797-dish.jpg",
    "金陵の郷の料理写真",
    "金陵の郷 food photo",
    TABELOG_37007797,
    '食べログ'
  ),
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
    jis: KOTOHIRA.jis,
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
    license: '町公式サイト掲載情報',
    accessed: KOTOHIRA.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const KOTOHIRA_FACILITIES: readonly FacilityRow[] = [
  sight('kotohira-sight-01', '金刀比羅宮', '香川県仲多度郡琴平町892-1', '0877-75-2121', KOTOHIRA.sources.konpira, 34.191389, 133.809444),
  sight('kotohira-sight-02', '旭社', '香川県仲多度郡琴平町892-1', null, KOTOHIRA.sources.konpira, 34.1910, 133.8090),
  sight('kotohira-sight-03', '金刀比羅宮表参道', '香川県仲多度郡琴平町', null, KOTOHIRA.sources.konpira, 34.1895, 133.8115),
  sight('kotohira-sight-04', '鞘橋', '香川県仲多度郡琴平町', null, KOTOHIRA.sources.kanko, 34.1908, 133.8105),
  sight('kotohira-sight-05', '高灯篭', '香川県仲多度郡琴平町', null, KOTOHIRA.sources.kanko, 34.1925, 133.8130),
  sight('kotohira-sight-06', '旧金毘羅大芝居', '香川県仲多度郡琴平町1241', '0877-75-6716', KOTOHIRA.sources.kanamaruza, 34.1917, 133.8128),
  sight('kotohira-onsen-01', 'ことひら温泉 琴参閣', '香川県仲多度郡琴平町685-11', '0877-75-1000', 'https://kotosankaku.jp/hotspa/', 34.1900, 133.8110),
  sight('kotohira-onsen-02', 'ことひら温泉 御宿 敷島館', '香川県仲多度郡琴平町川西713-1', '0877-58-8001', 'https://dormy-hotels.com/resort/hotels/shikishimakan/hotspring/', 34.1892, 133.8118)
];
