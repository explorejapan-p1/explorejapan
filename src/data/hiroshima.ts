/**
 * Hiroshima City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34100. First Hiroshima hub (広島市).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const HIROSHIMA = {
  nameJa: '広島市',
  nameEn: 'Hiroshima',
  reading: 'ひろしまし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'hiroshima',
  jis: '34100',
  jlis: '341002',
  sameAs: 'https://www.city.hiroshima.lg.jp/',
  hall: {
    postalCode: '730-8586',
    addressJa: '広島県広島市中区国泰寺町一丁目6番34号',
    addressEn: '1-6-34 Kokutaiji-machi, Naka-ku, Hiroshima City, Hiroshima 730-8586, Japan',
    phone: '082-245-2111'
  },
  sources: {
    home: 'https://www.city.hiroshima.lg.jp/',
    hall: 'https://www.city.hiroshima.lg.jp/facility/yakusho/1031723.html',
    kanko: 'https://www.hiroshima-navi.or.jp/',
    castle: 'https://commons.wikimedia.org/wiki/File:Hiroshima_Castle.jpg',
    tabelogCity: 'https://tabelog.com/hiroshima/C34100/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const HIROSHIMA_EXPECTED_ROW_COUNT = 9;
export const HIROSHIMA_EXPECTED_GEO_COUNT = 1;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: Hiroshima Castle. */
export const HIROSHIMA_PLACE_PHOTO = wikiPhoto(
  "hiroshima-castle.jpg",
  "https://commons.wikimedia.org/wiki/File:Hiroshima_Castle.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "DonaldoKun", "https://commons.wikimedia.org/wiki/User:DonaldoKun", "2005",
  "\u5e83\u5cf6\u57ce", "Hiroshima Castle"
);

export const HIROSHIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "\u5e83\u5cf6\u57ce": wikiPhoto(
  "hiroshima-castle.jpg",
  "https://commons.wikimedia.org/wiki/File:Hiroshima_Castle.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "DonaldoKun", "https://commons.wikimedia.org/wiki/User:DonaldoKun", "2005",
  "\u5e83\u5cf6\u57ce", "Hiroshima Castle"
),
  "\u539f\u7206\u30c9\u30fc\u30e0": wikiPhoto(
  "hiroshima-abomb-dome.jpg",
  "https://commons.wikimedia.org/wiki/File:A-Bomb_Dome.jpg",
  "CC BY-SA 2.5", "https://creativecommons.org/licenses/by-sa/2.5",
  "Dan Smith", "https://commons.wikimedia.org/wiki/User:Photographer", "2005",
  "\u539f\u7206\u30c9\u30fc\u30e0", "Atomic Bomb Dome"
),
  "\u5e73\u548c\u8a18\u5ff5\u516c\u5712": wikiPhoto(
  "hiroshima-peace-park.jpg",
  "https://commons.wikimedia.org/wiki/File:Hiroshima_Peace_Memorial_Park,_20240817_1032_4210.jpg",
  "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0",
  "Jakub Ha\u0142un", "https://commons.wikimedia.org/wiki/User:Julo", "2024-08-17",
  "\u5e73\u548c\u8a18\u5ff5\u516c\u5712", "Hiroshima Peace Memorial Park"
),
  "\u7e2e\u666f\u5712": wikiPhoto(
  "hiroshima-shukkeien.jpg",
  "https://commons.wikimedia.org/wiki/File:20100722_Hiroshima_Shukkeien_4387.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Jakub Ha\u0142un", "https://commons.wikimedia.org/wiki/User:Julo", "2010-07-22",
  "\u7e2e\u666f\u5712", "Shukkeien Garden"
),
  "\u5e83\u5cf6\u770c\u7acb\u7f8e\u8853\u9928": wikiPhoto(
  "hiroshima-museum-art.jpg",
  "https://commons.wikimedia.org/wiki/File:Hiroshima_Museum_of_Art.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Taisyo", "https://ja.wikipedia.org/wiki/User:Taisyo", "2007",
  "\u5e83\u5cf6\u770c\u7acb\u7f8e\u8853\u9928", "Hiroshima Museum of Art"
),
  "\u4e09\u6edd\u5bfa\u591a\u5b9d\u5854": wikiPhoto(
  "hiroshima-mitakidera.jpg",
  "https://commons.wikimedia.org/wiki/File:Mitaki-dera_Taho-to.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "\u5927\u6c5f\u4e07\u91cc", "https://commons.wikimedia.org/wiki/File:Mitaki-dera_Taho-to.jpg", "2006",
  "\u4e09\u6edd\u5bfa\u591a\u5b9d\u5854", "Mitaki-dera Tahoto"
),
  "\u304a\u308a\u3065\u308b\u30bf\u30ef\u30fc\u5c55\u671b": wikiPhoto(
  "hiroshima-orizuru.jpg",
  "https://commons.wikimedia.org/wiki/File:View_to_the_west_from_the_Hiroshima_Orizuru_Tower.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Christophe95", "https://commons.wikimedia.org/wiki/User:Christophe95", "2019",
  "\u304a\u308a\u3065\u308b\u30bf\u30ef\u30fc\u304b\u3089\u306e\u773a\u671b", "View from Orizuru Tower"
),
  "\u99b3\u8d70 \u5550\u5544\u4e00\u5341": sourcePhoto("hiroshima-34023887-dish.jpg", "\u99b3\u8d70 \u5550\u5544\u4e00\u5341\u306e\u6599\u7406\u5199\u771f", "\u99b3\u8d70 \u5550\u5544\u4e00\u5341 food photo", "https://tabelog.com/hiroshima/A3401/A340117/34023887/", '食べログ'),
  "\u6c38\u5c71": sourcePhoto("hiroshima-34026172-dish.jpg", "\u6c38\u5c71\u306e\u6599\u7406\u5199\u771f", "\u6c38\u5c71 food photo", "https://tabelog.com/hiroshima/A3401/A340108/34026172/", '食べログ'),
  "\u58ee\u58eb": sourcePhoto("hiroshima-34022477-dish.jpg", "\u58ee\u58eb\u306e\u6599\u7406\u5199\u771f", "\u58ee\u58eb food photo", "https://tabelog.com/hiroshima/A3401/A340112/34022477/", '食べログ'),
  "\u5b63\u7bc0\u6599\u7406\u3000\u306a\u304b\u3057\u307e": sourcePhoto("hiroshima-34016189-dish.jpg", "\u5b63\u7bc0\u6599\u7406\u3000\u306a\u304b\u3057\u307e\u306e\u6599\u7406\u5199\u771f", "\u5b63\u7bc0\u6599\u7406\u3000\u306a\u304b\u3057\u307e food photo", "https://tabelog.com/hiroshima/A3401/A340118/34016189/", '食べログ'),
  "\u548c\u725blab K": sourcePhoto("hiroshima-34029605-dish.jpg", "\u548c\u725blab K\u306e\u6599\u7406\u5199\u771f", "\u548c\u725blab K food photo", "https://tabelog.com/hiroshima/A3401/A340103/34029605/", '食べログ'),
  "\u3068\u308a \u3084\u307e\u3082\u3068": sourcePhoto("hiroshima-34031543-dish.jpg", "\u3068\u308a \u3084\u307e\u3082\u3068\u306e\u6599\u7406\u5199\u771f", "\u3068\u308a \u3084\u307e\u3082\u3068 food photo", "https://tabelog.com/hiroshima/A3401/A340110/34031543/", '食べログ'),
  "\u4e2d\u571f": sourcePhoto("hiroshima-34026765-dish.jpg", "\u4e2d\u571f\u306e\u6599\u7406\u5199\u771f", "\u4e2d\u571f food photo", "https://tabelog.com/hiroshima/A3401/A340108/34026765/", '食べログ'),
  "\u4e2d\u56fd\u6599\u7406\u30de\u30b9\u30ad": sourcePhoto("hiroshima-34020426-dish.jpg", "\u4e2d\u56fd\u6599\u7406\u30de\u30b9\u30ad\u306e\u6599\u7406\u5199\u771f", "\u4e2d\u56fd\u6599\u7406\u30de\u30b9\u30ad food photo", "https://tabelog.com/hiroshima/A3401/A340121/34020426/", '食べログ'),
  "NICON": sourcePhoto("hiroshima-34027314-dish.jpg", "NICON\u306e\u6599\u7406\u5199\u771f", "NICON food photo", "https://tabelog.com/hiroshima/A3401/A340108/34027314/", '食べログ'),
  "DIRETTO": sourcePhoto("hiroshima-34027088-dish.jpg", "DIRETTO\u306e\u6599\u7406\u5199\u771f", "DIRETTO food photo", "https://tabelog.com/hiroshima/A3401/A340117/34027088/", '食べログ'),
  "\u9ba8 \u677e": sourcePhoto("hiroshima-34029007-dish.jpg", "\u9ba8 \u677e\u306e\u6599\u7406\u5199\u771f", "\u9ba8 \u677e food photo", "https://tabelog.com/hiroshima/A3401/A340121/34029007/", '食べログ'),
  "\u4e2d\u56fd\u83dc\u3000\u5409\u65e5": sourcePhoto("hiroshima-34032687-dish.jpg", "\u4e2d\u56fd\u83dc\u3000\u5409\u65e5\u306e\u6599\u7406\u5199\u771f", "\u4e2d\u56fd\u83dc\u3000\u5409\u65e5 food photo", "https://tabelog.com/hiroshima/A3401/A340121/34032687/", '食べログ'),
  "EPURE": sourcePhoto("hiroshima-34024620-dish.jpg", "EPURE\u306e\u6599\u7406\u5199\u771f", "EPURE food photo", "https://tabelog.com/hiroshima/A3401/A340121/34024620/", '食べログ'),
  "hiroto": sourcePhoto("hiroshima-34001321-dish.jpg", "hiroto\u306e\u6599\u7406\u5199\u771f", "hiroto food photo", "https://tabelog.com/hiroshima/A3401/A340117/34001321/", '食べログ'),
  "\u9ba8 \u3053\u3046\u3057\u308d\u3046": sourcePhoto("hiroshima-34033074-dish.jpg", "\u9ba8 \u3053\u3046\u3057\u308d\u3046\u306e\u6599\u7406\u5199\u771f", "\u9ba8 \u3053\u3046\u3057\u308d\u3046 food photo", "https://tabelog.com/hiroshima/A3401/A340116/34033074/", '食べログ'),
  "\u9ba8 \u307e\u3064\u3070\u3089": sourcePhoto("hiroshima-34029426-dish.jpg", "\u9ba8 \u307e\u3064\u3070\u3089\u306e\u6599\u7406\u5199\u771f", "\u9ba8 \u307e\u3064\u3070\u3089 food photo", "https://tabelog.com/hiroshima/A3401/A340109/34029426/", '食べログ'),
  "\u30db\u30c6\u30eb\u30a2\u30af\u30c6\u30a3\u30d6\uff01\u5e83\u5cf6": sourcePhoto("hiroshima-stay-h40245.jpg", "\u30db\u30c6\u30eb\u30a2\u30af\u30c6\u30a3\u30d6\uff01\u5e83\u5cf6\u306e\u5ba2\u5ba4\u5199\u771f", "\u30db\u30c6\u30eb\u30a2\u30af\u30c6\u30a3\u30d6\uff01\u5e83\u5cf6 room photo", "https://travel.rakuten.co.jp/HOTEL/40245/40245.html", '楽天トラベル'),
  "\uff46\uff41\uff56\u3000\u5e83\u5cf6\u30b9\u30bf\u30b8\u30a2\u30e0": sourcePhoto("hiroshima-stay-h184520.jpg", "\uff46\uff41\uff56\u3000\u5e83\u5cf6\u30b9\u30bf\u30b8\u30a2\u30e0\u306e\u5ba2\u5ba4\u5199\u771f", "\uff46\uff41\uff56\u3000\u5e83\u5cf6\u30b9\u30bf\u30b8\u30a2\u30e0 room photo", "https://travel.rakuten.co.jp/HOTEL/184520/184520.html", '楽天トラベル'),
  "\uff46\uff41\uff56\u3000\u5e83\u5cf6\u5e73\u548c\u5927\u901a\u308a": sourcePhoto("hiroshima-stay-h184661.jpg", "\uff46\uff41\uff56\u3000\u5e83\u5cf6\u5e73\u548c\u5927\u901a\u308a\u306e\u5ba2\u5ba4\u5199\u771f", "\uff46\uff41\uff56\u3000\u5e83\u5cf6\u5e73\u548c\u5927\u901a\u308a room photo", "https://travel.rakuten.co.jp/HOTEL/184661/184661.html", '楽天トラベル'),
  "\u30cd\u30b9\u30c8\u30db\u30c6\u30eb\u5e83\u5cf6\u516b\u4e01\u5800": sourcePhoto("hiroshima-stay-h172792.jpg", "\u30cd\u30b9\u30c8\u30db\u30c6\u30eb\u5e83\u5cf6\u516b\u4e01\u5800\u306e\u5ba2\u5ba4\u5199\u771f", "\u30cd\u30b9\u30c8\u30db\u30c6\u30eb\u5e83\u5cf6\u516b\u4e01\u5800 room photo", "https://travel.rakuten.co.jp/HOTEL/172792/172792.html", '楽天トラベル'),
  "\u30cd\u30b9\u30c8\u30db\u30c6\u30eb\u5e83\u5cf6\u99c5\u524d": sourcePhoto("hiroshima-stay-h179344.jpg", "\u30cd\u30b9\u30c8\u30db\u30c6\u30eb\u5e83\u5cf6\u99c5\u524d\u306e\u5ba2\u5ba4\u5199\u771f", "\u30cd\u30b9\u30c8\u30db\u30c6\u30eb\u5e83\u5cf6\u99c5\u524d room photo", "https://travel.rakuten.co.jp/HOTEL/179344/179344.html", '楽天トラベル'),
  "\u30d9\u30c3\u30bb\u30eb\u30db\u30c6\u30eb\u5e83\u5cf6\u3000\u5e73\u548c\u5927\u901a\u308a\uff08\u5e83\u5cf6\uff12\u53f7\u5e97\uff09": sourcePhoto("hiroshima-stay-h196623.jpg", "\u30d9\u30c3\u30bb\u30eb\u30db\u30c6\u30eb\u5e83\u5cf6\u3000\u5e73\u548c\u5927\u901a\u308a\uff08\u5e83\u5cf6\uff12\u53f7\u5e97\uff09\u306e\u5ba2\u5ba4\u5199\u771f", "\u30d9\u30c3\u30bb\u30eb\u30db\u30c6\u30eb\u5e83\u5cf6\u3000\u5e73\u548c\u5927\u901a\u308a\uff08\u5e83\u5cf6\uff12\u53f7\u5e97\uff09 room photo", "https://travel.rakuten.co.jp/HOTEL/196623/196623.html", '楽天トラベル'),
  "\u30c1\u30b5\u30f3\u30db\u30c6\u30eb\u5e83\u5cf6": sourcePhoto("hiroshima-stay-h56807.jpg", "\u30c1\u30b5\u30f3\u30db\u30c6\u30eb\u5e83\u5cf6\u306e\u5ba2\u5ba4\u5199\u771f", "\u30c1\u30b5\u30f3\u30db\u30c6\u30eb\u5e83\u5cf6 room photo", "https://travel.rakuten.co.jp/HOTEL/56807/56807.html", '楽天トラベル'),
  "\u5929\u7136\u6e29\u6cc9\u30db\u30c6\u30eb\u30ea\u30d6\u30de\u30c3\u30af\u30b9\uff30\uff32\uff25\uff2d\uff29\uff35\uff2d\u5e83\u5cf6": sourcePhoto("hiroshima-stay-h176743.jpg", "\u5929\u7136\u6e29\u6cc9\u30db\u30c6\u30eb\u30ea\u30d6\u30de\u30c3\u30af\u30b9\uff30\uff32\uff25\uff2d\uff29\uff35\uff2d\u5e83\u5cf6\u306e\u5ba2\u5ba4\u5199\u771f", "\u5929\u7136\u6e29\u6cc9\u30db\u30c6\u30eb\u30ea\u30d6\u30de\u30c3\u30af\u30b9\uff30\uff32\uff25\uff2d\uff29\uff35\uff2d\u5e83\u5cf6 room photo", "https://travel.rakuten.co.jp/HOTEL/176743/176743.html", '楽天トラベル'),
  "\u5929\u7136\u6e29\u6cc9\u3000\u7e2e\u666f\u306e\u6e6f\u3000\u30b9\u30fc\u30d1\u30fc\u30db\u30c6\u30eb\u5e83\u5cf6\u5929\u7136\u6e29\u6cc9\u30fb\u85ac\u7814\u5800\u901a\u308a": sourcePhoto("hiroshima-stay-h181958.jpg", "\u5929\u7136\u6e29\u6cc9\u3000\u7e2e\u666f\u306e\u6e6f\u3000\u30b9\u30fc\u30d1\u30fc\u30db\u30c6\u30eb\u5e83\u5cf6\u5929\u7136\u6e29\u6cc9\u30fb\u85ac\u7814\u5800\u901a\u308a\u306e\u5ba2\u5ba4\u5199\u771f", "\u5929\u7136\u6e29\u6cc9\u3000\u7e2e\u666f\u306e\u6e6f\u3000\u30b9\u30fc\u30d1\u30fc\u30db\u30c6\u30eb\u5e83\u5cf6\u5929\u7136\u6e29\u6cc9\u30fb\u85ac\u7814\u5800\u901a\u308a room photo", "https://travel.rakuten.co.jp/HOTEL/181958/181958.html", '楽天トラベル'),
  "\u5929\u7136\u6e29\u6cc9\u30db\u30c6\u30eb\u30ea\u30d6\u30de\u30c3\u30af\u30b9\uff30\uff32\uff25\uff2d\uff29\uff35\uff2d\u5e83\u5cf6 \u5927\u6d74\u5834": sourcePhoto("hiroshima-onsen-h176743.jpg", "\u5929\u7136\u6e29\u6cc9\u30db\u30c6\u30eb\u30ea\u30d6\u30de\u30c3\u30af\u30b9\uff30\uff32\uff25\uff2d\uff29\uff35\uff2d\u5e83\u5cf6 \u5927\u6d74\u5834\u306e\u5199\u771f", "\u5929\u7136\u6e29\u6cc9\u30db\u30c6\u30eb\u30ea\u30d6\u30de\u30c3\u30af\u30b9\uff30\uff32\uff25\uff2d\uff29\uff35\uff2d\u5e83\u5cf6 \u5927\u6d74\u5834 bath photo", "https://travel.rakuten.co.jp/HOTEL/176743/gallery.html", '楽天トラベル'),
  "\u5929\u7136\u6e29\u6cc9\u3000\u7e2e\u666f\u306e\u6e6f\u3000\u30b9\u30fc\u30d1\u30fc\u30db\u30c6\u30eb\u5e83\u5cf6\u5929\u7136\u6e29\u6cc9\u30fb\u85ac\u7814\u5800\u901a\u308a \u5927\u6d74\u5834": sourcePhoto("hiroshima-onsen-h181958.jpg", "\u5929\u7136\u6e29\u6cc9\u3000\u7e2e\u666f\u306e\u6e6f\u3000\u30b9\u30fc\u30d1\u30fc\u30db\u30c6\u30eb\u5e83\u5cf6\u5929\u7136\u6e29\u6cc9\u30fb\u85ac\u7814\u5800\u901a\u308a \u5927\u6d74\u5834\u306e\u5199\u771f", "\u5929\u7136\u6e29\u6cc9\u3000\u7e2e\u666f\u306e\u6e6f\u3000\u30b9\u30fc\u30d1\u30fc\u30db\u30c6\u30eb\u5e83\u5cf6\u5929\u7136\u6e29\u6cc9\u30fb\u85ac\u7814\u5800\u901a\u308a \u5927\u6d74\u5834 bath photo", "https://travel.rakuten.co.jp/HOTEL/181958/gallery.html", '楽天トラベル'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: HIROSHIMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光・Commons掲載情報', accessed: HIROSHIMA.sources.accessed};
}

export const HIROSHIMA_FACILITIES: readonly FacilityRow[] = [
  sight("hiroshima-sight-01", "広島城", "広島県広島市中区基町21-1", null, "https://commons.wikimedia.org/wiki/File:Hiroshima_Castle.jpg", 34.4025, 132.4589),
  sight("hiroshima-sight-02", "\u539f\u7206\u30c9\u30fc\u30e0", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5927\u624b\u753a1-10", null, "https://commons.wikimedia.org/wiki/File:A-Bomb_Dome.jpg", null, null),
  sight("hiroshima-sight-03", "\u5e73\u548c\u8a18\u5ff5\u516c\u5712", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u4e2d\u5cf6\u753a1", null, "https://commons.wikimedia.org/wiki/File:Hiroshima_Peace_Memorial_Park,_20240817_1032_4210.jpg", null, null),
  sight("hiroshima-sight-04", "\u7e2e\u666f\u5712", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u4e0a\u5e5f\u753a2-11", null, "https://commons.wikimedia.org/wiki/File:20100722_Hiroshima_Shukkeien_4387.jpg", null, null),
  sight("hiroshima-sight-05", "\u5e83\u5cf6\u770c\u7acb\u7f8e\u8853\u9928", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u4e0a\u5e5f\u753a2-22", null, "https://commons.wikimedia.org/wiki/File:Hiroshima_Museum_of_Art.jpg", null, null),
  sight("hiroshima-sight-06", "\u4e09\u6edd\u5bfa\u591a\u5b9d\u5854", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u897f\u533a\u4e09\u6edd\u753a", null, "https://commons.wikimedia.org/wiki/File:Mitaki-dera_Taho-to.jpg", null, null),
  sight("hiroshima-onsen-01", "\u5929\u7136\u6e29\u6cc9\u30db\u30c6\u30eb\u30ea\u30d6\u30de\u30c3\u30af\u30b9\uff30\uff32\uff25\uff2d\uff29\uff35\uff2d\u5e83\u5cf6 \u5927\u6d74\u5834", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u6771\u533a\u4e8c\u8449\u306e\u91cc1-1-7", "082-567-2250", "https://travel.rakuten.co.jp/HOTEL/176743/gallery.html", null, null),
  sight("hiroshima-onsen-02", "\u5929\u7136\u6e29\u6cc9\u3000\u7e2e\u666f\u306e\u6e6f\u3000\u30b9\u30fc\u30d1\u30fc\u30db\u30c6\u30eb\u5e83\u5cf6\u5929\u7136\u6e29\u6cc9\u30fb\u85ac\u7814\u5800\u901a\u308a \u5927\u6d74\u5834", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u7530\u4e2d\u753a2-28", "082-578-9000", "https://travel.rakuten.co.jp/HOTEL/181958/gallery.html", null, null),
  sight("hiroshima-exp-01", "\u304a\u308a\u3065\u308b\u30bf\u30ef\u30fc\u5c55\u671b", "広島県広島市中区大手町1-2-1", null, "https://commons.wikimedia.org/wiki/File:View_to_the_west_from_the_Hiroshima_Orizuru_Tower.jpg", null, null),
];
