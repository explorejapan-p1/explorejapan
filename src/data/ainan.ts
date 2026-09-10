/**
 * Ainan Town sourced facts. Do not invent population.
 * Hall / JIS from town HP + ehime-municipalities (accessed 2026-09-10). JIS 38506. Twentieth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市・東温市・上島町・久万高原町・松前町・砥部町・内子町・伊方町・松野町・鬼北町.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / town).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const AINAN = {
  nameJa: '愛南町',
  nameEn: 'Ainan',
  reading: 'あいなんちょう',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'ainan',
  jis: '38506',
  jlis: '385069',
  sameAs: 'https://www.town.ainan.ehime.jp/',
  hall: {
    postalCode: '798-4196',
    addressJa: '愛媛県南宇和郡愛南町城辺甲2420番地',
    addressEn: '2420 Johen Ko, Ainan Town, Minamiuwa District, Ehime 798-4196, Japan',
    phone: '0895-72-1211'
  },
  sources: {
    home: 'https://www.town.ainan.ehime.jp/',
    hall: 'https://www.town.ainan.ehime.jp/kurashi/chosei/yakuba/index.html',
    kanko: 'https://www.town.ainan.ehime.jp/kanko/',
    stayList: 'https://www.town.ainan.ehime.jp/kanko/sightseeing/shukuhaku/',
    select: 'https://travel.rakuten.co.jp/HOTEL/67356/67356.html',
    aoikuni: 'https://travel.rakuten.co.jp/HOTEL/149312/149312.html',
    az: 'https://travel.rakuten.co.jp/HOTEL/193143/193143.html',
    akebono: 'https://travel.rakuten.co.jp/HOTEL/134904/134904.html',
    sotodomari: 'https://commons.wikimedia.org/wiki/File:Sotodomari_%E6%84%9B%E5%AA%9B%E7%9C%8C%E5%8D%97%E5%AE%87%E5%92%8C%E9%83%A1%E6%84%9B%E5%8D%97%E7%94%BA%E5%A4%96%E6%B3%8A1010035.JPG',
    tabelogCity: 'https://tabelog.com/ehime/C38506/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const AINAN_EXPECTED_ROW_COUNT = 8;
export const AINAN_EXPECTED_GEO_COUNT = 1;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: 愛南町役場. Hero title remains municipality name only. */

export const AINAN_PLACE_PHOTO = wikiPhoto(
  "ainan-town-hall.jpg",
  "https://commons.wikimedia.org/wiki/File:Ainan_town_hall.JPG",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "アラツク", "https://commons.wikimedia.org/wiki/File:Ainan_town_hall.JPG", "2019-08",
  "愛南町役場", "Ainan Town Hall"
);

export const AINAN_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "居酒屋 花かるた": sourcePhoto("ainan-38013072-dish.jpg", "居酒屋 花かるたの料理写真", "居酒屋 花かるた food photo", "https://tabelog.com/ehime/A3804/A380404/38013072/", '食べログ'),
  "鉄板かめお": sourcePhoto("ainan-38013580-dish.jpg", "鉄板かめおの料理写真", "鉄板かめお food photo", "https://tabelog.com/ehime/A3804/A380404/38013580/", '食べログ'),
  "アンベール": sourcePhoto("ainan-38005011-dish.jpg", "アンベールの料理写真", "アンベール food photo", "https://tabelog.com/ehime/A3804/A380404/38005011/", '食べログ'),
  "酒処 尾崎": sourcePhoto("ainan-38015093-dish.jpg", "酒処 尾崎の料理写真", "酒処 尾崎 food photo", "https://tabelog.com/ehime/A3804/A380404/38015093/", '食べログ'),
  "季節園": sourcePhoto("ainan-38010905-dish.jpg", "季節園の料理写真", "季節園 food photo", "https://tabelog.com/ehime/A3804/A380404/38010905/", '食べログ'),
  "ばちこい": sourcePhoto("ainan-38015441-dish.jpg", "ばちこいの料理写真", "ばちこい food photo", "https://tabelog.com/ehime/A3804/A380404/38015441/", '食べログ'),
  "だんだん館": sourcePhoto("ainan-38001022-dish.jpg", "だんだん館の料理写真", "だんだん館 food photo", "https://tabelog.com/ehime/A3804/A380404/38001022/", '食べログ'),
  "池田屋": sourcePhoto("ainan-38010076-dish.jpg", "池田屋の料理写真", "池田屋 food photo", "https://tabelog.com/ehime/A3804/A380404/38010076/", '食べログ'),
  "喫茶アルプス": sourcePhoto("ainan-38010728-dish.jpg", "喫茶アルプスの料理写真", "喫茶アルプス food photo", "https://tabelog.com/ehime/A3804/A380404/38010728/", '食べログ'),
  "みかん職人 武田屋": sourcePhoto("ainan-38013928-dish.jpg", "みかん職人 武田屋の料理写真", "みかん職人 武田屋 food photo", "https://tabelog.com/ehime/A3804/A380404/38013928/", '食べログ'),
  "酒彩家 遊厨": sourcePhoto("ainan-38011648-dish.jpg", "酒彩家 遊厨の料理写真", "酒彩家 遊厨 food photo", "https://tabelog.com/ehime/A3804/A380404/38011648/", '食べログ'),
  "炭焼き 船波": sourcePhoto("ainan-38014714-dish.jpg", "炭焼き 船波の料理写真", "炭焼き 船波 food photo", "https://tabelog.com/ehime/A3804/A380404/38014714/", '食べログ'),
  "白椿": sourcePhoto("ainan-38009896-dish.jpg", "白椿の料理写真", "白椿 food photo", "https://tabelog.com/ehime/A3804/A380404/38009896/", '食べログ'),
  "道の駅 みしょうMIC": sourcePhoto("ainan-38007459-dish.jpg", "道の駅 みしょうMICの料理写真", "道の駅 みしょうMIC food photo", "https://tabelog.com/ehime/A3804/A380404/38007459/", '食べログ'),
  "愛南 市場食堂": sourcePhoto("ainan-38007391-dish.jpg", "愛南 市場食堂の料理写真", "愛南 市場食堂 food photo", "https://tabelog.com/ehime/A3804/A380404/38007391/", '食べログ'),
  "お好み焼き　ひらの": sourcePhoto("ainan-38007319-dish.jpg", "お好み焼き　ひらのの料理写真", "お好み焼き　ひらの food photo", "https://tabelog.com/ehime/A3804/A380404/38007319/", '食べログ'),
  "ホテルセレクト愛媛愛南町": sourcePhoto(
    "ainan-stay-h67356.jpg",
    "ホテルセレクト愛媛愛南町の客室写真",
    "ホテルセレクト愛媛愛南町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/67356/67356.html",
    '楽天トラベル'
  ),
  "宇和海国立公園　青い国ホテル": sourcePhoto(
    "ainan-stay-h149312.jpg",
    "宇和海国立公園　青い国ホテルの客室写真",
    "宇和海国立公園　青い国ホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/149312/149312.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ　ＡＺ　愛媛愛南店": sourcePhoto(
    "ainan-stay-h193143.jpg",
    "ＨＯＴＥＬ　ＡＺ　愛媛愛南店の客室写真",
    "ＨＯＴＥＬ　ＡＺ　愛媛愛南店 room photo",
    "https://travel.rakuten.co.jp/HOTEL/193143/193143.html",
    '楽天トラベル'
  ),
  "一本松温泉あけぼの荘": sourcePhoto(
    "ainan-stay-h134904.jpg",
    "一本松温泉あけぼの荘の客室写真",
    "一本松温泉あけぼの荘 room photo",
    "https://travel.rakuten.co.jp/HOTEL/134904/134904.html",
    '楽天トラベル'
  ),
  "ホテルセレクト愛媛愛南町 風呂": sourcePhoto(
    "ainan-onsen-h67356.jpg",
    "ホテルセレクト愛媛愛南町 風呂の写真",
    "ホテルセレクト愛媛愛南町 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/67356/gallery.html",
    '楽天トラベル'
  ),
  "一本松温泉あけぼの荘 風呂": sourcePhoto(
    "ainan-onsen-h134904.jpg",
    "一本松温泉あけぼの荘 風呂の写真",
    "一本松温泉あけぼの荘 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/134904/gallery.html",
    '楽天トラベル'
  ),
  "愛南町役場": wikiPhoto(
  "ainan-town-hall.jpg",
  "https://commons.wikimedia.org/wiki/File:Ainan_town_hall.JPG",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "アラツク", "https://commons.wikimedia.org/wiki/File:Ainan_town_hall.JPG", "2014-04",
  "愛南町役場", "Ainan Town Hall"
),
  "外泊石垣の里": wikiPhoto(
  "ainan-sotodomari.jpg",
  "https://commons.wikimedia.org/wiki/File:Sotodomari_愛媛県南宇和郡愛南町外泊1010035.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "松岡明芳", "https://zh.wikipedia.org/wiki/user:%E6%9D%BE%E5%B2%A1%E6%98%8E%E8%8A%B3", "2006-05",
  "外泊石垣の里", "Sotodomari stone village"
),
  "僧都川": wikiPhoto(
  "ainan-sozu-river.jpg",
  "https://commons.wikimedia.org/wiki/File:SozuRiverInAinanEhime.JPG",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "ArchetypeRyan at English Wikipedia", "https://en.wikipedia.org/wiki/User:ArchetypeRyan", "28 May ",
  "僧都川", "Sozu River"
),
  "船越（西海）": wikiPhoto(
  "ainan-funakoshi.jpg",
  "https://commons.wikimedia.org/wiki/File:Funakoshi_Nishiumi_Ainan_Ehime.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "ArchetypeRyan", "https://commons.wikimedia.org/wiki/File:Funakoshi_Nishiumi_Ainan_Ehime.JPG", "2008-07",
  "船越（西海）", "Funakoshi Nishiumi"
),
  "光禅寺本堂": wikiPhoto(
  "ainan-kouzenji.jpg",
  "https://commons.wikimedia.org/wiki/File:Kouzen-ji,_Ainan_-_Main_hall.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "運動会プロテインパワー", "https://commons.wikimedia.org/wiki/File:Kouzen-ji,_Ainan_-_Main_hall.jpg", "2022-12",
  "光禅寺本堂", "Kouzen-ji Main Hall"
),
  "紫電改展示館": wikiPhoto(
  "ainan-shidenkai.jpg",
  "https://commons.wikimedia.org/wiki/File:Shiden-kai-tenjikan2.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Tso331", "https://ja.wikipedia.org/wiki/User:_Tso331", "2008-10",
  "紫電改展示館", "Shiden-kai Exhibition Hall"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: AINAN.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: AINAN.sources.accessed};
}

export const AINAN_FACILITIES: readonly FacilityRow[] = [
  sight("ainan-sight-01", "愛南町役場", "愛媛県南宇和郡愛南町城辺甲2420番地", "0895-72-1211", "https://www.town.ainan.ehime.jp/", 32.96208333333333, 132.58316666666667),
  sight("ainan-sight-02", "外泊石垣の里", "愛媛県南宇和郡愛南町外泊", null, "https://commons.wikimedia.org/wiki/File:Sotodomari_%E6%84%9B%E5%AA%9B%E7%9C%8C%E5%8D%97%E5%AE%87%E5%92%8C%E9%83%A1%E6%84%9B%E5%8D%97%E7%94%BA%E5%A4%96%E6%B3%8A1010035.JPG", null, null),
  sight("ainan-sight-03", "僧都川", "愛媛県南宇和郡愛南町", null, "https://commons.wikimedia.org/wiki/File:SozuRiverInAinanEhime.JPG", null, null),
  sight("ainan-sight-04", "船越（西海）", "愛媛県南宇和郡愛南町船越", null, "https://commons.wikimedia.org/wiki/File:Funakoshi_Nishiumi_Ainan_Ehime.JPG", null, null),
  sight("ainan-sight-05", "光禅寺本堂", "愛媛県南宇和郡愛南町", null, "https://commons.wikimedia.org/wiki/File:Kouzen-ji,_Ainan_-_Main_hall.jpg", null, null),
  sight("ainan-sight-06", "紫電改展示館", "愛媛県南宇和郡愛南町", null, "https://commons.wikimedia.org/wiki/File:Shiden-kai-tenjikan2.jpg", null, null),
  sight("ainan-onsen-01", "ホテルセレクト愛媛愛南町 風呂", "愛媛県南宇和郡愛南町広見3367-1", "0895-84-3311", "https://travel.rakuten.co.jp/HOTEL/67356/gallery.html", null, null),
  sight("ainan-onsen-02", "一本松温泉あけぼの荘 風呂", "愛媛県南宇和郡愛南町増田5470", "0895-84-3260", "https://travel.rakuten.co.jp/HOTEL/134904/gallery.html", null, null),
];
