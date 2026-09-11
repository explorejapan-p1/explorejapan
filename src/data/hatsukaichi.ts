/**
 * Hatsukaichi City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34213. Twelfth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const HATSUKAICHI = {
  nameJa: '廿日市',
  nameEn: 'Hatsukaichi',
  reading: 'はつかいちし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'hatsukaichi',
  jis: '34213',
  jlis: '342130',
  sameAs: 'https://www.city.hatsukaichi.hiroshima.jp/',
  hall: {
    postalCode: '738-8501',
    addressJa: '広島県廿日市市下平良一丁目11番1号',
    addressEn: '11-1 Shimohira 1-chome, Hatsukaichi City, Hiroshima 738-8501, Japan',
    phone: '0829-20-0001'
  },
  sources: {
    home: 'https://www.city.hatsukaichi.hiroshima.jp/',
    hall: 'https://www.city.hatsukaichi.hiroshima.jp/',
    kanko: 'https://www.city.hatsukaichi.hiroshima.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34213/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const HATSUKAICHI_EXPECTED_ROW_COUNT = 10;
export const HATSUKAICHI_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 厳島神社大鳥居夕景. Hero title remains municipality name only. Unique (no wakimachi). */
export const HATSUKAICHI_PLACE_PHOTO = wikiPhoto(
  "hatsukaichi-cover-torii.jpg",
  "https://commons.wikimedia.org/wiki/File%3AItsukushima-jinja%20torii%20at%20sunset.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Bernard Gagnon", "https://commons.wikimedia.org/wiki/File%3AItsukushima-jinja%20torii%20at%20sunset.jpg", "2008",
  "厳島神社大鳥居（夕景）", "Itsukushima Shrine torii at sunset"
);

export const HATSUKAICHI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "そじ坊 ゆめタウン廿日市店": sourcePhoto("hatsukaichi-34020822-dish.jpg", "そじ坊 ゆめタウン廿日市店の料理写真", "そじ坊 ゆめタウン廿日市店 food photo", "https://tabelog.com/hiroshima/A3402/A340201/34020822/", '食べログ'),
  "宮島鮨 まいもん": sourcePhoto("hatsukaichi-34028196-dish.jpg", "宮島鮨 まいもんの料理写真", "宮島鮨 まいもん food photo", "https://tabelog.com/hiroshima/A3402/A340205/34028196/", '食べログ'),
  "宮島味処 しまの音": sourcePhoto("hatsukaichi-34034829-dish.jpg", "宮島味処 しまの音の料理写真", "宮島味処 しまの音 food photo", "https://tabelog.com/hiroshima/A3402/A340202/34034829/", '食べログ'),
  "備長扇屋 廿日市串戸店": sourcePhoto("hatsukaichi-34020727-dish.jpg", "備長扇屋 廿日市串戸店の料理写真", "備長扇屋 廿日市串戸店 food photo", "https://tabelog.com/hiroshima/A3402/A340201/34020727/", '食べログ'),
  "天扇": sourcePhoto("hatsukaichi-34023529-dish.jpg", "天扇の料理写真", "天扇 food photo", "https://tabelog.com/hiroshima/A3402/A340202/34023529/", '食べログ'),
  "炭火焼肉 ぶち 廿日市店": sourcePhoto("hatsukaichi-34028754-dish.jpg", "炭火焼肉 ぶち 廿日市店の料理写真", "炭火焼肉 ぶち 廿日市店 food photo", "https://tabelog.com/hiroshima/A3402/A340201/34028754/", '食べログ'),
  "きわみ和牛鉄板宮美": sourcePhoto("hatsukaichi-34034867-dish.jpg", "きわみ和牛鉄板宮美の料理写真", "きわみ和牛鉄板宮美 food photo", "https://tabelog.com/hiroshima/A3402/A340205/34034867/", '食べログ'),
  "イノクチ水産さかなや道場 広電廿日市駅前店": sourcePhoto("hatsukaichi-34022119-dish.jpg", "イノクチ水産さかなや道場 広電廿日市駅前店の料理写真", "イノクチ水産さかなや道場 広電廿日市駅前店 food photo", "https://tabelog.com/hiroshima/A3402/A340201/34022119/", '食べログ'),
  "魚民 廿日市駅前店": sourcePhoto("hatsukaichi-34012130-dish.jpg", "魚民 廿日市駅前店の料理写真", "魚民 廿日市駅前店 food photo", "https://tabelog.com/hiroshima/A3402/A340201/34012130/", '食べログ'),
  "お好み焼き　徳川 廿日市店": sourcePhoto("hatsukaichi-34023648-dish.jpg", "お好み焼き　徳川 廿日市店の料理写真", "お好み焼き　徳川 廿日市店 food photo", "https://tabelog.com/hiroshima/A3402/A340201/34023648/", '食べログ'),
  "宮島茶屋～CHAYA～": sourcePhoto("hatsukaichi-34033606-dish.jpg", "宮島茶屋～CHAYA～の料理写真", "宮島茶屋～CHAYA～ food photo", "https://tabelog.com/hiroshima/A3402/A340202/34033606/", '食べログ'),
  "ガネーシュ 廿日市店": sourcePhoto("hatsukaichi-34007082-dish.jpg", "ガネーシュ 廿日市店の料理写真", "ガネーシュ 廿日市店 food photo", "https://tabelog.com/hiroshima/A3402/A340201/34007082/", '食べログ'),
  "他人吉": sourcePhoto("hatsukaichi-34002628-dish.jpg", "他人吉の料理写真", "他人吉 food photo", "https://tabelog.com/hiroshima/A3402/A340205/34002628/", '食べログ'),
  "旨味処 朋": sourcePhoto("hatsukaichi-34027868-dish.jpg", "旨味処 朋の料理写真", "旨味処 朋 food photo", "https://tabelog.com/hiroshima/A3402/A340201/34027868/", '食べログ'),
  "HIGHWAY OUTDOOR PARK 宮島": sourcePhoto("hatsukaichi-34029118-dish.jpg", "HIGHWAY OUTDOOR PARK 宮島の料理写真", "HIGHWAY OUTDOOR PARK 宮島 food photo", "https://tabelog.com/hiroshima/A3402/A340201/34029118/", '食べログ'),
  "お好み焼 まとちゃん": sourcePhoto("hatsukaichi-34018532-dish.jpg", "お好み焼 まとちゃんの料理写真", "お好み焼 まとちゃん food photo", "https://tabelog.com/hiroshima/A3402/A340202/34018532/", '食べログ'),
  "安芸グランドホテル": sourcePhoto("hatsukaichi-stay-h7754.jpg", "安芸グランドホテルの客室写真", "安芸グランドホテル room photo", "https://travel.rakuten.co.jp/HOTEL/7754/7754.html", '楽天トラベル'),
  "グランヴィリオホテル宮島　和蔵　－ルートインホテルズ－": sourcePhoto("hatsukaichi-stay-h180527.jpg", "グランヴィリオホテル宮島　和蔵　－ルートインホテルズ－の客室写真", "グランヴィリオホテル宮島　和蔵　－ルートインホテルズ－ room photo", "https://travel.rakuten.co.jp/HOTEL/180527/180527.html", '楽天トラベル'),
  "リブマックスリゾート宮浜温泉Ｏｃｅａｎ": sourcePhoto("hatsukaichi-stay-h178590.jpg", "リブマックスリゾート宮浜温泉Ｏｃｅａｎの客室写真", "リブマックスリゾート宮浜温泉Ｏｃｅａｎ room photo", "https://travel.rakuten.co.jp/HOTEL/178590/178590.html", '楽天トラベル'),
  "宮島グランドホテル　有もと": sourcePhoto("hatsukaichi-stay-h18848.jpg", "宮島グランドホテル　有もとの客室写真", "宮島グランドホテル　有もと room photo", "https://travel.rakuten.co.jp/HOTEL/18848/18848.html", '楽天トラベル'),
  "リブマックスリゾート安芸宮島": sourcePhoto("hatsukaichi-stay-h163048.jpg", "リブマックスリゾート安芸宮島の客室写真", "リブマックスリゾート安芸宮島 room photo", "https://travel.rakuten.co.jp/HOTEL/163048/163048.html", '楽天トラベル'),
  "宮島　神撰の宿　ホテルみや離宮": sourcePhoto("hatsukaichi-stay-h11125.jpg", "宮島　神撰の宿　ホテルみや離宮の客室写真", "宮島　神撰の宿　ホテルみや離宮 room photo", "https://travel.rakuten.co.jp/HOTEL/11125/11125.html", '楽天トラベル'),
  "宮島コーラルホテル": sourcePhoto("hatsukaichi-stay-h17769.jpg", "宮島コーラルホテルの客室写真", "宮島コーラルホテル room photo", "https://travel.rakuten.co.jp/HOTEL/17769/17769.html", '楽天トラベル'),
  "ホテル宮島別荘": sourcePhoto("hatsukaichi-stay-h161276.jpg", "ホテル宮島別荘の客室写真", "ホテル宮島別荘 room photo", "https://travel.rakuten.co.jp/HOTEL/161276/161276.html", '楽天トラベル'),
  "宮浜温泉　湯の宿　宮浜グランドホテル": sourcePhoto("hatsukaichi-stay-h13743.jpg", "宮浜温泉　湯の宿　宮浜グランドホテルの客室写真", "宮浜温泉　湯の宿　宮浜グランドホテル room photo", "https://travel.rakuten.co.jp/HOTEL/13743/13743.html", '楽天トラベル'),
  "安芸グランドホテル 大浴場【平安の湯　雅】": sourcePhoto("hatsukaichi-onsen-h7754.jpg", "安芸グランドホテル 大浴場【平安の湯　雅】の写真", "安芸グランドホテル 大浴場【平安の湯　雅】 bath photo", "https://travel.rakuten.co.jp/HOTEL/7754/gallery.html", '楽天トラベル'),
  "グランヴィリオホテル宮島　天然温泉「日本三景　みやじまの湯」男性用露天風呂": sourcePhoto("hatsukaichi-onsen-h180527.jpg", "グランヴィリオホテル宮島　天然温泉「日本三景　みやじまの湯」男性用露天風呂の写真", "グランヴィリオホテル宮島　天然温泉「日本三景　みやじまの湯」男性用露天風呂 bath photo", "https://travel.rakuten.co.jp/HOTEL/180527/gallery.html", '楽天トラベル'),
  "宮島　神撰の宿　ホテルみや離宮 大浴場　乙姫": sourcePhoto("hatsukaichi-onsen-h11125.jpg", "宮島　神撰の宿　ホテルみや離宮 大浴場　乙姫の写真", "宮島　神撰の宿　ホテルみや離宮 大浴場　乙姫 bath photo", "https://travel.rakuten.co.jp/HOTEL/11125/gallery.html", '楽天トラベル'),
  "ホテル宮島別荘 展望畳大浴場 湯Like": sourcePhoto("hatsukaichi-onsen-h161276.jpg", "ホテル宮島別荘 展望畳大浴場 湯Likeの写真", "ホテル宮島別荘 展望畳大浴場 湯Like bath photo", "https://travel.rakuten.co.jp/HOTEL/161276/gallery.html", '楽天トラベル'),
  "宮浜温泉　湯の宿　宮浜グランドホテル 広島側大浴場": sourcePhoto("hatsukaichi-onsen-h13743.jpg", "宮浜温泉　湯の宿　宮浜グランドホテル 広島側大浴場の写真", "宮浜温泉　湯の宿　宮浜グランドホテル 広島側大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/13743/gallery.html", '楽天トラベル'),
  "厳島神社": wikiPhoto(
  "hatsukaichi-itsukushima.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMain%20Shrine%2C%20Itsukushima%20Shinto%20Shrine%2C%20Miyajima%2C%2020240816%201710%204026.jpg",
  "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0",
  "Jakub Hałun", "https://commons.wikimedia.org/wiki/File%3AMain%20Shrine%2C%20Itsukushima%20Shinto%20Shrine%2C%20Miyajima%2C%2020240816%201710%204026.jpg", "2024",
  "厳島神社本殿", "Itsukushima Shrine main hall"
),
  "厳島神社大鳥居": wikiPhoto(
  "hatsukaichi-torii.jpg",
  "https://commons.wikimedia.org/wiki/File%3AItsukushima%20Gate.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "JordyMeow", "https://commons.wikimedia.org/wiki/File%3AItsukushima%20Gate.jpg", "2012",
  "厳島神社大鳥居", "Itsukushima Shrine great torii"
),
  "五重塔": wikiPhoto(
  "hatsukaichi-pagoda.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMiyajima%20Five%20story%20pagoda.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "NY066", "https://commons.wikimedia.org/wiki/File%3AMiyajima%20Five%20story%20pagoda.JPG", "2011",
  "宮島五重塔", "Miyajima five-story pagoda"
),
  "紅葉谷公園": wikiPhoto(
  "hatsukaichi-momijidani.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E7%B4%85%E8%91%89%E8%B0%B7%E5%85%AC%E5%9C%92%20%E5%AE%AE%E5%B3%B6.jpg",
  "CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0",
  "Steven Perez", "https://commons.wikimedia.org/wiki/File%3A%E7%B4%85%E8%91%89%E8%B0%B7%E5%85%AC%E5%9C%92%20%E5%AE%AE%E5%B3%B6.jpg", "2018",
  "紅葉谷公園", "Momijidani Park"
),
  "弥山": wikiPhoto(
  "hatsukaichi-misen.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMiyajima%2C%20Mount%20Misen%2C%20Japan6.jpg",
  "CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0",
  "dconvertini", "https://commons.wikimedia.org/wiki/File%3AMiyajima%2C%20Mount%20Misen%2C%20Japan6.jpg", "2019",
  "弥山", "Mount Misen"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: HATSUKAICHI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: HATSUKAICHI.sources.accessed};
}

export const HATSUKAICHI_FACILITIES: readonly FacilityRow[] = [
  sight("hatsukaichi-sight-01", "厳島神社", "広島県廿日市市宮島町1-1", null, "https://commons.wikimedia.org/wiki/File%3AMain%20Shrine%2C%20Itsukushima%20Shinto%20Shrine%2C%20Miyajima%2C%2020240816%201710%204026.jpg", 34.2965341, 132.3190047),
  sight("hatsukaichi-sight-02", "厳島神社大鳥居", "広島県廿日市市宮島町", null, "https://commons.wikimedia.org/wiki/File%3AItsukushima%20Gate.jpg", 34.2972999, 132.3181356),
  sight("hatsukaichi-sight-03", "五重塔", "広島県廿日市市宮島町", null, "https://commons.wikimedia.org/wiki/File%3AMiyajima%20Five%20story%20pagoda.JPG", 34.2971947, 132.3207385),
  sight("hatsukaichi-sight-04", "紅葉谷公園", "広島県廿日市市宮島町", null, "https://commons.wikimedia.org/wiki/File%3A%E7%B4%85%E8%91%89%E8%B0%B7%E5%85%AC%E5%9C%92%20%E5%AE%AE%E5%B3%B6.jpg", 34.2938092, 132.3250384),
  sight("hatsukaichi-sight-05", "弥山", "広島県廿日市市宮島町", null, "https://commons.wikimedia.org/wiki/File%3AMiyajima%2C%20Mount%20Misen%2C%20Japan6.jpg", 34.2798121, 132.3197462),
  sight("hatsukaichi-onsen-01", "安芸グランドホテル 大浴場【平安の湯　雅】", "広島県廿日市市宮島口西1-1-17", "0829-56-0111", "https://travel.rakuten.co.jp/HOTEL/7754/gallery.html", null, null),
  sight("hatsukaichi-onsen-02", "グランヴィリオホテル宮島　天然温泉「日本三景　みやじまの湯」男性用露天風呂", "広島県廿日市市宮島口西1丁目1ｰ37", "0829-50-2501", "https://travel.rakuten.co.jp/HOTEL/180527/gallery.html", null, null),
  sight("hatsukaichi-onsen-03", "宮島　神撰の宿　ホテルみや離宮 大浴場　乙姫", "広島県廿日市市宮島町849", null, "https://travel.rakuten.co.jp/HOTEL/11125/gallery.html", null, null),
  sight("hatsukaichi-onsen-04", "ホテル宮島別荘 展望畳大浴場 湯Like", "広島県廿日市市宮島町1165", null, "https://travel.rakuten.co.jp/HOTEL/161276/gallery.html", null, null),
  sight("hatsukaichi-onsen-05", "宮浜温泉　湯の宿　宮浜グランドホテル 広島側大浴場", "広島県廿日市市宮浜温泉2-5-4", null, "https://travel.rakuten.co.jp/HOTEL/13743/gallery.html", null, null),
];
