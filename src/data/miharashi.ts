/**
 * Mihara City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34204. Fourth Hiroshima hub after 広島市・呉市・竹原市.
 * Slug miharashi avoids ReadySlug collision with Kochi 三原村 (mihara).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MIHARASHI = {
  nameJa: '三原市',
  nameEn: 'Mihara',
  reading: 'みはらし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'miharashi',
  jis: '34204',
  jlis: '342041',
  sameAs: 'https://www.city.mihara.hiroshima.jp/',
  hall: {
    postalCode: '723-8601',
    addressJa: '広島県三原市港町三丁目5番1号',
    addressEn: '3-5-1 Minato-machi, Mihara City, Hiroshima 723-8601, Japan',
    phone: '0848-64-2111'
  },
  sources: {
    home: 'https://www.city.mihara.hiroshima.jp/',
    hall: 'https://www.city.mihara.hiroshima.jp/map/honcho.html',
    tabelogCity: 'https://tabelog.com/hiroshima/C34204/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const MIHARASHI_EXPECTED_ROW_COUNT = 9;
export const MIHARASHI_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 三原城跡. Hero title remains municipality name only. */
export const MIHARASHI_PLACE_PHOTO = wikiPhoto(
  "miharashi-cover-castle.jpg",
  "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E5%8E%9F%E5%9F%8E.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Carpkazu at Japanese Wikipedia", "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E5%8E%9F%E5%9F%8E.jpg", "2009",
  "三原城跡", "Mihara Castle ruins"
);

export const MIHARASHI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {

  "や台ずし 三原駅前町": sourcePhoto("miharashi-34019937-dish.jpg", "や台ずし 三原駅前町の料理写真", "や台ずし 三原駅前町 food photo", "https://tabelog.com/hiroshima/A3404/A340303/34019937/", '食べログ'),
  "ビストロ ソウボウ": sourcePhoto("miharashi-34007192-dish.jpg", "ビストロ ソウボウの料理写真", "ビストロ ソウボウ food photo", "https://tabelog.com/hiroshima/A3404/A340303/34007192/", '食べログ'),
  "お好み焼き 徳川 三原店": sourcePhoto("miharashi-34006785-dish.jpg", "お好み焼き 徳川 三原店の料理写真", "お好み焼き 徳川 三原店 food photo", "https://tabelog.com/hiroshima/A3404/A340303/34006785/", '食べログ'),
  "くいもの屋わん 三原駅前店": sourcePhoto("miharashi-34024661-dish.jpg", "くいもの屋わん 三原駅前店の料理写真", "くいもの屋わん 三原駅前店 food photo", "https://tabelog.com/hiroshima/A3404/A340303/34024661/", '食べログ'),
  "ACERO": sourcePhoto("miharashi-34010877-dish.jpg", "ACEROの料理写真", "ACERO food photo", "https://tabelog.com/hiroshima/A3404/A340303/34010877/", '食べログ'),
  "げんなおし": sourcePhoto("miharashi-34026979-dish.jpg", "げんなおしの料理写真", "げんなおし food photo", "https://tabelog.com/hiroshima/A3404/A340303/34026979/", '食べログ'),
  "楽食楽呑 つぎ穂": sourcePhoto("miharashi-34031931-dish.jpg", "楽食楽呑 つぎ穂の料理写真", "楽食楽呑 つぎ穂 food photo", "https://tabelog.com/hiroshima/A3404/A340303/34031931/", '食べログ'),
  "ぐらんどーる": sourcePhoto("miharashi-34031306-dish.jpg", "ぐらんどーるの料理写真", "ぐらんどーる food photo", "https://tabelog.com/hiroshima/A3404/A340303/34031306/", '食べログ'),
  "焼肉酒場にく。": sourcePhoto("miharashi-34029412-dish.jpg", "焼肉酒場にく。の料理写真", "焼肉酒場にく。 food photo", "https://tabelog.com/hiroshima/A3404/A340303/34029412/", '食べログ'),
  "浜べゑ 三原駅前店": sourcePhoto("miharashi-34029400-dish.jpg", "浜べゑ 三原駅前店の料理写真", "浜べゑ 三原駅前店 food photo", "https://tabelog.com/hiroshima/A3404/A340303/34029400/", '食べログ'),
  "溶岩焼なごみ": sourcePhoto("miharashi-34030367-dish.jpg", "溶岩焼なごみの料理写真", "溶岩焼なごみ food photo", "https://tabelog.com/hiroshima/A3404/A340303/34030367/", '食べログ'),
  "ZONA FORTUNATO": sourcePhoto("miharashi-34001062-dish.jpg", "ZONA FORTUNATOの料理写真", "ZONA FORTUNATO food photo", "https://tabelog.com/hiroshima/A3404/A340303/34001062/", '食べログ'),
  "no.503": sourcePhoto("miharashi-34033374-dish.jpg", "no.503の料理写真", "no.503 food photo", "https://tabelog.com/hiroshima/A3404/A340303/34033374/", '食べログ'),
  "RESTAURANT YOGANSU": sourcePhoto("miharashi-34017820-dish.jpg", "RESTAURANT YOGANSUの料理写真", "RESTAURANT YOGANSU food photo", "https://tabelog.com/hiroshima/A3404/A340303/34017820/", '食べログ'),
  "おか田": sourcePhoto("miharashi-34031779-dish.jpg", "おか田の料理写真", "おか田 food photo", "https://tabelog.com/hiroshima/A3404/A340303/34031779/", '食べログ'),
  "ヤッサ饅頭本舗": sourcePhoto("miharashi-34007130-dish.jpg", "ヤッサ饅頭本舗の料理写真", "ヤッサ饅頭本舗 food photo", "https://tabelog.com/hiroshima/A3404/A340303/34007130/", '食べログ'),
  "ホテルルートイン三原駅前": sourcePhoto("miharashi-stay-h180590.jpg", "ホテルルートイン三原駅前の客室写真", "ホテルルートイン三原駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/180590/180590.html", '楽天トラベル'),
  "リブマックスリゾート三原温泉シーフロント": sourcePhoto("miharashi-stay-h199408.jpg", "リブマックスリゾート三原温泉シーフロントの客室写真", "リブマックスリゾート三原温泉シーフロント room photo", "https://travel.rakuten.co.jp/HOTEL/199408/199408.html", '楽天トラベル'),
  "広島エアポートホテル": sourcePhoto("miharashi-stay-h1446.jpg", "広島エアポートホテルの客室写真", "広島エアポートホテル room photo", "https://travel.rakuten.co.jp/HOTEL/1446/1446.html", '楽天トラベル'),
  "天然温泉「浮城の湯」スーパーホテル三原駅前": sourcePhoto("miharashi-stay-h158646.jpg", "天然温泉「浮城の湯」スーパーホテル三原駅前の客室写真", "天然温泉「浮城の湯」スーパーホテル三原駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/158646/158646.html", '楽天トラベル'),
  "ホテル　白竜湖リゾート": sourcePhoto("miharashi-stay-h149038.jpg", "ホテル　白竜湖リゾートの客室写真", "ホテル　白竜湖リゾート room photo", "https://travel.rakuten.co.jp/HOTEL/149038/149038.html", '楽天トラベル'),
  "ＨＯＴＥＬ　ＡＺ　広島三原店": sourcePhoto("miharashi-stay-h181390.jpg", "ＨＯＴＥＬ　ＡＺ　広島三原店の客室写真", "ＨＯＴＥＬ　ＡＺ　広島三原店 room photo", "https://travel.rakuten.co.jp/HOTEL/181390/181390.html", '楽天トラベル'),
  "三原ステーションホテル": sourcePhoto("miharashi-stay-h11313.jpg", "三原ステーションホテルの客室写真", "三原ステーションホテル room photo", "https://travel.rakuten.co.jp/HOTEL/11313/11313.html", '楽天トラベル'),
  "三原シティホテル": sourcePhoto("miharashi-stay-h830.jpg", "三原シティホテルの客室写真", "三原シティホテル room photo", "https://travel.rakuten.co.jp/HOTEL/830/830.html", '楽天トラベル'),
  "三原国際ホテル": sourcePhoto("miharashi-stay-h7286.jpg", "三原国際ホテルの客室写真", "三原国際ホテル room photo", "https://travel.rakuten.co.jp/HOTEL/7286/7286.html", '楽天トラベル'),
  "ホテルルートイン三原駅前 大浴場": sourcePhoto("miharashi-onsen-h180590.jpg", "ホテルルートイン三原駅前 大浴場の写真", "ホテルルートイン三原駅前 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/180590/gallery.html", '楽天トラベル'),
  "リブマックスリゾート三原温泉シーフロント 大浴場": sourcePhoto("miharashi-onsen-h199408.jpg", "リブマックスリゾート三原温泉シーフロント 大浴場の写真", "リブマックスリゾート三原温泉シーフロント 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/199408/gallery.html", '楽天トラベル'),
  "天然温泉「浮城の湯」スーパーホテル三原駅前 大浴場": sourcePhoto("miharashi-onsen-h158646.jpg", "天然温泉「浮城の湯」スーパーホテル三原駅前 大浴場の写真", "天然温泉「浮城の湯」スーパーホテル三原駅前 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/158646/gallery.html", '楽天トラベル'),
  "ホテル　白竜湖リゾート 大浴場": sourcePhoto("miharashi-onsen-h149038.jpg", "ホテル　白竜湖リゾート 大浴場の写真", "ホテル　白竜湖リゾート 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/149038/gallery.html", '楽天トラベル'),
  "三原城跡": wikiPhoto(
  "miharashi-castle.jpg",
  "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E5%8E%9F%E5%9F%8E.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Carpkazu at Japanese Wikipedia", "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E5%8E%9F%E5%9F%8E.jpg", "2009",
  "三原城跡", "Mihara Castle ruins"
),
  "仏通寺": wikiPhoto(
  "miharashi-buttsuji.jpg",
  "https://commons.wikimedia.org/wiki/File:Butsuji_Butsuden.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Carpkazu", "https://commons.wikimedia.org/wiki/File:Butsuji_Butsuden.jpg", "2009",
  "仏通寺", "Buttsu-ji"
),
  "久井岩海": wikiPhoto(
  "miharashi-kui-gankai.jpg",
  "https://commons.wikimedia.org/wiki/File:Kui_gankai.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "As6022014", "https://commons.wikimedia.org/wiki/File:Kui_gankai.jpg", "2011",
  "久井岩海", "Kui gankai"
),
  "三原内港": wikiPhoto(
  "miharashi-naiwan.jpg",
  "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E5%8E%9F%E5%86%85%E6%B8%AF.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E5%8E%9F%E5%86%85%E6%B8%AF.jpg", "2010",
  "三原内港", "Mihara Inner Port"
),
  "須波港": wikiPhoto(
  "miharashi-sunami-port.jpg",
  "https://commons.wikimedia.org/wiki/File:%E9%A0%88%E6%B3%A2%E6%B8%AF.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File:%E9%A0%88%E6%B3%A2%E6%B8%AF.jpg", "2010",
  "須波港", "Sunami Port"
),
};


function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: MIHARASHI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: MIHARASHI.sources.accessed};
}

export const MIHARASHI_FACILITIES: readonly FacilityRow[] = [
  sight("miharashi-sight-01", "三原城跡", "広島県三原市城町1丁目", null, "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E5%8E%9F%E5%9F%8E.jpg", 34.4012863, 133.0826471),
  sight("miharashi-sight-02", "仏通寺", "広島県三原市高坂町許山22", null, "https://commons.wikimedia.org/wiki/File:Butsuji_Butsuden.jpg", 34.4558584, 133.0265200),
  sight("miharashi-sight-03", "久井岩海", "広島県三原市久井町泉", null, "https://commons.wikimedia.org/wiki/File:Kui_gankai.jpg", 34.5380405, 133.0790023),
  sight("miharashi-sight-04", "三原内港", "広島県三原市港町1丁目", null, "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E5%8E%9F%E5%86%85%E6%B8%AF.jpg", 34.3980683, 133.0822316),
  sight("miharashi-sight-05", "須波港", "広島県三原市須波町", null, "https://commons.wikimedia.org/wiki/File:%E9%A0%88%E6%B3%A2%E6%B8%AF.jpg", 34.3597842, 133.0840287),

  sight("miharashi-onsen-01", "ホテルルートイン三原駅前 大浴場", "広島県三原市城町1-3-3", "0848-81-0082", "https://travel.rakuten.co.jp/HOTEL/180590/gallery.html", null, null),
  sight("miharashi-onsen-02", "リブマックスリゾート三原温泉シーフロント 大浴場", "広島県三原市須波ハイツ1-1-15", "0848-69-2200", "https://travel.rakuten.co.jp/HOTEL/199408/gallery.html", null, null),
  sight("miharashi-onsen-03", "天然温泉「浮城の湯」スーパーホテル三原駅前 大浴場", "広島県三原市城町1-12-10", null, "https://travel.rakuten.co.jp/HOTEL/158646/gallery.html", null, null),
  sight("miharashi-onsen-04", "ホテル　白竜湖リゾート 大浴場", "広島県三原市大和町箱川4007-7", "0847-34-0006", "https://travel.rakuten.co.jp/HOTEL/149038/gallery.html", null, null),
];
