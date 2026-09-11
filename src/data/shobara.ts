/**
 * Shobara City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34210. Ninth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SHOBARA = {
  nameJa: '庄原市',
  nameEn: 'Shobara',
  reading: 'しょうばらし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'shobara',
  jis: '34210',
  jlis: '342100',
  sameAs: 'https://www.city.shobara.hiroshima.jp/',
  hall: {
    postalCode: '727-8501',
    addressJa: '広島県庄原市中本町一丁目10番1号',
    addressEn: '10-1 Nakahonmachi 1-chome, Shobara City, Hiroshima 727-8501, Japan',
    phone: '0824-73-1111'
  },
  sources: {
    home: 'https://www.city.shobara.hiroshima.jp/',
    hall: 'https://www.city.shobara.hiroshima.jp/',
    kanko: 'https://www.shobara-info.com/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34210/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const SHOBARA_EXPECTED_ROW_COUNT = 9;
export const SHOBARA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 国営備北丘陵公園. Hero title remains municipality name only. Unique (no wakimachi). */

export const SHOBARA_PLACE_PHOTO = wikiPhoto(
  "shobara-cover-bihoku.jpg",
  "https://commons.wikimedia.org/wiki/File%3ABihoku_Hillside_nationalpark_2015.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Osamiw", "https://commons.wikimedia.org/wiki/File%3ABihoku_Hillside_nationalpark_2015.jpg", "2015",
  "国営備北丘陵公園", "Bihoku Hillside National Park"
);

export const SHOBARA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {

  "あしび": sourcePhoto("shobara-34018127-dish.jpg", "あしびの料理写真", "あしび food photo", "https://tabelog.com/hiroshima/A3405/A340502/34018127/", '食べログ'),
  "ボア": sourcePhoto("shobara-34006023-dish.jpg", "ボアの料理写真", "ボア food photo", "https://tabelog.com/hiroshima/A3405/A340502/34006023/", '食べログ'),
  "酒落": sourcePhoto("shobara-34012454-dish.jpg", "酒落の料理写真", "酒落 food photo", "https://tabelog.com/hiroshima/A3405/A340502/34012454/", '食べログ'),
  "たかのキッチン": sourcePhoto("shobara-34018153-dish.jpg", "たかのキッチンの料理写真", "たかのキッチン food photo", "https://tabelog.com/hiroshima/A3405/A340502/34018153/", '食べログ'),
  "そば処　みのり": sourcePhoto("shobara-34017058-dish.jpg", "そば処　みのりの料理写真", "そば処　みのり food photo", "https://tabelog.com/hiroshima/A3405/A340502/34017058/", '食べログ'),
  "イザナミ茶屋": sourcePhoto("shobara-34007653-dish.jpg", "イザナミ茶屋の料理写真", "イザナミ茶屋 food photo", "https://tabelog.com/hiroshima/A3405/A340502/34007653/", '食べログ'),
  "いさ味": sourcePhoto("shobara-34011341-dish.jpg", "いさ味の料理写真", "いさ味 food photo", "https://tabelog.com/hiroshima/A3405/A340502/34011341/", '食べログ'),
  "手づくり工房アーミッシュ": sourcePhoto("shobara-34024821-dish.jpg", "手づくり工房アーミッシュの料理写真", "手づくり工房アーミッシュ food photo", "https://tabelog.com/hiroshima/A3405/A340502/34024821/", '食べログ'),
  "生活や": sourcePhoto("shobara-34013068-dish.jpg", "生活やの料理写真", "生活や food photo", "https://tabelog.com/hiroshima/A3405/A340502/34013068/", '食べログ'),
  "ラ・アレーズ": sourcePhoto("shobara-34018171-dish.jpg", "ラ・アレーズの料理写真", "ラ・アレーズ food photo", "https://tabelog.com/hiroshima/A3405/A340502/34018171/", '食べログ'),
  "アンドカフェ": sourcePhoto("shobara-34032186-dish.jpg", "アンドカフェの料理写真", "アンドカフェ food photo", "https://tabelog.com/hiroshima/A3405/A340502/34032186/", '食べログ'),
  "ターボ": sourcePhoto("shobara-34008302-dish.jpg", "ターボの料理写真", "ターボ food photo", "https://tabelog.com/hiroshima/A3405/A340502/34008302/", '食べログ'),
  "パンドラ": sourcePhoto("shobara-34009801-dish.jpg", "パンドラの料理写真", "パンドラ food photo", "https://tabelog.com/hiroshima/A3405/A340502/34009801/", '食べログ'),
  "ブレッドハウス 庄原店": sourcePhoto("shobara-34011843-dish.jpg", "ブレッドハウス 庄原店の料理写真", "ブレッドハウス 庄原店 food photo", "https://tabelog.com/hiroshima/A3405/A340502/34011843/", '食べログ'),
  "ふくふく牧場のチーズ工房": sourcePhoto("shobara-34020210-dish.jpg", "ふくふく牧場のチーズ工房の料理写真", "ふくふく牧場のチーズ工房 food photo", "https://tabelog.com/hiroshima/A3405/A340502/34020210/", '食べログ'),
  "アーリータイム": sourcePhoto("shobara-34012067-dish.jpg", "アーリータイムの料理写真", "アーリータイム food photo", "https://tabelog.com/hiroshima/A3405/A340502/34012067/", '食べログ'),
  "庄原グランドホテル": sourcePhoto("shobara-stay-h134802.jpg", "庄原グランドホテルの客室写真", "庄原グランドホテル room photo", "https://travel.rakuten.co.jp/HOTEL/134802/134802.html", '楽天トラベル'),
  "帝釈峡観光ホテル別館養浩荘": sourcePhoto("shobara-stay-h144499.jpg", "帝釈峡観光ホテル別館養浩荘の客室写真", "帝釈峡観光ホテル別館養浩荘 room photo", "https://travel.rakuten.co.jp/HOTEL/144499/144499.html", '楽天トラベル'),
  "ホテル比婆荘": sourcePhoto("shobara-stay-h158671.jpg", "ホテル比婆荘の客室写真", "ホテル比婆荘 room photo", "https://travel.rakuten.co.jp/HOTEL/158671/158671.html", '楽天トラベル'),
  "せとうち古民家ステイズＨｉｒｏｓｈｉｍａ　こざこ森": sourcePhoto("shobara-stay-h179716.jpg", "せとうち古民家ステイズＨｉｒｏｓｈｉｍａ　こざこ森の客室写真", "せとうち古民家ステイズＨｉｒｏｓｈｉｍａ　こざこ森 room photo", "https://travel.rakuten.co.jp/HOTEL/179716/179716.html", '楽天トラベル'),
  "桜花の郷　ラ・フォーレ庄原": sourcePhoto("shobara-stay-h183874.jpg", "桜花の郷　ラ・フォーレ庄原の客室写真", "桜花の郷　ラ・フォーレ庄原 room photo", "https://travel.rakuten.co.jp/HOTEL/183874/183874.html", '楽天トラベル'),
  "帝釈峡観光ホテル　錦彩館": sourcePhoto("shobara-stay-h28051.jpg", "帝釈峡観光ホテル　錦彩館の客室写真", "帝釈峡観光ホテル　錦彩館 room photo", "https://travel.rakuten.co.jp/HOTEL/28051/28051.html", '楽天トラベル'),
  "休暇村　帝釈峡": sourcePhoto("shobara-stay-h50714.jpg", "休暇村　帝釈峡の客室写真", "休暇村　帝釈峡 room photo", "https://travel.rakuten.co.jp/HOTEL/50714/50714.html", '楽天トラベル'),
  "桜花の郷　ラ・フォーレ庄原 大浴場": sourcePhoto("shobara-onsen-h183874.jpg", "桜花の郷　ラ・フォーレ庄原 大浴場の写真", "桜花の郷　ラ・フォーレ庄原 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/183874/gallery.html", '楽天トラベル'),
  "休暇村　帝釈峡 本館大浴場「さもやまの湯」": sourcePhoto("shobara-onsen-h50714.jpg", "休暇村　帝釈峡 本館大浴場「さもやまの湯」の写真", "休暇村　帝釈峡 本館大浴場「さもやまの湯」 bath photo", "https://travel.rakuten.co.jp/HOTEL/50714/gallery.html", '楽天トラベル'),
  "帝釈峡観光ホテル　錦彩館 露天風呂": sourcePhoto("shobara-onsen-h28051.jpg", "帝釈峡観光ホテル　錦彩館 露天風呂の写真", "帝釈峡観光ホテル　錦彩館 露天風呂 bath photo", "https://travel.rakuten.co.jp/HOTEL/28051/gallery.html", '楽天トラベル'),
  "帝釈峡観光ホテル別館養浩荘 大浴場": sourcePhoto("shobara-onsen-h144499.jpg", "帝釈峡観光ホテル別館養浩荘 大浴場の写真", "帝釈峡観光ホテル別館養浩荘 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/144499/gallery.html", '楽天トラベル'),
  "国営備北丘陵公園": wikiPhoto(
  "shobara-cover-bihoku.jpg",
  "https://commons.wikimedia.org/wiki/File%3ABihoku_Hillside_nationalpark_2015.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Osamiw", "https://commons.wikimedia.org/wiki/File%3ABihoku_Hillside_nationalpark_2015.jpg", "2015",
  "国営備北丘陵公園", "Bihoku Hillside National Park"
),
  "備後庄原駅": wikiPhoto(
  "shobara-station.jpg",
  "https://commons.wikimedia.org/wiki/File%3ABingo-Shobara_sta._2020.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Gahukuro", "https://commons.wikimedia.org/wiki/File%3ABingo-Shobara_sta._2020.jpg", "2020",
  "備後庄原駅", "Bingo-Shōbara Station"
),
  "雄橋": wikiPhoto(
  "shobara-onbashi.jpg",
  "https://commons.wikimedia.org/wiki/File%3ATaishaku-onbashi.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "As6022014", "https://commons.wikimedia.org/wiki/File%3ATaishaku-onbashi.jpg", "2007",
  "帝釈峡の雄橋", "Onbashi natural bridge, Taishakukyo"
),
  "比婆山": wikiPhoto(
  "shobara-hibayama.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E6%AF%94%E5%A9%86%E5%B1%B1.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Kamishirowk", "https://commons.wikimedia.org/wiki/File%3A%E6%AF%94%E5%A9%86%E5%B1%B1.JPG", "2012",
  "比婆山", "Mount Hiba"
),
  "道の駅たかの": wikiPhoto(
  "shobara-michinoeki-takano.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMichinoeki_Takano_Shobara_01.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Sanjo", "https://commons.wikimedia.org/wiki/File%3AMichinoeki_Takano_Shobara_01.JPG", "2013",
  "道の駅たかの", "Michinoeki Takano"
),
};


function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: SHOBARA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: SHOBARA.sources.accessed};
}

export const SHOBARA_FACILITIES: readonly FacilityRow[] = [

  sight("shobara-sight-01", "国営備北丘陵公園", "広島県庄原市三日市町4-10", null, "https://commons.wikimedia.org/wiki/File%3ABihoku_Hillside_nationalpark_2015.jpg", 34.8395801, 132.996659),
  sight("shobara-sight-02", "備後庄原駅", "広島県庄原市中本町一丁目", null, "https://commons.wikimedia.org/wiki/File%3ABingo-Shobara_sta._2020.jpg", 34.8623737, 133.0164899),
  sight("shobara-sight-03", "雄橋", "広島県庄原市東城町", null, "https://commons.wikimedia.org/wiki/File%3ATaishaku-onbashi.jpg", 34.8621715, 133.2063009),
  sight("shobara-sight-04", "比婆山", "広島県庄原市西城町", null, "https://commons.wikimedia.org/wiki/File%3A%E6%AF%94%E5%A9%86%E5%B1%B1.JPG", 34.9659636, 133.1232051),
  sight("shobara-sight-05", "道の駅たかの", "広島県庄原市高野町下門田49", null, "https://commons.wikimedia.org/wiki/File%3AMichinoeki_Takano_Shobara_01.JPG", 35.0244207, 132.8813912),
  sight("shobara-onsen-01", "桜花の郷　ラ・フォーレ庄原 大浴場", "広島県庄原市新庄町5281-1", null, "https://travel.rakuten.co.jp/HOTEL/183874/gallery.html", null, null),
  sight("shobara-onsen-02", "休暇村　帝釈峡 本館大浴場「さもやまの湯」", "広島県庄原市東城町三坂962-1", "08477-2-3110", "https://travel.rakuten.co.jp/HOTEL/50714/gallery.html", null, null),
  sight("shobara-onsen-03", "帝釈峡観光ホテル　錦彩館 露天風呂", "広島県庄原市東城町三坂526", null, "https://travel.rakuten.co.jp/HOTEL/28051/gallery.html", null, null),
  sight("shobara-onsen-04", "帝釈峡観光ホテル別館養浩荘 大浴場", "広島県庄原市東城町三坂922-1", null, "https://travel.rakuten.co.jp/HOTEL/144499/gallery.html", null, null),
];
