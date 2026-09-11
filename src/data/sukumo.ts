/**
 * Sukumo City sourced facts. Do not invent population.
 * Hall / JIS from city Wikipedia / city HP facts (accessed 2026-09-08). JIS 39208. Twelfth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Stay uses 椰子の湯 洋室 still; onsen uses 三段の棚田状露天風呂 still (stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SUKUMO = {
  nameJa: '宿毛市',
  nameEn: 'Sukumo',
  reading: 'すくもし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'sukumo',
  jis: '39208',
  jlis: '392081',
  sameAs: 'https://www.city.sukumo.kochi.jp/',
  hall: {
    postalCode: '788-8686',
    addressJa: '高知県宿毛市希望ヶ丘1番地',
    addressEn: '1 Kibogaoka, Sukumo City, Kochi 788-8686, Japan',
    phone: '0880-62-1111'
  },
  sources: {
    home: 'https://www.city.sukumo.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%AE%BF%E6%AF%9B%E5%B8%82',
    kankou: 'https://www.city.sukumo.kochi.jp/',
    bay: 'https://commons.wikimedia.org/wiki/File:Sukumo_Bay_-_Sep_6,_2019.jpg',
    enkoji: 'https://ja.wikipedia.org/wiki/%E5%BB%B6%E5%85%89%E5%AF%BA',
    tabelogCity: 'https://tabelog.com/kochi/C39208/rstLst/',
    yashi: 'https://travel.rakuten.co.jp/HOTEL/153227/153227.html',
    accessed: '2026-09-08'
  }
} as const;

export const SUKUMO_EXPECTED_ROW_COUNT = 8;
export const SUKUMO_EXPECTED_GEO_COUNT = 8;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Sukumo Bay. */
export const SUKUMO_PLACE_PHOTO = wikiPhoto(
  'sukumo-cover-bay.jpg',
  'https://commons.wikimedia.org/wiki/File:Sukumo_Bay_-_Sep_6,_2019.jpg',
  'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0',
  'inunami', 'https://commons.wikimedia.org/wiki/User:Inunami', '2019-09-06',
  '宿毛湾', 'Sukumo Bay'
);

const TABELOG_39005745 = 'https://tabelog.com/kochi/A3904/A390403/39005745/';
const TABELOG_39005748 = 'https://tabelog.com/kochi/A3904/A390403/39005748/';
const TABELOG_39005752 = 'https://tabelog.com/kochi/A3904/A390403/39005752/';
const TABELOG_39005734 = 'https://tabelog.com/kochi/A3904/A390403/39005734/';
const TABELOG_39008796 = 'https://tabelog.com/kochi/A3904/A390403/39008796/';
const TABELOG_39001249 = 'https://tabelog.com/kochi/A3904/A390403/39001249/';
const TABELOG_39008592 = 'https://tabelog.com/kochi/A3904/A390403/39008592/';
const TABELOG_39002101 = 'https://tabelog.com/kochi/A3904/A390403/39002101/';
const TABELOG_39005730 = 'https://tabelog.com/kochi/A3904/A390403/39005730/';
const TABELOG_39007244 = 'https://tabelog.com/kochi/A3904/A390403/39007244/';
const TABELOG_39005761 = 'https://tabelog.com/kochi/A3904/A390403/39005761/';
const TABELOG_39004852 = 'https://tabelog.com/kochi/A3904/A390403/39004852/';
const TABELOG_39005743 = 'https://tabelog.com/kochi/A3904/A390403/39005743/';
const TABELOG_39009202 = 'https://tabelog.com/kochi/A3904/A390403/39009202/';
const TABELOG_39008598 = 'https://tabelog.com/kochi/A3904/A390403/39008598/';
const TABELOG_39004788 = 'https://tabelog.com/kochi/A3904/A390403/39004788/';

export const SUKUMO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '宿毛湾': SUKUMO_PLACE_PHOTO,
  '咸陽島': wikiPhoto(
    'sukumo-kanyoto.jpg',
    'https://commons.wikimedia.org/wiki/File:Kanyoutou20220628_1.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2022-06-28',
    '咸陽島', 'Kan\'yō Island, Sukumo'
  ),
  '宿毛城': wikiPhoto(
    'sukumo-castle.jpg',
    'https://commons.wikimedia.org/wiki/File:Sukumo_Castle,_enkei.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2018-02-17',
    '宿毛城', 'Sukumo Castle ruins'
  ),
  '延光寺': wikiPhoto(
    'sukumo-enkoji.jpg',
    'https://commons.wikimedia.org/wiki/File:Shakkizan_Enkoji_03.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-07-18',
    '延光寺', 'Enkō-ji, Sukumo'
  ),
  '沖の島': wikiPhoto(
    'sukumo-okinoshima.jpg',
    'https://commons.wikimedia.org/wiki/File:Kochi_Okinoshima_Island.jpg',
    'CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0',
    'ブルーノ・プラス', 'https://commons.wikimedia.org/wiki/File:Kochi_Okinoshima_Island.jpg', '2024-03',
    '沖の島', 'Okinoshima, Sukumo'
  ),
  '出井甌穴': wikiPhoto(
    'sukumo-dei-ouketsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Matsudariver1.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'ゆりのき橋', 'https://commons.wikimedia.org/wiki/File:Matsudariver1.jpg', '2015-08-18',
    '出井甌穴', 'Dei Ouketsu potholes, Sukumo'
  ),
  '道の駅すくも': wikiPhoto(
    'sukumo-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Roadside_Station_Sukumo.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'As6022014', 'https://commons.wikimedia.org/wiki/User:As6022014', '2010-07-28',
    '道の駅すくも', 'Michinoeki Sukumo'
  ),
  '宿毛リゾート椰子の湯': sourcePhoto(
    'sukumo-stay-yashi.jpg',
    '宿毛リゾート椰子の湯の客室写真',
    'Sukumo Resort Yashinoyu room photo',
    'https://travel.rakuten.co.jp/HOTEL/153227/153227.html',
    '楽天トラベル'
  ),
  '宿毛リゾート椰子の湯 露天風呂': sourcePhoto(
    'sukumo-onsen-yashi.jpg',
    '宿毛リゾート椰子の湯の露天風呂写真',
    'Sukumo Resort Yashinoyu outdoor bath photo',
    'https://travel.rakuten.co.jp/HOTEL/153227/153227.html',
    '楽天トラベル'
  ),
  '秋沢ホテル': sourcePhoto(
    'sukumo-stay-akizawa.jpg',
    '秋沢ホテルの客室写真',
    '秋沢ホテル room photo',
    'https://travel.rakuten.co.jp/HOTEL/4858/4858.html',
    '楽天トラベル'
  ),
  'ホテルアバン宿毛': sourcePhoto(
    'sukumo-stay-avan.jpg',
    'ホテルアバン宿毛の客室写真',
    'ホテルアバン宿毛 room photo',
    'https://travel.rakuten.co.jp/HOTEL/17785/17785.html',
    '楽天トラベル'
  ),
  'ホテル　マツヤ': sourcePhoto(
    'sukumo-stay-matsuya.jpg',
    'ホテル　マツヤの客室写真',
    'ホテル　マツヤ room photo',
    'https://travel.rakuten.co.jp/HOTEL/5413/5413.html',
    '楽天トラベル'
  ),
  'ホテル　あさひ': sourcePhoto(
    'sukumo-stay-asahi.jpg',
    'ホテル　あさひの客室写真',
    'ホテル　あさひ room photo',
    'https://travel.rakuten.co.jp/HOTEL/149313/149313.html',
    '楽天トラベル'
  ),
  'ＧＲＡＮＨＩＬＬＳ　ＹＡＳＨＩ': sourcePhoto(
    'sukumo-stay-granhills.jpg',
    'ＧＲＡＮＨＩＬＬＳ　ＹＡＳＨＩの客室写真',
    'ＧＲＡＮＨＩＬＬＳ　ＹＡＳＨＩ room photo',
    'https://travel.rakuten.co.jp/HOTEL/193042/193042.html',
    '楽天トラベル'
  ),
  'ゲストハウス　みんちゅう': sourcePhoto(
    'sukumo-stay-minchu.jpg',
    'ゲストハウス　みんちゅうの客室写真',
    'ゲストハウス　みんちゅう room photo',
    'https://travel.rakuten.co.jp/HOTEL/189207/189207.html',
    '楽天トラベル'
  ),
  'ゲストハウス　ＡＬＢＥＲＧＵＥ　ＳＡＫＵＲＡ': sourcePhoto(
    'sukumo-stay-albergue.jpg',
    'ゲストハウス　ＡＬＢＥＲＧＵＥ　ＳＡＫＵＲＡの客室写真',
    'ゲストハウス　ＡＬＢＥＲＧＵＥ　ＳＡＫＵＲＡ room photo',
    'https://travel.rakuten.co.jp/HOTEL/191989/191989.html',
    '楽天トラベル'
  ),
  'すくもＢＯＸ': sourcePhoto(
    'sukumo-stay-box.jpg',
    'すくもＢＯＸの客室写真',
    'すくもＢＯＸ room photo',
    'https://travel.rakuten.co.jp/HOTEL/192401/192401.html',
    '楽天トラベル'
  ),
  'まなべ': sourcePhoto('sukumo-39005745-dish.jpg', 'まなべの料理写真', 'まなべ food photo', TABELOG_39005745, '食べログ'),
  '居酒屋 いごっそ': sourcePhoto('sukumo-39005748-dish.jpg', '居酒屋 いごっその料理写真', '居酒屋 いごっそ food photo', TABELOG_39005748, '食べログ'),
  '天下茶屋': sourcePhoto('sukumo-39005752-dish.jpg', '天下茶屋の料理写真', '天下茶屋 food photo', TABELOG_39005752, '食べログ'),
  '彩食や 一期一笑': sourcePhoto('sukumo-39005734-dish.jpg', '彩食や 一期一笑の料理写真', '彩食や 一期一笑 food photo', TABELOG_39005734, '食べログ'),
  '眞兵衛': sourcePhoto('sukumo-39008796-dish.jpg', '眞兵衛の料理写真', '眞兵衛 food photo', TABELOG_39008796, '食べログ'),
  '酒と肴 直': sourcePhoto('sukumo-39001249-dish.jpg', '酒と肴 直の料理写真', '酒と肴 直 food photo', TABELOG_39001249, '食べログ'),
  '丸万': sourcePhoto('sukumo-39008592-dish.jpg', '丸万の料理写真', '丸万 food photo', TABELOG_39008592, '食べログ'),
  '豚太郎 宿毛店': sourcePhoto('sukumo-39002101-dish.jpg', '豚太郎 宿毛店の料理写真', '豚太郎 宿毛店 food photo', TABELOG_39002101, '食べログ'),
  'なにわや': sourcePhoto('sukumo-39005730-dish.jpg', 'なにわやの料理写真', 'なにわや food photo', TABELOG_39005730, '食べログ'),
  '睦月': sourcePhoto('sukumo-39007244-dish.jpg', '睦月の料理写真', '睦月 food photo', TABELOG_39007244, '食べログ'),
  '鶴亀': sourcePhoto('sukumo-39005761-dish.jpg', '鶴亀の料理写真', '鶴亀 food photo', TABELOG_39005761, '食べログ'),
  'みよき': sourcePhoto('sukumo-39004852-dish.jpg', 'みよきの料理写真', 'みよき food photo', TABELOG_39004852, '食べログ'),
  '末廣鮨': sourcePhoto('sukumo-39005743-dish.jpg', '末廣鮨の料理写真', '末廣鮨 food photo', TABELOG_39005743, '食べログ'),
  '手打うどん とし家': sourcePhoto('sukumo-39009202-dish.jpg', '手打うどん とし家の料理写真', '手打うどん とし家 food photo', TABELOG_39009202, '食べログ'),
  '麺屋 神楽': sourcePhoto('sukumo-39008598-dish.jpg', '麺屋 神楽の料理写真', '麺屋 神楽 food photo', TABELOG_39008598, '食べログ'),
  '来々軒': sourcePhoto('sukumo-39004788-dish.jpg', '来々軒の料理写真', '来々軒 food photo', TABELOG_39004788, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: SUKUMO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: SUKUMO.sources.accessed};
}

export const SUKUMO_FACILITIES: readonly FacilityRow[] = [
  sight('sukumo-sight-01', '宿毛湾', '高知県宿毛市', null, 'https://commons.wikimedia.org/wiki/File:Sukumo_Bay_-_Sep_6,_2019.jpg', 32.90041, 132.721771),
  sight('sukumo-sight-02', '咸陽島', '高知県宿毛市池島', null, 'https://commons.wikimedia.org/wiki/File:Kanyoutou20220628_1.jpg', 32.9160790, 132.6884152),
  sight('sukumo-sight-03', '宿毛城', '高知県宿毛市中央', null, 'https://commons.wikimedia.org/wiki/File:Sukumo_Castle,_enkei.jpg', 32.94110833, 132.7299),
  sight('sukumo-sight-04', '延光寺', '高知県宿毛市平田町中山', null, 'https://ja.wikipedia.org/wiki/%E5%BB%B6%E5%85%89%E5%AF%BA', 32.9613141, 132.7740727),
  sight('sukumo-sight-05', '沖の島', '高知県宿毛市沖の島', null, 'https://commons.wikimedia.org/wiki/File:Kochi_Okinoshima_Island.jpg', 32.7288285, 132.5509314),
  sight('sukumo-sight-06', '出井甌穴', '高知県宿毛市橋上町出井', null, 'https://commons.wikimedia.org/wiki/File:Matsudariver1.jpg', 33.0867640, 132.6819116),
  sight('sukumo-experience-01', '道の駅すくも', '高知県宿毛市小筑紫町内外ノ浦', null, 'https://commons.wikimedia.org/wiki/File:Roadside_Station_Sukumo.jpg', 32.9160503, 132.7127885),
  sight('sukumo-onsen-01', '宿毛リゾート椰子の湯 露天風呂', '高知県宿毛市大島17-27', '0880-65-8185', 'https://travel.rakuten.co.jp/HOTEL/153227/153227.html', 32.9159655, 132.6898453)
];
