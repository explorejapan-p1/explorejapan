/**
 * Niihama City sourced facts. Do not invent population.
 * Hall / JIS from city HP + Wikipedia 新居浜市 (accessed 2026-09-09). JIS 38205. Fifth Ehime hub after 松山市・今治市・宇和島市・八幡浜市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const NIIHAMA = {
  nameJa: '新居浜市',
  nameEn: 'Niihama',
  reading: 'にいはまし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'niihama',
  jis: '38205',
  jlis: '382051',
  sameAs: 'https://www.city.niihama.lg.jp/',
  hall: {
    postalCode: '792-8585',
    addressJa: '愛媛県新居浜市一宮町一丁目5番1号',
    addressEn: '1-5-1 Ichinomiya-cho, Niihama City, Ehime 792-8585, Japan',
    phone: '0897-65-1234'
  },
  sources: {
    home: 'https://www.city.niihama.lg.jp/',
    hall: 'https://www.city.niihama.lg.jp/',
    kanko: 'https://besshi.com/',
    minetopia: 'https://besshi.com/',
    tabelogCity: 'https://tabelog.com/ehime/C38205/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const NIIHAMA_EXPECTED_ROW_COUNT = 13;
export const NIIHAMA_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Michinoeki Minetopia Besshi. Hero title remains municipality name only. */
export const NIIHAMA_PLACE_PHOTO = wikiPhoto(
  "niihama-minetopia.jpg",
  "https://commons.wikimedia.org/wiki/File:Roadside_Station_Mine_topia_Besshi.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "As6022014", "https://commons.wikimedia.org/wiki/User:As6022014", "2010-04-19",
  "道の駅マイントピア別子", "Michinoeki Minetopia Besshi"
);

const TABELOG_38004376 = "https://tabelog.com/ehime/A3802/A380203/38004376/";
const TABELOG_38011787 = "https://tabelog.com/ehime/A3802/A380203/38011787/";
const TABELOG_38010186 = "https://tabelog.com/ehime/A3802/A380203/38010186/";
const TABELOG_38015204 = "https://tabelog.com/ehime/A3802/A380203/38015204/";
const TABELOG_38008138 = "https://tabelog.com/ehime/A3802/A380203/38008138/";
const TABELOG_38003063 = "https://tabelog.com/ehime/A3802/A380203/38003063/";
const TABELOG_38010056 = "https://tabelog.com/ehime/A3802/A380203/38010056/";
const TABELOG_38010682 = "https://tabelog.com/ehime/A3802/A380203/38010682/";
const TABELOG_38005866 = "https://tabelog.com/ehime/A3802/A380203/38005866/";
const TABELOG_38014456 = "https://tabelog.com/ehime/A3802/A380203/38014456/";
const TABELOG_38014888 = "https://tabelog.com/ehime/A3802/A380203/38014888/";
const TABELOG_38009336 = "https://tabelog.com/ehime/A3802/A380203/38009336/";
const TABELOG_38008334 = "https://tabelog.com/ehime/A3802/A380203/38008334/";
const TABELOG_38014367 = "https://tabelog.com/ehime/A3802/A380203/38014367/";
const TABELOG_38016178 = "https://tabelog.com/ehime/A3802/A380203/38016178/";
const TABELOG_38012821 = "https://tabelog.com/ehime/A3802/A380203/38012821/";

export const NIIHAMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "道の駅マイントピア別子": NIIHAMA_PLACE_PHOTO,
  "あかがねミュージアム": wikiPhoto(
    "niihama-akagane.jpg",
    "https://commons.wikimedia.org/wiki/File:Akagane_Museum.jpg",
    "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0",
    "ノボホショコロトソ", "https://commons.wikimedia.org/wiki/User:%E3%83%8E%E3%83%9C%E3%83%9B%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%AD%E3%83%88%E3%82%BD", "2026-02-21",
    "あかがねミュージアム", "Akagane Museum"
  ),
  "別子銅山記念館": wikiPhoto(
    "niihama-besshi-kinenkan.jpg",
    "https://commons.wikimedia.org/wiki/File:Besshi_dozan_kinenkan_museum.jpg",
    "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
    "As6022014", "https://commons.wikimedia.org/wiki/User:As6022014", "2010-06-24",
    "別子銅山記念館", "Besshi Copper Mine Memorial Museum"
  ),
  "東平": wikiPhoto(
    "niihama-tonaru.jpg",
    "https://commons.wikimedia.org/wiki/File:Tounaru_20241124_1.jpg",
    "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
    "Araiyasushige", "https://commons.wikimedia.org/wiki/User:Araiyasushige", "2024-11-23",
    "東平（とうなる）", "Tonaru (Besshi)"
  ),
  "旧山根製錬所煙突": wikiPhoto(
    "niihama-yamane-chimney.jpg",
    "https://commons.wikimedia.org/wiki/File:Entotuyama01.jpg",
    "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
    "Dokudami", "https://commons.wikimedia.org/wiki/User:Dokudami", "2016-04-15",
    "旧山根製錬所煙突", "Former Yamane Smelter chimney"
  ),
  "八剣伝 さかい筋店": sourcePhoto("niihama-38004376-dish.jpg", "八剣伝 さかい筋店の料理写真", "八剣伝 さかい筋店 food photo", TABELOG_38004376, '食べログ'),
  "焼肉 生粋 新居浜本店": sourcePhoto("niihama-38011787-dish.jpg", "焼肉 生粋 新居浜本店の料理写真", "焼肉 生粋 新居浜本店 food photo", TABELOG_38011787, '食べログ'),
  "カツ丼とんかつ かつ福 新居浜店": sourcePhoto("niihama-38010186-dish.jpg", "カツ丼とんかつ かつ福 新居浜店の料理写真", "カツ丼とんかつ かつ福 新居浜店 food photo", TABELOG_38010186, '食べログ'),
  "Restaurant Loca": sourcePhoto("niihama-38015204-dish.jpg", "Restaurant Locaの料理写真", "Restaurant Loca food photo", TABELOG_38015204, '食べログ'),
  "魚民 新居浜登り道サンロード店": sourcePhoto("niihama-38008138-dish.jpg", "魚民 新居浜登り道サンロード店の料理写真", "魚民 新居浜登り道サンロード店 food photo", TABELOG_38008138, '食べログ'),
  "ピエロの巣": sourcePhoto("niihama-38003063-dish.jpg", "ピエロの巣の料理写真", "ピエロの巣 food photo", TABELOG_38003063, '食べログ'),
  "レーイグラッツェふじ": sourcePhoto("niihama-38010056-dish.jpg", "レーイグラッツェふじの料理写真", "レーイグラッツェふじ food photo", TABELOG_38010056, '食べログ'),
  "精肉問屋直営焼肉店 やきにくの蔵 新居浜つづら淵店": sourcePhoto("niihama-38010682-dish.jpg", "精肉問屋直営焼肉店 やきにくの蔵 新居浜つづら淵店の料理写真", "精肉問屋直営焼肉店 やきにくの蔵 新居浜つづら淵店 food photo", TABELOG_38010682, '食べログ'),
  "ひうち": sourcePhoto("niihama-38005866-dish.jpg", "ひうちの料理写真", "ひうち food photo", TABELOG_38005866, '食べログ'),
  "炭火焼肉 萬まる 川東店": sourcePhoto("niihama-38014456-dish.jpg", "炭火焼肉 萬まる 川東店の料理写真", "炭火焼肉 萬まる 川東店 food photo", TABELOG_38014456, '食べログ'),
  "牛鶏焼肉 しゃーく": sourcePhoto("niihama-38014888-dish.jpg", "牛鶏焼肉 しゃーくの料理写真", "牛鶏焼肉 しゃーく food photo", TABELOG_38014888, '食べログ'),
  "居心伝 新居浜店": sourcePhoto("niihama-38009336-dish.jpg", "居心伝 新居浜店の料理写真", "居心伝 新居浜店 food photo", TABELOG_38009336, '食べログ'),
  "韓亭": sourcePhoto("niihama-38008334-dish.jpg", "韓亭の料理写真", "韓亭 food photo", TABELOG_38008334, '食べログ'),
  "鶏焼肉 粋怜": sourcePhoto("niihama-38014367-dish.jpg", "鶏焼肉 粋怜の料理写真", "鶏焼肉 粋怜 food photo", TABELOG_38014367, '食べログ'),
  "纏": sourcePhoto("niihama-38016178-dish.jpg", "纏の料理写真", "纏 food photo", TABELOG_38016178, '食べログ'),
  "ホルモン横丁 肉壱": sourcePhoto("niihama-38012821-dish.jpg", "ホルモン横丁 肉壱の料理写真", "ホルモン横丁 肉壱 food photo", TABELOG_38012821, '食べログ'),
  "リーガロイヤルホテル新居浜": sourcePhoto(
    "niihama-stay-h110.jpg",
    "リーガロイヤルホテル新居浜の客室写真",
    "リーガロイヤルホテル新居浜 room photo",
    "https://travel.rakuten.co.jp/HOTEL/110/110.html",
    '楽天トラベル'
  ),
  "ホテルアルファーワン新居浜": sourcePhoto(
    "niihama-stay-h15899.jpg",
    "ホテルアルファーワン新居浜の客室写真",
    "ホテルアルファーワン新居浜 room photo",
    "https://travel.rakuten.co.jp/HOTEL/15899/15899.html",
    '楽天トラベル'
  ),
  "ホテルルートイン新居浜": sourcePhoto(
    "niihama-stay-routeinn.jpg",
    "ホテルルートイン新居浜の客室写真",
    "ホテルルートイン新居浜 room photo",
    "https://travel.rakuten.co.jp/HOTEL/28430/28430.html",
    '楽天トラベル'
  ),
  "天然温泉 伊予の湯 スーパーホテル新居浜": sourcePhoto(
    "niihama-stay-superhotel.jpg",
    "天然温泉 伊予の湯 スーパーホテル新居浜の客室写真",
    "天然温泉 伊予の湯 スーパーホテル新居浜 room photo",
    "https://travel.rakuten.co.jp/HOTEL/68559/68559.html",
    '楽天トラベル'
  ),
  "ビジネスホテル 柳屋": sourcePhoto(
    "niihama-stay-h84861.jpg",
    "ビジネスホテル 柳屋の客室写真",
    "ビジネスホテル 柳屋 room photo",
    "https://travel.rakuten.co.jp/HOTEL/84861/84861.html",
    '楽天トラベル'
  ),
  "オーベルジュ ゆらぎ": sourcePhoto(
    "niihama-stay-h135373.jpg",
    "オーベルジュ ゆらぎの客室写真",
    "オーベルジュ ゆらぎ room photo",
    "https://travel.rakuten.co.jp/HOTEL/135373/135373.html",
    '楽天トラベル'
  ),
  "ホテル マックスビジョン": sourcePhoto(
    "niihama-stay-h149406.jpg",
    "ホテル マックスビジョンの客室写真",
    "ホテル マックスビジョン room photo",
    "https://travel.rakuten.co.jp/HOTEL/149406/149406.html",
    '楽天トラベル'
  ),
  "ホテル新居浜ヒルズプリンス館（ＢＢＨホテルグループ）": sourcePhoto(
    "niihama-stay-h153427.jpg",
    "ホテル新居浜ヒルズプリンス館（ＢＢＨホテルグループ）の客室写真",
    "ホテル新居浜ヒルズプリンス館（ＢＢＨホテルグループ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/153427/153427.html",
    '楽天トラベル'
  ),
  "東横ＩＮＮ新居浜駅前": sourcePhoto(
    "niihama-stay-toyoko.jpg",
    "東横ＩＮＮ新居浜駅前の客室写真",
    "東横ＩＮＮ新居浜駅前 room photo",
    "https://travel.rakuten.co.jp/HOTEL/164664/164664.html",
    '楽天トラベル'
  ),
  "ホテルＮｏ．１新居浜": sourcePhoto(
    "niihama-stay-no1.jpg",
    "ホテルＮｏ．１新居浜の客室写真",
    "ホテルＮｏ．１新居浜 room photo",
    "https://travel.rakuten.co.jp/HOTEL/181708/181708.html",
    '楽天トラベル'
  ),
  "ザ・グローバルタワー": sourcePhoto(
    "niihama-stay-h192297.jpg",
    "ザ・グローバルタワーの客室写真",
    "ザ・グローバルタワー room photo",
    "https://travel.rakuten.co.jp/HOTEL/192297/192297.html",
    '楽天トラベル'
  ),
  "ビジネスホテル ＭＩＳＯＲＡ（ミソラ） 大浴場": sourcePhoto(
    "niihama-onsen-h7015.jpg",
    "ビジネスホテル ＭＩＳＯＲＡ（ミソラ） 大浴場の写真",
    "ビジネスホテル ＭＩＳＯＲＡ（ミソラ） 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/7015/gallery.html",
    '楽天トラベル'
  ),
  "ホテルアルファーワン新居浜 楠の湯": sourcePhoto(
    "niihama-onsen-h15899.jpg",
    "ホテルアルファーワン新居浜 楠の湯の写真",
    "ホテルアルファーワン新居浜 楠の湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/15899/gallery.html",
    '楽天トラベル'
  ),
  "ホテルルートイン新居浜 大浴場": sourcePhoto(
    "niihama-onsen-routeinn.jpg",
    "ホテルルートイン新居浜 大浴場の写真",
    "ホテルルートイン新居浜 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/28430/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉 伊予の湯 スーパーホテル新居浜 天然温泉": sourcePhoto(
    "niihama-onsen-superhotel.jpg",
    "天然温泉 伊予の湯 スーパーホテル新居浜 天然温泉の写真",
    "天然温泉 伊予の湯 スーパーホテル新居浜 天然温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/68559/gallery.html",
    '楽天トラベル'
  ),
  "ホテル新居浜ヒルズ（ＢＢＨホテルグループ） 大浴場": sourcePhoto(
    "niihama-onsen-h69381.jpg",
    "ホテル新居浜ヒルズ（ＢＢＨホテルグループ） 大浴場の写真",
    "ホテル新居浜ヒルズ（ＢＢＨホテルグループ） 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/69381/gallery.html",
    '楽天トラベル'
  ),
  "オーベルジュ ゆらぎ 温泉": sourcePhoto(
    "niihama-onsen-h135373.jpg",
    "オーベルジュ ゆらぎ 温泉の写真",
    "オーベルジュ ゆらぎ 温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/135373/gallery.html",
    '楽天トラベル'
  ),
  "ホテル新居浜ヒルズプリンス館（ＢＢＨホテルグループ） 貸切風呂": sourcePhoto(
    "niihama-onsen-h153427.jpg",
    "ホテル新居浜ヒルズプリンス館（ＢＢＨホテルグループ） 貸切風呂の写真",
    "ホテル新居浜ヒルズプリンス館（ＢＢＨホテルグループ） 貸切風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/153427/gallery.html",
    '楽天トラベル'
  ),
  "ホテルＮｏ．１新居浜 大浴場": sourcePhoto(
    "niihama-onsen-no1.jpg",
    "ホテルＮｏ．１新居浜 大浴場の写真",
    "ホテルＮｏ．１新居浜 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/181708/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: NIIHAMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: NIIHAMA.sources.accessed};
}

export const NIIHAMA_FACILITIES: readonly FacilityRow[] = [
  sight('niihama-sight-01', "道の駅マイントピア別子", "愛媛県新居浜市立川町707-3", null, "https://besshi.com/", 33.90144444, 133.3095),
  sight('niihama-sight-02', "あかがねミュージアム", "愛媛県新居浜市坂井町2丁目8番1号", null, "https://www.city.niihama.lg.jp/", 33.94936111, 133.29511111),
  sight('niihama-sight-03', "別子銅山記念館", "愛媛県新居浜市角野新田町3-13", null, "https://ja.wikipedia.org/wiki/%E5%88%A5%E5%AD%90%E9%8A%85%E5%B1%B1%E8%A8%98%E5%BF%B5%E9%A4%A8", 33.92135, 133.30941),
  sight('niihama-sight-04', "東平", "愛媛県新居浜市別子山", null, "https://besshi.com/", null, null),
  sight('niihama-sight-05', "旧山根製錬所煙突", "愛媛県新居浜市角野新田町", null, "https://commons.wikimedia.org/wiki/Category:Chimney_of_the_Former_Yamane_Smelter", 33.92135, 133.30941),
  sight('niihama-onsen-01', "ビジネスホテル ＭＩＳＯＲＡ（ミソラ） 大浴場", "愛媛県新居浜市外山町18-12", null, "https://travel.rakuten.co.jp/HOTEL/7015/gallery.html", null, null),
  sight('niihama-onsen-02', "ホテルアルファーワン新居浜 楠の湯", "愛媛県新居浜市久保田町3-2-5", null, "https://travel.rakuten.co.jp/HOTEL/15899/gallery.html", null, null),
  sight('niihama-onsen-03', "ホテルルートイン新居浜 大浴場", "愛媛県新居浜市久保田町3-2-1", null, "https://travel.rakuten.co.jp/HOTEL/28430/gallery.html", null, null),
  sight('niihama-onsen-04', "天然温泉 伊予の湯 スーパーホテル新居浜 天然温泉", "愛媛県新居浜市高木町3-7", null, "https://travel.rakuten.co.jp/HOTEL/68559/gallery.html", null, null),
  sight('niihama-onsen-05', "ホテル新居浜ヒルズ（ＢＢＨホテルグループ） 大浴場", "愛媛県新居浜市港町5-11", null, "https://travel.rakuten.co.jp/HOTEL/69381/gallery.html", null, null),
  sight('niihama-onsen-06', "オーベルジュ ゆらぎ 温泉", "愛媛県新居浜市別子山甲122", null, "https://travel.rakuten.co.jp/HOTEL/135373/gallery.html", null, null),
  sight('niihama-onsen-07', "ホテル新居浜ヒルズプリンス館（ＢＢＨホテルグループ） 貸切風呂", "愛媛県新居浜市新須賀町3-4-26", null, "https://travel.rakuten.co.jp/HOTEL/153427/gallery.html", null, null),
  sight('niihama-onsen-08', "ホテルＮｏ．１新居浜 大浴場", "愛媛県新居浜市徳常町9-5", null, "https://travel.rakuten.co.jp/HOTEL/181708/gallery.html", null, null),
];

