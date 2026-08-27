'use client';

import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import {
  EXPECTED_GEO_COUNT,
  licenseKind,
  type FacilityCategory,
  type FacilityGapBoard,
  type FacilityRow,
  type MimaOfficialMap
} from '@/data/facility-schema';
import {BASE_PATH, MIMA, MIMA_PLACE_PHOTO} from '@/data/mima';
import {
  TOP_CHIPS,
  TOP_CHIP_COUNTS,
  TRAVEL_ACCESSED,
  TRAVEL_ALL,
  TRAVEL_CARD_FOLD,
  TRAVEL_DINING,
  TRAVEL_SOURCES,
  TRAVEL_STAY,
  isExperiencePackRow,
  isOnsenPackRow,
  isTravelFilter,
  packRowMatchesFilter,
  rankSeeRows,
  resolveMimaFilter,
  sightPhoto,
  sourcedHook,
  topChipForRow,
  type FilterId,
  type TravelRow
} from '@/data/mima-travel';

type Props = {
  locale: string;
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

function chipHref(next: FilterId, q: string, locale: string, id?: string): string {
  const path = `${BASE_PATH}/${locale}/tokushima/mima/`;
  if (next === 'sights' && !q && !id) return path;
  const parts: string[] = [];
  if (next !== 'sights') parts.push(`c=${encodeURIComponent(next)}`);
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
  href,
  onOpen
}: {
  row: CardRow;
  locale: string;
  rank: number | null;
  href: string;
  onOpen: (id: string) => void;
}) {
  const t = useTranslations('lookup');
  const photo = sightPhoto(row.name_ja);
  const hook = sourcedHook(row, locale);
  return (
    <article className="facility-card" data-id={row.id} data-category={row.category}>
      <a
        href={href}
        className="facility-card-link"
        onClick={(event) => {
          event.preventDefault();
          onOpen(row.id);
        }}
      >
        <div className={photo ? 'card-photo' : 'card-photo is-well'}>
          {photo ? (
            <>
              <img
                src={photo.src}
                alt={locale === 'ja' ? photo.altJa : photo.altEn}
                width={640}
                height={400}
              />
              <span className="card-photo-cite">
                {photo.author} / {photo.license}
              </span>
            </>
          ) : (
            <span className="card-well" aria-hidden="true">
              <span className="card-well-name">{row.name_ja}</span>
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
  onClose
}: {
  row: CardRow;
  locale: string;
  onClose: () => void;
}) {
  const t = useTranslations('lookup');
  const pack = isPackRow(row) ? row : null;
  const kind = pack ? licenseKind(pack.license) : null;
  const photo = sightPhoto(row.name_ja);
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
              <a href={photo.commons}>Wikimedia Commons</a>
              {' / '}
              <a href={photo.licenseUrl}>{photo.license}</a>
              {' / '}
              <a href={photo.authorUrl}>{photo.author}</a>
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
        {pack && pack.official_url && !isBlank(pack.official_url) ? (
          <p className="attr-row">
            <span className="attr-label">{t('official')}</span>
            <a href={pack.official_url}>{pack.official_url}</a>
          </p>
        ) : null}
        <footer className="place-card-meta">
          <a href={row.source_url}>{t('source')}</a>
          {' · '}
          {row.accessed}
          {pack && kind ? (
            <>
              {' · '}
              <span className={kind === 'cc_by_open_data' ? 'license-cc' : 'license-city'}>
                {kind === 'cc_by_open_data' ? t('licenseOpendata') : t('licenseCity')}
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
  gaps,
  map,
  rows,
  filter: initialFilter,
  query: initialQuery,
  engaged,
  openId: initialOpenId
}: Props) {
  const t = useTranslations('lookup');
  const [filter, setFilter] = useState(initialFilter);
  const [query, setQuery] = useState(initialQuery);
  const [openId, setOpenId] = useState(initialOpenId);
  const [searchOpen, setSearchOpen] = useState(initialQuery.trim() !== '');
  const [showAll, setShowAll] = useState(false);

  function applyFromLocation() {
    const params = new URLSearchParams(window.location.search);
    const c = params.get('c') ?? undefined;
    const q = (params.get('q') ?? '').trim();
    const id = params.get('id');
    setFilter(resolveMimaFilter(c, q));
    setQuery(q);
    setOpenId(id && id !== '' ? id : null);
    if (q) setSearchOpen(true);
  }

  useEffect(() => {
    applyFromLocation();
    window.addEventListener('popstate', applyFromLocation);
    return () => window.removeEventListener('popstate', applyFromLocation);
  }, []);

  const displayRows = dedupeDisplayRows(rows);
  const displayPoints = dedupeMapPoints(map.points);
  const rankedSee = rankSeeRows(displayRows);
  const onsenRows = displayRows.filter(isOnsenPackRow);
  const experienceRows = displayRows.filter(isExperiencePackRow);

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
    ? TRAVEL_ALL.filter((row) => row.name_ja.toLowerCase().includes(q))
    : filter === 'dining'
      ? [...TRAVEL_DINING]
      : filter === 'stay'
        ? [...TRAVEL_STAY]
        : [];

  const includePack = searching || !travelLayer;
  const filteredPack = includePack
    ? displayRows.filter((row) => {
        if (!searching && !packRowMatchesFilter(row.category, filter, row.name_ja)) {
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
    !searching && filter === 'sights' ? rankSeeRows(filteredPack) : filteredPack;

  const cards: CardRow[] = searching
    ? [...travelHits, ...orderedPack]
    : travelLayer
      ? travelHits
      : orderedPack;

  const foldCap = searching || showAll ? cards.length : TRAVEL_CARD_FOLD;
  const foldCards = cards.slice(0, foldCap);
  const restCount = cards.length - foldCards.length;

  const sheetRow =
    openId === null
      ? undefined
      : cards.find((row) => row.id === openId) ??
        displayRows.find((row) => row.id === openId) ??
        TRAVEL_ALL.find((row) => row.id === openId);

  function chipCount(id: (typeof TOP_CHIPS)[number]): number {
    if (id === 'sights') return rankedSee.length;
    if (id === 'onsen') return onsenRows.length;
    if (id === 'experience') return experienceRows.length;
    return TOP_CHIP_COUNTS[id];
  }

  function go(href: string) {
    window.history.pushState({}, '', href);
    applyFromLocation();
  }

  function openCard(id: string) {
    const href = chipHref(filter === 'all' ? 'sights' : filter, query, locale, id);
    window.history.pushState({}, '', href);
    setOpenId(id);
  }

  function closeSheet() {
    const href = chipHref(filter === 'all' ? 'sights' : filter, query, locale);
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
            src={MIMA_PLACE_PHOTO.src}
            width={1920}
            height={1163}
            alt={locale === 'ja' ? MIMA_PLACE_PHOTO.altJa : MIMA_PLACE_PHOTO.altEn}
          />
          <h1 className="hero-title">{locale === 'ja' ? MIMA.nameJa : MIMA.nameEn}</h1>
          <figcaption className="photo-cite">
            {t('photoCite')}{' '}
            <a href={MIMA_PLACE_PHOTO.commons}>Wikimedia Commons</a>
            {' / '}
            <a href={MIMA_PLACE_PHOTO.licenseUrl}>{MIMA_PLACE_PHOTO.license}</a>
            {' / '}
            <a href={MIMA_PLACE_PHOTO.authorUrl}>{MIMA_PLACE_PHOTO.author}</a>
          </figcaption>
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
                href={chipHref(cat, '', locale)}
                data-category={cat}
                data-chip={cat}
                onClick={(event) => {
                  event.preventDefault();
                  setShowAll(false);
                  setQuery('');
                  go(chipHref(cat, '', locale));
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
          action={`${BASE_PATH}/${locale}/tokushima/mima/`}
        >
          {filter !== 'sights' && filter !== 'all' ? (
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
        {engaged && foldCards.length === 0 ? <p className="note">{t('empty')}</p> : null}
        <div className="place-grid">
          {foldCards.map((row, index) => (
            <FacilityCard
              key={row.id}
              row={row}
              locale={locale}
              rank={searching ? null : index + 1}
              href={chipHref(filter === 'all' ? 'sights' : filter, query, locale, row.id)}
              onOpen={openCard}
            />
          ))}
        </div>
        {restCount > 0 ? (
          <button type="button" className="more-btn" onClick={() => setShowAll(true)}>
            {t('morePlaces', {n: restCount})}
          </button>
        ) : null}
      </div>

      {sheetRow ? <DetailSheet row={sheetRow} locale={locale} onClose={closeSheet} /> : null}

      <footer className="lookup-sources">
        <p className="tiny-cite">
          {locale === 'ja' ? (
            <>
              <a href={TRAVEL_SOURCES.dining}>飲食</a>・<a href={TRAVEL_SOURCES.stay}>宿泊</a>
              は美馬観光ビューロー（{TRAVEL_ACCESSED}）。
              <a href={TRAVEL_SOURCES.onsen}>温泉</a>・<a href={TRAVEL_SOURCES.experience}>体験</a>
              は市の観光マップ。点数は持ちません。
            </>
          ) : (
            <>
              <a href={TRAVEL_SOURCES.dining}>Dining</a> and{' '}
              <a href={TRAVEL_SOURCES.stay}>lodging</a> from the Mima Tourism Bureau (
              {TRAVEL_ACCESSED}). <a href={TRAVEL_SOURCES.onsen}>Onsen</a> and{' '}
              <a href={TRAVEL_SOURCES.experience}>experience</a> from the city tourism map. No
              public scores.
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
            aria-label={t('mapLabel')}
            data-official-xy={EXPECTED_GEO_COUNT}
          >
            <path className="mima-outline" d={map.outline} />
            {displayPoints.map((point) => (
              <g
                key={point.id}
                data-place-id={point.id}
                data-category={point.category}
                transform={`translate(${point.x} ${point.y})`}
              >
                <a href={chipHref(topChipForRow(point), '', locale, point.id)}>
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
              {t('mapCitePack')}
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
        <p className="tally">{t('coverage')}</p>
        <p className="note">{t('licenseNote')}</p>
        </details>
      </footer>
    </section>
  );
}

