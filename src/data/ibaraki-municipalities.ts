import type {Municipality} from './kagawa-municipalities';

/**
 * Ibaraki municipalities (茨城県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const IBARAKI_MUNICIPALITIES: Municipality[] = [
  {jis: '08201', slug: 'mito', nameJa: '水戸市', nameEn: 'Mito', status: 'coming-soon'},
  {jis: '08202', slug: 'hitachi', nameJa: '日立市', nameEn: 'Hitachi', status: 'coming-soon'},
  {jis: '08203', slug: 'tsuchiura', nameJa: '土浦市', nameEn: 'Tsuchiura', status: 'coming-soon'},
  {jis: '08204', slug: 'koga', nameJa: '古河市', nameEn: 'Koga', status: 'coming-soon'},
  {jis: '08205', slug: 'ishioka', nameJa: '石岡市', nameEn: 'Ishioka', status: 'coming-soon'},
  {jis: '08207', slug: 'yuuki', nameJa: '結城市', nameEn: 'Yuuki', status: 'coming-soon'},
  {jis: '08208', slug: 'ryugasaki', nameJa: '龍ケ崎市', nameEn: 'Ryugasaki', status: 'coming-soon'},
  {jis: '08210', slug: 'shimotsuma', nameJa: '下妻市', nameEn: 'Shimotsuma', status: 'coming-soon'},
  {jis: '08211', slug: 'joso', nameJa: '常総市', nameEn: 'Joso', status: 'coming-soon'},
  {jis: '08212', slug: 'hitachiota', nameJa: '常陸太田市', nameEn: 'Hitachiota', status: 'coming-soon'},
  {jis: '08214', slug: 'takahagi', nameJa: '高萩市', nameEn: 'Takahagi', status: 'coming-soon'},
  {jis: '08215', slug: 'kitaibaraki', nameJa: '北茨城市', nameEn: 'Kitaibaraki', status: 'coming-soon'},
  {jis: '08216', slug: 'kasama', nameJa: '笠間市', nameEn: 'Kasama', status: 'coming-soon'},
  {jis: '08217', slug: 'toride', nameJa: '取手市', nameEn: 'Toride', status: 'coming-soon'},
  {jis: '08219', slug: 'ushiku', nameJa: '牛久市', nameEn: 'Ushiku', status: 'coming-soon'},
  {jis: '08220', slug: 'tsukuba', nameJa: 'つくば市', nameEn: 'Tsukuba', status: 'coming-soon'},
  {jis: '08221', slug: 'hitachinaka', nameJa: 'ひたちなか市', nameEn: 'Hitachinaka', status: 'coming-soon'},
  {jis: '08222', slug: 'kashima', nameJa: '鹿嶋市', nameEn: 'Kashima', status: 'coming-soon'},
  {jis: '08223', slug: 'itako', nameJa: '潮来市', nameEn: 'Itako', status: 'coming-soon'},
  {jis: '08224', slug: 'moriya', nameJa: '守谷市', nameEn: 'Moriya', status: 'coming-soon'},
  {jis: '08225', slug: 'hitachiomiya', nameJa: '常陸大宮市', nameEn: 'Hitachiomiya', status: 'coming-soon'},
  {jis: '08226', slug: 'naka', nameJa: '那珂市', nameEn: 'Naka', status: 'coming-soon'},
  {jis: '08227', slug: 'chikusei', nameJa: '筑西市', nameEn: 'Chikusei', status: 'coming-soon'},
  {jis: '08228', slug: 'bando', nameJa: '坂東市', nameEn: 'Bando', status: 'coming-soon'},
  {jis: '08229', slug: 'inashiki', nameJa: '稲敷市', nameEn: 'Inashiki', status: 'coming-soon'},
  {jis: '08230', slug: 'kasumigaura', nameJa: 'かすみがうら市', nameEn: 'Kasumigaura', status: 'coming-soon'},
  {jis: '08231', slug: 'sakuragawa', nameJa: '桜川市', nameEn: 'Sakuragawa', status: 'coming-soon'},
  {jis: '08232', slug: 'kamisu', nameJa: '神栖市', nameEn: 'Kamisu', status: 'coming-soon'},
  {jis: '08233', slug: 'namegata', nameJa: '行方市', nameEn: 'Namegata', status: 'coming-soon'},
  {jis: '08234', slug: 'hokota', nameJa: '鉾田市', nameEn: 'Hokota', status: 'coming-soon'},
  {jis: '08235', slug: 'tsukubamirai', nameJa: 'つくばみらい市', nameEn: 'Tsukubamirai', status: 'coming-soon'},
  {jis: '08236', slug: 'omitama', nameJa: '小美玉市', nameEn: 'Omitama', status: 'coming-soon'},
  {jis: '08302', slug: 'ibaraki', nameJa: '茨城町', nameEn: 'Ibaraki', status: 'coming-soon'},
  {jis: '08309', slug: 'oarai', nameJa: '大洗町', nameEn: 'Oarai', status: 'coming-soon'},
  {jis: '08310', slug: 'shirosato', nameJa: '城里町', nameEn: 'Shirosato', status: 'coming-soon'},
  {jis: '08341', slug: 'tokai', nameJa: '東海村', nameEn: 'Tokai', status: 'coming-soon'},
  {jis: '08364', slug: 'daigo', nameJa: '大子町', nameEn: 'Daigo', status: 'coming-soon'},
  {jis: '08442', slug: 'miho', nameJa: '美浦村', nameEn: 'Miho', status: 'coming-soon'},
  {jis: '08443', slug: 'ami', nameJa: '阿見町', nameEn: 'Ami', status: 'coming-soon'},
  {jis: '08447', slug: 'kawachi', nameJa: '河内町', nameEn: 'Kawachi', status: 'coming-soon'},
  {jis: '08521', slug: 'yachiyo', nameJa: '八千代町', nameEn: 'Yachiyo', status: 'coming-soon'},
  {jis: '08542', slug: 'goka', nameJa: '五霞町', nameEn: 'Goka', status: 'coming-soon'},
  {jis: '08546', slug: 'sakai', nameJa: '境町', nameEn: 'Sakai', status: 'coming-soon'},
  {jis: '08564', slug: 'tone', nameJa: '利根町', nameEn: 'Tone', status: 'coming-soon'},
];

export const IBARAKI_MUNICIPALITY_BY_SLUG = new Map(
  IBARAKI_MUNICIPALITIES.map((m) => [m.slug, m])
);
