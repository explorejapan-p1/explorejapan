import type {Municipality} from './kagawa-municipalities';

/**
 * Yamagata municipalities (山形県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const YAMAGATA_MUNICIPALITIES: Municipality[] = [
  {jis: '06201', slug: 'yamagata', nameJa: '山形市', nameEn: 'Yamagata', status: 'coming-soon'},
  {jis: '06202', slug: 'yonezawa', nameJa: '米沢市', nameEn: 'Yonezawa', status: 'coming-soon'},
  {jis: '06203', slug: 'tsuruoka', nameJa: '鶴岡市', nameEn: 'Tsuruoka', status: 'coming-soon'},
  {jis: '06204', slug: 'sakata', nameJa: '酒田市', nameEn: 'Sakata', status: 'coming-soon'},
  {jis: '06205', slug: 'shinjo', nameJa: '新庄市', nameEn: 'Shinjo', status: 'coming-soon'},
  {jis: '06206', slug: 'sagae', nameJa: '寒河江市', nameEn: 'Sagae', status: 'coming-soon'},
  {jis: '06207', slug: 'kaminoyama', nameJa: '上山市', nameEn: 'Kaminoyama', status: 'coming-soon'},
  {jis: '06208', slug: 'murayama', nameJa: '村山市', nameEn: 'Murayama', status: 'coming-soon'},
  {jis: '06209', slug: 'nagai', nameJa: '長井市', nameEn: 'Nagai', status: 'coming-soon'},
  {jis: '06210', slug: 'tendo', nameJa: '天童市', nameEn: 'Tendo', status: 'coming-soon'},
  {jis: '06211', slug: 'higashine', nameJa: '東根市', nameEn: 'Higashine', status: 'coming-soon'},
  {jis: '06212', slug: 'obanazawa', nameJa: '尾花沢市', nameEn: 'Obanazawa', status: 'coming-soon'},
  {jis: '06213', slug: 'nanyo', nameJa: '南陽市', nameEn: 'Nanyo', status: 'coming-soon'},
  {jis: '06301', slug: 'yamanobe', nameJa: '山辺町', nameEn: 'Yamanobe', status: 'coming-soon'},
  {jis: '06302', slug: 'nakayama', nameJa: '中山町', nameEn: 'Nakayama', status: 'coming-soon'},
  {jis: '06321', slug: 'kahoku', nameJa: '河北町', nameEn: 'Kahoku', status: 'coming-soon'},
  {jis: '06322', slug: 'nishikawa', nameJa: '西川町', nameEn: 'Nishikawa', status: 'coming-soon'},
  {jis: '06323', slug: 'asahi', nameJa: '朝日町', nameEn: 'Asahi', status: 'coming-soon'},
  {jis: '06324', slug: 'oe', nameJa: '大江町', nameEn: 'Oe', status: 'coming-soon'},
  {jis: '06341', slug: 'oishida', nameJa: '大石田町', nameEn: 'Oishida', status: 'coming-soon'},
  {jis: '06361', slug: 'kaneyama', nameJa: '金山町', nameEn: 'Kaneyama', status: 'coming-soon'},
  {jis: '06362', slug: 'mogami', nameJa: '最上町', nameEn: 'Mogami', status: 'coming-soon'},
  {jis: '06363', slug: 'funagata', nameJa: '舟形町', nameEn: 'Funagata', status: 'coming-soon'},
  {jis: '06364', slug: 'mamurogawa', nameJa: '真室川町', nameEn: 'Mamurogawa', status: 'coming-soon'},
  {jis: '06365', slug: 'okura', nameJa: '大蔵村', nameEn: 'Okura', status: 'coming-soon'},
  {jis: '06366', slug: 'sakegawa', nameJa: '鮭川村', nameEn: 'Sakegawa', status: 'coming-soon'},
  {jis: '06367', slug: 'tozawa', nameJa: '戸沢村', nameEn: 'Tozawa', status: 'coming-soon'},
  {jis: '06381', slug: 'takahata', nameJa: '高畠町', nameEn: 'Takahata', status: 'coming-soon'},
  {jis: '06382', slug: 'kawanishi', nameJa: '川西町', nameEn: 'Kawanishi', status: 'coming-soon'},
  {jis: '06401', slug: 'oguni', nameJa: '小国町', nameEn: 'Oguni', status: 'coming-soon'},
  {jis: '06402', slug: 'shirataka', nameJa: '白鷹町', nameEn: 'Shirataka', status: 'coming-soon'},
  {jis: '06403', slug: 'iide', nameJa: '飯豊町', nameEn: 'Iide', status: 'coming-soon'},
  {jis: '06426', slug: 'mikawa', nameJa: '三川町', nameEn: 'Mikawa', status: 'coming-soon'},
  {jis: '06428', slug: 'shiyonai', nameJa: '庄内町', nameEn: 'Shiyonai', status: 'coming-soon'},
  {jis: '06461', slug: 'yuza', nameJa: '遊佐町', nameEn: 'Yuza', status: 'coming-soon'},
];

export const YAMAGATA_MUNICIPALITY_BY_SLUG = new Map(
  YAMAGATA_MUNICIPALITIES.map((m) => [m.slug, m])
);
