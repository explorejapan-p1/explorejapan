/**
 * Ikata Town sourced facts. Do not invent population.
 * Hall / JIS from town HP + ehime-municipalities (accessed 2026-09-10). JIS 38442. Seventeenth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市・東温市・上島町・久万高原町・松前町・砥部町・内子町.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / town).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const IKATA = {
  nameJa: '伊方町',
  nameEn: 'Ikata',
  reading: 'いかたちょう',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'ikata',
  jis: '38442',
  jlis: '384429',
  sameAs: 'https://www.town.ikata.ehime.jp/',
  hall: {
    postalCode: '796-0301',
    addressJa: '愛媛県西宇和郡伊方町湊浦1993番地1',
    addressEn: '1993-1 Minatoura, Ikata Town, Nishiuwa District, Ehime 796-0301, Japan',
    phone: '0894-38-0211'
  },
  sources: {
    home: 'https://www.town.ikata.ehime.jp/',
    hall: 'https://www.town.ikata.ehime.jp/soshiki/1/378.html',
    kanko: 'https://www.town.ikata.ehime.jp/',
    lighthouse: 'https://ja.wikipedia.org/wiki/%E4%BD%90%E7%94%B0%E5%B2%AC%E7%81%AF%E5%8F%B0',
    cape: 'https://ja.wikipedia.org/wiki/%E4%BD%90%E7%94%B0%E5%B2%AC',
    onsen: 'https://www.kamegaike.com/',
    tabelogCity: 'https://tabelog.com/ehime/C38442/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const IKATA_EXPECTED_ROW_COUNT = 9;
export const IKATA_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: 佐田岬灯台. Hero title remains municipality name only. */

export const IKATA_PLACE_PHOTO = wikiPhoto(
  "ikata-sadamisaki-lighthouse.jpg",
  "https://commons.wikimedia.org/wiki/File:Sadamisaki_Lighthouse-light_on.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/",
  "melvil", "https://commons.wikimedia.org/wiki/User:Melvil", "2017-11",
  "佐田岬灯台", "Sadamisaki Lighthouse"
);

const TABELOG_38015495 = "https://tabelog.com/ehime/A3803/A380302/38015495/";
const TABELOG_38013540 = "https://tabelog.com/ehime/A3803/A380302/38013540/";
const TABELOG_38015206 = "https://tabelog.com/ehime/A3803/A380302/38015206/";
const TABELOG_38015350 = "https://tabelog.com/ehime/A3803/A380302/38015350/";
const TABELOG_38004934 = "https://tabelog.com/ehime/A3803/A380302/38004934/";
const TABELOG_38012187 = "https://tabelog.com/ehime/A3803/A380302/38012187/";
const TABELOG_38004936 = "https://tabelog.com/ehime/A3803/A380302/38004936/";
const TABELOG_38010936 = "https://tabelog.com/ehime/A3803/A380302/38010936/";
const TABELOG_38013412 = "https://tabelog.com/ehime/A3803/A380302/38013412/";
const TABELOG_38005251 = "https://tabelog.com/ehime/A3803/A380302/38005251/";
const TABELOG_38017081 = "https://tabelog.com/ehime/A3803/A380302/38017081/";
const TABELOG_38000829 = "https://tabelog.com/ehime/A3803/A380302/38000829/";
const TABELOG_38006074 = "https://tabelog.com/ehime/A3803/A380302/38006074/";
const TABELOG_38005248 = "https://tabelog.com/ehime/A3803/A380302/38005248/";
const TABELOG_38014320 = "https://tabelog.com/ehime/A3803/A380302/38014320/";
const TABELOG_38015351 = "https://tabelog.com/ehime/A3803/A380302/38015351/";

export const IKATA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "佐田岬灯台": wikiPhoto(
  "ikata-sadamisaki-lighthouse.jpg",
  "https://commons.wikimedia.org/wiki/File:Sadamisaki_Lighthouse-light_on.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/",
  "melvil", "https://commons.wikimedia.org/wiki/User:Melvil", "2017-11",
  "佐田岬灯台", "Sadamisaki Lighthouse"
),
  "佐田岬": wikiPhoto(
  "ikata-cape-sada.jpg",
  "https://commons.wikimedia.org/wiki/File:%E4%BD%90%E7%94%B0%E5%B2%AC.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0/",
  "まるちゃん", "https://commons.wikimedia.org/wiki/User:%E3%81%BE%E3%82%8B%E3%81%A1%E3%82%83%E3%82%93", "2009.8.",
  "佐田岬", "Cape Sada"
),
  "道の駅 伊方きらら館": wikiPhoto(
  "ikata-kirara.jpg",
  "https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E4%BC%8A%E6%96%B9%E3%81%8D%E3%82%89%E3%82%89%E9%A4%A8.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "キアラア", "https://commons.wikimedia.org/wiki/User:%E3%82%AD%E3%82%A2%E3%83%A9%E3%82%A2", "2026-07",
  "道の駅 伊方きらら館", "Roadside Station Ikata Kirarakan"
),
  "道の駅 佐田岬半島ミュージアム": wikiPhoto(
  "ikata-museum.jpg",
  "https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E4%BD%90%E7%94%B0%E5%B2%AC%E5%8D%8A%E5%B3%B6%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%A0.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "キアラア", "https://commons.wikimedia.org/wiki/User:%E3%82%AD%E3%82%A2%E3%83%A9%E3%82%A2", "2026-07",
  "道の駅 佐田岬半島ミュージアム", "Roadside Station Sadamisaki Hanto Museum"
),
  "三崎八幡神社": wikiPhoto(
  "ikata-misaki-hachiman.jpg",
  "https://commons.wikimedia.org/wiki/File:Misaki_Hachiman_Temple.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/",
  "Amake", "https://commons.wikimedia.org/wiki/User:Amake", "2007-01",
  "三崎八幡神社", "Misaki Hachiman Shrine"
),
  "佐田岬第4砲台跡": wikiPhoto(
  "ikata-battery.jpg",
  "https://commons.wikimedia.org/wiki/File:Sadamisaki-no4-Battery.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/",
  "melvil", "https://commons.wikimedia.org/wiki/User:Melvil", "2017-11",
  "佐田岬第4砲台跡", "Sadamisaki No.4 Battery remains"
),
  "Dining海": sourcePhoto("ikata-38015495-dish.jpg", "Dining海の料理写真", "Dining海 food photo", TABELOG_38015495, '食べログ'),
  "カフェ 木と樹": sourcePhoto("ikata-38013540-dish.jpg", "カフェ 木と樹の料理写真", "カフェ 木と樹 food photo", TABELOG_38013540, '食べログ'),
  "ジェラテリア だんだん": sourcePhoto("ikata-38015206-dish.jpg", "ジェラテリア だんだんの料理写真", "ジェラテリア だんだん food photo", TABELOG_38015206, '食べログ'),
  "居酒屋 縁": sourcePhoto("ikata-38015350-dish.jpg", "居酒屋 縁の料理写真", "居酒屋 縁 food photo", TABELOG_38015350, '食べログ'),
  "清海": sourcePhoto("ikata-38004934-dish.jpg", "清海の料理写真", "清海 food photo", TABELOG_38004934, '食べログ'),
  "清海じゃこてん部": sourcePhoto("ikata-38012187-dish.jpg", "清海じゃこてん部の料理写真", "清海じゃこてん部 food photo", TABELOG_38012187, '食べログ'),
  "マルマ食堂": sourcePhoto("ikata-38004936-dish.jpg", "マルマ食堂の料理写真", "マルマ食堂 food photo", TABELOG_38004936, '食べログ'),
  "佐田岬はなはな": sourcePhoto("ikata-38010936-dish.jpg", "佐田岬はなはなの料理写真", "佐田岬はなはな food photo", TABELOG_38010936, '食べログ'),
  "しらす食堂": sourcePhoto("ikata-38013412-dish.jpg", "しらす食堂の料理写真", "しらす食堂 food photo", TABELOG_38013412, '食べログ'),
  "お食事処　宇和海": sourcePhoto("ikata-38005251-dish.jpg", "お食事処　宇和海の料理写真", "お食事処　宇和海 food photo", TABELOG_38005251, '食べログ'),
  "CAFE&RESTAURANT NEW PORT": sourcePhoto("ikata-38017081-dish.jpg", "CAFE&RESTAURANT NEW PORTの料理写真", "CAFE&RESTAURANT NEW PORT food photo", TABELOG_38017081, '食べログ'),
  "まりーな亭": sourcePhoto("ikata-38000829-dish.jpg", "まりーな亭の料理写真", "まりーな亭 food photo", TABELOG_38000829, '食べログ'),
  "伊方じゃこてん": sourcePhoto("ikata-38006074-dish.jpg", "伊方じゃこてんの料理写真", "伊方じゃこてん food photo", TABELOG_38006074, '食べログ'),
  "風車": sourcePhoto("ikata-38005248-dish.jpg", "風車の料理写真", "風車 food photo", TABELOG_38005248, '食べログ'),
  "アトリエ・カフェ Pi-Pi": sourcePhoto("ikata-38014320-dish.jpg", "アトリエ・カフェ Pi-Piの料理写真", "アトリエ・カフェ Pi-Pi food photo", TABELOG_38014320, '食べログ'),
  "お料理 ひろせ": sourcePhoto("ikata-38015351-dish.jpg", "お料理 ひろせの料理写真", "お料理 ひろせ food photo", TABELOG_38015351, '食べログ'),
  "亀ヶ池温泉　亀乃湯別邸": sourcePhoto(
    "ikata-stay-h191618.jpg",
    "亀ヶ池温泉　亀乃湯別邸の客室写真",
    "亀ヶ池温泉　亀乃湯別邸 room photo",
    "https://travel.rakuten.co.jp/HOTEL/191618/191618.html",
    '楽天トラベル'
  ),
  "えびすや旅館": sourcePhoto(
    "ikata-stay-h15465.jpg",
    "えびすや旅館の客室写真",
    "えびすや旅館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/15465/15465.html",
    '楽天トラベル'
  ),
  "民宿　大岩": sourcePhoto(
    "ikata-stay-h31183.jpg",
    "民宿　大岩の客室写真",
    "民宿　大岩 room photo",
    "https://travel.rakuten.co.jp/HOTEL/31183/31183.html",
    '楽天トラベル'
  ),
  "ＨＡＮＡＲＥ　ｓｔａｙ＆ｓｐａｃｅ": sourcePhoto(
    "ikata-stay-h192800.jpg",
    "ＨＡＮＡＲＥ　ｓｔａｙ＆ｓｐａｃｅの客室写真",
    "ＨＡＮＡＲＥ　ｓｔａｙ＆ｓｐａｃｅ room photo",
    "https://travel.rakuten.co.jp/HOTEL/192800/192800.html",
    '楽天トラベル'
  ),
  "民宿みちもと": sourcePhoto(
    "ikata-stay-h142943.jpg",
    "民宿みちもとの客室写真",
    "民宿みちもと room photo",
    "https://travel.rakuten.co.jp/HOTEL/142943/142943.html",
    '楽天トラベル'
  ),
  "亀ヶ池温泉　亀乃湯別邸 風呂": sourcePhoto(
    "ikata-onsen-h191618.jpg",
    "亀ヶ池温泉　亀乃湯別邸 風呂の写真",
    "亀ヶ池温泉　亀乃湯別邸 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/191618/gallery.html",
    '楽天トラベル'
  ),
  "えびすや旅館 風呂": sourcePhoto(
    "ikata-onsen-h15465.jpg",
    "えびすや旅館 風呂の写真",
    "えびすや旅館 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/15465/gallery.html",
    '楽天トラベル'
  ),
  "民宿　大岩 風呂": sourcePhoto(
    "ikata-onsen-h31183.jpg",
    "民宿　大岩 風呂の写真",
    "民宿　大岩 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/31183/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: IKATA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: IKATA.sources.accessed};
}

export const IKATA_FACILITIES: readonly FacilityRow[] = [
  sight("ikata-sight-01", "佐田岬灯台", "愛媛県西宇和郡伊方町正野", "0894-38-0211", "https://ja.wikipedia.org/wiki/%E4%BD%90%E7%94%B0%E5%B2%AC%E7%81%AF%E5%8F%B0", 33.34305556, 132.01491667),
  sight("ikata-sight-02", "佐田岬", "愛媛県西宇和郡伊方町正野", null, "https://ja.wikipedia.org/wiki/%E4%BD%90%E7%94%B0%E5%B2%AC", 33.344, 132.012972),
  sight("ikata-sight-03", "道の駅 伊方きらら館", "愛媛県西宇和郡伊方町九町3番耕地179番地1", "0894-39-0230", "https://www.town.ikata.ehime.jp/map/10133.html", 33.480916666667, 132.30766666667),
  sight("ikata-sight-04", "道の駅 佐田岬半島ミュージアム", "愛媛県西宇和郡伊方町塩成乙293", "0894-21-3400", "https://www.wikidata.org/wiki/Q11641394", 33.447444444444, 132.25811111111),
  sight("ikata-sight-05", "三崎八幡神社", "愛媛県西宇和郡伊方町三崎", null, "https://commons.wikimedia.org/wiki/File:Misaki_Hachiman_Temple.jpg", null, null),
  sight("ikata-sight-06", "佐田岬第4砲台跡", "愛媛県西宇和郡伊方町正野", null, "https://www.wikidata.org/wiki/Q28683773", null, null),
  sight("ikata-onsen-01", "亀ヶ池温泉　亀乃湯別邸 風呂", "愛媛県西宇和郡伊方町二見甲1289", "0894-39-1160", "https://travel.rakuten.co.jp/HOTEL/191618/gallery.html", null, null),
  sight("ikata-onsen-02", "えびすや旅館 風呂", "愛媛県西宇和郡伊方町三崎1514-1", "0894-54-0013", "https://travel.rakuten.co.jp/HOTEL/15465/gallery.html", null, null),
  sight("ikata-onsen-03", "民宿　大岩 風呂", "愛媛県西宇和郡伊方町正野26", "0894-56-0070", "https://travel.rakuten.co.jp/HOTEL/31183/gallery.html", null, null),
];
