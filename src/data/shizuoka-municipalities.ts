import type {Municipality} from './kagawa-municipalities';

/**
 * Shizuoka municipalities (静岡県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const SHIZUOKA_MUNICIPALITIES: Municipality[] = [
  {jis: '22100', slug: 'shizuoka', nameJa: '静岡市', nameEn: 'Shizuoka', status: 'coming-soon'},
  {jis: '22130', slug: 'hamamatsu', nameJa: '浜松市', nameEn: 'Hamamatsu', status: 'coming-soon'},
  {jis: '22203', slug: 'numazu', nameJa: '沼津市', nameEn: 'Numazu', status: 'coming-soon'},
  {jis: '22205', slug: 'atami', nameJa: '熱海市', nameEn: 'Atami', status: 'coming-soon'},
  {jis: '22206', slug: 'mishima', nameJa: '三島市', nameEn: 'Mishima', status: 'coming-soon'},
  {jis: '22207', slug: 'fujinomiya', nameJa: '富士宮市', nameEn: 'Fujinomiya', status: 'coming-soon'},
  {jis: '22208', slug: 'ito', nameJa: '伊東市', nameEn: 'Ito', status: 'coming-soon'},
  {jis: '22209', slug: 'shimada', nameJa: '島田市', nameEn: 'Shimada', status: 'coming-soon'},
  {jis: '22210', slug: 'fuji', nameJa: '富士市', nameEn: 'Fuji', status: 'coming-soon'},
  {jis: '22211', slug: 'iwata', nameJa: '磐田市', nameEn: 'Iwata', status: 'coming-soon'},
  {jis: '22212', slug: 'yaizu', nameJa: '焼津市', nameEn: 'Yaizu', status: 'coming-soon'},
  {jis: '22213', slug: 'kakegawa', nameJa: '掛川市', nameEn: 'Kakegawa', status: 'coming-soon'},
  {jis: '22214', slug: 'fujieda', nameJa: '藤枝市', nameEn: 'Fujieda', status: 'coming-soon'},
  {jis: '22215', slug: 'gotenba', nameJa: '御殿場市', nameEn: 'Gotenba', status: 'coming-soon'},
  {jis: '22216', slug: 'fukuroi', nameJa: '袋井市', nameEn: 'Fukuroi', status: 'coming-soon'},
  {jis: '22219', slug: 'shimoda', nameJa: '下田市', nameEn: 'Shimoda', status: 'coming-soon'},
  {jis: '22220', slug: 'susono', nameJa: '裾野市', nameEn: 'Susono', status: 'coming-soon'},
  {jis: '22221', slug: 'kosai', nameJa: '湖西市', nameEn: 'Kosai', status: 'coming-soon'},
  {jis: '22222', slug: 'izu', nameJa: '伊豆市', nameEn: 'Izu', status: 'coming-soon'},
  {jis: '22223', slug: 'omaezaki', nameJa: '御前崎市', nameEn: 'Omaezaki', status: 'coming-soon'},
  {jis: '22224', slug: 'kikugawa', nameJa: '菊川市', nameEn: 'Kikugawa', status: 'coming-soon'},
  {jis: '22225', slug: 'izunokuni', nameJa: '伊豆の国市', nameEn: 'Izunokuni', status: 'coming-soon'},
  {jis: '22226', slug: 'makinohara', nameJa: '牧之原市', nameEn: 'Makinohara', status: 'coming-soon'},
  {jis: '22301', slug: 'higashiizu', nameJa: '東伊豆町', nameEn: 'Higashiizu', status: 'coming-soon'},
  {jis: '22302', slug: 'kawazu', nameJa: '河津町', nameEn: 'Kawazu', status: 'coming-soon'},
  {jis: '22304', slug: 'minamiizu', nameJa: '南伊豆町', nameEn: 'Minamiizu', status: 'coming-soon'},
  {jis: '22305', slug: 'matsuzaki', nameJa: '松崎町', nameEn: 'Matsuzaki', status: 'coming-soon'},
  {jis: '22306', slug: 'nishiizu', nameJa: '西伊豆町', nameEn: 'Nishiizu', status: 'coming-soon'},
  {jis: '22325', slug: 'kannami', nameJa: '函南町', nameEn: 'Kannami', status: 'coming-soon'},
  {jis: '22341', slug: 'shimizu', nameJa: '清水町', nameEn: 'Shimizu', status: 'coming-soon'},
  {jis: '22342', slug: 'nagaizumi', nameJa: '長泉町', nameEn: 'Nagaizumi', status: 'coming-soon'},
  {jis: '22344', slug: 'oyama', nameJa: '小山町', nameEn: 'Oyama', status: 'coming-soon'},
  {jis: '22424', slug: 'yoshida', nameJa: '吉田町', nameEn: 'Yoshida', status: 'coming-soon'},
  {jis: '22429', slug: 'kawanehon', nameJa: '川根本町', nameEn: 'Kawanehon', status: 'coming-soon'},
  {jis: '22461', slug: 'mori', nameJa: '森町', nameEn: 'Mori', status: 'coming-soon'},
];

export const SHIZUOKA_MUNICIPALITY_BY_SLUG = new Map(
  SHIZUOKA_MUNICIPALITIES.map((m) => [m.slug, m])
);
