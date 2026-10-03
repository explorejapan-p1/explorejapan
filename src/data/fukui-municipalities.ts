import type {Municipality} from './kagawa-municipalities';

/**
 * Fukui municipalities (福井県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const FUKUI_MUNICIPALITIES: Municipality[] = [
  {jis: '18201', slug: 'fukui', nameJa: '福井市', nameEn: 'Fukui', status: 'coming-soon'},
  {jis: '18202', slug: 'tsuruga', nameJa: '敦賀市', nameEn: 'Tsuruga', status: 'coming-soon'},
  {jis: '18204', slug: 'obama', nameJa: '小浜市', nameEn: 'Obama', status: 'coming-soon'},
  {jis: '18205', slug: 'ono', nameJa: '大野市', nameEn: 'Ono', status: 'coming-soon'},
  {jis: '18206', slug: 'katsuyama', nameJa: '勝山市', nameEn: 'Katsuyama', status: 'coming-soon'},
  {jis: '18207', slug: 'sabae', nameJa: '鯖江市', nameEn: 'Sabae', status: 'coming-soon'},
  {jis: '18208', slug: 'awara', nameJa: 'あわら市', nameEn: 'Awara', status: 'coming-soon'},
  {jis: '18209', slug: 'echizen', nameJa: '越前市', nameEn: 'Echizen', status: 'coming-soon'},
  {jis: '18210', slug: 'sakai', nameJa: '坂井市', nameEn: 'Sakai', status: 'coming-soon'},
  {jis: '18322', slug: 'eiheiji', nameJa: '永平寺町', nameEn: 'Eiheiji', status: 'coming-soon'},
  {jis: '18382', slug: 'ikeda', nameJa: '池田町', nameEn: 'Ikeda', status: 'coming-soon'},
  {jis: '18404', slug: 'minamiechizen', nameJa: '南越前町', nameEn: 'Minamiechizen', status: 'coming-soon'},
  {jis: '18423', slug: 'echizencho', nameJa: '越前町', nameEn: 'Echizencho', status: 'coming-soon'},
  {jis: '18442', slug: 'mihama', nameJa: '美浜町', nameEn: 'Mihama', status: 'coming-soon'},
  {jis: '18481', slug: 'takahama', nameJa: '高浜町', nameEn: 'Takahama', status: 'coming-soon'},
  {jis: '18483', slug: 'oi', nameJa: 'おおい町', nameEn: 'Oi', status: 'coming-soon'},
  {jis: '18501', slug: 'wakasa', nameJa: '若狭町', nameEn: 'Wakasa', status: 'coming-soon'},
];

export const FUKUI_MUNICIPALITY_BY_SLUG = new Map(
  FUKUI_MUNICIPALITIES.map((m) => [m.slug, m])
);
