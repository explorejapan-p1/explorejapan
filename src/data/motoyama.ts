/**
 * Motoyama Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 (accessed 2026-09-08). JIS 39341. Twentieth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay + Commons sights. Stay: 一軒宿あせみ 和洋室 LARGE. Dining densify TG610. Onsen: 0 (private shower; stay≠onsen). Experience honest 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MOTOYAMA = {
  nameJa: '本山町',
  nameEn: 'Motoyama',
  reading: 'もとやまちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'motoyama',
  jis: '39341',
  jlis: '393410',
  sameAs: 'https://www.town.motoyama.kochi.jp/',
  hall: {
    postalCode: '781-3692',
    addressJa: '高知県長岡郡本山町本山636番地',
    addressEn: '636 Motoyama, Motoyama Town, Nagaoka District, Kochi 781-3692, Japan',
    phone: '0887-76-2223'
  },
  sources: {
    home: 'https://www.town.motoyama.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E6%9C%AC%E5%B1%B1%E7%94%BA',
    tellist: 'https://www.town.motoyama.kochi.jp/tellist.html',
    kankou: 'https://www.town.motoyama.kochi.jp/kanko_bunka_sports/index.html',
    bridge: 'https://commons.wikimedia.org/wiki/File:%E6%97%A7%E6%9C%AC%E5%B1%B1%E5%A4%A7%E6%A9%8B.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39341/rstLst/',
    asemi: 'https://travel.rakuten.co.jp/HOTEL/199462/199462.html',
    accessed: '2026-09-09'
  }
} as const;

export const MOTOYAMA_EXPECTED_ROW_COUNT = 7;
export const MOTOYAMA_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Kyu-Motoyama Bridge. Hero title remains municipality name only. */
export const MOTOYAMA_PLACE_PHOTO = wikiPhoto(
  'motoyama-cover-bridge.jpg',
  'https://commons.wikimedia.org/wiki/File:%E6%97%A7%E6%9C%AC%E5%B1%B1%E5%A4%A7%E6%A9%8B.jpg',
  'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
  'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E6%97%A7%E6%9C%AC%E5%B1%B1%E5%A4%A7%E6%A9%8B.jpg', '2016-04-28',
  '旧本山大橋', 'Former Motoyama Bridge'
);

const TABELOG_39008806 = 'https://tabelog.com/kochi/A3901/A390104/39008806/';
const TABELOG_39004214 = 'https://tabelog.com/kochi/A3901/A390104/39004214/';
const TABELOG_39005430 = 'https://tabelog.com/kochi/A3901/A390104/39005430/';
const TABELOG_39006880 = 'https://tabelog.com/kochi/A3901/A390104/39006880/';
const TABELOG_39008621 = 'https://tabelog.com/kochi/A3901/A390104/39008621/';
const TABELOG_39008877 = 'https://tabelog.com/kochi/A3901/A390104/39008877/';
const TABELOG_39007049 = 'https://tabelog.com/kochi/A3901/A390104/39007049/';
const RAKUTEN_199462 = 'https://travel.rakuten.co.jp/HOTEL/199462/199462.html';
const COMMONS_YAMAZAKI = 'https://commons.wikimedia.org/wiki/File:Yamazaki_Dam_right_view.jpg';
const COMMONS_TOWNSCAPE = 'https://commons.wikimedia.org/wiki/File:Japan_-_Kochi_Motoyama,_july_2010_(4981093637).jpg';

export const MOTOYAMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '旧本山大橋': MOTOYAMA_PLACE_PHOTO,
  '本山町役場': wikiPhoto(
    'motoyama-town-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Motoyama_town_hall.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク', 'https://commons.wikimedia.org/wiki/User:%E3%82%A2%E3%83%A9%E3%83%84%E3%82%AF', '2014-04-28',
    '本山町役場', 'Motoyama Town Hall'
  ),
  '赤滝': wikiPhoto(
    'motoyama-akadaki.jpg',
    'https://commons.wikimedia.org/wiki/File:%E8%B5%A4%E6%BB%9D_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'ball banban', 'https://commons.wikimedia.org/wiki/File:%E8%B5%A4%E6%BB%9D_-_panoramio.jpg', '2010-05-23',
    '赤滝', 'Aka Falls'
  ),
  '白髪山': wikiPhoto(
    'motoyama-shiraga.jpg',
    'https://commons.wikimedia.org/wiki/File:Mt.Shiragayama-Motoyama.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'As6022014', 'https://commons.wikimedia.org/wiki/User:As6022014', '2010-06-25',
    '白髪山', 'Mount Shiraga'
  ),
  '土佐あかうしの放牧': wikiPhoto(
    'motoyama-akaushi.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E3%81%82%E3%81%8B%E3%81%86%E3%81%97%E3%81%AE%E6%94%BE%E7%89%A7.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'osamu tanaka', 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E3%81%82%E3%81%8B%E3%81%86%E3%81%97%E3%81%AE%E6%94%BE%E7%89%A7.jpg', '2011-09-08',
    '土佐あかうしの放牧', 'Tosa Akaushi cattle grazing'
  ),
  '一軒宿あせみ': sourcePhoto(
    'motoyama-stay-asemi.jpg',
    '一軒宿あせみの和洋室写真',
    'Asemi Japanese-Western room photo',
    RAKUTEN_199462,
    '楽天トラベル'
  ),
  'まるごと・あかうし!': sourcePhoto('motoyama-39008806-dish.jpg', 'まるごと・あかうし!の料理写真', 'Marugoto Akaushi food photo', TABELOG_39008806, '食べログ'),
  'いち松': sourcePhoto('motoyama-39004214-dish.jpg', 'いち松の料理写真', 'Ichimatsu food photo', TABELOG_39004214, '食べログ'),
  '味楽': sourcePhoto('motoyama-39005430-dish.jpg', '味楽の料理写真', 'Miraku food photo', TABELOG_39005430, '食べログ'),
  '居酒屋にっさん': sourcePhoto('motoyama-39006880-dish.jpg', '居酒屋にっさんの料理写真', 'Izakaya Nissan food photo', TABELOG_39006880, '食べログ'),
  '汗見川食堂カドヤ': sourcePhoto('motoyama-39008621-dish.jpg', '汗見川食堂カドヤの料理写真', 'Asemigawa Shokudo Kadoya food photo', TABELOG_39008621, '食べログ'),
  'Kitchen クルネ': sourcePhoto('motoyama-39008877-dish.jpg', 'Kitchen クルネの料理写真', 'Kitchen Kurune food photo', TABELOG_39008877, '食べログ'),
  'レストラン ハーベステラス': sourcePhoto('motoyama-39007049-dish.jpg', 'レストラン ハーベステラスの料理写真', 'Restaurant Harvest Terrace food photo', TABELOG_39007049, '食べログ'),
  '山崎ダム': wikiPhoto(
    'motoyama-yamazaki-dam.jpg',
    COMMONS_YAMAZAKI,
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Qurren', 'https://commons.wikimedia.org/wiki/User:Qurren', '2008-08-27',
    '山崎ダム', 'Yamazaki Dam'
  ),
  '本山町眺望': wikiPhoto(
    'motoyama-townscape.jpg',
    COMMONS_TOWNSCAPE,
    'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0',
    'Guilhem Vellut', 'https://www.flickr.com/people/21836312@N08', '2010-07-21',
    '本山町の眺望', 'Motoyama townscape'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: MOTOYAMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: MOTOYAMA.sources.accessed};
}

export const MOTOYAMA_FACILITIES: readonly FacilityRow[] = [
  sight('motoyama-sight-01', '旧本山大橋', '高知県長岡郡本山町本山', null, 'https://commons.wikimedia.org/wiki/File:%E6%97%A7%E6%9C%AC%E5%B1%B1%E5%A4%A7%E6%A9%8B.jpg', 33.757373, 133.594742),
  sight('motoyama-sight-02', '本山町役場', '高知県長岡郡本山町本山636番地', '0887-76-2223', 'https://commons.wikimedia.org/wiki/File:Motoyama_town_hall.JPG', 33.75969, 133.58669),
  sight('motoyama-sight-03', '赤滝', '高知県長岡郡本山町', null, 'https://commons.wikimedia.org/wiki/File:%E8%B5%A4%E6%BB%9D_-_panoramio.jpg', 33.8357, 133.537278),
  sight('motoyama-sight-04', '白髪山', '高知県長岡郡本山町', null, 'https://commons.wikimedia.org/wiki/File:Mt.Shiragayama-Motoyama.jpg', 33.746622, 133.6074),
  sight('motoyama-sight-05', '土佐あかうしの放牧', '高知県長岡郡本山町助藤', null, 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E3%81%82%E3%81%8B%E3%81%86%E3%81%97%E3%81%AE%E6%94%BE%E7%89%A7.jpg', 33.765382, 133.624489),
  sight('motoyama-sight-06', '山崎ダム', '高知県長岡郡本山町', null, COMMONS_YAMAZAKI, 33.768601, 133.634216),
  sight('motoyama-sight-07', '本山町眺望', '高知県長岡郡本山町', null, COMMONS_TOWNSCAPE, 33.756621, 133.584625)
];
