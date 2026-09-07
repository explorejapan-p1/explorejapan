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
import {prefSlugForReady} from '@/data/lookup-town';
import {lookupTown} from '@/data/town-lookup';
import {
  isTsurugiOnsenPackRow,
  isTsurugiStayPackRow,
  rankTsurugiSeeRows,
  tsurugiSightPhoto,
  isTsurugiExperiencePackRow,
} from '@/data/tsurugi-travel';
import {
  isYoshinogawaOnsenPackRow,
  isYoshinogawaStayPackRow,
  rankYoshinogawaSeeRows,
  yoshinogawaSightPhoto,
  isYoshinogawaExperiencePackRow,
} from '@/data/yoshinogawa-travel';

import {
  isMiyoshiOnsenPackRow,
  isMiyoshiStayPackRow,
  rankMiyoshiSeeRows,
  miyoshiSightPhoto,
  isMiyoshiExperiencePackRow
} from '@/data/miyoshi-travel';

import {
  isTokushimaCityOnsenPackRow,
  isTokushimaCityStayPackRow,
  rankTokushimaCitySeeRows,
  tokushimaCitySightPhoto,
  isTokushimaCityExperiencePackRow
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
  higashimiyoshiSightPhoto,
  isHigashimiyoshiExperiencePackRow,
} from '@/data/higashimiyoshi-travel';

import {
  isKitajimaOnsenPackRow,
  isKitajimaStayPackRow,
  rankKitajimaSeeRows,
  kitajimaSightPhoto,
  isKitajimaExperiencePackRow,
} from '@/data/kitajima-travel';

import {
  isIshiiOnsenPackRow,
  isIshiiStayPackRow,
  rankIshiiSeeRows,
  ishiiSightPhoto
} from '@/data/ishii-travel';

import {
  isItanoOnsenPackRow,
  isItanoStayPackRow,
  isItanoShoppingPackRow,
  rankItanoSeeRows,
  itanoSightPhoto
} from '@/data/itano-travel';
import {
  isKamiitaOnsenPackRow,
  isKamiitaStayPackRow,
  isKamiitaShoppingPackRow,
  rankKamiitaSeeRows,
  kamiitaSightPhoto,
  isKamiitaExperiencePackRow,
} from '@/data/kamiita-travel';
import {
  isKamiyamaOnsenPackRow,
  isKamiyamaStayPackRow,
  isKamiyamaShoppingPackRow,
  rankKamiyamaSeeRows,
  kamiyamaSightPhoto,
  KAMIYAMA_DINING_NAME_SET,
  isKamiyamaExperiencePackRow,
} from '@/data/kamiyama-travel';

import {
  isKatsuuraOnsenPackRow,
  isKatsuuraStayPackRow,
  isKatsuuraShoppingPackRow,
  rankKatsuuraSeeRows,
  katsuuraSightPhoto,
  KATSUURA_DINING_NAME_SET,
  isKatsuuraExperiencePackRow,
} from '@/data/katsuura-travel';
import {
  isKamikatsuOnsenPackRow,
  isKamikatsuShoppingPackRow,
  isKamikatsuStayPackRow,
  KAMIKATSU_DINING_NAME_SET,
  kamikatsuSightPhoto,
  rankKamikatsuSeeRows,
  isKamikatsuExperiencePackRow,
} from '@/data/kamikatsu-travel';
import {
  isSanagochiOnsenPackRow,
  isSanagochiShoppingPackRow,
  isSanagochiStayPackRow,
  rankSanagochiSeeRows,
  SANAGOCHI_DINING_NAME_SET,
  sanagochiSightPhoto
} from '@/data/sanagochi-travel';
import {
  isNakaOnsenPackRow,
  isNakaStayPackRow,
  isNakaShoppingPackRow,
  NAKA_DINING_NAME_SET,
  nakaSightPhoto,
  rankNakaSeeRows
} from '@/data/naka-travel';

import {
  MUGI_DINING_NAME_SET,
  isMugiOnsenPackRow,
  isMugiExperiencePackRow,
  isMugiShoppingPackRow,
  isMugiStayPackRow,
  rankMugiSeeRows,
  mugiSightPhoto
} from '@/data/mugi-travel';

import {
  isMinamiOnsenPackRow,
  isMinamiStayPackRow,
  isMinamiShoppingPackRow,
  MINAMI_DINING_NAME_SET,
  minamiSightPhoto,
  rankMinamiSeeRows,
  isMinamiExperiencePackRow
} from '@/data/minami-travel';

import {
  AIZUMI_DINING_NAME_SET,
  isAizumiOnsenPackRow,
  isAizumiShoppingPackRow,
  isAizumiStayPackRow,
  rankAizumiSeeRows,
  aizumiSightPhoto,
  isAizumiExperiencePackRow
} from '@/data/aizumi-travel';

import {
  isKomatsushimaOnsenPackRow,
  isKomatsushimaStayPackRow,
  rankKomatsushimaSeeRows,
  KOMATSUSHIMA_DINING_NAME_SET,
  komatsushimaSightPhoto,
  isKomatsushimaExperiencePackRow
} from '@/data/komatsushima-travel';
import {
  ANAN_DINING_NAME_SET,
  isAnanOnsenPackRow,
  isAnanStayPackRow,
  rankAnanSeeRows,
  ananSightPhoto,
  isAnanExperiencePackRow
} from '@/data/anan-travel';
import {
  isTakamatsuOnsenPackRow,
  isTakamatsuStayPackRow,
  isTakamatsuExperiencePackRow,
  rankTakamatsuSeeRows,
  takamatsuSightPhoto,
  TAKAMATSU_DINING_NAME_SET
} from '@/data/takamatsu-travel';
import {
  isKotohiraOnsenPackRow,
  isKotohiraExperiencePackRow,
  isKotohiraStayPackRow,
  kotohiraSightPhoto,
  rankKotohiraSeeRows,
  KOTOHIRA_DINING_NAME_SET
} from '@/data/kotohira-travel';
import {
  isMarugameOnsenPackRow,
  isMarugameExperiencePackRow,
  isMarugameStayPackRow,
  marugameSightPhoto,
  rankMarugameSeeRows,
  MARUGAME_DINING_NAME_SET
} from '@/data/marugame-travel';
import {
  isKanonjiOnsenPackRow,
  isKanonjiExperiencePackRow,
  isKanonjiStayPackRow,
  kanonjiSightPhoto,
  rankKanonjiSeeRows,
  KANONJI_DINING_NAME_SET
} from '@/data/kanonji-travel';
import {
  isSakaideOnsenPackRow,
  isSakaideExperiencePackRow,
  isSakaideStayPackRow,
  sakaideSightPhoto,
  rankSakaideSeeRows,
  SAKAIDE_DINING_NAME_SET
} from '@/data/sakaide-travel';
import {
  isNaoshimaOnsenPackRow,
  isNaoshimaExperiencePackRow,
  isNaoshimaStayPackRow,
  naoshimaSightPhoto,
  rankNaoshimaSeeRows,
  NAOSHIMA_DINING_NAME_SET
} from '@/data/naoshima-travel';
import {
  isShodoshimaOnsenPackRow,
  isShodoshimaExperiencePackRow,
  isShodoshimaStayPackRow,
  shodoshimaSightPhoto,
  rankShodoshimaSeeRows,
  SHODOSHIMA_DINING_NAME_SET
} from '@/data/shodoshima-travel';
import {
  zentsujiSightPhoto,
  ZENTSUJI_DINING_NAME_SET,
  isZentsujiOnsenPackRow,
  isZentsujiExperiencePackRow,
  isZentsujiStayPackRow,
  rankZentsujiSeeRows
} from '@/data/zentsuji-travel';
import {
  isMitoyoOnsenPackRow,
  isMitoyoExperiencePackRow,
  isMitoyoStayPackRow,
  rankMitoyoSeeRows,
  mitoyoSightPhoto,
  MITOYO_DINING_NAME_SET
} from '@/data/mitoyo-travel';
import {
  utazuSightPhoto,
  isUtazuOnsenPackRow,
  isUtazuExperiencePackRow,
  isUtazuStayPackRow,
  rankUtazuSeeRows,
  UTAZU_DINING_NAME_SET
} from '@/data/utazu-travel';
import {
  isTonoshoOnsenPackRow,
  isTonoshoExperiencePackRow,
  isTonoshoStayPackRow,
  tonoshoSightPhoto,
  rankTonoshoSeeRows,
  TONOSHO_DINING_NAME_SET
} from '@/data/tonosho-travel';
import {
  isSanukiOnsenPackRow,
  isSanukiExperiencePackRow,
  isSanukiStayPackRow,
  sanukiSightPhoto,
  rankSanukiSeeRows,
  SANUKI_DINING_NAME_SET
} from '@/data/sanuki-travel';
import {
  HIGASHIKAGAWA_DINING_NAME_SET,
  higashikagawaSightPhoto,
  isHigashikagawaExperiencePackRow,
  isHigashikagawaOnsenPackRow,
  isHigashikagawaStayPackRow,
  rankHigashikagawaSeeRows
} from '@/data/higashikagawa-travel';




import {
  isKaiyoOnsenPackRow,
  isKaiyoStayPackRow,
  isKaiyoShoppingPackRow,
  KAIYO_DINING_NAME_SET,
  kaiyoSightPhoto,
  rankKaiyoSeeRows,
  isKaiyoExperiencePackRow
} from '@/data/kaiyo-travel';



import {
  isMatsushigeOnsenPackRow,
  isMatsushigeStayPackRow,
  rankMatsushigeSeeRows,
  matsushigeSightPhoto,
  isMatsushigeExperiencePackRow
} from '@/data/matsushige-travel';

import {
  isNarutoOnsenPackRow,
  isNarutoStayPackRow,
  rankNarutoSeeRows,
  narutoSightPhoto,
  isNarutoExperiencePackRow
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
      !isTsurugiExperiencePackRow(row) &&
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
  const experience = pack.filter(isTsurugiExperiencePackRow);
  const onsen = pack.filter(isTsurugiOnsenPackRow);
  const stay = pack.filter(isTsurugiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTsurugiOnsenPackRow(row)
      ? 'onsen'
      : isTsurugiExperiencePackRow(row)
        ? 'experience'
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
      !isYoshinogawaExperiencePackRow(row) &&
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
  const experience = pack.filter(isYoshinogawaExperiencePackRow);
  const onsen = pack.filter(isYoshinogawaOnsenPackRow);
  const stay = pack.filter(isYoshinogawaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isYoshinogawaOnsenPackRow(row)
      ? 'onsen'
      : isYoshinogawaExperiencePackRow(row)
        ? 'experience'
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
      !isMiyoshiExperiencePackRow(row) &&
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
  const experience = pack.filter(isMiyoshiExperiencePackRow);
  const stay = pack.filter(isMiyoshiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMiyoshiOnsenPackRow(row)
      ? 'onsen'
      : isMiyoshiExperiencePackRow(row)
        ? 'experience'
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
      !isHigashimiyoshiExperiencePackRow(row) &&
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
  const experience = pack.filter(isHigashimiyoshiExperiencePackRow);
  const onsen = pack.filter(isHigashimiyoshiOnsenPackRow);
  const stay = pack.filter(isHigashimiyoshiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isHigashimiyoshiOnsenPackRow(row)
      ? 'onsen'
      : isHigashimiyoshiExperiencePackRow(row)
        ? 'experience'
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
      !isMatsushigeExperiencePackRow(row) &&
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
  const experience = pack.filter(isMatsushigeExperiencePackRow);
  const stay = pack.filter(isMatsushigeStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMatsushigeOnsenPackRow(row)
      ? 'onsen'
      : isMatsushigeExperiencePackRow(row)
        ? 'experience'
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
      !isKitajimaExperiencePackRow(row) &&
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
  const experience = pack.filter(isKitajimaExperiencePackRow);
  const onsen = pack.filter(isKitajimaOnsenPackRow);
  const stay = pack.filter(isKitajimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKitajimaOnsenPackRow(row)
      ? 'onsen'
      : isKitajimaExperiencePackRow(row)
        ? 'experience'
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
      !isTokushimaCityExperiencePackRow(row) &&
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
  const experience = pack.filter(isTokushimaCityExperiencePackRow);
  const stay = pack.filter(isTokushimaCityStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTokushimaCityOnsenPackRow(row)
      ? 'onsen'
      : isTokushimaCityExperiencePackRow(row)
        ? 'experience'
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
      !isNarutoExperiencePackRow(row) &&
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
  const experience = pack.filter(isNarutoExperiencePackRow);
  const stay = pack.filter(isNarutoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isNarutoOnsenPackRow(row)
      ? 'onsen'
      : isNarutoExperiencePackRow(row)
        ? 'experience'
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


function itanoListings(): PublicListing[] {
  const town = lookupTown('itano')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'itano', itanoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isItanoOnsenPackRow(row) &&
      !isItanoStayPackRow(row) &&
      !isItanoShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankItanoSeeRows(pack);
  const onsen = pack.filter(isItanoOnsenPackRow);
  const stay = pack.filter(isItanoStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isItanoOnsenPackRow(row)
      ? 'onsen'
      : isItanoStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'itano', kind, itanoSightPhoto(row.name_ja)));
  }
  return out;
}


function kamiitaListings(): PublicListing[] {
  const town = lookupTown('kamiita')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kamiita', kamiitaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isKamiitaOnsenPackRow(row) &&
      !isKamiitaExperiencePackRow(row) &&
      !isKamiitaStayPackRow(row) &&
      !isKamiitaShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKamiitaSeeRows(pack);
  const experience = pack.filter(isKamiitaExperiencePackRow);
  const onsen = pack.filter(isKamiitaOnsenPackRow);
  const stay = pack.filter(isKamiitaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKamiitaOnsenPackRow(row)
      ? 'onsen'
      : isKamiitaExperiencePackRow(row)
        ? 'experience'
        : isKamiitaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'kamiita', kind, kamiitaSightPhoto(row.name_ja)));
  }
  return out;
}


function kamiyamaListings(): PublicListing[] {
  const town = lookupTown('kamiyama')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kamiyama', kamiyamaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KAMIYAMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKamiyamaOnsenPackRow(row) &&
      !isKamiyamaExperiencePackRow(row) &&
      !isKamiyamaStayPackRow(row) &&
      !isKamiyamaShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKamiyamaSeeRows(pack);
  const experience = pack.filter(isKamiyamaExperiencePackRow);
  const onsen = pack.filter(isKamiyamaOnsenPackRow);
  const stay = pack.filter(isKamiyamaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKamiyamaOnsenPackRow(row)
      ? 'onsen'
      : isKamiyamaExperiencePackRow(row)
        ? 'experience'
        : isKamiyamaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'kamiyama', kind, kamiyamaSightPhoto(row.name_ja)));
  }
  return out;
}


function katsuuraListings(): PublicListing[] {
  const town = lookupTown('katsuura')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'katsuura', katsuuraSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KATSUURA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKatsuuraOnsenPackRow(row) &&
      !isKatsuuraExperiencePackRow(row) &&
      !isKatsuuraStayPackRow(row) &&
      !isKatsuuraShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKatsuuraSeeRows(pack);
  const experience = pack.filter(isKatsuuraExperiencePackRow);
  const onsen = pack.filter(isKatsuuraOnsenPackRow);
  const stay = pack.filter(isKatsuuraStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKatsuuraOnsenPackRow(row)
      ? 'onsen'
      : isKatsuuraExperiencePackRow(row)
        ? 'experience'
        : isKatsuuraStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'katsuura', kind, katsuuraSightPhoto(row.name_ja)));
  }
  return out;
}


function kamikatsuListings(): PublicListing[] {
  const town = lookupTown('kamikatsu')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kamikatsu', kamikatsuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KAMIKATSU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKamikatsuOnsenPackRow(row) &&
      !isKamikatsuExperiencePackRow(row) &&
      !isKamikatsuStayPackRow(row) &&
      !isKamikatsuShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKamikatsuSeeRows(pack);
  const experience = pack.filter(isKamikatsuExperiencePackRow);
  const onsen = pack.filter(isKamikatsuOnsenPackRow);
  const stay = pack.filter(isKamikatsuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKamikatsuOnsenPackRow(row)
      ? 'onsen'
      : isKamikatsuExperiencePackRow(row)
        ? 'experience'
        : isKamikatsuStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'kamikatsu', kind, kamikatsuSightPhoto(row.name_ja)));
  }
  return out;
}

function sanagochiListings(): PublicListing[] {
  const town = lookupTown('sanagochi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'sanagochi', sanagochiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SANAGOCHI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSanagochiOnsenPackRow(row) &&
      !isSanagochiStayPackRow(row) &&
      !isSanagochiShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSanagochiSeeRows(pack);
  const onsen = pack.filter(isSanagochiOnsenPackRow);
  const stay = pack.filter(isSanagochiStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isSanagochiOnsenPackRow(row)
      ? 'onsen'
      : isSanagochiStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'sanagochi', kind, sanagochiSightPhoto(row.name_ja)));
  }
  return out;
}


function nakaListings(): PublicListing[] {
  const town = lookupTown('naka')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'naka', nakaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (NAKA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isNakaOnsenPackRow(row) &&
      !isNakaStayPackRow(row) &&
      !isNakaShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNakaSeeRows(pack);
  const onsen = pack.filter(isNakaOnsenPackRow);
  const stay = pack.filter(isNakaStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isNakaOnsenPackRow(row)
      ? 'onsen'
      : isNakaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'naka', kind, nakaSightPhoto(row.name_ja)));
  }
  return out;
}


function minamiListings(): PublicListing[] {
  const town = lookupTown('minami')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'minami', minamiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MINAMI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMinamiOnsenPackRow(row) &&
      !isMinamiExperiencePackRow(row) &&
      !isMinamiStayPackRow(row) &&
      !isMinamiShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMinamiSeeRows(pack);
  const onsen = pack.filter(isMinamiOnsenPackRow);
  const experience = pack.filter(isMinamiExperiencePackRow);
  const stay = pack.filter(isMinamiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMinamiOnsenPackRow(row)
      ? 'onsen'
      : isMinamiExperiencePackRow(row)
        ? 'experience'
        : isMinamiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'minami', kind, minamiSightPhoto(row.name_ja)));
  }
  return out;
}





function kaiyoListings(): PublicListing[] {
  const town = lookupTown('kaiyo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kaiyo', kaiyoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KAIYO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKaiyoOnsenPackRow(row) &&
      !isKaiyoExperiencePackRow(row) &&
      !isKaiyoStayPackRow(row) &&
      !isKaiyoShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKaiyoSeeRows(pack);
  const onsen = pack.filter(isKaiyoOnsenPackRow);
  const experience = pack.filter(isKaiyoExperiencePackRow);
  const stay = pack.filter(isKaiyoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKaiyoOnsenPackRow(row)
      ? 'onsen'
      : isKaiyoExperiencePackRow(row)
        ? 'experience'
        : isKaiyoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kaiyo', kind, kaiyoSightPhoto(row.name_ja)));
  }
  return out;
}


function aizumiListings(): PublicListing[] {
  const town = lookupTown('aizumi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'aizumi', aizumiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (AIZUMI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isAizumiOnsenPackRow(row) &&
      !isAizumiExperiencePackRow(row) &&
      !isAizumiStayPackRow(row) &&
      !isAizumiShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankAizumiSeeRows(pack);
  const onsen = pack.filter(isAizumiOnsenPackRow);
  const experience = pack.filter(isAizumiExperiencePackRow);
  const stay = pack.filter(isAizumiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isAizumiOnsenPackRow(row)
      ? 'onsen'
      : isAizumiExperiencePackRow(row)
        ? 'experience'
        : isAizumiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'aizumi', kind, aizumiSightPhoto(row.name_ja)));
  }
  return out;
}


function mugiListings(): PublicListing[] {
  const town = lookupTown('mugi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'mugi', mugiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MUGI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMugiOnsenPackRow(row) &&
      !isMugiExperiencePackRow(row) &&
      !isMugiStayPackRow(row) &&
      !isMugiShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMugiSeeRows(pack);
  const onsen = pack.filter(isMugiOnsenPackRow);
  const experience = pack.filter(isMugiExperiencePackRow);
  const stay = pack.filter(isMugiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMugiOnsenPackRow(row)
      ? 'onsen'
      : isMugiExperiencePackRow(row)
        ? 'experience'
        : isMugiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'mugi', kind, mugiSightPhoto(row.name_ja)));
  }
  return out;
}


function komatsushimaListings(): PublicListing[] {
  const town = lookupTown('komatsushima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'komatsushima', komatsushimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KOMATSUSHIMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKomatsushimaOnsenPackRow(row) &&
      !isKomatsushimaExperiencePackRow(row) &&
      !isKomatsushimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKomatsushimaSeeRows(pack);
  const onsen = pack.filter(isKomatsushimaOnsenPackRow);
  const experience = pack.filter(isKomatsushimaExperiencePackRow);
  const stay = pack.filter(isKomatsushimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKomatsushimaOnsenPackRow(row)
      ? 'onsen'
      : isKomatsushimaExperiencePackRow(row)
        ? 'experience'
        : isKomatsushimaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'komatsushima', kind, komatsushimaSightPhoto(row.name_ja)));
  }
  return out;
}


function ananListings(): PublicListing[] {
  const town = lookupTown('anan')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'anan', ananSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (ANAN_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isAnanOnsenPackRow(row) &&
      !isAnanExperiencePackRow(row) &&
      !isAnanStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankAnanSeeRows(pack);
  const onsen = pack.filter(isAnanOnsenPackRow);
  const experience = pack.filter(isAnanExperiencePackRow);
  const stay = pack.filter(isAnanStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isAnanOnsenPackRow(row)
      ? 'onsen'
      : isAnanExperiencePackRow(row)
        ? 'experience'
        : isAnanStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'anan', kind, ananSightPhoto(row.name_ja)));
  }
  return out;
}


function takamatsuListings(): PublicListing[] {
  const town = lookupTown('takamatsu')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'takamatsu', takamatsuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TAKAMATSU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTakamatsuOnsenPackRow(row) &&
      !isTakamatsuExperiencePackRow(row) &&
      !isTakamatsuStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTakamatsuSeeRows(pack);
  const onsen = pack.filter(isTakamatsuOnsenPackRow);
  const experience = pack.filter(isTakamatsuExperiencePackRow);
  const stay = pack.filter(isTakamatsuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTakamatsuOnsenPackRow(row)
      ? 'onsen'
      : isTakamatsuExperiencePackRow(row)
        ? 'experience'
        : isTakamatsuStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'takamatsu', kind, takamatsuSightPhoto(row.name_ja)));
  }
  return out;
}


function kotohiraListings(): PublicListing[] {
  const town = lookupTown('kotohira')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kotohira', kotohiraSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KOTOHIRA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKotohiraOnsenPackRow(row) &&
      !isKotohiraExperiencePackRow(row) &&
      !isKotohiraStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKotohiraSeeRows(pack);
  const onsen = pack.filter(isKotohiraOnsenPackRow);
  const experience = pack.filter(isKotohiraExperiencePackRow);
  const stay = pack.filter(isKotohiraStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKotohiraOnsenPackRow(row)
      ? 'onsen'
      : isKotohiraExperiencePackRow(row)
        ? 'experience'
        : isKotohiraStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kotohira', kind, kotohiraSightPhoto(row.name_ja)));
  }
  return out;
}

function marugameListings(): PublicListing[] {
  const town = lookupTown('marugame')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'marugame', marugameSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MARUGAME_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMarugameOnsenPackRow(row) &&
      !isMarugameExperiencePackRow(row) &&
      !isMarugameStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMarugameSeeRows(pack);
  const onsen = pack.filter(isMarugameOnsenPackRow);
  const experience = pack.filter(isMarugameExperiencePackRow);
  const stay = pack.filter(isMarugameStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMarugameOnsenPackRow(row)
      ? 'onsen'
      : isMarugameExperiencePackRow(row)
        ? 'experience'
        : isMarugameStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'marugame', kind, marugameSightPhoto(row.name_ja)));
  }
  return out;
}




function kanonjiListings(): PublicListing[] {
  const town = lookupTown('kanonji')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kanonji', kanonjiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KANONJI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKanonjiOnsenPackRow(row) &&
      !isKanonjiExperiencePackRow(row) &&
      !isKanonjiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKanonjiSeeRows(pack);
  const onsen = pack.filter(isKanonjiOnsenPackRow);
  const experience = pack.filter(isKanonjiExperiencePackRow);
  const stay = pack.filter(isKanonjiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKanonjiOnsenPackRow(row)
      ? 'onsen'
      : isKanonjiExperiencePackRow(row)
        ? 'experience'
        : isKanonjiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kanonji', kind, kanonjiSightPhoto(row.name_ja)));
  }
  return out;
}



function sakaideListings(): PublicListing[] {
  const town = lookupTown('sakaide')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'sakaide', sakaideSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SAKAIDE_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSakaideOnsenPackRow(row) &&
      !isSakaideExperiencePackRow(row) &&
      !isSakaideStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSakaideSeeRows(pack);
  const onsen = pack.filter(isSakaideOnsenPackRow);
  const experience = pack.filter(isSakaideExperiencePackRow);
  const stay = pack.filter(isSakaideStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isSakaideOnsenPackRow(row)
      ? 'onsen'
      : isSakaideExperiencePackRow(row)
        ? 'experience'
        : isSakaideStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'sakaide', kind, sakaideSightPhoto(row.name_ja)));
  }
  return out;
}

function naoshimaListings(): PublicListing[] {
  const town = lookupTown('naoshima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'naoshima', naoshimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (NAOSHIMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isNaoshimaOnsenPackRow(row) &&
      !isNaoshimaExperiencePackRow(row) &&
      !isNaoshimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNaoshimaSeeRows(pack);
  const onsen = pack.filter(isNaoshimaOnsenPackRow);
  const experience = pack.filter(isNaoshimaExperiencePackRow);
  const stay = pack.filter(isNaoshimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isNaoshimaOnsenPackRow(row)
      ? 'onsen'
      : isNaoshimaExperiencePackRow(row)
        ? 'experience'
        : isNaoshimaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'naoshima', kind, naoshimaSightPhoto(row.name_ja)));
  }
  return out;
}

function shodoshimaListings(): PublicListing[] {
  const town = lookupTown('shodoshima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'shodoshima', shodoshimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SHODOSHIMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isShodoshimaOnsenPackRow(row) &&
      !isShodoshimaExperiencePackRow(row) &&
      !isShodoshimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankShodoshimaSeeRows(pack);
  const onsen = pack.filter(isShodoshimaOnsenPackRow);
  const experience = pack.filter(isShodoshimaExperiencePackRow);
  const stay = pack.filter(isShodoshimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isShodoshimaOnsenPackRow(row)
      ? 'onsen'
      : isShodoshimaExperiencePackRow(row)
        ? 'experience'
        : isShodoshimaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'shodoshima', kind, shodoshimaSightPhoto(row.name_ja)));
  }
  return out;
}

function zentsujiListings(): PublicListing[] {
  const town = lookupTown('zentsuji')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'zentsuji', zentsujiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (ZENTSUJI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isZentsujiOnsenPackRow(row) &&
      !isZentsujiExperiencePackRow(row) &&
      !isZentsujiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankZentsujiSeeRows(pack);
  const onsen = pack.filter(isZentsujiOnsenPackRow);
  const experience = pack.filter(isZentsujiExperiencePackRow);
  const stay = pack.filter(isZentsujiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isZentsujiOnsenPackRow(row)
      ? 'onsen'
      : isZentsujiExperiencePackRow(row)
        ? 'experience'
        : isZentsujiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'zentsuji', kind, zentsujiSightPhoto(row.name_ja)));
  }
  return out;
}




function mitoyoListings(): PublicListing[] {
  const town = lookupTown('mitoyo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'mitoyo', mitoyoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MITOYO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMitoyoOnsenPackRow(row) &&
      !isMitoyoExperiencePackRow(row) &&
      !isMitoyoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMitoyoSeeRows(pack);
  const onsen = pack.filter(isMitoyoOnsenPackRow);
  const experience = pack.filter(isMitoyoExperiencePackRow);
  const stay = pack.filter(isMitoyoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMitoyoOnsenPackRow(row)
      ? 'onsen'
      : isMitoyoExperiencePackRow(row)
        ? 'experience'
        : isMitoyoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'mitoyo', kind, mitoyoSightPhoto(row.name_ja)));
  }
  return out;
}




function higashikagawaListings(): PublicListing[] {
  const town = lookupTown('higashikagawa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'higashikagawa', higashikagawaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (HIGASHIKAGAWA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isHigashikagawaOnsenPackRow(row) &&
      !isHigashikagawaExperiencePackRow(row) &&
      !isHigashikagawaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankHigashikagawaSeeRows(pack);
  const onsen = pack.filter(isHigashikagawaOnsenPackRow);
  const experience = pack.filter(isHigashikagawaExperiencePackRow);
  const stay = pack.filter(isHigashikagawaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isHigashikagawaOnsenPackRow(row)
      ? 'onsen'
      : isHigashikagawaExperiencePackRow(row)
        ? 'experience'
        : isHigashikagawaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'higashikagawa', kind, higashikagawaSightPhoto(row.name_ja)));
  }
  return out;
}

function sanukiListings(): PublicListing[] {
  const town = lookupTown('sanuki')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'sanuki', sanukiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SANUKI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSanukiOnsenPackRow(row) &&
      !isSanukiExperiencePackRow(row) &&
      !isSanukiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSanukiSeeRows(pack);
  const onsen = pack.filter(isSanukiOnsenPackRow);
  const experience = pack.filter(isSanukiExperiencePackRow);
  const stay = pack.filter(isSanukiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isSanukiOnsenPackRow(row)
      ? 'onsen'
      : isSanukiExperiencePackRow(row)
        ? 'experience'
        : isSanukiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'sanuki', kind, sanukiSightPhoto(row.name_ja)));
  }
  return out;
}

function tonoshoListings(): PublicListing[] {
  const town = lookupTown('tonosho')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tonosho', tonoshoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TONOSHO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTonoshoOnsenPackRow(row) &&
      !isTonoshoExperiencePackRow(row) &&
      !isTonoshoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTonoshoSeeRows(pack);
  const onsen = pack.filter(isTonoshoOnsenPackRow);
  const experience = pack.filter(isTonoshoExperiencePackRow);
  const stay = pack.filter(isTonoshoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTonoshoOnsenPackRow(row)
      ? 'onsen'
      : isTonoshoExperiencePackRow(row)
        ? 'experience'
        : isTonoshoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'tonosho', kind, tonoshoSightPhoto(row.name_ja)));
  }
  return out;
}

function utazuListings(): PublicListing[] {
  const town = lookupTown('utazu')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'utazu', utazuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (UTAZU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isUtazuOnsenPackRow(row) &&
      !isUtazuExperiencePackRow(row) &&
      !isUtazuStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankUtazuSeeRows(pack);
  const onsen = pack.filter(isUtazuOnsenPackRow);
  const experience = pack.filter(isUtazuExperiencePackRow);
  const stay = pack.filter(isUtazuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isUtazuOnsenPackRow(row)
      ? 'onsen'
      : isUtazuExperiencePackRow(row)
        ? 'experience'
        : isUtazuStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'utazu', kind, utazuSightPhoto(row.name_ja)));
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
  ishii: ishiiListings(),
  itano: itanoListings(),
  kamiita: kamiitaListings(),
  kamiyama: kamiyamaListings(),
  katsuura: katsuuraListings(),
  kamikatsu: kamikatsuListings(),
  sanagochi: sanagochiListings(),
  naka: nakaListings(),
  mugi: mugiListings(),
  minami: minamiListings(),
  aizumi: aizumiListings(),
  kaiyo: kaiyoListings(),
  komatsushima: komatsushimaListings(),
  anan: ananListings(),
  takamatsu: takamatsuListings(),
  kotohira: kotohiraListings(),
  marugame: marugameListings(),
  kanonji: kanonjiListings(),
  sakaide: sakaideListings(),
  naoshima: naoshimaListings(),
  shodoshima: shodoshimaListings(),
  zentsuji: zentsujiListings(),
  mitoyo: mitoyoListings(),
  utazu: utazuListings(),
  tonosho: tonoshoListings(),
  sanuki: sanukiListings(),
  higashikagawa: higashikagawaListings()
};

export function publicListings(slug: ReadySlug = 'mima'): PublicListing[] {
  return CACHE[slug];
}

export function allPublicListings(): PublicListing[] {
  return [...CACHE.mima, ...CACHE.tsurugi, ...CACHE.yoshinogawa, ...CACHE.miyoshi, ...CACHE.tokushima, ...CACHE.awa, ...CACHE.higashimiyoshi, ...CACHE.kitajima, ...CACHE.naruto, ...CACHE.matsushige, ...CACHE.ishii, ...CACHE.itano, ...CACHE.kamiita, ...CACHE.kamiyama, ...CACHE.katsuura, ...CACHE.kamikatsu, ...CACHE.sanagochi, ...CACHE.naka, ...CACHE.mugi, ...CACHE.minami, ...CACHE.aizumi, ...CACHE.kaiyo, ...CACHE.komatsushima, ...CACHE.anan, ...CACHE.takamatsu, ...CACHE.kotohira, ...CACHE.marugame, ...CACHE.kanonji, ...CACHE.sakaide, ...CACHE.naoshima, ...CACHE.shodoshima, ...CACHE.zentsuji, ...CACHE.mitoyo, ...CACHE.utazu, ...CACHE.tonosho, ...CACHE.sanuki, ...CACHE.higashikagawa];
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
  const pref = prefSlugForReady(slug);
  return `${pref}/${slug}/p/${id}`;
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
