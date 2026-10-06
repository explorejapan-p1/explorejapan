import type {Municipality} from './kagawa-municipalities';

/**
 * Saitama municipalities (埼玉県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const SAITAMA_MUNICIPALITIES: Municipality[] = [
  {jis: '11100', slug: 'saitama', nameJa: 'さいたま市', nameEn: 'Saitama', status: 'coming-soon'},
  {jis: '11201', slug: 'kawagoe', nameJa: '川越市', nameEn: 'Kawagoe', status: 'coming-soon'},
  {jis: '11202', slug: 'kumagaya', nameJa: '熊谷市', nameEn: 'Kumagaya', status: 'coming-soon'},
  {jis: '11203', slug: 'kawaguchi', nameJa: '川口市', nameEn: 'Kawaguchi', status: 'coming-soon'},
  {jis: '11206', slug: 'giyoda', nameJa: '行田市', nameEn: 'Giyoda', status: 'coming-soon'},
  {jis: '11207', slug: 'chichibu', nameJa: '秩父市', nameEn: 'Chichibu', status: 'coming-soon'},
  {jis: '11208', slug: 'tokorozawa', nameJa: '所沢市', nameEn: 'Tokorozawa', status: 'coming-soon'},
  {jis: '11209', slug: 'hanno', nameJa: '飯能市', nameEn: 'Hanno', status: 'coming-soon'},
  {jis: '11210', slug: 'kazo', nameJa: '加須市', nameEn: 'Kazo', status: 'coming-soon'},
  {jis: '11211', slug: 'honjiyo', nameJa: '本庄市', nameEn: 'Honjiyo', status: 'coming-soon'},
  {jis: '11212', slug: 'higashimatsuyama', nameJa: '東松山市', nameEn: 'Higashimatsuyama', status: 'coming-soon'},
  {jis: '11214', slug: 'kasukabe', nameJa: '春日部市', nameEn: 'Kasukabe', status: 'coming-soon'},
  {jis: '11215', slug: 'sayama', nameJa: '狭山市', nameEn: 'Sayama', status: 'coming-soon'},
  {jis: '11216', slug: 'haniyuu', nameJa: '羽生市', nameEn: 'Haniyuu', status: 'coming-soon'},
  {jis: '11217', slug: 'konosu', nameJa: '鴻巣市', nameEn: 'Konosu', status: 'coming-soon'},
  {jis: '11218', slug: 'fukaya', nameJa: '深谷市', nameEn: 'Fukaya', status: 'coming-soon'},
  {jis: '11219', slug: 'ageo', nameJa: '上尾市', nameEn: 'Ageo', status: 'coming-soon'},
  {jis: '11221', slug: 'soka', nameJa: '草加市', nameEn: 'Soka', status: 'coming-soon'},
  {jis: '11222', slug: 'koshigaya', nameJa: '越谷市', nameEn: 'Koshigaya', status: 'coming-soon'},
  {jis: '11223', slug: 'warabi', nameJa: '蕨市', nameEn: 'Warabi', status: 'coming-soon'},
  {jis: '11224', slug: 'toda', nameJa: '戸田市', nameEn: 'Toda', status: 'coming-soon'},
  {jis: '11225', slug: 'iruma', nameJa: '入間市', nameEn: 'Iruma', status: 'coming-soon'},
  {jis: '11227', slug: 'asaka', nameJa: '朝霞市', nameEn: 'Asaka', status: 'coming-soon'},
  {jis: '11228', slug: 'shiki', nameJa: '志木市', nameEn: 'Shiki', status: 'coming-soon'},
  {jis: '11229', slug: 'wako', nameJa: '和光市', nameEn: 'Wako', status: 'coming-soon'},
  {jis: '11230', slug: 'niiza', nameJa: '新座市', nameEn: 'Niiza', status: 'coming-soon'},
  {jis: '11231', slug: 'okegawa', nameJa: '桶川市', nameEn: 'Okegawa', status: 'coming-soon'},
  {jis: '11232', slug: 'kuki', nameJa: '久喜市', nameEn: 'Kuki', status: 'coming-soon'},
  {jis: '11233', slug: 'kitamoto', nameJa: '北本市', nameEn: 'Kitamoto', status: 'coming-soon'},
  {jis: '11234', slug: 'yashio', nameJa: '八潮市', nameEn: 'Yashio', status: 'coming-soon'},
  {jis: '11235', slug: 'fujimi', nameJa: '富士見市', nameEn: 'Fujimi', status: 'coming-soon'},
  {jis: '11237', slug: 'misato', nameJa: '三郷市', nameEn: 'Misato', status: 'coming-soon'},
  {jis: '11238', slug: 'hasuda', nameJa: '蓮田市', nameEn: 'Hasuda', status: 'coming-soon'},
  {jis: '11239', slug: 'sakado', nameJa: '坂戸市', nameEn: 'Sakado', status: 'coming-soon'},
  {jis: '11240', slug: 'satte', nameJa: '幸手市', nameEn: 'Satte', status: 'coming-soon'},
  {jis: '11241', slug: 'tsurugashima', nameJa: '鶴ヶ島市', nameEn: 'Tsurugashima', status: 'coming-soon'},
  {jis: '11242', slug: 'hidaka', nameJa: '日高市', nameEn: 'Hidaka', status: 'coming-soon'},
  {jis: '11243', slug: 'yoshikawa', nameJa: '吉川市', nameEn: 'Yoshikawa', status: 'coming-soon'},
  {jis: '11245', slug: 'fujimino', nameJa: 'ふじみ野市', nameEn: 'Fujimino', status: 'coming-soon'},
  {jis: '11246', slug: 'shiraoka', nameJa: '白岡市', nameEn: 'Shiraoka', status: 'coming-soon'},
  {jis: '11301', slug: 'ina', nameJa: '伊奈町', nameEn: 'Ina', status: 'coming-soon'},
  {jis: '11324', slug: 'miyoshi', nameJa: '三芳町', nameEn: 'Miyoshi', status: 'coming-soon'},
  {jis: '11326', slug: 'moroyama', nameJa: '毛呂山町', nameEn: 'Moroyama', status: 'coming-soon'},
  {jis: '11327', slug: 'ogose', nameJa: '越生町', nameEn: 'Ogose', status: 'coming-soon'},
  {jis: '11341', slug: 'namegawa', nameJa: '滑川町', nameEn: 'Namegawa', status: 'coming-soon'},
  {jis: '11342', slug: 'ranzan', nameJa: '嵐山町', nameEn: 'Ranzan', status: 'coming-soon'},
  {jis: '11343', slug: 'ogawa', nameJa: '小川町', nameEn: 'Ogawa', status: 'coming-soon'},
  {jis: '11346', slug: 'kawajima', nameJa: '川島町', nameEn: 'Kawajima', status: 'coming-soon'},
  {jis: '11347', slug: 'yoshimi', nameJa: '吉見町', nameEn: 'Yoshimi', status: 'coming-soon'},
  {jis: '11348', slug: 'hatoyama', nameJa: '鳩山町', nameEn: 'Hatoyama', status: 'coming-soon'},
  {jis: '11349', slug: 'tokigawa', nameJa: 'ときがわ町', nameEn: 'Tokigawa', status: 'coming-soon'},
  {jis: '11361', slug: 'yokoze', nameJa: '横瀬町', nameEn: 'Yokoze', status: 'coming-soon'},
  {jis: '11362', slug: 'minano', nameJa: '皆野町', nameEn: 'Minano', status: 'coming-soon'},
  {jis: '11363', slug: 'nagatoro', nameJa: '長瀞町', nameEn: 'Nagatoro', status: 'coming-soon'},
  {jis: '11365', slug: 'ogano', nameJa: '小鹿野町', nameEn: 'Ogano', status: 'coming-soon'},
  {jis: '11369', slug: 'higashichichibu', nameJa: '東秩父村', nameEn: 'Higashichichibu', status: 'coming-soon'},
  {jis: '11381', slug: 'misatocho', nameJa: '美里町', nameEn: 'Misatocho', status: 'coming-soon'},
  {jis: '11383', slug: 'kamikawa', nameJa: '神川町', nameEn: 'Kamikawa', status: 'coming-soon'},
  {jis: '11385', slug: 'kamisato', nameJa: '上里町', nameEn: 'Kamisato', status: 'coming-soon'},
  {jis: '11408', slug: 'yorii', nameJa: '寄居町', nameEn: 'Yorii', status: 'coming-soon'},
  {jis: '11442', slug: 'miyashiro', nameJa: '宮代町', nameEn: 'Miyashiro', status: 'coming-soon'},
  {jis: '11464', slug: 'sugito', nameJa: '杉戸町', nameEn: 'Sugito', status: 'coming-soon'},
  {jis: '11465', slug: 'matsubushi', nameJa: '松伏町', nameEn: 'Matsubushi', status: 'coming-soon'},
];

export const SAITAMA_MUNICIPALITY_BY_SLUG = new Map(
  SAITAMA_MUNICIPALITIES.map((m) => [m.slug, m])
);
