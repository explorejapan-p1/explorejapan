/**
 * Yoshinogawa City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-08-28) and the frozen pack (JIS 36205).
 */
import type {MimaPlacePhoto} from './mima';

export const YOSHINOGAWA = {
  nameJa: '吉野川市',
  nameEn: 'Yoshinogawa',
  reading: 'よしのがわし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'yoshinogawa',
  jis: '36205',
  jlis: '362051',
  sameAs: 'https://www.city.yoshinogawa.lg.jp/',
  hall: {
    postalCode: '776-8611',
    addressJa: '徳島県吉野川市鴨島町鴨島115番地1',
    addressEn: '115-1 Kamojima, Kamojima-cho, Yoshinogawa, Tokushima 776-8611, Japan',
    phone: '0883-22-2222'
  },
  sources: {
    home: 'https://www.city.yoshinogawa.lg.jp/',
    hall: 'https://www.city.yoshinogawa.lg.jp/docs/2012101000030/',
    stay: 'https://www.city.yoshinogawa.lg.jp/docs/2010101500109/',
    spots: 'https://www.city.yoshinogawa.lg.jp/docs/2010101500123/',
    kanko: 'https://www.city.yoshinogawa.lg.jp/kankoguide/',
    accessed: '2026-08-28'
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
    accessed: '2026-08-28',
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
    accessed: '2026-08-28',
    altJa,
    altEn
  };
}

export const YOSHINOGAWA_PLACE_PHOTO = wikiPhoto(
  'kawashima-jo.jpg',
  'https://commons.wikimedia.org/wiki/File:Kawasimazyo20220527_1.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Dokudami',
  'https://commons.wikimedia.org/wiki/User:Dokudami',
  '2022-05-27',
  '川島城（吉野川市川島町）',
  'Kawashima Castle, Kawashima-cho, Yoshinogawa'
);

const TABELOG_OSHO = 'https://tabelog.com/tokushima/A3603/A360301/36000755/';
const TABELOG_AOYAGI = 'https://tabelog.com/tokushima/A3603/A360301/36004103/';
const TABELOG_HANANZU = 'https://tabelog.com/tokushima/A3603/A360301/36001823/';
const TABELOG_YAMA = 'https://tabelog.com/tokushima/A3603/A360301/36005006/';
const TABELOG_HANTEN = 'https://tabelog.com/tokushima/A3603/A360301/36001581/';
const TABELOG_JUN = 'https://tabelog.com/tokushima/A3603/A360301/36006583/';
const TABELOG_AO = 'https://tabelog.com/tokushima/A3603/A360301/36008974/';
const FUIGO_ROOM = 'https://fuigo-onsen.com/room.html';
const MISATO_HOME = 'https://misato-spica.com/';
const ACCESS_HOME = 'https://access-kamojima.com/';

/** Exact pack/travel name_ja only. No 美馬 or つるぎ photos. */
export const YOSHINOGAWA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '川島城': YOSHINOGAWA_PLACE_PHOTO,
  '川島公園': wikiPhoto(
    'kawashima-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Kawashima_Park.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2019-05-26',
    '川島公園（吉野川市川島町川島）',
    'Kawashima Park, Kawashima-cho, Yoshinogawa'
  ),
  '岩の鼻展望台': wikiPhoto(
    'iwanohana.jpg',
    'https://commons.wikimedia.org/wiki/File:Iwanohana20220527_1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2022-05-27',
    '岩の鼻展望台（吉野川市川島町）',
    'Iwanohana Observatory, Kawashima-cho, Yoshinogawa'
  ),
  '江川・鴨島公園': wikiPhoto(
    'kamojima-park.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%B4%A8%E5%B3%B6%E5%85%AC%E5%9C%92_%E5%85%A8%E6%99%AF.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'ポンダ宮',
    'https://commons.wikimedia.org/wiki/User:%E3%83%9D%E3%83%B3%E3%83%80%E5%AE%AE',
    '2010-04-05',
    '江川の対岸からみた鴨島公園（吉野川市鴨島町）',
    'Kamojima Park seen across Egawa, Yoshinogawa'
  ),
  '江川湧水源': wikiPhoto(
    'egawa-yusui.jpg',
    'https://commons.wikimedia.org/wiki/File:Egawa_no_yuusui_20260407_1.jpg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Araiyasushige',
    'https://commons.wikimedia.org/wiki/User:Araiyasushige',
    '2026-04-07',
    '江川の湧水（吉野川市）',
    'Egawa spring, Yoshinogawa'
  ),
  '藤井寺': wikiPhoto(
    'fujiidera.jpg',
    'https://commons.wikimedia.org/wiki/File:Huziidera_20250422_1.jpg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Araiyasushige',
    'https://commons.wikimedia.org/wiki/User:Araiyasushige',
    '2025-04-22',
    '藤井寺 奥の院（吉野川市鴨島町）',
    'Fujii-dera inner sanctuary, Kamojima-cho, Yoshinogawa'
  ),
  '壇の大クス': wikiPhoto(
    'dan-no-okusu.jpg',
    'https://commons.wikimedia.org/wiki/File:Dannookusu.jpeg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-09-15',
    '壇の大クス（吉野川市鴨島町森藤）',
    'Dan-no-okusu camphor, Kamojima-cho, Yoshinogawa'
  ),
  'バンブーパーク': wikiPhoto(
    'bamboo-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Bamboo_Park.jpeg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-09-18',
    'バンブーパーク（吉野川市山川町）',
    'Bamboo Park, Yamakawa-cho, Yoshinogawa'
  ),
  '水神の滝': wikiPhoto(
    'suijin-no-taki.jpg',
    'https://commons.wikimedia.org/wiki/File:Suijin-no-taki.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2019-05-03',
    '水神の滝（吉野川市川島町山田湯吸）',
    'Suijin-no-taki waterfall, Kawashima-cho, Yoshinogawa'
  ),
  '高開の石積み': wikiPhoto(
    'takagai-ishizumi.jpg',
    'https://commons.wikimedia.org/wiki/File:Takagai_no_Ishizumi.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2019-04-16',
    '高開の石積み（吉野川市美郷）',
    'Takagai stone terraces, Misato, Yoshinogawa'
  ),
  '向麻山公園': wikiPhoto(
    'koasayama-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Koasayama_Park.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2019-05-17',
    '向麻山公園（吉野川市鴨島町上浦）',
    'Koasayama Park, Kamojima-cho, Yoshinogawa'
  ),
  '上桜公園': wikiPhoto(
    'uesakura-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Uesakura_Park.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Skate-song',
    'https://commons.wikimedia.org/wiki/User:Skate-song',
    '2017-11-01',
    '上桜公園と大正池（吉野川市）',
    'Uesakura Park and Taisho Pond, Yoshinogawa'
  ),
  '上桜城址': wikiPhoto(
    'uezakura-jo.jpg',
    'https://commons.wikimedia.org/wiki/File:Uesakura_jo_ato.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2008-02-15',
    '上桜城址（吉野川市）',
    'Uezakura Castle site, Yoshinogawa'
  ),
  '川島神社': wikiPhoto(
    'kawashima-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:Kawashimajinjya.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2019-05-26',
    '川島神社（吉野川市川島町川島）',
    'Kawashima Shrine, Kawashima-cho, Yoshinogawa'
  ),
  '高越寺': wikiPhoto(
    'koutsu-ji.jpg',
    'https://commons.wikimedia.org/wiki/File:Kouetuzi01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2015-06-15',
    '高越寺の境内（吉野川市）',
    'Kōtsu-ji precincts, Yoshinogawa'
  ),
  '高越山': wikiPhoto(
    'koutsu-san.jpg',
    'https://commons.wikimedia.org/wiki/File:Kouetu01.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2014-04-13',
    '高越山（吉野川市）',
    'Mount Kōtsu, Yoshinogawa'
  ),
  '母衣暮露滝': wikiPhoto(
    'boroboro-taki.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%AF%8D%E8%A1%A3%E6%9A%AE%E9%9C%B2%E3%81%AE%E6%BB%9D_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'ball banban',
    'https://commons.wikimedia.org/wiki/User:Ball_banban',
    '2010-05-23',
    '母衣暮露滝（吉野川市美郷）',
    'Boroboro Falls, Misato, Yoshinogawa'
  ),
  'ふいご温泉': sourcePhoto(
    'fuigo-onsen-bath.jpg',
    'ふいご温泉の大浴場（吉野川市山川町）',
    'Fuigo Onsen large bath, Yamakawa-cho, Yoshinogawa',
    FUIGO_ROOM,
    'ふいご温泉'
  ),
  '美郷の湯': sourcePhoto(
    'misato-2.jpg',
    '美郷の湯の浴槽（吉野川市美郷）',
    'Misato-no-yu bath, Misato, Yoshinogawa',
    MISATO_HOME,
    '四季芳る・美郷の湯'
  ),
  'ビジネスホテル アクセス鴨島': sourcePhoto(
    'access-kamojima-room.jpg',
    'ビジネスホテル アクセス鴨島の客室（吉野川市鴨島町）',
    'Guest room at Business Hotel Access Kamojima, Yoshinogawa',
    ACCESS_HOME,
    'ビジネスホテル アクセス鴨島'
  ),
  '中華そば 王将': sourcePhoto(
    'osho-gyoza.jpg',
    '中華そば 王将の餃子（吉野川市鴨島町）',
    'Gyoza at Chuka-soba Osho, Kamojima-cho, Yoshinogawa',
    TABELOG_OSHO,
    '食べログ'
  ),
  'お食事処 青柳': sourcePhoto(
    'aoyagi.jpg',
    'お食事処 青柳の刺身定食（吉野川市鴨島町）',
    'Sashimi set at Shokujidokoro Aoyagi, Yoshinogawa',
    TABELOG_AOYAGI,
    '食べログ'
  ),
  '花杏豆 鴨島店': sourcePhoto(
    'hananzu.jpg',
    '花杏豆 鴨島店のモーニング（吉野川市鴨島町）',
    'Morning set at Hananzu Kamojima, Yoshinogawa',
    TABELOG_HANANZU,
    '食べログ'
  ),
  'セルフうどん やま 鴨島店': sourcePhoto(
    'yama-udon.jpg',
    'セルフうどん やま 鴨島店のうどん（吉野川市鴨島町）',
    'Udon at Self Udon Yama Kamojima, Yoshinogawa',
    TABELOG_YAMA,
    '食べログ'
  ),
  '鴨島飯店': sourcePhoto(
    'kamojima-hanten.jpg',
    '鴨島飯店の焼きそば（吉野川市鴨島町）',
    'Yakisoba at Kamojima Hanten, Yoshinogawa',
    TABELOG_HANTEN,
    '食べログ'
  ),
  '海鮮活魚 潤': sourcePhoto(
    'kaisen-jun.jpg',
    '海鮮活魚 潤の舟盛り（吉野川市鴨島町）',
    'Sashimi boat at Kaisen Katsugyo Jun, Yoshinogawa',
    TABELOG_JUN,
    '食べログ'
  ),
  '焼肉 青': sourcePhoto(
    'yakiniku-ao.jpg',
    '焼肉 青の和牛（吉野川市鴨島町）',
    'Wagyu at Yakiniku Ao, Kamojima-cho, Yoshinogawa',
    TABELOG_AO,
    '食べログ'
  )
};
