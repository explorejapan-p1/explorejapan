/**
 * Muroto City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-08). JIS 39202. Seventh Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Honest 0 onsen (no attributable 大浴場 photo keys; stay uses room still ≠ onsen) / shop / commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MUROTO = {
  nameJa: '室戸市',
  nameEn: 'Muroto',
  reading: 'むろとし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'muroto',
  jis: '39202',
  jlis: '392022',
  sameAs: 'https://www.city.muroto.kochi.jp/',
  hall: {
    postalCode: '781-7185',
    addressJa: '高知県室戸市浮津25番地1',
    addressEn: '25-1 Ukitsu, Muroto City, Kochi 781-7185, Japan',
    phone: '0887-22-1111'
  },
  sources: {
    home: 'https://www.city.muroto.kochi.jp/',
    hall: 'https://www.city.muroto.kochi.jp/pages/gaiyo.php',
    kankou: 'https://www.city.muroto.kochi.jp/',
    cape: 'https://ja.wikipedia.org/wiki/%E5%AE%A4%E6%88%B8%E5%B2%A1',
    geopark: 'https://www.muroto-geo.jp/',
    tabelogCity: 'https://tabelog.com/kochi/C39202/rstLst/',
    skyandsea: 'https://travel.rakuten.co.jp/HOTEL/195948/195948.html',
    accessed: '2026-09-08'
  }
} as const;

export const MUROTO_EXPECTED_ROW_COUNT = 7;
export const MUROTO_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Cape Muroto. */
export const MUROTO_PLACE_PHOTO = wikiPhoto(
  'muroto-cape.jpg',
  'https://commons.wikimedia.org/wiki/File:Cape_Muroto,_Muroto_city_02.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  'Motokoka', 'https://commons.wikimedia.org/wiki/User:Motokoka', '2010-09-26',
  '室戸岬', 'Cape Muroto'
);

const TABELOG_39007539 = 'https://tabelog.com/kochi/A3902/A390203/39007539/';
const TABELOG_39008797 = 'https://tabelog.com/kochi/A3902/A390203/39008797/';
const TABELOG_39007742 = 'https://tabelog.com/kochi/A3902/A390203/39007742/';
const TABELOG_39004458 = 'https://tabelog.com/kochi/A3902/A390203/39004458/';
const TABELOG_39006223 = 'https://tabelog.com/kochi/A3902/A390203/39006223/';
const TABELOG_39007372 = 'https://tabelog.com/kochi/A3902/A390202/39007372/';
const TABELOG_39008443 = 'https://tabelog.com/kochi/A3902/A390203/39008443/';
const TABELOG_39008917 = 'https://tabelog.com/kochi/A3902/A390203/39008917/';
const TABELOG_39004476 = 'https://tabelog.com/kochi/A3902/A390202/39004476/';
const TABELOG_39007641 = 'https://tabelog.com/kochi/A3902/A390203/39007641/';
const TABELOG_39007046 = 'https://tabelog.com/kochi/A3902/A390203/39007046/';
const TABELOG_39004132 = 'https://tabelog.com/kochi/A3902/A390203/39004132/';
const TABELOG_39009040 = 'https://tabelog.com/kochi/A3902/A390203/39009040/';
const TABELOG_39004106 = 'https://tabelog.com/kochi/A3902/A390203/39004106/';
const TABELOG_39008408 = 'https://tabelog.com/kochi/A3902/A390203/39008408/';
const TABELOG_39000348 = 'https://tabelog.com/kochi/A3902/A390203/39000348/';

export const MUROTO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '室戸岬': MUROTO_PLACE_PHOTO,
  '室戸岬灯台': wikiPhoto(
    'muroto-lighthouse.jpg',
    'https://commons.wikimedia.org/wiki/File:Murotomisaki_Lighthouse_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-05-31',
    '室戸岬灯台', 'Murotomisaki Lighthouse'
  ),
  'むろと廃校水族館': wikiPhoto(
    'muroto-aquarium.jpg',
    'https://commons.wikimedia.org/wiki/File:Muroto_Schoolhouse_Aquarium.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Totti', 'https://commons.wikimedia.org/wiki/User:Totti', '2019-02-01',
    'むろと廃校水族館', 'Muroto Schoolhouse Aquarium'
  ),
  '金剛頂寺': wikiPhoto(
    'muroto-kongochoji.jpg',
    'https://commons.wikimedia.org/wiki/File:Kong%C5%8Dch%C5%8D-ji,_Main_Hall_01.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp', 'https://commons.wikimedia.org/wiki/User:Naokijp', '2019-07-16',
    '金剛頂寺', 'Kongochō-ji, Muroto'
  ),
  '最御崎寺': wikiPhoto(
    'muroto-hotsumisaki.jpg',
    'https://commons.wikimedia.org/wiki/File:Hotsumisakiji_02.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-05-31',
    '最御崎寺', 'Hotsumisaki-ji, Muroto'
  ),
  '御厨人窟': wikiPhoto(
    'muroto-mikurodo.jpg',
    'https://commons.wikimedia.org/wiki/File:Mikurodo_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-05-31',
    '御厨人窟', 'Mikurodo sea cave, Muroto'
  ),
  '室戸世界ジオパークセンター': wikiPhoto(
    'muroto-geopark.jpg',
    'https://commons.wikimedia.org/wiki/File:Muroto_Geopark_center_01.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2019-11-05',
    '室戸世界ジオパークセンター', 'Muroto UNESCO Global Geopark Center'
  ),
  'スカイ アンド シー・ムロト': sourcePhoto(
    'muroto-stay-skyandsea.jpg',
    'スカイ アンド シー・ムロトの客室写真',
    'Sky and Sea Muroto room photo',
    'https://travel.rakuten.co.jp/HOTEL/195948/195948.html',
    '楽天トラベル'
  ),
  'SADAMARU BURGER': sourcePhoto('muroto-39007539-dish.jpg', 'SADAMARU BURGERの料理写真', 'SADAMARU BURGER food photo', TABELOG_39007539, '食べログ'),
  'やきとり亭': sourcePhoto('muroto-39008797-dish.jpg', 'やきとり亭の料理写真', 'やきとり亭 food photo', TABELOG_39008797, '食べログ'),
  '室風': sourcePhoto('muroto-39007742-dish.jpg', '室風の料理写真', '室風 food photo', TABELOG_39007742, '食べログ'),
  '遍路の駅 夫婦善哉': sourcePhoto('muroto-39004458-dish.jpg', '遍路の駅 夫婦善哉の料理写真', '遍路の駅 夫婦善哉 food photo', TABELOG_39004458, '食べログ'),
  '一休': sourcePhoto('muroto-39006223-dish.jpg', '一休の料理写真', '一休 food photo', TABELOG_39006223, '食べログ'),
  'お倉饅頭': sourcePhoto('muroto-39007372-dish.jpg', 'お倉饅頭の料理写真', 'お倉饅頭 food photo', TABELOG_39007372, '食べログ'),
  '遊食亭': sourcePhoto('muroto-39008443-dish.jpg', '遊食亭の料理写真', '遊食亭 food photo', TABELOG_39008443, '食べログ'),
  'ジオカフェ ジオショップ': sourcePhoto('muroto-39008917-dish.jpg', 'ジオカフェ ジオショップの料理写真', 'ジオカフェ ジオショップ food photo', TABELOG_39008917, '食べログ'),
  'ドライブイン・オハラ': sourcePhoto('muroto-39004476-dish.jpg', 'ドライブイン・オハラの料理写真', 'ドライブイン・オハラ food photo', TABELOG_39004476, '食べログ'),
  '野根まんぢう 福田屋 室戸店': sourcePhoto('muroto-39007641-dish.jpg', '野根まんぢう 福田屋 室戸店の料理写真', '野根まんぢう 福田屋 室戸店 food photo', TABELOG_39007641, '食べログ'),
  '居酒屋 千太郎': sourcePhoto('muroto-39007046-dish.jpg', '居酒屋 千太郎の料理写真', '居酒屋 千太郎 food photo', TABELOG_39007046, '食べログ'),
  'バイキング吉岡': sourcePhoto('muroto-39004132-dish.jpg', 'バイキング吉岡の料理写真', 'バイキング吉岡 food photo', TABELOG_39004132, '食べログ'),
  'COCO 室戸岬の先端です': sourcePhoto('muroto-39009040-dish.jpg', 'COCO 室戸岬の先端ですの料理写真', 'COCO 室戸岬の先端です food photo', TABELOG_39009040, '食べログ'),
  '料亭 花月': sourcePhoto('muroto-39004106-dish.jpg', '料亭 花月の料理写真', '料亭 花月 food photo', TABELOG_39004106, '食べログ'),
  '吉良川魚処 玄': sourcePhoto('muroto-39008408-dish.jpg', '吉良川魚処 玄の料理写真', '吉良川魚処 玄 food photo', TABELOG_39008408, '食べログ'),
  'シットロト': sourcePhoto('muroto-39000348-dish.jpg', 'シットロトの料理写真', 'シットロト food photo', TABELOG_39000348, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: MUROTO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: MUROTO.sources.accessed};
}

export const MUROTO_FACILITIES: readonly FacilityRow[] = [
  sight('muroto-sight-01', '室戸岬', '高知県室戸市室戸岬町', null, 'https://ja.wikipedia.org/wiki/%E5%AE%A4%E6%88%B8%E5%B2%A1', 33.24277778, 134.17638889),
  sight('muroto-sight-02', '室戸岬灯台', '高知県室戸市室戸岬町', null, 'https://ja.wikipedia.org/wiki/%E5%AE%A4%E6%88%B8%E5%B2%A1%E7%81%AF%E5%8F%B0', 33.24722222, 134.17555556),
  sight('muroto-sight-03', 'むろと廃校水族館', '高知県室戸市室戸岬町533-2', '0887-22-0815', 'https://ja.wikipedia.org/wiki/%E3%82%80%E3%82%8D%E3%81%A8%E5%BB%83%E6%A0%A1%E6%B0%B4%E6%97%8F%E9%A4%A8', 33.32638889, 134.19552778),
  sight('muroto-sight-04', '金剛頂寺', '高知県室戸市元乙523', '0887-23-0026', 'https://ja.wikipedia.org/wiki/%E9%87%91%E5%89%9B%E9%A0%82%E5%AF%BA', 33.3070734, 134.1228508),
  sight('muroto-sight-05', '最御崎寺', '高知県室戸市室戸岬町4058-1', null, 'https://ja.wikipedia.org/wiki/%E6%9C%80%E5%BE%A1%E5%B4%8E%E5%AF%BA', 33.24900833, 134.17573889),
  sight('muroto-sight-06', '御厨人窟', '高知県室戸市室戸岬町', null, 'https://ja.wikipedia.org/wiki/%E5%BE%A1%E5%8E%A8%E4%BA%BA%E7%AA%9F', 33.25147778, 134.18026389),
  sight('muroto-experience-01', '室戸世界ジオパークセンター', '高知県室戸市', null, 'https://commons.wikimedia.org/wiki/File:Muroto_Geopark_center_01.jpg', 33.2992584, 134.1867504)
];
