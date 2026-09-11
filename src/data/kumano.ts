/**
 * Kumano / 熊野町 (Hiroshima, Aki District) sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-10). JIS 34307. Seventeenth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市・江田島市・府中町・海田町.
 * CRITICAL: Hiroshima 熊野町 only (NOT Wakayama/Mie Kumano). Address gate: 広島県安芸郡熊野町 / 広島県熊野町 only.
 * No frozen pack — photo-only tourism + Tabelog dining. Stay/onsen/experience/shop/commerce: honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KUMANO = {
  nameJa: '熊野町',
  nameEn: 'Kumano',
  reading: 'くまのちょう',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'kumano',
  jis: '34307',
  jlis: '343071',
  sameAs: 'https://www.town.kumano.lg.jp/',
  hall: {
    postalCode: '731-4292',
    addressJa: '広島県安芸郡熊野町中溝一丁目1番1号',
    addressEn: '1-1-1 Nakamizo, Kumano Town, Aki District, Hiroshima 731-4292, Japan',
    phone: '082-820-5600'
  },
  sources: {
    home: 'https://www.town.kumano.lg.jp/',
    hall: 'https://www.town.kumano.lg.jp/',
    kanko: 'https://www.town.kumano.lg.jp/11/index.html',
    tabelogCity: 'https://tabelog.com/hiroshima/C34307/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const KUMANO_EXPECTED_ROW_COUNT = 5;
export const KUMANO_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: Kumano Town Office. Hero title remains municipality name only. Unique (no wakimachi). */
export const KUMANO_PLACE_PHOTO = wikiPhoto(
  "kumano-cover-townhall.jpg",
  "https://commons.wikimedia.org/wiki/File%3AKumano_Town_Office.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Taisyo", "https://commons.wikimedia.org/wiki/File%3AKumano_Town_Office.jpg", "2009",
  "熊野町役場", "Kumano Town Office"
);

export const KUMANO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "よねだ屋": sourcePhoto("kumano-34022212-dish.jpg", "よねだ屋の料理写真", "よねだ屋 food photo", "https://tabelog.com/hiroshima/A3401/A340125/34022212/", '食べログ'),
  "碧ちゃ家": sourcePhoto("kumano-34010237-dish.jpg", "碧ちゃ家の料理写真", "碧ちゃ家 food photo", "https://tabelog.com/hiroshima/A3401/A340125/34010237/", '食べログ'),
  "おか半 総本店": sourcePhoto("kumano-34000745-dish.jpg", "おか半 総本店の料理写真", "おか半 総本店 food photo", "https://tabelog.com/hiroshima/A3401/A340125/34000745/", '食べログ'),
  "ふくえどぅ": sourcePhoto("kumano-34009820-dish.jpg", "ふくえどぅの料理写真", "ふくえどぅ food photo", "https://tabelog.com/hiroshima/A3401/A340125/34009820/", '食べログ'),
  "焼肉ハウス ファミリー": sourcePhoto("kumano-34004787-dish.jpg", "焼肉ハウス ファミリーの料理写真", "焼肉ハウス ファミリー food photo", "https://tabelog.com/hiroshima/A3401/A340125/34004787/", '食べログ'),
  "そばきりらいちょう": sourcePhoto("kumano-34031100-dish.jpg", "そばきりらいちょうの料理写真", "そばきりらいちょう food photo", "https://tabelog.com/hiroshima/A3401/A340125/34031100/", '食べログ'),
  "Ｃａｆｅ照": sourcePhoto("kumano-34025816-dish.jpg", "Ｃａｆｅ照の料理写真", "Ｃａｆｅ照 food photo", "https://tabelog.com/hiroshima/A3401/A340125/34025816/", '食べログ'),
  "美味しい集会所 平和園 熊野店": sourcePhoto("kumano-34020082-dish.jpg", "美味しい集会所 平和園 熊野店の料理写真", "美味しい集会所 平和園 熊野店 food photo", "https://tabelog.com/hiroshima/A3401/A340125/34020082/", '食べログ'),
  "my-cafe": sourcePhoto("kumano-34028401-dish.jpg", "my-cafeの料理写真", "my-cafe food photo", "https://tabelog.com/hiroshima/A3401/A340125/34028401/", '食べログ'),
  "Patisserie faisunreve": sourcePhoto("kumano-34031303-dish.jpg", "Patisserie faisunreveの料理写真", "Patisserie faisunreve food photo", "https://tabelog.com/hiroshima/A3401/A340125/34031303/", '食べログ'),
  "和木お食事処": sourcePhoto("kumano-34006422-dish.jpg", "和木お食事処の料理写真", "和木お食事処 food photo", "https://tabelog.com/hiroshima/A3401/A340125/34006422/", '食べログ'),
  "六分儀": sourcePhoto("kumano-34025329-dish.jpg", "六分儀の料理写真", "六分儀 food photo", "https://tabelog.com/hiroshima/A3401/A340125/34025329/", '食べログ'),
  "洋食だいにんぐなかむら": sourcePhoto("kumano-34017527-dish.jpg", "洋食だいにんぐなかむらの料理写真", "洋食だいにんぐなかむら food photo", "https://tabelog.com/hiroshima/A3401/A340125/34017527/", '食べログ'),
  "お好み焼き ぼちぼち": sourcePhoto("kumano-34019107-dish.jpg", "お好み焼き ぼちぼちの料理写真", "お好み焼き ぼちぼち food photo", "https://tabelog.com/hiroshima/A3401/A340125/34019107/", '食べログ'),
  "食事処 打鐘": sourcePhoto("kumano-34024021-dish.jpg", "食事処 打鐘の料理写真", "食事処 打鐘 food photo", "https://tabelog.com/hiroshima/A3401/A340125/34024021/", '食べログ'),
  "tomobio drink stand": sourcePhoto("kumano-34029160-dish.jpg", "tomobio drink standの料理写真", "tomobio drink stand food photo", "https://tabelog.com/hiroshima/A3401/A340404/34029160/", '食べログ'),
  "筆の里工房": wikiPhoto(
  "kumano-fude-no-sato.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E7%AD%86%E3%81%AE%E9%87%8C01.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Taisyo", "https://commons.wikimedia.org/wiki/File%3A%E7%AD%86%E3%81%AE%E9%87%8C01.jpg", "2009",
  "筆の里工房", "Fude-no-Sato Kobo"
),
  "榊山神社": sourcePhoto("kumano-sakakiyama.jpg", "榊山神社", "Sakakiyama Shrine", "https://dive-hiroshima.com/explore/1493/", 'Dive! Hiroshima'),
  "熊野町郷土館": sourcePhoto("kumano-kyodokan.jpg", "熊野町郷土館", "Kumano Town Local Museum", "https://dive-hiroshima.com/explore/1508/", 'Dive! Hiroshima'),
  "熊野本宮神社": sourcePhoto("kumano-hongusha.jpg", "熊野本宮神社", "Kumano Hongu Shrine", "https://www.town.kumano.lg.jp/11/2/2/1/4471.html", '熊野町'),
  "西光寺": sourcePhoto("kumano-saikoji.jpg", "西光寺", "Saikoji Temple", "https://www.town.kumano.lg.jp/11/2/2/1/4477.html", '熊野町'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: KUMANO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・Commons・Dive! Hiroshima掲載情報', accessed: KUMANO.sources.accessed};
}

export const KUMANO_FACILITIES: readonly FacilityRow[] = [
  sight("kumano-sight-01", "筆の里工房", "広島県安芸郡熊野町中溝5-17-1", "082-855-3010", "https://dive-hiroshima.com/explore/162/", 34.342881, 132.575398),
  sight("kumano-sight-02", "榊山神社", "広島県安芸郡熊野町中溝5丁目1-13", "082-854-2874", "https://dive-hiroshima.com/explore/1493/", 34.3409007, 132.5791903),
  sight("kumano-sight-03", "熊野町郷土館", "広島県安芸郡熊野町中溝三丁目12-26", "082-855-2559", "https://dive-hiroshima.com/explore/1508/", 34.337985, 132.582974),
  sight("kumano-sight-04", "熊野本宮神社", "広島県安芸郡熊野町出来庭二丁目", null, "https://www.town.kumano.lg.jp/11/2/2/1/4471.html", 34.3405825, 132.5782973),
  sight("kumano-sight-05", "西光寺", "広島県安芸郡熊野町出来庭二丁目", null, "https://www.town.kumano.lg.jp/11/2/2/1/4477.html", 34.3384872, 132.5810181),
];
