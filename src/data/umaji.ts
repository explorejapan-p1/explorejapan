/**
 * Umaji Village sourced facts. Do not invent population.
 * Hall / JIS from village HP / JIS X 0402 (accessed 2026-09-08). JIS 39306. Nineteenth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Stay: 馬路温泉 本館和室12畳 LARGE (share/plan wa12). Onsen: 同施設 大浴場 still (stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const UMAJI = {
  nameJa: '馬路村',
  nameEn: 'Umaji',
  reading: 'うまじむら',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'umaji',
  jis: '39306',
  jlis: '393061',
  sameAs: 'https://vill.umaji.lg.jp/',
  hall: {
    postalCode: '781-6201',
    addressJa: '高知県安芸郡馬路村大字馬路443番地',
    addressEn: '443 Umaji, Umaji Village, Aki District, Kochi 781-6201, Japan',
    phone: '0887-44-2111'
  },
  sources: {
    home: 'https://vill.umaji.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E9%A6%AC%E8%B7%AF%E6%9D%91',
    kankou: 'https://vill.umaji.lg.jp/',
    incline: 'https://commons.wikimedia.org/wiki/File:Umaji_Incline1.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39306/rstLst/',
    umajionsen: 'https://travel.rakuten.co.jp/HOTEL/149487/149487.html',
    accessed: '2026-09-08'
  }
} as const;

export const UMAJI_EXPECTED_ROW_COUNT = 6;
export const UMAJI_EXPECTED_GEO_COUNT = 6;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Umaji hydraulic incline. Hero title remains municipality name only. */
export const UMAJI_PLACE_PHOTO = wikiPhoto(
  'umaji-cover-incline.jpg',
  'https://commons.wikimedia.org/wiki/File:Umaji_Incline1.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  'ブルーノ・プラス', 'https://commons.wikimedia.org/wiki/File:Umaji_Incline1.jpg', '2022-03',
  '馬路村水力インクライン', 'Umaji hydraulic incline'
);

const TABELOG_39003551 = 'https://tabelog.com/kochi/A3902/A390202/39003551/';
const TABELOG_39007999 = 'https://tabelog.com/kochi/A3902/A390202/39007999/';
const RAKUTEN_149487 = 'https://travel.rakuten.co.jp/HOTEL/149487/149487.html';

export const UMAJI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '馬路村インクライン': UMAJI_PLACE_PHOTO,
  '馬路村役場': wikiPhoto(
    'umaji-village-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Umaji_village_office_-_%E9%A6%AC%E8%B7%AF%E6%9D%91%E5%BD%B9%E5%A0%B4_-_panoramio.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'yano@mama.akari.ne.jp', 'https://commons.wikimedia.org/wiki/File:Umaji_village_office_-_%E9%A6%AC%E8%B7%AF%E6%9D%91%E5%BD%B9%E5%A0%B4_-_panoramio.jpg', '2013-02-11',
    '馬路村役場', 'Umaji Village Hall'
  ),
  '魚梁瀬丸山公園': wikiPhoto(
    'umaji-yanase-maruyama.jpg',
    'https://commons.wikimedia.org/wiki/File:Yanase_Maruyama01.JPG',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    '221.20', 'https://commons.wikimedia.org/wiki/User:221.20', '2014-12-09',
    '魚梁瀬丸山公園', 'Yanase Maruyama Park'
  ),
  '西川渓谷': wikiPhoto(
    'umaji-nishikawa.jpg',
    'https://commons.wikimedia.org/wiki/File:%E8%A5%BF%E5%B7%9D%E6%B8%93%E8%B0%B7_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E8%A5%BF%E5%B7%9D%E6%B8%93%E8%B0%B7_-_panoramio.jpg', '2015-11-09',
    '西川渓谷', 'Nishikawa Valley'
  ),
  '魚梁瀬森林鉄道': wikiPhoto(
    'umaji-forest-railway.jpg',
    'https://commons.wikimedia.org/wiki/File:Yanase_forest_railway01.JPG',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    '221.20', 'https://commons.wikimedia.org/wiki/User:221.20', '2006-10-15',
    '魚梁瀬森林鉄道', 'Yanase Forest Railway'
  ),
  '馬路温泉': sourcePhoto(
    'umaji-stay-umajionsen.jpg',
    '馬路温泉の本館和室写真',
    'Umaji Onsen main-building Japanese room photo',
    RAKUTEN_149487,
    '楽天トラベル'
  ),
  '馬路温泉 大浴場': sourcePhoto(
    'umaji-onsen-umajionsen.jpg',
    '馬路温泉の大浴場写真',
    'Umaji Onsen large bath photo',
    RAKUTEN_149487,
    '楽天トラベル'
  ),
  'やまなみ食堂': sourcePhoto('umaji-39003551-dish.jpg', 'やまなみ食堂の料理写真', 'Yamanami Shokudo food photo', TABELOG_39003551, '食べログ'),
  '魚梁瀬の食堂 杉の家': sourcePhoto('umaji-39007999-dish.jpg', '魚梁瀬の食堂 杉の家の料理写真', 'Yanase Suginoya food photo', TABELOG_39007999, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: UMAJI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: UMAJI.sources.accessed};
}

export const UMAJI_FACILITIES: readonly FacilityRow[] = [
  sight('umaji-sight-01', '馬路村インクライン', '高知県安芸郡馬路村馬路3564-1', '0887-44-2026', 'https://commons.wikimedia.org/wiki/File:Umaji_Incline1.jpg', 33.556947, 134.048950),
  sight('umaji-sight-02', '馬路村役場', '高知県安芸郡馬路村大字馬路443番地', '0887-44-2111', 'https://commons.wikimedia.org/wiki/File:Umaji_village_office_-_%E9%A6%AC%E8%B7%AF%E6%9D%91%E5%BD%B9%E5%A0%B4_-_panoramio.jpg', 33.555486, 134.048480),
  sight('umaji-sight-03', '魚梁瀬丸山公園', '高知県安芸郡馬路村魚梁瀬', null, 'https://commons.wikimedia.org/wiki/File:Yanase_Maruyama01.JPG', 33.614929, 134.110837),
  sight('umaji-sight-04', '西川渓谷', '高知県安芸郡馬路村', null, 'https://commons.wikimedia.org/wiki/File:%E8%A5%BF%E5%B7%9D%E6%B8%93%E8%B0%B7_-_panoramio.jpg', 33.652317, 134.096052),
  sight('umaji-sight-05', '魚梁瀬森林鉄道', '高知県安芸郡馬路村馬路', null, 'https://commons.wikimedia.org/wiki/File:Yanase_forest_railway01.JPG', 33.549338, 134.049524),
  sight('umaji-onsen-01', '馬路温泉 大浴場', '高知県安芸郡馬路村馬路3564-1', '0887-44-2026', RAKUTEN_149487, 33.5566774, 134.0491971)
];
