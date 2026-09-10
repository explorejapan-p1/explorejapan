/**
 * Kaita / 海田町 (Hiroshima, Aki District) sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-10). JIS 34304. Sixteenth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市・江田島市・府中町.
 * Address gate: 広島県安芸郡海田町 / 広島県海田町 only.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay×2/onsen×1. Experience/shop/commerce: honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KAITA = {
  nameJa: '海田町',
  nameEn: 'Kaita',
  reading: 'かいたちょう',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'kaita',
  jis: '34304',
  jlis: '343041',
  sameAs: 'https://www.town.kaita.lg.jp/',
  hall: {
    postalCode: '736-8601',
    addressJa: '広島県安芸郡海田町南昭和町14番17号',
    addressEn: '14-17 Minami-Showacho, Kaita Town, Aki District, Hiroshima 736-8601, Japan',
    phone: '082-822-2121'
  },
  sources: {
    home: 'https://www.town.kaita.lg.jp/',
    hall: 'https://www.town.kaita.lg.jp/',
    kanko: 'https://www.town.kaita.lg.jp/site/kaita-info/693.html',
    tabelogCity: 'https://tabelog.com/hiroshima/C34304/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const KAITA_EXPECTED_ROW_COUNT = 6;
export const KAITA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: Kaita Town Office. Hero title remains municipality name only. Unique (no wakimachi). */
export const KAITA_PLACE_PHOTO = wikiPhoto(
  "kaita-cover-townhall.jpg",
  "https://commons.wikimedia.org/wiki/File%3AKaita_Town_Office.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Taisyo", "https://commons.wikimedia.org/wiki/File%3AKaita_Town_Office.jpg", "2011",
  "海田町役場", "Kaita Town Office"
);

export const KAITA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "Kittan": sourcePhoto("kaita-34031669-dish.jpg", "Kittanの料理写真", "Kittan food photo", "https://tabelog.com/hiroshima/A3401/A340404/34031669/", '食べログ'),
  "やきとり三国志": sourcePhoto("kaita-34004181-dish.jpg", "やきとり三国志の料理写真", "やきとり三国志 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34004181/", '食べログ'),
  "居酒屋竹の子": sourcePhoto("kaita-34009191-dish.jpg", "居酒屋竹の子の料理写真", "居酒屋竹の子 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34009191/", '食べログ'),
  "コンディトライ モーツアルト 海田店": sourcePhoto("kaita-34010977-dish.jpg", "コンディトライ モーツアルト 海田店の料理写真", "コンディトライ モーツアルト 海田店 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34010977/", '食べログ'),
  "ゆたか食堂": sourcePhoto("kaita-34029875-dish.jpg", "ゆたか食堂の料理写真", "ゆたか食堂 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34029875/", '食べログ'),
  "焼肉 てっちゃん 海田店": sourcePhoto("kaita-34029723-dish.jpg", "焼肉 てっちゃん 海田店の料理写真", "焼肉 てっちゃん 海田店 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34029723/", '食べログ'),
  "讃岐屋 海田店": sourcePhoto("kaita-34005564-dish.jpg", "讃岐屋 海田店の料理写真", "讃岐屋 海田店 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34005564/", '食べログ'),
  "ユア カフェ": sourcePhoto("kaita-34023877-dish.jpg", "ユア カフェの料理写真", "ユア カフェ food photo", "https://tabelog.com/hiroshima/A3401/A340404/34023877/", '食べログ'),
  "お好み焼 鉄板焼 徳川 海田店": sourcePhoto("kaita-34007122-dish.jpg", "お好み焼 鉄板焼 徳川 海田店の料理写真", "お好み焼 鉄板焼 徳川 海田店 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34007122/", '食べログ'),
  "肉豆冨とレモンサワー 大衆食堂 安べゑ 海田市駅南口店": sourcePhoto("kaita-34027937-dish.jpg", "肉豆冨とレモンサワー 大衆食堂 安べゑ 海田市駅南口店の料理写真", "肉豆冨とレモンサワー 大衆食堂 安べゑ 海田市駅南口店 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34027937/", '食べログ'),
  "LOUPE COFFEE STAND 海田店": sourcePhoto("kaita-34034936-dish.jpg", "LOUPE COFFEE STAND 海田店の料理写真", "LOUPE COFFEE STAND 海田店 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34034936/", '食べログ'),
  "味の館": sourcePhoto("kaita-34002154-dish.jpg", "味の館の料理写真", "味の館 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34002154/", '食べログ'),
  "牛角 海田店": sourcePhoto("kaita-34010510-dish.jpg", "牛角 海田店の料理写真", "牛角 海田店 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34010510/", '食べログ'),
  "八剣伝 海田南本町店": sourcePhoto("kaita-34009241-dish.jpg", "八剣伝 海田南本町店の料理写真", "八剣伝 海田南本町店 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34009241/", '食べログ'),
  "魚民のすし 海田市北口駅前店": sourcePhoto("kaita-34034391-dish.jpg", "魚民のすし 海田市北口駅前店の料理写真", "魚民のすし 海田市北口駅前店 food photo", "https://tabelog.com/hiroshima/A3401/A340404/34034391/", '食べログ'),
  "うつわ": sourcePhoto("kaita-34013191-dish.jpg", "うつわの料理写真", "うつわ food photo", "https://tabelog.com/hiroshima/A3401/A340404/34013191/", '食べログ'),
  "ホテルアストンプラザ広島２号館（２０２６年５月１日新築オープン）": sourcePhoto("kaita-stay-h199100.jpg", "ホテルアストンプラザ広島２号館（２０２６年５月１日新築オープン）の客室写真", "ホテルアストンプラザ広島２号館（２０２６年５月１日新築オープン） room photo", "https://travel.rakuten.co.jp/HOTEL/199100/199100.html", '楽天トラベル'),
  "海田中央ホテル": sourcePhoto("kaita-stay-h145333.jpg", "海田中央ホテルの客室写真", "海田中央ホテル room photo", "https://travel.rakuten.co.jp/HOTEL/145333/145333.html", '楽天トラベル'),
  "ホテルアストンプラザ広島２号館 大浴場": sourcePhoto("kaita-onsen-h199100.jpg", "ホテルアストンプラザ広島２号館 大浴場の写真", "ホテルアストンプラザ広島２号館 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/199100/gallery.html", '楽天トラベル'),
  "旧千葉家住宅": sourcePhoto("kaita-chiba.jpg", "旧千葉家住宅", "旧千葉家住宅", "https://dive-hiroshima.com/course/kaitaichi-sta/", 'Dive! Hiroshima'),
  "熊野神社": sourcePhoto("kaita-kumano-jinja.jpg", "熊野神社", "熊野神社", "https://dive-hiroshima.com/course/kaitaichi-sta/", 'Dive! Hiroshima'),
  "大師寺": sourcePhoto("kaita-daishi.jpg", "大師寺", "大師寺", "https://dive-hiroshima.com/course/kaitaichi-sta/", 'Dive! Hiroshima'),
  "織田幹雄記念館": sourcePhoto("kaita-oda-kinenkan.jpg", "織田幹雄記念館", "織田幹雄記念館", "https://dive-hiroshima.com/course/kaitaichi-sta/", 'Dive! Hiroshima'),
  "海田観音免のクスノキ": wikiPhoto(
  "kaita-kusunoki.jpg",
  "https://commons.wikimedia.org/wiki/File%3AKaita_Kannonmen-no-Kusunoki.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0",
  "Saigen Jiro", "https://commons.wikimedia.org/wiki/File%3AKaita_Kannonmen-no-Kusunoki.jpg", "2015",
  "海田観音免のクスノキ", "Kaita Kannonmen camphor tree"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: KAITA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・Commons・Dive! Hiroshima掲載情報', accessed: KAITA.sources.accessed};
}

export const KAITA_FACILITIES: readonly FacilityRow[] = [
  sight("kaita-sight-01", "旧千葉家住宅", "広島県安芸郡海田町中店8-31", "082-822-7373", "https://dive-hiroshima.com/course/kaitaichi-sta/", 34.3733642, 132.5339129),
  sight("kaita-sight-02", "熊野神社", "広島県安芸郡海田町上市4-1", null, "https://dive-hiroshima.com/course/kaitaichi-sta/", 34.373305219427166, 132.5361558112646),
  sight("kaita-sight-03", "大師寺", "広島県安芸郡海田町稲荷町2-1", null, "https://dive-hiroshima.com/course/kaitaichi-sta/", 34.37457, 132.533526),
  sight("kaita-sight-04", "織田幹雄記念館", "広島県安芸郡海田町中店8番24号 織田幹雄スクエア2階", "082-822-7373", "https://dive-hiroshima.com/course/kaitaichi-sta/", 34.3728128, 132.533765),
  sight("kaita-sight-05", "海田観音免のクスノキ", "広島県安芸郡海田町畝二丁目10番20号", null, "https://www.town.kaita.lg.jp/soshiki/31/", 34.3797288, 132.5498245),
  sight("kaita-onsen-01", "ホテルアストンプラザ広島２号館 大浴場", "広島県安芸郡海田町南大正町1-12", "082-881-0003", "https://travel.rakuten.co.jp/HOTEL/199100/gallery.html", null, null),
];
