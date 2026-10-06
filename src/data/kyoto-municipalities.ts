import type {Municipality} from './kagawa-municipalities';

/**
 * Kyoto municipalities (京都府).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const KYOTO_MUNICIPALITIES: Municipality[] = [
  {jis: '26100', slug: 'kyoto', nameJa: '京都市', nameEn: 'Kyoto', status: 'coming-soon'},
  {jis: '26201', slug: 'fukuchiyama', nameJa: '福知山市', nameEn: 'Fukuchiyama', status: 'coming-soon'},
  {jis: '26202', slug: 'maizuru', nameJa: '舞鶴市', nameEn: 'Maizuru', status: 'coming-soon'},
  {jis: '26203', slug: 'ayabe', nameJa: '綾部市', nameEn: 'Ayabe', status: 'coming-soon'},
  {jis: '26204', slug: 'uji', nameJa: '宇治市', nameEn: 'Uji', status: 'coming-soon'},
  {jis: '26205', slug: 'miyazu', nameJa: '宮津市', nameEn: 'Miyazu', status: 'coming-soon'},
  {jis: '26206', slug: 'kameoka', nameJa: '亀岡市', nameEn: 'Kameoka', status: 'coming-soon'},
  {jis: '26207', slug: 'joyo', nameJa: '城陽市', nameEn: 'Joyo', status: 'coming-soon'},
  {jis: '26208', slug: 'muko', nameJa: '向日市', nameEn: 'Muko', status: 'coming-soon'},
  {jis: '26209', slug: 'nagaokakyo', nameJa: '長岡京市', nameEn: 'Nagaokakyo', status: 'coming-soon'},
  {jis: '26210', slug: 'yawata', nameJa: '八幡市', nameEn: 'Yawata', status: 'coming-soon'},
  {jis: '26211', slug: 'kyotanabe', nameJa: '京田辺市', nameEn: 'Kyotanabe', status: 'coming-soon'},
  {jis: '26212', slug: 'kyotango', nameJa: '京丹後市', nameEn: 'Kyotango', status: 'coming-soon'},
  {jis: '26213', slug: 'nantan', nameJa: '南丹市', nameEn: 'Nantan', status: 'coming-soon'},
  {jis: '26214', slug: 'kizugawa', nameJa: '木津川市', nameEn: 'Kizugawa', status: 'coming-soon'},
  {jis: '26303', slug: 'oyamazaki', nameJa: '大山崎町', nameEn: 'Oyamazaki', status: 'coming-soon'},
  {jis: '26322', slug: 'kumiyama', nameJa: '久御山町', nameEn: 'Kumiyama', status: 'coming-soon'},
  {jis: '26343', slug: 'ide', nameJa: '井手町', nameEn: 'Ide', status: 'coming-soon'},
  {jis: '26344', slug: 'ujitawara', nameJa: '宇治田原町', nameEn: 'Ujitawara', status: 'coming-soon'},
  {jis: '26364', slug: 'kasagi', nameJa: '笠置町', nameEn: 'Kasagi', status: 'coming-soon'},
  {jis: '26365', slug: 'wazuka', nameJa: '和束町', nameEn: 'Wazuka', status: 'coming-soon'},
  {jis: '26366', slug: 'seika', nameJa: '精華町', nameEn: 'Seika', status: 'coming-soon'},
  {jis: '26367', slug: 'minamiyamashiro', nameJa: '南山城村', nameEn: 'Minamiyamashiro', status: 'coming-soon'},
  {jis: '26407', slug: 'kyotanba', nameJa: '京丹波町', nameEn: 'Kyotanba', status: 'coming-soon'},
  {jis: '26463', slug: 'ine', nameJa: '伊根町', nameEn: 'Ine', status: 'coming-soon'},
  {jis: '26465', slug: 'yosano', nameJa: '与謝野町', nameEn: 'Yosano', status: 'coming-soon'},
];

export const KYOTO_MUNICIPALITY_BY_SLUG = new Map(
  KYOTO_MUNICIPALITIES.map((m) => [m.slug, m])
);
