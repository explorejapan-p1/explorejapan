import type {Municipality} from './kagawa-municipalities';

/**
 * Miyazaki municipalities (宮崎県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const MIYAZAKI_MUNICIPALITIES: Municipality[] = [
  {jis: '45201', slug: 'miyazaki', nameJa: '宮崎市', nameEn: 'Miyazaki', status: 'coming-soon'},
  {jis: '45202', slug: 'miyakonojo', nameJa: '都城市', nameEn: 'Miyakonojo', status: 'coming-soon'},
  {jis: '45203', slug: 'nobeoka', nameJa: '延岡市', nameEn: 'Nobeoka', status: 'coming-soon'},
  {jis: '45204', slug: 'nichinan', nameJa: '日南市', nameEn: 'Nichinan', status: 'coming-soon'},
  {jis: '45205', slug: 'kobayashi', nameJa: '小林市', nameEn: 'Kobayashi', status: 'coming-soon'},
  {jis: '45206', slug: 'hyuga', nameJa: '日向市', nameEn: 'Hyuga', status: 'coming-soon'},
  {jis: '45207', slug: 'kushima', nameJa: '串間市', nameEn: 'Kushima', status: 'coming-soon'},
  {jis: '45208', slug: 'saito', nameJa: '西都市', nameEn: 'Saito', status: 'coming-soon'},
  {jis: '45209', slug: 'ebino', nameJa: 'えびの市', nameEn: 'Ebino', status: 'coming-soon'},
  {jis: '45341', slug: 'mimata', nameJa: '三股町', nameEn: 'Mimata', status: 'coming-soon'},
  {jis: '45361', slug: 'takaharu', nameJa: '高原町', nameEn: 'Takaharu', status: 'coming-soon'},
  {jis: '45382', slug: 'kunitomi', nameJa: '国富町', nameEn: 'Kunitomi', status: 'coming-soon'},
  {jis: '45383', slug: 'aya', nameJa: '綾町', nameEn: 'Aya', status: 'coming-soon'},
  {jis: '45401', slug: 'takanabe', nameJa: '高鍋町', nameEn: 'Takanabe', status: 'coming-soon'},
  {jis: '45402', slug: 'shintomi', nameJa: '新富町', nameEn: 'Shintomi', status: 'coming-soon'},
  {jis: '45403', slug: 'nishimera', nameJa: '西米良村', nameEn: 'Nishimera', status: 'coming-soon'},
  {jis: '45404', slug: 'kijo', nameJa: '木城町', nameEn: 'Kijo', status: 'coming-soon'},
  {jis: '45405', slug: 'kawaminami', nameJa: '川南町', nameEn: 'Kawaminami', status: 'coming-soon'},
  {jis: '45406', slug: 'tsuno', nameJa: '都農町', nameEn: 'Tsuno', status: 'coming-soon'},
  {jis: '45421', slug: 'kadogawa', nameJa: '門川町', nameEn: 'Kadogawa', status: 'coming-soon'},
  {jis: '45429', slug: 'morotsuka', nameJa: '諸塚村', nameEn: 'Morotsuka', status: 'coming-soon'},
  {jis: '45430', slug: 'shiiba', nameJa: '椎葉村', nameEn: 'Shiiba', status: 'coming-soon'},
  {jis: '45431', slug: 'misato', nameJa: '美郷町', nameEn: 'Misato', status: 'coming-soon'},
  {jis: '45441', slug: 'takachiho', nameJa: '高千穂町', nameEn: 'Takachiho', status: 'coming-soon'},
  {jis: '45442', slug: 'hinokage', nameJa: '日之影町', nameEn: 'Hinokage', status: 'coming-soon'},
  {jis: '45443', slug: 'gokase', nameJa: '五ヶ瀬町', nameEn: 'Gokase', status: 'coming-soon'},
];

export const MIYAZAKI_MUNICIPALITY_BY_SLUG = new Map(
  MIYAZAKI_MUNICIPALITIES.map((m) => [m.slug, m])
);
