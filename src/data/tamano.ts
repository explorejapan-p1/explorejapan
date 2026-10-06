/**
 * Tamano City sourced facts. Do not invent population.
 * Hall from city HP (accessed 2026-10-03). JIS 33204. Fourth Okayama hub (玉野市).
 * Photos: Okayama tourism WEB facility stills, plus each stay/onsen site's own room or bath still.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TAMANO = {
  nameJa: '玉野市',
  nameEn: 'Tamano',
  reading: 'たまのし',
  prefectureJa: '岡山県',
  prefectureEn: 'Okayama',
  prefectureSlug: 'okayama',
  slug: 'tamano',
  jis: '33204',
  jlis: '332040',
  sameAs: 'https://www.city.tamano.lg.jp/',
  hall: {
    postalCode: '706-8510',
    addressJa: '岡山県玉野市宇野1-27-1',
    addressEn: '1-27-1 Uno, Tamano City, Okayama 706-8510, Japan',
    phone: '0863-32-5588'
  },
  sources: {
    home: 'https://www.city.tamano.lg.jp/',
    hall: 'https://www.city.tamano.lg.jp/',
    kanko: 'https://www.okayama-kanko.jp/spot/index_1_2_7___0____.html',
    beach: 'https://www.okayama-kanko.jp/spot/detail_10622.html',
    accessed: '2026-10-03'
  }
} as const;

export const TAMANO_EXPECTED_ROW_COUNT = 31;
export const TAMANO_EXPECTED_GEO_COUNT = 31;

function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-10-03', altJa, altEn};
}

/** Cover: 渋川海水浴場. Hero title remains 玉野市 only. Not Okayama Castle, Kurashiki Bikan, or Tsuyama Castle. */
export const TAMANO_PLACE_PHOTO = sourcePhoto(
  "tamano-shibukawa-beach.jpg",
  "渋川海水浴場",
  "Shibukawa beach, Tamano",
  "https://www.okayama-kanko.jp/spot/detail_10622.html",
  "岡山観光WEB"
);

export const TAMANO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {

  "UNO HOTEL": sourcePhoto("tamano-stay-uno.jpg", "UNO HOTEL", "UNO HOTEL (guest room)", "https://uno-hotel.com/room-guide/", "UNO HOTEL"),
  "KEIRIN HOTEL 10": sourcePhoto("tamano-stay-keirin.jpg", "KEIRIN HOTEL 10", "KEIRIN HOTEL 10 (guest room)", "https://keirin.by-onko-chishin.com/rooms/", "KEIRIN HOTEL 10"),
  "菊水旅館": sourcePhoto("tamano-stay-kikusui.jpg", "菊水旅館", "菊水旅館 (guest room)", "https://www.kikusuiryokan.jp/rooms/matsu/", "菊水旅館"),
  "ダイヤモンド瀬戸内マリンホテル": sourcePhoto("tamano-stay-marine.jpg", "ダイヤモンド瀬戸内マリンホテル", "ダイヤモンド瀬戸内マリンホテル (guest room)", "https://www.marine-hotel.co.jp/room/western/", "ダイヤモンド瀬戸内マリンホテル"),
  "花三旅館": sourcePhoto("tamano-stay-hanasan.jpg", "花三旅館", "花三旅館 (guest room)", "https://www.okayama-kanko.jp/reserve/detail_12234.html", "岡山観光WEB"),
  "SETONITE": sourcePhoto("tamano-stay-setonite.jpg", "SETONITE", "SETONITE (guest room)", "https://www.okayama-kanko.jp/reserve/detail_100129.html", "岡山観光WEB"),
  "てんとうみ　渋川海岸グランピング": sourcePhoto("tamano-stay-tentoumi.jpg", "てんとうみ　渋川海岸グランピング", "てんとうみ　渋川海岸グランピング (guest room)", "https://www.okayama-kanko.jp/reserve/detail_1002884.html", "岡山観光WEB"),
  "The Nature Uno": sourcePhoto("tamano-stay-nature.jpg", "The Nature Uno", "The Nature Uno (guest room)", "https://www.okayama-kanko.jp/reserve/detail_1002865.html", "岡山観光WEB"),
  "たまの湯キャンプ場": sourcePhoto("tamano-stay-camp.jpg", "たまの湯キャンプ場", "たまの湯キャンプ場 (guest room)", "https://www.okayama-kanko.jp/spot/detail_14910.html", "岡山観光WEB"),
  "瀬戸内温泉 たまの湯": sourcePhoto("tamano-onsen-tamanoyu.jpg", "瀬戸内温泉 たまの湯", "瀬戸内温泉 たまの湯 (bath)", "https://www.seto-tamanoyu.jp/bath/", "瀬戸内温泉 たまの湯"),
  "たまの温泉": sourcePhoto("tamano-onsen-marine.jpg", "たまの温泉", "たまの温泉 (bath)", "https://www.marine-hotel.co.jp/facilities/spa/", "ダイヤモンド瀬戸内マリンホテル"),
  "海の駅 シーサイドマート": sourcePhoto("tamano-dining-seaside.jpg", "海の駅 シーサイドマート", "海の駅 シーサイドマート (place)", "https://www.okayama-kanko.jp/gourmet/detail_101606.html", "岡山観光WEB"),
  "おもちゃ王国": sourcePhoto("tamano-exp-toys.jpg", "おもちゃ王国", "おもちゃ王国 (place)", "https://www.okayama-kanko.jp/spot/detail_10605.html", "岡山観光WEB"),
  "渋川動物公園": sourcePhoto("tamano-exp-zoo.jpg", "渋川動物公園", "渋川動物公園 (place)", "https://www.okayama-kanko.jp/spot/detail_10624.html", "岡山観光WEB"),
  "備前焼王子窯": sourcePhoto("tamano-exp-kiln.jpg", "備前焼王子窯", "備前焼王子窯 (place)", "https://www.okayama-kanko.jp/spot/detail_10635.html", "岡山観光WEB"),
  "せとうち農園": sourcePhoto("tamano-exp-farm.jpg", "せとうち農園", "せとうち農園 (place)", "https://www.okayama-kanko.jp/spot/detail_100107.html", "岡山観光WEB"),
  "瀬戸内ヨットチャーター": sourcePhoto("tamano-exp-yacht.jpg", "瀬戸内ヨットチャーター", "瀬戸内ヨットチャーター (place)", "https://www.okayama-kanko.jp/spot/detail_16071.html", "岡山観光WEB"),
  "アートレンタサイクル": sourcePhoto("tamano-exp-cycle.jpg", "アートレンタサイクル", "アートレンタサイクル (place)", "https://www.okayama-kanko.jp/spot/detail_16070.html", "岡山観光WEB"),
  "駅東創庫": sourcePhoto("tamano-exp-souko.jpg", "駅東創庫", "駅東創庫 (place)", "https://www.okayama-kanko.jp/spot/detail_10608.html", "岡山観光WEB"),
  "渋川ウォーターパーク": sourcePhoto("tamano-exp-water.jpg", "渋川ウォーターパーク", "渋川ウォーターパーク (place)", "https://www.okayama-kanko.jp/spot/detail_14928.html", "岡山観光WEB"),
  "たまの観光ボランティアガイドの会": sourcePhoto("tamano-exp-guide.jpg", "たまの観光ボランティアガイドの会", "たまの観光ボランティアガイドの会 (place)", "https://www.okayama-kanko.jp/spot/detail_12022.html", "岡山観光WEB"),
  "瀬戸内ナチュラルフィールド": sourcePhoto("tamano-exp-field.jpg", "瀬戸内ナチュラルフィールド", "瀬戸内ナチュラルフィールド (place)", "https://www.okayama-kanko.jp/spot/detail_16349.html", "岡山観光WEB"),
  "渋川海水浴場（渋川海岸）": sourcePhoto("tamano-shibukawa-beach.jpg", "渋川海水浴場（渋川海岸）", "渋川海水浴場（渋川海岸） (place)", "https://www.okayama-kanko.jp/spot/detail_10622.html", "岡山観光WEB"),
  "王子が岳": sourcePhoto("tamano-ojigatake.jpg", "王子が岳", "王子が岳 (place)", "https://www.okayama-kanko.jp/spot/detail_10609.html", "岡山観光WEB"),
  "渋川マリン水族館（玉野市立海洋博物館）": sourcePhoto("tamano-aquarium.jpg", "渋川マリン水族館（玉野市立海洋博物館）", "渋川マリン水族館（玉野市立海洋博物館） (place)", "https://www.okayama-kanko.jp/spot/detail_10621.html", "岡山観光WEB"),
  "道の駅みやま公園": sourcePhoto("tamano-michinoeki.jpg", "道の駅みやま公園", "道の駅みやま公園 (place)", "https://www.okayama-kanko.jp/spot/detail_10633.html", "岡山観光WEB"),
  "深山公園": sourcePhoto("tamano-miyama-park.jpg", "深山公園", "深山公園 (place)", "https://www.okayama-kanko.jp/spot/detail_10639.html", "岡山観光WEB"),
  "深山イギリス庭園": sourcePhoto("tamano-english-garden.jpg", "深山イギリス庭園", "深山イギリス庭園 (place)", "https://www.okayama-kanko.jp/spot/detail_10626.html", "岡山観光WEB"),
  "宇野港周辺アートサイト": sourcePhoto("tamano-uno-art.jpg", "宇野港周辺アートサイト", "宇野港周辺アートサイト (place)", "https://www.okayama-kanko.jp/spot/detail_100210.html", "岡山観光WEB"),
  "宇野のチヌ": sourcePhoto("tamano-uno-chinu.jpg", "宇野のチヌ", "宇野のチヌ (place)", "https://www.okayama-kanko.jp/spot/detail_10640.html", "岡山観光WEB"),
  "常山城跡": sourcePhoto("tamano-tsuneyama.jpg", "常山城跡", "常山城跡 (place)", "https://www.okayama-kanko.jp/spot/detail_10625.html", "岡山観光WEB"),
  "渋川公園": sourcePhoto("tamano-shibukawa-park.jpg", "渋川公園", "渋川公園 (place)", "https://www.okayama-kanko.jp/spot/detail_10623.html", "岡山観光WEB"),
  "日の出海岸": sourcePhoto("tamano-hinode.jpg", "日の出海岸", "日の出海岸 (place)", "https://www.okayama-kanko.jp/spot/detail_10634.html", "岡山観光WEB"),
  "玉野競輪場": sourcePhoto("tamano-keirin.jpg", "玉野競輪場", "玉野競輪場 (place)", "https://www.okayama-kanko.jp/spot/detail_10614.html", "岡山観光WEB"),
  "玉比咩神社": sourcePhoto("tamano-tamahime.jpg", "玉比咩神社", "玉比咩神社 (place)", "https://www.okayama-kanko.jp/spot/detail_10611.html", "岡山観光WEB"),
  "玉野観光案内所（TAMANO Tourist Information Center）": sourcePhoto("tamano-info.jpg", "玉野観光案内所（TAMANO Tourist Information Center）", "玉野観光案内所（TAMANO Tourist Information Center） (place)", "https://www.okayama-kanko.jp/spot/detail_14854.html", "岡山観光WEB"),
  "田井みなと公園": sourcePhoto("tamano-tai-park.jpg", "田井みなと公園", "田井みなと公園 (place)", "https://www.okayama-kanko.jp/spot/detail_10630.html", "岡山観光WEB"),
  "与太郎神社": sourcePhoto("tamano-yotaro.jpg", "与太郎神社", "与太郎神社 (place)", "https://www.okayama-kanko.jp/spot/detail_10636.html", "岡山観光WEB"),
  "硯井天満宮": sourcePhoto("tamano-suzurii.jpg", "硯井天満宮", "硯井天満宮 (place)", "https://www.okayama-kanko.jp/spot/detail_10619.html", "岡山観光WEB"),
  "玉野スポーツセンター": sourcePhoto("tamano-sports.jpg", "玉野スポーツセンター", "玉野スポーツセンター (place)", "https://www.okayama-kanko.jp/spot/detail_10613.html", "岡山観光WEB"),
  "深山イギリス庭園ボランティアの会": sourcePhoto("tamano-garden-guide.jpg", "深山イギリス庭園ボランティアの会", "深山イギリス庭園ボランティアの会 (place)", "https://www.okayama-kanko.jp/spot/detail_12021.html", "岡山観光WEB"),
};


function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: TAMANO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '岡山観光WEB掲載情報', accessed: TAMANO.sources.accessed};
}

export const TAMANO_FACILITIES: readonly FacilityRow[] = [

  sight("tamano-sight-01", "渋川海水浴場（渋川海岸）", "岡山県玉野市渋川2-5", null, "https://www.okayama-kanko.jp/spot/detail_10622.html", 34.4546955903423, 133.903684616088),
  sight("tamano-sight-02", "王子が岳", "岡山県玉野市渋川4丁目", null, "https://www.okayama-kanko.jp/spot/detail_10609.html", 34.4627280230698, 133.878965377807),
  sight("tamano-sight-03", "渋川マリン水族館（玉野市立海洋博物館）", "岡山県玉野市渋川2-6-1", null, "https://www.okayama-kanko.jp/spot/detail_10621.html", 34.4548932, 133.9054455),
  sight("tamano-sight-04", "道の駅みやま公園", "岡山県玉野市田井2-4644", null, "https://www.okayama-kanko.jp/spot/detail_10633.html", 34.520054, 133.926861),
  sight("tamano-sight-05", "深山公園", "岡山県玉野市田井2-4490", null, "https://www.okayama-kanko.jp/spot/detail_10639.html", 34.5144732076784, 133.927738666534),
  sight("tamano-sight-06", "深山イギリス庭園", "岡山県玉野市田井2-4490", null, "https://www.okayama-kanko.jp/spot/detail_10626.html", 34.5186682119044, 133.929390907287),
  sight("tamano-sight-07", "宇野港周辺アートサイト", "岡山県玉野市築港", null, "https://www.okayama-kanko.jp/spot/detail_100210.html", 34.4912618, 133.9533391),
  sight("tamano-sight-08", "宇野のチヌ", "岡山県玉野市築港1丁目", null, "https://www.okayama-kanko.jp/spot/detail_10640.html", 34.490931, 133.953307),
  sight("tamano-sight-09", "常山城跡", "岡山県玉野市用吉", null, "https://www.okayama-kanko.jp/spot/detail_10625.html", 34.5249487484716, 133.886733055114),
  sight("tamano-sight-10", "渋川公園", "岡山県玉野市渋川2丁目地内", null, "https://www.okayama-kanko.jp/spot/detail_10623.html", 34.4559849893993, 133.904317617416),
  sight("tamano-sight-11", "日の出海岸", "岡山県玉野市築港5-20", null, "https://www.okayama-kanko.jp/spot/detail_10634.html", 34.4995912645159, 133.962668786633),
  sight("tamano-sight-12", "玉野競輪場", "岡山県玉野市築港5-18-1", null, "https://www.okayama-kanko.jp/spot/detail_10614.html", 34.4974098784438, 133.961448669433),
  sight("tamano-sight-13", "玉比咩神社", "岡山県玉野市玉5-1-17", null, "https://www.okayama-kanko.jp/spot/detail_10611.html", 34.4818188, 133.9292519),
  sight("tamano-sight-14", "玉野観光案内所（TAMANO Tourist Information Center）", "岡山県玉野市築港1-1-1（JR宇野駅構内）", null, "https://www.okayama-kanko.jp/spot/detail_14854.html", 34.4944579, 133.9538684),
  sight("tamano-sight-15", "田井みなと公園", "岡山県玉野市田井6-6", null, "https://www.okayama-kanko.jp/spot/detail_10630.html", 34.5094388093024, 133.956620693206),
  sight("tamano-sight-16", "与太郎神社", "岡山県玉野市八浜町大崎", null, "https://www.okayama-kanko.jp/spot/detail_10636.html", 34.5460794, 133.9383751),
  sight("tamano-sight-17", "硯井天満宮", "岡山県玉野市八浜町大崎169-1", null, "https://www.okayama-kanko.jp/spot/detail_10619.html", 34.5316471, 133.9155882),
  sight("tamano-sight-18", "玉野スポーツセンター", "岡山県玉野市田井2-4464-10", null, "https://www.okayama-kanko.jp/spot/detail_10613.html", 34.513282, 133.937443),
  sight("tamano-sight-19", "深山イギリス庭園ボランティアの会", "岡山県玉野市田井2-4490", null, "https://www.okayama-kanko.jp/spot/detail_12021.html", 34.517605, 133.928021),
  sight("tamano-onsen-01", "瀬戸内温泉 たまの湯", "岡山県玉野市築港1-1-11", null, "https://www.okayama-kanko.jp/spot/detail_10628.html", 34.4927985491191, 133.956599235534),
  sight("tamano-onsen-02", "たまの温泉", "岡山県玉野市渋川2-12-1", null, "https://www.okayama-kanko.jp/spot/detail_10638.html", 34.4559958, 133.9030373),
  sight("tamano-exp-01", "おもちゃ王国", "岡山県玉野市滝1640-1", null, "https://www.okayama-kanko.jp/spot/detail_10605.html", 34.4731301133383, 133.891196250915),
  sight("tamano-exp-02", "渋川動物公園", "岡山県玉野市渋川3-1077-1", null, "https://www.okayama-kanko.jp/spot/detail_10624.html", 34.470149, 133.893631),
  sight("tamano-exp-03", "備前焼王子窯", "岡山県玉野市永井2763", null, "https://www.okayama-kanko.jp/spot/detail_10635.html", 34.465145, 133.8807754),
  sight("tamano-exp-04", "せとうち農園", "岡山県玉野市山田1604-1", null, "https://www.okayama-kanko.jp/spot/detail_100107.html", 34.5516880198914, 133.974393760713),
  sight("tamano-exp-05", "瀬戸内ヨットチャーター", "岡山県玉野市築港1-1-11", null, "https://www.okayama-kanko.jp/spot/detail_16071.html", 34.4927641, 133.9557161),
  sight("tamano-exp-06", "アートレンタサイクル", "岡山県玉野市築港1-1-1（JR宇野駅構内）", null, "https://www.okayama-kanko.jp/spot/detail_16070.html", 34.494479, 133.953873),
  sight("tamano-exp-07", "駅東創庫", "岡山県玉野市築港5-4-1", null, "https://www.okayama-kanko.jp/spot/detail_10608.html", 34.494535, 133.955594),
  sight("tamano-exp-08", "渋川ウォーターパーク", "岡山県玉野市渋川2丁目地内", null, "https://www.okayama-kanko.jp/spot/detail_14928.html", 34.454851, 133.9035716),
  sight("tamano-exp-09", "たまの観光ボランティアガイドの会", "岡山県玉野市築港1-1-3（産業振興ビル 玉野市観光協会）", null, "https://www.okayama-kanko.jp/spot/detail_12022.html", 34.492113, 133.953772),
  sight("tamano-exp-10", "瀬戸内ナチュラルフィールド", "岡山県玉野市滝1640-1", null, "https://www.okayama-kanko.jp/spot/detail_16349.html", 34.4717943063062, 133.89238975159),
];
