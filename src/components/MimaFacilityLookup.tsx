'use client';

import {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import {
  EXPECTED_CATEGORY_COUNTS,
  EXPECTED_GEO_COUNT,
  EXPECTED_ROW_COUNT,
  LOOKUP_CATEGORIES,
  LOOKUP_PAGE_SIZE,
  licenseKind,
  type FacilityCategory,
  type FacilityGapBoard,
  type FacilityRow,
  type MimaOfficialMap
} from '@/data/facility-schema';

const EMERGENCY: ReadonlySet<FacilityCategory> = new Set([
  'shelter',
  'emergency_evacuation_site',
  'aed',
  'hospital'
]);

const EMERGENCY_CHIPS = [
  'shelter',
  'emergency_evacuation_site',
  'aed',
  'hospital'
] as const satisfies readonly FacilityCategory[];


type Props = {
  locale: string;
  gaps: FacilityGapBoard;
  map: MimaOfficialMap;
};

type FilterId = 'all' | FacilityCategory;
type CatalogState = 'idle' | 'loading' | 'ready' | 'error';

function isBlank(value: string | null): boolean {
  return value === null || value.trim() === '';
}

function Gap() {
  const t = useTranslations('lookup');
  return <span className="missing">{t('gap')}</span>;
}

function TextField({
  label,
  value
}: {
  label: string;
  value: string | null;
}) {
  return (
    <p className="attr-row">
      <span className="attr-label">{label}</span>
      {isBlank(value) ? <Gap /> : <span>{value}</span>}
    </p>
  );
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
  }
}

function dotClass(category: FacilityCategory): string {
  if (category === 'emergency_evacuation_site') return 'map-dot is-emergency';
  if (category === 'childcare') return 'map-dot is-childcare';
  if (category === 'tourism') return 'map-dot is-tourism';
  return 'map-dot';
}

function PlaceCard({row}: {row: FacilityRow}) {
  const t = useTranslations('lookup');
  const kind = licenseKind(row.license);
  const hasGeo = row.lat !== null && row.lon !== null;
  const emergency = EMERGENCY.has(row.category);
  return (
    <article
      className={emergency ? 'place-card is-emergency' : 'place-card'}
      data-category={row.category}
    >
      <h4>{row.name_ja}</h4>
      <p className="attr-row">
        <span className="attr-label">{t('category')}</span>
        <span>
          <ChipLabel id={row.category} />
        </span>
      </p>
      <TextField label={t('reading')} value={row.reading} />
      <TextField label={t('address')} value={row.address} />
      <TextField label={t('phone')} value={row.phone} />
      <TextField label={t('hours')} value={row.hours} />
      <p className="attr-row">
        <span className="attr-label">{t('geo')}</span>
        {hasGeo ? (
          <span>
            {row.lat}, {row.lon}
          </span>
        ) : (
          <Gap />
        )}
      </p>
      <p className="attr-row">
        <span className="attr-label">{t('official')}</span>
        {row.official_url && !isBlank(row.official_url) ? (
          <a href={row.official_url}>{row.official_url}</a>
        ) : (
          <Gap />
        )}
      </p>
      <p className="attr-row">
        <span className="attr-label">{t('source')}</span>
        <a href={row.source_url}>{row.source_url}</a>
      </p>
      <p className="attr-row">
        <span className="attr-label">{t('license')}</span>
        <span className={kind === 'cc_by_open_data' ? 'license-cc' : 'license-city'}>
          {kind === 'cc_by_open_data' ? t('licenseOpendata') : t('licenseCity')}
        </span>
      </p>
      <p className="attr-row sources">{row.license}</p>
      <p className="attr-row">
        <span className="attr-label">{t('accessed')}</span>
        <span>{row.accessed}</span>
      </p>
    </article>
  );
}

function parseCatalog(data: unknown): FacilityRow[] {
  if (typeof data !== 'object' || data === null) {
    throw new Error('catalog');
  }
  const total = Reflect.get(data, 'total');
  const facilities = Reflect.get(data, 'facilities');
  if (total !== EXPECTED_ROW_COUNT || !Array.isArray(facilities)) {
    throw new Error('catalog');
  }
  if (facilities.length !== EXPECTED_ROW_COUNT) {
    throw new Error('catalog');
  }
  return facilities as FacilityRow[];
}

export function MimaFacilityLookup({locale, gaps, map}: Props) {
  const t = useTranslations('lookup');
  const [filter, setFilter] = useState<FilterId>('all');
  const [query, setQuery] = useState('');
  const [engaged, setEngaged] = useState(false);
  const [catalog, setCatalog] = useState<FacilityRow[] | null>(null);
  const [catalogState, setCatalogState] = useState<CatalogState>('idle');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [limit, setLimit] = useState(LOOKUP_PAGE_SIZE);
  const [pinnedId, setPinnedId] = useState<string | null>(null);

  const legendCats = useMemo(() => {
    const seen = new Set<FacilityCategory>();
    const ordered: FacilityCategory[] = [];
    for (const point of map.points) {
      if (seen.has(point.category)) continue;
      seen.add(point.category);
      ordered.push(point.category);
    }
    return ordered;
  }, [map.points]);

  const missingGeo = gaps.total - gaps.geo;

  async function ensureCatalog(): Promise<FacilityRow[] | null> {
    if (catalog) return catalog;
    if (catalogState === 'loading') return null;
    setCatalogState('loading');
    try {
      const res = await fetch('/api/mima/facilities', {
        headers: {Accept: 'application/json'}
      });
      if (!res.ok) throw new Error('catalog');
      const rows = parseCatalog(await res.json());
      setCatalog(rows);
      setCatalogState('ready');
      return rows;
    } catch {
      setCatalogState('error');
      return null;
    }
  }

  async function engageChip(next: FilterId) {
    setFilter(next);
    setEngaged(true);
    setPinnedId(null);
    setExpandedId(null);
    setLimit(LOOKUP_PAGE_SIZE);
    await ensureCatalog();
  }

  async function engageSearch(value: string) {
    setQuery(value);
    if (value.trim() === '') {
      return;
    }
    setEngaged(true);
    setPinnedId(null);
    setExpandedId(null);
    setLimit(LOOKUP_PAGE_SIZE);
    await ensureCatalog();
  }

  async function engageMap(id: string, category: FacilityCategory) {
    setEngaged(true);
    setFilter(category);
    setQuery('');
    setPinnedId(id);
    setExpandedId(id);
    setLimit(LOOKUP_PAGE_SIZE);
    const list = document.getElementById('mima-place-results');
    list?.scrollIntoView({block: 'nearest'});
    await ensureCatalog();
  }

  const visible = useMemo(() => {
    if (!catalog) return [];
    const q = query.trim().toLowerCase();
    const filtered = catalog.filter((row) => {
      if (filter !== 'all' && row.category !== filter) return false;
      if (q === '') return true;
      if (row.name_ja.toLowerCase().includes(q)) return true;
      if (row.reading && row.reading.toLowerCase().includes(q)) return true;
      return false;
    });
    if (!pinnedId) return filtered;
    const pinned = filtered.find((row) => row.id === pinnedId);
    if (!pinned) return filtered;
    return [pinned, ...filtered.filter((row) => row.id !== pinnedId)];
  }, [catalog, filter, query, pinnedId]);

  const shown = engaged ? visible.slice(0, limit) : [];
  const canMore = engaged && visible.length > shown.length;

  return (
    <section className="lookup" aria-labelledby="mima-lookup-heading" lang={locale}>
      <div className="hero-fold">
        <div className="hero-map">
          <svg
            className="official-scatter"
            viewBox={map.viewBox}
            role="img"
            aria-label={t('mapLabel')}
            data-official-xy={EXPECTED_GEO_COUNT}
          >
            <path className="mima-outline" d={map.outline} />
            {map.points.map((point) => (
              <g
                key={point.id}
                data-place-id={point.id}
                data-category={point.category}
                transform={`translate(${point.x} ${point.y})`}
              >
                <circle
                  className={dotClass(point.category) + (expandedId === point.id ? ' is-active' : '')}
                  r={expandedId === point.id ? 5.5 : 4}
                  tabIndex={0}
                  role="button"
                  aria-label={point.name_ja}
                  onClick={() => {
                    void engageMap(point.id, point.category);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      void engageMap(point.id, point.category);
                    }
                  }}
                >
                  <title>{point.name_ja}</title>
                </circle>
              </g>
            ))}
          </svg>
        </div>
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
      </div>

      <h2 id="mima-lookup-heading">{t('heading')}</h2>
      <p>
        <label htmlFor="mima-place-search">{t('searchLabel')}</label>
      </p>
      <input
        id="mima-place-search"
        className="lookup-search"
        type="search"
        value={query}
        onChange={(event) => {
          void engageSearch(event.target.value);
        }}
        placeholder={t('searchPlaceholder')}
        spellCheck={false}
        autoComplete="off"
      />

      <div className="lookup-toolbar" role="group" aria-label={t('filters')}>
        <button
          type="button"
          className={filter === 'all' && engaged ? 'chip is-active' : 'chip'}
          aria-pressed={filter === 'all' && engaged}
          data-category="all"
          onClick={() => {
            void engageChip('all');
          }}
        >
          <ChipLabel id="all" />
          <span className="count-chip"> {EXPECTED_ROW_COUNT}</span>
        </button>
        {EMERGENCY_CHIPS.map((cat) => {
          const n = EXPECTED_CATEGORY_COUNTS[cat];
          return (
            <button
              key={cat}
              type="button"
              className={[
                'chip',
                engaged && filter === cat ? 'is-active' : '',
                'is-emergency'
              ]
                .filter(Boolean)
                .join(' ')}
              aria-pressed={engaged && filter === cat}
              data-category={cat}
              onClick={() => {
                void engageChip(cat);
              }}
            >
              <ChipLabel id={cat} />
              <span className="count-chip"> {n}</span>
            </button>
          );
        })}
      </div>
      <div className="lookup-toolbar lookup-toolbar-rest" role="group" aria-label={t('tally')}>
        {LOOKUP_CATEGORIES.filter((cat) => !EMERGENCY.has(cat)).map((cat) => {
          const n = EXPECTED_CATEGORY_COUNTS[cat];
          const unpublished = n === 0;
          return (
            <button
              key={cat}
              type="button"
              className={[
                'chip',
                engaged && filter === cat ? 'is-active' : '',
                unpublished ? 'is-empty' : ''
              ]
                .filter(Boolean)
                .join(' ')}
              aria-pressed={engaged && filter === cat}
              data-category={cat}
              onClick={() => {
                void engageChip(cat);
              }}
            >
              <ChipLabel id={cat} />
              {unpublished ? t('unpublished') : null}
              <span className="count-chip"> {n}</span>
            </button>
          );
        })}
      </div>

      <p className="lede">{t('lede')}</p>

      <div className="map-meta">
        <p className="map-gap-copy">{t('mapGap', {n: missingGeo})}</p>
        <p className="note">{t('mapHonest')}</p>
        <ul className="map-legend">
          {legendCats.map((cat) => (
            <li key={cat}>
              <span className={'swatch ' + dotClass(cat)} />
              <ChipLabel id={cat} />
            </li>
          ))}
        </ul>
        <footer className="geo-cite">
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
        </footer>
      </div>

      <p className="tally">{t('coverage')}</p>
      <p className="note">{t('licenseNote')}</p>

      <div id="mima-place-results">
        {!engaged ? <p className="note">{t('idleHint')}</p> : null}
        {engaged && catalogState === 'loading' ? <p className="note">{t('loading')}</p> : null}
        {engaged && catalogState === 'error' ? <p className="note">{t('loadError')}</p> : null}
        {engaged && catalog ? (
          <>
            <p className="note" aria-live="polite">
              {t('visibleLabel')} {t('visible', {n: visible.length})}
            </p>
            {filter !== 'all' && EXPECTED_CATEGORY_COUNTS[filter] === 0 ? (
              <p className="note">{t('unpublishedNote')}</p>
            ) : null}
            {visible.length === 0 && !(filter !== 'all' && EXPECTED_CATEGORY_COUNTS[filter] === 0) ? (
              <p className="note">{t('empty')}</p>
            ) : null}
            {shown.length > 0 ? (
              <ul className="compact-list">
                {shown.map((row) => {
                  const open = expandedId === row.id;
                  const hasGeo = row.lat !== null && row.lon !== null;
                  return (
                    <li key={row.id}>
                      <button
                        type="button"
                        className={open ? 'place-row is-open' : 'place-row'}
                        aria-expanded={open}
                        onClick={() => setExpandedId(open ? null : row.id)}
                      >
                        <span className="place-name">{row.name_ja}</span>
                        <span className="place-cat">
                          <ChipLabel id={row.category} />
                        </span>
                        {hasGeo ? null : <span className="mark">{t('markGeo')}</span>}
                        {isBlank(row.hours) ? <span className="mark">{t('markHours')}</span> : null}
                      </button>
                      {open ? <PlaceCard row={row} /> : null}
                    </li>
                  );
                })}
              </ul>
            ) : null}
            {canMore ? (
              <button
                type="button"
                className="more-btn"
                onClick={() => setLimit((n) => n + LOOKUP_PAGE_SIZE)}
              >
                {t('more')}
              </button>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
}
