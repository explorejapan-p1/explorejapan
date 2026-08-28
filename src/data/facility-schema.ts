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
