/**
 * Niyodogawa Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 (accessed 2026-09-08). JIS 39387. Twenty-fourth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村・本山町・大豊町・土佐町・大川村 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: 中津渓谷 ゆの森 本館和室 LARGE (plan LARGE a6e422c3 = mediaInfo「本館和室」). Onsen: 0 (facility has baths; stay≠onsen; no onsen pack row). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const NIYODOGAWA = {
  nameJa: '仁淀川町',
  nameEn: 'Niyodogawa',
  reading: 'によどがわちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'niyodogawa',
  jis: '39387',
  jlis: '393870',
  sameAs: 'https://www.town.niyodogawa.lg.jp/',
  hall: {
    postalCode: '781-1592',
    addressJa: '高知県吾川郡仁淀川町大崎200番地',
    addressEn: '200 Osaki, Niyodogawa Town, Agawa District, Kochi 781-1592, Japan',
    phone: '0889-35-0111'
  },
  sources: {
    home: 'https://www.town.niyodogawa.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E4%BB%81%E6%B7%80%E5%B7%9D%E7%94%BA',
    kankou: 'https://www.town.niyodogawa.lg.jp/',
    nakatsu: 'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E6%B4%A5%E6%B8%93%E8%B0%B7_-_panoramio.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39387/rstLst/',
    yunomori: 'https://travel.rakuten.co.jp/HOTEL/107685/107685.html',
    accessed: '2026-09-08'
  }
} as const;

export const NIYODOGAWA_EXPECTED_ROW_COUNT = 5;
export const NIYODOGAWA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Nakatsu Gorge. Hero title remains municipality name only. */
export const NIYODOGAWA_PLACE_PHOTO = wikiPhoto(
  'niyodogawa-cover-nakatsu.jpg',
  'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E6%B4%A5%E6%B8%93%E8%B0%B7_-_panoramio.jpg',
  'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
  'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E6%B4%A5%E6%B8%93%E8%B0%B7_-_panoramio.jpg', '2014-09-23',
  '中津渓谷', 'Nakatsu Gorge'
);

const TABELOG_39007425 = 'https://tabelog.com/kochi/A3903/A390302/39007425/';
const TABELOG_39008745 = 'https://tabelog.com/kochi/A3903/A390302/39008745/';
const TABELOG_39006963 = 'https://tabelog.com/kochi/A3903/A390302/39006963/';
const RAKUTEN_107685 = 'https://travel.rakuten.co.jp/HOTEL/107685/107685.html';

export const NIYODOGAWA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '中津渓谷': NIYODOGAWA_PLACE_PHOTO,
  '仁淀川町役場': wikiPhoto(
    'niyodogawa-town-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Niyodogawa_Town_Office.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'Cassiopeia sweet', 'https://commons.wikimedia.org/wiki/File:Niyodogawa_Town_Office.jpg', '2008-06-06',
    '仁淀川町役場', 'Niyodogawa Town Hall'
  ),
  '雨竜の滝': wikiPhoto(
    'niyodogawa-uryu-falls.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%9B%A8%E7%AB%9C%E3%81%AE%E6%BB%9D_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E9%9B%A8%E7%AB%9C%E3%81%AE%E6%BB%9D_-_panoramio.jpg', '2014-09-23',
    '雨竜の滝', 'Uryu Falls'
  ),
  '長者の棚田': wikiPhoto(
    'niyodogawa-choja-tanada.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%95%B7%E8%80%85%E3%81%AE%E6%A3%9A%E7%94%B0_01.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
    'Asset utilitist', 'https://commons.wikimedia.org/wiki/File:%E9%95%B7%E8%80%85%E3%81%AE%E6%A3%9A%E7%94%B0_01.jpg', '2026-05-24',
    '長者の棚田', 'Choja rice terraces'
  ),
  '大渡ダム': wikiPhoto(
    'niyodogawa-odo-dam.jpg',
    'https://commons.wikimedia.org/wiki/File:Odo_Dam.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '河川一等兵', 'https://commons.wikimedia.org/wiki/File:Odo_Dam.jpg', '2021',
    '大渡ダム', 'Odo Dam'
  ),
  '中津渓谷 ゆの森': sourcePhoto(
    'niyodogawa-stay-yunomori.jpg',
    '中津渓谷ゆの森の本館和室写真',
    'Nakatsu Keikoku Yunomori main-building Japanese-room photo',
    RAKUTEN_107685,
    '楽天トラベル'
  ),
  'きたはら': sourcePhoto('niyodogawa-39007425-dish.jpg', 'きたはらの料理写真', 'Kitahara food photo', TABELOG_39007425, '食べログ'),
  'スープカレー トランス': sourcePhoto('niyodogawa-39008745-dish.jpg', 'スープカレー トランスの料理写真', 'Soup Curry Trans food photo', TABELOG_39008745, '食べログ'),
  '味処 おさき': sourcePhoto('niyodogawa-39006963-dish.jpg', '味処 おさきの料理写真', 'Ajidokoro Osaki food photo', TABELOG_39006963, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: NIYODOGAWA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: NIYODOGAWA.sources.accessed};
}

export const NIYODOGAWA_FACILITIES: readonly FacilityRow[] = [
  sight('niyodogawa-sight-01', '中津渓谷', '高知県吾川郡仁淀川町名野川', null, 'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E6%B4%A5%E6%B8%93%E8%B0%B7_-_panoramio.jpg', 33.561081, 133.129789),
  sight('niyodogawa-sight-02', '仁淀川町役場', '高知県吾川郡仁淀川町大崎200番地', '0889-35-0111', 'https://commons.wikimedia.org/wiki/File:Niyodogawa_Town_Office.jpg', 33.575325, 133.168232),
  sight('niyodogawa-sight-03', '雨竜の滝', '高知県吾川郡仁淀川町名野川', null, 'https://commons.wikimedia.org/wiki/File:%E9%9B%A8%E7%AB%9C%E3%81%AE%E6%BB%9D_-_panoramio.jpg', 33.563808, 133.125225),
  sight('niyodogawa-sight-04', '長者の棚田', '高知県吾川郡仁淀川町長者', null, 'https://commons.wikimedia.org/wiki/File:%E9%95%B7%E8%80%85%E3%81%AE%E6%A3%9A%E7%94%B0_01.jpg', 33.49912222, 133.12916111),
  sight('niyodogawa-sight-05', '大渡ダム', '高知県吾川郡仁淀川町', null, 'https://commons.wikimedia.org/wiki/File:Odo_Dam.jpg', 33.544617, 133.114992)
];
