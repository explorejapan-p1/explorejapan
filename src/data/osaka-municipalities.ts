import type {Municipality} from './kagawa-municipalities';

/**
 * Osaka municipalities (大阪府).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const OSAKA_MUNICIPALITIES: Municipality[] = [
  {jis: '27100', slug: 'osaka', nameJa: '大阪市', nameEn: 'Osaka', status: 'coming-soon'},
  {jis: '27140', slug: 'sakai', nameJa: '堺市', nameEn: 'Sakai', status: 'coming-soon'},
  {jis: '27202', slug: 'kishiwada', nameJa: '岸和田市', nameEn: 'Kishiwada', status: 'coming-soon'},
  {jis: '27203', slug: 'toyonaka', nameJa: '豊中市', nameEn: 'Toyonaka', status: 'coming-soon'},
  {jis: '27204', slug: 'ikeda', nameJa: '池田市', nameEn: 'Ikeda', status: 'coming-soon'},
  {jis: '27205', slug: 'suita', nameJa: '吹田市', nameEn: 'Suita', status: 'coming-soon'},
  {jis: '27206', slug: 'izumiotsu', nameJa: '泉大津市', nameEn: 'Izumiotsu', status: 'coming-soon'},
  {jis: '27207', slug: 'takatsuki', nameJa: '高槻市', nameEn: 'Takatsuki', status: 'coming-soon'},
  {jis: '27208', slug: 'kaizuka', nameJa: '貝塚市', nameEn: 'Kaizuka', status: 'coming-soon'},
  {jis: '27209', slug: 'moriguchi', nameJa: '守口市', nameEn: 'Moriguchi', status: 'coming-soon'},
  {jis: '27210', slug: 'hirakata', nameJa: '枚方市', nameEn: 'Hirakata', status: 'coming-soon'},
  {jis: '27211', slug: 'ibaraki', nameJa: '茨木市', nameEn: 'Ibaraki', status: 'coming-soon'},
  {jis: '27212', slug: 'yao', nameJa: '八尾市', nameEn: 'Yao', status: 'coming-soon'},
  {jis: '27213', slug: 'izumisano', nameJa: '泉佐野市', nameEn: 'Izumisano', status: 'coming-soon'},
  {jis: '27214', slug: 'tondabayashi', nameJa: '富田林市', nameEn: 'Tondabayashi', status: 'coming-soon'},
  {jis: '27215', slug: 'neyagawa', nameJa: '寝屋川市', nameEn: 'Neyagawa', status: 'coming-soon'},
  {jis: '27216', slug: 'kawachinagano', nameJa: '河内長野市', nameEn: 'Kawachinagano', status: 'coming-soon'},
  {jis: '27217', slug: 'matsubara', nameJa: '松原市', nameEn: 'Matsubara', status: 'coming-soon'},
  {jis: '27218', slug: 'daito', nameJa: '大東市', nameEn: 'Daito', status: 'coming-soon'},
  {jis: '27219', slug: 'izumi', nameJa: '和泉市', nameEn: 'Izumi', status: 'coming-soon'},
  {jis: '27220', slug: 'minoo', nameJa: '箕面市', nameEn: 'Minoo', status: 'coming-soon'},
  {jis: '27221', slug: 'kashiwara', nameJa: '柏原市', nameEn: 'Kashiwara', status: 'coming-soon'},
  {jis: '27222', slug: 'habikino', nameJa: '羽曳野市', nameEn: 'Habikino', status: 'coming-soon'},
  {jis: '27223', slug: 'kadoma', nameJa: '門真市', nameEn: 'Kadoma', status: 'coming-soon'},
  {jis: '27224', slug: 'settsu', nameJa: '摂津市', nameEn: 'Settsu', status: 'coming-soon'},
  {jis: '27225', slug: 'takaishi', nameJa: '高石市', nameEn: 'Takaishi', status: 'coming-soon'},
  {jis: '27226', slug: 'fujiidera', nameJa: '藤井寺市', nameEn: 'Fujiidera', status: 'coming-soon'},
  {jis: '27227', slug: 'higashiosaka', nameJa: '東大阪市', nameEn: 'Higashiosaka', status: 'coming-soon'},
  {jis: '27228', slug: 'sennan', nameJa: '泉南市', nameEn: 'Sennan', status: 'coming-soon'},
  {jis: '27229', slug: 'shijiyonawate', nameJa: '四條畷市', nameEn: 'Shijiyonawate', status: 'coming-soon'},
  {jis: '27230', slug: 'katano', nameJa: '交野市', nameEn: 'Katano', status: 'coming-soon'},
  {jis: '27231', slug: 'osakasayama', nameJa: '大阪狭山市', nameEn: 'Osakasayama', status: 'coming-soon'},
  {jis: '27232', slug: 'hannan', nameJa: '阪南市', nameEn: 'Hannan', status: 'coming-soon'},
  {jis: '27301', slug: 'shimamoto', nameJa: '島本町', nameEn: 'Shimamoto', status: 'coming-soon'},
  {jis: '27321', slug: 'toyono', nameJa: '豊能町', nameEn: 'Toyono', status: 'coming-soon'},
  {jis: '27322', slug: 'nose', nameJa: '能勢町', nameEn: 'Nose', status: 'coming-soon'},
  {jis: '27341', slug: 'tadaoka', nameJa: '忠岡町', nameEn: 'Tadaoka', status: 'coming-soon'},
  {jis: '27361', slug: 'kumatori', nameJa: '熊取町', nameEn: 'Kumatori', status: 'coming-soon'},
  {jis: '27362', slug: 'tajiri', nameJa: '田尻町', nameEn: 'Tajiri', status: 'coming-soon'},
  {jis: '27366', slug: 'misaki', nameJa: '岬町', nameEn: 'Misaki', status: 'coming-soon'},
  {jis: '27381', slug: 'taishi', nameJa: '太子町', nameEn: 'Taishi', status: 'coming-soon'},
  {jis: '27382', slug: 'kanan', nameJa: '河南町', nameEn: 'Kanan', status: 'coming-soon'},
  {jis: '27383', slug: 'chihayaakasaka', nameJa: '千早赤阪村', nameEn: 'Chihayaakasaka', status: 'coming-soon'},
];

export const OSAKA_MUNICIPALITY_BY_SLUG = new Map(
  OSAKA_MUNICIPALITIES.map((m) => [m.slug, m])
);
