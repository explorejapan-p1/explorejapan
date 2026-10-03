import type {Municipality} from './kagawa-municipalities';

/**
 * Tottori municipalities (鳥取県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const TOTTORI_MUNICIPALITIES: Municipality[] = [
  {jis: '31201', slug: 'tottori', nameJa: '鳥取市', nameEn: 'Tottori', status: 'coming-soon'},
  {jis: '31202', slug: 'yonago', nameJa: '米子市', nameEn: 'Yonago', status: 'coming-soon'},
  {jis: '31203', slug: 'kurayoshi', nameJa: '倉吉市', nameEn: 'Kurayoshi', status: 'coming-soon'},
  {jis: '31204', slug: 'sakaiminato', nameJa: '境港市', nameEn: 'Sakaiminato', status: 'coming-soon'},
  {jis: '31302', slug: 'iwami', nameJa: '岩美町', nameEn: 'Iwami', status: 'coming-soon'},
  {jis: '31325', slug: 'wakasa', nameJa: '若桜町', nameEn: 'Wakasa', status: 'coming-soon'},
  {jis: '31328', slug: 'chizu', nameJa: '智頭町', nameEn: 'Chizu', status: 'coming-soon'},
  {jis: '31329', slug: 'yazu', nameJa: '八頭町', nameEn: 'Yazu', status: 'coming-soon'},
  {jis: '31364', slug: 'misasa', nameJa: '三朝町', nameEn: 'Misasa', status: 'coming-soon'},
  {jis: '31370', slug: 'yurihama', nameJa: '湯梨浜町', nameEn: 'Yurihama', status: 'coming-soon'},
  {jis: '31371', slug: 'kotoura', nameJa: '琴浦町', nameEn: 'Kotoura', status: 'coming-soon'},
  {jis: '31372', slug: 'hokuei', nameJa: '北栄町', nameEn: 'Hokuei', status: 'coming-soon'},
  {jis: '31384', slug: 'hiezu', nameJa: '日吉津村', nameEn: 'Hiezu', status: 'coming-soon'},
  {jis: '31386', slug: 'daisen', nameJa: '大山町', nameEn: 'Daisen', status: 'coming-soon'},
  {jis: '31389', slug: 'nanbu', nameJa: '南部町', nameEn: 'Nanbu', status: 'coming-soon'},
  {jis: '31390', slug: 'hoki', nameJa: '伯耆町', nameEn: 'Hoki', status: 'coming-soon'},
  {jis: '31401', slug: 'nichinan', nameJa: '日南町', nameEn: 'Nichinan', status: 'coming-soon'},
  {jis: '31402', slug: 'hino', nameJa: '日野町', nameEn: 'Hino', status: 'coming-soon'},
  {jis: '31403', slug: 'kofu', nameJa: '江府町', nameEn: 'Kofu', status: 'coming-soon'},
];

export const TOTTORI_MUNICIPALITY_BY_SLUG = new Map(
  TOTTORI_MUNICIPALITIES.map((m) => [m.slug, m])
);
