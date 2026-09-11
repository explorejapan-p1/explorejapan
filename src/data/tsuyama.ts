/**
 * Tsuyama City sourced facts. Do not invent population.
 * Hall / JIS from city HP / Japan Post (accessed 2026-09-11). JIS 33203. Third Okayama hub (津山市).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TSUYAMA = {
  nameJa: '津山市',
  nameEn: 'Tsuyama',
  reading: 'つやまし',
  prefectureJa: '岡山県',
  prefectureEn: 'Okayama',
  prefectureSlug: 'okayama',
  slug: 'tsuyama',
  jis: '33203',
  jlis: '332030',
  sameAs: 'https://www.city.tsuyama.lg.jp/',
  hall: {
    postalCode: '708-8501',
    addressJa: '岡山県津山市山北520',
    addressEn: '520 Yamakita, Tsuyama City, Okayama 708-8501, Japan',
    phone: '0868-32-2027'
  },
  sources: {
    home: 'https://www.city.tsuyama.lg.jp/',
    hall: 'https://www.city.tsuyama.lg.jp/',
    kanko: 'https://www.tsuyamakan.jp/',
    castle: 'https://commons.wikimedia.org/wiki/File:%E6%B4%A5%E5%B1%B1%E5%9F%8E_%E5%82%99%E4%B8%AD%E6%AB%93%E3%81%A8%E6%A1%9C.jpg',
    tabelogCity: 'https://tabelog.com/okayama/C33203/rstLst/',
    accessed: '2026-09-11'
  }
} as const;

export const TSUYAMA_EXPECTED_ROW_COUNT = 7;
export const TSUYAMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-11', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-11', altJa, altEn};
}

/** Cover: Tsuyama Castle / Kakuzan. Hero title remains municipality name only. Unique (no wakimachi / no okayama-castle / no kurashiki-bikan). */
export const TSUYAMA_PLACE_PHOTO = wikiPhoto(
  "tsuyama-castle.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E6%B4%A5%E5%B1%B1%E5%9F%8E_%E5%82%99%E4%B8%AD%E6%AB%93%E3%81%A8%E6%A1%9C.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "denteru", "https://commons.wikimedia.org/wiki/User:denteru", "2010-04-08",
  "津山城（鶴山公園）", "Tsuyama Castle (Kakuzan Park)"
);

export const TSUYAMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "津山城（鶴山公園）": wikiPhoto(
  "tsuyama-castle.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E6%B4%A5%E5%B1%B1%E5%9F%8E_%E5%82%99%E4%B8%AD%E6%AB%93%E3%81%A8%E6%A1%9C.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "denteru", "https://commons.wikimedia.org/wiki/User:denteru", "2010-04-08",
  "津山城（鶴山公園）", "Tsuyama Castle (Kakuzan Park)"
),
  "衆楽園": wikiPhoto(
  "tsuyama-shurakuen.jpg",
  "https://commons.wikimedia.org/wiki/File%3AShurakuen_Tsuyama05n4272.jpg",
  "CC BY 2.5", "https://creativecommons.org/licenses/by/2.5",
  "663highland", "https://ja.wikipedia.org/wiki/user:663highland", "2009-12-26",
  "衆楽園", "Shurakuen Garden"
),
  "津山市役所": wikiPhoto(
  "tsuyama-cityhall.jpg",
  "https://commons.wikimedia.org/wiki/File%3ATsuyama_city_office.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Phronimoi", "https://commons.wikimedia.org/wiki/User:Phronimoi", "2011-04-10",
  "津山市役所", "Tsuyama City Hall"
),
  "津山まなびの鉄道館": wikiPhoto(
  "tsuyama-railmuseum.jpg",
  "https://commons.wikimedia.org/wiki/File%3ATsuyama_Railroad_Educational_Museum%2C_entrance.jpg",
  "CC0", "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "Saigen Jiro", "//commons.wikimedia.org/wiki/User:Saigen_Jiro", "2021-02-23",
  "津山まなびの鉄道館", "Tsuyama Railroad Educational Museum"
),
  "鶴山公園": wikiPhoto(
  "tsuyama-kakuzan.jpg",
  "https://commons.wikimedia.org/wiki/File%3AKakuzan_park_2025.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Chacmool", "//commons.wikimedia.org/wiki/User:Chacmool", "2025-09-06",
  "鶴山公園", "Kakuzan Park"
),
  "千恵": sourcePhoto("tsuyama-33000057-dish.jpg", "千恵の料理写真", "千恵 food photo", "https://tabelog.com/okayama/A3304/A330401/33000057/", '食べログ'),
  "囲炉裏焼きあなみ": sourcePhoto("tsuyama-33007525-dish.jpg", "囲炉裏焼きあなみの料理写真", "囲炉裏焼きあなみ food photo", "https://tabelog.com/okayama/A3304/A330401/33007525/", '食べログ'),
  "麺屋 大輔": sourcePhoto("tsuyama-33000098-dish.jpg", "麺屋 大輔の料理写真", "麺屋 大輔 food photo", "https://tabelog.com/okayama/A3304/A330401/33000098/", '食べログ'),
  "豚平": sourcePhoto("tsuyama-33002651-dish.jpg", "豚平の料理写真", "豚平 food photo", "https://tabelog.com/okayama/A3304/A330401/33002651/", '食べログ'),
  "橋野食堂": sourcePhoto("tsuyama-33004349-dish.jpg", "橋野食堂の料理写真", "橋野食堂 food photo", "https://tabelog.com/okayama/A3304/A330401/33004349/", '食べログ'),
  "広島風お好み焼 くいしん坊": sourcePhoto("tsuyama-33003240-dish.jpg", "広島風お好み焼 くいしん坊の料理写真", "広島風お好み焼 くいしん坊 food photo", "https://tabelog.com/okayama/A3304/A330401/33003240/", '食べログ'),
  "つゝや": sourcePhoto("tsuyama-33001725-dish.jpg", "つゝやの料理写真", "つゝや food photo", "https://tabelog.com/okayama/A3304/A330401/33001725/", '食べログ'),
  "イタリアンジェラートLATTE": sourcePhoto("tsuyama-33001943-dish.jpg", "イタリアンジェラートLATTEの料理写真", "イタリアンジェラートLATTE food photo", "https://tabelog.com/okayama/A3304/A330401/33001943/", '食べログ'),
  "お好み焼 三枝": sourcePhoto("tsuyama-33003885-dish.jpg", "お好み焼 三枝の料理写真", "お好み焼 三枝 food photo", "https://tabelog.com/okayama/A3304/A330401/33003885/", '食べログ'),
  "いっぱい茶屋　東宝": sourcePhoto("tsuyama-33007787-dish.jpg", "いっぱい茶屋　東宝の料理写真", "いっぱい茶屋　東宝 food photo", "https://tabelog.com/okayama/A3304/A330401/33007787/", '食べログ'),
  "肉ハサミ屋": sourcePhoto("tsuyama-33016036-dish.jpg", "肉ハサミ屋の料理写真", "肉ハサミ屋 food photo", "https://tabelog.com/okayama/A3304/A330401/33016036/", '食べログ'),
  "石川屋": sourcePhoto("tsuyama-33002802-dish.jpg", "石川屋の料理写真", "石川屋 food photo", "https://tabelog.com/okayama/A3304/A330401/33002802/", '食べログ'),
  "津山城東とうふ茶屋 早瀬豆富店": sourcePhoto("tsuyama-33014689-dish.jpg", "津山城東とうふ茶屋 早瀬豆富店の料理写真", "津山城東とうふ茶屋 早瀬豆富店 food photo", "https://tabelog.com/okayama/A3304/A330401/33014689/", '食べログ'),
  "むぎわらぼうし": sourcePhoto("tsuyama-33006026-dish.jpg", "むぎわらぼうしの料理写真", "むぎわらぼうし food photo", "https://tabelog.com/okayama/A3304/A330401/33006026/", '食べログ'),
  "リストランテ シエロ": sourcePhoto("tsuyama-33009459-dish.jpg", "リストランテ シエロの料理写真", "リストランテ シエロ food photo", "https://tabelog.com/okayama/A3304/A330401/33009459/", '食べログ'),
  "酒 肴 おでん 小納屋": sourcePhoto("tsuyama-33014050-dish.jpg", "酒 肴 おでん 小納屋の料理写真", "酒 肴 おでん 小納屋 food photo", "https://tabelog.com/okayama/A3304/A330401/33014050/", '食べログ'),
  "天然温泉「旅人の湯」ホテルルートイン津山駅前": sourcePhoto("tsuyama-stay-h180675.jpg", "天然温泉「旅人の湯」ホテルルートイン津山駅前の客室写真", "天然温泉「旅人の湯」ホテルルートイン津山駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/180675/180675.html", '楽天トラベル'),
  "ホテルアルファーワン津山": sourcePhoto("tsuyama-stay-h15900.jpg", "ホテルアルファーワン津山の客室写真", "ホテルアルファーワン津山 room photo", "https://travel.rakuten.co.jp/HOTEL/15900/15900.html", '楽天トラベル'),
  "ザ・シロヤマテラス津山別邸": sourcePhoto("tsuyama-stay-h168420.jpg", "ザ・シロヤマテラス津山別邸の客室写真", "ザ・シロヤマテラス津山別邸 room photo", "https://travel.rakuten.co.jp/HOTEL/168420/168420.html", '楽天トラベル'),
  "津山鶴山ホテル": sourcePhoto("tsuyama-stay-h6280.jpg", "津山鶴山ホテルの客室写真", "津山鶴山ホテル room photo", "https://travel.rakuten.co.jp/HOTEL/6280/6280.html", '楽天トラベル'),
  "津山セントラルホテル　タウンハウス　津山城前（ＢＢＨホテルグループ）": sourcePhoto("tsuyama-stay-h53111.jpg", "津山セントラルホテル　タウンハウス　津山城前（ＢＢＨホテルグループ）の客室写真", "津山セントラルホテル　タウンハウス　津山城前（ＢＢＨホテルグループ） room photo", "https://travel.rakuten.co.jp/HOTEL/53111/53111.html", '楽天トラベル'),
  "津山セントラルホテル　アネックス　津山城前（ＢＢＨホテルグループ）": sourcePhoto("tsuyama-stay-h53110.jpg", "津山セントラルホテル　アネックス　津山城前（ＢＢＨホテルグループ）の客室写真", "津山セントラルホテル　アネックス　津山城前（ＢＢＨホテルグループ） room photo", "https://travel.rakuten.co.jp/HOTEL/53110/53110.html", '楽天トラベル'),
  "ホテルセレクトイン津山": sourcePhoto("tsuyama-stay-h1735.jpg", "ホテルセレクトイン津山の客室写真", "ホテルセレクトイン津山 room photo", "https://travel.rakuten.co.jp/HOTEL/1735/1735.html", '楽天トラベル'),
  "ＨＯＴＥＬ　ＡＺ　岡山津山店": sourcePhoto("tsuyama-stay-h196256.jpg", "ＨＯＴＥＬ　ＡＺ　岡山津山店の客室写真", "ＨＯＴＥＬ　ＡＺ　岡山津山店 room photo", "https://travel.rakuten.co.jp/HOTEL/196256/196256.html", '楽天トラベル'),
  "ＨＯＴＥＬ　Ｒ９　Ｔｈｅ　Ｙａｒｄ　津山": sourcePhoto("tsuyama-stay-h183208.jpg", "ＨＯＴＥＬ　Ｒ９　Ｔｈｅ　Ｙａｒｄ　津山の客室写真", "ＨＯＴＥＬ　Ｒ９　Ｔｈｅ　Ｙａｒｄ　津山 room photo", "https://travel.rakuten.co.jp/HOTEL/183208/183208.html", '楽天トラベル'),
  "天然温泉「旅人の湯」ホテルルートイン津山駅前 大浴場": sourcePhoto("tsuyama-onsen-h180675.jpg", "天然温泉「旅人の湯」ホテルルートイン津山駅前 大浴場の写真", "天然温泉「旅人の湯」ホテルルートイン津山駅前 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/180675/gallery.html", '楽天トラベル'),
  "ザ・シロヤマテラス津山別邸 大浴場": sourcePhoto("tsuyama-onsen-h168420.jpg", "ザ・シロヤマテラス津山別邸 大浴場の写真", "ザ・シロヤマテラス津山別邸 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/168420/gallery.html", '楽天トラベル'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: TSUYAMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光・Commons・楽天掲載情報', accessed: TSUYAMA.sources.accessed};
}

export const TSUYAMA_FACILITIES: readonly FacilityRow[] = [
  sight("tsuyama-sight-01", "津山城（鶴山公園）", "岡山県津山市山下135", null, "https://commons.wikimedia.org/wiki/File%3A%E6%B4%A5%E5%B1%B1%E5%9F%8E_%E5%82%99%E4%B8%AD%E6%AB%93%E3%81%A8%E6%A1%9C.jpg", 35.0625, 134.0047),
  sight("tsuyama-sight-02", "衆楽園", "岡山県津山市山北628", null, "https://commons.wikimedia.org/wiki/File%3AShurakuen_Tsuyama05n4272.jpg", 35.0692, 134.0019),
  sight("tsuyama-sight-03", "津山市役所", "岡山県津山市山北520", null, "https://commons.wikimedia.org/wiki/File%3ATsuyama_city_office.jpg", 35.0692, 133.9986),
  sight("tsuyama-sight-04", "津山まなびの鉄道館", "岡山県津山市大手町2", null, "https://commons.wikimedia.org/wiki/File%3ATsuyama_Railroad_Educational_Museum%2C_entrance.jpg", 35.0603, 134.0081),
  sight("tsuyama-sight-05", "鶴山公園", "岡山県津山市山下135", null, "https://commons.wikimedia.org/wiki/File%3AKakuzan_park_2025.jpg", 35.0628, 134.005),
  sight("tsuyama-onsen-01", "天然温泉「旅人の湯」ホテルルートイン津山駅前 大浴場", "岡山県津山市横山108-1", null, "https://travel.rakuten.co.jp/HOTEL/180675/gallery.html", null, null),
  sight("tsuyama-onsen-02", "ザ・シロヤマテラス津山別邸 大浴場", "岡山県津山市山下(さんげ)30-1", null, "https://travel.rakuten.co.jp/HOTEL/168420/gallery.html", null, null),
];
