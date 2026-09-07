/**
 * Tosa Town (土佐町) sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 (accessed 2026-09-08). JIS 39363. Twenty-second Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村・本山町・大豊町 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: さめうら荘レイクサイドホテル 和室 LARGE (mediaInfo【和室一例】washitsu). Onsen: 0 (in-room bath; stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TOSACHO = {
  nameJa: '土佐町',
  nameEn: 'Tosa Town',
  reading: 'とさちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'tosacho',
  jis: '39363',
  jlis: '393630',
  sameAs: 'https://www.town.tosa.kochi.jp/',
  hall: {
    postalCode: '781-3492',
    addressJa: '高知県土佐郡土佐町土居194番地',
    addressEn: '194 Doi, Tosa Town, Tosa District, Kochi 781-3492, Japan',
    phone: '0887-82-0480'
  },
  sources: {
    home: 'https://www.town.tosa.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%9C%9F%E4%BD%90%E7%94%BA',
    kankou: 'https://www.town.tosa.kochi.jp/',
    sameura: 'https://commons.wikimedia.org/wiki/File:Roadside_Station_Tosa_Sameura.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39363/rstLst/',
    sameurasou: 'https://travel.rakuten.co.jp/HOTEL/180726/180726.html',
    accessed: '2026-09-08'
  }
} as const;

export const TOSACHO_EXPECTED_ROW_COUNT = 5;
export const TOSACHO_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Roadside Station Tosa Sameura. Hero title remains municipality name only. */
export const TOSACHO_PLACE_PHOTO = wikiPhoto(
  'tosacho-cover-sameura.jpg',
  'https://commons.wikimedia.org/wiki/File:Roadside_Station_Tosa_Sameura.jpg',
  'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
  'As6022014', 'https://commons.wikimedia.org/wiki/User:As6022014', '2011-10-10',
  '道の駅土佐さめうら', 'Roadside Station Tosa Sameura'
);

const TABELOG_39005848 = 'https://tabelog.com/kochi/A3901/A390104/39005848/';
const TABELOG_39005839 = 'https://tabelog.com/kochi/A3901/A390104/39005839/';
const TABELOG_39008037 = 'https://tabelog.com/kochi/A3901/A390104/39008037/';
const RAKUTEN_180726 = 'https://travel.rakuten.co.jp/HOTEL/180726/180726.html';

export const TOSACHO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '道の駅土佐さめうら': TOSACHO_PLACE_PHOTO,
  '土佐町役場': wikiPhoto(
    'tosacho-town-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Tosa_town_hall.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク', 'https://commons.wikimedia.org/wiki/User:%E3%82%A2%E3%83%A9%E3%83%84%E3%82%AF', '2014-04-28',
    '土佐町役場', 'Tosa Town Hall'
  ),
  '上吉野川橋': wikiPhoto(
    'tosacho-kamiyoshinogawa-bridge.jpg',
    'https://commons.wikimedia.org/wiki/File:%E4%B8%8A%E5%90%89%E9%87%8E%E5%B7%9D%E6%A9%8B_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E4%B8%8A%E5%90%89%E9%87%8E%E5%B7%9D%E6%A9%8B_-_panoramio.jpg', '2011-09-08',
    '上吉野川橋', 'Kami-Yoshinogawa Bridge'
  ),
  '田井': wikiPhoto(
    'tosacho-tai.jpg',
    'https://commons.wikimedia.org/wiki/File:Tai,_Tosa,_Tosa_District,_Kochi_Prefecture_781-3521,_Japan_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:Tai,_Tosa,_Tosa_District,_Kochi_Prefecture_781-3521,_Japan_-_panoramio.jpg', '2011-09-08',
    '田井', 'Tai, Tosa Town'
  ),
  '土居のパノラマ': wikiPhoto(
    'tosacho-cover-doi.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E7%94%BA%E5%9C%9F%E5%B1%85%E3%81%AE%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E7%94%BA%E5%9C%9F%E5%B1%85%E3%81%AE%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E_-_panoramio.jpg', '2011-09-08',
    '土居のパノラマ', 'Doi panorama, Tosa Town'
  ),
  'さめうら荘レイクサイドホテル': sourcePhoto(
    'tosacho-stay-sameura.jpg',
    'さめうら荘レイクサイドホテルの和室写真',
    'Sameura Lakeside Hotel Japanese-room photo',
    RAKUTEN_180726,
    '楽天トラベル'
  ),
  '柳屋食堂': sourcePhoto('tosacho-39005848-dish.jpg', '柳屋食堂の料理写真', 'Yanagiya Shokudo food photo', TABELOG_39005848, '食べログ'),
  'cafeかのん': sourcePhoto('tosacho-39005839-dish.jpg', 'cafeかのんの料理写真', 'Cafe Kanon food photo', TABELOG_39005839, '食べログ'),
  'ラーメン土佐町439': sourcePhoto('tosacho-39008037-dish.jpg', 'ラーメン土佐町439の料理写真', 'Ramen Tosacho 439 food photo', TABELOG_39008037, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: TOSACHO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: TOSACHO.sources.accessed};
}

export const TOSACHO_FACILITIES: readonly FacilityRow[] = [
  sight('tosacho-sight-01', '道の駅土佐さめうら', '高知県土佐郡土佐町土居', null, 'https://commons.wikimedia.org/wiki/File:Roadside_Station_Tosa_Sameura.jpg', 33.7423164, 133.5445284),
  sight('tosacho-sight-02', '土佐町役場', '高知県土佐郡土佐町土居194番地', '0887-82-0480', 'https://commons.wikimedia.org/wiki/File:Tosa_town_hall.JPG', 33.7371235, 133.5317355),
  sight('tosacho-sight-03', '上吉野川橋', '高知県土佐郡土佐町', null, 'https://commons.wikimedia.org/wiki/File:%E4%B8%8A%E5%90%89%E9%87%8E%E5%B7%9D%E6%A9%8B_-_panoramio.jpg', 33.759139, 133.531661),
  sight('tosacho-sight-04', '田井', '高知県土佐郡土佐町田井', null, 'https://commons.wikimedia.org/wiki/File:Tai,_Tosa,_Tosa_District,_Kochi_Prefecture_781-3521,_Japan_-_panoramio.jpg', 33.750289, 133.542961),
  sight('tosacho-sight-05', '土居のパノラマ', '高知県土佐郡土佐町土居', null, 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E7%94%BA%E5%9C%9F%E5%B1%85%E3%81%AE%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E_-_panoramio.jpg', 33.739111, 133.532344)
];
