/**
 * Jinseikogen / 神石高原町 (Hiroshima, Jinseki District) sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-11). JIS 34545. Twenty-third Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市・江田島市・府中町・海田町・熊野町・坂町・安芸太田町・北広島町・大崎上島町・世羅町.
 * CRITICAL: Hiroshima 神石高原町 only (神石郡). Address gate: 広島県神石郡神石高原町 only.
 * Stay: official 部屋 still×1. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Dining Tabelog×16. Experience/shop/commerce: honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const JINSEIKOGEN = {
  nameJa: '神石高原町',
  nameEn: 'Jinseikogen',
  reading: 'じんせきこうげんちょう',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'jinseikogen',
  jis: '34545',
  jlis: '345451',
  sameAs: 'https://www.jinsekigun.jp/town/',
  hall: {
    postalCode: '720-1522',
    addressJa: '広島県神石郡神石高原町小畠1701番地',
    addressEn: '1701 Kobatake, Jinseikogen Town, Jinseki District, Hiroshima 720-1522, Japan',
    phone: '0847-89-3330'
  },
  sources: {
    home: 'https://www.jinsekigun.jp/town/',
    hall: 'https://www.jinsekigun.jp/town/formation/',
    kanko: 'https://jkougen.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34545/rstLst/',
    accessed: '2026-09-11'
  }
} as const;

export const JINSEIKOGEN_EXPECTED_ROW_COUNT = 7;
export const JINSEIKOGEN_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-11', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-11', altJa, altEn};
}
/** Cover: Jinseikogen Town Office. Hero title remains municipality name only. Unique (no wakimachi). */
export const JINSEIKOGEN_PLACE_PHOTO = wikiPhoto(
  "jinseikogen-cover-townhall.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E7%A5%9E%E7%9F%B3%E9%AB%98%E5%8E%9F%E7%94%BA%E5%BD%B9%E5%A0%B4_Jinsekikogen_town_hall_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E7%A5%9E%E7%9F%B3%E9%AB%98%E5%8E%9F%E7%94%BA%E5%BD%B9%E5%A0%B4_Jinsekikogen_town_hall_-_panoramio.jpg", "2009",
  "神石高原町役場", "Jinseikogen Town Office"
);

export const JINSEIKOGEN_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "ぬく森": sourcePhoto("jinseikogen-34010898-dish.jpg", "ぬく森の料理写真", "ぬく森 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34010898/", '食べログ'),
  "ティアガルテンカフェ": sourcePhoto("jinseikogen-34025292-dish.jpg", "ティアガルテンカフェの料理写真", "ティアガルテンカフェ food photo", "https://tabelog.com/hiroshima/A3405/A340504/34025292/", '食べログ'),
  "オオカミブレッド": sourcePhoto("jinseikogen-34022589-dish.jpg", "オオカミブレッドの料理写真", "オオカミブレッド food photo", "https://tabelog.com/hiroshima/A3405/A340504/34022589/", '食べログ'),
  "門花亭": sourcePhoto("jinseikogen-34030122-dish.jpg", "門花亭の料理写真", "門花亭 food photo", "https://tabelog.com/hiroshima/A3405/A340502/34030122/", '食べログ'),
  "レストラン帝釈の里": sourcePhoto("jinseikogen-34020682-dish.jpg", "レストラン帝釈の里の料理写真", "レストラン帝釈の里 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34020682/", '食べログ'),
  "COHAN CAFE": sourcePhoto("jinseikogen-34033832-dish.jpg", "COHAN CAFEの料理写真", "COHAN CAFE food photo", "https://tabelog.com/hiroshima/A3405/A340504/34033832/", '食べログ'),
  "紅葉会館": sourcePhoto("jinseikogen-34002076-dish.jpg", "紅葉会館の料理写真", "紅葉会館 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34002076/", '食べログ'),
  "ロティ ハラパン": sourcePhoto("jinseikogen-34018193-dish.jpg", "ロティ ハラパンの料理写真", "ロティ ハラパン food photo", "https://tabelog.com/hiroshima/A3405/A340504/34018193/", '食べログ'),
  "手抜きうどん": sourcePhoto("jinseikogen-34027304-dish.jpg", "手抜きうどんの料理写真", "手抜きうどん food photo", "https://tabelog.com/hiroshima/A3405/A340504/34027304/", '食べログ'),
  "たまちゃん": sourcePhoto("jinseikogen-34025739-dish.jpg", "たまちゃんの料理写真", "たまちゃん food photo", "https://tabelog.com/hiroshima/A3405/A340504/34025739/", '食べログ'),
  "森の花屋さん": sourcePhoto("jinseikogen-34016981-dish.jpg", "森の花屋さんの料理写真", "森の花屋さん food photo", "https://tabelog.com/hiroshima/A3405/A340504/34016981/", '食べログ'),
  "雪花亭": sourcePhoto("jinseikogen-34007739-dish.jpg", "雪花亭の料理写真", "雪花亭 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34007739/", '食べログ'),
  "GARDEN mimuracoffee": sourcePhoto("jinseikogen-34031105-dish.jpg", "GARDEN mimuracoffeeの料理写真", "GARDEN mimuracoffee food photo", "https://tabelog.com/hiroshima/A3405/A340504/34031105/", '食べログ'),
  "山里の餅 やまうち": sourcePhoto("jinseikogen-34026154-dish.jpg", "山里の餅 やまうちの料理写真", "山里の餅 やまうち food photo", "https://tabelog.com/hiroshima/A3405/A340504/34026154/", '食べログ'),
  "182CAFE": sourcePhoto("jinseikogen-34026831-dish.jpg", "182CAFEの料理写真", "182CAFE food photo", "https://tabelog.com/hiroshima/A3405/A340504/34026831/", '食べログ'),
  "農家喫茶 だんばら": sourcePhoto("jinseikogen-34013585-dish.jpg", "農家喫茶 だんばらの料理写真", "農家喫茶 だんばら food photo", "https://tabelog.com/hiroshima/A3405/A340504/34013585/", '食べログ'),
  "光信寺の湯 ゆっくら": sourcePhoto("jinseikogen-stay-yukkura.jpg", "光信寺の湯 ゆっくらの客室写真", "Yukkura Kohshinji room photo", "https://www.yukkura-kohshinji.jp/gallery", '光信寺の湯ゆっくら公式'),
  "光信寺の湯 ゆっくら 大浴場": sourcePhoto("jinseikogen-onsen-yukkura.jpg", "光信寺の湯 ゆっくら 大浴場の写真", "Yukkura Kohshinji bath photo", "https://www.yukkura-kohshinji.jp/gallery", '光信寺の湯ゆっくら公式'),
  "神石高原温泉": sourcePhoto("jinseikogen-onsen-kogen.jpg", "神石高原温泉の大浴場写真", "Jinsekikogen Onsen bath photo", "https://jkougen.jp/kankou/spot-info/jinsekikogen-onsen/", '神石高原町観光ナビ'),
  "神石高原ティアガルテン": sourcePhoto("jinseikogen-tiergarten.jpg", "神石高原ティアガルテン", "Jinsekikogen Tiergarten", "https://dive-hiroshima.com/explore/1350/", 'Dive! Hiroshima'),
  "とよまつ紙ヒコーキ・タワー": sourcePhoto("jinseikogen-kamihikoki.jpg", "とよまつ紙ヒコーキ・タワー", "Toyomatsu Paper Airplane Tower", "https://dive-hiroshima.com/explore/1354/", 'Dive! Hiroshima'),
  "道の駅さんわ182ステーション": sourcePhoto("jinseikogen-michinoeki.jpg", "道の駅さんわ182ステーション", "Roadside Station Sanwa 182 Station", "https://dive-hiroshima.com/explore/9/", 'Dive! Hiroshima'),
  "帝釈峡神龍湖": sourcePhoto("jinseikogen-shinryuko.jpg", "帝釈峡神龍湖", "Taishakukyo Lake Shinryuko", "https://dive-hiroshima.com/explore/120/", 'Dive! Hiroshima'),
  "帝釈峡スコラ高原": sourcePhoto("jinseikogen-sukora.jpg", "帝釈峡スコラ高原", "Taishakukyo Sukora Highlands", "https://dive-hiroshima.com/explore/121/", 'Dive! Hiroshima'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: JINSEIKOGEN.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・Commons・Dive! Hiroshima・公式掲載情報', accessed: JINSEIKOGEN.sources.accessed};
}

export const JINSEIKOGEN_FACILITIES: readonly FacilityRow[] = [
  sight("jinseikogen-sight-01", "神石高原ティアガルテン", "広島県神石郡神石高原町上豊松72-8", "0847-82-2823", "https://dive-hiroshima.com/explore/1350/", 34.74100763, 133.31512691),
  sight("jinseikogen-sight-02", "とよまつ紙ヒコーキ・タワー", "広島県神石郡神石高原町下豊松381", "0847-84-2000", "https://dive-hiroshima.com/explore/1354/", 34.775608, 133.32253),
  sight("jinseikogen-sight-03", "道の駅さんわ182ステーション", "広島県神石郡神石高原町坂瀬川5146-2", "0847-85-2201", "https://dive-hiroshima.com/explore/9/", 34.67403, 133.29962),
  sight("jinseikogen-sight-04", "帝釈峡神龍湖", "広島県神石郡神石高原町永野5034-7", "0847-86-0131", "https://dive-hiroshima.com/explore/120/", 34.84343, 133.225362),
  sight("jinseikogen-sight-05", "帝釈峡スコラ高原", "広島県神石郡神石高原町相渡2167", "0847-86-0535", "https://dive-hiroshima.com/explore/121/", 34.85487, 133.20381),
  sight("jinseikogen-onsen-01", "光信寺の湯 ゆっくら 大浴場", "広島県神石郡神石高原町光信58-1", "0847-85-4000", "https://www.yukkura-kohshinji.jp/hot_spring", null, null),
  sight("jinseikogen-onsen-02", "神石高原温泉", "広島県神石郡神石高原町井関1282", "0847-85-2550", "https://jkougen.jp/kankou/spot-info/jinsekikogen-onsen/", null, null),
];
