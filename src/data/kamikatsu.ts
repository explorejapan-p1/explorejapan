/**
 * Kamikatsu Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36302).
 * Do not mix 勝浦 / 神山 / 上板 / 板野 / 石井 / 藍住 / 松茂 / 北島 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const KAMIKATSU = {
  nameJa: '上勝町',
  nameEn: 'Kamikatsu Town',
  reading: 'かみかつちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'kamikatsu',
  jis: '36302',
  jlis: '363021',
  sameAs: 'https://www.kamikatsu.jp/',
  hall: {
    postalCode: '771-4501',
    addressJa: '徳島県勝浦郡上勝町大字福原字下横峯3-1',
    addressEn: '3-1 Shimoyokominé, Fukuhara, Kamikatsu, Katsuura District, Tokushima 771-4501, Japan',
    phone: '0885-46-0111'
  },
  sources: {
    home: 'https://www.kamikatsu.jp/',
    hall: 'https://www.kamikatsu.jp/',
    kanko: 'https://www.tourism-kamikatsu.jp/',
    accessed: '2026-09-05'
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
    accessed: '2026-09-05',
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
    accessed: '2026-09-05',
    altJa,
    altEn
  };
}

/** Cover: File:樫原の棚田.JPG — 重要文化的景観「樫原の棚田」. Not 勝浦 / 神山. */
export const KAMIKATSU_PLACE_PHOTO = wikiPhoto(
  'kashihara-tanada-kamikatsu.jpg',
  'https://commons.wikimedia.org/wiki/File:%E6%A8%AB%E5%8E%9F%E3%81%AE%E6%A3%9A%E7%94%B0.JPG',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Indiana jo',
  'https://commons.wikimedia.org/wiki/User:Indiana_jo',
  '2016-04-29',
  '樫原の棚田（上勝町・重要文化的景観）',
  'Kashihara rice terraces, Kamikatsu Town'
);

const TABELOG_36008813 = 'https://tabelog.com/tokushima/A3601/A360104/36008813/';
const TABELOG_36005766 = 'https://tabelog.com/tokushima/A3601/A360104/36005766/';
const TABELOG_36005429 = 'https://tabelog.com/tokushima/A3601/A360104/36005429/';
const TABELOG_36006052 = 'https://tabelog.com/tokushima/A3601/A360104/36006052/';
const TABELOG_36008995 = 'https://tabelog.com/tokushima/A3601/A360104/36008995/';
const TABELOG_36006727 = 'https://tabelog.com/tokushima/A3601/A360104/36006727/';
const TABELOG_36009157 = 'https://tabelog.com/tokushima/A3601/A360104/36009157/';
const TABELOG_36003090 = 'https://tabelog.com/tokushima/A3601/A360104/36003090/';
const TABELOG_36006782 = 'https://tabelog.com/tokushima/A3601/A360104/36006782/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const KAMIKATSU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '樫原の棚田': KAMIKATSU_PLACE_PHOTO,
  '樫原の棚田及び農村景観': KAMIKATSU_PLACE_PHOTO,
  '上勝町ゼロ・ウェイストセンターWHY': wikiPhoto(
    'zero-waste-center-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Kamikatsucho-zero-waste-center.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-07-23',
    '上勝町ゼロ・ウェイストセンターWHY',
    'Kamikatsu Zero Waste Center WHY'
  ),
  '月頂山 宝珠院 慈眼寺': wikiPhoto(
    'jigenji-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Gecchozan_Jigenji_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-09-26',
    '慈眼寺 山門（上勝町）',
    'Jigen-ji temple gate, Kamikatsu Town'
  ),
  '雄淵・雌淵': wikiPhoto(
    'onbuchi-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Onbuchi.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-05-25',
    '雄淵（上勝町）',
    'Onbuchi pool, Kamikatsu Town'
  ),
  '百間滝': wikiPhoto(
    'hyakkendaki-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Hyakkendaki.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-07-23',
    '百間滝（上勝町）',
    'Hyakken Falls, Kamikatsu Town'
  ),
  '高丸山': wikiPhoto(
    'takamaru-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Takamaru01a.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2014-04-13',
    '高丸山（上勝町・那賀町）',
    'Mount Takamaru, Kamikatsu Town'
  ),
  '剣山スーパー林道': wikiPhoto(
    'tsurugi-rindo-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Tsurugi-san_super_rindo.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Navian',
    'https://commons.wikimedia.org/wiki/User:Navian',
    '2008-11-02',
    '剣山スーパー林道（上勝町）',
    'Tsurugi-san Super Forest Road, Kamikatsu Town'
  ),
  '美愁湖・正木ダム公園': wikiPhoto(
    'masaki-dam-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%AD%A3%E6%9C%A8%E3%83%80%E3%83%A0_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'akiakane',
    'https://commons.wikimedia.org/wiki/File:%E6%AD%A3%E6%9C%A8%E3%83%80%E3%83%A0_-_panoramio.jpg',
    '2008-11-06',
    '正木ダム／美愁湖（上勝町）',
    'Masaki Dam / Bishūko, Kamikatsu Town'
  ),
  '山犬嶽': wikiPhoto(
    'yamainudake-rock-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:%E4%B8%B8%E5%B2%A9_%E3%80%8C%E5%B1%B1%E7%8A%AC%E5%B6%BD%E3%81%8B%E3%82%89%E8%90%BD%E4%B8%8B%E3%81%97%E3%81%9F%E5%B2%A9%E3%80%8D_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'akiakane',
    'https://commons.wikimedia.org/wiki/File:%E4%B8%B8%E5%B2%A9_%E3%80%8C%E5%B1%B1%E7%8A%AC%E5%B6%BD%E3%81%8B%E3%82%89%E8%90%BD%E4%B8%8B%E3%81%97%E3%81%9F%E5%B2%A9%E3%80%8D_-_panoramio.jpg',
    '2008',
    '山犬嶽から落下した丸岩（上勝町）',
    'Maruiwa rock from Mount Yamainudake, Kamikatsu Town'
  ),
  '灌頂ヶ滝': wikiPhoto(
    'kanjogataki-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Kanjogataki_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-09-26',
    '灌頂ヶ滝（上勝町）',
    'Kanjōga Falls, Kamikatsu Town'
  ),
  'たけいち笑店': wikiPhoto(
    'takeichi-shop-kamikatsu.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%AD%A6%E5%B8%82%E7%AC%91%E5%BA%97_-_takeichi_funny_shop_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'akiakane',
    'https://commons.wikimedia.org/wiki/File:%E6%AD%A6%E5%B8%82%E7%AC%91%E5%BA%97_-_takeichi_funny_shop_-_panoramio.jpg',
    '2008',
    'たけいち笑店（上勝町旭）',
    'Takeichi Emoten shop, Kamikatsu Town'
  ),
  'ペルトナーレ': sourcePhoto(
    'kamikatsu-36008813-dish.jpg',
    'ペルトナーレの料理写真',
    'Pertornare food photo',
    TABELOG_36008813,
    '食べログ'
  ),
  'ポールスター': sourcePhoto(
    'kamikatsu-36005429-dish.jpg',
    'ポールスターの料理写真',
    'Polestar food photo',
    TABELOG_36005429,
    '食べログ'
  ),
  '喫茶いくみ': sourcePhoto(
    'kamikatsu-36006052-dish.jpg',
    '喫茶いくみの料理写真',
    'Kissaten Ikumi food photo',
    TABELOG_36006052,
    '食べログ'
  ),
  'せせらぎ食堂': sourcePhoto(
    'kamikatsu-36008995-dish.jpg',
    'せせらぎ食堂の料理写真',
    'Seseragi Shokudō food photo',
    TABELOG_36008995,
    '食べログ'
  ),
  'バーイロリ': sourcePhoto(
    'kamikatsu-36006727-dish.jpg',
    'バーイロリの料理写真',
    'Bar IRORI food photo',
    TABELOG_36006727,
    '食べログ'
  ),
  'ライズアンドウィン ブルーイングカンパニー バーベキューアンド ジェネラルストア': sourcePhoto(
    'kamikatsu-36005766-dish.jpg',
    'RISE & WIN Brewing Co. の料理写真',
    'RISE & WIN Brewing Co. food photo',
    TABELOG_36005766,
    '食べログ'
  ),
  TONPUKU: sourcePhoto(
    'kamikatsu-36009157-dish.jpg',
    'TONPUKUの料理写真',
    'TONPUKU food photo',
    TABELOG_36009157,
    '食べログ'
  ),
  'いっきゅう茶屋': sourcePhoto(
    'kamikatsu-36003090-dish.jpg',
    'いっきゅう茶屋の料理写真',
    'Ikkyū Chaya food photo',
    TABELOG_36003090,
    '食べログ'
  ),
  'あさかげ亭': sourcePhoto(
    'kamikatsu-36006782-dish.jpg',
    'あさかげ亭の料理写真',
    'Asakage-tei food photo',
    TABELOG_36006782,
    '食べログ'
  )
};
