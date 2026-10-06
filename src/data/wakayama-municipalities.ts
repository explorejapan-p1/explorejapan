import type {Municipality} from './kagawa-municipalities';

/**
 * Wakayama municipalities (和歌山県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const WAKAYAMA_MUNICIPALITIES: Municipality[] = [
  {jis: '30201', slug: 'wakayama', nameJa: '和歌山市', nameEn: 'Wakayama', status: 'coming-soon'},
  {jis: '30202', slug: 'kainan', nameJa: '海南市', nameEn: 'Kainan', status: 'coming-soon'},
  {jis: '30203', slug: 'hashimoto', nameJa: '橋本市', nameEn: 'Hashimoto', status: 'coming-soon'},
  {jis: '30204', slug: 'arida', nameJa: '有田市', nameEn: 'Arida', status: 'coming-soon'},
  {jis: '30205', slug: 'gobo', nameJa: '御坊市', nameEn: 'Gobo', status: 'coming-soon'},
  {jis: '30206', slug: 'tanabe', nameJa: '田辺市', nameEn: 'Tanabe', status: 'coming-soon'},
  {jis: '30207', slug: 'shinguu', nameJa: '新宮市', nameEn: 'Shinguu', status: 'coming-soon'},
  {jis: '30208', slug: 'kinokawa', nameJa: '紀の川市', nameEn: 'Kinokawa', status: 'coming-soon'},
  {jis: '30209', slug: 'iwade', nameJa: '岩出市', nameEn: 'Iwade', status: 'coming-soon'},
  {jis: '30304', slug: 'kimino', nameJa: '紀美野町', nameEn: 'Kimino', status: 'coming-soon'},
  {jis: '30341', slug: 'katsuragi', nameJa: 'かつらぎ町', nameEn: 'Katsuragi', status: 'coming-soon'},
  {jis: '30343', slug: 'kudoyama', nameJa: '九度山町', nameEn: 'Kudoyama', status: 'coming-soon'},
  {jis: '30344', slug: 'koya', nameJa: '高野町', nameEn: 'Koya', status: 'coming-soon'},
  {jis: '30361', slug: 'yuasa', nameJa: '湯浅町', nameEn: 'Yuasa', status: 'coming-soon'},
  {jis: '30362', slug: 'hirogawa', nameJa: '広川町', nameEn: 'Hirogawa', status: 'coming-soon'},
  {jis: '30366', slug: 'aridagawa', nameJa: '有田川町', nameEn: 'Aridagawa', status: 'coming-soon'},
  {jis: '30381', slug: 'mihama', nameJa: '美浜町', nameEn: 'Mihama', status: 'coming-soon'},
  {jis: '30382', slug: 'hidaka', nameJa: '日高町', nameEn: 'Hidaka', status: 'coming-soon'},
  {jis: '30383', slug: 'yura', nameJa: '由良町', nameEn: 'Yura', status: 'coming-soon'},
  {jis: '30390', slug: 'inami', nameJa: '印南町', nameEn: 'Inami', status: 'coming-soon'},
  {jis: '30391', slug: 'minabe', nameJa: 'みなべ町', nameEn: 'Minabe', status: 'coming-soon'},
  {jis: '30392', slug: 'hidakagawa', nameJa: '日高川町', nameEn: 'Hidakagawa', status: 'coming-soon'},
  {jis: '30401', slug: 'shirahama', nameJa: '白浜町', nameEn: 'Shirahama', status: 'coming-soon'},
  {jis: '30404', slug: 'kamitonda', nameJa: '上富田町', nameEn: 'Kamitonda', status: 'coming-soon'},
  {jis: '30406', slug: 'susami', nameJa: 'すさみ町', nameEn: 'Susami', status: 'coming-soon'},
  {jis: '30421', slug: 'nachikatsuura', nameJa: '那智勝浦町', nameEn: 'Nachikatsuura', status: 'coming-soon'},
  {jis: '30422', slug: 'taiji', nameJa: '太地町', nameEn: 'Taiji', status: 'coming-soon'},
  {jis: '30424', slug: 'kozagawa', nameJa: '古座川町', nameEn: 'Kozagawa', status: 'coming-soon'},
  {jis: '30427', slug: 'kitayama', nameJa: '北山村', nameEn: 'Kitayama', status: 'coming-soon'},
  {jis: '30428', slug: 'kushimoto', nameJa: '串本町', nameEn: 'Kushimoto', status: 'coming-soon'},
];

export const WAKAYAMA_MUNICIPALITY_BY_SLUG = new Map(
  WAKAYAMA_MUNICIPALITIES.map((m) => [m.slug, m])
);
