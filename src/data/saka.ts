/**
 * Saka / 坂町 (Hiroshima, Aki District) sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-10). JIS 34309. Eighteenth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市・江田島市・府中町・海田町・熊野町.
 * CRITICAL: Hiroshima 坂町 only (NOT other 坂 names / 坂出). Address gate: 広島県安芸郡坂町 / 広島県坂町 only.
 * No frozen pack — photo-only tourism + Tabelog dining + Nifty onsen×1. Stay/experience/shop/commerce: honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SAKA = {
  nameJa: '坂町',
  nameEn: 'Saka',
  reading: 'さかちょう',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'saka',
  jis: '34309',
  jlis: '343091',
  sameAs: 'https://www.town.saka.lg.jp/',
  hall: {
    postalCode: '731-4393',
    addressJa: '広島県安芸郡坂町平成ヶ浜一丁目1番1号',
    addressEn: '1-1-1 Heiseigahama, Saka Town, Aki District, Hiroshima 731-4393, Japan',
    phone: '082-820-1500'
  },
  sources: {
    home: 'https://www.town.saka.lg.jp/',
    hall: 'https://www.town.saka.lg.jp/',
    kanko: 'https://www.town.saka.lg.jp/charm/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34309/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const SAKA_EXPECTED_ROW_COUNT = 6;
export const SAKA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: Saka Town Office. Hero title remains municipality name only. Unique (no wakimachi). */
export const SAKA_PLACE_PHOTO = wikiPhoto(
  "saka-cover-townhall.jpg",
  "https://commons.wikimedia.org/wiki/File%3ASaka_Town_Office.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Taisyo", "https://commons.wikimedia.org/wiki/File%3ASaka_Town_Office.jpg", "2009",
  "坂町役場", "Saka Town Office"
);

export const SAKA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "パティスリー レクール": sourcePhoto("saka-34014004-dish.jpg", "パティスリー レクールの料理写真", "パティスリー レクール food photo", "https://tabelog.com/hiroshima/A3401/A340124/34014004/", '食べログ'),
  "お好み焼 こいけ": sourcePhoto("saka-34017835-dish.jpg", "お好み焼 こいけの料理写真", "お好み焼 こいけ food photo", "https://tabelog.com/hiroshima/A3401/A340124/34017835/", '食べログ'),
  "禅ぱん": sourcePhoto("saka-34016161-dish.jpg", "禅ぱんの料理写真", "禅ぱん food photo", "https://tabelog.com/hiroshima/A3401/A340124/34016161/", '食べログ'),
  "ALOHA CAFÉ Pineapple ベイサイドビーチ坂店": sourcePhoto("saka-34032253-dish.jpg", "ALOHA CAFÉ Pineapple ベイサイドビーチ坂店の料理写真", "ALOHA CAFÉ Pineapple ベイサイドビーチ坂店 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34032253/", '食べログ'),
  "レストランカリブ": sourcePhoto("saka-34003558-dish.jpg", "レストランカリブの料理写真", "レストランカリブ food photo", "https://tabelog.com/hiroshima/A3401/A340124/34003558/", '食べログ'),
  "わきみず亭": sourcePhoto("saka-34024246-dish.jpg", "わきみず亭の料理写真", "わきみず亭 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34024246/", '食べログ'),
  "台湾料理 福祥閣": sourcePhoto("saka-34024483-dish.jpg", "台湾料理 福祥閣の料理写真", "台湾料理 福祥閣 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34024483/", '食べログ'),
  "Italian Kitchen VANSAN パルティ・フジ坂店": sourcePhoto("saka-34031673-dish.jpg", "Italian Kitchen VANSAN パルティ・フジ坂店の料理写真", "Italian Kitchen VANSAN パルティ・フジ坂店 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34031673/", '食べログ'),
  "海人": sourcePhoto("saka-34000688-dish.jpg", "海人の料理写真", "海人 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34000688/", '食べログ'),
  "お好み焼き 西谷": sourcePhoto("saka-34025016-dish.jpg", "お好み焼き 西谷の料理写真", "お好み焼き 西谷 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34025016/", '食べログ'),
  "壮家": sourcePhoto("saka-34016538-dish.jpg", "壮家の料理写真", "壮家 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34016538/", '食べログ'),
  "古民家Bar あめのちハレ": sourcePhoto("saka-34029790-dish.jpg", "古民家Bar あめのちハレの料理写真", "古民家Bar あめのちハレ food photo", "https://tabelog.com/hiroshima/A3401/A340124/34029790/", '食べログ'),
  "じゃんじゃか 坂店": sourcePhoto("saka-34000484-dish.jpg", "じゃんじゃか 坂店の料理写真", "じゃんじゃか 坂店 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34000484/", '食べログ'),
  "三河屋珈琲 パルティ坂店": sourcePhoto("saka-34025336-dish.jpg", "三河屋珈琲 パルティ坂店の料理写真", "三河屋珈琲 パルティ坂店 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34025336/", '食べログ'),
  "フランス菓子 パリ土産": sourcePhoto("saka-34028603-dish.jpg", "フランス菓子 パリ土産の料理写真", "フランス菓子 パリ土産 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34028603/", '食べログ'),
  "どんと 安芸店": sourcePhoto("saka-34013370-dish.jpg", "どんと 安芸店の料理写真", "どんと 安芸店 food photo", "https://tabelog.com/hiroshima/A3401/A340124/34013370/", '食べログ'),
  "アジアンリゾート・スパ シーレ 大浴場": sourcePhoto("saka-onsen-seare.jpg", "アジアンリゾート・スパ シーレ 大浴場の写真", "Asian Resort Spa Seare bath photo", "https://onsen.nifty.com/hiroshima-onsen/onsen006831/", 'ニフティ温泉'),
  "ベイサイドビーチ坂": wikiPhoto(
  "saka-bayside-beach.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E3%83%99%E3%82%A4%E3%82%B5%E3%82%A4%E3%83%89%E3%83%93%E3%83%BC%E3%83%81%E5%9D%82.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E3%83%99%E3%82%A4%E3%82%B5%E3%82%A4%E3%83%89%E3%83%93%E3%83%BC%E3%83%81%E5%9D%82.jpg", "2009",
  "ベイサイドビーチ坂", "Bayside Beach Saka"
),
  "横浜公園": sourcePhoto("saka-yokohama-park.jpg", "横浜公園", "Yokohama Park", "https://dive-hiroshima.com/explore/1200/", 'Dive! Hiroshima'),
  "八幡山八幡神社": sourcePhoto("saka-hachiman.jpg", "八幡山八幡神社", "Yahata-yama Hachiman Shrine", "https://dive-hiroshima.com/explore/1194/", 'Dive! Hiroshima'),
  "シモハナホール": wikiPhoto(
  "saka-sunstar-hall.jpg",
  "https://commons.wikimedia.org/wiki/File%3ASunstar_Hall_Saka_Hiroshima.JPG",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "スゥ", "https://commons.wikimedia.org/wiki/File%3ASunstar_Hall_Saka_Hiroshima.JPG", "2014",
  "シモハナホール（坂町立町民交流センター）", "Shimohana Hall (Saka Town Civic Center)"
),
  "坂駅前": wikiPhoto(
  "saka-station-front.jpg",
  "https://commons.wikimedia.org/wiki/File%3AView_in_front_of_Saka_Station.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "そらみみ", "https://commons.wikimedia.org/wiki/File%3AView_in_front_of_Saka_Station.jpg", "2018",
  "坂駅前", "In front of Saka Station"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: SAKA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・Commons・Dive! Hiroshima・ニフティ温泉掲載情報', accessed: SAKA.sources.accessed};
}

export const SAKA_FACILITIES: readonly FacilityRow[] = [
  sight("saka-sight-01", "ベイサイドビーチ坂", "広島県安芸郡坂町水尻9075-4", "082-820-1512", "https://dive-hiroshima.com/explore/82/", 34.3213232, 132.4982664),
  sight("saka-sight-02", "横浜公園", "広島県安芸郡坂町鯛尾二丁目", "082-820-1513", "https://dive-hiroshima.com/explore/1200/", 34.337726, 132.4929129),
  sight("saka-sight-03", "八幡山八幡神社", "広島県安芸郡坂町坂東2-8-1", "082-885-1248", "https://dive-hiroshima.com/explore/1194/", 34.3411595, 132.519217),
  sight("saka-sight-04", "シモハナホール", "広島県安芸郡坂町坂東二丁目20番1号", null, "https://commons.wikimedia.org/wiki/File:Sunstar_Hall_Saka_Hiroshima.JPG", 34.338361, 132.515944),
  sight("saka-sight-05", "坂駅前", "広島県安芸郡坂町", null, "https://commons.wikimedia.org/wiki/File:View_in_front_of_Saka_Station.jpg", 34.3387542, 132.5107666),
  sight("saka-onsen-01", "アジアンリゾート・スパ シーレ 大浴場", "広島県安芸郡坂町平成ヶ浜3-2-11", "082-886-3345", "https://onsen.nifty.com/hiroshima-onsen/onsen006831/", null, null),
];
