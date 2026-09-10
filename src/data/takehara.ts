/**
 * Takehara City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34203. Third Hiroshima hub after 広島市・呉市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TAKEHARA = {
  nameJa: '竹原市',
  nameEn: 'Takehara',
  reading: 'たけはらし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'takehara',
  jis: '34203',
  jlis: '342033',
  sameAs: 'https://www.city.takehara.lg.jp/',
  hall: {
    postalCode: '725-8666',
    addressJa: '広島県竹原市中央五丁目6番28号',
    addressEn: '5-6-28 Chuo, Takehara City, Hiroshima 725-8666, Japan',
    phone: '0846-22-7719'
  },
  sources: {
    home: 'https://www.city.takehara.lg.jp/',
    hall: 'https://www.city.takehara.lg.jp/index.html',
    kanko: 'https://www.takeharakankou.jp/',
    historic: 'https://www.takeharakankou.jp/beginner/historic-district/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34203/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const TAKEHARA_EXPECTED_ROW_COUNT = 8;
export const TAKEHARA_EXPECTED_GEO_COUNT = 3;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 竹原市役所. Hero title remains municipality name only. */
export const TAKEHARA_PLACE_PHOTO = wikiPhoto(
  "takehara-city-hall.jpg",
  "https://commons.wikimedia.org/wiki/File:Takehara_City_Hall_2021-03_ac.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Asturio Cantabrio", "https://commons.wikimedia.org/wiki/File%3ATakehara_City_Hall_2021-03_ac.jpg", "2021",
  "竹原市役所", "Takehara City Hall"
);

export const TAKEHARA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "レストランアップルミント": sourcePhoto("takehara-34033816-dish.jpg", "レストランアップルミントの料理写真", "レストランアップルミント food photo", "https://tabelog.com/hiroshima/A3404/A340402/34033816/", '食べログ'),
  "ルアン NIPPONIA HOTEL 竹原 製塩町": sourcePhoto("takehara-34027252-dish.jpg", "ルアン NIPPONIA HOTEL 竹原 製塩町の料理写真", "ルアン NIPPONIA HOTEL 竹原 製塩町 food photo", "https://tabelog.com/hiroshima/A3404/A340402/34027252/", '食べログ'),
  "喜楽軒": sourcePhoto("takehara-34004471-dish.jpg", "喜楽軒の料理写真", "喜楽軒 food photo", "https://tabelog.com/hiroshima/A3404/A340402/34004471/", '食べログ'),
  "てっぱんやき千代": sourcePhoto("takehara-34010297-dish.jpg", "てっぱんやき千代の料理写真", "てっぱんやき千代 food photo", "https://tabelog.com/hiroshima/A3404/A340402/34010297/", '食べログ'),
  "茶房 きまぐれ": sourcePhoto("takehara-34031378-dish.jpg", "茶房 きまぐれの料理写真", "茶房 きまぐれ food photo", "https://tabelog.com/hiroshima/A3404/A340402/34031378/", '食べログ'),
  "竹原カントリークラブ レストラン": sourcePhoto("takehara-34029987-dish.jpg", "竹原カントリークラブ レストランの料理写真", "竹原カントリークラブ レストラン food photo", "https://tabelog.com/hiroshima/A3404/A340402/34029987/", '食べログ'),
  "キッチン&カフェ GUU": sourcePhoto("takehara-34030235-dish.jpg", "キッチン&カフェ GUUの料理写真", "キッチン&カフェ GUU food photo", "https://tabelog.com/hiroshima/A3404/A340402/34030235/", '食べログ'),
  "Hanashu": sourcePhoto("takehara-34033955-dish.jpg", "Hanashuの料理写真", "Hanashu food photo", "https://tabelog.com/hiroshima/A3404/A340402/34033955/", '食べログ'),
  "とん吉": sourcePhoto("takehara-34006765-dish.jpg", "とん吉の料理写真", "とん吉 food photo", "https://tabelog.com/hiroshima/A3404/A340402/34006765/", '食べログ'),
  "神田もち店": sourcePhoto("takehara-34013129-dish.jpg", "神田もち店の料理写真", "神田もち店 food photo", "https://tabelog.com/hiroshima/A3404/A340402/34013129/", '食べログ'),
  "中尾醸造株式会社": sourcePhoto("takehara-34020297-dish.jpg", "中尾醸造株式会社の料理写真", "中尾醸造株式会社 food photo", "https://tabelog.com/hiroshima/A3404/A340402/34020297/", '食べログ'),
  "MOMOKICHI庵": sourcePhoto("takehara-34030381-dish.jpg", "MOMOKICHI庵の料理写真", "MOMOKICHI庵 food photo", "https://tabelog.com/hiroshima/A3404/A340402/34030381/", '食べログ'),
  "CAFE-BY-THE-SEA": sourcePhoto("takehara-34032905-dish.jpg", "CAFE-BY-THE-SEAの料理写真", "CAFE-BY-THE-SEA food photo", "https://tabelog.com/hiroshima/A3404/A340402/34032905/", '食べログ'),
  "かまぼこの近末": sourcePhoto("takehara-34017098-dish.jpg", "かまぼこの近末の料理写真", "かまぼこの近末 food photo", "https://tabelog.com/hiroshima/A3404/A340402/34017098/", '食べログ'),
  "NIPPONIA HOTEL 竹原 製塩町": sourcePhoto("takehara-34030680-dish.jpg", "NIPPONIA HOTEL 竹原 製塩町の料理写真", "NIPPONIA HOTEL 竹原 製塩町 food photo", "https://tabelog.com/hiroshima/A3404/A340402/34030680/", '食べログ'),
  "お好み焼山ちゃん": sourcePhoto("takehara-34006596-dish.jpg", "お好み焼山ちゃんの料理写真", "お好み焼山ちゃん food photo", "https://tabelog.com/hiroshima/A3404/A340402/34006596/", '食べログ'),
  "グリーンスカイホテル竹原": sourcePhoto("takehara-stay-h147937.jpg", "グリーンスカイホテル竹原の客室写真", "グリーンスカイホテル竹原 room photo", "https://travel.rakuten.co.jp/HOTEL/147937/147937.html", '楽天トラベル'),
  "ＮＩＰＰＯＮＩＡ　ＨＯＴＥＬ　竹原　製塩町": sourcePhoto("takehara-stay-h176744.jpg", "ＮＩＰＰＯＮＩＡ　ＨＯＴＥＬ　竹原　製塩町の客室写真", "ＮＩＰＰＯＮＩＡ　ＨＯＴＥＬ　竹原　製塩町 room photo", "https://travel.rakuten.co.jp/HOTEL/176744/176744.html", '楽天トラベル'),
  "ホテル　大広苑": sourcePhoto("takehara-stay-h7002.jpg", "ホテル　大広苑の客室写真", "ホテル　大広苑 room photo", "https://travel.rakuten.co.jp/HOTEL/7002/7002.html", '楽天トラベル'),
  "Ｔａｂｉｓｔ　瀬戸内の宿　竹原シーサイド": sourcePhoto("takehara-stay-h187988.jpg", "Ｔａｂｉｓｔ　瀬戸内の宿　竹原シーサイドの客室写真", "Ｔａｂｉｓｔ　瀬戸内の宿　竹原シーサイド room photo", "https://travel.rakuten.co.jp/HOTEL/187988/187988.html", '楽天トラベル'),
  "休暇村　大久野島": sourcePhoto("takehara-stay-h31391.jpg", "休暇村　大久野島の客室写真", "休暇村　大久野島 room photo", "https://travel.rakuten.co.jp/HOTEL/31391/31391.html", '楽天トラベル'),
  "古民家宿　あかり忠海／民泊": sourcePhoto("takehara-stay-h186383.jpg", "古民家宿　あかり忠海／民泊の客室写真", "古民家宿　あかり忠海／民泊 room photo", "https://travel.rakuten.co.jp/HOTEL/186383/186383.html", '楽天トラベル'),
  "瀬戸内リゾートヴィラ": sourcePhoto("takehara-stay-h199073.jpg", "瀬戸内リゾートヴィラの客室写真", "瀬戸内リゾートヴィラ room photo", "https://travel.rakuten.co.jp/HOTEL/199073/199073.html", '楽天トラベル'),
  "Ｔａｂｉｓｔ　瀬戸内の宿　竹原シーサイド 大浴場": sourcePhoto("takehara-onsen-h187988.jpg", "Ｔａｂｉｓｔ　瀬戸内の宿　竹原シーサイド 大浴場の写真", "Ｔａｂｉｓｔ　瀬戸内の宿　竹原シーサイド 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/187988/gallery.html", '楽天トラベル'),
  "休暇村　大久野島 大浴場": sourcePhoto("takehara-onsen-h31391.jpg", "休暇村　大久野島 大浴場の写真", "休暇村　大久野島 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/31391/gallery.html", '楽天トラベル'),
  "ホテル　大広苑 大浴場": sourcePhoto("takehara-onsen-h7002.jpg", "ホテル　大広苑 大浴場の写真", "ホテル　大広苑 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/7002/gallery.html", '楽天トラベル'),
  "たけはら町並み保存地区": wikiPhoto(
  "takehara-district.jpg",
  "https://commons.wikimedia.org/wiki/File:Takehara_district_2010.jpg",
  "Government of Japan Standard Terms of Use", "https://creativecommons.org/",
  "The Ministry of Land, Infrastructure, Transport and Tourism of Japan", "https://commons.wikimedia.org/wiki/File%3ATakehara_district_2010.jpg", "2010",
  "たけはら町並み保存地区", "Takehara Historic District"
),
  "西方寺・普明閣": wikiPhoto(
  "takehara-fumeikaku.jpg",
  "https://commons.wikimedia.org/wiki/File:Takehara_Fumeikaku_2013-08.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "At by At", "https://commons.wikimedia.org/wiki/File%3ATakehara_Fumeikaku_2013-08.JPG", "2013",
  "西方寺・普明閣", "Saiho-ji Fumeikaku"
),
  "松阪邸": wikiPhoto(
  "takehara-matsuzaka.jpg",
  "https://commons.wikimedia.org/wiki/File:Takehara_Matsuzaka-tei_2013-08.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "At by At", "https://commons.wikimedia.org/wiki/File%3ATakehara_Matsuzaka-tei_2013-08.JPG", "2013",
  "松阪邸", "Matsuzaka Residence"
),
  "大久野島": wikiPhoto(
  "takehara-okunoshima.jpg",
  "https://commons.wikimedia.org/wiki/File:Okunoshima_2.JPG",
  "Public domain", "https://creativecommons.org/",
  "Vickerman625", "https://commons.wikimedia.org/wiki/File%3AOkunoshima_2.JPG", "2010",
  "大久野島", "Okunoshima"
),
  "忠海港": wikiPhoto(
  "takehara-tadanoumi-port.jpg",
  "https://commons.wikimedia.org/wiki/File:Tadanoumi_Port%2C_Takehara%2C_Hiroshima_Prefecture%2C_Japan.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "OKJaguar", "https://commons.wikimedia.org/wiki/File%3ATadanoumi_Port%2C_Takehara%2C_Hiroshima_Prefecture%2C_Japan.jpg", "2019",
  "忠海港", "Tadanoumi Port"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: TAKEHARA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光・Commons掲載情報', accessed: TAKEHARA.sources.accessed};
}

export const TAKEHARA_FACILITIES: readonly FacilityRow[] = [
  sight("takehara-sight-01", "たけはら町並み保存地区", "広島県竹原市本町3丁目", null, "https://www.takeharakankou.jp/beginner/historic-district/", 34.3425, 132.9095),
  sight("takehara-sight-02", "西方寺・普明閣", "広島県竹原市本町3丁目10-44", null, "https://www.takeharakankou.jp/spot/7514/", 34.3436, 132.9106),
  sight("takehara-sight-03", "松阪邸", "広島県竹原市本町3丁目", null, "https://commons.wikimedia.org/wiki/File:Takehara_Matsuzaka-tei_2013-08.JPG", null, null),
  sight("takehara-sight-04", "大久野島", "広島県竹原市忠海町大久野島", null, "https://www.env.go.jp/park/setonaikai/guide/okunoshima.html", 34.3083, 133.0000),
  sight("takehara-sight-05", "忠海港", "広島県竹原市忠海中町1丁目", null, "https://commons.wikimedia.org/wiki/File:Tadanoumi_Port,_Takehara,_Hiroshima_Prefecture,_Japan.jpg", null, null),
  sight("takehara-onsen-01", "Ｔａｂｉｓｔ　瀬戸内の宿　竹原シーサイド 大浴場", "広島県竹原市忠海長浜3-18-26", "0846-26-2236", "https://travel.rakuten.co.jp/HOTEL/187988/gallery.html", null, null),
  sight("takehara-onsen-02", "休暇村　大久野島 大浴場", "広島県竹原市忠海町大久野島", "0846-26-0321", "https://travel.rakuten.co.jp/HOTEL/31391/gallery.html", null, null),
  sight("takehara-onsen-03", "ホテル　大広苑 大浴場", "広島県竹原市竹原町3591", "0846-22-2970", "https://travel.rakuten.co.jp/HOTEL/7002/gallery.html", null, null),
];
