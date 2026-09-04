import type {FacilityRow} from '@/data/facility-schema';
import {type MimaPlacePhoto} from '@/data/mima';
import {
  isExperiencePackRow,
  isOnsenPackRow,
  isSightsCategory,
  rankSeeRows,
  sightPhoto,
  type TravelKind,
  type TravelRow
} from '@/data/mima-travel';
import type {ReadySlug} from '@/data/lookup-town';
import {lookupTown} from '@/data/town-lookup';
import {
  isTsurugiOnsenPackRow,
  isTsurugiStayPackRow,
  rankTsurugiSeeRows,
  tsurugiSightPhoto
} from '@/data/tsurugi-travel';
import {
  isYoshinogawaOnsenPackRow,
  isYoshinogawaStayPackRow,
  rankYoshinogawaSeeRows,
  yoshinogawaSightPhoto
} from '@/data/yoshinogawa-travel';

import {
  isMiyoshiOnsenPackRow,
  isMiyoshiStayPackRow,
  rankMiyoshiSeeRows,
  miyoshiSightPhoto
} from '@/data/miyoshi-travel';

import {
  isTokushimaCityOnsenPackRow,
  isTokushimaCityStayPackRow,
  rankTokushimaCitySeeRows,
  tokushimaCitySightPhoto
} from '@/data/tokushima-city-travel';

import {
  isAwaOnsenPackRow,
  isAwaStayPackRow,
  rankAwaSeeRows,
  awaSightPhoto
} from '@/data/awa-travel';

import {
  isHigashimiyoshiOnsenPackRow,
  isHigashimiyoshiStayPackRow,
  rankHigashimiyoshiSeeRows,
  higashimiyoshiSightPhoto
} from '@/data/higashimiyoshi-travel';

import {
  isKitajimaOnsenPackRow,
  isKitajimaStayPackRow,
  rankKitajimaSeeRows,
  kitajimaSightPhoto
} from '@/data/kitajima-travel';

import {
  isIshiiOnsenPackRow,
  isIshiiStayPackRow,
  rankIshiiSeeRows,
  ishiiSightPhoto
} from '@/data/ishii-travel';

import {
  isMatsushigeOnsenPackRow,
  isMatsushigeStayPackRow,
  rankMatsushigeSeeRows,
  matsushigeSightPhoto
} from '@/data/matsushige-travel';

import {
  isNarutoOnsenPackRow,
  isNarutoStayPackRow,
  rankNarutoSeeRows,
  narutoSightPhoto
} from '@/data/naruto-travel';


export type ListingKind = TravelKind | 'onsen' | 'experience' | 'sights';

export type PublicListing = {
  id: string;
  nameJa: string;
  kind: ListingKind;
  address: string | null;
  phone: string | null;
  hours: string | null;
  lat: number | null;
  lon: number | null;
  sourceUrl: string;
  officialUrl: string | null;
  accessed: string;
  photo: MimaPlacePhoto | null;
  slug: ReadySlug;
};

function packDedupeKey(row: FacilityRow): string {
  if (row.lat !== null && row.lon !== null) {
    return `${row.name_ja}|${row.lat}|${row.lon}`;
  }
  return `${row.name_ja}|${row.source_url}`;
}

function fromTravel(row: TravelRow, slug: ReadySlug, photo: MimaPlacePhoto | null): PublicListing {
  return {
    id: row.id,
    nameJa: row.name_ja,
    kind: row.category,
    address: row.address,
    phone: row.phone,
    hours: null,
    lat: null,
    lon: null,
    sourceUrl: row.source_url,
    officialUrl: row.source_url,
    accessed: row.accessed,
    photo,
    slug
  };
}

function fromPack(
  row: FacilityRow,
  slug: ReadySlug,
  kind: ListingKind,
  photo: MimaPlacePhoto | null
): PublicListing {
  return {
    id: row.id,
    nameJa: row.name_ja,
    kind,
    address: row.address,
    phone: row.phone,
    hours: row.hours,
    lat: row.lat,
    lon: row.lon,
    sourceUrl: row.source_url,
    officialUrl: row.official_url,
    accessed: row.accessed,
    photo,
    slug
  };
}

function mimaListings(): PublicListing[] {
  const town = lookupTown('mima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'mima', sightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (!isOnsenPackRow(row) && !isExperiencePackRow(row) && !isSightsCategory(row.category)) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSeeRows(pack);
  const onsen = pack.filter(isOnsenPackRow);
  const experience = pack.filter(isExperiencePackRow);
  for (const row of [...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isOnsenPackRow(row)
      ? 'onsen'
      : isExperiencePackRow(row)
        ? 'experience'
        : 'sights';
    out.push(fromPack(row, 'mima', kind, sightPhoto(row.name_ja)));
  }
  return out;
}

function tsurugiListings(): PublicListing[] {
  const town = lookupTown('tsurugi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tsurugi', tsurugiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isTsurugiOnsenPackRow(row) &&
      !isTsurugiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTsurugiSeeRows(pack);
  const onsen = pack.filter(isTsurugiOnsenPackRow);
  const stay = pack.filter(isTsurugiStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isTsurugiOnsenPackRow(row)
      ? 'onsen'
      : isTsurugiStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'tsurugi', kind, tsurugiSightPhoto(row.name_ja)));
  }
  return out;
}


function yoshinogawaListings(): PublicListing[] {
  const town = lookupTown('yoshinogawa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'yoshinogawa', yoshinogawaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isYoshinogawaOnsenPackRow(row) &&
      !isYoshinogawaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankYoshinogawaSeeRows(pack);
  const onsen = pack.filter(isYoshinogawaOnsenPackRow);
  const stay = pack.filter(isYoshinogawaStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isYoshinogawaOnsenPackRow(row)
      ? 'onsen'
      : isYoshinogawaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'yoshinogawa', kind, yoshinogawaSightPhoto(row.name_ja)));
  }
  return out;
}


function miyoshiListings(): PublicListing[] {
  const town = lookupTown('miyoshi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'miyoshi', miyoshiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isMiyoshiOnsenPackRow(row) &&
      !isMiyoshiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMiyoshiSeeRows(pack);
  const onsen = pack.filter(isMiyoshiOnsenPackRow);
  const stay = pack.filter(isMiyoshiStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isMiyoshiOnsenPackRow(row)
      ? 'onsen'
      : isMiyoshiStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'miyoshi', kind, miyoshiSightPhoto(row.name_ja)));
  }
  return out;
}



function awaListings(): PublicListing[] {
  const town = lookupTown('awa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'awa', awaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isAwaOnsenPackRow(row) &&
      !isAwaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankAwaSeeRows(pack);
  const onsen = pack.filter(isAwaOnsenPackRow);
  const stay = pack.filter(isAwaStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isAwaOnsenPackRow(row)
      ? 'onsen'
      : isAwaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'awa', kind, awaSightPhoto(row.name_ja)));
  }
  return out;
}


function higashimiyoshiListings(): PublicListing[] {
  const town = lookupTown('higashimiyoshi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'higashimiyoshi', higashimiyoshiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isHigashimiyoshiOnsenPackRow(row) &&
      !isHigashimiyoshiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankHigashimiyoshiSeeRows(pack);
  const onsen = pack.filter(isHigashimiyoshiOnsenPackRow);
  const stay = pack.filter(isHigashimiyoshiStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isHigashimiyoshiOnsenPackRow(row)
      ? 'onsen'
      : isHigashimiyoshiStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'higashimiyoshi', kind, higashimiyoshiSightPhoto(row.name_ja)));
  }
  return out;
}



function matsushigeListings(): PublicListing[] {
  const town = lookupTown('matsushige')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'matsushige', matsushigeSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isMatsushigeOnsenPackRow(row) &&
      !isMatsushigeStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMatsushigeSeeRows(pack);
  const onsen = pack.filter(isMatsushigeOnsenPackRow);
  const stay = pack.filter(isMatsushigeStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isMatsushigeOnsenPackRow(row)
      ? 'onsen'
      : isMatsushigeStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'matsushige', kind, matsushigeSightPhoto(row.name_ja)));
  }
  return out;
}

function kitajimaListings(): PublicListing[] {
  const town = lookupTown('kitajima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kitajima', kitajimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isKitajimaOnsenPackRow(row) &&
      !isKitajimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKitajimaSeeRows(pack);
  const onsen = pack.filter(isKitajimaOnsenPackRow);
  const stay = pack.filter(isKitajimaStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isKitajimaOnsenPackRow(row)
      ? 'onsen'
      : isKitajimaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'kitajima', kind, kitajimaSightPhoto(row.name_ja)));
  }
  return out;
}

function tokushimaCityListings(): PublicListing[] {
  const town = lookupTown('tokushima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tokushima', tokushimaCitySightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isTokushimaCityOnsenPackRow(row) &&
      !isTokushimaCityStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTokushimaCitySeeRows(pack);
  const onsen = pack.filter(isTokushimaCityOnsenPackRow);
  const stay = pack.filter(isTokushimaCityStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isTokushimaCityOnsenPackRow(row)
      ? 'onsen'
      : isTokushimaCityStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'tokushima', kind, tokushimaCitySightPhoto(row.name_ja)));
  }
  return out;
}


function narutoListings(): PublicListing[] {
  const town = lookupTown('naruto')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'naruto', narutoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isNarutoOnsenPackRow(row) &&
      !isNarutoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNarutoSeeRows(pack);
  const onsen = pack.filter(isNarutoOnsenPackRow);
  const stay = pack.filter(isNarutoStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isNarutoOnsenPackRow(row)
      ? 'onsen'
      : isNarutoStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'naruto', kind, narutoSightPhoto(row.name_ja)));
  }
  return out;
}


function ishiiListings(): PublicListing[] {
  const town = lookupTown('ishii')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'ishii', ishiiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isIshiiOnsenPackRow(row) &&
      !isIshiiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankIshiiSeeRows(pack);
  const onsen = pack.filter(isIshiiOnsenPackRow);
  const stay = pack.filter(isIshiiStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isIshiiOnsenPackRow(row)
      ? 'onsen'
      : isIshiiStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'ishii', kind, ishiiSightPhoto(row.name_ja)));
  }
  return out;
}

const CACHE: Record<ReadySlug, PublicListing[]> = {
  mima: mimaListings(),
  tsurugi: tsurugiListings(),
  yoshinogawa: yoshinogawaListings(),
  miyoshi: miyoshiListings(),
  tokushima: tokushimaCityListings(),
  awa: awaListings(),
  higashimiyoshi: higashimiyoshiListings(),
  kitajima: kitajimaListings(),
  naruto: narutoListings(),
  matsushige: matsushigeListings(),
  ishii: ishiiListings()
};

export function publicListings(slug: ReadySlug = 'mima'): PublicListing[] {
  return CACHE[slug];
}

export function allPublicListings(): PublicListing[] {
  return [...CACHE.mima, ...CACHE.tsurugi, ...CACHE.yoshinogawa, ...CACHE.miyoshi, ...CACHE.tokushima, ...CACHE.awa, ...CACHE.higashimiyoshi, ...CACHE.kitajima, ...CACHE.naruto, ...CACHE.matsushige, ...CACHE.ishii];
}

export function liveListings(slug?: ReadySlug): PublicListing[] {
  const rows = slug ? publicListings(slug) : allPublicListings();
  return rows.filter((row) => row.photo !== null);
}

export function listingById(id: string, slug?: ReadySlug): PublicListing | undefined {
  const rows = slug ? publicListings(slug) : allPublicListings();
  return rows.find((row) => row.id === id);
}

export function listingRest(id: string, slug: ReadySlug = 'mima'): string {
  return `tokushima/${slug}/p/${id}`;
}

export function schemaType(kind: ListingKind, nameJa: string): string {
  if (kind === 'dining') return 'Restaurant';
  if (kind === 'stay') {
    return nameJa.includes('ホテル') ? 'Hotel' : 'LodgingBusiness';
  }
  if (kind === 'shopping') return 'Store';
  if (kind === 'commerce') return 'LocalBusiness';
  return 'TouristAttraction';
}

export function featuredListings(slug: ReadySlug = 'mima'): PublicListing[] {
  const all = liveListings(slug);
  const pinKinds: ListingKind[] = [
    'stay',
    'dining',
    'onsen',
    'experience',
    'shopping',
    'commerce'
  ];
  const pinned = pinKinds.flatMap((kind) => all.filter((row) => row.kind === kind));
  const sights = all.filter((row) => row.kind === 'sights').slice(0, 10);
  const seen = new Set<string>();
  const out: PublicListing[] = [];
  for (const row of [...pinned, ...sights]) {
    if (seen.has(row.id)) continue;
    seen.add(row.id);
    out.push(row);
  }
  return out;
}
