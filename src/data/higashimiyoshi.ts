/**
 * Higashimiyoshi Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-05) and the frozen pack (JIS 36489).
 * Do not mix 三好市 (36208) or 祖谷 / 大歩危 / Oboke / Iya Files.
 */
import type {MimaPlacePhoto} from './mima';

export const HIGASHIMIYOSHI = {
  nameJa: '東みよし町',
  nameEn: 'Higashimiyoshi',
  reading: 'ひがしみよしちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'higashimiyoshi',
  jis: '36489',
  jlis: '364894',
  sameAs: 'https://www.town.higashimiyoshi.lg.jp/',
  hall: {
    postalCode: '779-4795',
    addressJa: '徳島県三好郡東みよし町加茂3360番地',
    addressEn: '3360 Kamo, Higashimiyoshi, Miyoshi District, Tokushima 779-4795, Japan',
    phone: '0883-82-6303'
  },
  sources: {
    home: 'https://www.town.higashimiyoshi.lg.jp/',
    hall: 'https://www.town.higashimiyoshi.lg.jp/',
    kanko: 'https://www.town.higashimiyoshi.lg.jp/docs/996.html',
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

/** Cover: File:Kamo-no-Okusu-1.jpg — 加茂の大クス, Higashimiyoshi. Not Iya / Oboke / Bizan. */
export const HIGASHIMIYOSHI_PLACE_PHOTO = wikiPhoto(
  'kamo-no-okusu.jpg',
  'https://commons.wikimedia.org/wiki/File:Kamo-no-Okusu-1.jpg',
  'CC0',
  'https://creativecommons.org/publicdomain/zero/1.0/',
  'Saigen Jiro',
  'https://commons.wikimedia.org/wiki/User:Saigen_Jiro',
  '2019-04-28',
  '加茂の大クス（東みよし町）',
  'Kamo-no-Ōkusu camphor tree, Higashimiyoshi'
);

const TABELOG_MAA_AN = 'https://tabelog.com/tokushima/A3604/A360402/36006271/';
const TABELOG_OHANA = 'https://tabelog.com/tokushima/A3604/A360402/36001320/';
const TABELOG_POCO = 'https://tabelog.com/tokushima/A3604/A360402/36000809/';
const TABELOG_DAIKOKUYA = 'https://tabelog.com/tokushima/A3604/A360402/36001167/';
const TABELOG_CHAGURA = 'https://tabelog.com/tokushima/A3604/A360402/36003236/';
const TABELOG_HOUZUSHI = 'https://tabelog.com/tokushima/A3604/A360402/36001536/';
const TABELOG_TAOKA = 'https://tabelog.com/tokushima/A3604/A360402/36002909/';
const TABELOG_YAKITORI = 'https://tabelog.com/tokushima/A3604/A360402/36006274/';
const TABELOG_ASHIROYA = 'https://tabelog.com/tokushima/A3604/A360401/36005331/';
const TABELOG_MIKAMO_KISSA = 'https://tabelog.com/tokushima/A3604/A360402/36007294/';
const TABELOG_DAICHAN = 'https://tabelog.com/tokushima/A3604/A360402/36003307/';
const TABELOG_SANGATSUDA = 'https://tabelog.com/tokushima/A3604/A360402/36006273/';

/** Exact pack/travel name_ja only. No 三好市 / 祖谷 / 大歩危 photos. */
export const HIGASHIMIYOSHI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '加茂の大クス': HIGASHIMIYOSHI_PLACE_PHOTO,
  '美濃田の淵': wikiPhoto(
    'minoda-no-fuchi.jpg',
    'https://commons.wikimedia.org/wiki/File:%E7%BE%8E%E6%BF%83%E7%94%B0%E3%81%AE%E6%B7%B5_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'ball banban',
    'https://commons.wikimedia.org/wiki/File:%E7%BE%8E%E6%BF%83%E7%94%B0%E3%81%AE%E6%B7%B5_-_panoramio.jpg',
    '2010-05-23',
    '美濃田の淵（東みよし町）',
    'Minoda-no-fuchi, Higashimiyoshi'
  ),
  '吉野川ハイウェイオアシス': wikiPhoto(
    'yoshinogawa-highway-oasis.jpg',
    'https://commons.wikimedia.org/wiki/File:Yoshinogawa_and_Yoshinogawa_HighwayOasis_in_Tokushima_Japan.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Kounosu',
    'https://commons.wikimedia.org/wiki/File:Yoshinogawa_and_Yoshinogawa_HighwayOasis_in_Tokushima_Japan.jpg',
    '2010-08-09',
    '吉野川ハイウェイオアシス（東みよし町）',
    'Yoshinogawa Highway Oasis, Higashimiyoshi'
  ),
  '美濃田の淵キャンプ村': wikiPhoto(
    'minoda-camp-bridge.jpg',
    'https://commons.wikimedia.org/wiki/File:Wooden_Bridge%EF%BC%9A%E6%9C%A8%E8%A3%BD%E3%81%AE%E6%A9%8B_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'studio IRONY',
    'https://commons.wikimedia.org/wiki/File:Wooden_Bridge%EF%BC%9A%E6%9C%A8%E8%A3%BD%E3%81%AE%E6%A9%8B_-_panoramio.jpg',
    '2010-04-27',
    '美濃田の淵キャンプ村の木橋（東みよし町）',
    'Wooden bridge at Minoda-no-fuchi Camp Village, Higashimiyoshi'
  ),
  'まあ庵': sourcePhoto(
    'maa-an-dish.jpg',
    'まあ庵の料理写真',
    'Maa-an food photo',
    TABELOG_MAA_AN,
    '食べログ'
  ),
  'おはなうどん': sourcePhoto(
    'ohana-udon-dish.jpg',
    'おはなうどんの料理写真',
    'Ohana Udon food photo',
    TABELOG_OHANA,
    '食べログ'
  ),
  '手作りジェラートの店 ポコアポコ': sourcePhoto(
    'pocoapoco-gelato-dish.jpg',
    '手作りジェラートの店 ポコアポコの料理写真',
    'Poco a Poco gelato food photo',
    TABELOG_POCO,
    '食べログ'
  ),
  '大黒屋': sourcePhoto(
    'daikokuya-dish.jpg',
    '大黒屋の料理写真',
    'Daikokuya food photo',
    TABELOG_DAIKOKUYA,
    '食べログ'
  ),
  '茶蔵': sourcePhoto(
    'chagura-dish.jpg',
    '茶蔵の料理写真',
    'Chagura food photo',
    TABELOG_CHAGURA,
    '食べログ'
  ),
  '宝寿し': sourcePhoto(
    'houzushi-dish.jpg',
    '宝寿しの料理写真',
    'Hōzushi food photo',
    TABELOG_HOUZUSHI,
    '食べログ'
  ),
  '田岡うどん': sourcePhoto(
    'taoka-udon-dish.jpg',
    '田岡うどんの料理写真',
    'Taoka Udon food photo',
    TABELOG_TAOKA,
    '食べログ'
  ),
  'やきとり一番': sourcePhoto(
    'yakitori-ichiban-dish.jpg',
    'やきとり一番の料理写真',
    'Yakitori Ichiban food photo',
    TABELOG_YAKITORI,
    '食べログ'
  ),
  'あしろや': sourcePhoto(
    'ashiroya-dish.jpg',
    'あしろやの料理写真',
    'Ashiroya food photo',
    TABELOG_ASHIROYA,
    '食べログ'
  ),
  'みかも喫茶': sourcePhoto(
    'mikamo-kissa-dish.jpg',
    'みかも喫茶の料理写真',
    'Mikamo Kissa food photo',
    TABELOG_MIKAMO_KISSA,
    '食べログ'
  ),
  '骨付き鶏　みかもの大ちゃん': sourcePhoto(
    'mikamo-no-daichan-dish.jpg',
    '骨付き鶏 みかもの大ちゃんの料理写真',
    'Mikamo-no Daichan food photo',
    TABELOG_DAICHAN,
    '食べログ'
  ),
  '三月田': sourcePhoto(
    'sangatsuda-dish.jpg',
    '三月田の料理写真',
    'Sangatsuda food photo',
    TABELOG_SANGATSUDA,
    '食べログ'
  )
};
