import type {Municipality} from './kagawa-municipalities';

/**
 * Gunma municipalities (群馬県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const GUNMA_MUNICIPALITIES: Municipality[] = [
  {jis: '10201', slug: 'maebashi', nameJa: '前橋市', nameEn: 'Maebashi', status: 'coming-soon'},
  {jis: '10202', slug: 'takasaki', nameJa: '高崎市', nameEn: 'Takasaki', status: 'coming-soon'},
  {jis: '10203', slug: 'kiryu', nameJa: '桐生市', nameEn: 'Kiryu', status: 'coming-soon'},
  {jis: '10204', slug: 'isesaki', nameJa: '伊勢崎市', nameEn: 'Isesaki', status: 'coming-soon'},
  {jis: '10205', slug: 'ota', nameJa: '太田市', nameEn: 'Ota', status: 'coming-soon'},
  {jis: '10206', slug: 'numata', nameJa: '沼田市', nameEn: 'Numata', status: 'coming-soon'},
  {jis: '10207', slug: 'tatebayashi', nameJa: '館林市', nameEn: 'Tatebayashi', status: 'coming-soon'},
  {jis: '10208', slug: 'shibukawa', nameJa: '渋川市', nameEn: 'Shibukawa', status: 'coming-soon'},
  {jis: '10209', slug: 'fujioka', nameJa: '藤岡市', nameEn: 'Fujioka', status: 'coming-soon'},
  {jis: '10210', slug: 'tomioka', nameJa: '富岡市', nameEn: 'Tomioka', status: 'coming-soon'},
  {jis: '10211', slug: 'annaka', nameJa: '安中市', nameEn: 'Annaka', status: 'coming-soon'},
  {jis: '10212', slug: 'midori', nameJa: 'みどり市', nameEn: 'Midori', status: 'coming-soon'},
  {jis: '10344', slug: 'shinto', nameJa: '榛東村', nameEn: 'Shinto', status: 'coming-soon'},
  {jis: '10345', slug: 'yoshioka', nameJa: '吉岡町', nameEn: 'Yoshioka', status: 'coming-soon'},
  {jis: '10366', slug: 'ueno', nameJa: '上野村', nameEn: 'Ueno', status: 'coming-soon'},
  {jis: '10367', slug: 'kanna', nameJa: '神流町', nameEn: 'Kanna', status: 'coming-soon'},
  {jis: '10382', slug: 'shimonita', nameJa: '下仁田町', nameEn: 'Shimonita', status: 'coming-soon'},
  {jis: '10383', slug: 'nanmoku', nameJa: '南牧村', nameEn: 'Nanmoku', status: 'coming-soon'},
  {jis: '10384', slug: 'kanra', nameJa: '甘楽町', nameEn: 'Kanra', status: 'coming-soon'},
  {jis: '10421', slug: 'nakanojiyo', nameJa: '中之条町', nameEn: 'Nakanojiyo', status: 'coming-soon'},
  {jis: '10424', slug: 'naganohara', nameJa: '長野原町', nameEn: 'Naganohara', status: 'coming-soon'},
  {jis: '10425', slug: 'tsumagoi', nameJa: '嬬恋村', nameEn: 'Tsumagoi', status: 'coming-soon'},
  {jis: '10426', slug: 'kusatsu', nameJa: '草津町', nameEn: 'Kusatsu', status: 'coming-soon'},
  {jis: '10428', slug: 'takayama', nameJa: '高山村', nameEn: 'Takayama', status: 'coming-soon'},
  {jis: '10429', slug: 'higashiagatsuma', nameJa: '東吾妻町', nameEn: 'Higashiagatsuma', status: 'coming-soon'},
  {jis: '10443', slug: 'katashina', nameJa: '片品村', nameEn: 'Katashina', status: 'coming-soon'},
  {jis: '10444', slug: 'kawaba', nameJa: '川場村', nameEn: 'Kawaba', status: 'coming-soon'},
  {jis: '10448', slug: 'showa', nameJa: '昭和村', nameEn: 'Showa', status: 'coming-soon'},
  {jis: '10449', slug: 'minakami', nameJa: 'みなかみ町', nameEn: 'Minakami', status: 'coming-soon'},
  {jis: '10464', slug: 'tamamura', nameJa: '玉村町', nameEn: 'Tamamura', status: 'coming-soon'},
  {jis: '10521', slug: 'itakura', nameJa: '板倉町', nameEn: 'Itakura', status: 'coming-soon'},
  {jis: '10522', slug: 'meiwa', nameJa: '明和町', nameEn: 'Meiwa', status: 'coming-soon'},
  {jis: '10523', slug: 'chiyoda', nameJa: '千代田町', nameEn: 'Chiyoda', status: 'coming-soon'},
  {jis: '10524', slug: 'oizumi', nameJa: '大泉町', nameEn: 'Oizumi', status: 'coming-soon'},
  {jis: '10525', slug: 'ora', nameJa: '邑楽町', nameEn: 'Ora', status: 'coming-soon'},
];

export const GUNMA_MUNICIPALITY_BY_SLUG = new Map(
  GUNMA_MUNICIPALITIES.map((m) => [m.slug, m])
);
