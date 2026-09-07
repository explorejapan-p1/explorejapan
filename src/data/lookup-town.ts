import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import type {TravelRow} from './mima-travel';

export type ReadySlug = 'mima' | 'tsurugi' | 'yoshinogawa' | 'miyoshi' | 'tokushima' | 'awa' | 'higashimiyoshi' | 'kitajima' | 'naruto' | 'matsushige' | 'ishii' | 'itano' | 'kamiita' | 'kamiyama' | 'katsuura' | 'kamikatsu' | 'sanagochi' | 'naka' | 'mugi' | 'minami' | 'kaiyo' | 'aizumi' | 'komatsushima' | 'anan' | 'takamatsu' | 'kotohira' | 'marugame' | 'kanonji' | 'sakaide' | 'naoshima' | 'shodoshima' | 'zentsuji' | 'mitoyo' | 'utazu' | 'tonosho' | 'sanuki' | 'higashikagawa' | 'miki' | 'ayagawa' | 'tadotsu' | 'manno' | 'kochi' | 'nankoku' | 'konan' | 'kami' | 'ino' | 'aki' | 'muroto' | 'tosa' | 'susaki' | 'shimanto' | 'tosashimizu' | 'sukumo' | 'kuroshio' | 'toyo' | 'nahari' | 'yasuda';

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
  prefectureSlug: 'tokushima' | 'kagawa' | 'kochi';
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
  return slug === 'mima' || slug === 'tsurugi' || slug === 'yoshinogawa' || slug === 'miyoshi' || slug === 'tokushima' || slug === 'awa' || slug === 'higashimiyoshi' || slug === 'kitajima' || slug === 'naruto' || slug === 'matsushige' || slug === 'ishii' || slug === 'itano' || slug === 'kamiita' || slug === 'kamiyama' || slug === 'katsuura' || slug === 'kamikatsu' || slug === 'sanagochi' || slug === 'naka' || slug === 'mugi' || slug === 'minami' || slug === 'kaiyo' || slug === 'aizumi' || slug === 'komatsushima' || slug === 'anan' || slug === 'takamatsu' || slug === 'kotohira' || slug === 'marugame' || slug === 'kanonji' || slug === 'sakaide' || slug === 'naoshima' || slug === 'shodoshima' || slug === 'zentsuji' || slug === 'mitoyo' || slug === 'utazu' || slug === 'tonosho' || slug === 'sanuki' || slug === 'higashikagawa' || slug === 'miki' || slug === 'ayagawa' || slug === 'tadotsu' || slug === 'manno' || slug === 'kochi' || slug === 'nankoku' || slug === 'konan' || slug === 'kami' || slug === 'ino' || slug === 'aki' || slug === 'muroto' || slug === 'tosa' || slug === 'susaki' || slug === 'shimanto' || slug === 'tosashimizu' || slug === 'sukumo' || slug === 'kuroshio' || slug === 'toyo' || slug === 'nahari' || slug === 'yasuda'
}


export type PrefSlug = 'tokushima' | 'kagawa' | 'kochi';

/** Pref path segment for a ReadySlug hub. Tokushima hubs stay tokushima; Takamatsu is kagawa. */
export function prefSlugForReady(slug: ReadySlug): PrefSlug {
  if (slug === 'kochi' || slug === 'nankoku' || slug === 'konan' || slug === 'kami' || slug === 'ino' || slug === 'aki' || slug === 'muroto' || slug === 'tosa' || slug === 'susaki' || slug === 'shimanto' || slug === 'tosashimizu' || slug === 'sukumo' || slug === 'kuroshio' || slug === 'toyo' || slug === 'nahari' || slug === 'yasuda') return 'kochi';
  if (slug === 'takamatsu' || slug === 'kotohira' || slug === 'marugame' || slug === 'kanonji' || slug === 'sakaide' || slug === 'naoshima' || slug === 'shodoshima' || slug === 'zentsuji' || slug === 'mitoyo' || slug === 'utazu' || slug === 'tonosho' || slug === 'sanuki' || slug === 'higashikagawa' || slug === 'miki' || slug === 'ayagawa' || slug === 'tadotsu' || slug === 'manno') return 'kagawa';
  return 'tokushima';
}

