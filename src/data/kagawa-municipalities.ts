export type MunicipalityStatus = 'ready' | 'coming-soon';

export type Municipality = {
  jis: string;
  slug: string;
  nameJa: string;
  nameEn: string;
  status: MunicipalityStatus;
};

/**
 * Kagawa 市区町村. Codes are N03_007 / JIS X 0402 (5-digit).
 * Takamatsu 37201 + Marugame 37202 + Sakaide 37203 + Zentsuji 37204 + Kanonji 37205 + Sanuki 37206 + Higashikagawa 37207 + Mitoyo 37208 + Tonosho 37322 + Shodoshima 37324 + Miki 37341 + Naoshima 37364 + Utazu 37386 + Kotohira 37403 LIVE hubs (+ remaining towns rolling).
 */
export const KAGAWA_MUNICIPALITIES: Municipality[] = [
  {jis: '37201', slug: 'takamatsu', nameJa: '高松市', nameEn: 'Takamatsu', status: 'ready'},
  {jis: '37202', slug: 'marugame', nameJa: '丸亀市', nameEn: 'Marugame', status: 'ready'},
  {jis: '37203', slug: 'sakaide', nameJa: '坂出市', nameEn: 'Sakaide', status: 'ready'},
  {jis: '37204', slug: 'zentsuji', nameJa: '善通寺市', nameEn: 'Zentsuji', status: 'ready'},
  {jis: '37205', slug: 'kanonji', nameJa: '観音寺市', nameEn: 'Kanonji', status: 'ready'},
  {jis: '37206', slug: 'sanuki', nameJa: 'さぬき市', nameEn: 'Sanuki', status: 'ready'},
  {jis: '37207', slug: 'higashikagawa', nameJa: '東かがわ市', nameEn: 'Higashikagawa', status: 'ready'},
  {jis: '37208', slug: 'mitoyo', nameJa: '三豊市', nameEn: 'Mitoyo', status: 'ready'},
  {jis: '37322', slug: 'tonosho', nameJa: '土庄町', nameEn: 'Tonosho', status: 'ready'},
  {jis: '37324', slug: 'shodoshima', nameJa: '小豆島町', nameEn: 'Shodoshima', status: 'ready'},
  {jis: '37341', slug: 'miki', nameJa: '三木町', nameEn: 'Miki', status: 'ready'},
  {jis: '37364', slug: 'naoshima', nameJa: '直島町', nameEn: 'Naoshima', status: 'ready'},
  {jis: '37386', slug: 'utazu', nameJa: '宇多津町', nameEn: 'Utazu', status: 'ready'},
  {jis: '37387', slug: 'ayagawa', nameJa: '綾川町', nameEn: 'Ayagawa', status: 'ready'},
  {jis: '37403', slug: 'kotohira', nameJa: '琴平町', nameEn: 'Kotohira', status: 'ready'},
  {jis: '37404', slug: 'tadotsu', nameJa: '多度津町', nameEn: 'Tadotsu', status: 'ready'},
  {jis: '37406', slug: 'manno', nameJa: 'まんのう町', nameEn: 'Manno', status: 'ready'}
];

export const TAKAMATSU_JIS = '37201';

export const KAGAWA_MUNICIPALITY_BY_SLUG = new Map(
  KAGAWA_MUNICIPALITIES.map((m) => [m.slug, m])
);
export const KAGAWA_MUNICIPALITY_BY_JIS = new Map(
  KAGAWA_MUNICIPALITIES.map((m) => [m.jis, m])
);
