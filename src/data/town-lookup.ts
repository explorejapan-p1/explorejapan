import {
  EXPECTED_GEO_COUNT,
  EXPECTED_ROW_COUNT,
  TSURUGI_EXPECTED_GEO_COUNT,
  TSURUGI_EXPECTED_ROW_COUNT,
  YOSHINOGAWA_EXPECTED_GEO_COUNT,
  YOSHINOGAWA_EXPECTED_ROW_COUNT
} from './facility-schema';
import {MIMA, MIMA_PLACE_PHOTO} from './mima';
import {MIMA_FACILITIES} from './mima-facilities';
import {
  TRAVEL_ACCESSED,
  TRAVEL_ALL,
  TRAVEL_COMMERCE,
  TRAVEL_DINING,
  TRAVEL_SHOPPING,
  TRAVEL_SOURCES,
  TRAVEL_STAY
} from './mima-travel';
import {isReadySlug, type LookupTown, type ReadySlug} from './lookup-town';
import {TSURUGI, TSURUGI_PLACE_PHOTO} from './tsurugi';
import {TSURUGI_FACILITIES} from './tsurugi-facilities';
import {
  TSURUGI_TRAVEL_ACCESSED,
  TSURUGI_TRAVEL_ALL,
  TSURUGI_TRAVEL_COMMERCE,
  TSURUGI_TRAVEL_DINING,
  TSURUGI_TRAVEL_SHOPPING,
  TSURUGI_TRAVEL_SOURCES,
  TSURUGI_TRAVEL_STAY
} from './tsurugi-travel';
import {YOSHINOGAWA, YOSHINOGAWA_PLACE_PHOTO} from './yoshinogawa';
import {YOSHINOGAWA_FACILITIES} from './yoshinogawa-facilities';
import {
  YOSHINOGAWA_TRAVEL_ACCESSED,
  YOSHINOGAWA_TRAVEL_ALL,
  YOSHINOGAWA_TRAVEL_COMMERCE,
  YOSHINOGAWA_TRAVEL_DINING,
  YOSHINOGAWA_TRAVEL_SHOPPING,
  YOSHINOGAWA_TRAVEL_SOURCES,
  YOSHINOGAWA_TRAVEL_STAY
} from './yoshinogawa-travel';

export type {LookupTown, ReadySlug} from './lookup-town';
export {isReadySlug} from './lookup-town';

export const MIMA_LOOKUP: LookupTown = {
  slug: 'mima',
  jis: MIMA.jis,
  nameJa: MIMA.nameJa,
  nameEn: MIMA.nameEn,
  heroPhoto: MIMA_PLACE_PHOTO,
  photoCiteJa:
    '写真は脇町南町（うだつの町並み）。Araiyasushige、2025-08-28、CC0 1.0。',
  photoCiteEn:
    'Photo: Wakimachi Minami-machi (Udatsu townscape). Araiyasushige, 28 Aug 2025, CC0 1.0.',
  rows: MIMA_FACILITIES,
  expectedGeo: EXPECTED_GEO_COUNT,
  expectedRows: EXPECTED_ROW_COUNT,
  travelDining: TRAVEL_DINING,
  travelStay: TRAVEL_STAY,
  travelShopping: TRAVEL_SHOPPING,
  travelCommerce: TRAVEL_COMMERCE,
  travelAll: TRAVEL_ALL,
  coverageJa:
    '美馬市（JIS 36207）515件。観光116、文化財110、介護80、AED 72、避難所45、緊急避難場所40、医療機関23、保育16、公衆無線LAN 9、公共施設4。GTFSの停留所は0件（未掲載）。',
  coverageEn:
    'Mima City (JIS 36207), 515 rows. Tourism 116, cultural property 110, care 80, AED 72, shelters 45, emergency sites 40, hospitals 23, childcare 16, public Wi-Fi 9, public facilities 4. GTFS stops: 0, unpublished.',
  mapLabelJa: '美馬市の公式座標61件',
  mapLabelEn: '61 official coordinates in Mima City',
  mapCitePackJa: '点は凍結パックの公式座標61件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 61 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「市公式サイト掲載情報」は市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A city-site listing is a fact from city.mima.lg.jp, not under that license.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const TSURUGI_LOOKUP: LookupTown = {
  slug: 'tsurugi',
  jis: TSURUGI.jis,
  nameJa: TSURUGI.nameJa,
  nameEn: TSURUGI.nameEn,
  heroPhoto: TSURUGI_PLACE_PHOTO,
  photoCiteJa:
    '写真は二層うだつの町並み。Asturio Cantabrio、2022-08、CC BY-SA 4.0。',
  photoCiteEn:
    'Photo: two-storey udatsu townscape. Asturio Cantabrio, Aug 2022, CC BY-SA 4.0.',
  rows: TSURUGI_FACILITIES,
  expectedGeo: TSURUGI_EXPECTED_GEO_COUNT,
  expectedRows: TSURUGI_EXPECTED_ROW_COUNT,
  travelDining: TSURUGI_TRAVEL_DINING,
  travelStay: TSURUGI_TRAVEL_STAY,
  travelShopping: TSURUGI_TRAVEL_SHOPPING,
  travelCommerce: TSURUGI_TRAVEL_COMMERCE,
  travelAll: TSURUGI_TRAVEL_ALL,
  coverageJa:
    'つるぎ町（JIS 36468）334件。観光27、文化財97、公共施設48、緊急避難場所20、避難所19、保育3、GTFS停留所120。AED・医療機関・介護・Wi-Fiは0件（未掲載）。',
  coverageEn:
    'Tsurugi Town (JIS 36468), 334 rows. Tourism 27, cultural property 97, public facilities 48, emergency sites 20, shelters 19, childcare 3, GTFS stops 120. AED, hospitals, care, Wi-Fi: 0, unpublished.',
  mapLabelJa: 'つるぎ町の公式座標171件',
  mapLabelEn: '171 official coordinates in Tsurugi Town',
  mapCitePackJa: '点は凍結パックの公式座標171件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 171 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.tokushima-tsurugi.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const YOSHINOGAWA_LOOKUP: LookupTown = {
  slug: 'yoshinogawa',
  jis: YOSHINOGAWA.jis,
  nameJa: YOSHINOGAWA.nameJa,
  nameEn: YOSHINOGAWA.nameEn,
  heroPhoto: YOSHINOGAWA_PLACE_PHOTO,
  photoCiteJa:
    '写真は川島城。Dokudami、2022-05-27、CC BY-SA 4.0。',
  photoCiteEn:
    'Photo: Kawashima Castle. Dokudami, 27 May 2022, CC BY-SA 4.0.',
  rows: YOSHINOGAWA_FACILITIES,
  expectedGeo: YOSHINOGAWA_EXPECTED_GEO_COUNT,
  expectedRows: YOSHINOGAWA_EXPECTED_ROW_COUNT,
  travelDining: YOSHINOGAWA_TRAVEL_DINING,
  travelStay: YOSHINOGAWA_TRAVEL_STAY,
  travelShopping: YOSHINOGAWA_TRAVEL_SHOPPING,
  travelCommerce: YOSHINOGAWA_TRAVEL_COMMERCE,
  travelAll: YOSHINOGAWA_TRAVEL_ALL,
  coverageJa:
    '吉野川市（JIS 36205）335件。観光38、文化財77、避難所96、緊急避難場所48、公共施設21、保育26、GTFS停留所29。AED・医療機関・介護・Wi-Fiは0件（未掲載）。',
  coverageEn:
    'Yoshinogawa City (JIS 36205), 335 rows. Tourism 38, cultural property 77, shelters 96, emergency sites 48, public facilities 21, childcare 26, GTFS stops 29. AED, hospitals, care, Wi-Fi: 0, unpublished.',
  mapLabelJa: '吉野川市の公式座標29件',
  mapLabelEn: '29 official coordinates in Yoshinogawa City',
  mapCitePackJa: '点は凍結パックの公式座標29件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 29 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「市公式サイト掲載情報」は市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A city-site listing is a fact from city.yoshinogawa.lg.jp, not under that license.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

const BY_SLUG: Record<ReadySlug, LookupTown> = {
  mima: MIMA_LOOKUP,
  tsurugi: TSURUGI_LOOKUP,
  yoshinogawa: YOSHINOGAWA_LOOKUP
};

export function lookupTown(slug: string): LookupTown | null {
  if (!isReadySlug(slug)) return null;
  return BY_SLUG[slug];
}

export {TRAVEL_ACCESSED, TRAVEL_SOURCES, TSURUGI_TRAVEL_ACCESSED, TSURUGI_TRAVEL_SOURCES, YOSHINOGAWA_TRAVEL_ACCESSED, YOSHINOGAWA_TRAVEL_SOURCES};
