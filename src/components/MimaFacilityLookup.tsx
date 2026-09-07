'use client';

import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import {
  licenseKind,
  type FacilityCategory,
  type FacilityGapBoard,
  type FacilityRow,
  type MimaOfficialMap
} from '@/data/facility-schema';
import {BASE_PATH, isCommonsPhoto} from '@/data/mima';
import {
  TOP_CHIPS,
  TOP_CHIP_COUNTS,
  TRAVEL_ACCESSED,
  TRAVEL_CARD_FOLD,
  isTravelFilter,
  type FilterId,
  type TravelRow
} from '@/data/mima-travel';
import type {LookupTown} from '@/data/lookup-town';
import {townHelpers} from '@/data/lookup-helpers';
import {TSURUGI_TRAVEL_ACCESSED} from '@/data/tsurugi-travel';
import {YOSHINOGAWA_TRAVEL_ACCESSED} from '@/data/yoshinogawa-travel';
import {MIYOSHI_TRAVEL_ACCESSED} from '@/data/miyoshi-travel';
import {TOKUSHIMA_CITY_TRAVEL_ACCESSED} from '@/data/tokushima-city-travel';
import {AWA_TRAVEL_ACCESSED} from '@/data/awa-travel';
import {HIGASHIMIYOSHI_TRAVEL_ACCESSED} from '@/data/higashimiyoshi-travel';
import {KITAJIMA_TRAVEL_ACCESSED} from '@/data/kitajima-travel';
import {MATSUSHIGE_TRAVEL_ACCESSED} from '@/data/matsushige-travel';
import {ISHII_TRAVEL_ACCESSED} from '@/data/ishii-travel';
import {ITANO_TRAVEL_ACCESSED} from '@/data/itano-travel';
import {KAMIITA_TRAVEL_ACCESSED} from '@/data/kamiita-travel';
import {KAMIYAMA_TRAVEL_ACCESSED} from '@/data/kamiyama-travel';
import {KATSUURA_TRAVEL_ACCESSED} from '@/data/katsuura-travel';
import {KAMIKATSU_TRAVEL_ACCESSED} from '@/data/kamikatsu-travel';
import {SANAGOCHI_TRAVEL_ACCESSED} from '@/data/sanagochi-travel';
import {NAKA_TRAVEL_ACCESSED} from '@/data/naka-travel';
import {MINAMI_TRAVEL_ACCESSED} from '@/data/minami-travel';
import {KAIYO_TRAVEL_ACCESSED} from '@/data/kaiyo-travel';
import {AIZUMI_TRAVEL_ACCESSED} from '@/data/aizumi-travel';
import {KOMATSUSHIMA_TRAVEL_ACCESSED} from '@/data/komatsushima-travel';
import {ANAN_TRAVEL_ACCESSED} from '@/data/anan-travel';
import {TAKAMATSU_TRAVEL_ACCESSED} from '@/data/takamatsu-travel';
import {KOTOHIRA_TRAVEL_ACCESSED} from '@/data/kotohira-travel';
import {MARUGAME_TRAVEL_ACCESSED} from '@/data/marugame-travel';
import {KANONJI_TRAVEL_ACCESSED} from '@/data/kanonji-travel';
import {SAKAIDE_TRAVEL_ACCESSED} from '@/data/sakaide-travel'
import {NAOSHIMA_TRAVEL_ACCESSED} from '@/data/naoshima-travel';
import {SHODOSHIMA_TRAVEL_ACCESSED} from '@/data/shodoshima-travel';
import {ZENTSUJI_TRAVEL_ACCESSED} from '@/data/zentsuji-travel';
import {MITOYO_TRAVEL_ACCESSED} from '@/data/mitoyo-travel';
import {UTAZU_TRAVEL_ACCESSED} from '@/data/utazu-travel';
import {TONOSHO_TRAVEL_ACCESSED} from '@/data/tonosho-travel';
import {SANUKI_TRAVEL_ACCESSED} from '@/data/sanuki-travel';
import {HIGASHIKAGAWA_TRAVEL_ACCESSED} from '@/data/higashikagawa-travel';
import {MIKI_TRAVEL_ACCESSED} from '@/data/miki-travel';
import {AYAGAWA_TRAVEL_ACCESSED} from '@/data/ayagawa-travel';
import {TADOTSU_TRAVEL_ACCESSED} from '@/data/tadotsu-travel';
import {MANNO_TRAVEL_ACCESSED} from '@/data/manno-travel';
import {KOCHI_TRAVEL_ACCESSED} from '@/data/kochi-travel';
import {NANKOKU_TRAVEL_ACCESSED} from '@/data/nankoku-travel';
import {KONAN_TRAVEL_ACCESSED} from '@/data/konan-travel';
import {KAMI_TRAVEL_ACCESSED} from '@/data/kami-travel';
import {INO_TRAVEL_ACCESSED} from '@/data/ino-travel';
import {AKI_TRAVEL_ACCESSED} from '@/data/aki-travel';
import {MUROTO_TRAVEL_ACCESSED} from '@/data/muroto-travel';
import {TOSA_TRAVEL_ACCESSED} from '@/data/tosa-travel';
import {SUSAKI_TRAVEL_ACCESSED} from '@/data/susaki-travel';
import {SHIMANTO_TRAVEL_ACCESSED} from '@/data/shimanto-travel';
import {TOSASHIMIZU_TRAVEL_ACCESSED} from '@/data/tosashimizu-travel';
import {SUKUMO_TRAVEL_ACCESSED} from '@/data/sukumo-travel';
import {KUROSHIO_TRAVEL_ACCESSED} from '@/data/kuroshio-travel';
import {TOYO_TRAVEL_ACCESSED} from '@/data/toyo-travel';
import {NAHARI_TRAVEL_ACCESSED} from '@/data/nahari-travel';
import {YASUDA_TRAVEL_ACCESSED} from '@/data/yasuda-travel';
import {GEISEI_TRAVEL_ACCESSED} from '@/data/geisei-travel';
import {KITAGAWA_TRAVEL_ACCESSED} from '@/data/kitagawa-travel';
import {UMAJI_TRAVEL_ACCESSED} from '@/data/umaji-travel';
import {MOTOYAMA_TRAVEL_ACCESSED} from '@/data/motoyama-travel';
import {OTOYO_TRAVEL_ACCESSED} from '@/data/otoyo-travel';
import {TOSACHO_TRAVEL_ACCESSED} from '@/data/tosacho-travel';
import {OKAWA_TRAVEL_ACCESSED} from '@/data/okawa-travel';
import {NIYODOGAWA_TRAVEL_ACCESSED} from '@/data/niyodogawa-travel';
import {NAKATOSA_TRAVEL_ACCESSED} from '@/data/nakatosa-travel';
import {OCHI_TRAVEL_ACCESSED} from '@/data/ochi-travel';
import {YUSUHARA_TRAVEL_ACCESSED} from '@/data/yusuhara-travel';
import {HIDAKA_TRAVEL_ACCESSED} from '@/data/hidaka-travel';
import {TSUNO_TRAVEL_ACCESSED} from '@/data/tsuno-travel';
import {MUGI_TRAVEL_ACCESSED} from '@/data/mugi-travel';
import {NARUTO_TRAVEL_ACCESSED} from '@/data/naruto-travel';
import {
  rankByOurTraffic,
  recordFacilitySearch,
  recordFacilityView,
  searchesById,
  viewsById,
  type CountMap
} from '@/lib/traffic-log';

type Props = {
  locale: string;
  town: LookupTown;
  gaps: FacilityGapBoard;
  map: MimaOfficialMap;
  rows: readonly FacilityRow[];
  filter: FilterId;
  query: string;
  engaged: boolean;
  openId: string | null;
};

type CardRow = FacilityRow | TravelRow;

function isBlank(value: string | null | undefined): boolean {
  return value === null || value === undefined || value.trim() === '';
}

function isPackRow(row: CardRow): row is FacilityRow {
  return !isTravelFilter(row.category);
}


function destinationUrl(row: CardRow): string {
  if (isPackRow(row) && row.official_url && !isBlank(row.official_url)) {
    return row.official_url;
  }
  return row.source_url;
}

function displayDedupeKey(row: FacilityRow): string {
  if (row.lat !== null && row.lon !== null) {
    return `${row.name_ja}|${row.lat}|${row.lon}`;
  }
  return `${row.name_ja}|${row.source_url}`;
}

function dedupeDisplayRows(rows: readonly FacilityRow[]): FacilityRow[] {
  const seen = new Set<string>();
  const out: FacilityRow[] = [];
  for (const row of rows) {
    const key = displayDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(row);
  }
  return out;
}

function dedupeMapPoints(
  points: MimaOfficialMap['points']
): MimaOfficialMap['points'] {
  const seen = new Set<string>();
  const out: MimaOfficialMap['points'] = [];
  for (const point of points) {
    const key = `${point.name_ja}|${point.x}|${point.y}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(point);
  }
  return out;
}

function chipHref(next: FilterId, q: string, locale: string, slug: string, id?: string, prefectureSlug = 'tokushima'): string {
  const path = `${BASE_PATH}/${locale}/${prefectureSlug}/${slug}/`;
  if (next === 'stay' && !q && !id) return path;
  const parts: string[] = [];
  if (next !== 'stay') parts.push(`c=${encodeURIComponent(next)}`);
  if (q) parts.push(`q=${encodeURIComponent(q)}`);
  if (id) parts.push(`id=${encodeURIComponent(id)}`);
  const qs = parts.length ? `?${parts.join('&')}` : '';
  return `${path}${qs}#mima-place-results`;
}

function ChipLabel({id}: {id: FilterId}) {
  const t = useTranslations('lookup');
  switch (id) {
    case 'all':
      return t('chips.all');
    case 'shelter':
      return t('chips.shelter');
    case 'emergency_evacuation_site':
      return t('chips.emergency_evacuation_site');
    case 'aed':
      return t('chips.aed');
    case 'hospital':
      return t('chips.hospital');
    case 'tourism':
      return t('chips.tourism');
    case 'cultural_property':
      return t('chips.cultural_property');
    case 'childcare':
      return t('chips.childcare');
    case 'care':
      return t('chips.care');
    case 'wifi':
      return t('chips.wifi');
    case 'public_facility':
      return t('chips.public_facility');
    case 'gtfs_stop':
      return t('chips.gtfs_stop');
    case 'dining':
      return t('chips.dining');
    case 'stay':
      return t('chips.stay');
    case 'sights':
      return t('chips.sights');
    case 'commerce':
      return t('chips.commerce');
    case 'shopping':
      return t('chips.shopping');
    case 'infra':
      return t('chips.infra');
    case 'onsen':
      return t('chips.onsen');
    case 'experience':
      return t('chips.experience');
  }
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.25" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M15.2 15.2L21 21" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function FacilityCard({
  row,
  locale,
  rank,
  onView,
  town
}: {
  row: CardRow;
  locale: string;
  rank: number | null;
  onView: (id: string) => void;
  town: LookupTown;
}) {
  const t = useTranslations('lookup');
  const h = townHelpers(town.slug);
  const photo = h.sightPhoto(row.name_ja);
  const hook = h.sourcedHook(row, locale);
  const dest = destinationUrl(row);
  return (
    <article className="facility-card" data-id={row.id} data-category={row.category}>
      <a
        href={dest}
        className="facility-card-link"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onView(row.id)}
      >
        <div className={photo ? 'card-photo' : 'card-photo is-well'}>
          {photo ? (
            <img
              src={photo.src}
              alt={locale === 'ja' ? photo.altJa : photo.altEn}
              width={640}
              height={400}
            />
          ) : (
            <span className="card-well">
              <span className="card-well-name">{t('photoPending')}</span>
            </span>
          )}
          {rank !== null ? <span className="card-rank">#{rank}</span> : null}
        </div>
        <div className="card-body">
          <h3 className="card-name">{row.name_ja}</h3>
          {hook ? <p className="card-hook">{hook}</p> : null}
          <p className="card-score">{t('unrated')}</p>
        </div>
      </a>
    </article>
  );
}

function DetailSheet({
  row,
  locale,
  onClose,
  town
}: {
  row: CardRow;
  locale: string;
  onClose: () => void;
  town: LookupTown;
}) {
  const t = useTranslations('lookup');
  const h = townHelpers(town.slug);
  const pack = isPackRow(row) ? row : null;
  const kind = pack ? licenseKind(pack.license) : null;
  const photo = h.sightPhoto(row.name_ja);
  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div
        className="detail-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mima-sheet-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="sheet-close" onClick={onClose}>
          {t('sheetClose')}
        </button>
        <h2 id="mima-sheet-title">{row.name_ja}</h2>
        <p className="card-score">{t('unrated')}</p>
        {photo ? (
          <p className="attr-row">
            <span className="attr-label">{t('citeLabel')}</span>
            <span>
              {isCommonsPhoto(photo) ? (
                <>
                  <a href={photo.commons}>Wikimedia Commons</a>
                  {' / '}
                  <a href={photo.licenseUrl}>{photo.license}</a>
                  {' / '}
                  <a href={photo.authorUrl}>{photo.author}</a>
                </>
              ) : (
                <>
                  <a href={photo.authorUrl}>{photo.author}</a>
                  {' / '}
                  <a href={photo.licenseUrl}>{photo.license}</a>
                </>
              )}
            </span>
          </p>
        ) : null}
        {!isBlank(row.address) ? (
          <p className="attr-row">
            <span className="attr-label">{t('address')}</span>
            <span>{row.address}</span>
          </p>
        ) : null}
        {!isBlank(row.phone) ? (
          <p className="attr-row">
            <span className="attr-label">{t('phone')}</span>
            <span>{row.phone}</span>
          </p>
        ) : null}
        {pack && !isBlank(pack.hours) ? (
          <p className="attr-row">
            <span className="attr-label">{t('hours')}</span>
            <span>{pack.hours}</span>
          </p>
        ) : null}
        <footer className="place-card-meta">
          {row.accessed}
          {pack && kind ? (
            <>
              {' · '}
              <span className={kind === 'cc_by_open_data' ? 'license-cc' : 'license-city'}>
                {kind === 'cc_by_open_data' ? t('licenseOpendata') : locale === 'ja' ? town.licenseSiteJa : town.licenseSiteEn}
              </span>
            </>
          ) : null}
        </footer>
      </div>
    </div>
  );
}

function chipClass(active: boolean): string {
  return ['chip', active ? 'is-active' : ''].filter(Boolean).join(' ');
}

export function MimaFacilityLookup({
  locale,
  town,
  gaps,
  map,
  rows,
  filter: initialFilter,
  query: initialQuery,
  engaged,
  openId: initialOpenId
}: Props) {
  const t = useTranslations('lookup');
  const h = townHelpers(town.slug);
  const [filter, setFilter] = useState(initialFilter);
  const [query, setQuery] = useState(initialQuery);
  const [openId, setOpenId] = useState(initialOpenId);
  const [searchOpen, setSearchOpen] = useState(initialQuery.trim() !== '');
  const [showAll, setShowAll] = useState(false);
  const [traffic, setTraffic] = useState<{views: CountMap; searches: CountMap}>({
    views: {},
    searches: {}
  });

  function applyFromLocation() {
    const params = new URLSearchParams(window.location.search);
    const c = params.get('c') ?? undefined;
    const q = (params.get('q') ?? '').trim();
    const id = params.get('id');
    setFilter(h.resolveFilter(c, q));
    setQuery(q);
    setOpenId(id && id !== '' ? id : null);
    if (q) setSearchOpen(true);
  }

  useEffect(() => {
    applyFromLocation();
    window.addEventListener('popstate', applyFromLocation);
    return () => window.removeEventListener('popstate', applyFromLocation);
  }, []);

  useEffect(() => {
    setTraffic({views: viewsById(), searches: searchesById()});
  }, []);

  const displayRows = dedupeDisplayRows(rows);
  const displayPoints = dedupeMapPoints(map.points);
  const rankedSee = h.rankSeeRows(displayRows);
  const onsenRows = displayRows.filter(h.isOnsenPackRow);
  const experienceRows = displayRows.filter(h.isExperiencePackRow);
  const stayPackRows = displayRows.filter(h.isStayPackRow);

  const legendCats: FacilityCategory[] = [];
  const seen = new Set<FacilityCategory>();
  for (const point of displayPoints) {
    if (seen.has(point.category)) continue;
    seen.add(point.category);
    legendCats.push(point.category);
  }

  const missingGeo = gaps.total - gaps.geo;
  const q = query.trim().toLowerCase();
  const searching = q !== '';
  const nameHitExists =
    searching && displayRows.some((row) => row.name_ja.toLowerCase().includes(q));
  const travelLayer = isTravelFilter(filter);

  const travelHits = searching
    ? town.travelAll.filter((row) => row.name_ja.toLowerCase().includes(q))
    : filter === 'dining'
      ? [...town.travelDining]
      : filter === 'stay'
        ? [...town.travelStay]
        : filter === 'shopping'
          ? [...town.travelShopping]
          : filter === 'commerce'
            ? [...town.travelCommerce]
            : [];

  const includePack = searching || !travelLayer || filter === 'stay';
  const filteredPack = includePack
    ? displayRows.filter((row) => {
        if (!searching && !h.packRowMatchesFilter(row.category, filter, row.name_ja)) {
          return false;
        }
        if (q === '') return true;
        if (row.name_ja.toLowerCase().includes(q)) return true;
        if (
          row.reading &&
          row.reading.toLowerCase().includes(q) &&
          !nameHitExists
        ) {
          return true;
        }
        return false;
      })
    : [];

  const orderedPack =
    !searching && filter === 'sights' ? h.rankSeeRows(filteredPack) : filteredPack;

  const editorialCards: CardRow[] = searching
    ? [...travelHits, ...orderedPack]
    : filter === 'stay'
      ? [...stayPackRows, ...travelHits]
      : travelLayer
        ? travelHits
        : orderedPack;

  // Chip lists: our traffic, then our name searches, then editorial index.
  // Search results stay name-filter order. Counts all 0 → editorial proxy.
  const cards = searching
    ? editorialCards
    : rankByOurTraffic(editorialCards, traffic.views, traffic.searches);

  // Photo-only visual grid + chips for all ReadySlug towns (incl. mima). No ungated pack dump on 観光.
  const photoOnly = true;
  const gridCards =
    searching || !photoOnly
      ? cards
      : cards.filter((row) => h.sightPhoto(row.name_ja) !== null);

  const foldCap = searching || showAll ? gridCards.length : TRAVEL_CARD_FOLD;
  const foldCards = gridCards.slice(0, foldCap);
  const restCount = gridCards.length - foldCards.length;

  const sheetRow =
    openId === null
      ? undefined
      : cards.find((row) => row.id === openId) ??
        displayRows.find((row) => row.id === openId) ??
        town.travelAll.find((row) => row.id === openId);

  function chipCount(id: (typeof TOP_CHIPS)[number]): number {
    const withPhoto = (rows: readonly CardRow[]) =>
      photoOnly ? rows.filter((row) => h.sightPhoto(row.name_ja) !== null).length : rows.length;
    if (id === 'sights') return withPhoto(rankedSee);
    if (id === 'onsen') return withPhoto(onsenRows);
    if (id === 'experience') return withPhoto(experienceRows);
    if (id === 'stay') return withPhoto([...stayPackRows, ...town.travelStay]);
    if (id === 'dining') return withPhoto(town.travelDining);
    if (id === 'shopping') return withPhoto(town.travelShopping);
    if (id === 'commerce') return withPhoto(town.travelCommerce);
    return TOP_CHIP_COUNTS[id];
  }

  function go(href: string) {
    window.history.pushState({}, '', href);
    applyFromLocation();
  }

  function onCardView(id: string) {
    setTraffic((prev) => ({...prev, views: recordFacilityView(id)}));
  }

  function closeSheet() {
    const href = chipHref(filter === 'all' ? 'stay' : filter, query, locale, town.slug, undefined, town.prefectureSlug);
    window.history.pushState({}, '', href);
    setOpenId(null);
  }

  return (
    <section className="lookup" aria-labelledby="mima-lookup-heading" lang={locale}>
      <h2 id="mima-lookup-heading" className="sr-only">
        {t('heading')}
      </h2>
      <div className="hero-fold">
        <figure className="hero-photo">
          <img
            src={town.heroPhoto.src}
            width={1920}
            height={1163}
            alt={locale === 'ja' ? town.heroPhoto.altJa : town.heroPhoto.altEn}
          />
          <h1 className="hero-title">{locale === 'ja' ? town.nameJa : town.nameEn}</h1>
        </figure>
      </div>

      <div className="lookup-sticky">
        <div className="lookup-toolbar" role="group" aria-label={t('filters')}>
          {TOP_CHIPS.map((cat) => {
            const n = chipCount(cat);
            return (
              <a
                key={cat}
                className={chipClass(filter === cat && !searching)}
                href={chipHref(cat, '', locale, town.slug, undefined, town.prefectureSlug)}
                data-category={cat}
                data-chip={cat}
                onClick={(event) => {
                  event.preventDefault();
                  setShowAll(false);
                  setQuery('');
                  go(chipHref(cat, '', locale, town.slug, undefined, town.prefectureSlug));
                }}
              >
                <ChipLabel id={cat} />
                <span className="count-chip"> {n}</span>
              </a>
            );
          })}
        </div>
        <button
          type="button"
          className={searchOpen ? 'search-icon is-open' : 'search-icon'}
          aria-label={t('searchToggle')}
          aria-expanded={searchOpen}
          onClick={() => setSearchOpen((open) => !open)}
        >
          <SearchIcon />
        </button>
      </div>

      {searchOpen ? (
        <form
          className="lookup-search-row"
          method="get"
          action={`${BASE_PATH}/${locale}/${town.prefectureSlug}/${town.slug}/`}
          onSubmit={(event) => {
            const fd = new FormData(event.currentTarget);
            const submitted = String(fd.get('q') ?? '').trim();
            if (submitted) {
              setTraffic((prev) => ({
                ...prev,
                searches: recordFacilitySearch(submitted, [...town.travelAll, ...displayRows])
              }));
            }
          }}
        >
          {filter !== 'stay' && filter !== 'all' ? (
            <input type="hidden" name="c" value={filter} />
          ) : null}
          <label htmlFor="mima-place-search" className="sr-only">
            {t('searchLabel')}
          </label>
          <div className="search-field">
            <input
              id="mima-place-search"
              key={query}
              className="lookup-search"
              type="search"
              name="q"
              defaultValue={query}
              placeholder={t('searchPlaceholder')}
              spellCheck={false}
              autoComplete="off"
            />
            <button type="submit" className="search-go">
              {t('searchGo')}
            </button>
          </div>
        </form>
      ) : null}

      <div id="mima-place-results" className="place-grid-wrap">
        {engaged && foldCards.length === 0 ? (
          <p className="note">
            {filter === 'shopping'
              ? t('emptyShopping')
              : filter === 'commerce'
                ? t('emptyCommerce')
                : t('empty')}
          </p>
        ) : null}
        <div className="place-grid">
          {foldCards.map((row, index) => (
            <FacilityCard
              key={row.id}
              row={row}
              locale={locale}
              rank={searching ? null : index + 1}
              onView={onCardView}
              town={town}
            />
          ))}
        </div>
        {restCount > 0 ? (
          <button type="button" className="more-btn" onClick={() => setShowAll(true)}>
            {t('morePlaces', {n: restCount})}
          </button>
        ) : null}
      </div>

      {sheetRow ? <DetailSheet row={sheetRow} locale={locale} onClose={closeSheet} town={town} /> : null}

      <footer className="lookup-sources">
        <p className="tiny-cite">
          {town.slug === 'mima' ? (
            locale === 'ja' ? (
              <>
                飲食・宿泊
                は美馬観光ビューロー（{TRAVEL_ACCESSED}）。
                買物・商業はうだつの町並み周辺図（2026-08-27）。
                温泉・体験
                は市の観光マップ。点数は持ちません。
              </>
            ) : (
              <>
                Dining and{' '}
                lodging from the Mima Tourism Bureau (
                {TRAVEL_ACCESSED}). Shopping and commerce
                from the Udatsu townscape map (2026-08-27).{' '}
                Onsen and{' '}
                experience from the city tourism map. No
                public scores.
              </>
            )
          ) : town.slug === 'yoshinogawa' ? (
            locale === 'ja' ? (
              <>
                宿泊は市の宿泊施設案内（
                {YOSHINOGAWA_TRAVEL_ACCESSED} の公式ページ）。
                飲食は食べログ公開店ページ（{YOSHINOGAWA_TRAVEL_ACCESSED}）。単一出典は要確認。
                体験・買物・商業の公式一覧は未掲載のため0件。
                温泉は市の観光案内で名前を確認できたもの。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Lodging from the city lodging list
                (official page of {YOSHINOGAWA_TRAVEL_ACCESSED}). Dining from Tabelog shop pages (
                {YOSHINOGAWA_TRAVEL_ACCESSED}); a single source is flagged 要確認. Experience, shopping,
                and commerce stay at 0 — no official list. Onsen from the city tourism pages.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )
          ) : town.slug === 'miyoshi' ? (
            locale === 'ja' ? (
              <>
                宿泊は観光協会の宿泊案内と公式客室写真（
                {MIYOSHI_TRAVEL_ACCESSED}）。
                飲食は市＋観光協会の公開店ページ（{MIYOSHI_TRAVEL_ACCESSED}）。
                体験・買物・商業の公式一覧は未掲載のため0件。
                温泉は公式の露天写真があるもの。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Lodging from the tourism association
                lodging list and official guest-room photos ({MIYOSHI_TRAVEL_ACCESSED}).{' '}
                Dining from city / association shop pages (
                {MIYOSHI_TRAVEL_ACCESSED}). Experience, shopping, and commerce stay at 0 — no official
                list. Onsen where an official outdoor-bath
                photo exists. Cards show only listings with a sourced photo. No public scores.
              </>
            )

          ) : town.slug === 'awa' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ阿波市の公開店ページ（
                {AWA_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Awa City shop pages (
                {AWA_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

          
          ) : town.slug === 'higashimiyoshi' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ東みよし町の公開店ページ（
                {HIGASHIMIYOSHI_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Higashimiyoshi Town shop pages (
                {HIGASHIMIYOSHI_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )



          ) : town.slug === 'naruto' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（鳴門の渦潮）。
                飲食・宿泊・温泉・体験・買物・商業は未掲載のため0件（accessed {NARUTO_TRAVEL_ACCESSED}）。
                カードは出典写真があるものだけ。点数は持ちません。
                市公式：鳴門市 · 渦の道。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Naruto whirlpools).
                Dining, lodging, onsen, experience, shopping, and commerce stay at 0 — unpublished (accessed {NARUTO_TRAVEL_ACCESSED}).
                Cards show only listings with a sourced photo. No public scores.
                City sources: Naruto City · Uzunomichi.
              </>
            )



          ) : town.slug === 'ishii' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ石井町の公開店ページ（
                {ISHII_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Ishii Town shop pages (
                {ISHII_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

          ) : town.slug === 'itano' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ板野町の公開店ページ（
                {ITANO_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件（あせび温泉やすらぎの郷は浴場写真なし）。
                買物は道の駅いたの（Commons写真あり）。体験・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Itano Town shop pages (
                {ITANO_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo (including Asebi Onsen).
                Shopping: Michi-no-eki Itano (Commons photo). Experience and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

          
          ) : town.slug === 'kamiita' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ上板町の公開店ページ（
                {KAMIITA_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Kamiita Town shop pages (
                {KAMIITA_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

          ) : town.slug === 'kamiyama' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ神山町の公開店ページ（
                {KAMIYAMA_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Kamiyama Town shop pages (
                {KAMIYAMA_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

          ) : town.slug === 'katsuura' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ勝浦町の公開店ページ（
                {KATSUURA_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Katsuura Town shop pages (
                {KATSUURA_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )


          ) : town.slug === 'kamikatsu' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ上勝町の公開店ページ（
                {KAMIKATSU_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・商業の公式一覧は未掲載のため0件。
                買物は出典写真があるパック店舗のみ。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Kamikatsu Town shop pages (
                {KAMIKATSU_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience and commerce stay at 0 — no official list.
                Shopping shows pack shops with a sourced photo only.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )


          ) : town.slug === 'sanagochi' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ佐那河内村の公開店ページ（
                {SANAGOCHI_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Sanagochi Village shop pages (
                {SANAGOCHI_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

          
          ) : town.slug === 'naka' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ那賀町の公開店ページ（
                {NAKA_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・商業の公式一覧は未掲載のため0件。
                買物は道の駅など出典写真があるパック行のみ。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Naka Town shop pages (
                {NAKA_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience and commerce stay at 0 — no official list.
                Shopping shows pack roadside stations with a sourced photo only.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

          
          ) : town.slug === 'mugi' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ牟岐町の公開店ページ（
                {MUGI_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業も出典写真が無いため0件。
              </>
            ) : (
              <>
                Dining from Tabelog Mugi Town shop pages (
                {MUGI_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 without sourced photos.
              </>
            )

          
          
          ) : town.slug === 'anan' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ阿南市の公開店ページ（
                {ANAN_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業も出典写真が無いため0件。
              </>
            ) : (
              <>
                Dining from Tabelog Anan City shop pages (
                {ANAN_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 without sourced photos.
              </>
            )

          ) : town.slug === 'takamatsu' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（栗林公園・玉藻公園／高松城・屋島・屋島寺・女木島）。
                宿泊は楽天トラベル／ホテル公式の客室写真（{TAKAMATSU_TRAVEL_ACCESSED}）。
                飲食は食べログ高松市の公開店ページ（{TAKAMATSU_TRAVEL_ACCESSED}）。
                体験は屋島ケーブルカー・四国村・イサム・ノグチ庭園美術館。
                温泉・買物・商業は出典写真が無いため0件。香川県最初のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Ritsurin, Tamamo/Takamatsu Castle, Yashima, Yashima-ji, Megijima).
                Lodging from Rakuten Travel / hotel-official room photos ({TAKAMATSU_TRAVEL_ACCESSED}).
                Dining from Tabelog Takamatsu City shop pages ({TAKAMATSU_TRAVEL_ACCESSED}).
                Experience: Yashima cable car, Shikoku Mura, Isamu Noguchi Garden Museum.
                Onsen, shopping, and commerce stay at 0 without sourced photos. First LIVE Kagawa hub.
              </>
            )

          ) : town.slug === 'kotohira' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（金刀比羅宮・旭社・表参道・鞘橋・高灯篭）。
                宿泊は温泉旅館公式の客室写真（{KOTOHIRA_TRAVEL_ACCESSED}）。
                飲食は食べログ琴平町の公開店ページ（{KOTOHIRA_TRAVEL_ACCESSED}）。
                温泉は琴参閣・敷島館の大浴場（公式風呂写真・客室キーと分離）。体験は旧金毘羅大芝居。
                買物・商業は出典写真が無いため0件。香川県2つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Kotohira-gū, Asahi-sha, Omotesandō, Saya Bridge, Takatōrō).
                Lodging from onsen-ryokan official room photos ({KOTOHIRA_TRAVEL_ACCESSED}).
                Dining from Tabelog Kotohira Town shop pages ({KOTOHIRA_TRAVEL_ACCESSED}).
                Onsen: Kotosankaku and Shikishimakan bath stills (distinct from stay room keys). Experience: Kanamaruza.
                Shopping and commerce stay at 0 without sourced photos. Second LIVE Kagawa hub.
              </>
            )

          ) : town.slug === 'marugame' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（丸亀城・天守・石垣・中津万象園・飯野山・丸亀港）。
                宿泊は楽天トラベルの客室写真（{MARUGAME_TRAVEL_ACCESSED}）。
                飲食は食べログ丸亀市の公開店ページ（{MARUGAME_TRAVEL_ACCESSED}）。
                温泉はアパホテル・スーパーホテルの大浴場（公式風呂写真・客室キーと分離）。体験はうちわの港ミュージアム。
                買物・商業は出典写真が無いため0件。香川県3つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Marugame Castle keep/walls, Banshō-en, Mount Iino, Marugame Port).
                Lodging from Rakuten Travel room photos ({MARUGAME_TRAVEL_ACCESSED}).
                Dining from Tabelog Marugame City shop pages ({MARUGAME_TRAVEL_ACCESSED}).
                Onsen: APA and Super Hotel bath stills (distinct from stay room keys). Experience: Uchiwa Museum.
                Shopping and commerce stay at 0 without sourced photos. Third LIVE Kagawa hub.
              </>
            )


          ) : town.slug === 'kanonji' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（銭形砂絵・琴弾公園・有明浜・神恵院・観音寺・琴弾八幡宮・高屋神社・豊稔池堰堤・伊吹島）。
                宿泊は楽天トラベルの客室写真（{KANONJI_TRAVEL_ACCESSED}）。
                飲食は食べログ観音寺市の公開店ページ（{KANONJI_TRAVEL_ACCESSED}）。
                温泉はルートイン・亀の井ホテルの大浴場（公式風呂写真・客室キーと分離）。体験は道の駅ことひき。
                買物・商業は出典写真が無いため0件。香川県4つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Zenigata Sunae, Kotohiki Park, Ariakehama, Jinne-in, Kannon-ji, Kotohiki Hachiman-gū, Takaya Shrine, Hōnen-ike Dam, Ibuki Island).
                Lodging from Rakuten Travel room photos ({KANONJI_TRAVEL_ACCESSED}).
                Dining from Tabelog Kanonji City shop pages ({KANONJI_TRAVEL_ACCESSED}).
                Onsen: Route Inn and Kamenoi Hotel bath stills (distinct from stay room keys). Experience: Michinoeki Kotohiki.
                Shopping and commerce stay at 0 without sourced photos. Fourth LIVE Kagawa hub.
              </>
            )


          ) : town.slug === 'sakaide' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（瀬戸大橋・記念公園・タワー・東山魁夷せとうち美術館・与島・鍋島灯台・飯野山・白峯寺・沙弥島）。
                宿泊は楽天トラベルの客室写真（{SAKAIDE_TRAVEL_ACCESSED}）。
                飲食は食べログ坂出市の公開店ページ（{SAKAIDE_TRAVEL_ACCESSED}）。
                温泉はルートイン・グランドホテルの大浴場（公式風呂写真・客室キーと分離）。体験は道の駅瀬戸大橋記念公園。
                買物・商業は出典写真が無いため0件。香川県5つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Great Seto Bridge, Memorial Park, Tower, Higashiyama Museum, Yoshima, Nabeshima Lighthouse, Mount Iino, Shiromine-ji, Shamijima).
                Lodging from Rakuten Travel room photos ({SAKAIDE_TRAVEL_ACCESSED}).
                Dining from Tabelog Sakaide City shop pages ({SAKAIDE_TRAVEL_ACCESSED}).
                Onsen: Route Inn and Grand Hotel bath stills (distinct from stay room keys). Experience: Michinoeki Seto-Ohashi Kinen-koen.
                Shopping and commerce stay at 0 without sourced photos. Fifth LIVE Kagawa hub.
              </>
            )

) : town.slug === 'naoshima' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（南瓜・宮浦港・地中美術館・ベネッセ・李禹煥美術館・パヴィリオン・護王神社・琴弾地・ANDO MUSEUM）。
                宿泊は楽天トラベルの客室写真（{NAOSHIMA_TRAVEL_ACCESSED}）。
                飲食は食べログ直島町の公開店ページ（{NAOSHIMA_TRAVEL_ACCESSED}）。
                温泉はつつじ荘の貸切風呂（公式風呂写真・客室キーと分離）。体験は直島銭湯。
                買物・商業は出典写真が無いため0件。香川県6つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Yellow Pumpkin, Miyanoura Port, Chichu, Benesse House Museum, Lee Ufan Museum, Pavilion, Go'o Shrine, Kotakiji Beach, ANDO MUSEUM).
                Lodging from Rakuten Travel room photos ({NAOSHIMA_TRAVEL_ACCESSED}).
                Dining from Tabelog Naoshima Town shop pages ({NAOSHIMA_TRAVEL_ACCESSED}).
                Onsen: Tsutsuji-so private bath still (distinct from stay room keys). Experience: Naoshima Bath.
                Shopping and commerce stay at 0 without sourced photos. Sixth LIVE Kagawa hub.
              </>
            )


) : town.slug === 'shodoshima' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（オリーブ公園・寒霞渓・二十四の瞳映画村・マルキン醤油記念館・草壁港・福田港）。土庄町スポットは含めない。
                宿泊は楽天トラベルの客室写真（{SHODOSHIMA_TRAVEL_ACCESSED}）。
                飲食は食べログ小豆島町の公開店ページ（{SHODOSHIMA_TRAVEL_ACCESSED}）。
                温泉は国民宿舎・ベイリゾートの大浴場（公式風呂写真・客室キーと分離）。体験は寒霞渓ロープウェイ。
                買物・商業は出典写真が無いため0件。香川県7つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Olive Park, Kankakei, Twenty-Four Eyes Movie Village, Marukin Soy Sauce Museum, Kusakabe Port, Fukuda Port). Tonosho-only spots excluded.
                Lodging from Rakuten Travel room photos ({SHODOSHIMA_TRAVEL_ACCESSED}).
                Dining from Tabelog Shodoshima Town shop pages ({SHODOSHIMA_TRAVEL_ACCESSED}).
                Onsen: Kokuminshukusha and Bay Resort bath stills (distinct from stay room keys). Experience: Kankakei Ropeway.
                Shopping and commerce stay at 0 without sourced photos. Seventh LIVE Kagawa hub.
              </>
            )


) : town.slug === 'zentsuji' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（総本山善通寺・曼荼羅寺・出釈迦寺・甲山寺・善通寺駅・市美術館）。
                宿泊は楽天トラベルの客室写真（{ZENTSUJI_TRAVEL_ACCESSED}）。
                飲食は食べログ善通寺市の公開店ページ（{ZENTSUJI_TRAVEL_ACCESSED}）。
                温泉は遍路民宿鶴吉の露天風呂（公式風呂写真・客室キーと分離）。体験は出典なしのため0件。
                買物は大通り商店街（Commons）。商業は出典写真が無いため0件。香川県8つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Zentsū-ji, Mandara-ji, Shusshaka-ji, Kōyama-ji, Zentsūji Station, City Art Museum).
                Lodging from Rakuten Travel room photos ({ZENTSUJI_TRAVEL_ACCESSED}).
                Dining from Tabelog Zentsuji shop pages ({ZENTSUJI_TRAVEL_ACCESSED}).
                Onsen: Tsurukichi open-air bath still (distinct from stay room keys). Experience stays at 0 without sourced photos.
                Shopping: Odori arcade (Commons). Commerce stays at 0. Eighth LIVE Kagawa hub.
              </>
            )

) : town.slug === 'mitoyo' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（父母ヶ浜・紫雲出山・本山寺・弥谷寺・大興寺・津嶋神社・詫間駅・不動の滝）。
                宿泊は楽天トラベルの客室写真（{MITOYO_TRAVEL_ACCESSED}）。
                飲食は食べログ三豊市の公開店ページ（{MITOYO_TRAVEL_ACCESSED}）。
                温泉はル・ポール粟島大浴場とふれあいパークみの露天風呂（公式風呂写真・客室キーと分離）。
                体験は道の駅たからだのさと（Commons）。買物・商業は出典写真が無いため0件。香川県9つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Chichibugahama, Mount Shiude, Motoyama-ji, Iyadani-ji, Daikō-ji, Tsushima Shrine, Takuma Station, Fudō Falls).
                Lodging from Rakuten Travel room photos ({MITOYO_TRAVEL_ACCESSED}).
                Dining from Tabelog Mitoyo shop pages ({MITOYO_TRAVEL_ACCESSED}).
                Onsen: Le Port Awashima large bath and Fureai Park Mino open-air bath (distinct from stay room keys).
                Experience: Michinoeki Takara-da-no-sato (Commons). Shopping and commerce stay at 0. Ninth LIVE Kagawa hub.
              </>
            )

) : town.slug === 'utazu' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（ゴールドタワー・宇多津臨海公園・四国水族館・復元塩田・宇多津駅・青ノ山）。
                宿泊は楽天トラベルの客室写真（{UTAZU_TRAVEL_ACCESSED}）。
                飲食は食べログ宇多津町の公開店ページ（{UTAZU_TRAVEL_ACCESSED}）。
                温泉は宇多津グランドホテル大浴場（公式風呂写真・客室キーと分離）。
                体験は道の駅恋人の聖地うたづ臨海公園（Commons）。買物・商業は出典写真が無いため0件。香川県10つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Gold Tower, Utazu Seaside Park, Shikoku Aquarium, restored salt pans, Utazu Station, Mount Aono).
                Lodging from Rakuten Travel room photos ({UTAZU_TRAVEL_ACCESSED}).
                Dining from Tabelog Utazu shop pages ({UTAZU_TRAVEL_ACCESSED}).
                Onsen: Utazu Grand Hotel large bath (distinct from stay room keys).
                Experience: Michinoeki Lover's Sanctuary Utazu Seaside Park (Commons). Shopping and commerce stay at 0. Tenth LIVE Kagawa hub.
              </>
            )


) : town.slug === 'tonosho' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（エンジェルロード・銚子渓・土庄港・迷路のまち・小豆島大観音・大坂城残石記念公園）。
                宿泊は楽天トラベルの客室写真（{TONOSHO_TRAVEL_ACCESSED}）。
                飲食は食べログ土庄町の公開店ページ（{TONOSHO_TRAVEL_ACCESSED}）。
                温泉は小豆島国際ホテル大浴場・ホテルグリーンプラザ小豆島大浴場（公式風呂写真・客室キーと分離）。
                体験は銚子渓自然動物園お猿の国（Commons）。買物・商業は出典写真が無いため0件。香川県11つ目のLIVEハブ（小豆島島内ツイン）。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Angel Road, Choshikei, Tonosho Port, Meiro-no-machi, Shodoshima Daikannon, Osaka Castle Stone Memorial Park).
                Lodging from Rakuten Travel room photos ({TONOSHO_TRAVEL_ACCESSED}).
                Dining from Tabelog Tonosho shop pages ({TONOSHO_TRAVEL_ACCESSED}).
                Onsen: Shodoshima International Hotel and Hotel Green Plaza Shodoshima large baths (distinct from stay room keys).
                Experience: Choshikei Monkey Park (Commons). Shopping and commerce stay at 0. Eleventh LIVE Kagawa hub (Shodoshima island twin).
              </>
            )


) : town.slug === 'sanuki' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（志度寺・長尾寺・津田の松原・大串半島・志度駅・石清水神社）。
                宿泊は楽天トラベルの客室写真（{SANUKI_TRAVEL_ACCESSED}）。
                飲食は食べログさぬき市の公開店ページ（{SANUKI_TRAVEL_ACCESSED}）。
                温泉はじゃこ丸パーク津田大浴場（公式風呂写真・客室キーと分離）。
                体験は道の駅ながお（Commons）。買物・商業は出典写真が無いため0件。香川県12つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Shido-ji, Nagao-ji, Tsuda-no-Matsubara, Ogushi Peninsula, Shido Station, Iwashimizu Shrine).
                Lodging from Rakuten Travel room photos ({SANUKI_TRAVEL_ACCESSED}).
                Dining from Tabelog Sanuki shop pages ({SANUKI_TRAVEL_ACCESSED}).
                Onsen: Jakomaru Park Tsuda large bath (distinct from stay room keys).
                Experience: Michinoeki Nagao (Commons). Shopping and commerce stay at 0. Twelfth LIVE Kagawa hub.
              </>
            )

) : town.slug === 'komatsushima' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（大手海岸・立江寺・恩山寺・金長神社・ステーションパーク）。
                飲食・宿泊・温泉・体験・買物・商業は未掲載のため0件（accessed {KOMATSUSHIMA_TRAVEL_ACCESSED}）。
                カードは出典写真があるものだけ。点数は持ちません。
                市公式：小松島市 · 小松島ナビ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Ōte Beach, Tatsue-ji, Onzan-ji, Kincho Shrine, Station Park).
                Dining, lodging, onsen, experience, shopping, and commerce stay at 0 — unpublished (accessed {KOMATSUSHIMA_TRAVEL_ACCESSED}).
                Cards show only listings with a sourced photo. No public scores.
                City sources: Komatsushima City · Komatsushima Navi.
              </>
            )

) : town.slug === 'aizumi' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ藍住町の公開店ページ（
                {AIZUMI_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業も出典写真が無いため0件。
              </>
            ) : (
              <>
                Dining from Tabelog Aizumi Town shop pages (
                {AIZUMI_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 without sourced photos.
              </>
            )

          ) : town.slug === 'minami' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ美波町の公開店ページ（
                {MINAMI_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・商業の公式一覧は未掲載のため0件。
                買物は道の駅など出典写真があるパック行のみ。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Minami Town shop pages (
                {MINAMI_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience and commerce stay at 0 — no official list.
                Shopping shows pack roadside stations with a sourced photo only.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )


          ) : town.slug === 'kaiyo' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ海陽町の公開店ページ（
                {KAIYO_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・商業の公式一覧は未掲載のため0件。
                買物は道の駅など出典写真があるパック行のみ。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Kaiyo Town shop pages (
                {KAIYO_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience and commerce stay at 0 — no official list.
                Shopping shows pack roadside stations with a sourced photo only.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

) : town.slug === 'matsushige' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ松茂町の公開店ページ（
                {MATSUSHIGE_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Matsushige Town shop pages (
                {MATSUSHIGE_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

          ) : town.slug === 'kitajima' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ北島町の公開店ページ（
                {KITAJIMA_TRAVEL_ACCESSED}）。
                宿泊・温泉は客室・浴場の出典写真が無いため0件。
                体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Kitajima Town shop pages (
                {KITAJIMA_TRAVEL_ACCESSED}). Lodging and onsen stay at 0 — no sourced room or bath photo.
                Experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )

          ) : town.slug === 'tokushima' ? (
            locale === 'ja' ? (
              <>
                飲食は食べログ徳島市の公開店ページ（
                {TOKUSHIMA_CITY_TRAVEL_ACCESSED}）。
                宿泊は楽天トラベル／ホテル公式の客室・外観写真がある施設（
                {TOKUSHIMA_CITY_TRAVEL_ACCESSED}）。
                温泉・体験・買物・商業の公式一覧は未掲載のため0件。
                カードは出典写真があるものだけ。点数は持ちません。
              </>
            ) : (
              <>
                Dining from Tabelog Tokushima City shop pages (
                {TOKUSHIMA_CITY_TRAVEL_ACCESSED}). Lodging from
                Rakuten Travel / hotel-official room or exterior photos ({TOKUSHIMA_CITY_TRAVEL_ACCESSED}).
                Onsen, experience, shopping, and commerce stay at 0 — no official list.
                Cards show only listings with a sourced photo. No public scores.
              </>
            )
          ) : locale === 'ja' ? (
            <>
              宿泊は町の宿泊施設案内（パック掲載＋
              {TSURUGI_TRAVEL_ACCESSED} の公式ページ）。
              飲食は道の駅レストラン・食べログ公開店ページ・商工会会員ページ（{TSURUGI_TRAVEL_ACCESSED}）。
              体験・買物・商業の公式一覧は未掲載のため0件。
              温泉は町の観光案内で名前を確認できたもの。
              カードは出典写真があるものだけ。点数は持ちません。
            </>
          ) : town.slug === 'higashikagawa' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（引田城跡・引田のまち並み・引田港・白鳥神社・釈王寺・與田寺）。
                宿泊は楽天トラベルの客室写真（{HIGASHIKAGAWA_TRAVEL_ACCESSED}）。
                飲食は食べログ東かがわ市の公開店ページ（{HIGASHIKAGAWA_TRAVEL_ACCESSED}）。
                温泉は瀬戸内リゾート　ベッセルおおち大浴場（公式風呂写真・客室キーと分離）。
                体験は讃州井筒屋敷（Commons）。買物・商業は出典写真が無いため0件。香川県13つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Hiketa Castle, Hiketa townscape, Port of Hiketa, Shirotori Shrine, Shakuo-ji, Yoda-ji).
                Lodging from Rakuten Travel room photos ({HIGASHIKAGAWA_TRAVEL_ACCESSED}).
                Dining from Tabelog Higashikagawa shop pages ({HIGASHIKAGAWA_TRAVEL_ACCESSED}).
                Onsen: Setouchi Resort Vessel Oochi large bath (official bath still; distinct from room keys).
                Experience: Sanshu Izutsu Yashiki (Commons). Shopping/commerce: 0 without sourced photos. Thirteenth LIVE Kagawa hub.
              </>
            )

          ) : town.slug === 'miki' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（浄土寺・虹の滝・公渕森林公園・白山神社・男井間池・池戸八幡神社・白山）。
                宿泊は楽天トラベルの客室写真（{MIKI_TRAVEL_ACCESSED}）。
                飲食は食べログ三木町の公開店ページ（{MIKI_TRAVEL_ACCESSED}）。
                温泉は0件（ＨＯＴＥＬ　ＡＺはユニットバスのみ）。
                体験はトレスタ白山アイスアリーナ（Commons）。買物・商業は出典写真が無いため0件。香川県14つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Jodo-ji, Rainbow Falls, Kinbuchi Forest Park, Shirayama Shrine, Oimaike, Ikedo Hachiman, Mount Shirayama).
                Lodging from Rakuten Travel room photos ({MIKI_TRAVEL_ACCESSED}).
                Dining from Tabelog Miki shop pages ({MIKI_TRAVEL_ACCESSED}).
                Onsen: 0 (HOTEL AZ unit bath only).
                Experience: Tresta Shirayama Ice Arena (Commons). Shopping/commerce: 0 without sourced photos. Fourteenth LIVE Kagawa hub.
              </>
            )

          ) : town.slug === 'ayagawa' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（滝宮天満宮・瀧宮神社・高鉢山・堤山・菩提院・金毘羅灯籠）。
                宿泊は楽天トラベルの客室写真（{AYAGAWA_TRAVEL_ACCESSED}）。
                飲食は食べログ綾川町の公開店ページ（{AYAGAWA_TRAVEL_ACCESSED}）。
                温泉は0件。体験は道の駅滝宮（Commons）。買物・商業は出典写真が無いため0件。香川県15つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Takinomiya Tenmangu, Takinomiya Shrine, Mount Takahachi, Mount Tsutsuma, Bodai-in, Konpira lantern).
                Lodging from Rakuten Travel room photos ({AYAGAWA_TRAVEL_ACCESSED}).
                Dining from Tabelog Ayagawa shop pages ({AYAGAWA_TRAVEL_ACCESSED}).
                Onsen: 0. Experience: Michinoeki Takinomiya (Commons). Shopping/commerce: 0. Fifteenth LIVE Kagawa hub.
              </>
            )


          ) : town.slug === 'tadotsu' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（海岸寺・多度津駅・多度津港）。
                宿泊は楽天トラベルの客室写真（{TADOTSU_TRAVEL_ACCESSED}）。
                飲食は食べログ多度津町の公開店ページ（{TADOTSU_TRAVEL_ACCESSED}）。
                温泉は0件。体験は桃陵公園（Commons）。買物・商業は出典写真が無いため0件。香川県16つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Kaiganji, Tadotsu Station, Tadotsu Port).
                Lodging from Rakuten Travel room photos ({TADOTSU_TRAVEL_ACCESSED}).
                Dining from Tabelog Tadotsu shop pages ({TADOTSU_TRAVEL_ACCESSED}).
                Onsen: 0. Experience: Toryo Park (Commons). Shopping/commerce: 0. Sixteenth LIVE Kagawa hub.
              </>
            )


          ) : town.slug === 'manno' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（国営讃岐まんのう公園・満濃池・天文台・ひまわりの里・かりんの丘・小橋の滝）。
                宿泊は楽天トラベルの客室写真（{MANNO_TRAVEL_ACCESSED}）。
                飲食は食べログまんのう町の公開店ページ（{MANNO_TRAVEL_ACCESSED}）。
                温泉は湯山荘　阿讃琴南 大浴場（客室キーと分離）。体験は道の駅ことなみ（Commons）。買物・商業は0件。香川県17つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Sanuki Manno Park, Mannoike, observatory, sunflower field, Karin-no-oka, Kobashi Falls).
                Lodging from Rakuten Travel room photos ({MANNO_TRAVEL_ACCESSED}).
                Dining from Tabelog Manno shop pages ({MANNO_TRAVEL_ACCESSED}).
                Onsen: Yuyamaso Asan bath (distinct from stay key). Experience: Michinoeki Kotonami (Commons). Shopping/commerce: 0. Seventeenth LIVE Kagawa hub.
              </>
            )


          ) : town.slug === 'kochi' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（高知城・桂浜・龍馬像・日曜市・わんぱーく・五台山・牧野植物園・竹林寺）。
                宿泊は楽天トラベルの客室写真（{KOCHI_TRAVEL_ACCESSED}）。
                飲食は食べログ高知市の公開店ページ（{KOCHI_TRAVEL_ACCESSED}）。
                温泉は0件（ビジネスホテル浴室のみ）。体験はひろめ市場（Commons）。買物・商業は0件。高知県1つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Kochi Castle, Katsurahama, Ryoma statue, Sunday Market, Wanpark, Godaisan, Makino, Chikurin-ji).
                Lodging from Rakuten Travel room photos ({KOCHI_TRAVEL_ACCESSED}).
                Dining from Tabelog Kochi City shop pages ({KOCHI_TRAVEL_ACCESSED}).
                Onsen: 0 (business-hotel baths only). Experience: Hirome Market (Commons). Shopping/commerce: 0. First LIVE Kochi hub.
              </>
            )


          ) : town.slug === 'nankoku' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（土佐国分寺・岡豊城・歴史民俗資料館・高知龍馬空港・前浜掩体群・後免駅）。
                宿泊は楽天トラベルの客室写真（{NANKOKU_TRAVEL_ACCESSED}）。
                飲食は食べログ南国市の公開店ページ（{NANKOKU_TRAVEL_ACCESSED}）。
                温泉は0件（ビジネスホテル浴室のみ）。体験は道の駅南国 風良里（Commons）。買物・商業は0件。高知県2つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Tosa Kokubun-ji, Okō Castle, Museum of History, Kochi Ryoma Airport, Maehama bunkers, Gomen Station).
                Lodging from Rakuten Travel room photos ({NANKOKU_TRAVEL_ACCESSED}).
                Dining from Tabelog Nankoku shop pages ({NANKOKU_TRAVEL_ACCESSED}).
                Onsen: 0 (business-hotel baths only). Experience: Michinoeki Nankoku Furari (Commons). Shopping/commerce: 0. Second LIVE Kochi hub.
              </>
            )


          

          
          
          
          ) : town.slug === 'muroto' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（室戸岬・室戸岬灯台・むろと廃校水族館・金剛頂寺・最御崎寺・御厨人窟）。
                宿泊は楽天トラベルの客室写真（{MUROTO_TRAVEL_ACCESSED}）。
                飲食は食べログ室戸市の公開店ページ（{MUROTO_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・大浴場出典キー無し）。体験は室戸世界ジオパークセンター（Commons）。買物・商業は0件。高知県7つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Cape Muroto, lighthouse, schoolhouse aquarium, Kongochō-ji, Hotsumisaki-ji, Mikurodo).
                Lodging from Rakuten Travel room photos ({MUROTO_TRAVEL_ACCESSED}).
                Dining from Tabelog Muroto shop pages ({MUROTO_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay only; no attributable bath keys). Experience: Muroto Geopark Center (Commons). Shopping/commerce: 0. Seventh LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'kitagawa' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（モネの庭・中岡慎太郎館・中岡慎太郎生家・北川村役場・魚梁瀬ダム）。
                宿泊は楽天トラベル北川村温泉ゆずの宿の客室和洋写真（{KITAGAWA_TRAVEL_ACCESSED}）。
                飲食は食べログ北川村の公開店ページ（{KITAGAWA_TRAVEL_ACCESSED}）。
                温泉は同施設大浴場1件（客室写真の宿とは別キー・stay≠onsen）。体験は0件。買物・商業は0件。高知県18つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Monet's Garden, Nakaoka Shintaro Museum, Birthplace, Kitagawa Village Hall, Yanase Dam).
                Lodging: Kitagawa Onsen Yuzu-no-Yado Rakuten Japanese-Western room photo ({KITAGAWA_TRAVEL_ACCESSED}).
                Dining from Tabelog Kitagawa shop pages ({KITAGAWA_TRAVEL_ACCESSED}).
                Onsen: 1 (same facility large bath; distinct mediaInfo key; stay≠onsen). Experience: 0. Shopping/commerce: 0. Eighteenth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'umaji' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（馬路村インクライン・馬路村役場・魚梁瀬丸山公園・西川渓谷・魚梁瀬森林鉄道）。
                宿泊は楽天トラベル馬路温泉の本館和室写真（{UMAJI_TRAVEL_ACCESSED}）。
                飲食は食べログ馬路村の公開店ページ（{UMAJI_TRAVEL_ACCESSED}）。
                温泉は同施設大浴場1件（客室写真の宿とは別キー・stay≠onsen）。体験は0件。買物・商業は0件。高知県19つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Umaji Incline, Umaji Village Hall, Yanase Maruyama Park, Nishikawa Valley, Yanase Forest Railway).
                Lodging: Umaji Onsen Rakuten main-building Japanese room photo ({UMAJI_TRAVEL_ACCESSED}).
                Dining from Tabelog Umaji shop pages ({UMAJI_TRAVEL_ACCESSED}).
                Onsen: 1 (same facility large bath; distinct media key; stay≠onsen). Experience: 0. Shopping/commerce: 0. Nineteenth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'motoyama' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（旧本山大橋・本山町役場・赤滝・白髪山・土佐あかうしの放牧）。
                宿泊は楽天トラベル一軒宿あせみの和洋室写真（{MOTOYAMA_TRAVEL_ACCESSED}）。
                飲食は食べログ本山町の公開店ページ（{MOTOYAMA_TRAVEL_ACCESSED}）。
                温泉は0件（客室シャワーのみ・stay≠onsen）。体験は0件。買物・商業は0件。高知県20つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Kyu-Motoyama Bridge, Motoyama Town Hall, Aka Falls, Mount Shiraga, Tosa Akaushi grazing).
                Lodging: Asemi Rakuten Japanese-Western room photo ({MOTOYAMA_TRAVEL_ACCESSED}).
                Dining from Tabelog Motoyama shop pages ({MOTOYAMA_TRAVEL_ACCESSED}).
                Onsen: 0 (private shower stay; stay≠onsen). Experience: 0. Shopping/commerce: 0. Twentieth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'otoyo' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（豊楽寺・龍王の滝・大豊町役場・道の駅大杉・八畝の乳イチョウ）。
                宿泊は楽天トラベル大豊の森の和室写真（{OTOYO_TRAVEL_ACCESSED}）。
                飲食は食べログ大豊町の公開店ページ（{OTOYO_TRAVEL_ACCESSED}）。
                温泉は0件（客室バスのみ・stay≠onsen）。体験は0件。買物・商業は0件。高知県21つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Buraku-ji, Ryuo Falls, Otoyo Town Hall, Roadside Station Osugi, Yase milk ginkgo).
                Lodging: Otoyonomori Rakuten Japanese-room photo ({OTOYO_TRAVEL_ACCESSED}).
                Dining from Tabelog Otoyo shop pages ({OTOYO_TRAVEL_ACCESSED}).
                Onsen: 0 (private bath stay; stay≠onsen). Experience: 0. Shopping/commerce: 0. Twenty-first LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'tosacho' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（道の駅土佐さめうら・土佐町役場・上吉野川橋・田井・土居のパノラマ）。
                宿泊は楽天トラベルさめうら荘レイクサイドホテルの和室写真（{TOSACHO_TRAVEL_ACCESSED}）。
                飲食は食べログ土佐町の公開店ページ（{TOSACHO_TRAVEL_ACCESSED}）。
                温泉は0件（客室バスのみ・stay≠onsen）。体験は0件。買物・商業は0件。高知県22つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Roadside Station Tosa Sameura, Tosa Town Hall, Kami-Yoshinogawa Bridge, Tai, Doi panorama).
                Lodging: Sameura Lakeside Hotel Rakuten Japanese-room photo ({TOSACHO_TRAVEL_ACCESSED}).
                Dining from Tabelog Tosa Town shop pages ({TOSACHO_TRAVEL_ACCESSED}).
                Onsen: 0 (in-room bath stay; stay≠onsen). Experience: 0. Shopping/commerce: 0. Twenty-second LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'okawa' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（小金滝・大川村役場・村のえき・翁の滝・自然王国白滝の里）。
                宿泊は楽天トラベル自然王国白滝の里の教室タイプ客室写真（{OKAWA_TRAVEL_ACCESSED}）。
                飲食は食べログ大川村の公開店ページ（{OKAWA_TRAVEL_ACCESSED}）。
                温泉は0件（stay≠onsen）。体験は0件。買物・商業は0件。高知県23つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Kogane Falls, Okawa Village Hall, Mura-no-eki, Okina Falls, Shirataki-no-Sato).
                Lodging: Shirataki-no-Sato Rakuten classroom-type guest-room photo ({OKAWA_TRAVEL_ACCESSED}).
                Dining from Tabelog Okawa Village shop pages ({OKAWA_TRAVEL_ACCESSED}).
                Onsen: 0 (stay≠onsen). Experience: 0. Shopping/commerce: 0. Twenty-third LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'ochi' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ表示（横倉山、越知町役場、中仁淀橋、大樽の滝、横倉山自然の森博物館）。
                宿泊はSnow Peakおち仁淀川キャンプフィールドの住箱客室写真（{OCHI_TRAVEL_ACCESSED}）。
                飲食は食べログ越知町の公開店ページ（{OCHI_TRAVEL_ACCESSED}）。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Mt. Yokokura, Ochi Town Hall, Naka-Niyodo Bridge, Otaru Falls, Yokokurayama Natural Forest Museum).
                Lodging: Snow Peak Ochi Niyodogawa Camp Field JYUBAKO room photo ({OCHI_TRAVEL_ACCESSED}).
                Dining from Tabelog Ochi shop pages ({OCHI_TRAVEL_ACCESSED}).
              </>
            )
          ) : town.slug === 'yusuhara' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ表示（天狗高原、梼原町役場、まちの駅「ゆすはら」、韮ヶ峠、いちやがもり）。
                宿泊は楽天トラベル雲の上のホテル別館・マルシェユスハラのツインルーム客室写真（{YUSUHARA_TRAVEL_ACCESSED}）。
                飲食は食べログ梼原町の公開店ページ（{YUSUHARA_TRAVEL_ACCESSED}）。
                温泉は0件（stay≠onsen・浴場は雲の上の温泉別施設）。体験は0件。買物・商業は0件。高知県27つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Tengu Highland, Yusuhara Town Hall, Machi-no-eki Yusuhara, Niraga Pass, Ichiyagamori).
                Lodging: Kumo-no-Ue Hotel Annex Marche Yusuhara Rakuten twin-room photo ({YUSUHARA_TRAVEL_ACCESSED}).
                Dining from Tabelog Yusuhara shop pages ({YUSUHARA_TRAVEL_ACCESSED}).
                Onsen: 0 (stay≠onsen — baths at separate Kumo-no-Ue Onsen). Experience: 0. Shopping/commerce: 0. Twenty-seventh LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'hidaka' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ表示（名越屋沈下橋、日高村役場、小村神社、日下駅、柳瀬橋）。
                宿泊は楽天トラベル貸切宿 芽の洋室ベッド客室写真（{HIDAKA_TRAVEL_ACCESSED}）。
                飲食は食べログ日高村の公開店ページ（{HIDAKA_TRAVEL_ACCESSED}）。
                温泉は0件（stay≠onsen・一棟貸し内風呂は温泉扱いにしない）。体験は0件。買物・商業は0件。高知県28つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Nagoshi Chinka Bridge, Hidaka Village Hall, Omura Shrine, Kusaka Station, Yanase Bridge).
                Lodging: Vacation Rental MEI Rakuten western-room bed photo ({HIDAKA_TRAVEL_ACCESSED}).
                Dining from Tabelog Hidaka shop pages ({HIDAKA_TRAVEL_ACCESSED}).
                Onsen: 0 (stay≠onsen — private hinoki bath in rental). Experience: 0. Shopping/commerce: 0. Twenty-eighth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'tsuno' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ表示（四国カルスト、風の里公園、四万十川源流之碑、有宮神社、道の駅布施ヶ坂）。
                宿泊は楽天トラベル星ふるヴィレッジTENGUのツインルーム客室写真（{TSUNO_TRAVEL_ACCESSED}）。
                飲食は食べログ津野町の公開店ページ（{TSUNO_TRAVEL_ACCESSED}）。
                温泉は0件（stay≠onsen）。体験は0件。買物・商業は0件。高知県29つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Shikoku Karst, Kaze-no-Sato Park, Shimanto source monument, Arimiya Shrine, Michinoeki Fusegasaka).
                Lodging: Hoshifuru Village TENGU Rakuten twin-room photo ({TSUNO_TRAVEL_ACCESSED}).
                Dining from Tabelog Tsuno shop pages ({TSUNO_TRAVEL_ACCESSED}).
                Onsen: 0 (stay≠onsen). Experience: 0. Shopping/commerce: 0. Twenty-ninth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'nakatosa' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（双名島・中土佐町役場・久礼大正町市場・道の駅なかとさ・中土佐町立美術館）。
                宿泊は楽天トラベル四万十源流の里の本館和室写真（{NAKATOSA_TRAVEL_ACCESSED}）。
                飲食は食べログ中土佐町の公開店ページ（{NAKATOSA_TRAVEL_ACCESSED}）。
                温泉は0件（stay≠onsen）。体験は0件。買物・商業は0件。高知県25つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Futana Islands, Nakatosa Town Hall, Kure Taisho Market, Michinoeki Nakatosa, Nakatosa Town Art Museum).
                Lodging: Shimanto Genryu-no-Sato Rakuten main-building Japanese-room photo ({NAKATOSA_TRAVEL_ACCESSED}).
                Dining from Tabelog Nakatosa shop pages ({NAKATOSA_TRAVEL_ACCESSED}).
                Onsen: 0 (stay≠onsen). Experience: 0. Shopping/commerce: 0. Twenty-fifth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'niyodogawa' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（中津渓谷・仁淀川町役場・雨竜の滝・長者の棚田・大渡ダム）。
                宿泊は楽天トラベル中津渓谷ゆの森の本館和室写真（{NIYODOGAWA_TRAVEL_ACCESSED}）。
                飲食は食べログ仁淀川町の公開店ページ（{NIYODOGAWA_TRAVEL_ACCESSED}）。
                温泉は0件（施設に浴場あるがstay≠onsen・onsen pack未掲載）。体験は0件。買物・商業は0件。高知県24つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Nakatsu Gorge, Niyodogawa Town Hall, Uryu Falls, Choja terraces, Odo Dam).
                Lodging: Nakatsu Keikoku Yunomori Rakuten main-building Japanese-room photo ({NIYODOGAWA_TRAVEL_ACCESSED}).
                Dining from Tabelog Niyodogawa shop pages ({NIYODOGAWA_TRAVEL_ACCESSED}).
                Onsen: 0 (baths exist; stay≠onsen; no onsen pack). Experience: 0. Shopping/commerce: 0. Twenty-fourth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'geisei' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（琴ヶ浜・SEA HOUSE・和食駅・西分駅・芸西村役場）。
                宿泊は楽天トラベル芸西村の家の和室写真（{GEISEI_TRAVEL_ACCESSED}）。
                飲食は食べログ芸西村の公開店ページ（{GEISEI_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・大浴場≠温泉）。体験は0件。買物・商業は0件。高知県17つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Kotogahama, SEA HOUSE, Wajiki Station, Nishibun Station, Geisei Village Hall).
                Lodging: Geisei Village House Rakuten Japanese-room photo ({GEISEI_TRAVEL_ACCESSED}).
                Dining from Tabelog Geisei shop pages ({GEISEI_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay; 大浴場 ≠ onsen). Experience: 0. Shopping/commerce: 0. Seventeenth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'yasuda' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（島石ピクニック広場・唐浜休憩所・別所・安田駅・唐浜駅）。
                宿泊は楽天トラベルいなかじかんの和室写真（{YASUDA_TRAVEL_ACCESSED}）。
                飲食は食べログ安田町の公開店ページ（{YASUDA_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・バスルーム/サウナ≠温泉）。体験は0件。買物・商業は0件。高知県16つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Shimaishi Picnic Ground, Karahama rest area, Bessho, Yasuda Station, Tonohama Station).
                Lodging: Inakajikan Rakuten Japanese-room photo ({YASUDA_TRAVEL_ACCESSED}).
                Dining from Tabelog Yasuda shop pages ({YASUDA_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay; bathroom/sauna ≠ onsen). Experience: 0. Shopping/commerce: 0. Sixteenth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'nahari' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（奈半利中央公園・加領郷灯台・奈半利町甲・奈半利港眺望・奈半利駅）。
                宿泊は楽天トラベルホテルなはりの客室写真（{NAHARI_TRAVEL_ACCESSED}）。
                飲食は食べログ奈半利町の公開店ページ（{NAHARI_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・大浴場はあるが温泉キー無し）。体験は0件。買物・商業は0件。高知県15つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Nahari Central Park, Karyogo Lighthouse, Kō district, port view, Nahari Station).
                Lodging: Hotel Nahari Rakuten room photo ({NAHARI_TRAVEL_ACCESSED}).
                Dining from Tabelog Nahari shop pages ({NAHARI_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay; bath keys are 大浴場 not 温泉). Experience: 0. Shopping/commerce: 0. Fifteenth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'toyo' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（白浜海水浴場・生見海岸・甲浦・法界上人堂・野根地区）。
                宿泊は楽天トラベル東洋白浜リゾートホテルの客室写真（{TOYO_TRAVEL_ACCESSED}）。
                飲食は食べログ東洋町の公開店ページ（{TOYO_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・大浴場出典キー無し）。体験は海の駅東洋町（Commons）。買物・商業は0件。高知県14つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Shirahama Beach, Ikumi Coast, Kannoura, Hokai Shonin-do, None district).
                Lodging: Toyo Shirahama Resort Hotel Rakuten room photo ({TOYO_TRAVEL_ACCESSED}).
                Dining from Tabelog Toyo shop pages ({TOYO_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay only; no attributable bath keys). Experience: Umi-no-Eki Toyo (Commons). Shopping/commerce: 0. Fourteenth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'kuroshio' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（入野松原・入野海岸・砂浜美術館・加茂神社・佐賀地区）。
                宿泊は楽天トラベルネスト・ウエストガーデン土佐の客室写真（{KUROSHIO_TRAVEL_ACCESSED}）。
                飲食は食べログ黒潮町の公開店ページ（{KUROSHIO_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・大浴場出典キー無し）。体験は土佐西南大規模公園（Commons）。買物・商業は0件。高知県13つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Irino Matsubara, Irino Coast, Seaside Gallery, Kamo Shrine, Saga district).
                Lodging: Nest West Garden Tosa Rakuten room photo ({KUROSHIO_TRAVEL_ACCESSED}).
                Dining from Tabelog Kuroshio shop pages ({KUROSHIO_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay only; no attributable bath keys). Experience: Tosa Seinan Large Park (Commons). Shopping/commerce: 0. Thirteenth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'sukumo' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（宿毛湾・咸陽島・宿毛城・延光寺・沖の島・出井甌穴）。
                宿泊は楽天トラベル宿毛リゾート椰子の湯の客室写真（{SUKUMO_TRAVEL_ACCESSED}）。
                飲食は食べログ宿毛市の公開店ページ（{SUKUMO_TRAVEL_ACCESSED}）。
                温泉は同施設露天風呂（楽天・宿泊と別キー）。体験は道の駅すくも（Commons）。買物・商業は0件。高知県12つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Sukumo Bay, Kan\'yō Island, Sukumo Castle, Enkō-ji, Okinoshima, Dei Ouketsu).
                Lodging: Sukumo Resort Yashinoyu Rakuten room photo ({SUKUMO_TRAVEL_ACCESSED}).
                Dining from Tabelog Sukumo shop pages ({SUKUMO_TRAVEL_ACCESSED}).
                Onsen: outdoor bath still (Rakuten; stay≠onsen). Experience: Michinoeki Sukumo (Commons). Shopping/commerce: 0. Twelfth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'tosashimizu' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（足摺岬・足摺岬灯台・金剛福寺・竜串・白山洞門・大岐の浜）。
                宿泊は楽天トラベルＴｈｅＭａｎａ　Ｖｉｌｌａｇｅの客室写真（{TOSASHIMIZU_TRAVEL_ACCESSED}）。
                飲食は食べログ土佐清水市の公開店ページ（{TOSASHIMIZU_TRAVEL_ACCESSED}）。
                温泉は同施設露天風呂（楽天・宿泊と別キー）。体験はジョン万次郎資料館（Commons）。買物・商業は0件。高知県11つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Cape Ashizuri, lighthouse, Kongōfuku-ji, Tatsukushi, Hakusan Domon, Ooki Beach).
                Lodging: TheMana Village Rakuten room photo ({TOSASHIMIZU_TRAVEL_ACCESSED}).
                Dining from Tabelog Tosashimizu shop pages ({TOSASHIMIZU_TRAVEL_ACCESSED}).
                Onsen: outdoor bath still (Rakuten; stay≠onsen). Experience: John Manjiro Museum (Commons). Shopping/commerce: 0. Eleventh LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'shimanto' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（四万十川橋・岩間沈下橋・佐田沈下橋・一條神社・不破八幡宮・トンボ自然公園）。
                宿泊は楽天トラベル新ロイヤルホテル四万十の客室写真（{SHIMANTO_TRAVEL_ACCESSED}）。
                飲食は食べログ四万十市の公開店ページ（{SHIMANTO_TRAVEL_ACCESSED}）。
                温泉は同ホテル4階大浴場（楽天・宿泊と別キー）。体験は道の駅よって西土佐（Commons）。買物・商業は0件。高知県10つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Shimanto River Bridge, Iwama/Sada chinkabashi, Ichijo Shrine, Fuba Hachimangu, Tombo Nature Park).
                Lodging: New Royal Hotel Shimanto Rakuten room photo ({SHIMANTO_TRAVEL_ACCESSED}).
                Dining from Tabelog Shimanto shop pages ({SHIMANTO_TRAVEL_ACCESSED}).
                Onsen: hotel 4F bath still (Rakuten; stay≠onsen). Experience: Michinoeki Yotte Nishitosa (Commons). Shopping/commerce: 0. Tenth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'susaki' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（横浪黒潮ライン・大善寺・鳴無神社・須賀神社・野見湾・桑田山雪割り桜）。
                宿泊は楽天トラベルＨＯＴＥＬ　ＡＺ　高知須崎店の客室写真（{SUSAKI_TRAVEL_ACCESSED}）。
                飲食は食べログ須崎市の公開店ページ（{SUSAKI_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・大浴場出典キー無し）。体験は道の駅かわうその里すさき（Commons）。買物・商業は0件。高知県9つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Yokonami Kuroshio Line, Daizen-ji, Otonashi Shrine, Suga Shrine, Nomi Bay, Kuwadayama sakura).
                Lodging: HOTEL AZ Kochi Susaki Rakuten room photo ({SUSAKI_TRAVEL_ACCESSED}).
                Dining from Tabelog Susaki shop pages ({SUSAKI_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay only; no attributable bath keys). Experience: Michinoeki Kawauso-no-Sato Susaki (Commons). Shopping/commerce: 0. Ninth LIVE Kochi hub.
              </>
            )
          ) : town.slug === 'tosa' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（仁淀川河口大橋・清瀧寺・青龍寺・宇佐漁港・蟹ヶ池・新居緑地公園）。
                宿泊は土佐龍温泉三陽荘のCommons離れ写真（{TOSA_TRAVEL_ACCESSED}；楽天mediaInfo無し）。
                飲食は食べログ土佐市の公開店ページ（{TOSA_TRAVEL_ACCESSED}）。
                温泉は三陽荘大浴場露天風呂（Commons・宿泊と別キー）。体験は新居地区観光交流施設南風（Commons）。買物・商業は0件。高知県8つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Niyodo estuary bridge, Seiryū-ji, Shōryū-ji, Usa port, Kanigaike, Nii park).
                Lodging: Sanyo-so annex Commons photo ({TOSA_TRAVEL_ACCESSED}; Rakuten mediaInfo absent).
                Dining from Tabelog Tosa shop pages ({TOSA_TRAVEL_ACCESSED}).
                Onsen: Sanyo-so outdoor bath (Commons; stay≠onsen). Experience: Maze tourism facility (Commons). Shopping/commerce: 0. Eighth LIVE Kochi hub.
              </>
            )
) : town.slug === 'aki' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（野良時計・安芸城跡・伊尾木洞・岩崎弥太郎生家・安芸駅・安芸市立歴史民俗資料館）。
                宿泊は楽天トラベルの客室写真（{AKI_TRAVEL_ACCESSED}）。
                飲食は食べログ安芸市の公開店ページ（{AKI_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・大浴場出典キー無し）。体験は安芸市書道美術館（Commons）。買物・商業は0件。高知県6つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Noradokei, Aki Castle ruins, Iokido Cave, Iwasaki Yataro birthplace, Aki Station, History Museum).
                Lodging from Rakuten Travel room photos ({AKI_TRAVEL_ACCESSED}).
                Dining from Tabelog Aki shop pages ({AKI_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay only; no attributable bath keys). Experience: Aki City Calligraphy Art Museum (Commons). Shopping/commerce: 0. Sixth LIVE Kochi hub.
              </>
            )


) : town.slug === 'ino' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（にこ淵・いの町紙の博物館・伊野駅・名越屋沈下橋・伊野停留場・紙のこいのぼり）。
                宿泊は楽天トラベルの客室写真（{INO_TRAVEL_ACCESSED}）。
                飲食は食べログいの町の公開店ページ（{INO_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・大浴場出典キー無し）。体験は道の駅土佐和紙工芸村（Commons）。買物・商業は0件。高知県5つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Nikobuchi, Ino Paper Museum, JR Ino Station, Nagoya Chinkabashi, Tosaden Ino Station, paper carp streamers).
                Lodging from Rakuten Travel room photos ({INO_TRAVEL_ACCESSED}).
                Dining from Tabelog Ino shop pages ({INO_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay only; no attributable bath keys). Experience: Michinoeki Tosa Washi Craft Village (Commons). Shopping/commerce: 0. Fifth LIVE Kochi hub.
              </>
            )


          ) : town.slug === 'kami' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（やなせたかし記念館・龍河洞・土佐山田駅・大川上美良布神社・べふ峡・繁藤駅）。
                宿泊は楽天トラベルの客室写真（{KAMI_TRAVEL_ACCESSED}）。
                飲食は食べログ香美市の公開店ページ（{KAMI_TRAVEL_ACCESSED}）。
                温泉は0件（客室写真の宿のみ・大浴場出典キー無し）。体験は道の駅美良布（Commons）。買物・商業は0件。高知県4つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Yanase Takashi Memorial Hall, Ryugado, Tosa-Yamada Station, Okawakami Birafu Shrine, Befukyo, Shigeto Station).
                Lodging from Rakuten Travel room photos ({KAMI_TRAVEL_ACCESSED}).
                Dining from Tabelog Kami shop pages ({KAMI_TRAVEL_ACCESSED}).
                Onsen: 0 (room-still stay only; no attributable bath keys). Experience: Michinoeki Birafu (Commons). Shopping/commerce: 0. Fourth LIVE Kochi hub.
              </>
            )


          ) : town.slug === 'konan' ? (
            locale === 'ja' ? (
              <>
                観光は出典写真がある施設のみ（絵金蔵・のいち駅・あかおか駅・手結港可動橋・のいち動物公園・夜須駅）。
                宿泊は楽天トラベルの客室写真（{KONAN_TRAVEL_ACCESSED}）。
                飲食は食べログ香南市の公開店ページ（{KONAN_TRAVEL_ACCESSED}）。
                温泉は0件（ユニットバスのみ）。体験は道の駅やす（Commons）。買物・商業は0件。高知県3つ目のLIVEハブ。
              </>
            ) : (
              <>
                Tourism shows only facilities with a sourced photo (Ekingura, Noichi Station, Akaoka Station, Tei drawbridge, Noichi Zoo, Yasu Station).
                Lodging from Rakuten Travel room photos ({KONAN_TRAVEL_ACCESSED}).
                Dining from Tabelog Konan shop pages ({KONAN_TRAVEL_ACCESSED}).
                Onsen: 0 (unit baths only). Experience: Michinoeki Yasu (Commons). Shopping/commerce: 0. Third LIVE Kochi hub.
              </>
            )


          ) : (
            <>
              Lodging from the town lodging list
              (pack rows plus the official page of {TSURUGI_TRAVEL_ACCESSED}). Dining from the
              roadside-station restaurant, Tabelog shop pages, and chamber member pages (
              {TSURUGI_TRAVEL_ACCESSED}). Experience, shopping, and commerce stay at 0 — no official
              list. Onsen from the town tourism pages.
              Cards show only listings with a sourced photo. No public scores.
            </>
          )}
        </p>
        <details className="facts-fold">
          <summary>{t('gapFold')}</summary>
        <ul className="gap-board" aria-label={t('gapBoardLabel')}>
          <li className="gap-cell" data-gap="geo">
            <span className="n">
              {gaps.geo}/{gaps.total}
            </span>
            <span className="d">{t('gapGeo')}</span>
          </li>
          <li className="gap-cell" data-gap="hours">
            <span className="n">
              {gaps.hours}/{gaps.total}
            </span>
            <span className="d">{t('gapHours')}</span>
          </li>
          <li className="gap-cell is-miss" data-gap="address">
            <span className="n">{gaps.missingAddress}</span>
            <span className="d">{t('gapAddress')}</span>
          </li>
          <li className="gap-cell is-miss" data-gap="phone">
            <span className="n">{gaps.missingPhone}</span>
            <span className="d">{t('gapPhone')}</span>
          </li>
          <li className="gap-cell is-zero" data-gap="gtfs">
            <span className="n">{gaps.gtfs}</span>
            <span className="d">{t('gapGtfs')}</span>
          </li>
        </ul>
        <div className="map-meta">
          <svg
            className="official-scatter"
            viewBox={map.viewBox}
            role="img"
            aria-label={locale === 'ja' ? town.mapLabelJa : town.mapLabelEn}
            data-official-xy={town.expectedGeo}
          >
            <path className="mima-outline" d={map.outline} />
            {displayPoints.map((point) => (
              <g
                key={point.id}
                data-place-id={point.id}
                data-category={point.category}
                transform={`translate(${point.x} ${point.y})`}
              >
                <a href={chipHref(h.topChipForRow(point), '', locale, town.slug, point.id, town.prefectureSlug)}>
                  <circle
                    className={
                      'map-dot' + (openId === point.id ? ' is-active' : '')
                    }
                    r={openId === point.id ? 5.5 : 4}
                    aria-label={point.name_ja}
                  >
                    <title>{point.name_ja}</title>
                  </circle>
                </a>
              </g>
            ))}
          </svg>
          <p className="map-gap-copy">{t('mapGap', {n: missingGeo})}</p>
          <p className="note">{t('mapHonest')}</p>
          <ul className="map-legend">
            {legendCats.map((cat) => (
              <li key={cat}>
                <span className="swatch map-dot" />
                <ChipLabel id={cat} />
              </li>
            ))}
          </ul>
          <div className="geo-cite">
            <p>
              <span className="geo-cite-label">{t('citeLabel')}</span>
              {locale === 'ja' ? town.mapCitePackJa : town.mapCitePackEn}
            </p>
            {map.outlineSource === 'n03' ? (
              <p>
                {t('mapCiteN03')}（
                <a href="https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2026.html">N03-20260101</a> / CC BY 4.0）
              </p>
            ) : (
              <p className="note">{t('mapCiteBbox')}</p>
            )}
          </div>
        </div>
        <p className="tiny-cite hero-photo-credit">
          {locale === 'ja' ? town.photoCiteJa : town.photoCiteEn}
          {' · '}
          {town.heroPhoto.author} / {town.heroPhoto.license}
        </p>
        <p className="tally">{locale === 'ja' ? town.coverageJa : town.coverageEn}</p>
        <p className="note">{locale === 'ja' ? town.licenseNoteJa : town.licenseNoteEn}</p>
        </details>
      </footer>
    </section>
  );
}

