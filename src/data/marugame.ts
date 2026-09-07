/**
 * Marugame City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37202. Third Kagawa hub after Takamatsu + Kotohira.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MARUGAME = {
  nameJa: '丸亀市',
  nameEn: 'Marugame City',
  reading: 'まるがめし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'marugame',
  jis: '37202',
  jlis: '372021',
  sameAs: 'https://www.city.marugame.lg.jp/',
  hall: {
    postalCode: '763-8501',
    addressJa: '香川県丸亀市大手町二丁目4番21号',
    addressEn: '2-4-21 Otemachi, Marugame, Kagawa 763-8501, Japan',
    phone: '0877-23-2111'
  },
  sources: {
    home: 'https://www.city.marugame.lg.jp/',
    hall: 'https://www.city.marugame.lg.jp/',
    castle: 'https://www.city.marugame.lg.jp/site/castle/',
    tabelogCity: 'https://tabelog.com/kagawa/C37202/rstLst/',
    apa: 'https://travel.rakuten.co.jp/HOTEL/80598/80598.html',
    superHotel: 'https://travel.rakuten.co.jp/HOTEL/178679/178679.html',
    accessed: '2026-09-07'
  }
} as const;

export const MARUGAME_EXPECTED_ROW_COUNT = 9;
export const MARUGAME_EXPECTED_GEO_COUNT = 9;

function wikiPhoto(
  file: string,
  commons: string,
  license: string,
  licenseUrl: string,
  author: string,
  authorUrl: string,
  taken: string,
  altJa: string,
  altEn: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons,
    license,
    licenseUrl,
    author,
    authorUrl,
    taken,
    accessed: '2026-09-07',
    altJa,
    altEn
  };
}

function sourcePhoto(
  file: string,
  altJa: string,
  altEn: string,
  page: string,
  author: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons: page,
    license: '出典',
    licenseUrl: page,
    author,
    authorUrl: page,
    taken: '2026',
    accessed: '2026-09-07',
    altJa,
    altEn
  };
}

/** Cover: 丸亀城天守 — strongest Marugame landmark. */
export const MARUGAME_PLACE_PHOTO = wikiPhoto(
  'marugame-castle.jpg',
  'https://commons.wikimedia.org/wiki/File:Marugame_Castle,_Tenshu_002.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  'Naokijp',
  'https://commons.wikimedia.org/wiki/User:Naokijp',
  '2020',
  '丸亀城天守（丸亀市）',
  'Marugame Castle keep, Marugame'
);

const TABELOG_37000135 = "https://tabelog.com/kagawa/A3702/A370202/37000135/";
const TABELOG_37004606 = "https://tabelog.com/kagawa/A3702/A370202/37004606/";
const TABELOG_37000289 = "https://tabelog.com/kagawa/A3702/A370202/37000289/";
const TABELOG_37000068 = "https://tabelog.com/kagawa/A3702/A370202/37000068/";
const TABELOG_37006914 = "https://tabelog.com/kagawa/A3702/A370202/37006914/";
const TABELOG_37008415 = "https://tabelog.com/kagawa/A3702/A370202/37008415/";
const TABELOG_37001376 = "https://tabelog.com/kagawa/A3702/A370202/37001376/";
const TABELOG_37006447 = "https://tabelog.com/kagawa/A3702/A370202/37006447/";
const TABELOG_37009661 = "https://tabelog.com/kagawa/A3702/A370202/37009661/";
const TABELOG_37000070 = "https://tabelog.com/kagawa/A3702/A370202/37000070/";
const TABELOG_37007004 = "https://tabelog.com/kagawa/A3702/A370202/37007004/";
const TABELOG_37007722 = "https://tabelog.com/kagawa/A3702/A370202/37007722/";
const TABELOG_37000066 = "https://tabelog.com/kagawa/A3702/A370202/37000066/";
const TABELOG_37013411 = "https://tabelog.com/kagawa/A3702/A370202/37013411/";

/** Exact travel/sight name_ja only. No Tokushima/Takamatsu/Kotohira Files. */
export const MARUGAME_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '丸亀城': MARUGAME_PLACE_PHOTO,
  '丸亀城天守': wikiPhoto(
    'marugame-castle-tenshu.jpg',
    'https://commons.wikimedia.org/wiki/File:Marugame_Castle01.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Toto-tarou',
    'https://commons.wikimedia.org/wiki/User:Toto-tarou',
    '2010-07',
    '丸亀城天守閣（丸亀市）',
    'Marugame Castle tenshu, Marugame'
  ),
  '丸亀城石垣': wikiPhoto(
    'marugame-castle-ishigaki.jpg',
    'https://commons.wikimedia.org/wiki/File:Marugame_Castle06s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2010-09-19',
    '丸亀城の石垣（丸亀市）',
    'Stone walls of Marugame Castle, Marugame'
  ),
  '中津万象園': wikiPhoto(
    'marugame-banshoen.jpg',
    'https://commons.wikimedia.org/wiki/File:Nakatsu-bansho-en_Marugame_Kagawa_pref01n4350.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2010-09-19',
    '中津万象園（丸亀市）',
    'Nakatsu Banshō-en garden, Marugame'
  ),
  '丸亀港': wikiPhoto(
    'marugame-port.jpg',
    'https://commons.wikimedia.org/wiki/File:Marugame_port06s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2010-09-19',
    '丸亀港（丸亀市）',
    'Marugame Port, Marugame'
  ),
  'うちわの港ミュージアム': wikiPhoto(
    'marugame-uchiwa-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:Uchiwa_Museum01.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Toto-tarou',
    'https://commons.wikimedia.org/wiki/User:Toto-tarou',
    '2010-07',
    'うちわの港ミュージアム（丸亀市）',
    'Uchiwa no Minato Museum, Marugame'
  ),
  '飯野山': wikiPhoto(
    'marugame-iinoyama.jpg',
    'https://commons.wikimedia.org/wiki/File:Mount_Iino_Sanuki_Fuji.JPG',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'hyolee2',
    'https://commons.wikimedia.org/wiki/User:Hyolee2',
    '2015',
    '飯野山・讃岐富士（丸亀市）',
    'Mount Iino (Sanuki Fuji), Marugame'
  ),
  'アパホテル〈丸亀駅前大通〉': sourcePhoto(
    'marugame-stay-apa.jpg',
    'アパホテル〈丸亀駅前大通〉の客室写真',
    'APA Hotel Marugame Ekimae-odori room photo',
    'https://travel.rakuten.co.jp/HOTEL/80598/80598.html',
    '楽天トラベル'
  ),
  'スーパーホテル丸亀駅前　天然温泉「京極の湯」': sourcePhoto(
    'marugame-stay-super.jpg',
    'スーパーホテル丸亀駅前の客室写真',
    'Super Hotel Marugame Ekimae room photo',
    'https://travel.rakuten.co.jp/HOTEL/178679/178679.html',
    '楽天トラベル'
  ),
  'アパホテル〈丸亀駅前大通〉 大浴場': sourcePhoto(
    'marugame-onsen-apa.jpg',
    'アパホテル〈丸亀駅前大通〉の大浴場写真',
    'APA Hotel Marugame bath photo',
    'https://travel.rakuten.co.jp/HOTEL/80598/80598.html',
    '楽天トラベル'
  ),
  'スーパーホテル丸亀駅前 天然温泉「京極の湯」 大浴場': sourcePhoto(
    'marugame-onsen-super.jpg',
    'スーパーホテル丸亀駅前 天然温泉「京極の湯」の浴場写真',
    'Super Hotel Marugame Kyogoku-no-Yu bath photo',
    'https://travel.rakuten.co.jp/HOTEL/178679/gallery.html',
    '楽天トラベル'
  ),

  "中村うどん": sourcePhoto(
    "marugame-37000135-dish.jpg",
    "中村うどんの料理写真",
    "中村うどん food photo",
    TABELOG_37000135,
    '食べログ'
  ),
  "純手打うどん よしや": sourcePhoto(
    "marugame-37004606-dish.jpg",
    "純手打うどん よしやの料理写真",
    "純手打うどん よしや food photo",
    TABELOG_37004606,
    '食べログ'
  ),
  "麺処 綿谷 丸亀店": sourcePhoto(
    "marugame-37000289-dish.jpg",
    "麺処 綿谷 丸亀店の料理写真",
    "麺処 綿谷 丸亀店 food photo",
    TABELOG_37000289,
    '食べログ'
  ),
  "なかむら": sourcePhoto(
    "marugame-37000068-dish.jpg",
    "なかむらの料理写真",
    "なかむら food photo",
    TABELOG_37000068,
    '食べログ'
  ),
  "麦香": sourcePhoto(
    "marugame-37006914-dish.jpg",
    "麦香の料理写真",
    "麦香 food photo",
    TABELOG_37006914,
    '食べログ'
  ),
  "山とも": sourcePhoto(
    "marugame-37008415-dish.jpg",
    "山ともの料理写真",
    "山とも food photo",
    TABELOG_37008415,
    '食べログ'
  ),
  "手打ちうどん 歩": sourcePhoto(
    "marugame-37001376-dish.jpg",
    "手打ちうどん 歩の料理写真",
    "手打ちうどん 歩 food photo",
    TABELOG_37001376,
    '食べログ'
  ),
  "手打ちセルフうどん 海侍 其の壱 飯山店": sourcePhoto(
    "marugame-37006447-dish.jpg",
    "手打ちセルフうどん 海侍 其の壱 飯山店の料理写真",
    "手打ちセルフうどん 海侍 其の壱 飯山店 food photo",
    TABELOG_37006447,
    '食べログ'
  ),
  "うどん おかだ": sourcePhoto(
    "marugame-37009661-dish.jpg",
    "うどん おかだの料理写真",
    "うどん おかだ food photo",
    TABELOG_37009661,
    '食べログ'
  ),
  "まえばうどん": sourcePhoto(
    "marugame-37000070-dish.jpg",
    "まえばうどんの料理写真",
    "まえばうどん food photo",
    TABELOG_37000070,
    '食べログ'
  ),
  "あやうた製麺": sourcePhoto(
    "marugame-37007004-dish.jpg",
    "あやうた製麺の料理写真",
    "あやうた製麺 food photo",
    TABELOG_37007004,
    '食べログ'
  ),
  "釜揚げうどん岡じま 丸亀店": sourcePhoto(
    "marugame-37007722-dish.jpg",
    "釜揚げうどん岡じま 丸亀店の料理写真",
    "釜揚げうどん岡じま 丸亀店 food photo",
    TABELOG_37007722,
    '食べログ'
  ),
  "骨付鳥 一鶴 丸亀本店": sourcePhoto(
    "marugame-37000066-dish.jpg",
    "骨付鳥 一鶴 丸亀本店の料理写真",
    "骨付鳥 一鶴 丸亀本店 food photo",
    TABELOG_37000066,
    '食べログ'
  ),
  "時とまるudon": sourcePhoto(
    "marugame-37013411-dish.jpg",
    "時とまるudonの料理写真",
    "時とまるudon food photo",
    TABELOG_37013411,
    '食べログ'
  ),
};

function sight(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string,
  lat: number,
  lon: number
): FacilityRow {
  return {
    id,
    jis: MARUGAME.jis,
    name_ja,
    reading: null,
    category: 'tourism',
    lat,
    lon,
    address,
    phone,
    official_url: source_url,
    hours: null,
    source_url,
    license: '市公式サイト掲載情報',
    accessed: MARUGAME.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const MARUGAME_FACILITIES: readonly FacilityRow[] = [
  sight('marugame-sight-01', '丸亀城', '香川県丸亀市一番丁', '0877-24-8816', MARUGAME.sources.castle, 34.286286, 133.800097),
  sight('marugame-sight-02', '丸亀城天守', '香川県丸亀市一番丁', null, MARUGAME.sources.castle, 34.2864, 133.8002),
  sight('marugame-sight-03', '丸亀城石垣', '香川県丸亀市一番丁', null, MARUGAME.sources.castle, 34.2859, 133.7998),
  sight('marugame-sight-04', '中津万象園', '香川県丸亀市中府町1-13-47', '0877-25-0018', 'https://www.city.marugame.lg.jp/', 34.2940, 133.8080),
  sight('marugame-sight-05', '丸亀港', '香川県丸亀市港町', null, 'https://www.city.marugame.lg.jp/', 34.2985, 133.7930),
  sight('marugame-sight-06', 'うちわの港ミュージアム', '香川県丸亀市港町307-15', '0877-24-7055', 'https://www.city.marugame.lg.jp/', 34.2980, 133.7925),
  sight('marugame-sight-07', '飯野山', '香川県丸亀市飯野町', null, 'https://www.city.marugame.lg.jp/', 34.2690, 133.8330),
  sight('marugame-onsen-01', 'アパホテル〈丸亀駅前大通〉 大浴場', '香川県丸亀市大手町3-6-1', '0570-096-411', 'https://travel.rakuten.co.jp/HOTEL/80598/80598.html', 34.2875, 133.7985),
  sight('marugame-onsen-02', 'スーパーホテル丸亀駅前 天然温泉「京極の湯」 大浴場', '香川県丸亀市通町142-1', null, 'https://travel.rakuten.co.jp/HOTEL/178679/gallery.html', 34.2885, 133.7995)
];
