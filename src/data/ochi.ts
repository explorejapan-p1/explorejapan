/**
 * Ochi Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 / Wikipedia (accessed 2026-09-08). JIS 39403. Twenty-sixth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村・本山町・大豊町・土佐町・大川村・仁淀川町・中土佐町 (佐川町・田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Snow Peak stay. Stay: スノーピークおち仁淀川キャンプフィールド 住箱 interior (official campfield photo). Onsen: 0 (stay≠onsen). Shop/commerce honest 0. Dining honest 3.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const OCHI = {
  nameJa: '越知町',
  nameEn: 'Ochi',
  reading: 'おちちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'ochi',
  jis: '39403',
  jlis: '394033',
  sameAs: 'https://www.town.ochi.kochi.jp/',
  hall: {
    postalCode: '781-1301',
    addressJa: '高知県高岡郡越知町越知甲1970番地',
    addressEn: '1970 Ochi-ko, Ochi Town, Takaoka District, Kochi 781-1301, Japan',
    phone: '0889-26-1111'
  },
  sources: {
    home: 'https://www.town.ochi.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E8%B6%8A%E7%9F%A5%E7%94%BA',
    stayList: 'https://www.town.ochi.kochi.jp/kankou/stayafter/',
    yokokura: 'https://commons.wikimedia.org/wiki/File:%E6%A8%AA%E5%80%89%E5%B1%B1%E5%B1%95%E6%9C%9B%E5%8F%B0%E3%81%8B%E3%82%89%E3%81%AE%E4%BB%81%E6%B7%80%E5%B7%9D%E3%81%A8%E8%B6%8A%E7%9F%A5%E7%94%BA.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39403/rstLst/',
    snowpeak: 'https://www.snowpeak.co.jp/locations/ochi/',
    accessed: '2026-09-08'
  }
} as const;

export const OCHI_EXPECTED_ROW_COUNT = 5;
export const OCHI_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Niyodo River and Ochi from Mt. Yokokura observation deck. Hero title remains municipality name only. */
export const OCHI_PLACE_PHOTO = wikiPhoto(
  'ochi-cover.jpg',
  'https://commons.wikimedia.org/wiki/File:%E6%A8%AA%E5%80%89%E5%B1%B1%E5%B1%95%E6%9C%9B%E5%8F%B0%E3%81%8B%E3%82%89%E3%81%AE%E4%BB%81%E6%B7%80%E5%B7%9D%E3%81%A8%E8%B6%8A%E7%9F%A5%E7%94%BA.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  'Koda6029', 'https://commons.wikimedia.org/wiki/User:Koda6029', '2019-12-31',
  '横倉山展望台からの仁淀川と越知町', 'Niyodo River and Ochi from Mt. Yokokura observation deck'
);

const TABELOG_39000097 = 'https://tabelog.com/kochi/A3903/A390302/39000097/';
const TABELOG_39003552 = 'https://tabelog.com/kochi/A3903/A390302/39003552/';
const TABELOG_39002386 = 'https://tabelog.com/kochi/A3903/A390302/39002386/';
const SNOWPEAK_OCHI = 'https://www.snowpeak.co.jp/locations/ochi/';

export const OCHI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '横倉山': OCHI_PLACE_PHOTO,
  '越知町役場': wikiPhoto(
    'ochi-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Ochi_town_hall.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク', 'https://commons.wikimedia.org/wiki/File:Ochi_town_hall.JPG', '2014-04-28',
    '越知町役場', 'Ochi Town Hall'
  ),
  '中仁淀橋': wikiPhoto(
    'ochi-bridge.jpg',
    'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E4%BB%81%E6%B7%80%E6%A9%8B%E2%80%95%E6%B2%88%E4%B8%8B%E6%A9%8B.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '谷本 一郎', 'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E4%BB%81%E6%B7%80%E6%A9%8B%E2%80%95%E6%B2%88%E4%B8%8B%E6%A9%8B.jpg', '2018-09-23',
    '中仁淀橋（沈下橋）', 'Naka-Niyodo Bridge (submersible bridge)'
  ),
  '大樽の滝': wikiPhoto(
    'ochi-otaru.jpg',
    'https://commons.wikimedia.org/wiki/File:Otaru_Falls_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2010',
    '大樽の滝', 'Otaru Falls'
  ),
  '横倉山自然の森博物館': wikiPhoto(
    'ochi-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%A8%AA%E5%80%89%E5%B1%B1%E8%87%AA%E7%84%B6%E3%81%AE%E6%A3%AE%E5%8D%9A%E7%89%A9%E9%A4%A8_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    '岩浪陸', 'https://commons.wikimedia.org/wiki/File:%E6%A8%AA%E5%80%89%E5%B1%B1%E8%87%AA%E7%84%B6%E3%81%AE%E6%A3%AE%E5%8D%9A%E7%89%A9%E9%A4%A8_-_panoramio.jpg', '2009-07-29',
    '横倉山自然の森博物館', 'Yokokurayama Natural Forest Museum'
  ),
  'スノーピークおち仁淀川キャンプフィールド': sourcePhoto(
    'ochi-stay-jyubako.jpg',
    'スノーピークおち仁淀川キャンプフィールドの住箱客室写真',
    'Snow Peak Ochi Niyodogawa Camp Field JYUBAKO room photo',
    SNOWPEAK_OCHI,
    'Snow Peak'
  ),
  '自由軒 本店': sourcePhoto('ochi-39000097-dish.jpg', '自由軒本店の料理写真', 'Jiyuken Honten food photo', TABELOG_39000097, '食べログ'),
  'ドライブイン片岡': sourcePhoto('ochi-39003552-dish.jpg', 'ドライブイン片岡の料理写真', 'Drive-in Kataoka food photo', TABELOG_39003552, '食べログ'),
  'フクロー飲食店': sourcePhoto('ochi-39002386-dish.jpg', 'フクロー飲食店の料理写真', 'Fukuro dining food photo', TABELOG_39002386, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: OCHI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: OCHI.sources.accessed};
}

export const OCHI_FACILITIES: readonly FacilityRow[] = [
  sight('ochi-sight-01', '横倉山', '高知県高岡郡越知町', null, 'https://commons.wikimedia.org/wiki/File:%E6%A8%AA%E5%80%89%E5%B1%B1%E5%B1%95%E6%9C%9B%E5%8F%B0%E3%81%8B%E3%82%89%E3%81%AE%E4%BB%81%E6%B7%80%E5%B7%9D%E3%81%A8%E8%B6%8A%E7%9F%A5%E7%94%BA.jpg', 33.5356530, 133.1996303),
  sight('ochi-sight-02', '越知町役場', '高知県高岡郡越知町越知甲1970番地', '0889-26-1111', 'https://commons.wikimedia.org/wiki/File:Ochi_town_hall.JPG', 33.5328006, 133.2521657),
  sight('ochi-sight-03', '中仁淀橋', '高知県高岡郡越知町', null, 'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E4%BB%81%E6%B7%80%E6%A9%8B%E2%80%95%E6%B2%88%E4%B8%8B%E6%A9%8B.jpg', 33.535586, 133.251909),
  sight('ochi-sight-04', '大樽の滝', '高知県高岡郡越知町', null, 'https://commons.wikimedia.org/wiki/File:Otaru_Falls_01.JPG', 33.5172174, 133.2440464),
  sight('ochi-sight-05', '横倉山自然の森博物館', '高知県高岡郡越知町越知甲', null, 'https://commons.wikimedia.org/wiki/File:%E6%A8%AA%E5%80%89%E5%B1%B1%E8%87%AA%E7%84%B6%E3%81%AE%E6%A3%AE%E5%8D%9A%E7%89%A9%E9%A4%A8_-_panoramio.jpg', 33.535476, 133.24168)
];
