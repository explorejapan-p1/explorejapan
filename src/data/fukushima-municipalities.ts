import type {Municipality} from './kagawa-municipalities';

/**
 * Fukushima municipalities (福島県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const FUKUSHIMA_MUNICIPALITIES: Municipality[] = [
  {jis: '07201', slug: 'fukushima', nameJa: '福島市', nameEn: 'Fukushima', status: 'coming-soon'},
  {jis: '07202', slug: 'aizuwakamatsu', nameJa: '会津若松市', nameEn: 'Aizuwakamatsu', status: 'coming-soon'},
  {jis: '07203', slug: 'kooriyama', nameJa: '郡山市', nameEn: 'Kooriyama', status: 'coming-soon'},
  {jis: '07204', slug: 'iwaki', nameJa: 'いわき市', nameEn: 'Iwaki', status: 'coming-soon'},
  {jis: '07205', slug: 'shirakawa', nameJa: '白河市', nameEn: 'Shirakawa', status: 'coming-soon'},
  {jis: '07207', slug: 'sukagawa', nameJa: '須賀川市', nameEn: 'Sukagawa', status: 'coming-soon'},
  {jis: '07208', slug: 'kitakata', nameJa: '喜多方市', nameEn: 'Kitakata', status: 'coming-soon'},
  {jis: '07209', slug: 'soma', nameJa: '相馬市', nameEn: 'Soma', status: 'coming-soon'},
  {jis: '07210', slug: 'nihonmatsu', nameJa: '二本松市', nameEn: 'Nihonmatsu', status: 'coming-soon'},
  {jis: '07211', slug: 'tamura', nameJa: '田村市', nameEn: 'Tamura', status: 'coming-soon'},
  {jis: '07212', slug: 'minamisoma', nameJa: '南相馬市', nameEn: 'Minamisoma', status: 'coming-soon'},
  {jis: '07213', slug: 'date', nameJa: '伊達市', nameEn: 'Date', status: 'coming-soon'},
  {jis: '07214', slug: 'motomiya', nameJa: '本宮市', nameEn: 'Motomiya', status: 'coming-soon'},
  {jis: '07301', slug: 'koori', nameJa: '桑折町', nameEn: 'Koori', status: 'coming-soon'},
  {jis: '07303', slug: 'kunimi', nameJa: '国見町', nameEn: 'Kunimi', status: 'coming-soon'},
  {jis: '07308', slug: 'kawamata', nameJa: '川俣町', nameEn: 'Kawamata', status: 'coming-soon'},
  {jis: '07322', slug: 'otama', nameJa: '大玉村', nameEn: 'Otama', status: 'coming-soon'},
  {jis: '07342', slug: 'kagamiishi', nameJa: '鏡石町', nameEn: 'Kagamiishi', status: 'coming-soon'},
  {jis: '07344', slug: 'tenei', nameJa: '天栄村', nameEn: 'Tenei', status: 'coming-soon'},
  {jis: '07362', slug: 'shimogo', nameJa: '下郷町', nameEn: 'Shimogo', status: 'coming-soon'},
  {jis: '07364', slug: 'hinoemata', nameJa: '檜枝岐村', nameEn: 'Hinoemata', status: 'coming-soon'},
  {jis: '07367', slug: 'tadami', nameJa: '只見町', nameEn: 'Tadami', status: 'coming-soon'},
  {jis: '07368', slug: 'minamiaizu', nameJa: '南会津町', nameEn: 'Minamiaizu', status: 'coming-soon'},
  {jis: '07402', slug: 'kitashiobara', nameJa: '北塩原村', nameEn: 'Kitashiobara', status: 'coming-soon'},
  {jis: '07405', slug: 'nishiaizu', nameJa: '西会津町', nameEn: 'Nishiaizu', status: 'coming-soon'},
  {jis: '07407', slug: 'bandai', nameJa: '磐梯町', nameEn: 'Bandai', status: 'coming-soon'},
  {jis: '07408', slug: 'inawashiro', nameJa: '猪苗代町', nameEn: 'Inawashiro', status: 'coming-soon'},
  {jis: '07421', slug: 'aizubange', nameJa: '会津坂下町', nameEn: 'Aizubange', status: 'coming-soon'},
  {jis: '07422', slug: 'yugawa', nameJa: '湯川村', nameEn: 'Yugawa', status: 'coming-soon'},
  {jis: '07423', slug: 'yanaizu', nameJa: '柳津町', nameEn: 'Yanaizu', status: 'coming-soon'},
  {jis: '07444', slug: 'mishima', nameJa: '三島町', nameEn: 'Mishima', status: 'coming-soon'},
  {jis: '07445', slug: 'kaneyama', nameJa: '金山町', nameEn: 'Kaneyama', status: 'coming-soon'},
  {jis: '07446', slug: 'showa', nameJa: '昭和村', nameEn: 'Showa', status: 'coming-soon'},
  {jis: '07447', slug: 'aizumisato', nameJa: '会津美里町', nameEn: 'Aizumisato', status: 'coming-soon'},
  {jis: '07461', slug: 'nishigo', nameJa: '西郷村', nameEn: 'Nishigo', status: 'coming-soon'},
  {jis: '07464', slug: 'izumizaki', nameJa: '泉崎村', nameEn: 'Izumizaki', status: 'coming-soon'},
  {jis: '07465', slug: 'nakajima', nameJa: '中島村', nameEn: 'Nakajima', status: 'coming-soon'},
  {jis: '07466', slug: 'yabuki', nameJa: '矢吹町', nameEn: 'Yabuki', status: 'coming-soon'},
  {jis: '07481', slug: 'tanagura', nameJa: '棚倉町', nameEn: 'Tanagura', status: 'coming-soon'},
  {jis: '07482', slug: 'yamatsuri', nameJa: '矢祭町', nameEn: 'Yamatsuri', status: 'coming-soon'},
  {jis: '07483', slug: 'hanawa', nameJa: '塙町', nameEn: 'Hanawa', status: 'coming-soon'},
  {jis: '07484', slug: 'samegawa', nameJa: '鮫川村', nameEn: 'Samegawa', status: 'coming-soon'},
  {jis: '07501', slug: 'ishikawa', nameJa: '石川町', nameEn: 'Ishikawa', status: 'coming-soon'},
  {jis: '07502', slug: 'tamakawa', nameJa: '玉川村', nameEn: 'Tamakawa', status: 'coming-soon'},
  {jis: '07503', slug: 'hirata', nameJa: '平田村', nameEn: 'Hirata', status: 'coming-soon'},
  {jis: '07504', slug: 'asakawa', nameJa: '浅川町', nameEn: 'Asakawa', status: 'coming-soon'},
  {jis: '07505', slug: 'furudono', nameJa: '古殿町', nameEn: 'Furudono', status: 'coming-soon'},
  {jis: '07521', slug: 'miharu', nameJa: '三春町', nameEn: 'Miharu', status: 'coming-soon'},
  {jis: '07522', slug: 'ono', nameJa: '小野町', nameEn: 'Ono', status: 'coming-soon'},
  {jis: '07541', slug: 'hirono', nameJa: '広野町', nameEn: 'Hirono', status: 'coming-soon'},
  {jis: '07542', slug: 'naraha', nameJa: '楢葉町', nameEn: 'Naraha', status: 'coming-soon'},
  {jis: '07543', slug: 'tomioka', nameJa: '富岡町', nameEn: 'Tomioka', status: 'coming-soon'},
  {jis: '07544', slug: 'kawauchi', nameJa: '川内村', nameEn: 'Kawauchi', status: 'coming-soon'},
  {jis: '07545', slug: 'okuma', nameJa: '大熊町', nameEn: 'Okuma', status: 'coming-soon'},
  {jis: '07546', slug: 'futaba', nameJa: '双葉町', nameEn: 'Futaba', status: 'coming-soon'},
  {jis: '07547', slug: 'namie', nameJa: '浪江町', nameEn: 'Namie', status: 'coming-soon'},
  {jis: '07548', slug: 'katsurao', nameJa: '葛尾村', nameEn: 'Katsurao', status: 'coming-soon'},
  {jis: '07561', slug: 'shinchi', nameJa: '新地町', nameEn: 'Shinchi', status: 'coming-soon'},
  {jis: '07564', slug: 'iitate', nameJa: '飯舘村', nameEn: 'Iitate', status: 'coming-soon'},
];

export const FUKUSHIMA_MUNICIPALITY_BY_SLUG = new Map(
  FUKUSHIMA_MUNICIPALITIES.map((m) => [m.slug, m])
);
