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
export const TSURUGI_EXPECTED_ROW_COUNT = 336;
export const TSURUGI_EXPECTED_GEO_COUNT = 171;
export const TSURUGI_EXPECTED_HOURS_COUNT = 60;
export const TSURUGI_EXPECTED_MISSING_ADDRESS = 130;
export const TSURUGI_EXPECTED_MISSING_PHONE = 249;
export const TSURUGI_EXPECTED_CATEGORY_COUNTS = {
  tourism: 29,
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
export const AWA_EXPECTED_ROW_COUNT = 308;
export const AWA_EXPECTED_GEO_COUNT = 171;
export const AWA_EXPECTED_HOURS_COUNT = 83;
export const AWA_EXPECTED_MISSING_ADDRESS = 36;
export const AWA_EXPECTED_MISSING_PHONE = 156;
export const AWA_EXPECTED_CATEGORY_COUNTS = {
  tourism: 31,
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
export const HIGASHIMIYOSHI_EXPECTED_ROW_COUNT = 286;
export const HIGASHIMIYOSHI_EXPECTED_GEO_COUNT = 72;
export const HIGASHIMIYOSHI_EXPECTED_HOURS_COUNT = 112;
export const HIGASHIMIYOSHI_EXPECTED_MISSING_ADDRESS = 178;
export const HIGASHIMIYOSHI_EXPECTED_MISSING_PHONE = 185;
export const HIGASHIMIYOSHI_EXPECTED_CATEGORY_COUNTS = {
  tourism: 11,
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
export const KITAJIMA_EXPECTED_ROW_COUNT = 213;
export const KITAJIMA_EXPECTED_GEO_COUNT = 120;
export const KITAJIMA_EXPECTED_HOURS_COUNT = 209;
export const KITAJIMA_EXPECTED_MISSING_ADDRESS = 0;
export const KITAJIMA_EXPECTED_MISSING_PHONE = 72;
export const KITAJIMA_EXPECTED_CATEGORY_COUNTS = {
  tourism: 5,
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


export const MATSUSHIGE_PACK_JIS = '36401';
export const MATSUSHIGE_PACK_ACCESSED = '2026-08-27';
export const MATSUSHIGE_EXPECTED_ROW_COUNT = 220;
export const MATSUSHIGE_EXPECTED_GEO_COUNT = 108;
export const MATSUSHIGE_EXPECTED_HOURS_COUNT = 216;
export const MATSUSHIGE_EXPECTED_MISSING_ADDRESS = 88;
export const MATSUSHIGE_EXPECTED_MISSING_PHONE = 109;
export const MATSUSHIGE_EXPECTED_CATEGORY_COUNTS = {
  tourism: 9,
  cultural_property: 36,
  care: 1,
  aed: 0,
  shelter: 15,
  emergency_evacuation_site: 56,
  hospital: 0,
  childcare: 13,
  wifi: 0,
  public_facility: 31,
  gtfs_stop: 59
} as const satisfies Record<FacilityCategory, number>;



export const ISHII_PACK_JIS = '36341';
export const ISHII_PACK_ACCESSED = '2026-08-25';
export const ISHII_EXPECTED_ROW_COUNT = 179;
export const ISHII_EXPECTED_GEO_COUNT = 88;
export const ISHII_EXPECTED_HOURS_COUNT = 127;
export const ISHII_EXPECTED_MISSING_ADDRESS = 35;
export const ISHII_EXPECTED_MISSING_PHONE = 112;
export const ISHII_EXPECTED_CATEGORY_COUNTS = {
  tourism: 9,
  cultural_property: 34,
  care: 2,
  aed: 26,
  shelter: 20,
  emergency_evacuation_site: 45,
  hospital: 0,
  childcare: 20,
  wifi: 0,
  public_facility: 23,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;



export const ITANO_PACK_JIS = '36404';
export const ITANO_PACK_ACCESSED = '2026-08-25';
export const ITANO_EXPECTED_ROW_COUNT = 187;
export const ITANO_EXPECTED_GEO_COUNT = 10;
export const ITANO_EXPECTED_HOURS_COUNT = 177;
export const ITANO_EXPECTED_MISSING_ADDRESS = 2;
export const ITANO_EXPECTED_MISSING_PHONE = 141;
export const ITANO_EXPECTED_CATEGORY_COUNTS = {
  tourism: 9,
  cultural_property: 45,
  care: 1,
  aed: 27,
  shelter: 43,
  emergency_evacuation_site: 42,
  hospital: 0,
  childcare: 9,
  wifi: 0,
  public_facility: 11,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;



export const KAMIITA_PACK_JIS = '36405';
export const KAMIITA_PACK_ACCESSED = '2026-08-25';
export const KAMIITA_EXPECTED_ROW_COUNT = 98;
export const KAMIITA_EXPECTED_GEO_COUNT = 35;
export const KAMIITA_EXPECTED_HOURS_COUNT = 87;
export const KAMIITA_EXPECTED_MISSING_ADDRESS = 39;
export const KAMIITA_EXPECTED_MISSING_PHONE = 53;
export const KAMIITA_EXPECTED_CATEGORY_COUNTS = {
  tourism: 10,
  cultural_property: 14,
  care: 1,
  aed: 30,
  shelter: 10,
  emergency_evacuation_site: 13,
  hospital: 0,
  childcare: 10,
  wifi: 0,
  public_facility: 10,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;


export const KAMIYAMA_PACK_JIS = '36342';
export const KAMIYAMA_PACK_ACCESSED = '2026-08-25';
export const KAMIYAMA_EXPECTED_ROW_COUNT = 222;
export const KAMIYAMA_EXPECTED_GEO_COUNT = 0;
export const KAMIYAMA_EXPECTED_HOURS_COUNT = 194;
export const KAMIYAMA_EXPECTED_MISSING_ADDRESS = 60;
export const KAMIYAMA_EXPECTED_MISSING_PHONE = 133;
export const KAMIYAMA_EXPECTED_CATEGORY_COUNTS = {
  tourism: 56,
  cultural_property: 75,
  care: 8,
  aed: 0,
  shelter: 24,
  emergency_evacuation_site: 28,
  hospital: 6,
  childcare: 7,
  wifi: 0,
  public_facility: 18,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;


export const KATSUURA_PACK_JIS = '36301';
export const KATSUURA_PACK_ACCESSED = '2026-08-25';
export const KATSUURA_EXPECTED_ROW_COUNT = 77;
export const KATSUURA_EXPECTED_GEO_COUNT = 1;
export const KATSUURA_EXPECTED_HOURS_COUNT = 35;
export const KATSUURA_EXPECTED_MISSING_ADDRESS = 14;
export const KATSUURA_EXPECTED_MISSING_PHONE = 43;
export const KATSUURA_EXPECTED_CATEGORY_COUNTS = {
  tourism: 38,
  cultural_property: 21,
  care: 0,
  aed: 13,
  shelter: 0,
  emergency_evacuation_site: 0,
  hospital: 1,
  childcare: 3,
  wifi: 0,
  public_facility: 1,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;



export const KAMIKATSU_PACK_JIS = '36302';
export const KAMIKATSU_PACK_ACCESSED = '2026-08-25';
export const KAMIKATSU_EXPECTED_ROW_COUNT = 158;
export const KAMIKATSU_EXPECTED_GEO_COUNT = 74;
export const KAMIKATSU_EXPECTED_HOURS_COUNT = 97;
export const KAMIKATSU_EXPECTED_MISSING_ADDRESS = 125;
export const KAMIKATSU_EXPECTED_MISSING_PHONE = 148;
export const KAMIKATSU_EXPECTED_CATEGORY_COUNTS = {
  tourism: 63,
  cultural_property: 3,
  care: 7,
  aed: 0,
  shelter: 9,
  emergency_evacuation_site: 5,
  hospital: 2,
  childcare: 3,
  wifi: 0,
  public_facility: 2,
  gtfs_stop: 64
} as const satisfies Record<FacilityCategory, number>;



export const SANAGOCHI_PACK_JIS = '36321';
export const SANAGOCHI_PACK_ACCESSED = '2026-08-25';
export const SANAGOCHI_EXPECTED_ROW_COUNT = 69;
export const SANAGOCHI_EXPECTED_GEO_COUNT = 19;
export const SANAGOCHI_EXPECTED_HOURS_COUNT = 49;
export const SANAGOCHI_EXPECTED_MISSING_ADDRESS = 20;
export const SANAGOCHI_EXPECTED_MISSING_PHONE = 43;
export const SANAGOCHI_EXPECTED_CATEGORY_COUNTS = {
  tourism: 6,
  cultural_property: 6,
  care: 1,
  aed: 15,
  shelter: 13,
  emergency_evacuation_site: 19,
  hospital: 1,
  childcare: 3,
  wifi: 4,
  public_facility: 1,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;




export const NAKA_PACK_JIS = '36368';
export const NAKA_PACK_ACCESSED = '2026-08-25';
export const NAKA_EXPECTED_ROW_COUNT = 359;
export const NAKA_EXPECTED_GEO_COUNT = 111;
export const NAKA_EXPECTED_HOURS_COUNT = 338;
export const NAKA_EXPECTED_MISSING_ADDRESS = 145;
export const NAKA_EXPECTED_MISSING_PHONE = 287;
export const NAKA_EXPECTED_CATEGORY_COUNTS = {
  tourism: 14,
  cultural_property: 19,
  care: 9,
  aed: 46,
  shelter: 66,
  emergency_evacuation_site: 29,
  hospital: 9,
  childcare: 6,
  wifi: 0,
  public_facility: 62,
  gtfs_stop: 99
} as const satisfies Record<FacilityCategory, number>;

export const KAIYO_PACK_JIS = '36388';
export const KAIYO_PACK_ACCESSED = '2026-08-27';
export const KAIYO_EXPECTED_ROW_COUNT = 283;
export const KAIYO_EXPECTED_GEO_COUNT = 157;
export const KAIYO_EXPECTED_HOURS_COUNT = 280;
export const KAIYO_EXPECTED_MISSING_ADDRESS = 68;
export const KAIYO_EXPECTED_MISSING_PHONE = 183;
export const KAIYO_EXPECTED_CATEGORY_COUNTS = {
  tourism: 9,
  cultural_property: 19,
  care: 1,
  aed: 32,
  shelter: 41,
  emergency_evacuation_site: 79,
  hospital: 13,
  childcare: 6,
  wifi: 0,
  public_facility: 15,
  gtfs_stop: 68
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

export const AIZUMI_PACK_JIS = '36403';
export const AIZUMI_PACK_ACCESSED = '2026-08-27';
export const AIZUMI_EXPECTED_ROW_COUNT = 225;
export const AIZUMI_EXPECTED_GEO_COUNT = 36;
export const AIZUMI_EXPECTED_HOURS_COUNT = 222;
export const AIZUMI_EXPECTED_MISSING_ADDRESS = 14;
export const AIZUMI_EXPECTED_MISSING_PHONE = 100;
export const AIZUMI_EXPECTED_CATEGORY_COUNTS = {
  tourism: 17,
  cultural_property: 57,
  care: 1,
  aed: 0,
  shelter: 12,
  emergency_evacuation_site: 11,
  hospital: 41,
  childcare: 36,
  wifi: 0,
  public_facility: 50,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;

export const MINAMI_PACK_JIS = '36387';
export const MINAMI_PACK_ACCESSED = '2026-08-27';
export const MINAMI_EXPECTED_ROW_COUNT = 318;
export const MINAMI_EXPECTED_GEO_COUNT = 212;
export const MINAMI_EXPECTED_HOURS_COUNT = 316;
export const MINAMI_EXPECTED_MISSING_ADDRESS = 9;
export const MINAMI_EXPECTED_MISSING_PHONE = 214;
export const MINAMI_EXPECTED_CATEGORY_COUNTS = {
  tourism: 10,
  cultural_property: 41,
  care: 1,
  aed: 19,
  shelter: 38,
  emergency_evacuation_site: 170,
  hospital: 5,
  childcare: 7,
  wifi: 8,
  public_facility: 10,
  gtfs_stop: 9
} as const satisfies Record<FacilityCategory, number>;

export const MUGI_PACK_JIS = '36383';
export const MUGI_PACK_ACCESSED = '2026-08-27';
export const MUGI_EXPECTED_ROW_COUNT = 162;
export const MUGI_EXPECTED_GEO_COUNT = 124;
export const MUGI_EXPECTED_HOURS_COUNT = 159;
export const MUGI_EXPECTED_MISSING_ADDRESS = 7;
export const MUGI_EXPECTED_MISSING_PHONE = 120;
export const MUGI_EXPECTED_CATEGORY_COUNTS = {
  tourism: 4,
  cultural_property: 22,
  care: 1,
  aed: 0,
  shelter: 34,
  emergency_evacuation_site: 78,
  hospital: 6,
  childcare: 2,
  wifi: 0,
  public_facility: 15,
  gtfs_stop: 0
} as const satisfies Record<FacilityCategory, number>;

