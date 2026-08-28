export type MunicipalityStatus = 'ready' | 'coming-soon';

export type Municipality = {
  jis: string;
  slug: string;
  nameJa: string;
  nameEn: string;
  status: MunicipalityStatus;
};

/**
 * Tokushima 市区町村. Codes are N03_007 / JIS X 0402 (5-digit).
 * Mima is 36207. 36206 is 阿波市 — never mix.
 */
export const TOKUSHIMA_MUNICIPALITIES: Municipality[] = [
  {jis: '36201', slug: 'tokushima', nameJa: '徳島市', nameEn: 'Tokushima', status: 'ready'},
  {jis: '36202', slug: 'naruto', nameJa: '鳴門市', nameEn: 'Naruto', status: 'coming-soon'},
  {jis: '36203', slug: 'komatsushima', nameJa: '小松島市', nameEn: 'Komatsushima', status: 'coming-soon'},
  {jis: '36204', slug: 'anan', nameJa: '阿南市', nameEn: 'Anan', status: 'coming-soon'},
  {jis: '36205', slug: 'yoshinogawa', nameJa: '吉野川市', nameEn: 'Yoshinogawa', status: 'ready'},
  {jis: '36206', slug: 'awa', nameJa: '阿波市', nameEn: 'Awa', status: 'coming-soon'},
  {jis: '36207', slug: 'mima', nameJa: '美馬市', nameEn: 'Mima', status: 'ready'},
  {jis: '36208', slug: 'miyoshi', nameJa: '三好市', nameEn: 'Miyoshi', status: 'ready'},
  {jis: '36301', slug: 'katsuura', nameJa: '勝浦町', nameEn: 'Katsuura', status: 'coming-soon'},
  {jis: '36302', slug: 'kamikatsu', nameJa: '上勝町', nameEn: 'Kamikatsu', status: 'coming-soon'},
  {jis: '36321', slug: 'sanagochi', nameJa: '佐那河内村', nameEn: 'Sanagochi', status: 'coming-soon'},
  {jis: '36341', slug: 'ishii', nameJa: '石井町', nameEn: 'Ishii', status: 'coming-soon'},
  {jis: '36342', slug: 'kamiyama', nameJa: '神山町', nameEn: 'Kamiyama', status: 'coming-soon'},
  {jis: '36368', slug: 'naka', nameJa: '那賀町', nameEn: 'Naka', status: 'coming-soon'},
  {jis: '36383', slug: 'mugi', nameJa: '牟岐町', nameEn: 'Mugi', status: 'coming-soon'},
  {jis: '36387', slug: 'minami', nameJa: '美波町', nameEn: 'Minami', status: 'coming-soon'},
  {jis: '36388', slug: 'kaiyo', nameJa: '海陽町', nameEn: 'Kaiyo', status: 'coming-soon'},
  {jis: '36401', slug: 'matsushige', nameJa: '松茂町', nameEn: 'Matsushige', status: 'coming-soon'},
  {jis: '36402', slug: 'kitajima', nameJa: '北島町', nameEn: 'Kitajima', status: 'coming-soon'},
  {jis: '36403', slug: 'aizumi', nameJa: '藍住町', nameEn: 'Aizumi', status: 'coming-soon'},
  {jis: '36404', slug: 'itano', nameJa: '板野町', nameEn: 'Itano', status: 'coming-soon'},
  {jis: '36405', slug: 'kamiita', nameJa: '上板町', nameEn: 'Kamiita', status: 'coming-soon'},
  {jis: '36468', slug: 'tsurugi', nameJa: 'つるぎ町', nameEn: 'Tsurugi', status: 'ready'},
  {jis: '36489', slug: 'higashimiyoshi', nameJa: '東みよし町', nameEn: 'Higashimiyoshi', status: 'coming-soon'}
];

export const MIMA_JIS = '36207';
export const AWA_JIS = '36206';

export const MUNICIPALITY_BY_SLUG = new Map(
  TOKUSHIMA_MUNICIPALITIES.map((m) => [m.slug, m])
);
export const MUNICIPALITY_BY_JIS = new Map(
  TOKUSHIMA_MUNICIPALITIES.map((m) => [m.jis, m])
);
