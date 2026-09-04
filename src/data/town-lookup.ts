import {
  EXPECTED_GEO_COUNT,
  EXPECTED_ROW_COUNT,
  TSURUGI_EXPECTED_GEO_COUNT,
  TSURUGI_EXPECTED_ROW_COUNT,
  YOSHINOGAWA_EXPECTED_GEO_COUNT,
  YOSHINOGAWA_EXPECTED_ROW_COUNT,
  MIYOSHI_EXPECTED_GEO_COUNT,
  MIYOSHI_EXPECTED_ROW_COUNT,
  AWA_EXPECTED_GEO_COUNT,
  AWA_EXPECTED_ROW_COUNT
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

import {MIYOSHI, MIYOSHI_PLACE_PHOTO} from './miyoshi';
import {MIYOSHI_FACILITIES} from './miyoshi-facilities';
import {
  MIYOSHI_TRAVEL_ACCESSED,
  MIYOSHI_TRAVEL_ALL,
  MIYOSHI_TRAVEL_COMMERCE,
  MIYOSHI_TRAVEL_DINING,
  MIYOSHI_TRAVEL_SHOPPING,
  MIYOSHI_TRAVEL_SOURCES,
  MIYOSHI_TRAVEL_STAY
} from './miyoshi-travel';

import {
  TOKUSHIMA_CITY,
  TOKUSHIMA_CITY_PLACE_PHOTO,
  TOKUSHIMA_CITY_FACILITIES,
  TOKUSHIMA_CITY_EXPECTED_GEO_COUNT,
  TOKUSHIMA_CITY_EXPECTED_ROW_COUNT
} from './tokushima-city';

import {AWA, AWA_PLACE_PHOTO} from './awa';
import {AWA_FACILITIES} from './awa-facilities';
import {
  AWA_TRAVEL_ACCESSED,
  AWA_TRAVEL_ALL,
  AWA_TRAVEL_COMMERCE,
  AWA_TRAVEL_DINING,
  AWA_TRAVEL_SHOPPING,
  AWA_TRAVEL_SOURCES,
  AWA_TRAVEL_STAY
} from './awa-travel';

import {
  TOKUSHIMA_CITY_TRAVEL_ACCESSED,
  TOKUSHIMA_CITY_TRAVEL_ALL,
  TOKUSHIMA_CITY_TRAVEL_COMMERCE,
  TOKUSHIMA_CITY_TRAVEL_DINING,
  TOKUSHIMA_CITY_TRAVEL_SHOPPING,
  TOKUSHIMA_CITY_TRAVEL_SOURCES,
  TOKUSHIMA_CITY_TRAVEL_STAY
} from './tokushima-city-travel';

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


export const MIYOSHI_LOOKUP: LookupTown = {
  slug: 'miyoshi',
  jis: MIYOSHI.jis,
  nameJa: MIYOSHI.nameJa,
  nameEn: MIYOSHI.nameEn,
  heroPhoto: MIYOSHI_PLACE_PHOTO,
  photoCiteJa:
    '写真は大歩危・小歩危。Motokoka、2010-09-25、CC BY-SA 4.0。File:Oboke and Koboke Valley 03.jpg。',
  photoCiteEn:
    'Photo: Oboke and Koboke Valleys. Motokoka, 25 Sep 2010, CC BY-SA 4.0. File:Oboke and Koboke Valley 03.jpg.',
  rows: MIYOSHI_FACILITIES,
  expectedGeo: MIYOSHI_EXPECTED_GEO_COUNT,
  expectedRows: MIYOSHI_EXPECTED_ROW_COUNT,
  travelDining: MIYOSHI_TRAVEL_DINING,
  travelStay: MIYOSHI_TRAVEL_STAY,
  travelShopping: MIYOSHI_TRAVEL_SHOPPING,
  travelCommerce: MIYOSHI_TRAVEL_COMMERCE,
  travelAll: MIYOSHI_TRAVEL_ALL,
  coverageJa:
    '三好市（JIS 36208）1042件。観光221、文化財184、公共施設33、保育32、Wi-Fi 24、GTFS停留所548。AED・医療機関・介護・避難所・緊急避難場所は0件（未掲載）。',
  coverageEn:
    'Miyoshi City (JIS 36208), 1042 rows. Tourism 221, cultural property 184, public facilities 33, childcare 32, Wi-Fi 24, GTFS stops 548. AED, hospitals, care, shelters, emergency sites: 0, unpublished.',
  mapLabelJa: '三好市の公式座標636件',
  mapLabelEn: '636 official coordinates in Miyoshi City',
  mapCitePackJa: '点は凍結パックの公式座標636件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 636 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「市公式サイト掲載情報」は市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A city-site listing is a fact from miyoshi.i-tokushima.jp, not under that license.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const TOKUSHIMA_CITY_LOOKUP: LookupTown = {
  slug: 'tokushima',
  jis: TOKUSHIMA_CITY.jis,
  nameJa: TOKUSHIMA_CITY.nameJa,
  nameEn: TOKUSHIMA_CITY.nameEn,
  heroPhoto: TOKUSHIMA_CITY_PLACE_PHOTO,
  photoCiteJa:
    '写真は新町川から臨む眉山。新幹線、2020-06-07、CC BY-SA 4.0。File:Mount Bizan from Shimmachi River 20200607.jpg。',
  photoCiteEn:
    'Photo: Mount Bizan from the Shinmachi River. 新幹線, 7 Jun 2020, CC BY-SA 4.0. File:Mount Bizan from Shimmachi River 20200607.jpg.',
  rows: TOKUSHIMA_CITY_FACILITIES,
  expectedGeo: TOKUSHIMA_CITY_EXPECTED_GEO_COUNT,
  expectedRows: TOKUSHIMA_CITY_EXPECTED_ROW_COUNT,
  travelDining: TOKUSHIMA_CITY_TRAVEL_DINING,
  travelStay: TOKUSHIMA_CITY_TRAVEL_STAY,
  travelShopping: TOKUSHIMA_CITY_TRAVEL_SHOPPING,
  travelCommerce: TOKUSHIMA_CITY_TRAVEL_COMMERCE,
  travelAll: TOKUSHIMA_CITY_TRAVEL_ALL,
  coverageJa:
    '徳島市（JIS 36201）観光5件（出典写真がある施設のみ）。オープンデータ凍結パックは未掲載。AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。',
  coverageEn:
    'Tokushima City (JIS 36201), 5 tourism rows with sourced photos. No frozen open-data pack. AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished.',
  mapLabelJa: '徳島市の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Tokushima City',
  mapCitePackJa: '点は市ページ掲載施設のWikipedia座標5件（accessed 2026-08-28）。',
  mapCitePackEn: 'Points: 5 Wikipedia coordinates for city-page facilities (accessed 2026-08-28).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.tokushima.tokushima.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const AWA_LOOKUP: LookupTown = {
  slug: 'awa',
  jis: AWA.jis,
  nameJa: AWA.nameJa,
  nameEn: AWA.nameEn,
  heroPhoto: AWA_PLACE_PHOTO,
  photoCiteJa:
    '写真は阿波の土柱。Araiyasushige、2022-08-22、CC BY-SA 4.0。File:Awa no dotyuu 20220822 1.jpg。',
  photoCiteEn:
    'Photo: Awa-no-Dochū earth pillars. Araiyasushige, 22 Aug 2022, CC BY-SA 4.0. File:Awa no dotyuu 20220822 1.jpg.',
  rows: AWA_FACILITIES,
  expectedGeo: AWA_EXPECTED_GEO_COUNT,
  expectedRows: AWA_EXPECTED_ROW_COUNT,
  travelDining: AWA_TRAVEL_DINING,
  travelStay: AWA_TRAVEL_STAY,
  travelShopping: AWA_TRAVEL_SHOPPING,
  travelCommerce: AWA_TRAVEL_COMMERCE,
  travelAll: AWA_TRAVEL_ALL,
  coverageJa:
    '阿波市（JIS 36206）307件。公共施設101、AED 52、避難所33、Wi-Fi 33、保育31、観光30、緊急避難場所24、文化財3。医療機関・介護・GTFSは0件（未掲載）。',
  coverageEn:
    'Awa City (JIS 36206), 307 rows. Public facilities 101, AED 52, shelters 33, Wi-Fi 33, childcare 31, tourism 30, emergency sites 24, cultural property 3. Hospitals, care, GTFS: 0, unpublished.',
  mapLabelJa: '阿波市の公式座標171件',
  mapLabelEn: '171 official coordinates in Awa City',
  mapCitePackJa: '点は凍結パックの公式座標171件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 171 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「市公式サイト掲載情報」は市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A city-site listing is a fact from city.awa.lg.jp, not under that license.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


const BY_SLUG: Record<ReadySlug, LookupTown> = {
  mima: MIMA_LOOKUP,
  tsurugi: TSURUGI_LOOKUP,
  yoshinogawa: YOSHINOGAWA_LOOKUP,
  miyoshi: MIYOSHI_LOOKUP,
  tokushima: TOKUSHIMA_CITY_LOOKUP,
  awa: AWA_LOOKUP
};

export function lookupTown(slug: string): LookupTown | null {
  if (!isReadySlug(slug)) return null;
  return BY_SLUG[slug];
}

export {TRAVEL_ACCESSED, TRAVEL_SOURCES, TSURUGI_TRAVEL_ACCESSED, TSURUGI_TRAVEL_SOURCES, YOSHINOGAWA_TRAVEL_ACCESSED, YOSHINOGAWA_TRAVEL_SOURCES, MIYOSHI_TRAVEL_ACCESSED, MIYOSHI_TRAVEL_SOURCES, TOKUSHIMA_CITY_TRAVEL_ACCESSED, TOKUSHIMA_CITY_TRAVEL_SOURCES, AWA_TRAVEL_ACCESSED, AWA_TRAVEL_SOURCES};
