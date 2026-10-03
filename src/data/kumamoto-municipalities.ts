import type {Municipality} from './kagawa-municipalities';

/**
 * Kumamoto municipalities (熊本県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const KUMAMOTO_MUNICIPALITIES: Municipality[] = [
  {jis: '43100', slug: 'kumamoto', nameJa: '熊本市', nameEn: 'Kumamoto', status: 'coming-soon'},
  {jis: '43202', slug: 'yatsushiro', nameJa: '八代市', nameEn: 'Yatsushiro', status: 'coming-soon'},
  {jis: '43203', slug: 'hitoyoshi', nameJa: '人吉市', nameEn: 'Hitoyoshi', status: 'coming-soon'},
  {jis: '43204', slug: 'arao', nameJa: '荒尾市', nameEn: 'Arao', status: 'coming-soon'},
  {jis: '43205', slug: 'minamata', nameJa: '水俣市', nameEn: 'Minamata', status: 'coming-soon'},
  {jis: '43206', slug: 'tamana', nameJa: '玉名市', nameEn: 'Tamana', status: 'coming-soon'},
  {jis: '43208', slug: 'yamaga', nameJa: '山鹿市', nameEn: 'Yamaga', status: 'coming-soon'},
  {jis: '43210', slug: 'kikuchi', nameJa: '菊池市', nameEn: 'Kikuchi', status: 'coming-soon'},
  {jis: '43211', slug: 'uto', nameJa: '宇土市', nameEn: 'Uto', status: 'coming-soon'},
  {jis: '43212', slug: 'kamiamakusa', nameJa: '上天草市', nameEn: 'Kamiamakusa', status: 'coming-soon'},
  {jis: '43213', slug: 'uki', nameJa: '宇城市', nameEn: 'Uki', status: 'coming-soon'},
  {jis: '43214', slug: 'aso', nameJa: '阿蘇市', nameEn: 'Aso', status: 'coming-soon'},
  {jis: '43215', slug: 'amakusa', nameJa: '天草市', nameEn: 'Amakusa', status: 'coming-soon'},
  {jis: '43216', slug: 'koshi', nameJa: '合志市', nameEn: 'Koshi', status: 'coming-soon'},
  {jis: '43348', slug: 'misato', nameJa: '美里町', nameEn: 'Misato', status: 'coming-soon'},
  {jis: '43364', slug: 'gyokuto', nameJa: '玉東町', nameEn: 'Gyokuto', status: 'coming-soon'},
  {jis: '43367', slug: 'nankan', nameJa: '南関町', nameEn: 'Nankan', status: 'coming-soon'},
  {jis: '43368', slug: 'nagasu', nameJa: '長洲町', nameEn: 'Nagasu', status: 'coming-soon'},
  {jis: '43369', slug: 'nagomi', nameJa: '和水町', nameEn: 'Nagomi', status: 'coming-soon'},
  {jis: '43403', slug: 'ozu', nameJa: '大津町', nameEn: 'Ozu', status: 'coming-soon'},
  {jis: '43404', slug: 'kikuyo', nameJa: '菊陽町', nameEn: 'Kikuyo', status: 'coming-soon'},
  {jis: '43423', slug: 'minamioguni', nameJa: '南小国町', nameEn: 'Minamioguni', status: 'coming-soon'},
  {jis: '43424', slug: 'oguni', nameJa: '小国町', nameEn: 'Oguni', status: 'coming-soon'},
  {jis: '43425', slug: 'ubuyama', nameJa: '産山村', nameEn: 'Ubuyama', status: 'coming-soon'},
  {jis: '43428', slug: 'takamori', nameJa: '高森町', nameEn: 'Takamori', status: 'coming-soon'},
  {jis: '43432', slug: 'nishihara', nameJa: '西原村', nameEn: 'Nishihara', status: 'coming-soon'},
  {jis: '43433', slug: 'minamiaso', nameJa: '南阿蘇村', nameEn: 'Minamiaso', status: 'coming-soon'},
  {jis: '43441', slug: 'mifune', nameJa: '御船町', nameEn: 'Mifune', status: 'coming-soon'},
  {jis: '43442', slug: 'kashima', nameJa: '嘉島町', nameEn: 'Kashima', status: 'coming-soon'},
  {jis: '43443', slug: 'mashiki', nameJa: '益城町', nameEn: 'Mashiki', status: 'coming-soon'},
  {jis: '43444', slug: 'kosa', nameJa: '甲佐町', nameEn: 'Kosa', status: 'coming-soon'},
  {jis: '43447', slug: 'yamato', nameJa: '山都町', nameEn: 'Yamato', status: 'coming-soon'},
  {jis: '43468', slug: 'hikawa', nameJa: '氷川町', nameEn: 'Hikawa', status: 'coming-soon'},
  {jis: '43482', slug: 'ashikita', nameJa: '芦北町', nameEn: 'Ashikita', status: 'coming-soon'},
  {jis: '43484', slug: 'tsunagi', nameJa: '津奈木町', nameEn: 'Tsunagi', status: 'coming-soon'},
  {jis: '43501', slug: 'nishiki', nameJa: '錦町', nameEn: 'Nishiki', status: 'coming-soon'},
  {jis: '43505', slug: 'taragi', nameJa: '多良木町', nameEn: 'Taragi', status: 'coming-soon'},
  {jis: '43506', slug: 'yunomae', nameJa: '湯前町', nameEn: 'Yunomae', status: 'coming-soon'},
  {jis: '43507', slug: 'mizukami', nameJa: '水上村', nameEn: 'Mizukami', status: 'coming-soon'},
  {jis: '43510', slug: 'sagara', nameJa: '相良村', nameEn: 'Sagara', status: 'coming-soon'},
  {jis: '43511', slug: 'itsuki', nameJa: '五木村', nameEn: 'Itsuki', status: 'coming-soon'},
  {jis: '43512', slug: 'yamae', nameJa: '山江村', nameEn: 'Yamae', status: 'coming-soon'},
  {jis: '43513', slug: 'kuma', nameJa: '球磨村', nameEn: 'Kuma', status: 'coming-soon'},
  {jis: '43514', slug: 'asagiri', nameJa: 'あさぎり町', nameEn: 'Asagiri', status: 'coming-soon'},
  {jis: '43531', slug: 'reihoku', nameJa: '苓北町', nameEn: 'Reihoku', status: 'coming-soon'},
];

export const KUMAMOTO_MUNICIPALITY_BY_SLUG = new Map(
  KUMAMOTO_MUNICIPALITIES.map((m) => [m.slug, m])
);
