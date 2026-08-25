'use client';

import {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import {
  EXPECTED_ROW_COUNT,
  LOOKUP_CATEGORIES,
  licenseKind,
  type FacilityCategory,
  type FacilityRow
} from '@/data/facility-schema';

const EMERGENCY: ReadonlySet<FacilityCategory> = new Set([
  'shelter',
  'emergency_evacuation_site',
  'aed',
  'hospital'
]);

type Props = {
  locale: string;
  rows: readonly FacilityRow[];
};

type FilterId = 'all' | FacilityCategory;

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

function PlaceCard({row}: {row: FacilityRow}) {
  const t = useTranslations('lookup');
  const kind = licenseKind(row.license);
  const hasGeo = row.lat !== null && row.lon !== null;
  const emergency = EMERGENCY.has(row.category);
  return (
    <article
      className={emergency ? 'place-card is-emergency' : 'place-card'}
      data-place-id={row.id}
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

export function MimaFacilityLookup({locale, rows}: Props) {
  const t = useTranslations('lookup');
  const [filter, setFilter] = useState<FilterId>('all');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const next: Record<FacilityCategory, number> = {
      tourism: 0,
      cultural_property: 0,
      care: 0,
      aed: 0,
      shelter: 0,
      emergency_evacuation_site: 0,
      hospital: 0,
      childcare: 0,
      wifi: 0,
      public_facility: 0,
      gtfs_stop: 0
    };
    for (const row of rows) next[row.category] += 1;
    return next;
  }, [rows]);

  const geoCount = useMemo(
    () => rows.filter((row) => row.lat !== null && row.lon !== null).length,
    [rows]
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((row) => {
      if (filter !== 'all' && row.category !== filter) return false;
      if (q === '') return true;
      if (row.name_ja.toLowerCase().includes(q)) return true;
      if (row.reading && row.reading.toLowerCase().includes(q)) return true;
      return false;
    });
  }, [rows, filter, query]);

  const groups = LOOKUP_CATEGORIES.filter((cat) => filter === 'all' || filter === cat);

  return (
    <section className="lookup" aria-labelledby="mima-lookup-heading" lang={locale}>
      <h2 id="mima-lookup-heading">{t('heading')}</h2>
      <p className="lede">{t('lede')}</p>
      <p className="note" data-gap-geo={`${geoCount}/${EXPECTED_ROW_COUNT}`}>
        {t('coverage')}
      </p>
      <p className="note">{t('licenseNote')}</p>

      <div className="lookup-toolbar" role="group" aria-label={t('filters')}>
        <button
          type="button"
          className={filter === 'all' ? 'chip is-active' : 'chip'}
          aria-pressed={filter === 'all'}
          data-category="all"
          onClick={() => setFilter('all')}
        >
          <ChipLabel id="all" />
          <span className="count-chip"> {EXPECTED_ROW_COUNT}</span>
        </button>
        {LOOKUP_CATEGORIES.map((cat) => {
          const n = counts[cat];
          const unpublished = n === 0;
          const emergency = EMERGENCY.has(cat);
          return (
            <button
              key={cat}
              type="button"
              className={[
                'chip',
                filter === cat ? 'is-active' : '',
                unpublished ? 'is-empty' : '',
                emergency ? 'is-emergency' : ''
              ]
                .filter(Boolean)
                .join(' ')}
              aria-pressed={filter === cat}
              data-category={cat}
              onClick={() => setFilter(cat)}
            >
              <ChipLabel id={cat} />
              {unpublished ? t('unpublished') : null}
              <span className="count-chip"> {n}</span>
            </button>
          );
        })}
      </div>

      <p>
        <label htmlFor="mima-place-search">{t('searchLabel')}</label>
      </p>
      <input
        id="mima-place-search"
        className="lookup-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t('searchPlaceholder')}
        spellCheck={false}
        autoComplete="off"
      />
      <p className="note" aria-live="polite">
        {t('visibleLabel')} {t('visible', {n: visible.length})}
      </p>

      {groups.map((cat) => {
        const groupRows = visible.filter((row) => row.category === cat);
        const unpublished = counts[cat] === 0;
        return (
          <section key={cat} className="place-group" data-category={cat}>
            <h3>
              <ChipLabel id={cat} />
              <span className="count-chip"> {groupRows.length}</span>
            </h3>
            {unpublished ? <p className="note">{t('unpublishedNote')}</p> : null}
            {groupRows.length === 0 && !unpublished ? (
              <p className="note">{t('empty')}</p>
            ) : null}
            {groupRows.length > 0 ? (
              <ul className="place-list">
                {groupRows.map((row) => (
                  <li key={row.id}>
                    <PlaceCard row={row} />
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        );
      })}
    </section>
  );
}
