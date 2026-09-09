/**
 * Tosa Town (土佐町) sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 (accessed 2026-09-08). JIS 39363. Twenty-second Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村・本山町・大豊町 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog/Rakuten dining + Rakuten stay/experience + Commons sights. Stay: さめうら荘. Dining densify TG610. Experience: さめうら湖 レイクサップ体験. Onsen: 0 (バスルーム; stay≠onsen). Shop/commerce honest 0.
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
    accessed: '2026-09-09'
  }
} as const;

export const TOSACHO_EXPECTED_ROW_COUNT = 8;
export const TOSACHO_EXPECTED_GEO_COUNT = 8;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
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
const TABELOG_39008448 = 'https://tabelog.com/kochi/A3901/A390104/39008448/';
const TABELOG_39009152 = 'https://tabelog.com/kochi/A3901/A390104/39009152/';
const TABELOG_39008118 = 'https://tabelog.com/kochi/A3901/A390104/39008118/';
const TABELOG_39003191 = 'https://tabelog.com/kochi/A3901/A390104/39003191/';
const TABELOG_39006121 = 'https://tabelog.com/kochi/A3901/A390104/39006121/';
const TABELOG_39005849 = 'https://tabelog.com/kochi/A3901/A390104/39005849/';
const RAKUTEN_180726_GALLERY = 'https://travel.rakuten.co.jp/HOTEL/180726/gallery.html';
const COMMONS_SETOGAWA = 'https://commons.wikimedia.org/wiki/File:%E7%80%AC%E6%88%B8%E5%B7%9D%E6%B8%93%E8%B0%B7_-_panoramio.jpg';
const COMMONS_INAMURA = 'https://commons.wikimedia.org/wiki/File:%E7%A8%B2%E5%8F%A2%E5%B1%B1%E7%99%BB%E5%B1%B1%E5%8F%A3_-_panoramio.jpg';

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
  '土佐さめうらBBQテラス': sourcePhoto('tosacho-39008448-dish.jpg', '土佐さめうらBBQテラスの料理写真', 'Tosa Sameura BBQ Terrace food photo', TABELOG_39008448, '食べログ'),
  '牛長': sourcePhoto('tosacho-39009152-dish.jpg', '牛長の料理写真', 'Gyucho food photo', TABELOG_39009152, '食べログ'),
  'イールファームのうなぎ家': sourcePhoto('tosacho-39008118-dish.jpg', 'イールファームのうなぎ家の料理写真', 'Eel Farm Unagiya food photo', TABELOG_39008118, '食べログ'),
  '田舎料理 与作': sourcePhoto('tosacho-39003191-dish.jpg', '田舎料理 与作の料理写真', 'Inaka Ryori Yosaku food photo', TABELOG_39003191, '食べログ'),
  'オンベリーコ': sourcePhoto('tosacho-39006121-dish.jpg', 'オンベリーコの料理写真', 'Omberrico food photo', TABELOG_39006121, '食べログ'),
  'りぐる': sourcePhoto('tosacho-39005849-dish.jpg', 'りぐるの料理写真', 'Riguru food photo', TABELOG_39005849, '食べログ'),
  'さめうら荘レイクサイドホテル レストラン': sourcePhoto(
    'tosacho-restaurant-dish.jpg',
    'さめうら荘レストランのあじさい御膳写真',
    'Sameurasou restaurant Ajisai gozen photo',
    RAKUTEN_180726_GALLERY,
    '楽天トラベル'
  ),
  '瀬戸川渓谷': wikiPhoto(
    'tosacho-setogawa.jpg',
    COMMONS_SETOGAWA,
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', COMMONS_SETOGAWA, '2014-07-12',
    '瀬戸川渓谷', 'Setogawa Gorge'
  ),
  '稲叢山登山口': wikiPhoto(
    'tosacho-inamura.jpg',
    COMMONS_INAMURA,
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', COMMONS_INAMURA, '2014-07-12',
    '稲叢山登山口', 'Mount Inamura trailhead'
  ),
  'さめうら湖 レイクサップ体験': sourcePhoto(
    'tosacho-sup.jpg',
    'さめうら湖のレイクサップ体験写真',
    'Lake Sameura SUP experience photo',
    RAKUTEN_180726_GALLERY,
    '楽天トラベル'
  ),
};


function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: TOSACHO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: TOSACHO.sources.accessed};
}

export const TOSACHO_FACILITIES: readonly FacilityRow[] = [
  sight('tosacho-sight-01', '道の駅土佐さめうら', '高知県土佐郡土佐町土居', null, 'https://commons.wikimedia.org/wiki/File:Roadside_Station_Tosa_Sameura.jpg', 33.7423164, 133.5445284),
  sight('tosacho-sight-02', '土佐町役場', '高知県土佐郡土佐町土居194番地', '0887-82-0480', 'https://commons.wikimedia.org/wiki/File:Tosa_town_hall.JPG', 33.7371235, 133.5317355),
  sight('tosacho-sight-03', '上吉野川橋', '高知県土佐郡土佐町', null, 'https://commons.wikimedia.org/wiki/File:%E4%B8%8A%E5%90%89%E9%87%8E%E5%B7%9D%E6%A9%8B_-_panoramio.jpg', 33.759139, 133.531661),
  sight('tosacho-sight-04', '田井', '高知県土佐郡土佐町田井', null, 'https://commons.wikimedia.org/wiki/File:Tai,_Tosa,_Tosa_District,_Kochi_Prefecture_781-3521,_Japan_-_panoramio.jpg', 33.750289, 133.542961),
  sight('tosacho-sight-05', '土居のパノラマ', '高知県土佐郡土佐町土居', null, 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E7%94%BA%E5%9C%9F%E5%B1%85%E3%81%AE%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E_-_panoramio.jpg', 33.739111, 133.532344),
  sight('tosacho-sight-06', '瀬戸川渓谷', '高知県土佐郡土佐町', null, COMMONS_SETOGAWA, 33.725239, 133.399989),
  sight('tosacho-sight-07', '稲叢山登山口', '高知県土佐郡土佐町', null, COMMONS_INAMURA, 33.742669, 133.367572),
  sight('tosacho-experience-01', 'さめうら湖 レイクサップ体験', '高知県土佐郡土佐町田井146-1', '0887-82-1020', RAKUTEN_180726_GALLERY, 33.7723305, 133.5106674)
];

