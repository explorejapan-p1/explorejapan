import type {Municipality} from './kagawa-municipalities';

/**
 * Kanagawa municipalities (神奈川県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const KANAGAWA_MUNICIPALITIES: Municipality[] = [
  {jis: '14100', slug: 'yokohama', nameJa: '横浜市', nameEn: 'Yokohama', status: 'coming-soon'},
  {jis: '14130', slug: 'kawasaki', nameJa: '川崎市', nameEn: 'Kawasaki', status: 'coming-soon'},
  {jis: '14150', slug: 'sagamihara', nameJa: '相模原市', nameEn: 'Sagamihara', status: 'coming-soon'},
  {jis: '14201', slug: 'yokosuka', nameJa: '横須賀市', nameEn: 'Yokosuka', status: 'coming-soon'},
  {jis: '14203', slug: 'hiratsuka', nameJa: '平塚市', nameEn: 'Hiratsuka', status: 'coming-soon'},
  {jis: '14204', slug: 'kamakura', nameJa: '鎌倉市', nameEn: 'Kamakura', status: 'coming-soon'},
  {jis: '14205', slug: 'fujisawa', nameJa: '藤沢市', nameEn: 'Fujisawa', status: 'coming-soon'},
  {jis: '14206', slug: 'odawara', nameJa: '小田原市', nameEn: 'Odawara', status: 'coming-soon'},
  {jis: '14207', slug: 'chigasaki', nameJa: '茅ヶ崎市', nameEn: 'Chigasaki', status: 'coming-soon'},
  {jis: '14208', slug: 'zushi', nameJa: '逗子市', nameEn: 'Zushi', status: 'coming-soon'},
  {jis: '14210', slug: 'miura', nameJa: '三浦市', nameEn: 'Miura', status: 'coming-soon'},
  {jis: '14211', slug: 'hadano', nameJa: '秦野市', nameEn: 'Hadano', status: 'coming-soon'},
  {jis: '14212', slug: 'atsugi', nameJa: '厚木市', nameEn: 'Atsugi', status: 'coming-soon'},
  {jis: '14213', slug: 'yamato', nameJa: '大和市', nameEn: 'Yamato', status: 'coming-soon'},
  {jis: '14214', slug: 'isehara', nameJa: '伊勢原市', nameEn: 'Isehara', status: 'coming-soon'},
  {jis: '14215', slug: 'ebina', nameJa: '海老名市', nameEn: 'Ebina', status: 'coming-soon'},
  {jis: '14216', slug: 'zama', nameJa: '座間市', nameEn: 'Zama', status: 'coming-soon'},
  {jis: '14217', slug: 'minamiashigara', nameJa: '南足柄市', nameEn: 'Minamiashigara', status: 'coming-soon'},
  {jis: '14218', slug: 'ayase', nameJa: '綾瀬市', nameEn: 'Ayase', status: 'coming-soon'},
  {jis: '14301', slug: 'hayama', nameJa: '葉山町', nameEn: 'Hayama', status: 'coming-soon'},
  {jis: '14321', slug: 'samukawa', nameJa: '寒川町', nameEn: 'Samukawa', status: 'coming-soon'},
  {jis: '14341', slug: 'oiso', nameJa: '大磯町', nameEn: 'Oiso', status: 'coming-soon'},
  {jis: '14342', slug: 'ninomiya', nameJa: '二宮町', nameEn: 'Ninomiya', status: 'coming-soon'},
  {jis: '14361', slug: 'nakai', nameJa: '中井町', nameEn: 'Nakai', status: 'coming-soon'},
  {jis: '14362', slug: 'oi', nameJa: '大井町', nameEn: 'Oi', status: 'coming-soon'},
  {jis: '14363', slug: 'matsuda', nameJa: '松田町', nameEn: 'Matsuda', status: 'coming-soon'},
  {jis: '14364', slug: 'yamakita', nameJa: '山北町', nameEn: 'Yamakita', status: 'coming-soon'},
  {jis: '14366', slug: 'kaisei', nameJa: '開成町', nameEn: 'Kaisei', status: 'coming-soon'},
  {jis: '14382', slug: 'hakone', nameJa: '箱根町', nameEn: 'Hakone', status: 'coming-soon'},
  {jis: '14383', slug: 'manazuru', nameJa: '真鶴町', nameEn: 'Manazuru', status: 'coming-soon'},
  {jis: '14384', slug: 'yugawara', nameJa: '湯河原町', nameEn: 'Yugawara', status: 'coming-soon'},
  {jis: '14401', slug: 'aikawa', nameJa: '愛川町', nameEn: 'Aikawa', status: 'coming-soon'},
  {jis: '14402', slug: 'kiyokawa', nameJa: '清川村', nameEn: 'Kiyokawa', status: 'coming-soon'},
];

export const KANAGAWA_MUNICIPALITY_BY_SLUG = new Map(
  KANAGAWA_MUNICIPALITIES.map((m) => [m.slug, m])
);
