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

