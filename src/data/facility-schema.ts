export const FACILITY_CATEGORIES = [
  'tourism',
  'cultural_property',
  'care',
  'aed',
  'shelter',
  'emergency_evacuation_site',
  'hospital',
  'childcare',
  'wifi',
  'public_facility',
  'gtfs_stop'
] as const;

export type FacilityCategory = (typeof FACILITY_CATEGORIES)[number];

export const LOOKUP_CATEGORIES = [
  'shelter',
  'emergency_evacuation_site',
  'aed',
  'hospital',
  'tourism',
  'cultural_property',
  'care',
  'childcare',
  'wifi',
  'public_facility',
  'gtfs_stop'
] as const satisfies readonly FacilityCategory[];

export const EXPECTED_CATEGORY_COUNTS = {
  tourism: 116,
  cultural_property: 110,
  care: 80,
  aed: 72,
  shelter: 45,
  emergency_evacuation_site: 40,
  hospital: 23,
  childcare: 16,
  wifi: 9,
  public_facility: 4,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;

export const EXPECTED_ROW_COUNT = 515;
export const MIMA_PACK_JIS = '36207';
export const PACK_ACCESSED = '2026-08-25';

export const TSURUGI_PACK_JIS = '36468';
export const TSURUGI_EXPECTED_ROW_COUNT = 334;
export const TSURUGI_EXPECTED_GEO_COUNT = 171;
export const TSURUGI_EXPECTED_HOURS_COUNT = 60;
export const TSURUGI_EXPECTED_MISSING_ADDRESS = 130;
export const TSURUGI_EXPECTED_MISSING_PHONE = 249;
export const TSURUGI_EXPECTED_CATEGORY_COUNTS = {
  tourism: 27,
  cultural_property: 97,
  care: 0,
  aed: 0,
  shelter: 19,
  emergency_evacuation_site: 20,
  hospital: 0,
  childcare: 3,
  wifi: 0,
  public_facility: 48,
  gtfs_stop: 120
} as const satisfies Record<FacilityCategory, number>;


export const YOSHINOGAWA_PACK_JIS = '36205';
export const YOSHINOGAWA_EXPECTED_ROW_COUNT = 335;
export const YOSHINOGAWA_EXPECTED_GEO_COUNT = 29;
export const YOSHINOGAWA_EXPECTED_HOURS_COUNT = 108;
export const YOSHINOGAWA_EXPECTED_MISSING_ADDRESS = 112;
export const YOSHINOGAWA_EXPECTED_MISSING_PHONE = 286;
export const YOSHINOGAWA_EXPECTED_CATEGORY_COUNTS = {
  tourism: 38,
  cultural_property: 77,
  care: 0,
  aed: 0,
  shelter: 96,
  emergency_evacuation_site: 48,
  hospital: 0,
  childcare: 26,
  wifi: 0,
  public_facility: 21,
  gtfs_stop: 29
} as const satisfies Record<FacilityCategory, number>;



export const AWA_PACK_JIS = '36206';
export const AWA_EXPECTED_ROW_COUNT = 307;
export const AWA_EXPECTED_GEO_COUNT = 171;
export const AWA_EXPECTED_HOURS_COUNT = 83;
export const AWA_EXPECTED_MISSING_ADDRESS = 36;
export const AWA_EXPECTED_MISSING_PHONE = 156;
export const AWA_EXPECTED_CATEGORY_COUNTS = {
  tourism: 30,
  cultural_property: 3,
  care: 0,
  aed: 52,
  shelter: 33,
  emergency_evacuation_site: 24,
  hospital: 0,
  childcare: 31,
  wifi: 33,
  public_facility: 101,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;


export const MIYOSHI_PACK_JIS = '36208';
export const MIYOSHI_EXPECTED_ROW_COUNT = 1042;
export const MIYOSHI_EXPECTED_GEO_COUNT = 636;
export const MIYOSHI_EXPECTED_HOURS_COUNT = 494;
export const MIYOSHI_EXPECTED_MISSING_ADDRESS = 548;
export const MIYOSHI_EXPECTED_MISSING_PHONE = 791;
export const MIYOSHI_EXPECTED_CATEGORY_COUNTS = {
  tourism: 221,
  cultural_property: 184,
  care: 0,
  aed: 0,
  shelter: 0,
  emergency_evacuation_site: 0,
  hospital: 0,
  childcare: 32,
  wifi: 24,
  public_facility: 33,
  gtfs_stop: 548
} as const satisfies Record<FacilityCategory, number>;


export const HIGASHIMIYOSHI_PACK_JIS = '36489';
export const HIGASHIMIYOSHI_EXPECTED_ROW_COUNT = 285;
export const HIGASHIMIYOSHI_EXPECTED_GEO_COUNT = 72;
export const HIGASHIMIYOSHI_EXPECTED_HOURS_COUNT = 112;
export const HIGASHIMIYOSHI_EXPECTED_MISSING_ADDRESS = 178;
export const HIGASHIMIYOSHI_EXPECTED_MISSING_PHONE = 185;
export const HIGASHIMIYOSHI_EXPECTED_CATEGORY_COUNTS = {
  tourism: 10,
  cultural_property: 109,
  care: 11,
  aed: 0,
  shelter: 13,
  emergency_evacuation_site: 16,
  hospital: 15,
  childcare: 9,
  wifi: 3,
  public_facility: 36,
  gtfs_stop: 63
} as const satisfies Record<FacilityCategory, number>;


export const KITAJIMA_PACK_JIS = '36402';
export const KITAJIMA_PACK_ACCESSED = '2026-08-27';
export const KITAJIMA_EXPECTED_ROW_COUNT = 209;
export const KITAJIMA_EXPECTED_GEO_COUNT = 116;
export const KITAJIMA_EXPECTED_HOURS_COUNT = 209;
export const KITAJIMA_EXPECTED_MISSING_ADDRESS = 0;
export const KITAJIMA_EXPECTED_MISSING_PHONE = 72;
export const KITAJIMA_EXPECTED_CATEGORY_COUNTS = {
  tourism: 2,
  cultural_property: 28,
  care: 1,
  aed: 21,
  shelter: 31,
  emergency_evacuation_site: 50,
  hospital: 29,
  childcare: 19,
  wifi: 0,
  public_facility: 28,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;

export type FacilityRow = {
  id: string;
  jis: string;
  name_ja: string;
  reading: string | null;
  category: FacilityCategory;
  lat: number | null;
  lon: number | null;
  address: string | null;
  phone: string | null;
  official_url: string | null;
  hours: string | null;
  source_url: string;
  license: string;
  accessed: string;
};

export type LicenseKind = 'cc_by_open_data' | 'city_site';

export const CATEGORY_LABEL = {
  ja: {
    tourism: '観光',
    cultural_property: '文化財',
    care: '介護',
    aed: 'AED',
    shelter: '避難所',
    emergency_evacuation_site: '緊急避難場所',
    hospital: '病院',
    childcare: '保育',
    wifi: 'Wi-Fi',
    public_facility: '公共施設',
    gtfs_stop: '停留所'
  },
  en: {
    tourism: 'Tourism',
    cultural_property: 'Cultural property',
    care: 'Care',
    aed: 'AED',
    shelter: 'Shelter',
    emergency_evacuation_site: 'Emergency evacuation site',
    hospital: 'Hospital',
    childcare: 'Childcare',
    wifi: 'Wi-Fi',
    public_facility: 'Public facility',
    gtfs_stop: 'Transit stop'
  }
} as const satisfies Record<'ja' | 'en', Record<FacilityCategory, string>>;

export function licenseKind(license: string): LicenseKind {
  return license.startsWith('CC BY') ? 'cc_by_open_data' : 'city_site';
}

export const EXPECTED_GEO_COUNT = 61;
export const EXPECTED_HOURS_COUNT = 178;
export const EXPECTED_MISSING_ADDRESS = 110;
export const EXPECTED_MISSING_PHONE = 374;
export const LOOKUP_PAGE_SIZE = 12;

export type OfficialMapPoint = {
  id: string;
  name_ja: string;
  category: FacilityCategory;
  lat: number;
  lon: number;
};

export type FacilityGapBoard = {
  total: number;
  geo: number;
  hours: number;
  missingAddress: number;
  missingPhone: number;
  gtfs: number;
};

export type MimaOfficialMapPoint = {
  id: string;
  name_ja: string;
  category: FacilityCategory;
  x: number;
  y: number;
};

export type MimaOfficialMap = {
  viewBox: string;
  width: number;
  height: number;
  outline: string;
  outlineSource: 'n03' | 'bbox';
  points: MimaOfficialMapPoint[];
};
