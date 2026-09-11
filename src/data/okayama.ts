/**
 * Okayama City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-11). JIS 33100. First Okayama hub (岡山市).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const OKAYAMA = {
  nameJa: '岡山市',
  nameEn: 'Okayama',
  reading: 'おかやまし',
  prefectureJa: '岡山県',
  prefectureEn: 'Okayama',
  prefectureSlug: 'okayama',
  slug: 'okayama',
  jis: '33100',
  jlis: '331007',
  sameAs: 'https://www.city.okayama.jp/',
  hall: {
    postalCode: '700-8544',
    addressJa: '岡山県岡山市北区大供一丁目1番1号',
    addressEn: '1-1-1 Daiku, Kita-ku, Okayama City, Okayama 700-8544, Japan',
    phone: '086-803-1000'
  },
  sources: {
    home: 'https://www.city.okayama.jp/',
    hall: 'https://www.city.okayama.jp/',
    kanko: 'https://www.okayama-kanko.jp/',
    castle: 'https://commons.wikimedia.org/wiki/File:Okayama_Castle_01.jpg',
    tabelogCity: 'https://tabelog.com/okayama/C33100/rstLst/',
    accessed: '2026-09-11'
  }
} as const;

export const OKAYAMA_EXPECTED_ROW_COUNT = 7;
export const OKAYAMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-11', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-11', altJa, altEn};
}

/** Cover: Okayama Castle. Hero title remains municipality name only. Unique (no wakimachi). */
export const OKAYAMA_PLACE_PHOTO = wikiPhoto(
  "okayama-castle.jpg",
  "https://commons.wikimedia.org/wiki/File:Okayama_Castle_01.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/",
  "Reggaeman", "https://ja.wikipedia.org/wiki/User:Reggaeman", "2005-04-16",
  "岡山城", "Okayama Castle"
);

export const OKAYAMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "岡山城": wikiPhoto(
  "okayama-castle.jpg",
  "https://commons.wikimedia.org/wiki/File:Okayama_Castle_01.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/",
  "Reggaeman", "https://ja.wikipedia.org/wiki/User:Reggaeman", "2005-04-16",
  "岡山城", "Okayama Castle"
),
  "後楽園": wikiPhoto(
  "okayama-korakuen.jpg",
  "https://commons.wikimedia.org/wiki/File:Okayama_Korakuen_Garden01.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Fjkelfeimvvn", "https://commons.wikimedia.org/wiki/File:Okayama_Korakuen_Garden01.jpg", "2010-05-09",
  "後楽園", "Korakuen Garden"
),
  "吉備津神社": wikiPhoto(
  "okayama-kibitsu.jpg",
  "https://commons.wikimedia.org/wiki/File:Kibitsu_Jinja_03.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/",
  "Reggaeman", "https://ja.wikipedia.org/wiki/User:Reggaeman", "2008-06-06",
  "吉備津神社", "Kibitsu Shrine"
),
  "岡山県立美術館": wikiPhoto(
  "okayama-museum-art.jpg",
  "https://commons.wikimedia.org/wiki/File:The_Okayama_Prefectural_Museum_of_Art01s3200.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "663highland", "https://commons.wikimedia.org/wiki/User:663highland", "2009",
  "岡山県立美術館", "Okayama Prefectural Museum of Art"
),
  "岡山市役所": wikiPhoto(
  "okayama-cityhall.jpg",
  "https://commons.wikimedia.org/wiki/File:Okayama_City_Hall_2025.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Wikimedia Commons contributor", "https://commons.wikimedia.org/wiki/File:Okayama_City_Hall_2025.jpg", "2025",
  "岡山市役所", "Okayama City Hall"
),
  "400℃ PIZZA": sourcePhoto("okayama-33015797-dish.jpg", "400℃ PIZZAの料理写真", "400℃ PIZZA food photo", "https://tabelog.com/okayama/A3301/A330101/33015797/", '食べログ'),
  "はすのみ": sourcePhoto("okayama-33007719-dish.jpg", "はすのみの料理写真", "はすのみ food photo", "https://tabelog.com/okayama/A3301/A330101/33007719/", '食べログ'),
  "鮨 縁": sourcePhoto("okayama-33001952-dish.jpg", "鮨 縁の料理写真", "鮨 縁 food photo", "https://tabelog.com/okayama/A3301/A330101/33001952/", '食べログ'),
  "喰切料理 八方": sourcePhoto("okayama-33015459-dish.jpg", "喰切料理 八方の料理写真", "喰切料理 八方 food photo", "https://tabelog.com/okayama/A3301/A330101/33015459/", '食べログ'),
  "400℃ mori no machi": sourcePhoto("okayama-33019066-dish.jpg", "400℃ mori no machiの料理写真", "400℃ mori no machi food photo", "https://tabelog.com/okayama/A3301/A330101/33019066/", '食べログ'),
  "一鳥目": sourcePhoto("okayama-33018075-dish.jpg", "一鳥目の料理写真", "一鳥目 food photo", "https://tabelog.com/okayama/A3301/A330101/33018075/", '食べログ'),
  "魚正 山本淳": sourcePhoto("okayama-33018496-dish.jpg", "魚正 山本淳の料理写真", "魚正 山本淳 food photo", "https://tabelog.com/okayama/A3301/A330101/33018496/", '食べログ'),
  "ヴィア パーチェ": sourcePhoto("okayama-33010293-dish.jpg", "ヴィア パーチェの料理写真", "ヴィア パーチェ food photo", "https://tabelog.com/okayama/A3301/A330101/33010293/", '食べログ'),
  "たぬき屋": sourcePhoto("okayama-33000212-dish.jpg", "たぬき屋の料理写真", "たぬき屋 food photo", "https://tabelog.com/okayama/A3301/A330101/33000212/", '食べログ'),
  "季節料理かたやま": sourcePhoto("okayama-33009794-dish.jpg", "季節料理かたやまの料理写真", "季節料理かたやま food photo", "https://tabelog.com/okayama/A3301/A330101/33009794/", '食べログ'),
  "うじょう亭": sourcePhoto("okayama-33001167-dish.jpg", "うじょう亭の料理写真", "うじょう亭 food photo", "https://tabelog.com/okayama/A3301/A330101/33001167/", '食べログ'),
  "Okuto": sourcePhoto("okayama-33015738-dish.jpg", "Okutoの料理写真", "Okuto food photo", "https://tabelog.com/okayama/A3301/A330101/33015738/", '食べログ'),
  "Duomo": sourcePhoto("okayama-33011042-dish.jpg", "Duomoの料理写真", "Duomo food photo", "https://tabelog.com/okayama/A3301/A330101/33011042/", '食べログ'),
  "お好み焼き もり": sourcePhoto("okayama-33000348-dish.jpg", "お好み焼き もりの料理写真", "お好み焼き もり food photo", "https://tabelog.com/okayama/A3301/A330101/33000348/", '食べログ'),
  "天神そば": sourcePhoto("okayama-33000016-dish.jpg", "天神そばの料理写真", "天神そば food photo", "https://tabelog.com/okayama/A3301/A330101/33000016/", '食べログ'),
  "スーリィ・ラ・セーヌ": sourcePhoto("okayama-33000060-dish.jpg", "スーリィ・ラ・セーヌの料理写真", "スーリィ・ラ・セーヌ food photo", "https://tabelog.com/okayama/A3301/A330101/33000060/", '食べログ'),
  "天然温泉　備前の湯　スーパーホテル岡山駅東口": sourcePhoto("okayama-stay-h179160.jpg", "天然温泉　備前の湯　スーパーホテル岡山駅東口の客室写真", "天然温泉　備前の湯　スーパーホテル岡山駅東口 room photo", "https://travel.rakuten.co.jp/HOTEL/179160/179160.html", '楽天トラベル'),
  "天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ）": sourcePhoto("okayama-stay-h184280.jpg", "天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ）の客室写真", "天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ） room photo", "https://travel.rakuten.co.jp/HOTEL/184280/184280.html", '楽天トラベル'),
  "ホテルアベストグランデ岡山　なごみの湯": sourcePhoto("okayama-stay-h167859.jpg", "ホテルアベストグランデ岡山　なごみの湯の客室写真", "ホテルアベストグランデ岡山　なごみの湯 room photo", "https://travel.rakuten.co.jp/HOTEL/167859/167859.html", '楽天トラベル'),
  "アパホテル〈岡山駅前〉": sourcePhoto("okayama-stay-h109409.jpg", "アパホテル〈岡山駅前〉の客室写真", "アパホテル〈岡山駅前〉 room photo", "https://travel.rakuten.co.jp/HOTEL/109409/109409.html", '楽天トラベル'),
  "ヴィアイン岡山（ＪＲ西日本グループ）": sourcePhoto("okayama-stay-h139447.jpg", "ヴィアイン岡山（ＪＲ西日本グループ）の客室写真", "ヴィアイン岡山（ＪＲ西日本グループ） room photo", "https://travel.rakuten.co.jp/HOTEL/139447/139447.html", '楽天トラベル'),
  "スマイルホテル岡山": sourcePhoto("okayama-stay-h181951.jpg", "スマイルホテル岡山の客室写真", "スマイルホテル岡山 room photo", "https://travel.rakuten.co.jp/HOTEL/181951/181951.html", '楽天トラベル'),
  "ホテルマイステイズ岡山": sourcePhoto("okayama-stay-h183037.jpg", "ホテルマイステイズ岡山の客室写真", "ホテルマイステイズ岡山 room photo", "https://travel.rakuten.co.jp/HOTEL/183037/183037.html", '楽天トラベル'),
  "ホテルトレンド岡山駅前": sourcePhoto("okayama-stay-h172806.jpg", "ホテルトレンド岡山駅前の客室写真", "ホテルトレンド岡山駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/172806/172806.html", '楽天トラベル'),
  "ホテルエリアワン岡山（ホテルエリアワングループ）": sourcePhoto("okayama-stay-h1397.jpg", "ホテルエリアワン岡山（ホテルエリアワングループ）の客室写真", "ホテルエリアワン岡山（ホテルエリアワングループ） room photo", "https://travel.rakuten.co.jp/HOTEL/1397/1397.html", '楽天トラベル'),
  "天然温泉　備前の湯　スーパーホテル岡山駅東口 大浴場": sourcePhoto("okayama-onsen-h179160.jpg", "天然温泉　備前の湯　スーパーホテル岡山駅東口 大浴場の写真", "天然温泉　備前の湯　スーパーホテル岡山駅東口 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/179160/gallery.html", '楽天トラベル'),
  "天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ） 大浴場": sourcePhoto("okayama-onsen-h184280.jpg", "天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ） 大浴場の写真", "天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ） 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/184280/gallery.html", '楽天トラベル'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: OKAYAMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光・Commons・楽天掲載情報', accessed: OKAYAMA.sources.accessed};
}

export const OKAYAMA_FACILITIES: readonly FacilityRow[] = [
  sight("okayama-sight-01", "岡山城", "岡山県岡山市北区丸の内2-1-1", null, "https://commons.wikimedia.org/wiki/File:Okayama_Castle_01.jpg", 34.6553, 133.936),
  sight("okayama-sight-02", "後楽園", "岡山県岡山市北区後楽園1-5", null, "https://commons.wikimedia.org/wiki/File:Okayama_Korakuen_Garden01.jpg", 34.6678, 133.9347),
  sight("okayama-sight-03", "吉備津神社", "岡山県岡山市北区吉備津931", null, "https://commons.wikimedia.org/wiki/File:Kibitsu_Jinja_03.JPG", 34.6707, 133.8411),
  sight("okayama-sight-04", "岡山県立美術館", "岡山県岡山市北区天神町8-48", null, "https://commons.wikimedia.org/wiki/File:The_Okayama_Prefectural_Museum_of_Art01s3200.jpg", 34.6655, 133.9335),
  sight("okayama-sight-05", "岡山市役所", "岡山県岡山市北区大供一丁目1番1号", null, "https://commons.wikimedia.org/wiki/File:Okayama_City_Hall_2025.jpg", 34.6551, 133.9195),
  sight("okayama-onsen-01", "天然温泉　備前の湯　スーパーホテル岡山駅東口 大浴場", "岡山県岡山市北区桑田町17-10", null, "https://travel.rakuten.co.jp/HOTEL/179160/gallery.html", null, null),
  sight("okayama-onsen-02", "天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ） 大浴場", "岡山県岡山市北区錦町8-1", null, "https://travel.rakuten.co.jp/HOTEL/184280/gallery.html", null, null),
];
