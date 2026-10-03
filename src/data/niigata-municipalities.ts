import type {Municipality} from './kagawa-municipalities';

/**
 * Niigata municipalities (新潟県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const NIIGATA_MUNICIPALITIES: Municipality[] = [
  {jis: '15100', slug: 'niigata', nameJa: '新潟市', nameEn: 'Niigata', status: 'coming-soon'},
  {jis: '15202', slug: 'nagaoka', nameJa: '長岡市', nameEn: 'Nagaoka', status: 'coming-soon'},
  {jis: '15204', slug: 'sanjo', nameJa: '三条市', nameEn: 'Sanjo', status: 'coming-soon'},
  {jis: '15205', slug: 'kashiwazaki', nameJa: '柏崎市', nameEn: 'Kashiwazaki', status: 'coming-soon'},
  {jis: '15206', slug: 'shibata', nameJa: '新発田市', nameEn: 'Shibata', status: 'coming-soon'},
  {jis: '15208', slug: 'ojiya', nameJa: '小千谷市', nameEn: 'Ojiya', status: 'coming-soon'},
  {jis: '15209', slug: 'kamo', nameJa: '加茂市', nameEn: 'Kamo', status: 'coming-soon'},
  {jis: '15210', slug: 'tookamachi', nameJa: '十日町市', nameEn: 'Tookamachi', status: 'coming-soon'},
  {jis: '15211', slug: 'mitsuke', nameJa: '見附市', nameEn: 'Mitsuke', status: 'coming-soon'},
  {jis: '15212', slug: 'murakami', nameJa: '村上市', nameEn: 'Murakami', status: 'coming-soon'},
  {jis: '15213', slug: 'tsubame', nameJa: '燕市', nameEn: 'Tsubame', status: 'coming-soon'},
  {jis: '15216', slug: 'itoigawa', nameJa: '糸魚川市', nameEn: 'Itoigawa', status: 'coming-soon'},
  {jis: '15217', slug: 'myoko', nameJa: '妙高市', nameEn: 'Myoko', status: 'coming-soon'},
  {jis: '15218', slug: 'gosen', nameJa: '五泉市', nameEn: 'Gosen', status: 'coming-soon'},
  {jis: '15222', slug: 'joetsu', nameJa: '上越市', nameEn: 'Joetsu', status: 'coming-soon'},
  {jis: '15223', slug: 'agano', nameJa: '阿賀野市', nameEn: 'Agano', status: 'coming-soon'},
  {jis: '15224', slug: 'sado', nameJa: '佐渡市', nameEn: 'Sado', status: 'coming-soon'},
  {jis: '15225', slug: 'uonuma', nameJa: '魚沼市', nameEn: 'Uonuma', status: 'coming-soon'},
  {jis: '15226', slug: 'minamiuonuma', nameJa: '南魚沼市', nameEn: 'Minamiuonuma', status: 'coming-soon'},
  {jis: '15227', slug: 'tainai', nameJa: '胎内市', nameEn: 'Tainai', status: 'coming-soon'},
  {jis: '15307', slug: 'seiro', nameJa: '聖籠町', nameEn: 'Seiro', status: 'coming-soon'},
  {jis: '15342', slug: 'yahiko', nameJa: '弥彦村', nameEn: 'Yahiko', status: 'coming-soon'},
  {jis: '15361', slug: 'tagami', nameJa: '田上町', nameEn: 'Tagami', status: 'coming-soon'},
  {jis: '15385', slug: 'aga', nameJa: '阿賀町', nameEn: 'Aga', status: 'coming-soon'},
  {jis: '15405', slug: 'izumozaki', nameJa: '出雲崎町', nameEn: 'Izumozaki', status: 'coming-soon'},
  {jis: '15461', slug: 'yuzawa', nameJa: '湯沢町', nameEn: 'Yuzawa', status: 'coming-soon'},
  {jis: '15482', slug: 'tsunan', nameJa: '津南町', nameEn: 'Tsunan', status: 'coming-soon'},
  {jis: '15504', slug: 'kariwa', nameJa: '刈羽村', nameEn: 'Kariwa', status: 'coming-soon'},
  {jis: '15581', slug: 'sekikawa', nameJa: '関川村', nameEn: 'Sekikawa', status: 'coming-soon'},
  {jis: '15586', slug: 'awashimaura', nameJa: '粟島浦村', nameEn: 'Awashimaura', status: 'coming-soon'},
];

export const NIIGATA_MUNICIPALITY_BY_SLUG = new Map(
  NIIGATA_MUNICIPALITIES.map((m) => [m.slug, m])
);
