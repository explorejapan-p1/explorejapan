import type {FacilityRow} from '@/data/facility-schema';
import {type MimaPlacePhoto} from '@/data/mima';
import {MIMA_FACILITIES} from '@/data/mima-facilities';
import {
  TRAVEL_ALL,
  isExperiencePackRow,
  isOnsenPackRow,
  isSightsCategory,
  rankSeeRows,
  sightPhoto,
  type TravelKind,
  type TravelRow
} from '@/data/mima-travel';

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
};

function packDedupeKey(row: FacilityRow): string {
  if (row.lat !== null && row.lon !== null) {
    return `${row.name_ja}|${row.lat}|${row.lon}`;
  }
  return `${row.name_ja}|${row.source_url}`;
}

function kindForPack(row: FacilityRow): ListingKind {
  if (isOnsenPackRow(row)) return 'onsen';
  if (isExperiencePackRow(row)) return 'experience';
  return 'sights';
}

function fromTravel(row: TravelRow): PublicListing {
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
    photo: sightPhoto(row.name_ja)
  };
}

function fromPack(row: FacilityRow): PublicListing {
  return {
    id: row.id,
    nameJa: row.name_ja,
    kind: kindForPack(row),
    address: row.address,
    phone: row.phone,
    hours: row.hours,
    lat: row.lat,
    lon: row.lon,
    sourceUrl: row.source_url,
    officialUrl: row.official_url,
    accessed: row.accessed,
    photo: sightPhoto(row.name_ja)
  };
}

export function publicListings(): PublicListing[] {
  const out: PublicListing[] = TRAVEL_ALL.map(fromTravel);
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of MIMA_FACILITIES) {
    if (
      !isOnsenPackRow(row) &&
      !isExperiencePackRow(row) &&
      !isSightsCategory(row.category)
    ) {
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
    out.push(fromPack(row));
  }
  return out;
}

export function liveListings(): PublicListing[] {
  return publicListings().filter((row) => row.photo !== null);
}

export function listingById(id: string): PublicListing | undefined {
  return publicListings().find((row) => row.id === id);
}

export function listingRest(id: string): string {
  return `tokushima/mima/p/${id}`;
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

export function featuredListings(): PublicListing[] {
  const all = liveListings();
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
