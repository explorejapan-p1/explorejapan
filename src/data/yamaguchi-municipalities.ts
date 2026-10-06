import type {Municipality} from './kagawa-municipalities';

/**
 * Yamaguchi municipalities (山口県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const YAMAGUCHI_MUNICIPALITIES: Municipality[] = [
  {jis: '35201', slug: 'shimonoseki', nameJa: '下関市', nameEn: 'Shimonoseki', status: 'coming-soon'},
  {jis: '35202', slug: 'ube', nameJa: '宇部市', nameEn: 'Ube', status: 'coming-soon'},
  {jis: '35203', slug: 'yamaguchi', nameJa: '山口市', nameEn: 'Yamaguchi', status: 'coming-soon'},
  {jis: '35204', slug: 'hagi', nameJa: '萩市', nameEn: 'Hagi', status: 'coming-soon'},
  {jis: '35206', slug: 'hofu', nameJa: '防府市', nameEn: 'Hofu', status: 'coming-soon'},
  {jis: '35207', slug: 'kudamatsu', nameJa: '下松市', nameEn: 'Kudamatsu', status: 'coming-soon'},
  {jis: '35208', slug: 'iwakuni', nameJa: '岩国市', nameEn: 'Iwakuni', status: 'coming-soon'},
  {jis: '35210', slug: 'hikari', nameJa: '光市', nameEn: 'Hikari', status: 'coming-soon'},
  {jis: '35211', slug: 'nagato', nameJa: '長門市', nameEn: 'Nagato', status: 'coming-soon'},
  {jis: '35212', slug: 'yanai', nameJa: '柳井市', nameEn: 'Yanai', status: 'coming-soon'},
  {jis: '35213', slug: 'mine', nameJa: '美祢市', nameEn: 'Mine', status: 'coming-soon'},
  {jis: '35215', slug: 'shunan', nameJa: '周南市', nameEn: 'Shunan', status: 'coming-soon'},
  {jis: '35216', slug: 'sanyoonoda', nameJa: '山陽小野田市', nameEn: 'Sanyoonoda', status: 'coming-soon'},
  {jis: '35305', slug: 'suooshima', nameJa: '周防大島町', nameEn: 'Suooshima', status: 'coming-soon'},
  {jis: '35321', slug: 'waki', nameJa: '和木町', nameEn: 'Waki', status: 'coming-soon'},
  {jis: '35341', slug: 'kaminoseki', nameJa: '上関町', nameEn: 'Kaminoseki', status: 'coming-soon'},
  {jis: '35343', slug: 'tabuse', nameJa: '田布施町', nameEn: 'Tabuse', status: 'coming-soon'},
  {jis: '35344', slug: 'hirao', nameJa: '平生町', nameEn: 'Hirao', status: 'coming-soon'},
  {jis: '35502', slug: 'abu', nameJa: '阿武町', nameEn: 'Abu', status: 'coming-soon'},
];

export const YAMAGUCHI_MUNICIPALITY_BY_SLUG = new Map(
  YAMAGUCHI_MUNICIPALITIES.map((m) => [m.slug, m])
);
