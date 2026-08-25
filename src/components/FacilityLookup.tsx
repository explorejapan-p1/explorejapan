'use client';

import {useMemo, useState, type ReactNode} from 'react';
import {useTranslations} from 'next-intl';

const CHIP_ORDER = [
  'shelter',
  'emergency_evacuation_site',
  'aed',
  'hospital',
  'tourism',
  'cultural_property',
  'childcare',
  'care',
  'wifi',
  'public_facility',
  'all'
] as const;

type ChipId = (typeof CHIP_ORDER)[number];
type FacilityCategory = Exclude<ChipId, 'all'>;

export type Facility = {
  id: string;
  jis: string;
  name_ja: string;
  reading: string | null;
  category: FacilityCategory;
  lat: number | null;
  lon: number | null;
  address: string | null;
  phone: string | null;
  official_url: string | null;
  hours: string | null;
  source_url: string;
  license: string;
  accessed: string;
};

type Props = {
  locale: 'ja' | 'en';
  facilities: readonly Facility[];
};

function isEmergency(category: FacilityCategory): boolean {
  return (
    category === 'shelter' ||
    category === 'emergency_evacuation_site' ||
    category === 'aed' ||
    category === 'hospital'
  );
}

function isOpenDataLicense(license: string): boolean {
  return license.startsWith('CC BY') && license.includes('Our Open Data');
}

function chipLabel(cat: ChipId, t: (key: string) => string): string {
  switch (cat) {
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
  }
}

function emptyCounts(): Record<FacilityCategory, number> {
  return {
    shelter: 0,
    emergency_evacuation_site: 0,
    aed: 0,
    hospital: 0,
    tourism: 0,
    cultural_property: 0,
    childcare: 0,
    care: 0,
    wifi: 0,
    public_facility: 0
  };
}

function Gap({label}: {label: string}) {
  return <span className="gap">{label}</span>;
}

function Field({label, children}: {label: string; children: ReactNode}) {
  return (
    <div className="facility-field">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export function FacilityLookup({locale, facilities}: Props) {
  const t = useTranslations('lookup');
  const [chip, setChip] = useState<ChipId>('shelter');
  const [query, setQuery] = useState('');
  const total = facilities.length;

  const counts = useMemo(() => {
    const next = emptyCounts();
    for (const row of facilities) {
      next[row.category] += 1;
    }
    return next;
  }, [facilities]);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return facilities.filter((row) => {
      if (chip !== 'all' && row.category !== chip) return false;
      if (needle === '') return true;
      if (row.name_ja.toLowerCase().includes(needle)) return true;
      if (row.reading !== null && row.reading.toLowerCase().includes(needle)) return true;
      return false;
    });
  }, [facilities, chip, query]);

  return (
    <div className="lookup" lang={locale} data-pack-total={total}>
      <div className="lookup-toolbar">
        <div className="lookup-chips" role="radiogroup" aria-label={t('filters')}>
          {CHIP_ORDER.map((id) => {
            const selected = chip === id;
            const n = id === 'all' ? total : counts[id];
            const emergency = id !== 'all' && isEmergency(id);
            return (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={selected}
                className={[
                  'lookup-chip',
                  selected ? 'is-on' : '',
                  emergency ? 'is-emergency' : ''
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setChip(id)}
              >
                <span className="lookup-chip-label">{chipLabel(id, t)}</span>
                <span className="lookup-chip-count">{n}</span>
              </button>
            );
          })}
        </div>
        <p className="lookup-search-row">
          <label htmlFor="mima-facility-search">{t('searchLabel')}</label>
          <input
            id="mima-facility-search"
            className="lookup-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t('searchPlaceholder')}
            autoComplete="off"
            spellCheck={false}
          />
        </p>
        <div className="lookup-meta">
          <p className="lookup-count" aria-live="polite">
            <span className="lookup-count-label">{t('visibleLabel')}</span>{' '}
            {t('visible', {n: visible.length})}
          </p>
        </div>
        <ul className="lookup-tally" aria-label={t('tally')}>
          {CHIP_ORDER.filter((id) => id !== 'all').map((id) => (
            <li key={id}>
              <span>{chipLabel(id, t)}</span> {counts[id]}
            </li>
          ))}
        </ul>
      </div>

      {visible.length === 0 ? (
        <p className="lookup-empty">{t('empty')}</p>
      ) : (
        <ul className="lookup-grid">
          {visible.map((row) => {
            const emergency = isEmergency(row.category);
            const hasGeo = row.lat !== null && row.lon !== null;
            const openData = isOpenDataLicense(row.license);
            return (
              <li key={row.id}>
                <article
                  className={emergency ? 'facility-card is-emergency' : 'facility-card'}
                  data-category={row.category}
                >
                  <p className={emergency ? 'facility-cat is-emergency' : 'facility-cat'}>
                    {chipLabel(row.category, t)}
                  </p>
                  <h3>{row.name_ja}</h3>
                  {row.reading ? <p className="facility-reading">{row.reading}</p> : null}
                  <dl className="facility-dl">
                    <Field label={t('address')}>
                      {row.address ? row.address : <Gap label={t('gap')} />}
                    </Field>
                    <Field label={t('phone')}>
                      {row.phone ? row.phone : <Gap label={t('gap')} />}
                    </Field>
                    <Field label={t('hours')}>
                      {row.hours ? row.hours : <Gap label={t('gap')} />}
                    </Field>
                    <Field label={t('official')}>
                      {row.official_url ? (
                        <a href={row.official_url} rel="noreferrer">
                          {row.official_url.replace(/^https?:\/\//, '')}
                        </a>
                      ) : (
                        <Gap label={t('gap')} />
                      )}
                    </Field>
                    <Field label={t('source')}>
                      <a href={row.source_url} rel="noreferrer">
                        {t('sourceLink')}
                      </a>
                    </Field>
                    <Field label={t('geo')}>
                      {hasGeo ? (
                        <span>
                          {row.lat}, {row.lon}
                        </span>
                      ) : (
                        <Gap label={t('gap')} />
                      )}
                    </Field>
                    <Field label={t('license')}>
                      <span className={openData ? 'license-short is-cc' : 'license-short is-city'}>
                        {openData ? t('licenseOpendata') : t('licenseCity')}
                      </span>
                    </Field>
                  </dl>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
