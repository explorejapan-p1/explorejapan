/**
 * Uchiko Town sourced facts. Do not invent population.
 * Hall / JIS from town HP + ehime-municipalities (accessed 2026-09-10). JIS 38422. Sixteenth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市・東温市・上島町・久万高原町・松前町・砥部町.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / town).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const UCHIKO = {
  nameJa: '内子町',
  nameEn: 'Uchiko',
  reading: 'うちこちょう',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'uchiko',
  jis: '38422',
  jlis: '384224',
  sameAs: 'https://www.town.uchiko.ehime.jp/',
  hall: {
    postalCode: '795-0392',
    addressJa: '愛媛県喜多郡内子町平岡甲168番地',
    addressEn: '168 Hiraoka-ko, Uchiko Town, Kita District, Ehime 795-0392, Japan',
    phone: '0893-44-2111'
  },
  sources: {
    home: 'https://www.town.uchiko.ehime.jp/',
    hall: 'https://www.town.uchiko.ehime.jp/map/annaihonntyou.html',
    kanko: 'https://www.town.uchiko.ehime.jp/',
    yokaichi: 'https://ja.wikipedia.org/wiki/%E5%85%AB%E6%97%A5%E5%B8%82%E8%AD%B7%E5%9B%BD',
    uchikoza: 'https://ja.wikipedia.org/wiki/%E5%86%85%E5%AD%90%E5%BA%A7',
    kamihaga: 'https://www.town.uchiko.ehime.jp/site/hozonsenta/kamihaga.html',
    tabelogCity: 'https://tabelog.com/ehime/C38422/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const UCHIKO_EXPECTED_ROW_COUNT = 8;
export const UCHIKO_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: 八日市護国伝統的建造物群保存地区. Hero title remains municipality name only. */

export const UCHIKO_PLACE_PHOTO = wikiPhoto(
  "uchiko-yokaichi-gokoku.jpg",
  "https://commons.wikimedia.org/wiki/File%3AYokaichi_Gokoku_ac_%283%29.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/",
  "Asturio Cantabrio", "https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio", "2024-08",
  "八日市護国伝統的建造物群保存地区", "Yokaichi-Gokoku historic district"
);

const TABELOG_38016831 = "https://tabelog.com/ehime/A3803/A380303/38016831/";
const TABELOG_38000243 = "https://tabelog.com/ehime/A3803/A380303/38000243/";
const TABELOG_38003310 = "https://tabelog.com/ehime/A3803/A380303/38003310/";
const TABELOG_38007240 = "https://tabelog.com/ehime/A3803/A380304/38007240/";
const TABELOG_38003931 = "https://tabelog.com/ehime/A3803/A380303/38003931/";
const TABELOG_38012686 = "https://tabelog.com/ehime/A3803/A380303/38012686/";
const TABELOG_38007239 = "https://tabelog.com/ehime/A3804/A380402/38007239/";
const TABELOG_38015482 = "https://tabelog.com/ehime/A3803/A380303/38015482/";
const TABELOG_38001747 = "https://tabelog.com/ehime/A3803/A380303/38001747/";
const TABELOG_38006046 = "https://tabelog.com/ehime/A3803/A380303/38006046/";
const TABELOG_38009353 = "https://tabelog.com/ehime/A3803/A380303/38009353/";
const TABELOG_38001823 = "https://tabelog.com/ehime/A3803/A380303/38001823/";
const TABELOG_38010356 = "https://tabelog.com/ehime/A3803/A380303/38010356/";
const TABELOG_38011318 = "https://tabelog.com/ehime/A3803/A380303/38011318/";
const TABELOG_38008004 = "https://tabelog.com/ehime/A3803/A380303/38008004/";
const TABELOG_38017019 = "https://tabelog.com/ehime/A3803/A380303/38017019/";

export const UCHIKO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "八日市護国伝統的建造物群保存地区": wikiPhoto(
  "uchiko-yokaichi-gokoku.jpg",
  "https://commons.wikimedia.org/wiki/File%3AYokaichi_Gokoku_ac_%283%29.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/",
  "Asturio Cantabrio", "https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio", "2024-08",
  "八日市護国伝統的建造物群保存地区", "Yokaichi-Gokoku historic district"
),
  "内子座": wikiPhoto(
  "uchiko-za.jpg",
  "https://commons.wikimedia.org/wiki/File%3AUchiko-za_ac_%281%29.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/",
  "Asturio Cantabrio", "https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio", "2024-08",
  "内子座", "Uchiko-za theater"
),
  "木蝋資料館 上芳我邸": wikiPhoto(
  "uchiko-kamihaga.jpg",
  "https://commons.wikimedia.org/wiki/File%3AKamihaga_Residence.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/",
  "Suikotei", "https://commons.wikimedia.org/wiki/User:Suikotei", "2019-12-28",
  "木蝋資料館 上芳我邸", "Kamihaga Residence (wood-wax museum)"
),
  "八日市・護国町並保存センター": wikiPhoto(
  "uchiko-machinami-center.jpg",
  "https://commons.wikimedia.org/wiki/File%3AYokaichi_Gokoku_Machinami_Preservation_Center.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/",
  "Suikotei", "https://commons.wikimedia.org/wiki/User:Suikotei", "2019-12-28",
  "八日市・護国町並保存センター", "Yokaichi-Gokoku Machinami Preservation Center"
),
  "五十崎凧博物館": wikiPhoto(
  "uchiko-ikazaki-kite.jpg",
  "https://commons.wikimedia.org/wiki/File%3AIkazaki_Kyte_Museum1.JPG",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "At by At", "https://commons.wikimedia.org/wiki/User:At", "2011-02-21",
  "五十崎凧博物館", "Ikazaki Kite Museum"
),
  "道の駅内子フレッシュパークからり": wikiPhoto(
  "uchiko-karari.jpg",
  "https://commons.wikimedia.org/wiki/File%3ARoadside_Station_Karari.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "As6022014", "https://commons.wikimedia.org/wiki/User:As6022014", "2010-04-27",
  "道の駅内子フレッシュパークからり", "Roadside Station Uchiko Fresh Park Karari"
),
  "ちゃんこ屋 花筏": sourcePhoto("uchiko-38016831-dish.jpg", "ちゃんこ屋 花筏の料理写真", "ちゃんこ屋 花筏 food photo", TABELOG_38016831, '食べログ'),
  "レストランからり": sourcePhoto("uchiko-38000243-dish.jpg", "レストランからりの料理写真", "レストランからり food photo", TABELOG_38000243, '食べログ'),
  "珈琲館京和": sourcePhoto("uchiko-38003310-dish.jpg", "珈琲館京和の料理写真", "珈琲館京和 food photo", TABELOG_38003310, '食べログ'),
  "ふじや旅館": sourcePhoto("uchiko-38007240-dish.jpg", "ふじや旅館の料理写真", "ふじや旅館 food photo", TABELOG_38007240, '食べログ'),
  "もんた": sourcePhoto("uchiko-38003931-dish.jpg", "もんたの料理写真", "もんた food photo", TABELOG_38003931, '食べログ'),
  "イザカヤ にこり": sourcePhoto("uchiko-38012686-dish.jpg", "イザカヤ にこりの料理写真", "イザカヤ にこり food photo", TABELOG_38012686, '食べログ'),
  "小田深山荘": sourcePhoto("uchiko-38007239-dish.jpg", "小田深山荘の料理写真", "小田深山荘 food photo", TABELOG_38007239, '食べログ'),
  "伍十食屋こころ": sourcePhoto("uchiko-38015482-dish.jpg", "伍十食屋こころの料理写真", "伍十食屋こころ food photo", TABELOG_38015482, '食べログ'),
  "かば忠 内子店": sourcePhoto("uchiko-38001747-dish.jpg", "かば忠 内子店の料理写真", "かば忠 内子店 food photo", TABELOG_38001747, '食べログ'),
  "かじか亭": sourcePhoto("uchiko-38006046-dish.jpg", "かじか亭の料理写真", "かじか亭 food photo", TABELOG_38006046, '食べログ'),
  "善蔵": sourcePhoto("uchiko-38009353-dish.jpg", "善蔵の料理写真", "善蔵 food photo", TABELOG_38009353, '食べログ'),
  "やきとり一膳": sourcePhoto("uchiko-38001823-dish.jpg", "やきとり一膳の料理写真", "やきとり一膳 food photo", TABELOG_38001823, '食べログ'),
  "からりパン工房": sourcePhoto("uchiko-38010356-dish.jpg", "からりパン工房の料理写真", "からりパン工房 food photo", TABELOG_38010356, '食べログ'),
  "新倉鮮魚": sourcePhoto("uchiko-38011318-dish.jpg", "新倉鮮魚の料理写真", "新倉鮮魚 food photo", TABELOG_38011318, '食べログ'),
  "神田": sourcePhoto("uchiko-38008004-dish.jpg", "神田の料理写真", "神田 food photo", TABELOG_38008004, '食べログ'),
  "春吉": sourcePhoto("uchiko-38017019-dish.jpg", "春吉の料理写真", "春吉 food photo", TABELOG_38017019, '食べログ'),
  "ＨＯＴＥＬ　ＡＺ　愛媛内子店": sourcePhoto(
    "uchiko-stay-h160773.jpg",
    "ＨＯＴＥＬ　ＡＺ　愛媛内子店の客室写真",
    "ＨＯＴＥＬ　ＡＺ　愛媛内子店 room photo",
    "https://travel.rakuten.co.jp/HOTEL/160773/160773.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ　ＯＮＬＹＯＮＥ": sourcePhoto(
    "uchiko-stay-h197320.jpg",
    "ＨＯＴＥＬ　ＯＮＬＹＯＮＥの客室写真",
    "ＨＯＴＥＬ　ＯＮＬＹＯＮＥ room photo",
    "https://travel.rakuten.co.jp/HOTEL/197320/197320.html",
    '楽天トラベル'
  ),
  "オーベルジュ内子": sourcePhoto(
    "uchiko-stay-h181810.jpg",
    "オーベルジュ内子の客室写真",
    "オーベルジュ内子 room photo",
    "https://travel.rakuten.co.jp/HOTEL/181810/181810.html",
    '楽天トラベル'
  ),
  "内子の宿　久": sourcePhoto(
    "uchiko-stay-h167011.jpg",
    "内子の宿　久の客室写真",
    "内子の宿　久 room photo",
    "https://travel.rakuten.co.jp/HOTEL/167011/167011.html",
    '楽天トラベル'
  ),
  "内子の宿　織": sourcePhoto(
    "uchiko-stay-h167010.jpg",
    "内子の宿　織の客室写真",
    "内子の宿　織 room photo",
    "https://travel.rakuten.co.jp/HOTEL/167010/167010.html",
    '楽天トラベル'
  ),
  "内子の宿　こころ": sourcePhoto(
    "uchiko-stay-h173234.jpg",
    "内子の宿　こころの客室写真",
    "内子の宿　こころ room photo",
    "https://travel.rakuten.co.jp/HOTEL/173234/173234.html",
    '楽天トラベル'
  ),
  "内子の宿　紬": sourcePhoto(
    "uchiko-stay-h197382.jpg",
    "内子の宿　紬の客室写真",
    "内子の宿　紬 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197382/197382.html",
    '楽天トラベル'
  ),
  "内子の宿　二重": sourcePhoto(
    "uchiko-stay-h197385.jpg",
    "内子の宿　二重の客室写真",
    "内子の宿　二重 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197385/197385.html",
    '楽天トラベル'
  ),
  "内子の宿　絣": sourcePhoto(
    "uchiko-stay-h197383.jpg",
    "内子の宿　絣の客室写真",
    "内子の宿　絣 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197383/197383.html",
    '楽天トラベル'
  ),
  "内子の宿　単衣": sourcePhoto(
    "uchiko-stay-h197384.jpg",
    "内子の宿　単衣の客室写真",
    "内子の宿　単衣 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197384/197384.html",
    '楽天トラベル'
  ),
  "石畳の宿": sourcePhoto(
    "uchiko-stay-h141920.jpg",
    "石畳の宿の客室写真",
    "石畳の宿 room photo",
    "https://travel.rakuten.co.jp/HOTEL/141920/141920.html",
    '楽天トラベル'
  ),
  "あかり　ｂｙ　４Ｓ　ＳＴＡＹ": sourcePhoto(
    "uchiko-stay-h201934.jpg",
    "あかり　ｂｙ　４Ｓ　ＳＴＡＹの客室写真",
    "あかり　ｂｙ　４Ｓ　ＳＴＡＹ room photo",
    "https://travel.rakuten.co.jp/HOTEL/201934/201934.html",
    '楽天トラベル'
  ),
  "古民家ゲストハウス＆バー　内子晴れ": sourcePhoto(
    "uchiko-stay-h165841.jpg",
    "古民家ゲストハウス＆バー　内子晴れの客室写真",
    "古民家ゲストハウス＆バー　内子晴れ room photo",
    "https://travel.rakuten.co.jp/HOTEL/165841/165841.html",
    '楽天トラベル'
  ),
  "内子の宿　中芳我": sourcePhoto(
    "uchiko-stay-h184191.jpg",
    "内子の宿　中芳我の客室写真",
    "内子の宿　中芳我 room photo",
    "https://travel.rakuten.co.jp/HOTEL/184191/184191.html",
    '楽天トラベル'
  ),
  "Ｔｅｄ＇ｓ　＾": sourcePhoto(
    "uchiko-stay-h194679.jpg",
    "Ｔｅｄ＇ｓ　＾の客室写真",
    "Ｔｅｄ＇ｓ　＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/194679/194679.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ　ＯＮＬＹＯＮＥ 風呂": sourcePhoto(
    "uchiko-onsen-h197320.jpg",
    "ＨＯＴＥＬ　ＯＮＬＹＯＮＥ 風呂の写真",
    "ＨＯＴＥＬ　ＯＮＬＹＯＮＥ 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/197320/gallery.html",
    '楽天トラベル'
  ),
  "オーベルジュ内子 風呂": sourcePhoto(
    "uchiko-onsen-h181810.jpg",
    "オーベルジュ内子 風呂の写真",
    "オーベルジュ内子 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/181810/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: UCHIKO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: UCHIKO.sources.accessed};
}

export const UCHIKO_FACILITIES: readonly FacilityRow[] = [

  sight("uchiko-sight-01", "八日市護国伝統的建造物群保存地区", "愛媛県喜多郡内子町内子・城廻", null, "https://ja.wikipedia.org/wiki/%E5%85%AB%E6%97%A5%E5%B8%82%E8%AD%B7%E5%9B%BD", 33.555572, 132.653336),
  sight("uchiko-sight-02", "内子座", "愛媛県喜多郡内子町内子2102", null, "https://ja.wikipedia.org/wiki/%E5%86%85%E5%AD%90%E5%BA%A7", 33.551444, 132.650194),
  sight("uchiko-sight-03", "木蝋資料館 上芳我邸", "愛媛県喜多郡内子町内子2696", "0893-44-2771", "https://www.town.uchiko.ehime.jp/site/hozonsenta/kamihaga.html", null, null),
  sight("uchiko-sight-04", "八日市・護国町並保存センター", "愛媛県喜多郡内子町城廻211", "0893-44-5212", "https://www.town.uchiko.ehime.jp/soshiki/3/hozonsenta.html", null, null),
  sight("uchiko-sight-05", "五十崎凧博物館", "愛媛県喜多郡内子町五十崎甲1437番地", null, "https://www.wikidata.org/wiki/Q11372066", 33.539686, 132.656603),
  sight("uchiko-sight-06", "道の駅内子フレッシュパークからり", "愛媛県喜多郡内子町内子2452", null, "https://www.wikidata.org/wiki/Q11641159", 33.554917, 132.658472),
  sight("uchiko-onsen-01", "ＨＯＴＥＬ　ＯＮＬＹＯＮＥ 風呂", "愛媛県喜多郡内子町内子1913", "0893-57-6844", "https://travel.rakuten.co.jp/HOTEL/197320/gallery.html", null, null),
  sight("uchiko-onsen-02", "オーベルジュ内子 風呂", "愛媛県喜多郡内子町五十崎乙485-2", "0893-44-6565", "https://travel.rakuten.co.jp/HOTEL/181810/gallery.html", null, null),
];
