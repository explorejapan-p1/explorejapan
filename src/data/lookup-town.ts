import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import type {TravelRow} from './mima-travel';

export type ReadySlug = 'mima' | 'tsurugi';

export type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

/** Serializable lookup chrome. Helpers live in lookup-helpers (no node:fs). */
export type LookupTown = {
  slug: ReadySlug;
  jis: string;
  nameJa: string;
  nameEn: string;
  heroPhoto: MimaPlacePhoto;
  photoCiteJa: string;
  photoCiteEn: string;
  rows: readonly FacilityRow[];
  expectedGeo: number;
  expectedRows: number;
  travelDining: readonly TravelRow[];
  travelStay: readonly TravelRow[];
  travelShopping: readonly TravelRow[];
  travelCommerce: readonly TravelRow[];
  travelAll: readonly TravelRow[];
  coverageJa: string;
  coverageEn: string;
  mapLabelJa: string;
  mapLabelEn: string;
  mapCitePackJa: string;
  mapCitePackEn: string;
  licenseNoteJa: string;
  licenseNoteEn: string;
  licenseSiteJa: string;
  licenseSiteEn: string;
};

export function isReadySlug(slug: string): slug is ReadySlug {
  return slug === 'mima' || slug === 'tsurugi';
}
