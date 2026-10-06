import type {Municipality} from './kagawa-municipalities';

/**
 * Oita municipalities (大分県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const OITA_MUNICIPALITIES: Municipality[] = [
  {jis: '44201', slug: 'oita', nameJa: '大分市', nameEn: 'Oita', status: 'coming-soon'},
  {jis: '44202', slug: 'beppu', nameJa: '別府市', nameEn: 'Beppu', status: 'coming-soon'},
  {jis: '44203', slug: 'nakatsu', nameJa: '中津市', nameEn: 'Nakatsu', status: 'coming-soon'},
  {jis: '44204', slug: 'hita', nameJa: '日田市', nameEn: 'Hita', status: 'coming-soon'},
  {jis: '44205', slug: 'saiki', nameJa: '佐伯市', nameEn: 'Saiki', status: 'coming-soon'},
  {jis: '44206', slug: 'usuki', nameJa: '臼杵市', nameEn: 'Usuki', status: 'coming-soon'},
  {jis: '44207', slug: 'tsukumi', nameJa: '津久見市', nameEn: 'Tsukumi', status: 'coming-soon'},
  {jis: '44208', slug: 'taketa', nameJa: '竹田市', nameEn: 'Taketa', status: 'coming-soon'},
  {jis: '44209', slug: 'bungotakada', nameJa: '豊後高田市', nameEn: 'Bungotakada', status: 'coming-soon'},
  {jis: '44210', slug: 'kitsuki', nameJa: '杵築市', nameEn: 'Kitsuki', status: 'coming-soon'},
  {jis: '44211', slug: 'usa', nameJa: '宇佐市', nameEn: 'Usa', status: 'coming-soon'},
  {jis: '44212', slug: 'bungoono', nameJa: '豊後大野市', nameEn: 'Bungoono', status: 'coming-soon'},
  {jis: '44213', slug: 'yufu', nameJa: '由布市', nameEn: 'Yufu', status: 'coming-soon'},
  {jis: '44214', slug: 'kunisaki', nameJa: '国東市', nameEn: 'Kunisaki', status: 'coming-soon'},
  {jis: '44322', slug: 'himeshima', nameJa: '姫島村', nameEn: 'Himeshima', status: 'coming-soon'},
  {jis: '44341', slug: 'hiji', nameJa: '日出町', nameEn: 'Hiji', status: 'coming-soon'},
  {jis: '44461', slug: 'kokonoe', nameJa: '九重町', nameEn: 'Kokonoe', status: 'coming-soon'},
  {jis: '44462', slug: 'kusu', nameJa: '玖珠町', nameEn: 'Kusu', status: 'coming-soon'},
];

export const OITA_MUNICIPALITY_BY_SLUG = new Map(
  OITA_MUNICIPALITIES.map((m) => [m.slug, m])
);
