/**
 * Yasuda Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / Wikidata P429 (accessed 2026-09-08). JIS 39304. Sixteenth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay + Commons experience/sights. Stay: いなかじかん 和室. Dining honest 6 (C39304 exhausted). Experience: 神峯寺 遍路参拝. Onsen: 0. TG610 densify. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const YASUDA = {
  nameJa: '安田町',
  nameEn: 'Yasuda',
  reading: 'やすだちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'yasuda',
  jis: '39304',
  jlis: '393045',
  sameAs: 'https://www.town.yasuda.kochi.jp/',
  hall: {
    postalCode: '781-6421',
    addressJa: '高知県安芸郡安田町大字安田1850番地',
    addressEn: '1850 Yasuda, Yasuda Town, Aki District, Kochi 781-6421, Japan',
    phone: '0887-38-6711'
  },
  sources: {
    home: 'https://www.town.yasuda.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%AE%89%E7%94%B0%E7%94%BA',
    kankou: 'https://www.town.yasuda.kochi.jp/',
    shimaishi: 'https://commons.wikimedia.org/wiki/File:%E5%B3%B6%E7%9F%B3%E3%83%94%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF%E5%BA%83%E5%A0%B4_-_panoramio.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39304/rstLst/',
    inakajikan: 'https://travel.rakuten.co.jp/HOTEL/197146/197146.html',
    accessed: '2026-09-09'
  }
} as const;

export const YASUDA_EXPECTED_ROW_COUNT = 8;
export const YASUDA_EXPECTED_GEO_COUNT = 8;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Shimaishi Picnic Ground. Hero title remains municipality name only. */
export const YASUDA_PLACE_PHOTO = wikiPhoto(
  'yasuda-cover-shimaishi.jpg',
  'https://commons.wikimedia.org/wiki/File:%E5%B3%B6%E7%9F%B3%E3%83%94%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF%E5%BA%83%E5%A0%B4_-_panoramio.jpg',
  'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
  'panoramio', 'https://commons.wikimedia.org/wiki/File:%E5%B3%B6%E7%9F%B3%E3%83%94%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF%E5%BA%83%E5%A0%B4_-_panoramio.jpg', '2015-11-09',
  '島石ピクニック広場', 'Shimaishi Picnic Ground, Yasuda'
);

const TABELOG_39000379 = 'https://tabelog.com/kochi/A3902/A390202/39000379/';
const TABELOG_39006154 = 'https://tabelog.com/kochi/A3902/A390202/39006154/';
const TABELOG_39006159 = 'https://tabelog.com/kochi/A3902/A390202/39006159/';
const TABELOG_39006900 = 'https://tabelog.com/kochi/A3902/A390202/39006900/';
const TABELOG_39008223 = 'https://tabelog.com/kochi/A3902/A390202/39008223/';
const TABELOG_39007919 = 'https://tabelog.com/kochi/A3902/A390202/39007919/';

const COMMONS_TOWN_HALL = 'https://commons.wikimedia.org/wiki/File:Yasuda_town-office.jpg';
const COMMONS_KOUNOMINE = 'https://commons.wikimedia.org/wiki/File:Kounomineji_20240312_1.jpg';
const COMMONS_OOMUKAE = 'https://commons.wikimedia.org/wiki/File:Oomukae_tunnel.JPG';

export const YASUDA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '島石ピクニック広場': YASUDA_PLACE_PHOTO,
  '唐浜休憩所': wikiPhoto(
    'yasuda-karahama.jpg',
    'https://commons.wikimedia.org/wiki/File:Karahama20220621_1.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2022-06-21',
    '唐浜休憩所', 'Karahama rest area, Yasuda'
  ),
  '別所': wikiPhoto(
    'yasuda-bessho.jpg',
    'https://commons.wikimedia.org/wiki/File:Bessho,_Yasuda,_Aki_District,_Kochi_Prefecture_781-6431,_Japan_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'panoramio', 'https://commons.wikimedia.org/wiki/File:Bessho,_Yasuda,_Aki_District,_Kochi_Prefecture_781-6431,_Japan_-_panoramio.jpg', '2015-03-17',
    '別所', 'Bessho, Yasuda'
  ),
  '安田駅': wikiPhoto(
    'yasuda-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Yasuda_station_kochi_02.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'Navian', 'https://commons.wikimedia.org/wiki/User:Navian', '2010-05-16',
    '安田駅', 'Yasuda Station'
  ),
  '唐浜駅': wikiPhoto(
    'yasuda-tonohama-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Tounohama_stn.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Bakkai', 'https://ja.wikipedia.org/wiki/User:Bakkai', '2006-12-18',
    '唐浜駅', 'Tonohama Station'
  ),
  'いなかじかん': sourcePhoto(
    'yasuda-stay-inakajikan.jpg',
    'いなかじかんの和室写真',
    'Inakajikan Japanese-room photo',
    'https://travel.rakuten.co.jp/HOTEL/197146/197146.html',
    '楽天トラベル'
  ),
  '味工房 じねん': sourcePhoto('yasuda-39000379-dish.jpg', '味工房 じねんの料理写真', '味工房 じねん food photo', TABELOG_39000379, '食べログ'),
  'レストラン岬': sourcePhoto('yasuda-39006154-dish.jpg', 'レストラン岬の料理写真', 'レストラン岬 food photo', TABELOG_39006154, '食べログ'),
  'ドライブイン27神峯店': sourcePhoto('yasuda-39006159-dish.jpg', 'ドライブイン27神峯店の料理写真', 'ドライブイン27神峯店 food photo', TABELOG_39006159, '食べログ'),
  '望海ノ菜縁': sourcePhoto('yasuda-39006900-dish.jpg', '望海ノ菜縁の料理写真', '望海ノ菜縁 food photo', TABELOG_39006900, '食べログ'),
  '萬領': sourcePhoto('yasuda-39008223-dish.jpg', '萬領の料理写真', '萬領 food photo', TABELOG_39008223, '食べログ'),
  '魚輝 輝るぽーと安田店': sourcePhoto('yasuda-39007919-dish.jpg', '魚輝 輝るぽーと安田店の料理写真', '魚輝 輝るぽーと安田店 food photo', TABELOG_39007919, '食べログ'),
  '安田町役場': wikiPhoto(
    'yasuda-town-hall.jpg',
    COMMONS_TOWN_HALL,
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Bakkai', 'https://ja.wikipedia.org/wiki/User:Bakkai', '2008-12-18',
    '安田町役場', 'Yasuda Town Hall'
  ),
  '大迎トンネル': wikiPhoto(
    'yasuda-oomukae-tunnel.jpg',
    COMMONS_OOMUKAE,
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'Navian', 'https://commons.wikimedia.org/wiki/User:Navian', '2009-08-15',
    '大迎トンネル', 'Oomukae Tunnel, Yasuda'
  ),
  '神峯寺 遍路参拝': wikiPhoto(
    'yasuda-exp-kounomine.jpg',
    COMMONS_KOUNOMINE,
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2024-03-12',
    '神峯寺の境内風景', 'Kounomine-ji temple grounds for pilgrimage visit'
  ),

};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: YASUDA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: YASUDA.sources.accessed};
}

export const YASUDA_FACILITIES: readonly FacilityRow[] = [
  sight('yasuda-sight-01', '島石ピクニック広場', '高知県安芸郡安田町', null, 'https://commons.wikimedia.org/wiki/File:%E5%B3%B6%E7%9F%B3%E3%83%94%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF%E5%BA%83%E5%A0%B4_-_panoramio.jpg', 33.43892, 133.98114),
  sight('yasuda-sight-02', '唐浜休憩所', '高知県安芸郡安田町唐浜', null, 'https://commons.wikimedia.org/wiki/File:Karahama20220621_1.jpg', 33.4418636, 133.9655813),
  sight('yasuda-sight-03', '別所', '高知県安芸郡安田町別所', null, 'https://commons.wikimedia.org/wiki/File:Bessho,_Yasuda,_Aki_District,_Kochi_Prefecture_781-6431,_Japan_-_panoramio.jpg', 33.4903009, 134.0040850),
  sight('yasuda-sight-04', '安田駅', '高知県安芸郡安田町', null, 'https://commons.wikimedia.org/wiki/File:Yasuda_station_kochi_02.jpg', 33.44338056, 133.98416111),
  sight('yasuda-sight-05', '唐浜駅', '高知県安芸郡安田町唐浜', null, 'https://commons.wikimedia.org/wiki/File:Tounohama_stn.jpg', 33.44611111, 133.96606667),
  sight('yasuda-sight-06', '安田町役場', '高知県安芸郡安田町大字安田1850番地', '0887-38-6711', COMMONS_TOWN_HALL, 33.4391389, 133.9812812),
  sight('yasuda-sight-07', '大迎トンネル', '高知県安芸郡安田町', null, COMMONS_OOMUKAE, 33.509717, 134.01485),
  sight('yasuda-experience-01', '神峯寺 遍路参拝', '高知県安芸郡安田町唐浜', null, 'https://commons.wikimedia.org/wiki/File:Kounomineji_20240312_1.jpg', 33.4675303, 133.9749882)
];
