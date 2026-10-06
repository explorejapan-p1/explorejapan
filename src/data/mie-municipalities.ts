import type {Municipality} from './kagawa-municipalities';

/**
 * Mie municipalities (三重県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const MIE_MUNICIPALITIES: Municipality[] = [
  {jis: '24201', slug: 'tsu', nameJa: '津市', nameEn: 'Tsu', status: 'coming-soon'},
  {jis: '24202', slug: 'yokkaichi', nameJa: '四日市市', nameEn: 'Yokkaichi', status: 'coming-soon'},
  {jis: '24203', slug: 'ise', nameJa: '伊勢市', nameEn: 'Ise', status: 'coming-soon'},
  {jis: '24204', slug: 'matsusaka', nameJa: '松阪市', nameEn: 'Matsusaka', status: 'coming-soon'},
  {jis: '24205', slug: 'kuwana', nameJa: '桑名市', nameEn: 'Kuwana', status: 'coming-soon'},
  {jis: '24207', slug: 'suzuka', nameJa: '鈴鹿市', nameEn: 'Suzuka', status: 'coming-soon'},
  {jis: '24208', slug: 'nabari', nameJa: '名張市', nameEn: 'Nabari', status: 'coming-soon'},
  {jis: '24209', slug: 'owase', nameJa: '尾鷲市', nameEn: 'Owase', status: 'coming-soon'},
  {jis: '24210', slug: 'kameyama', nameJa: '亀山市', nameEn: 'Kameyama', status: 'coming-soon'},
  {jis: '24211', slug: 'toba', nameJa: '鳥羽市', nameEn: 'Toba', status: 'coming-soon'},
  {jis: '24212', slug: 'kumano', nameJa: '熊野市', nameEn: 'Kumano', status: 'coming-soon'},
  {jis: '24214', slug: 'inabe', nameJa: 'いなべ市', nameEn: 'Inabe', status: 'coming-soon'},
  {jis: '24215', slug: 'shima', nameJa: '志摩市', nameEn: 'Shima', status: 'coming-soon'},
  {jis: '24216', slug: 'iga', nameJa: '伊賀市', nameEn: 'Iga', status: 'coming-soon'},
  {jis: '24303', slug: 'kisosaki', nameJa: '木曽岬町', nameEn: 'Kisosaki', status: 'coming-soon'},
  {jis: '24324', slug: 'toin', nameJa: '東員町', nameEn: 'Toin', status: 'coming-soon'},
  {jis: '24341', slug: 'komono', nameJa: '菰野町', nameEn: 'Komono', status: 'coming-soon'},
  {jis: '24343', slug: 'asahi', nameJa: '朝日町', nameEn: 'Asahi', status: 'coming-soon'},
  {jis: '24344', slug: 'kawagoe', nameJa: '川越町', nameEn: 'Kawagoe', status: 'coming-soon'},
  {jis: '24441', slug: 'taki', nameJa: '多気町', nameEn: 'Taki', status: 'coming-soon'},
  {jis: '24442', slug: 'meiwa', nameJa: '明和町', nameEn: 'Meiwa', status: 'coming-soon'},
  {jis: '24443', slug: 'odai', nameJa: '大台町', nameEn: 'Odai', status: 'coming-soon'},
  {jis: '24461', slug: 'tamaki', nameJa: '玉城町', nameEn: 'Tamaki', status: 'coming-soon'},
  {jis: '24470', slug: 'watarai', nameJa: '度会町', nameEn: 'Watarai', status: 'coming-soon'},
  {jis: '24471', slug: 'taiki', nameJa: '大紀町', nameEn: 'Taiki', status: 'coming-soon'},
  {jis: '24472', slug: 'minamiise', nameJa: '南伊勢町', nameEn: 'Minamiise', status: 'coming-soon'},
  {jis: '24543', slug: 'kihoku', nameJa: '紀北町', nameEn: 'Kihoku', status: 'coming-soon'},
  {jis: '24561', slug: 'mihama', nameJa: '御浜町', nameEn: 'Mihama', status: 'coming-soon'},
  {jis: '24562', slug: 'kiho', nameJa: '紀宝町', nameEn: 'Kiho', status: 'coming-soon'},
];

export const MIE_MUNICIPALITY_BY_SLUG = new Map(
  MIE_MUNICIPALITIES.map((m) => [m.slug, m])
);
