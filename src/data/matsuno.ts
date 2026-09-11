/**
 * Matsuno Town sourced facts. Do not invent population.
 * Hall / JIS from town HP + ehime-municipalities (accessed 2026-09-10). JIS 38484. Eighteenth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市・東温市・上島町・久万高原町・松前町・砥部町・内子町・伊方町.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / town).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MATSUNO = {
  nameJa: '松野町',
  nameEn: 'Matsuno',
  reading: 'まつのちょう',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'matsuno',
  jis: '38484',
  jlis: '384844',
  sameAs: 'https://www.town.matsuno.ehime.jp/',
  hall: {
    postalCode: '798-2192',
    addressJa: '愛媛県北宇和郡松野町大字松丸343番地',
    addressEn: '343 Oaza Matsumaru, Matsuno Town, Kitauwa District, Ehime 798-2192, Japan',
    phone: '0895-42-1111'
  },
  sources: {
    home: 'https://www.town.matsuno.ehime.jp/',
    hall: 'https://www.town.matsuno.ehime.jp/soshiki/1.html',
    kanko: 'https://matsuno-kankou.com/',
    nametoko: 'https://ja.wikipedia.org/wiki/%E6%BB%91%E5%BA%8A%E6%B8%93%E8%B0%B7',
    yukiwa: 'https://ja.wikipedia.org/wiki/%E9%9B%AA%E8%BC%AA%E3%81%AE%E6%BB%9D',
    nijinomori: 'https://www.wikidata.org/wiki/Q11641492',
    lodge: 'https://morino-kuni.com/riverside-lodge/',
    tabelogCity: 'https://tabelog.com/ehime/C38484/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const MATSUNO_EXPECTED_ROW_COUNT = 7;
export const MATSUNO_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: 雪輪の滝. Hero title remains municipality name only. */

export const MATSUNO_PLACE_PHOTO = wikiPhoto(
  "matsuno-yukiwa-taki.jpg",
  "https://commons.wikimedia.org/wiki/File:Yukiwa_no_Taki_01.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/",
  "Reggaeman", "https://commons.wikimedia.org/wiki/User:Reggaeman", "2009-07",
  "雪輪の滝", "Yukiwa Falls"
);

const TABELOG_38005525 = "https://tabelog.com/ehime/A3804/A380403/38005525/";
const TABELOG_38006467 = "https://tabelog.com/ehime/A3804/A380403/38006467/";
const TABELOG_38008615 = "https://tabelog.com/ehime/A3804/A380403/38008615/";
const TABELOG_38013361 = "https://tabelog.com/ehime/A3804/A380403/38013361/";
const TABELOG_38013521 = "https://tabelog.com/ehime/A3804/A380403/38013521/";
const TABELOG_38015040 = "https://tabelog.com/ehime/A3804/A380403/38015040/";
const TABELOG_38015190 = "https://tabelog.com/ehime/A3804/A380403/38015190/";
const TABELOG_38015241 = "https://tabelog.com/ehime/A3804/A380403/38015241/";
const TABELOG_38015708 = "https://tabelog.com/ehime/A3804/A380403/38015708/";
const TABELOG_38006193 = "https://tabelog.com/ehime/A3804/A380403/38006193/";
const TABELOG_38012182 = "https://tabelog.com/ehime/A3804/A380403/38012182/";
const TABELOG_38016924 = "https://tabelog.com/ehime/A3804/A380403/38016924/";
const TABELOG_38014287 = "https://tabelog.com/ehime/A3804/A380403/38014287/";
const TABELOG_38011266 = "https://tabelog.com/ehime/A3804/A380403/38011266/";
const TABELOG_38011265 = "https://tabelog.com/ehime/A3804/A380403/38011265/";
const TABELOG_38005798 = "https://tabelog.com/ehime/A3804/A380401/38005798/";

export const MATSUNO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "雪輪の滝": wikiPhoto(
  "matsuno-yukiwa-taki.jpg",
  "https://commons.wikimedia.org/wiki/File:Yukiwa_no_Taki_01.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/",
  "Reggaeman", "https://commons.wikimedia.org/wiki/User:Reggaeman", "2009-07",
  "雪輪の滝", "Yukiwa Falls"
),
  "滑床渓谷": wikiPhoto(
  "matsuno-nametoko.jpg",
  "https://commons.wikimedia.org/wiki/File:Nametoko_2.JPG",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0/",
  "Snap55", "https://commons.wikimedia.org/wiki/User:Snap55", "2007-05",
  "滑床渓谷", "Nametoko Gorge"
),
  "虹の森公園": wikiPhoto(
  "matsuno-nijinomori.jpg",
  "https://commons.wikimedia.org/wiki/File:Roadside_Station_Nijino_mori_park_Matsuno.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/",
  "As6022014", "https://commons.wikimedia.org/wiki/User:As6022014", "2011-05",
  "虹の森公園", "Nijino-mori Park"
),
  "虹の森おさかな館": wikiPhoto(
  "matsuno-osakanakan.jpg",
  "https://commons.wikimedia.org/wiki/File:Osakanakan_Matsuno.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/",
  "As6022014", "https://commons.wikimedia.org/wiki/User:As6022014", "2011-05",
  "虹の森おさかな館", "Nijino-mori Freshwater Aquarium"
),
  "松丸駅": wikiPhoto(
  "matsuno-matsumaru-station.jpg",
  "https://commons.wikimedia.org/wiki/File:Matsumaru_station_03.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "Navian", "https://commons.wikimedia.org/wiki/User:Navian", "2010-05",
  "松丸駅", "Matsumaru Station"
),
  "三筋の滝": wikiPhoto(
  "matsuno-misuji-taki.jpg",
  "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E7%AD%8B%E3%81%AE%E6%BB%9D%EF%BC%88%E6%BB%91%E5%BA%8A%E6%B8%93%E8%B0%B7%EF%BC%89.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/",
  "Koda6029", "https://commons.wikimedia.org/wiki/User:Koda6029", "2019-12",
  "三筋の滝", "Misuji Falls"
),
  "レストラン遊鶴羽": sourcePhoto("matsuno-38005525-dish.jpg", "レストラン遊鶴羽の料理写真", "レストラン遊鶴羽 food photo", TABELOG_38005525, '食べログ'),
  "CAFE&PUB TOMMY": sourcePhoto("matsuno-38006467-dish.jpg", "CAFE&PUB TOMMYの料理写真", "CAFE&PUB TOMMY food photo", TABELOG_38006467, '食べログ'),
  "虹の森おさかな館喫茶コーナー": sourcePhoto("matsuno-38008615-dish.jpg", "虹の森おさかな館喫茶コーナーの料理写真", "虹の森おさかな館喫茶コーナー food photo", TABELOG_38008615, '食べログ'),
  "セルバッジオ": sourcePhoto("matsuno-38013361-dish.jpg", "セルバッジオの料理写真", "セルバッジオ food photo", TABELOG_38013361, '食べログ'),
  "森とパン": sourcePhoto("matsuno-38013521-dish.jpg", "森とパンの料理写真", "森とパン food photo", TABELOG_38013521, '食べログ'),
  "パン工房 &パン": sourcePhoto("matsuno-38015040-dish.jpg", "パン工房 &パンの料理写真", "パン工房 &パン food photo", TABELOG_38015040, '食べログ'),
  "こむぎ屋": sourcePhoto("matsuno-38015190-dish.jpg", "こむぎ屋の料理写真", "こむぎ屋 food photo", TABELOG_38015190, '食べログ'),
  "笑食寝 たきぐち": sourcePhoto("matsuno-38015241-dish.jpg", "笑食寝 たきぐちの料理写真", "笑食寝 たきぐち food photo", TABELOG_38015241, '食べログ'),
  "甘味 霧中": sourcePhoto("matsuno-38015708-dish.jpg", "甘味 霧中の料理写真", "甘味 霧中 food photo", TABELOG_38015708, '食べログ'),
  "道の駅 虹の森公園まつの": sourcePhoto("matsuno-38006193-dish.jpg", "道の駅 虹の森公園まつのの料理写真", "道の駅 虹の森公園まつの food photo", TABELOG_38006193, '食べログ'),
  "濱匠": sourcePhoto("matsuno-38012182-dish.jpg", "濱匠の料理写真", "濱匠 food photo", TABELOG_38012182, '食べログ'),
  "カフェ ヒミツキッチン": sourcePhoto("matsuno-38016924-dish.jpg", "カフェ ヒミツキッチンの料理写真", "カフェ ヒミツキッチン food photo", TABELOG_38016924, '食べログ'),
  "水際のロッジ": sourcePhoto("matsuno-38014287-dish.jpg", "水際のロッジの料理写真", "水際のロッジ food photo", TABELOG_38014287, '食べログ'),
  "四季の粋": sourcePhoto("matsuno-38011266-dish.jpg", "四季の粋の料理写真", "四季の粋 food photo", TABELOG_38011266, '食べログ'),
  "森の国の宿あざみ野": sourcePhoto("matsuno-38011265-dish.jpg", "森の国の宿あざみ野の料理写真", "森の国の宿あざみ野 food photo", TABELOG_38011265, '食べログ'),
  "木もれび庵": sourcePhoto("matsuno-38005798-dish.jpg", "木もれび庵の料理写真", "木もれび庵 food photo", TABELOG_38005798, '食べログ'),
  "四万十川源流、森の国　水際のロッジ": sourcePhoto(
    "matsuno-stay-h178513.jpg",
    "四万十川源流、森の国　水際のロッジの客室写真",
    "四万十川源流、森の国　水際のロッジ room photo",
    "https://travel.rakuten.co.jp/HOTEL/178513/178513.html",
    '楽天トラベル'
  ),
  "四万十川源流、森の国　水際のロッジ 風呂": sourcePhoto(
    "matsuno-onsen-h178513.jpg",
    "四万十川源流、森の国　水際のロッジ 風呂の写真",
    "四万十川源流、森の国　水際のロッジ 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/178513/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: MATSUNO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: MATSUNO.sources.accessed};
}

export const MATSUNO_FACILITIES: readonly FacilityRow[] = [
  sight("matsuno-sight-01", "雪輪の滝", "愛媛県北宇和郡松野町目黒 滑床渓谷", "0895-49-1535", "https://ja.wikipedia.org/wiki/%E9%9B%AA%E8%BC%AA%E3%81%AE%E6%BB%9D", 33.200328, 132.647697),
  sight("matsuno-sight-02", "滑床渓谷", "愛媛県北宇和郡松野町目黒", "0895-42-1116", "https://ja.wikipedia.org/wiki/%E6%BB%91%E5%BA%8A%E6%B8%93%E8%B0%B7", null, null),
  sight("matsuno-sight-03", "虹の森公園", "愛媛県北宇和郡松野町大字延野々1510-1", "0895-20-5006", "https://www.wikidata.org/wiki/Q11641492", 33.229638888889, 132.70983333333),
  sight("matsuno-sight-04", "虹の森おさかな館", "愛媛県北宇和郡松野町大字延野々1510-1 虹の森公園内", "0895-20-5006", "https://www.wikidata.org/wiki/Q11419591", 33.229167, 132.710278),
  sight("matsuno-sight-05", "松丸駅", "愛媛県北宇和郡松野町大字松丸1661-13", null, "https://www.wikidata.org/wiki/Q4388383", 33.22830556, 132.70888889),
  sight("matsuno-sight-06", "三筋の滝", "愛媛県北宇和郡松野町目黒 滑床渓谷", "0895-49-1535", "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E7%AD%8B%E3%81%AE%E6%BB%9D%EF%BC%88%E6%BB%91%E5%BA%8A%E6%B8%93%E8%B0%B7%EF%BC%89.jpg", null, null),
  sight("matsuno-onsen-01", "四万十川源流、森の国　水際のロッジ 風呂", "愛媛県北宇和郡松野町目黒 滑床渓谷", "0895-43-0331", "https://travel.rakuten.co.jp/HOTEL/178513/gallery.html", null, null),
];
