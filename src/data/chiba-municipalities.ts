import type {Municipality} from './kagawa-municipalities';

/**
 * Chiba municipalities (千葉県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const CHIBA_MUNICIPALITIES: Municipality[] = [
  {jis: '12100', slug: 'chiba', nameJa: '千葉市', nameEn: 'Chiba', status: 'coming-soon'},
  {jis: '12202', slug: 'choshi', nameJa: '銚子市', nameEn: 'Choshi', status: 'coming-soon'},
  {jis: '12203', slug: 'ichikawa', nameJa: '市川市', nameEn: 'Ichikawa', status: 'coming-soon'},
  {jis: '12204', slug: 'funabashi', nameJa: '船橋市', nameEn: 'Funabashi', status: 'coming-soon'},
  {jis: '12205', slug: 'tateyama', nameJa: '館山市', nameEn: 'Tateyama', status: 'coming-soon'},
  {jis: '12206', slug: 'kisarazu', nameJa: '木更津市', nameEn: 'Kisarazu', status: 'coming-soon'},
  {jis: '12207', slug: 'matsudo', nameJa: '松戸市', nameEn: 'Matsudo', status: 'coming-soon'},
  {jis: '12208', slug: 'noda', nameJa: '野田市', nameEn: 'Noda', status: 'coming-soon'},
  {jis: '12210', slug: 'mobara', nameJa: '茂原市', nameEn: 'Mobara', status: 'coming-soon'},
  {jis: '12211', slug: 'narita', nameJa: '成田市', nameEn: 'Narita', status: 'coming-soon'},
  {jis: '12212', slug: 'sakura', nameJa: '佐倉市', nameEn: 'Sakura', status: 'coming-soon'},
  {jis: '12213', slug: 'togane', nameJa: '東金市', nameEn: 'Togane', status: 'coming-soon'},
  {jis: '12215', slug: 'asahi', nameJa: '旭市', nameEn: 'Asahi', status: 'coming-soon'},
  {jis: '12216', slug: 'narashino', nameJa: '習志野市', nameEn: 'Narashino', status: 'coming-soon'},
  {jis: '12217', slug: 'kashiwa', nameJa: '柏市', nameEn: 'Kashiwa', status: 'coming-soon'},
  {jis: '12218', slug: 'katsuura', nameJa: '勝浦市', nameEn: 'Katsuura', status: 'coming-soon'},
  {jis: '12219', slug: 'ichihara', nameJa: '市原市', nameEn: 'Ichihara', status: 'coming-soon'},
  {jis: '12220', slug: 'nagareyama', nameJa: '流山市', nameEn: 'Nagareyama', status: 'coming-soon'},
  {jis: '12221', slug: 'yachiyo', nameJa: '八千代市', nameEn: 'Yachiyo', status: 'coming-soon'},
  {jis: '12222', slug: 'abiko', nameJa: '我孫子市', nameEn: 'Abiko', status: 'coming-soon'},
  {jis: '12223', slug: 'kamogawa', nameJa: '鴨川市', nameEn: 'Kamogawa', status: 'coming-soon'},
  {jis: '12224', slug: 'kamagaya', nameJa: '鎌ケ谷市', nameEn: 'Kamagaya', status: 'coming-soon'},
  {jis: '12225', slug: 'kimitsu', nameJa: '君津市', nameEn: 'Kimitsu', status: 'coming-soon'},
  {jis: '12226', slug: 'futtsu', nameJa: '富津市', nameEn: 'Futtsu', status: 'coming-soon'},
  {jis: '12227', slug: 'urayasu', nameJa: '浦安市', nameEn: 'Urayasu', status: 'coming-soon'},
  {jis: '12228', slug: 'yotsukaido', nameJa: '四街道市', nameEn: 'Yotsukaido', status: 'coming-soon'},
  {jis: '12229', slug: 'sodegaura', nameJa: '袖ケ浦市', nameEn: 'Sodegaura', status: 'coming-soon'},
  {jis: '12230', slug: 'yachimata', nameJa: '八街市', nameEn: 'Yachimata', status: 'coming-soon'},
  {jis: '12231', slug: 'inzai', nameJa: '印西市', nameEn: 'Inzai', status: 'coming-soon'},
  {jis: '12232', slug: 'shiroi', nameJa: '白井市', nameEn: 'Shiroi', status: 'coming-soon'},
  {jis: '12233', slug: 'tomisato', nameJa: '富里市', nameEn: 'Tomisato', status: 'coming-soon'},
  {jis: '12234', slug: 'minamiboso', nameJa: '南房総市', nameEn: 'Minamiboso', status: 'coming-soon'},
  {jis: '12235', slug: 'sosa', nameJa: '匝瑳市', nameEn: 'Sosa', status: 'coming-soon'},
  {jis: '12236', slug: 'katori', nameJa: '香取市', nameEn: 'Katori', status: 'coming-soon'},
  {jis: '12237', slug: 'sanmu', nameJa: '山武市', nameEn: 'Sanmu', status: 'coming-soon'},
  {jis: '12238', slug: 'isumi', nameJa: 'いすみ市', nameEn: 'Isumi', status: 'coming-soon'},
  {jis: '12239', slug: 'oamishirasato', nameJa: '大網白里市', nameEn: 'Oamishirasato', status: 'coming-soon'},
  {jis: '12322', slug: 'shisui', nameJa: '酒々井町', nameEn: 'Shisui', status: 'coming-soon'},
  {jis: '12329', slug: 'sakae', nameJa: '栄町', nameEn: 'Sakae', status: 'coming-soon'},
  {jis: '12342', slug: 'kozaki', nameJa: '神崎町', nameEn: 'Kozaki', status: 'coming-soon'},
  {jis: '12347', slug: 'tako', nameJa: '多古町', nameEn: 'Tako', status: 'coming-soon'},
  {jis: '12349', slug: 'tonosho', nameJa: '東庄町', nameEn: 'Tonosho', status: 'coming-soon'},
  {jis: '12403', slug: 'kujiyuukuri', nameJa: '九十九里町', nameEn: 'Kujiyuukuri', status: 'coming-soon'},
  {jis: '12409', slug: 'shibayama', nameJa: '芝山町', nameEn: 'Shibayama', status: 'coming-soon'},
  {jis: '12410', slug: 'yokoshibahikari', nameJa: '横芝光町', nameEn: 'Yokoshibahikari', status: 'coming-soon'},
  {jis: '12421', slug: 'ichinomiya', nameJa: '一宮町', nameEn: 'Ichinomiya', status: 'coming-soon'},
  {jis: '12422', slug: 'mutsuzawa', nameJa: '睦沢町', nameEn: 'Mutsuzawa', status: 'coming-soon'},
  {jis: '12423', slug: 'chosei', nameJa: '長生村', nameEn: 'Chosei', status: 'coming-soon'},
  {jis: '12424', slug: 'shirako', nameJa: '白子町', nameEn: 'Shirako', status: 'coming-soon'},
  {jis: '12426', slug: 'nagara', nameJa: '長柄町', nameEn: 'Nagara', status: 'coming-soon'},
  {jis: '12427', slug: 'chonan', nameJa: '長南町', nameEn: 'Chonan', status: 'coming-soon'},
  {jis: '12441', slug: 'otaki', nameJa: '大多喜町', nameEn: 'Otaki', status: 'coming-soon'},
  {jis: '12443', slug: 'onjiyuku', nameJa: '御宿町', nameEn: 'Onjiyuku', status: 'coming-soon'},
  {jis: '12463', slug: 'kiyonan', nameJa: '鋸南町', nameEn: 'Kiyonan', status: 'coming-soon'},
];

export const CHIBA_MUNICIPALITY_BY_SLUG = new Map(
  CHIBA_MUNICIPALITIES.map((m) => [m.slug, m])
);
