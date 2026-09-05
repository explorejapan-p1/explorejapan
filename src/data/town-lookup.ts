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
  AWA_EXPECTED_ROW_COUNT,
  HIGASHIMIYOSHI_EXPECTED_GEO_COUNT,
  HIGASHIMIYOSHI_EXPECTED_ROW_COUNT,
  KITAJIMA_EXPECTED_GEO_COUNT,
  KITAJIMA_EXPECTED_ROW_COUNT,
  MATSUSHIGE_EXPECTED_GEO_COUNT,
  MATSUSHIGE_EXPECTED_ROW_COUNT,
  ISHII_EXPECTED_GEO_COUNT,
  ISHII_EXPECTED_ROW_COUNT,
  ITANO_EXPECTED_GEO_COUNT,
  ITANO_EXPECTED_ROW_COUNT,
  KAMIITA_EXPECTED_GEO_COUNT,
  KAMIITA_EXPECTED_ROW_COUNT,
  KAMIYAMA_EXPECTED_GEO_COUNT,
  KAMIYAMA_EXPECTED_ROW_COUNT,
  KATSUURA_EXPECTED_GEO_COUNT,
  KATSUURA_EXPECTED_ROW_COUNT,
  KAMIKATSU_EXPECTED_GEO_COUNT,
  KAMIKATSU_EXPECTED_ROW_COUNT
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


import {HIGASHIMIYOSHI, HIGASHIMIYOSHI_PLACE_PHOTO} from './higashimiyoshi';
import {HIGASHIMIYOSHI_FACILITIES} from './higashimiyoshi-facilities';
import {
  HIGASHIMIYOSHI_TRAVEL_ACCESSED,
  HIGASHIMIYOSHI_TRAVEL_SOURCES,
  HIGASHIMIYOSHI_TRAVEL_ALL,
  HIGASHIMIYOSHI_TRAVEL_COMMERCE,
  HIGASHIMIYOSHI_TRAVEL_DINING,
  HIGASHIMIYOSHI_TRAVEL_SHOPPING,
  HIGASHIMIYOSHI_TRAVEL_STAY
} from './higashimiyoshi-travel';


import {MATSUSHIGE, MATSUSHIGE_PLACE_PHOTO} from './matsushige';
import {MATSUSHIGE_FACILITIES} from './matsushige-facilities';
import {
  MATSUSHIGE_TRAVEL_ACCESSED,
  MATSUSHIGE_TRAVEL_SOURCES,
  MATSUSHIGE_TRAVEL_ALL,
  MATSUSHIGE_TRAVEL_COMMERCE,
  MATSUSHIGE_TRAVEL_DINING,
  MATSUSHIGE_TRAVEL_SHOPPING,
  MATSUSHIGE_TRAVEL_STAY
} from './matsushige-travel';


import {ISHII, ISHII_PLACE_PHOTO} from './ishii';
import {ISHII_FACILITIES} from './ishii-facilities';
import {
  ISHII_TRAVEL_ACCESSED,
  ISHII_TRAVEL_SOURCES,
  ISHII_TRAVEL_ALL,
  ISHII_TRAVEL_COMMERCE,
  ISHII_TRAVEL_DINING,
  ISHII_TRAVEL_SHOPPING,
  ISHII_TRAVEL_STAY
} from './ishii-travel';


import {ITANO, ITANO_PLACE_PHOTO} from './itano';
import {ITANO_FACILITIES} from './itano-facilities';
import {
  ITANO_TRAVEL_ACCESSED,
  ITANO_TRAVEL_ALL,
  ITANO_TRAVEL_COMMERCE,
  ITANO_TRAVEL_DINING,
  ITANO_TRAVEL_SHOPPING,
  ITANO_TRAVEL_SOURCES,
  ITANO_TRAVEL_STAY
} from './itano-travel';

import {KAMIITA, KAMIITA_PLACE_PHOTO} from './kamiita';
import {KAMIITA_FACILITIES} from './kamiita-facilities';
import {
  KAMIITA_TRAVEL_ACCESSED,
  KAMIITA_TRAVEL_ALL,
  KAMIITA_TRAVEL_COMMERCE,
  KAMIITA_TRAVEL_DINING,
  KAMIITA_TRAVEL_SHOPPING,
  KAMIITA_TRAVEL_SOURCES,
  KAMIITA_TRAVEL_STAY
} from './kamiita-travel';

import {KAMIYAMA, KAMIYAMA_PLACE_PHOTO} from './kamiyama';
import {KAMIYAMA_FACILITIES} from './kamiyama-facilities';
import {
  KAMIYAMA_TRAVEL_ACCESSED,
  KAMIYAMA_TRAVEL_ALL,
  KAMIYAMA_TRAVEL_COMMERCE,
  KAMIYAMA_TRAVEL_DINING,
  KAMIYAMA_TRAVEL_SHOPPING,
  KAMIYAMA_TRAVEL_SOURCES,
  KAMIYAMA_TRAVEL_STAY
} from './kamiyama-travel';

import {KATSUURA, KATSUURA_PLACE_PHOTO} from './katsuura';
import {KATSUURA_FACILITIES} from './katsuura-facilities';
import {
  KATSUURA_TRAVEL_ACCESSED,
  KATSUURA_TRAVEL_ALL,
  KATSUURA_TRAVEL_COMMERCE,
  KATSUURA_TRAVEL_DINING,
  KATSUURA_TRAVEL_SHOPPING,
  KATSUURA_TRAVEL_SOURCES,
  KATSUURA_TRAVEL_STAY
} from './katsuura-travel';

import {KAMIKATSU, KAMIKATSU_PLACE_PHOTO} from './kamikatsu';
import {KAMIKATSU_FACILITIES} from './kamikatsu-facilities';
import {
  KAMIKATSU_TRAVEL_ACCESSED,
  KAMIKATSU_TRAVEL_ALL,
  KAMIKATSU_TRAVEL_COMMERCE,
  KAMIKATSU_TRAVEL_DINING,
  KAMIKATSU_TRAVEL_SHOPPING,
  KAMIKATSU_TRAVEL_SOURCES,
  KAMIKATSU_TRAVEL_STAY
} from './kamikatsu-travel';


import {KITAJIMA, KITAJIMA_PLACE_PHOTO} from './kitajima';
import {KITAJIMA_FACILITIES} from './kitajima-facilities';
import {
  KITAJIMA_TRAVEL_ACCESSED,
  KITAJIMA_TRAVEL_SOURCES,
  KITAJIMA_TRAVEL_ALL,
  KITAJIMA_TRAVEL_COMMERCE,
  KITAJIMA_TRAVEL_DINING,
  KITAJIMA_TRAVEL_SHOPPING,
  KITAJIMA_TRAVEL_STAY
} from './kitajima-travel';


import {NARUTO, NARUTO_PLACE_PHOTO, NARUTO_FACILITIES, NARUTO_EXPECTED_GEO_COUNT, NARUTO_EXPECTED_ROW_COUNT} from './naruto';
import {
  NARUTO_TRAVEL_ACCESSED,
  NARUTO_TRAVEL_ALL,
  NARUTO_TRAVEL_COMMERCE,
  NARUTO_TRAVEL_DINING,
  NARUTO_TRAVEL_SHOPPING,
  NARUTO_TRAVEL_SOURCES,
  NARUTO_TRAVEL_STAY
} from './naruto-travel';

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



export const HIGASHIMIYOSHI_LOOKUP: LookupTown = {
  slug: 'higashimiyoshi',
  jis: HIGASHIMIYOSHI.jis,
  nameJa: HIGASHIMIYOSHI.nameJa,
  nameEn: HIGASHIMIYOSHI.nameEn,
  heroPhoto: HIGASHIMIYOSHI_PLACE_PHOTO,
  photoCiteJa:
    '写真は加茂の大クス。Saigen Jiro、2019-04-28、CC0。File:Kamo-no-Okusu-1.jpg。',
  photoCiteEn:
    'Photo: Kamo-no-Ōkusu camphor tree. Saigen Jiro, 28 Apr 2019, CC0. File:Kamo-no-Okusu-1.jpg.',
  rows: HIGASHIMIYOSHI_FACILITIES,
  expectedGeo: HIGASHIMIYOSHI_EXPECTED_GEO_COUNT,
  expectedRows: HIGASHIMIYOSHI_EXPECTED_ROW_COUNT,
  travelDining: HIGASHIMIYOSHI_TRAVEL_DINING,
  travelStay: HIGASHIMIYOSHI_TRAVEL_STAY,
  travelShopping: HIGASHIMIYOSHI_TRAVEL_SHOPPING,
  travelCommerce: HIGASHIMIYOSHI_TRAVEL_COMMERCE,
  travelAll: HIGASHIMIYOSHI_TRAVEL_ALL,
  coverageJa:
    '東みよし町（JIS 36489）285件。文化財109、GTFS停留所63、公共施設36、緊急避難場所16、医療機関15、避難所13、介護11、観光10、保育9、Wi-Fi 3。AEDは0件（未掲載）。',
  coverageEn:
    'Higashimiyoshi Town (JIS 36489), 285 rows. Cultural property 109, GTFS stops 63, public facilities 36, emergency sites 16, hospitals 15, shelters 13, care 11, tourism 10, childcare 9, Wi-Fi 3. AED: 0, unpublished.',
  mapLabelJa: '東みよし町の公式座標72件',
  mapLabelEn: '72 official coordinates in Higashimiyoshi Town',
  mapCitePackJa: '点は凍結パックの公式座標72件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 72 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.higashimiyoshi.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};



export const NARUTO_LOOKUP: LookupTown = {
  slug: 'naruto',
  jis: NARUTO.jis,
  nameJa: NARUTO.nameJa,
  nameEn: NARUTO.nameEn,
  heroPhoto: NARUTO_PLACE_PHOTO,
  photoCiteJa:
    '写真は渦の道から見た鳴門の渦潮。Kounosu、2010-08-11、CC BY-SA 3.0。File:Naruto Whirlpools from the Uzunomichi.jpg。',
  photoCiteEn:
    'Photo: Naruto whirlpools from Uzunomichi. Kounosu, 11 Aug 2010, CC BY-SA 3.0. File:Naruto Whirlpools from the Uzunomichi.jpg.',
  rows: NARUTO_FACILITIES,
  expectedGeo: NARUTO_EXPECTED_GEO_COUNT,
  expectedRows: NARUTO_EXPECTED_ROW_COUNT,
  travelDining: NARUTO_TRAVEL_DINING,
  travelStay: NARUTO_TRAVEL_STAY,
  travelShopping: NARUTO_TRAVEL_SHOPPING,
  travelCommerce: NARUTO_TRAVEL_COMMERCE,
  travelAll: NARUTO_TRAVEL_ALL,
  coverageJa:
    '鳴門市（JIS 36202）観光1件（出典写真がある施設のみ）。オープンデータ凍結パックは未掲載。AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。飲食・宿泊・温泉・体験・買物・商業は0件（未掲載）。',
  coverageEn:
    'Naruto City (JIS 36202), 1 tourism row with a sourced photo. No frozen open-data pack. AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. Dining, stay, onsen, experience, shopping, commerce: 0, unpublished.',
  mapLabelJa: '鳴門市の出典座標1件',
  mapLabelEn: '1 sourced coordinate in Naruto City',
  mapCitePackJa: '点は市・観光ページ掲載施設のWikipedia座標1件（accessed 2026-09-05）。',
  mapCitePackEn: 'Points: 1 Wikipedia coordinate for a city/tourism-page facility (accessed 2026-09-05).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.naruto.tokushima.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const MATSUSHIGE_LOOKUP: LookupTown = {
  slug: 'matsushige',
  jis: MATSUSHIGE.jis,
  nameJa: MATSUSHIGE.nameJa,
  nameEn: MATSUSHIGE.nameEn,
  heroPhoto: MATSUSHIGE_PLACE_PHOTO,
  photoCiteJa:
    '写真は月見ヶ丘海浜公園。Tamago915、2008-10-13、CC BY-SA 3.0。File:Tsukimigaoka-Kaihin-Koen.jpg。',
  photoCiteEn:
    'Photo: Tsukimigaoka Kaihin Koen. Tamago915, 13 Oct 2008, CC BY-SA 3.0. File:Tsukimigaoka-Kaihin-Koen.jpg.',
  rows: MATSUSHIGE_FACILITIES,
  expectedGeo: MATSUSHIGE_EXPECTED_GEO_COUNT,
  expectedRows: MATSUSHIGE_EXPECTED_ROW_COUNT,
  travelDining: MATSUSHIGE_TRAVEL_DINING,
  travelStay: MATSUSHIGE_TRAVEL_STAY,
  travelShopping: MATSUSHIGE_TRAVEL_SHOPPING,
  travelCommerce: MATSUSHIGE_TRAVEL_COMMERCE,
  travelAll: MATSUSHIGE_TRAVEL_ALL,
  coverageJa:
    '松茂町（JIS 36401）216件。GTFS停留所59、緊急避難場所56、文化財36、公共施設31、避難所15、保育13、観光5、介護1。AED・医療機関・Wi-Fiは0件（未掲載）。',
  coverageEn:
    'Matsushige Town (JIS 36401), 216 rows. GTFS stops 59, emergency sites 56, cultural property 36, public facilities 31, shelters 15, childcare 13, tourism 5, care 1. AED, hospitals, Wi-Fi: 0, unpublished.',
  mapLabelJa: '松茂町の公式座標106件',
  mapLabelEn: '106 official coordinates in Matsushige Town',
  mapCitePackJa: '点は凍結パックの公式座標106件（accessed 2026-08-27）。',
  mapCitePackEn: 'Points: 106 official coordinates from the frozen pack (accessed 2026-08-27).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.matsushige.tokushima.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};

export const KITAJIMA_LOOKUP: LookupTown = {
  slug: 'kitajima',
  jis: KITAJIMA.jis,
  nameJa: KITAJIMA.nameJa,
  nameEn: KITAJIMA.nameEn,
  heroPhoto: KITAJIMA_PLACE_PHOTO,
  photoCiteJa:
    '写真は北島チューリップ公園。タクドラの金太郎、2009-04-08、CC BY 2.1 JP。File:Kitajima Tulip Park 01.jpg。',
  photoCiteEn:
    'Photo: Kitajima Tulip Park. タクドラの金太郎, 8 Apr 2009, CC BY 2.1 JP. File:Kitajima Tulip Park 01.jpg.',
  rows: KITAJIMA_FACILITIES,
  expectedGeo: KITAJIMA_EXPECTED_GEO_COUNT,
  expectedRows: KITAJIMA_EXPECTED_ROW_COUNT,
  travelDining: KITAJIMA_TRAVEL_DINING,
  travelStay: KITAJIMA_TRAVEL_STAY,
  travelShopping: KITAJIMA_TRAVEL_SHOPPING,
  travelCommerce: KITAJIMA_TRAVEL_COMMERCE,
  travelAll: KITAJIMA_TRAVEL_ALL,
  coverageJa:
    '北島町（JIS 36402）209件。緊急避難場所50、避難所31、医療機関29、文化財28、公共施設28、AED 21、保育19、観光2、介護1。Wi-Fi・GTFSは0件（未掲載）。',
  coverageEn:
    'Kitajima Town (JIS 36402), 209 rows. Emergency sites 50, shelters 31, hospitals 29, cultural property 28, public facilities 28, AED 21, childcare 19, tourism 2, care 1. Wi-Fi, GTFS: 0, unpublished.',
  mapLabelJa: '北島町の公式座標116件',
  mapLabelEn: '116 official coordinates in Kitajima Town',
  mapCitePackJa: '点は凍結パックの公式座標116件（accessed 2026-08-27）。',
  mapCitePackEn: 'Points: 116 official coordinates from the frozen pack (accessed 2026-08-27).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.kitajima.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const ISHII_LOOKUP: LookupTown = {
  slug: 'ishii',
  jis: ISHII.jis,
  nameJa: ISHII.nameJa,
  nameEn: ISHII.nameEn,
  heroPhoto: ISHII_PLACE_PHOTO,
  photoCiteJa:
    '写真は吉野川第十堰。Tamago915、2005-05-03、CC BY-SA 4.0。File:Yoshinogawa Daijuzeki.jpg。',
  photoCiteEn:
    'Photo: Yoshino River Daiju Weir. Tamago915, 3 May 2005, CC BY-SA 4.0. File:Yoshinogawa Daijuzeki.jpg.',
  rows: ISHII_FACILITIES,
  expectedGeo: ISHII_EXPECTED_GEO_COUNT,
  expectedRows: ISHII_EXPECTED_ROW_COUNT,
  travelDining: ISHII_TRAVEL_DINING,
  travelStay: ISHII_TRAVEL_STAY,
  travelShopping: ISHII_TRAVEL_SHOPPING,
  travelCommerce: ISHII_TRAVEL_COMMERCE,
  travelAll: ISHII_TRAVEL_ALL,
  coverageJa:
    '石井町（JIS 36341）179件。緊急避難場所45、文化財34、AED 26、公共施設23、避難所20、保育20、観光9、介護2。医療機関・Wi-Fi・GTFSは0件（未掲載）。',
  coverageEn:
    'Ishii Town (JIS 36341), 179 rows. Emergency sites 45, cultural property 34, AED 26, public facilities 23, shelters 20, childcare 20, tourism 9, care 2. Hospitals, Wi-Fi, GTFS: 0, unpublished.',
  mapLabelJa: '石井町の公式座標88件',
  mapLabelEn: '88 official coordinates in Ishii Town',
  mapCitePackJa: '点は凍結パックの公式座標88件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 88 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.ishii.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const ITANO_LOOKUP: LookupTown = {
  slug: 'itano',
  jis: ITANO.jis,
  nameJa: ITANO.nameJa,
  nameEn: ITANO.nameEn,
  heroPhoto: ITANO_PLACE_PHOTO,
  photoCiteJa:
    '写真はあすたむらんど徳島。Sorrysorry、2007-01-06、Public Domain。File:ASUTAMULAND TOKUSHIMA.JPG。',
  photoCiteEn:
    'Photo: Asutamu Land Tokushima. Sorrysorry, 6 Jan 2007, Public Domain. File:ASUTAMULAND TOKUSHIMA.JPG.',
  rows: ITANO_FACILITIES,
  expectedGeo: ITANO_EXPECTED_GEO_COUNT,
  expectedRows: ITANO_EXPECTED_ROW_COUNT,
  travelDining: ITANO_TRAVEL_DINING,
  travelStay: ITANO_TRAVEL_STAY,
  travelShopping: ITANO_TRAVEL_SHOPPING,
  travelCommerce: ITANO_TRAVEL_COMMERCE,
  travelAll: ITANO_TRAVEL_ALL,
  coverageJa:
    '板野町（JIS 36404）186件。文化財45、避難所43、緊急避難場所42、AED 27、公共施設11、保育9、観光8、介護1。医療機関・Wi-Fi・GTFSは0件（未掲載）。',
  coverageEn:
    'Itano Town (JIS 36404), 186 rows. Cultural property 45, shelters 43, emergency sites 42, AED 27, public facilities 11, childcare 9, tourism 8, care 1. Hospitals, Wi-Fi, GTFS: 0, unpublished.',
  mapLabelJa: '板野町の公式座標9件',
  mapLabelEn: '9 official coordinates in Itano Town',
  mapCitePackJa: '点は凍結パックの公式座標9件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 9 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.itano.tokushima.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const KAMIITA_LOOKUP: LookupTown = {
  slug: 'kamiita',
  jis: KAMIITA.jis,
  nameJa: KAMIITA.nameJa,
  nameEn: KAMIITA.nameEn,
  heroPhoto: KAMIITA_PLACE_PHOTO,
  photoCiteJa:
    '写真は安楽寺（四国霊場第六番）。Dokudami、2019-11-19、CC BY-SA 4.0。File:Anrakuji_20191119_01.jpg。',
  photoCiteEn:
    'Photo: Anraku-ji (Shikoku pilgrimage temple 6). Dokudami, 19 Nov 2019, CC BY-SA 4.0. File:Anrakuji_20191119_01.jpg.',
  rows: KAMIITA_FACILITIES,
  expectedGeo: KAMIITA_EXPECTED_GEO_COUNT,
  expectedRows: KAMIITA_EXPECTED_ROW_COUNT,
  travelDining: KAMIITA_TRAVEL_DINING,
  travelStay: KAMIITA_TRAVEL_STAY,
  travelShopping: KAMIITA_TRAVEL_SHOPPING,
  travelCommerce: KAMIITA_TRAVEL_COMMERCE,
  travelAll: KAMIITA_TRAVEL_ALL,
  coverageJa:
    '上板町（JIS 36405）97件。AED 30、文化財14、緊急避難場所13、避難所10、公共施設10、保育10、観光9、介護1。医療機関・Wi-Fi・GTFSは0件（未掲載）。',
  coverageEn:
    'Kamiita Town (JIS 36405), 97 rows. AED 30, cultural property 14, emergency sites 13, shelters 10, public facilities 10, childcare 10, tourism 9, care 1. Hospitals, Wi-Fi, GTFS: 0, unpublished.',
  mapLabelJa: '上板町の公式座標34件',
  mapLabelEn: '34 official coordinates in Kamiita Town',
  mapCitePackJa: '点は凍結パックの公式座標34件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 34 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from townkamiita.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};



export const KAMIYAMA_LOOKUP: LookupTown = {
  slug: 'kamiyama',
  jis: KAMIYAMA.jis,
  nameJa: KAMIYAMA.nameJa,
  nameEn: KAMIYAMA.nameEn,
  heroPhoto: KAMIYAMA_PLACE_PHOTO,
  photoCiteJa:
    '写真は焼山寺（四国霊場第十二番）。Reggaeman、2009-05-04、CC BY-SA 3.0。File:Shozanji_01.JPG。',
  photoCiteEn:
    'Photo: Shōsan-ji (Shikoku pilgrimage temple 12). Reggaeman, 4 May 2009, CC BY-SA 3.0. File:Shozanji_01.JPG.',
  rows: KAMIYAMA_FACILITIES,
  expectedGeo: KAMIYAMA_EXPECTED_GEO_COUNT,
  expectedRows: KAMIYAMA_EXPECTED_ROW_COUNT,
  travelDining: KAMIYAMA_TRAVEL_DINING,
  travelStay: KAMIYAMA_TRAVEL_STAY,
  travelShopping: KAMIYAMA_TRAVEL_SHOPPING,
  travelCommerce: KAMIYAMA_TRAVEL_COMMERCE,
  travelAll: KAMIYAMA_TRAVEL_ALL,
  coverageJa:
    '神山町（JIS 36342）221件。文化財75、観光55、緊急避難場所28、避難所24、公共施設18、介護8、保育7、病院6。AED・Wi-Fi・GTFSは0件（未掲載）。公式座標0件。',
  coverageEn:
    'Kamiyama Town (JIS 36342), 221 rows. Cultural property 75, tourism 55, emergency sites 28, shelters 24, public facilities 18, care 8, childcare 7, hospitals 6. AED, Wi-Fi, GTFS: 0, unpublished. Official coordinates: 0.',
  mapLabelJa: '神山町の公式座標0件',
  mapLabelEn: '0 official coordinates in Kamiyama Town',
  mapCitePackJa: '点は凍結パックの公式座標0件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 0 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.kamiyama.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const KATSUURA_LOOKUP: LookupTown = {
  slug: 'katsuura',
  jis: KATSUURA.jis,
  nameJa: KATSUURA.nameJa,
  nameEn: KATSUURA.nameEn,
  heroPhoto: KATSUURA_PLACE_PHOTO,
  photoCiteJa:
    '写真は鶴林寺（四国霊場第二十番）。Mti、2011-07-04、CC BY-SA 3.0。File:Kakurin_temple_entrance.jpg。',
  photoCiteEn:
    'Photo: Kakurin-ji (Shikoku pilgrimage temple 20). Mti, 4 July 2011, CC BY-SA 3.0. File:Kakurin_temple_entrance.jpg.',
  rows: KATSUURA_FACILITIES,
  expectedGeo: KATSUURA_EXPECTED_GEO_COUNT,
  expectedRows: KATSUURA_EXPECTED_ROW_COUNT,
  travelDining: KATSUURA_TRAVEL_DINING,
  travelStay: KATSUURA_TRAVEL_STAY,
  travelShopping: KATSUURA_TRAVEL_SHOPPING,
  travelCommerce: KATSUURA_TRAVEL_COMMERCE,
  travelAll: KATSUURA_TRAVEL_ALL,
  coverageJa:
    '勝浦町（JIS 36301）77件。観光38、文化財21、AED 13、保育3、公共施設1、病院1。介護・避難所・緊急避難場所・Wi-Fi・GTFSは0件（未掲載）。公式座標1件。',
  coverageEn:
    'Katsuura Town (JIS 36301), 77 rows. Tourism 38, cultural property 21, AED 13, childcare 3, public facility 1, hospital 1. Care, shelter, emergency sites, Wi-Fi, GTFS: 0, unpublished. Official coordinates: 1.',
  mapLabelJa: '勝浦町の公式座標1件',
  mapLabelEn: '1 official coordinate in Katsuura Town',
  mapCitePackJa: '点は凍結パックの公式座標1件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 1 official coordinate from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.katsuura.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const KAMIKATSU_LOOKUP: LookupTown = {
  slug: 'kamikatsu',
  jis: KAMIKATSU.jis,
  nameJa: KAMIKATSU.nameJa,
  nameEn: KAMIKATSU.nameEn,
  heroPhoto: KAMIKATSU_PLACE_PHOTO,
  photoCiteJa:
    '写真は樫原の棚田（重要文化的景観）。Indiana jo、2016-04-29、CC BY-SA 4.0。File:樫原の棚田.JPG。',
  photoCiteEn:
    'Photo: Kashihara rice terraces (Important Cultural Landscape). Indiana jo, 29 April 2016, CC BY-SA 4.0. File:樫原の棚田.JPG.',
  rows: KAMIKATSU_FACILITIES,
  expectedGeo: KAMIKATSU_EXPECTED_GEO_COUNT,
  expectedRows: KAMIKATSU_EXPECTED_ROW_COUNT,
  travelDining: KAMIKATSU_TRAVEL_DINING,
  travelStay: KAMIKATSU_TRAVEL_STAY,
  travelShopping: KAMIKATSU_TRAVEL_SHOPPING,
  travelCommerce: KAMIKATSU_TRAVEL_COMMERCE,
  travelAll: KAMIKATSU_TRAVEL_ALL,
  coverageJa:
    '上勝町（JIS 36302）157件。観光62、GTFS停留所64、避難所9、介護7、緊急避難場所5、文化財3、保育3、公共施設2、病院2。AED・Wi-Fiは0件（未掲載）。公式座標74件。',
  coverageEn:
    'Kamikatsu Town (JIS 36302), 157 rows. Tourism 62, GTFS stops 64, shelter 9, care 7, emergency sites 5, cultural property 3, childcare 3, public facility 2, hospital 2. AED, Wi-Fi: 0, unpublished. Official coordinates: 74.',
  mapLabelJa: '上勝町の公式座標74件',
  mapLabelEn: '74 official coordinates in Kamikatsu Town',
  mapCitePackJa: '点は凍結パックの公式座標74件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 74 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町・観光ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from kamikatsu.jp / tourism-kamikatsu.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


const BY_SLUG: Record<ReadySlug, LookupTown> = {
  mima: MIMA_LOOKUP,
  tsurugi: TSURUGI_LOOKUP,
  yoshinogawa: YOSHINOGAWA_LOOKUP,
  miyoshi: MIYOSHI_LOOKUP,
  tokushima: TOKUSHIMA_CITY_LOOKUP,
  awa: AWA_LOOKUP,
  higashimiyoshi: HIGASHIMIYOSHI_LOOKUP,
  kitajima: KITAJIMA_LOOKUP,
  naruto: NARUTO_LOOKUP,
  matsushige: MATSUSHIGE_LOOKUP,
  ishii: ISHII_LOOKUP,
  itano: ITANO_LOOKUP,
  kamiita: KAMIITA_LOOKUP,
  kamiyama: KAMIYAMA_LOOKUP,
  katsuura: KATSUURA_LOOKUP,
  kamikatsu: KAMIKATSU_LOOKUP
};

export function lookupTown(slug: string): LookupTown | null {
  if (!isReadySlug(slug)) return null;
  return BY_SLUG[slug];
}

export {TRAVEL_ACCESSED, TRAVEL_SOURCES, TSURUGI_TRAVEL_ACCESSED, TSURUGI_TRAVEL_SOURCES, YOSHINOGAWA_TRAVEL_ACCESSED, YOSHINOGAWA_TRAVEL_SOURCES, MIYOSHI_TRAVEL_ACCESSED, MIYOSHI_TRAVEL_SOURCES, TOKUSHIMA_CITY_TRAVEL_ACCESSED, TOKUSHIMA_CITY_TRAVEL_SOURCES, AWA_TRAVEL_ACCESSED, AWA_TRAVEL_SOURCES, HIGASHIMIYOSHI_TRAVEL_ACCESSED, HIGASHIMIYOSHI_TRAVEL_SOURCES, KITAJIMA_TRAVEL_ACCESSED, KITAJIMA_TRAVEL_SOURCES, NARUTO_TRAVEL_ACCESSED, NARUTO_TRAVEL_SOURCES, MATSUSHIGE_TRAVEL_ACCESSED, MATSUSHIGE_TRAVEL_SOURCES, ISHII_TRAVEL_ACCESSED, ISHII_TRAVEL_SOURCES, ITANO_TRAVEL_ACCESSED, ITANO_TRAVEL_SOURCES, KAMIITA_TRAVEL_ACCESSED, KAMIITA_TRAVEL_SOURCES, KAMIYAMA_TRAVEL_ACCESSED, KAMIYAMA_TRAVEL_SOURCES, KATSUURA_TRAVEL_ACCESSED, KATSUURA_TRAVEL_SOURCES, KAMIKATSU_TRAVEL_ACCESSED, KAMIKATSU_TRAVEL_SOURCES};
