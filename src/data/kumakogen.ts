/**
 * Kumakogen Town sourced facts. Do not invent population.
 * Hall / JIS from town HP + Wikipedia 久万高原町 (accessed 2026-09-10). JIS 38386. Thirteenth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市・東温市・上島町.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / town).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KUMAKOGEN = {
  nameJa: '久万高原町',
  nameEn: 'Kumakogen',
  reading: 'くまこうげんちょう',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'kumakogen',
  jis: '38386',
  jlis: '383864',
  sameAs: 'https://www.kumakogen.jp/',
  hall: {
    postalCode: '791-1201',
    addressJa: '愛媛県上浮穴郡久万高原町久万212番地',
    addressEn: '212 Kuma, Kumakogen Town, Kamiukena District, Ehime 791-1201, Japan',
    phone: '0892-21-1111'
  },
  sources: {
    home: 'https://www.kumakogen.jp/',
    hall: 'https://www.kumakogen.jp/map/kuma.html',
    kanko: 'https://kuma-kanko.com/',
    furuiwaya: 'https://ja.wikipedia.org/wiki/%E5%8F%A4%E5%B2%A9%E5%B1%8B',
    omogo: 'https://ja.wikipedia.org/wiki/%E9%9D%A2%E6%B2%B3%E6%B8%93',
    iwayaji: 'https://ja.wikipedia.org/wiki/%E5%B2%A9%E5%B1%8B%E5%AF%BA_(%E6%84%9B%E5%AA%9B%E7%9C%8C%E4%B9%85%E4%B8%87%E9%AB%98%E5%8E%9F%E7%94%BA)',
    daihoji: 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%AF%9C%E5%AF%BA',
    tabelogCity: 'https://tabelog.com/ehime/C38386/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const KUMAKOGEN_EXPECTED_ROW_COUNT = 8;
export const KUMAKOGEN_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: 古岩屋. Hero title remains municipality name only. */

export const KUMAKOGEN_PLACE_PHOTO = wikiPhoto(
  "kumakogen-furuiwaya.jpg",
  "https://commons.wikimedia.org/wiki/File:Huruiwaya20211109_2.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Dokudami", "https://commons.wikimedia.org/wiki/User:Dokudami", "2021-11-09",
  "古岩屋", "Furuiwaya"
);

const TABELOG_38013606 = "https://tabelog.com/ehime/A3803/A380304/38013606/";
const TABELOG_38010282 = "https://tabelog.com/ehime/A3803/A380304/38010282/";
const TABELOG_38008851 = "https://tabelog.com/ehime/A3803/A380304/38008851/";
const TABELOG_38009456 = "https://tabelog.com/ehime/A3803/A380304/38009456/";
const TABELOG_38016827 = "https://tabelog.com/ehime/A3803/A380304/38016827/";
const TABELOG_38015818 = "https://tabelog.com/ehime/A3803/A380304/38015818/";
const TABELOG_38011716 = "https://tabelog.com/ehime/A3803/A380304/38011716/";
const TABELOG_38016396 = "https://tabelog.com/ehime/A3803/A380304/38016396/";
const TABELOG_38009815 = "https://tabelog.com/ehime/A3803/A380304/38009815/";
const TABELOG_38006045 = "https://tabelog.com/ehime/A3803/A380304/38006045/";
const TABELOG_38010235 = "https://tabelog.com/ehime/A3803/A380304/38010235/";
const TABELOG_38011688 = "https://tabelog.com/ehime/A3803/A380304/38011688/";
const TABELOG_38016753 = "https://tabelog.com/ehime/A3803/A380304/38016753/";
const TABELOG_38009801 = "https://tabelog.com/ehime/A3803/A380304/38009801/";
const TABELOG_38015656 = "https://tabelog.com/ehime/A3803/A380304/38015656/";
const TABELOG_38014116 = "https://tabelog.com/ehime/A3803/A380304/38014116/";

export const KUMAKOGEN_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "古岩屋": KUMAKOGEN_PLACE_PHOTO,
  "面河渓": wikiPhoto(
  "kumakogen-omogo.jpg",
  "https://commons.wikimedia.org/wiki/File:Omogokeikoku.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "As6673", "https://commons.wikimedia.org/wiki/User:As6673", "2009-10-29",
  "面河渓", "Omogo Gorge"
),
  "岩屋寺": wikiPhoto(
  "kumakogen-iwayaji.jpg",
  "https://commons.wikimedia.org/wiki/File:Iwayaji_01.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Reggaeman", "https://commons.wikimedia.org/wiki/User:Reggaeman", "2009-08-06",
  "岩屋寺", "Iwaya-ji"
),
  "大寶寺": wikiPhoto(
  "kumakogen-daihoji.jpg",
  "https://commons.wikimedia.org/wiki/File:Sugozan_Daihoji_09.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Reggaeman", "https://commons.wikimedia.org/wiki/User:Reggaeman", "2009-07-19",
  "大寶寺", "Daihō-ji"
),
  "生そば 若宮": sourcePhoto("kumakogen-38013606-dish.jpg", "生そば 若宮の料理写真", "生そば 若宮 food photo", TABELOG_38013606, '食べログ'),
  "サンサンパン工房": sourcePhoto("kumakogen-38010282-dish.jpg", "サンサンパン工房の料理写真", "サンサンパン工房 food photo", TABELOG_38010282, '食べログ'),
  "ガーデンタイム": sourcePhoto("kumakogen-38008851-dish.jpg", "ガーデンタイムの料理写真", "ガーデンタイム food photo", TABELOG_38008851, '食べログ'),
  "竹森ガーデン": sourcePhoto("kumakogen-38009456-dish.jpg", "竹森ガーデンの料理写真", "竹森ガーデン food photo", TABELOG_38009456, '食べログ'),
  "時あそび うず": sourcePhoto("kumakogen-38016827-dish.jpg", "時あそび うずの料理写真", "時あそび うず food photo", TABELOG_38016827, '食べログ'),
  "久万の茶屋 まほら葉": sourcePhoto("kumakogen-38015818-dish.jpg", "久万の茶屋 まほら葉の料理写真", "久万の茶屋 まほら葉 food photo", TABELOG_38015818, '食べログ'),
  "クマ カフェ": sourcePhoto("kumakogen-38011716-dish.jpg", "クマ カフェの料理写真", "クマ カフェ food photo", TABELOG_38011716, '食べログ'),
  "Ninepy": sourcePhoto("kumakogen-38016396-dish.jpg", "Ninepyの料理写真", "Ninepy food photo", TABELOG_38016396, '食べログ'),
  "面河茶屋": sourcePhoto("kumakogen-38009815-dish.jpg", "面河茶屋の料理写真", "面河茶屋 food photo", TABELOG_38009815, '食べログ'),
  "カフェレストラン こもれび": sourcePhoto("kumakogen-38006045-dish.jpg", "カフェレストラン こもれびの料理写真", "カフェレストラン こもれび food photo", TABELOG_38006045, '食べログ'),
  "レストランさんさん": sourcePhoto("kumakogen-38010235-dish.jpg", "レストランさんさんの料理写真", "レストランさんさん food photo", TABELOG_38010235, '食べログ'),
  "あん": sourcePhoto("kumakogen-38011688-dish.jpg", "あんの料理写真", "あん food photo", TABELOG_38011688, '食べログ'),
  "アニキのサウナ": sourcePhoto("kumakogen-38016753-dish.jpg", "アニキのサウナの料理写真", "アニキのサウナ food photo", TABELOG_38016753, '食べログ'),
  "吉野屋 菓子舗": sourcePhoto("kumakogen-38009801-dish.jpg", "吉野屋 菓子舗の料理写真", "吉野屋 菓子舗 food photo", TABELOG_38009801, '食べログ'),
  "高原ゴルフ倶楽部": sourcePhoto("kumakogen-38015656-dish.jpg", "高原ゴルフ倶楽部の料理写真", "高原ゴルフ倶楽部 food photo", TABELOG_38015656, '食べログ'),
  "中華そば 鶴姫": sourcePhoto("kumakogen-38014116-dish.jpg", "中華そば 鶴姫の料理写真", "中華そば 鶴姫 food photo", TABELOG_38014116, '食べログ'),
  "国民宿舎　古岩屋荘": sourcePhoto(
    "kumakogen-stay-h104672.jpg",
    "国民宿舎　古岩屋荘の客室写真",
    "国民宿舎　古岩屋荘 room photo",
    "https://travel.rakuten.co.jp/HOTEL/104672/104672.html",
    '楽天トラベル'
  ),
  "やすらぎの宿　でんこ": sourcePhoto(
    "kumakogen-stay-h128621.jpg",
    "やすらぎの宿　でんこの客室写真",
    "やすらぎの宿　でんこ room photo",
    "https://travel.rakuten.co.jp/HOTEL/128621/128621.html",
    '楽天トラベル'
  ),
  "いやしの宿　八丁坂": sourcePhoto(
    "kumakogen-stay-h168300.jpg",
    "いやしの宿　八丁坂の客室写真",
    "いやしの宿　八丁坂 room photo",
    "https://travel.rakuten.co.jp/HOTEL/168300/168300.html",
    '楽天トラベル'
  ),
  "国民宿舎　石鎚": sourcePhoto(
    "kumakogen-stay-h196130.jpg",
    "国民宿舎　石鎚の客室写真",
    "国民宿舎　石鎚 room photo",
    "https://travel.rakuten.co.jp/HOTEL/196130/196130.html",
    '楽天トラベル'
  ),
  "国民宿舎　古岩屋荘 大浴場": sourcePhoto(
    "kumakogen-onsen-h104672.jpg",
    "国民宿舎　古岩屋荘 大浴場の写真",
    "国民宿舎　古岩屋荘 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/104672/gallery.html",
    '楽天トラベル'
  ),
  "やすらぎの宿　でんこ お風呂": sourcePhoto(
    "kumakogen-onsen-h128621.jpg",
    "やすらぎの宿　でんこ お風呂の写真",
    "やすらぎの宿　でんこ お風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/128621/gallery.html",
    '楽天トラベル'
  ),
  "いやしの宿　八丁坂 お風呂": sourcePhoto(
    "kumakogen-onsen-h168300.jpg",
    "いやしの宿　八丁坂 お風呂の写真",
    "いやしの宿　八丁坂 お風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/168300/gallery.html",
    '楽天トラベル'
  ),
  "国民宿舎　石鎚 大浴場": sourcePhoto(
    "kumakogen-onsen-h196130.jpg",
    "国民宿舎　石鎚 大浴場の写真",
    "国民宿舎　石鎚 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/196130/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: KUMAKOGEN.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: KUMAKOGEN.sources.accessed};
}

export const KUMAKOGEN_FACILITIES: readonly FacilityRow[] = [
  sight("kumakogen-sight-01", "古岩屋", "愛媛県上浮穴郡久万高原町直瀬", null, "https://ja.wikipedia.org/wiki/%E5%8F%A4%E5%B2%A9%E5%B1%8B", 33.6683, 132.97480556),
  sight("kumakogen-sight-02", "面河渓", "愛媛県上浮穴郡久万高原町若山", null, "https://ja.wikipedia.org/wiki/%E9%9D%A2%E6%B2%B3%E6%B8%93", 33.73623889, 133.11496111),
  sight("kumakogen-sight-03", "岩屋寺", "愛媛県上浮穴郡久万高原町七鳥1468番地", null, "https://ja.wikipedia.org/wiki/%E5%B2%A9%E5%B1%8B%E5%AF%BA_(%E6%84%9B%E5%AA%9B%E7%9C%8C%E4%B9%85%E4%B8%87%E9%AB%98%E5%8E%9F%E7%94%BA)", 33.6586667, 132.9807222),
  sight("kumakogen-sight-04", "大寶寺", "愛媛県上浮穴郡久万高原町菅生2番耕地1173番地2", null, "https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%AF%9C%E5%AF%BA", 33.660889, 132.912083),
  sight("kumakogen-onsen-01", "国民宿舎　古岩屋荘 大浴場", "愛媛県上浮穴郡久万高原町直瀬乙1636", null, "https://travel.rakuten.co.jp/HOTEL/104672/gallery.html", null, null),
  sight("kumakogen-onsen-02", "やすらぎの宿　でんこ お風呂", "愛媛県上浮穴郡久万高原町入野1363-1", null, "https://travel.rakuten.co.jp/HOTEL/128621/gallery.html", null, null),
  sight("kumakogen-onsen-03", "いやしの宿　八丁坂 お風呂", "愛媛県上浮穴郡久万高原町下畑野川甲1609-7", null, "https://travel.rakuten.co.jp/HOTEL/168300/gallery.html", null, null),
  sight("kumakogen-onsen-04", "国民宿舎　石鎚 大浴場", "愛媛県上浮穴郡久万高原町土小屋", null, "https://travel.rakuten.co.jp/HOTEL/196130/gallery.html", null, null),
];
