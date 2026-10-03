import type {Municipality} from './kagawa-municipalities';

/**
 * Yamanashi municipalities (山梨県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const YAMANASHI_MUNICIPALITIES: Municipality[] = [
  {jis: '19201', slug: 'kofu', nameJa: '甲府市', nameEn: 'Kofu', status: 'coming-soon'},
  {jis: '19202', slug: 'fujiyoshida', nameJa: '富士吉田市', nameEn: 'Fujiyoshida', status: 'coming-soon'},
  {jis: '19204', slug: 'tsuru', nameJa: '都留市', nameEn: 'Tsuru', status: 'coming-soon'},
  {jis: '19205', slug: 'yamanashi', nameJa: '山梨市', nameEn: 'Yamanashi', status: 'coming-soon'},
  {jis: '19206', slug: 'otsuki', nameJa: '大月市', nameEn: 'Otsuki', status: 'coming-soon'},
  {jis: '19207', slug: 'nirasaki', nameJa: '韮崎市', nameEn: 'Nirasaki', status: 'coming-soon'},
  {jis: '19208', slug: 'minamiarupusu', nameJa: '南アルプス市', nameEn: 'Minamiarupusu', status: 'coming-soon'},
  {jis: '19209', slug: 'hokuto', nameJa: '北杜市', nameEn: 'Hokuto', status: 'coming-soon'},
  {jis: '19210', slug: 'kai', nameJa: '甲斐市', nameEn: 'Kai', status: 'coming-soon'},
  {jis: '19211', slug: 'fuefuki', nameJa: '笛吹市', nameEn: 'Fuefuki', status: 'coming-soon'},
  {jis: '19212', slug: 'uenohara', nameJa: '上野原市', nameEn: 'Uenohara', status: 'coming-soon'},
  {jis: '19213', slug: 'koshu', nameJa: '甲州市', nameEn: 'Koshu', status: 'coming-soon'},
  {jis: '19214', slug: 'chuo', nameJa: '中央市', nameEn: 'Chuo', status: 'coming-soon'},
  {jis: '19346', slug: 'ichikawamisato', nameJa: '市川三郷町', nameEn: 'Ichikawamisato', status: 'coming-soon'},
  {jis: '19364', slug: 'hayakawa', nameJa: '早川町', nameEn: 'Hayakawa', status: 'coming-soon'},
  {jis: '19365', slug: 'minobu', nameJa: '身延町', nameEn: 'Minobu', status: 'coming-soon'},
  {jis: '19366', slug: 'nanbu', nameJa: '南部町', nameEn: 'Nanbu', status: 'coming-soon'},
  {jis: '19368', slug: 'fujikawa', nameJa: '富士川町', nameEn: 'Fujikawa', status: 'coming-soon'},
  {jis: '19384', slug: 'showa', nameJa: '昭和町', nameEn: 'Showa', status: 'coming-soon'},
  {jis: '19422', slug: 'doshi', nameJa: '道志村', nameEn: 'Doshi', status: 'coming-soon'},
  {jis: '19423', slug: 'nishikatsura', nameJa: '西桂町', nameEn: 'Nishikatsura', status: 'coming-soon'},
  {jis: '19424', slug: 'oshino', nameJa: '忍野村', nameEn: 'Oshino', status: 'coming-soon'},
  {jis: '19425', slug: 'yamanakako', nameJa: '山中湖村', nameEn: 'Yamanakako', status: 'coming-soon'},
  {jis: '19429', slug: 'narusawa', nameJa: '鳴沢村', nameEn: 'Narusawa', status: 'coming-soon'},
  {jis: '19430', slug: 'fujikawaguchiko', nameJa: '富士河口湖町', nameEn: 'Fujikawaguchiko', status: 'coming-soon'},
  {jis: '19442', slug: 'kosuge', nameJa: '小菅村', nameEn: 'Kosuge', status: 'coming-soon'},
  {jis: '19443', slug: 'tabayama', nameJa: '丹波山村', nameEn: 'Tabayama', status: 'coming-soon'},
];

export const YAMANASHI_MUNICIPALITY_BY_SLUG = new Map(
  YAMANASHI_MUNICIPALITIES.map((m) => [m.slug, m])
);
