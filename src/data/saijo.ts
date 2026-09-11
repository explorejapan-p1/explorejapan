/**
 * Saijo City sourced facts. Do not invent population.
 * Hall / JIS from city HP + Wikipedia 西条市 (accessed 2026-09-09). JIS 38206. Sixth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SAIJO = {
  nameJa: '西条市',
  nameEn: 'Saijo',
  reading: 'さいじょうし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'saijo',
  jis: '38206',
  jlis: '382061',
  sameAs: 'https://www.city.saijo.ehime.jp/',
  hall: {
    postalCode: '793-8601',
    addressJa: '愛媛県西条市明屋敷164番地',
    addressEn: '164 Akeiyashiki, Saijo City, Ehime 793-8601, Japan',
    phone: '0897-56-5151'
  },
  sources: {
    home: 'https://www.city.saijo.ehime.jp/',
    hall: 'https://www.city.saijo.ehime.jp/',
    kanko: 'https://www.city.saijo.ehime.jp/soshiki/kanko/oashisu.html',
    ishizuchi: 'https://www.ishizuchisan.jp/',
    tabelogCity: 'https://tabelog.com/ehime/C38206/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const SAIJO_EXPECTED_ROW_COUNT = 18;
export const SAIJO_EXPECTED_GEO_COUNT = 2;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Michinoeki Komatsu Oasis. Hero title remains municipality name only. */

export const SAIJO_PLACE_PHOTO = wikiPhoto(
  "saijo-komatsu-oasis.jpg",
  "https://commons.wikimedia.org/wiki/File:Komatuoasisu20220422_6.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Dokudami", "https://commons.wikimedia.org/wiki/User:Dokudami", "2022-04-22",
  "道の駅小松オアシス", "Michinoeki Komatsu Oasis"
);

const TABELOG_38016220 = "https://tabelog.com/ehime/A3802/A380202/38016220/";
const TABELOG_38002741 = "https://tabelog.com/ehime/A3802/A380202/38002741/";
const TABELOG_38001428 = "https://tabelog.com/ehime/A3802/A380202/38001428/";
const TABELOG_38016102 = "https://tabelog.com/ehime/A3802/A380202/38016102/";
const TABELOG_38007333 = "https://tabelog.com/ehime/A3802/A380202/38007333/";
const TABELOG_38012317 = "https://tabelog.com/ehime/A3802/A380202/38012317/";
const TABELOG_38010771 = "https://tabelog.com/ehime/A3802/A380202/38010771/";
const TABELOG_38015401 = "https://tabelog.com/ehime/A3802/A380202/38015401/";
const TABELOG_38013566 = "https://tabelog.com/ehime/A3802/A380202/38013566/";
const TABELOG_38008470 = "https://tabelog.com/ehime/A3802/A380202/38008470/";
const TABELOG_38002206 = "https://tabelog.com/ehime/A3802/A380202/38002206/";
const TABELOG_38001587 = "https://tabelog.com/ehime/A3802/A380202/38001587/";
const TABELOG_38013279 = "https://tabelog.com/ehime/A3802/A380202/38013279/";
const TABELOG_38015045 = "https://tabelog.com/ehime/A3802/A380202/38015045/";
const TABELOG_38003885 = "https://tabelog.com/ehime/A3802/A380202/38003885/";
const TABELOG_38005903 = "https://tabelog.com/ehime/A3802/A380202/38005903/";

export const SAIJO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "道の駅小松オアシス": SAIJO_PLACE_PHOTO,
  "石鎚神社本社": wikiPhoto(
    "saijo-ishizuchi-honsha.jpg",
    "https://commons.wikimedia.org/wiki/File:Ishizuchi_Jinja_Honsha_01.jpg",
    "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
    "Reggaeman", "https://commons.wikimedia.org/wiki/User:Reggaeman", "2011-06-18",
    "石鎚神社本社", "Ishizuchi Shrine Honsha"
  ),
  "石鎚神社成就社": wikiPhoto(
    "saijo-ishizuchi-joju.jpg",
    "https://commons.wikimedia.org/wiki/File:Ishizuchi-jinja_Joju-sha_石鎚神社成就社_Apr_21,_2015.jpg",
    "CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0",
    "minato kaidou", "https://commons.wikimedia.org/wiki/File:Ishizuchi-jinja_Joju-sha_石鎚神社成就社_Apr_21,_2015.jpg", "2015-04-21",
    "石鎚神社成就社", "Ishizuchi Shrine Joju-sha"
  ),
  "石鎚登山ロープウェイ": wikiPhoto(
    "saijo-ishizuchi-ropeway.jpg",
    "https://commons.wikimedia.org/wiki/File:Ishizuchi_Tozan_Ropeway,_Ehime_(17490169151).jpg",
    "CC BY 2.0", "https://creativecommons.org/licenses/by/2.0",
    "Kzaral", "https://www.flickr.com/people/32811347@N08", "2015-05-03",
    "石鎚登山ロープウェイ", "Ishizuchi Tozan Ropeway"
  ),
  "伊予西条駅": wikiPhoto(
    "saijo-iyo-saijo-station.jpg",
    "https://commons.wikimedia.org/wiki/File:JR_Shikoku_Iyo-Saijo_Station.jpg",
    "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
    "Yasu (talk)", "https://commons.wikimedia.org/wiki/User:Yasu", "Taken on 1",
    "伊予西条駅", "Iyo-Saijo Station"
  ),
  "前神寺": wikiPhoto(
    "saijo-maegamiji.jpg",
    "https://commons.wikimedia.org/wiki/File:Maegami-ji_Torii_and_stairs.jpg",
    "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
    "Dokudami", "https://commons.wikimedia.org/wiki/User:Dokudami", "2019-05-07",
    "前神寺", "Maegami-ji"
  ),
  "Musubi": sourcePhoto("saijo-38016220-dish.jpg", "Musubiの料理写真", "Musubi food photo", TABELOG_38016220, '食べログ'),
  "八剣伝 伊予西条中央店": sourcePhoto("saijo-38002741-dish.jpg", "八剣伝 伊予西条中央店の料理写真", "八剣伝 伊予西条中央店 food photo", TABELOG_38002741, '食べログ'),
  "備長扇屋 いよ西条店": sourcePhoto("saijo-38001428-dish.jpg", "備長扇屋 いよ西条店の料理写真", "備長扇屋 いよ西条店 food photo", TABELOG_38001428, '食べログ'),
  "居酒屋 天龍智龍": sourcePhoto("saijo-38016102-dish.jpg", "居酒屋 天龍智龍の料理写真", "居酒屋 天龍智龍 food photo", TABELOG_38016102, '食べログ'),
  "魚民 伊予西条駅前店": sourcePhoto("saijo-38007333-dish.jpg", "魚民 伊予西条駅前店の料理写真", "魚民 伊予西条駅前店 food photo", TABELOG_38007333, '食べログ'),
  "旬菜酒房ミツキヤ": sourcePhoto("saijo-38012317-dish.jpg", "旬菜酒房ミツキヤの料理写真", "旬菜酒房ミツキヤ food photo", TABELOG_38012317, '食べログ'),
  "熟成豚専門店 かつ福 西条店": sourcePhoto("saijo-38010771-dish.jpg", "熟成豚専門店 かつ福 西条店の料理写真", "熟成豚専門店 かつ福 西条店 food photo", TABELOG_38010771, '食べログ'),
  "パン工房 全粒粉とゆかいな仲間": sourcePhoto("saijo-38015401-dish.jpg", "パン工房 全粒粉とゆかいな仲間の料理写真", "パン工房 全粒粉とゆかいな仲間 food photo", TABELOG_38015401, '食べログ'),
  "レガリス": sourcePhoto("saijo-38013566-dish.jpg", "レガリスの料理写真", "レガリス food photo", TABELOG_38013566, '食べログ'),
  "ゆずや": sourcePhoto("saijo-38008470-dish.jpg", "ゆずやの料理写真", "ゆずや food photo", TABELOG_38008470, '食べログ'),
  "レストラン　平城": sourcePhoto("saijo-38002206-dish.jpg", "レストラン　平城の料理写真", "レストラン　平城 food photo", TABELOG_38002206, '食べログ'),
  "お好み焼き いこい": sourcePhoto("saijo-38001587-dish.jpg", "お好み焼き いこいの料理写真", "お好み焼き いこい food photo", TABELOG_38001587, '食べログ'),
  "ひろよし": sourcePhoto("saijo-38013279-dish.jpg", "ひろよしの料理写真", "ひろよし food photo", TABELOG_38013279, '食べログ'),
  "小麦の奴隷 西条店": sourcePhoto("saijo-38015045-dish.jpg", "小麦の奴隷 西条店の料理写真", "小麦の奴隷 西条店 food photo", TABELOG_38015045, '食べログ'),
  "ひょうたん": sourcePhoto("saijo-38003885-dish.jpg", "ひょうたんの料理写真", "ひょうたん food photo", TABELOG_38003885, '食べログ'),
  "麺処 大田屋": sourcePhoto("saijo-38005903-dish.jpg", "麺処 大田屋の料理写真", "麺処 大田屋 food photo", TABELOG_38005903, '食べログ'),
  "ターミナルホテル東予": sourcePhoto(
    "saijo-stay-h1618.jpg",
    "ターミナルホテル東予の客室写真",
    "ターミナルホテル東予 room photo",
    "https://travel.rakuten.co.jp/HOTEL/1618/1618.html",
    '楽天トラベル'
  ),
  "西条アーバンホテル": sourcePhoto(
    "saijo-stay-h1625.jpg",
    "西条アーバンホテルの客室写真",
    "西条アーバンホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/1625/1625.html",
    '楽天トラベル'
  ),
  "ホテルオレール西条": sourcePhoto(
    "saijo-stay-h2603.jpg",
    "ホテルオレール西条の客室写真",
    "ホテルオレール西条 room photo",
    "https://travel.rakuten.co.jp/HOTEL/2603/2603.html",
    '楽天トラベル'
  ),
  "ホテル青木": sourcePhoto(
    "saijo-stay-h12636.jpg",
    "ホテル青木の客室写真",
    "ホテル青木 room photo",
    "https://travel.rakuten.co.jp/HOTEL/12636/12636.html",
    '楽天トラベル'
  ),
  "ホテル玉の家西条": sourcePhoto(
    "saijo-stay-h15171.jpg",
    "ホテル玉の家西条の客室写真",
    "ホテル玉の家西条 room photo",
    "https://travel.rakuten.co.jp/HOTEL/15171/15171.html",
    '楽天トラベル'
  ),
  "休暇村 瀬戸内東予": sourcePhoto(
    "saijo-stay-h56772.jpg",
    "休暇村 瀬戸内東予の客室写真",
    "休暇村 瀬戸内東予 room photo",
    "https://travel.rakuten.co.jp/HOTEL/56772/56772.html",
    '楽天トラベル'
  ),
  "ホテルルートイン伊予西条": sourcePhoto(
    "saijo-stay-routeinn.jpg",
    "ホテルルートイン伊予西条の客室写真",
    "ホテルルートイン伊予西条 room photo",
    "https://travel.rakuten.co.jp/HOTEL/70697/70697.html",
    '楽天トラベル'
  ),
  "ビジネスホテルアネックスあかやね": sourcePhoto(
    "saijo-stay-h135550.jpg",
    "ビジネスホテルアネックスあかやねの客室写真",
    "ビジネスホテルアネックスあかやね room photo",
    "https://travel.rakuten.co.jp/HOTEL/135550/135550.html",
    '楽天トラベル'
  ),
  "源泉かけ流しの宿 湯之谷温泉": sourcePhoto(
    "saijo-stay-h145488.jpg",
    "源泉かけ流しの宿 湯之谷温泉の客室写真",
    "源泉かけ流しの宿 湯之谷温泉 room photo",
    "https://travel.rakuten.co.jp/HOTEL/145488/145488.html",
    '楽天トラベル'
  ),
  "石鎚神社会館": sourcePhoto(
    "saijo-stay-h149036.jpg",
    "石鎚神社会館の客室写真",
    "石鎚神社会館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/149036/149036.html",
    '楽天トラベル'
  ),
  "エクストールイン西条駅前": sourcePhoto(
    "saijo-stay-h151065.jpg",
    "エクストールイン西条駅前の客室写真",
    "エクストールイン西条駅前 room photo",
    "https://travel.rakuten.co.jp/HOTEL/151065/151065.html",
    '楽天トラベル'
  ),
  "お宿 すけ家": sourcePhoto(
    "saijo-stay-h153550.jpg",
    "お宿 すけ家の客室写真",
    "お宿 すけ家 room photo",
    "https://travel.rakuten.co.jp/HOTEL/153550/153550.html",
    '楽天トラベル'
  ),
  "西条セントラルホテル": sourcePhoto(
    "saijo-stay-h153631.jpg",
    "西条セントラルホテルの客室写真",
    "西条セントラルホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/153631/153631.html",
    '楽天トラベル'
  ),
  "やまだ屋／民泊": sourcePhoto(
    "saijo-stay-h173371.jpg",
    "やまだ屋／民泊の客室写真",
    "やまだ屋／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/173371/173371.html",
    '楽天トラベル'
  ),
  "つごえの家 別邸 ＾": sourcePhoto(
    "saijo-stay-h175336.jpg",
    "つごえの家 別邸 ＾の客室写真",
    "つごえの家 別邸 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/175336/175336.html",
    '楽天トラベル'
  ),
  "天然温泉 石鎚の湯 スーパーホテル伊予西条": sourcePhoto(
    "saijo-stay-superhotel.jpg",
    "天然温泉 石鎚の湯 スーパーホテル伊予西条の客室写真",
    "天然温泉 石鎚の湯 スーパーホテル伊予西条 room photo",
    "https://travel.rakuten.co.jp/HOTEL/180260/180260.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ ＡＺ 愛媛東予店": sourcePhoto(
    "saijo-stay-h183744.jpg",
    "ＨＯＴＥＬ ＡＺ 愛媛東予店の客室写真",
    "ＨＯＴＥＬ ＡＺ 愛媛東予店 room photo",
    "https://travel.rakuten.co.jp/HOTEL/183744/183744.html",
    '楽天トラベル'
  ),
  "ＩＴＯＭＡＣＨＩ ＨＯＴＥＬ ０（いとまちホテルゼロ）": sourcePhoto(
    "saijo-stay-h187958.jpg",
    "ＩＴＯＭＡＣＨＩ ＨＯＴＥＬ ０（いとまちホテルゼロ）の客室写真",
    "ＩＴＯＭＡＣＨＩ ＨＯＴＥＬ ０（いとまちホテルゼロ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/187958/187958.html",
    '楽天トラベル'
  ),
  "自然と静寂のオアシス：サイクリング、石鎚登山、お遍路の理想のハブ」：クレンリネスｄａｎｄａｎ／民泊": sourcePhoto(
    "saijo-stay-h189440.jpg",
    "自然と静寂のオアシス：サイクリング、石鎚登山、お遍路の理想のハブ」：クレンリネスｄａｎｄａｎ／民泊の客室写真",
    "自然と静寂のオアシス：サイクリング、石鎚登山、お遍路の理想のハブ」：クレンリネスｄａｎｄａｎ／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/189440/189440.html",
    '楽天トラベル'
  ),
  "ホテルたいよう農園西条": sourcePhoto(
    "saijo-stay-h192684.jpg",
    "ホテルたいよう農園西条の客室写真",
    "ホテルたいよう農園西条 room photo",
    "https://travel.rakuten.co.jp/HOTEL/192684/192684.html",
    '楽天トラベル'
  ),
  "セルフイン愛媛西条": sourcePhoto(
    "saijo-stay-h196208.jpg",
    "セルフイン愛媛西条の客室写真",
    "セルフイン愛媛西条 room photo",
    "https://travel.rakuten.co.jp/HOTEL/196208/196208.html",
    '楽天トラベル'
  ),
  "トレイルイン 伊予西条店": sourcePhoto(
    "saijo-stay-h198695.jpg",
    "トレイルイン 伊予西条店の客室写真",
    "トレイルイン 伊予西条店 room photo",
    "https://travel.rakuten.co.jp/HOTEL/198695/198695.html",
    '楽天トラベル'
  ),
  "ターミナルホテル東予 大浴場": sourcePhoto(
    "saijo-onsen-h1618.jpg",
    "ターミナルホテル東予 大浴場の写真",
    "ターミナルホテル東予 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/1618/gallery.html",
    '楽天トラベル'
  ),
  "西条アーバンホテル 大浴場": sourcePhoto(
    "saijo-onsen-h1625.jpg",
    "西条アーバンホテル 大浴場の写真",
    "西条アーバンホテル 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/1625/gallery.html",
    '楽天トラベル'
  ),
  "ホテル玉の家西条 大浴場": sourcePhoto(
    "saijo-onsen-h15171.jpg",
    "ホテル玉の家西条 大浴場の写真",
    "ホテル玉の家西条 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/15171/gallery.html",
    '楽天トラベル'
  ),
  "休暇村 瀬戸内東予 大浴場": sourcePhoto(
    "saijo-onsen-h56772.jpg",
    "休暇村 瀬戸内東予 大浴場の写真",
    "休暇村 瀬戸内東予 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/56772/gallery.html",
    '楽天トラベル'
  ),
  "ホテルルートイン伊予西条 旅人の湯": sourcePhoto(
    "saijo-onsen-routeinn.jpg",
    "ホテルルートイン伊予西条 旅人の湯の写真",
    "ホテルルートイン伊予西条 旅人の湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/70697/gallery.html",
    '楽天トラベル'
  ),
  "源泉かけ流しの宿 湯之谷温泉 大浴場": sourcePhoto(
    "saijo-onsen-h145488.jpg",
    "源泉かけ流しの宿 湯之谷温泉 大浴場の写真",
    "源泉かけ流しの宿 湯之谷温泉 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/145488/gallery.html",
    '楽天トラベル'
  ),
  "石鎚神社会館 大浴場": sourcePhoto(
    "saijo-onsen-h149036.jpg",
    "石鎚神社会館 大浴場の写真",
    "石鎚神社会館 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/149036/gallery.html",
    '楽天トラベル'
  ),
  "エクストールイン西条駅前 大浴場": sourcePhoto(
    "saijo-onsen-h151065.jpg",
    "エクストールイン西条駅前 大浴場の写真",
    "エクストールイン西条駅前 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/151065/gallery.html",
    '楽天トラベル'
  ),
  "やまだ屋／民泊 大浴場": sourcePhoto(
    "saijo-onsen-h173371.jpg",
    "やまだ屋／民泊 大浴場の写真",
    "やまだ屋／民泊 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/173371/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉 石鎚の湯 スーパーホテル伊予西条 天然温泉": sourcePhoto(
    "saijo-onsen-superhotel.jpg",
    "天然温泉 石鎚の湯 スーパーホテル伊予西条 天然温泉の写真",
    "天然温泉 石鎚の湯 スーパーホテル伊予西条 天然温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/180260/gallery.html",
    '楽天トラベル'
  ),
  "ＩＴＯＭＡＣＨＩ ＨＯＴＥＬ ０（いとまちホテルゼロ） 源泉かけ流しの温泉": sourcePhoto(
    "saijo-onsen-h187958.jpg",
    "ＩＴＯＭＡＣＨＩ ＨＯＴＥＬ ０（いとまちホテルゼロ） 源泉かけ流しの温泉の写真",
    "ＩＴＯＭＡＣＨＩ ＨＯＴＥＬ ０（いとまちホテルゼロ） 源泉かけ流しの温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/187958/gallery.html",
    '楽天トラベル'
  ),
  "ホテルたいよう農園西条 大浴場": sourcePhoto(
    "saijo-onsen-h192684.jpg",
    "ホテルたいよう農園西条 大浴場の写真",
    "ホテルたいよう農園西条 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/192684/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: SAIJO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: SAIJO.sources.accessed};
}

export const SAIJO_FACILITIES: readonly FacilityRow[] = [

  sight("saijo-sight-01", "道の駅小松オアシス", "愛媛県西条市小松町新屋敷乙22-29", null, "https://www.city.saijo.ehime.jp/soshiki/kanko/oashisu.html", 33.88364, 133.10767),
  sight("saijo-sight-02", "石鎚神社本社", "愛媛県西条市西田甲797番地", null, "https://www.ishizuchisan.jp/", 33.88980556, 133.1555),
  sight("saijo-sight-03", "石鎚神社成就社", "愛媛県西条市西之川", null, "https://www.ishizuchisan.jp/", null, null),
  sight("saijo-sight-04", "石鎚登山ロープウェイ", "愛媛県西条市西之川", null, "https://www.ishizuchisan.jp/", null, null),
  sight("saijo-sight-05", "伊予西条駅", "愛媛県西条市大町", null, "https://ja.wikipedia.org/wiki/%E4%BC%8A%E4%BA%88%E8%A5%BF%E6%9D%A1%E9%A7%85", null, null),
  sight("saijo-sight-06", "前神寺", "愛媛県西条市洲之内", null, "https://ja.wikipedia.org/wiki/%E5%89%8D%E7%A5%9E%E5%AF%BA", null, null),
  sight("saijo-onsen-01", "ターミナルホテル東予 大浴場", "愛媛県西条市三津屋南6-29", null, "https://travel.rakuten.co.jp/HOTEL/1618/gallery.html", null, null),
  sight("saijo-onsen-02", "西条アーバンホテル 大浴場", "愛媛県西条市大町800-3", null, "https://travel.rakuten.co.jp/HOTEL/1625/gallery.html", null, null),
  sight("saijo-onsen-03", "ホテル玉の家西条 大浴場", "愛媛県西条市大町802-10", null, "https://travel.rakuten.co.jp/HOTEL/15171/gallery.html", null, null),
  sight("saijo-onsen-04", "休暇村 瀬戸内東予 大浴場", "愛媛県西条市河原津 乙 7-179", null, "https://travel.rakuten.co.jp/HOTEL/56772/gallery.html", null, null),
  sight("saijo-onsen-05", "ホテルルートイン伊予西条 旅人の湯", "愛媛県西条市新田北新田191-1", null, "https://travel.rakuten.co.jp/HOTEL/70697/gallery.html", null, null),
  sight("saijo-onsen-06", "源泉かけ流しの宿 湯之谷温泉 大浴場", "愛媛県西条市洲之内甲1193", null, "https://travel.rakuten.co.jp/HOTEL/145488/gallery.html", null, null),
  sight("saijo-onsen-07", "石鎚神社会館 大浴場", "愛媛県西条市西田甲797", null, "https://travel.rakuten.co.jp/HOTEL/149036/gallery.html", null, null),
  sight("saijo-onsen-08", "エクストールイン西条駅前 大浴場", "愛媛県西条市大町771-1", null, "https://travel.rakuten.co.jp/HOTEL/151065/gallery.html", null, null),
  sight("saijo-onsen-09", "やまだ屋／民泊 大浴場", "愛媛県西条市古川甲166-1", null, "https://travel.rakuten.co.jp/HOTEL/173371/gallery.html", null, null),
  sight("saijo-onsen-10", "天然温泉 石鎚の湯 スーパーホテル伊予西条 天然温泉", "愛媛県西条市朔日市777-1", null, "https://travel.rakuten.co.jp/HOTEL/180260/gallery.html", null, null),
  sight("saijo-onsen-11", "ＩＴＯＭＡＣＨＩ ＨＯＴＥＬ ０（いとまちホテルゼロ） 源泉かけ流しの温泉", "愛媛県西条市朔日市250-7", null, "https://travel.rakuten.co.jp/HOTEL/187958/gallery.html", null, null),
  sight("saijo-onsen-12", "ホテルたいよう農園西条 大浴場", "愛媛県西条市三津屋南6-15", null, "https://travel.rakuten.co.jp/HOTEL/192684/gallery.html", null, null),
];
