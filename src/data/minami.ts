/**
 * Minami Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07) and the frozen pack (JIS 36387).
 * Do not mix 牟岐 / 海陽 / 那賀 / 佐那河内 / 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 藍住 / 松茂 / 北島 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const MINAMI = {
  nameJa: '美波町',
  nameEn: 'Minami Town',
  reading: 'みなみちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'minami',
  jis: '36387',
  jlis: '363871',
  sameAs: 'https://www.town.minami.lg.jp/',
  hall: {
    postalCode: '779-2395',
    addressJa: '徳島県海部郡美波町奥河内字本村18-1',
    addressEn: '18-1 Honmura, Okukawachi, Minami, Kaifu District, Tokushima 779-2395, Japan',
    phone: '0884-77-1111'
  },
  sources: {
    home: 'https://www.town.minami.lg.jp/',
    hall: 'https://www.town.minami.lg.jp/',
    kanko: 'https://www.town.minami.lg.jp/docs/182.html',
    accessed: '2026-09-07'
  }
} as const;

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

/** Cover: File:Yakuo-ji,_Yugi_Tower_01.jpg — 薬王寺瑜祇塔. Not 牟岐 / 那賀. */
export const MINAMI_PLACE_PHOTO = wikiPhoto(
  'yakuouji-yugito-minami.jpg',
  'https://commons.wikimedia.org/wiki/File:Yakuo-ji,_Yugi_Tower_01.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Naokijp',
  'https://commons.wikimedia.org/wiki/User:Naokijp',
  '2019-07-15',
  '薬王寺瑜祇塔（美波町）',
  'Yugi Tower at Yakuo-ji, Minami Town'
);

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const MINAMI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '薬王寺瑜祇塔': MINAMI_PLACE_PHOTO,
  '日和佐うみがめ博物館カレッタ': wikiPhoto(
  'caretta-hiwasa-minami.jpg',
  'https://commons.wikimedia.org/wiki/File:Hiwasa_Chelonian_Museum_Caretta_2025.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Totti',
  'https://commons.wikimedia.org/wiki/User:Totti',
  '2025-07-27',
  '日和佐うみがめ博物館カレッタ（美波町）',
  'Hiwasa Sea Turtle Museum Caretta, Minami Town'
),
  '道の駅日和佐': wikiPhoto(
  'michinoeki-hiwasa-minami.jpg',
  'https://commons.wikimedia.org/wiki/File:Michinoeki_Hiwasa_(2012).jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Sunport1216',
  'https://commons.wikimedia.org/wiki/User:Sunport1216',
  '2012-04-05',
  '道の駅日和佐（美波町）',
  'Michinoeki Hiwasa, Minami Town'
),
  '南阿波サンライン': wikiPhoto(
  'minamiawa-sunline-minami.jpg',
  'https://commons.wikimedia.org/wiki/File:%E5%8D%97%E9%98%AA%E6%B3%A2%E3%82%B5%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3_-_panoramio.jpg',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0/',
  'Yobito KAYANUMA',
  'https://web.archive.org/web/20161017194716/http://www.panoramio.com/user/5198788?with_photo_id=48381945',
  '2011-02-12',
  '南阿波サンライン（美波町）',
  'Minami-Awa Sunline, Minami Town'
),
  '日和佐城': wikiPhoto(
  'hiwasa-castle-minami.jpg',
  'https://commons.wikimedia.org/wiki/File:Hiwasa_castle_(2015).JPG',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Sunport1216',
  'https://commons.wikimedia.org/wiki/User:Sunport1216',
  '2015-09-18',
  '日和佐城（美波町）',
  'Hiwasa Castle, Minami Town'
),
  '恵比須浜キャンプ村': wikiPhoto(
  'ebisuhama-minami.jpg',
  'https://commons.wikimedia.org/wiki/File:%E7%BE%8E%E6%B3%A2%E7%94%BA%E6%81%B5%E6%AF%94%E9%A0%88%E6%B5%9C_-_panoramio.jpg',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0/',
  'Yobito KAYANUMA',
  'https://web.archive.org/web/20161016192813/http://www.panoramio.com/user/5198788?with_photo_id=48381845',
  '2011-02-12',
  '恵比須浜（美波町）',
  'Ebisuhama beach, Minami Town'
),
  "イザリcafe": sourcePhoto(
    "minami-36003206-dish.jpg",
    "イザリcafeの料理写真",
    "イザリcafe food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36003206/",
    '食べログ'
  ),
  "ひわさ屋": sourcePhoto(
    "minami-36000905-dish.jpg",
    "ひわさ屋の料理写真",
    "ひわさ屋 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36000905/",
    '食べログ'
  ),
  "豊田屋": sourcePhoto(
    "minami-36004754-dish.jpg",
    "豊田屋の料理写真",
    "豊田屋 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36004754/",
    '食べログ'
  ),
  "やすらぎ": sourcePhoto(
    "minami-36000699-dish.jpg",
    "やすらぎの料理写真",
    "やすらぎ food photo",
    "https://tabelog.com/tokushima/A3601/A360103/36000699/",
    '食べログ'
  ),
  "手打ち蕎麦 美波乃風": sourcePhoto(
    "minami-36008514-dish.jpg",
    "手打ち蕎麦 美波乃風の料理写真",
    "手打ち蕎麦 美波乃風 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36008514/",
    '食べログ'
  ),
  "皐月庵": sourcePhoto(
    "minami-36009181-dish.jpg",
    "皐月庵の料理写真",
    "皐月庵 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36009181/",
    '食べログ'
  ),
  "平山食堂": sourcePhoto(
    "minami-36004757-dish.jpg",
    "平山食堂の料理写真",
    "平山食堂 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36004757/",
    '食べログ'
  ),
  "民宿ゆき荘": sourcePhoto(
    "minami-36004862-dish.jpg",
    "民宿ゆき荘の料理写真",
    "民宿ゆき荘 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36004862/",
    '食べログ'
  ),
  "明山荘": sourcePhoto(
    "minami-36005276-dish.jpg",
    "明山荘の料理写真",
    "明山荘 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36005276/",
    '食べログ'
  ),
  "白い燈台": sourcePhoto(
    "minami-36008689-dish.jpg",
    "白い燈台の料理写真",
    "白い燈台 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36008689/",
    '食べログ'
  ),
  "クニ舛田": sourcePhoto(
    "minami-36006402-dish.jpg",
    "クニ舛田の料理写真",
    "クニ舛田 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36006402/",
    '食べログ'
  ),
  "さくら庵": sourcePhoto(
    "minami-36009231-dish.jpg",
    "さくら庵の料理写真",
    "さくら庵 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36009231/",
    '食べログ'
  ),
  "宝食堂": sourcePhoto(
    "minami-36002472-dish.jpg",
    "宝食堂の料理写真",
    "宝食堂 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36002472/",
    '食べログ'
  ),
  "ハラトウフテン": sourcePhoto(
    "minami-36008342-dish.jpg",
    "ハラトウフテンの料理写真",
    "ハラトウフテン food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36008342/",
    '食べログ'
  ),
  "ミルアン": sourcePhoto(
    "minami-36007942-dish.jpg",
    "ミルアンの料理写真",
    "ミルアン food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36007942/",
    '食べログ'
  ),
  "Cafe 初花": sourcePhoto(
    "minami-36006447-dish.jpg",
    "Cafe 初花の料理写真",
    "Cafe 初花 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36006447/",
    '食べログ'
  ),
  "十一屋 菓子店": sourcePhoto(
    "minami-36004353-dish.jpg",
    "十一屋 菓子店の料理写真",
    "十一屋 菓子店 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36004353/",
    '食べログ'
  ),
  "TEISHABA cafe": sourcePhoto(
    "minami-36009167-dish.jpg",
    "TEISHABA cafeの料理写真",
    "TEISHABA cafe food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36009167/",
    '食べログ'
  ),
  "かめまんねん": sourcePhoto(
    "minami-36009143-dish.jpg",
    "かめまんねんの料理写真",
    "かめまんねん food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36009143/",
    '食べログ'
  ),
  "ドライブイン 海賊舟": sourcePhoto(
    "minami-36003555-dish.jpg",
    "ドライブイン 海賊舟の料理写真",
    "ドライブイン 海賊舟 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36003555/",
    '食べログ'
  ),
  "てこ屋": sourcePhoto(
    "minami-36002245-dish.jpg",
    "てこ屋の料理写真",
    "てこ屋 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36002245/",
    '食べログ'
  ),
  "アジュール昭吾堂": sourcePhoto(
    "minami-36006301-dish.jpg",
    "アジュール昭吾堂の料理写真",
    "アジュール昭吾堂 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36006301/",
    '食べログ'
  ),
  "菖蒲みやげ店": sourcePhoto(
    "minami-36008172-dish.jpg",
    "菖蒲みやげ店の料理写真",
    "菖蒲みやげ店 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36008172/",
    '食べログ'
  ),
  "大みん軒": sourcePhoto(
    "minami-36000985-dish.jpg",
    "大みん軒の料理写真",
    "大みん軒 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36000985/",
    '食べログ'
  ),
  "阿波尾鶏中華そば藍庵": sourcePhoto(
    "minami-36007132-dish.jpg",
    "阿波尾鶏中華そば藍庵の料理写真",
    "阿波尾鶏中華そば藍庵 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36007132/",
    '食べログ'
  ),
  "タートル": sourcePhoto(
    "minami-36002924-dish.jpg",
    "タートルの料理写真",
    "タートル food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36002924/",
    '食べログ'
  ),
  "グリル漁火": sourcePhoto(
    "minami-36003168-dish.jpg",
    "グリル漁火の料理写真",
    "グリル漁火 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36003168/",
    '食べログ'
  ),
  "とば作 日和佐店": sourcePhoto(
    "minami-36001633-dish.jpg",
    "とば作 日和佐店の料理写真",
    "とば作 日和佐店 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36001633/",
    '食べログ'
  ),
  "味登里": sourcePhoto(
    "minami-36009243-dish.jpg",
    "味登里の料理写真",
    "味登里 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36009243/",
    '食べログ'
  ),
  "無量寿": sourcePhoto(
    "minami-36004703-dish.jpg",
    "無量寿の料理写真",
    "無量寿 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36004703/",
    '食べログ'
  ),
  "お好み焼天花": sourcePhoto(
    "minami-36002181-dish.jpg",
    "お好み焼天花の料理写真",
    "お好み焼天花 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36002181/",
    '食べログ'
  ),
  "そうざい屋 しのき": sourcePhoto(
    "minami-36008916-dish.jpg",
    "そうざい屋 しのきの料理写真",
    "そうざい屋 しのき food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36008916/",
    '食べログ'
  ),
  "オモニ": sourcePhoto(
    "minami-36007073-dish.jpg",
    "オモニの料理写真",
    "オモニ food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36007073/",
    '食べログ'
  ),
  "居酒屋つくし": sourcePhoto(
    "minami-36006389-dish.jpg",
    "居酒屋つくしの料理写真",
    "居酒屋つくし food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36006389/",
    '食べログ'
  ),
  "停車場": sourcePhoto(
    "minami-36001844-dish.jpg",
    "停車場の料理写真",
    "停車場 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36001844/",
    '食べログ'
  ),
  "ラトリエ あべ": sourcePhoto(
    "minami-36005067-dish.jpg",
    "ラトリエ あべの料理写真",
    "ラトリエ あべ food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36005067/",
    '食べログ'
  ),
  "まめぼんcafe": sourcePhoto(
    "minami-36006072-dish.jpg",
    "まめぼんcafeの料理写真",
    "まめぼんcafe food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36006072/",
    '食べログ'
  ),
  "樹園": sourcePhoto(
    "minami-36004911-dish.jpg",
    "樹園の料理写真",
    "樹園 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36004911/",
    '食べログ'
  ),
  "道の駅 日和佐": sourcePhoto(
    "minami-36004164-dish.jpg",
    "道の駅 日和佐の料理写真",
    "道の駅 日和佐 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36004164/",
    '食べログ'
  ),
  "むらかみ": sourcePhoto(
    "minami-36003205-dish.jpg",
    "むらかみの料理写真",
    "むらかみ food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36003205/",
    '食べログ'
  ),
  "平和園": sourcePhoto(
    "minami-36006403-dish.jpg",
    "平和園の料理写真",
    "平和園 food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36006403/",
    '食べログ'
  ),
  "Classic Burgers": sourcePhoto(
    "minami-36009045-dish.jpg",
    "Classic Burgersの料理写真",
    "Classic Burgers food photo",
    "https://tabelog.com/tokushima/A3602/A360203/36009045/",
    '食べログ'
  ),
  'えびす洞温泉 ホテル 白い燈台': sourcePhoto(
    'minami-stay-01.jpg',
    'えびす洞温泉 ホテル 白い燈台の客室・外観写真',
    'えびす洞温泉 ホテル 白い燈台 room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/4799/4799.html',
    '楽天トラベル'
  ),
  'ビジネスホテル・ケアンズ': sourcePhoto(
    'minami-stay-02.jpg',
    'ビジネスホテル・ケアンズの客室・外観写真',
    'ビジネスホテル・ケアンズ room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/30831/30831.html',
    '楽天トラベル'
  ),
  '南阿波サンラインモビレージ': sourcePhoto(
    'minami-stay-03.jpg',
    '南阿波サンラインモビレージの客室・外観写真',
    '南阿波サンラインモビレージ room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/108774/108774.html',
    '楽天トラベル'
  ),
  '花乃宿': sourcePhoto(
    'minami-stay-04.jpg',
    '花乃宿の客室・外観写真',
    '花乃宿 room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/196323/196323.html',
    '楽天トラベル'
  ),
  '民宿 明山荘': sourcePhoto(
    'minami-stay-05.jpg',
    '民宿 明山荘の客室・外観写真',
    '民宿 明山荘 room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/184182/184182.html',
    '楽天トラベル'
  ),

};
