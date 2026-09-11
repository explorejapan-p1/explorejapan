/**
 * Akitakata City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34214. Thirteenth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const AKITAKATA = {
  nameJa: '安芸高田市',
  nameEn: 'Akitakata',
  reading: 'あきたかたし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'akitakata',
  jis: '34214',
  jlis: '342140',
  sameAs: 'https://www.akitakata.jp/',
  hall: {
    postalCode: '731-0592',
    addressJa: '広島県安芸高田市吉田町吉田791番地',
    addressEn: '791 Yoshida, Yoshida-cho, Akitakata City, Hiroshima 731-0592, Japan',
    phone: '0826-42-2111'
  },
  sources: {
    home: 'https://www.akitakata.jp/',
    hall: 'https://www.akitakata.jp/',
    kanko: 'https://www.akitakata.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34214/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const AKITAKATA_EXPECTED_ROW_COUNT = 9;
export const AKITAKATA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 安芸高田丘陵景観. Hero title remains municipality name only. Unique (no wakimachi). */
export const AKITAKATA_PLACE_PHOTO = wikiPhoto(
  "akitakata-cover-landscape.jpg",
  "https://commons.wikimedia.org/wiki/File%3AAkitakata_Hiroshima_2023_Aug_20_10-09AM.jpeg",
  "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0",
  "Nesnad", "https://commons.wikimedia.org/wiki/File%3AAkitakata_Hiroshima_2023_Aug_20_10-09AM.jpeg", "2023",
  "安芸高田の丘陵景観", "Akitakata hillside landscape"
);

export const AKITAKATA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "ラーメン長洲": sourcePhoto("akitakata-34020690-dish.jpg", "ラーメン長洲の料理写真", "ラーメン長洲 food photo", "https://tabelog.com/hiroshima/A3405/A340503/34020690/", '食べログ'),
  "サンパラソル": sourcePhoto("akitakata-34020319-dish.jpg", "サンパラソルの料理写真", "サンパラソル food photo", "https://tabelog.com/hiroshima/A3405/A340503/34020319/", '食べログ'),
  "鮪専門 かざぐるま": sourcePhoto("akitakata-34028965-dish.jpg", "鮪専門 かざぐるまの料理写真", "鮪専門 かざぐるま food photo", "https://tabelog.com/hiroshima/A3405/A340503/34028965/", '食べログ'),
  "にゃんこ屋": sourcePhoto("akitakata-34011988-dish.jpg", "にゃんこ屋の料理写真", "にゃんこ屋 food photo", "https://tabelog.com/hiroshima/A3405/A340503/34011988/", '食べログ'),
  "なかむら": sourcePhoto("akitakata-34031973-dish.jpg", "なかむらの料理写真", "なかむら food photo", "https://tabelog.com/hiroshima/A3405/A340503/34031973/", '食べログ'),
  "縄文あいす　ひとは館": sourcePhoto("akitakata-34011989-dish.jpg", "縄文あいす　ひとは館の料理写真", "縄文あいす　ひとは館 food photo", "https://tabelog.com/hiroshima/A3405/A340503/34011989/", '食べログ'),
  "キッチンよしだ": sourcePhoto("akitakata-34005899-dish.jpg", "キッチンよしだの料理写真", "キッチンよしだ food photo", "https://tabelog.com/hiroshima/A3405/A340503/34005899/", '食べログ'),
  "みわ": sourcePhoto("akitakata-34030279-dish.jpg", "みわの料理写真", "みわ food photo", "https://tabelog.com/hiroshima/A3405/A340503/34030279/", '食べログ'),
  "山崎": sourcePhoto("akitakata-34029302-dish.jpg", "山崎の料理写真", "山崎 food photo", "https://tabelog.com/hiroshima/A3405/A340503/34029302/", '食べログ'),
  "台湾料理 福祥順 吉田店": sourcePhoto("akitakata-34018447-dish.jpg", "台湾料理 福祥順 吉田店の料理写真", "台湾料理 福祥順 吉田店 food photo", "https://tabelog.com/hiroshima/A3405/A340503/34018447/", '食べログ'),
  "つくしんぼ": sourcePhoto("akitakata-34013957-dish.jpg", "つくしんぼの料理写真", "つくしんぼ food photo", "https://tabelog.com/hiroshima/A3405/A340503/34013957/", '食べログ'),
  "ふみちゃん家のたまご": sourcePhoto("akitakata-34032977-dish.jpg", "ふみちゃん家のたまごの料理写真", "ふみちゃん家のたまご food photo", "https://tabelog.com/hiroshima/A3405/A340503/34032977/", '食べログ'),
  "長浜ラーメン 博多屋 吉田店": sourcePhoto("akitakata-34013617-dish.jpg", "長浜ラーメン 博多屋 吉田店の料理写真", "長浜ラーメン 博多屋 吉田店 food photo", "https://tabelog.com/hiroshima/A3405/A340503/34013617/", '食べログ'),
  "本郷パーキングエリア（上り線）スナックコーナー": sourcePhoto("akitakata-34013327-dish.jpg", "本郷パーキングエリア（上り線）スナックコーナーの料理写真", "本郷パーキングエリア（上り線）スナックコーナー food photo", "https://tabelog.com/hiroshima/A3405/A340503/34013327/", '食べログ'),
  "シャルムお好み焼店": sourcePhoto("akitakata-34009326-dish.jpg", "シャルムお好み焼店の料理写真", "シャルムお好み焼店 food photo", "https://tabelog.com/hiroshima/A3405/A340503/34009326/", '食べログ'),
  "ささき亭": sourcePhoto("akitakata-34020100-dish.jpg", "ささき亭の料理写真", "ささき亭 food photo", "https://tabelog.com/hiroshima/A3405/A340503/34020100/", '食べログ'),
  "たかみや湯の森　福寿荘": sourcePhoto("akitakata-stay-h158368.jpg", "たかみや湯の森　福寿荘の客室写真", "たかみや湯の森　福寿荘 room photo", "https://travel.rakuten.co.jp/HOTEL/158368/158368.html", '楽天トラベル'),
  "神楽門前湯治村": sourcePhoto("akitakata-stay-h168595.jpg", "神楽門前湯治村の客室写真", "神楽門前湯治村 room photo", "https://travel.rakuten.co.jp/HOTEL/168595/168595.html", '楽天トラベル'),
  "豪農の家・安芸高田": sourcePhoto("akitakata-stay-h171966.jpg", "豪農の家・安芸高田の客室写真", "豪農の家・安芸高田 room photo", "https://travel.rakuten.co.jp/HOTEL/171966/171966.html", '楽天トラベル'),
  "里山Ｈａｎａｒｅ": sourcePhoto("akitakata-stay-h188249.jpg", "里山Ｈａｎａｒｅの客室写真", "里山Ｈａｎａｒｅ room photo", "https://travel.rakuten.co.jp/HOTEL/188249/188249.html", '楽天トラベル'),
  "たかみや湯の森　福寿荘 露天檜風呂": sourcePhoto("akitakata-onsen-h158368.jpg", "たかみや湯の森　福寿荘 露天檜風呂の写真", "たかみや湯の森　福寿荘 露天檜風呂 bath photo", "https://travel.rakuten.co.jp/HOTEL/158368/gallery.html", '楽天トラベル'),
  "神楽門前湯治村 天然温泉": sourcePhoto("akitakata-onsen-h168595.jpg", "神楽門前湯治村 天然温泉の写真", "神楽門前湯治村 天然温泉 bath photo", "https://travel.rakuten.co.jp/HOTEL/168595/gallery.html", '楽天トラベル'),
  "豪農の家・安芸高田 露天風呂（1）": sourcePhoto("akitakata-onsen-h171966.jpg", "豪農の家・安芸高田 露天風呂（1）の写真", "豪農の家・安芸高田 露天風呂（1） bath photo", "https://travel.rakuten.co.jp/HOTEL/171966/gallery.html", '楽天トラベル'),
  "里山Ｈａｎａｒｅ 風呂": sourcePhoto("akitakata-onsen-h188249.jpg", "里山Ｈａｎａｒｅ 風呂の写真", "里山Ｈａｎａｒｅ 風呂 bath photo", "https://travel.rakuten.co.jp/HOTEL/188249/gallery.html", '楽天トラベル'),
  "神楽門前湯治村（観光）": wikiPhoto(
  "akitakata-kaguramonzen.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E7%A5%9E%E6%A5%BD%E9%96%80%E5%89%8D%E6%B9%AF%E6%B2%BB%E6%9D%91.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E7%A5%9E%E6%A5%BD%E9%96%80%E5%89%8D%E6%B9%AF%E6%B2%BB%E6%9D%91.jpg", "2009",
  "神楽門前湯治村", "Kagura Gate Hot Spring Village"
),
  "吉田郡山城跡": wikiPhoto(
  "akitakata-kouriyama-honmaru.jpg",
  "https://commons.wikimedia.org/wiki/File%3AYoshida-kouriyama_Castle_Honmaru.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "TT mk2", "https://commons.wikimedia.org/wiki/File%3AYoshida-kouriyama_Castle_Honmaru.JPG", "2013",
  "吉田郡山城跡本丸", "Yoshida-Kōriyama Castle honmaru ruins"
),
  "三矢の訓碑": wikiPhoto(
  "akitakata-sanya.jpg",
  "https://commons.wikimedia.org/wiki/File%3ATeachings_of_three_arrows_Monument.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "TT mk2", "https://commons.wikimedia.org/wiki/File%3ATeachings_of_three_arrows_Monument.JPG", "2013",
  "三矢の訓碑", "Three Arrows Teaching monument"
),
  "毛利元就墓所": wikiPhoto(
  "akitakata-motonari-tomb.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMotonari_Mouri%27s_Tombstone.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "TT mk2", "https://commons.wikimedia.org/wiki/File%3AMotonari_Mouri%27s_Tombstone.JPG", "2013",
  "毛利元就墓所", "Mōri Motonari tomb"
),
  "百万一心の碑": wikiPhoto(
  "akitakata-hyakumann.jpg",
  "https://commons.wikimedia.org/wiki/File%3AHyakumann-Issinn_Monument.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "TT mk2", "https://commons.wikimedia.org/wiki/File%3AHyakumann-Issinn_Monument.JPG", "2013",
  "百万一心の碑", "Hyakuman Isshin monument"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: AKITAKATA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: AKITAKATA.sources.accessed};
}

export const AKITAKATA_FACILITIES: readonly FacilityRow[] = [
  sight("akitakata-sight-01", "神楽門前湯治村（観光）", "広島県安芸高田市美土里町本郷14627", null, "https://commons.wikimedia.org/wiki/File%3A%E7%A5%9E%E6%A5%BD%E9%96%80%E5%89%8D%E6%B9%AF%E6%B2%BB%E6%9D%91.jpg", 34.7218791, 132.6297414),
  sight("akitakata-sight-02", "吉田郡山城跡", "広島県安芸高田市吉田町", null, "https://commons.wikimedia.org/wiki/File%3AYoshida-kouriyama_Castle_Honmaru.JPG", 34.6736204, 132.7095652),
  sight("akitakata-sight-03", "三矢の訓碑", "広島県安芸高田市吉田町相合", null, "https://commons.wikimedia.org/wiki/File%3ATeachings_of_three_arrows_Monument.JPG", 34.6703529, 132.7037401),
  sight("akitakata-sight-04", "毛利元就墓所", "広島県安芸高田市吉田町山部", null, "https://commons.wikimedia.org/wiki/File%3AMotonari_Mouri%27s_Tombstone.JPG", 34.6744421, 132.7039573),
  sight("akitakata-sight-05", "百万一心の碑", "広島県安芸高田市吉田町山部", null, "https://commons.wikimedia.org/wiki/File%3AHyakumann-Issinn_Monument.JPG", 34.6744135, 132.7038417),
  sight("akitakata-onsen-01", "たかみや湯の森　福寿荘 露天檜風呂", "広島県安芸高田市高宮町原田1779-1", "0826-59-0059", "https://travel.rakuten.co.jp/HOTEL/158368/gallery.html", null, null),
  sight("akitakata-onsen-02", "神楽門前湯治村 天然温泉", "広島県安芸高田市美土里町本郷14627", "0826-54-0888", "https://travel.rakuten.co.jp/HOTEL/168595/gallery.html", null, null),
  sight("akitakata-onsen-03", "豪農の家・安芸高田 露天風呂（1）", "広島県安芸高田市吉田町上入江871", "03-6905-6825", "https://travel.rakuten.co.jp/HOTEL/171966/gallery.html", null, null),
  sight("akitakata-onsen-04", "里山Ｈａｎａｒｅ 風呂", "広島県安芸高田市吉田町上入江1013", "03-6905-6825", "https://travel.rakuten.co.jp/HOTEL/188249/gallery.html", null, null),
];
