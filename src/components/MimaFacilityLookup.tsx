'use client';

import {useMemo, useState} from 'react';
import {
  CATEGORY_LABEL,
  EXPECTED_CATEGORY_COUNTS,
  EXPECTED_ROW_COUNT,
  LOOKUP_CATEGORIES,
  MIMA_PACK_JIS,
  licenseKind,
  type FacilityCategory,
  type FacilityRow
} from '@/data/facility-schema';

type Props = {
  locale: string;
  rows: readonly FacilityRow[];
};

type FilterId = 'all' | FacilityCategory;

function isBlank(value: string | null): boolean {
  return value === null || value.trim() === '';
}

function Missing({isJa}: {isJa: boolean}) {
  return <span className="missing">{isJa ? '未掲載' : 'not published'}</span>;
}

function TextField({
  label,
  value,
  isJa
}: {
  label: string;
  value: string | null;
  isJa: boolean;
}) {
  return (
    <p className="attr-row">
      <span className="attr-label">{label}</span>
      {isBlank(value) ? <Missing isJa={isJa} /> : <span>{value}</span>}
    </p>
  );
}

function PlaceCard({row, isJa}: {row: FacilityRow; isJa: boolean}) {
  const labels = isJa ? CATEGORY_LABEL.ja : CATEGORY_LABEL.en;
  const kind = licenseKind(row.license);
  const kindLabel =
    kind === 'cc_by_open_data'
      ? 'CC BY Our Open Data'
      : isJa
        ? '市公式サイト掲載情報'
        : 'City website listing';
  const hasGeo = row.lat !== null && row.lon !== null;
  return (
    <article className="place-card" data-place-id={row.id} data-category={row.category}>
      <h4>{row.name_ja}</h4>
      <p className="attr-row">
        <span className="attr-label">{isJa ? '区分' : 'Category'}</span>
        <span>{labels[row.category]}</span>
      </p>
      <TextField label={isJa ? '読み' : 'Reading'} value={row.reading} isJa={isJa} />
      <TextField label={isJa ? '住所' : 'Address'} value={row.address} isJa={isJa} />
      <TextField label={isJa ? '電話' : 'Phone'} value={row.phone} isJa={isJa} />
      <TextField label={isJa ? '時間' : 'Hours'} value={row.hours} isJa={isJa} />
      <p className="attr-row">
        <span className="attr-label">{isJa ? '緯度経度' : 'Lat / lon'}</span>
        {hasGeo ? (
          <span>
            {row.lat}, {row.lon}
          </span>
        ) : (
          <Missing isJa={isJa} />
        )}
      </p>
      <p className="attr-row">
        <span className="attr-label">{isJa ? '公式URL' : 'Official URL'}</span>
        {row.official_url && !isBlank(row.official_url) ? (
          <a href={row.official_url}>{row.official_url}</a>
        ) : (
          <Missing isJa={isJa} />
        )}
      </p>
      <p className="attr-row">
        <span className="attr-label">{isJa ? '出典URL' : 'Source URL'}</span>
        <a href={row.source_url}>{row.source_url}</a>
      </p>
      <p className="attr-row">
        <span className="attr-label">{isJa ? 'ライセンス' : 'License'}</span>
        <span className={kind === 'cc_by_open_data' ? 'license-cc' : 'license-city'}>
          {kindLabel}
        </span>
      </p>
      <p className="attr-row sources">{row.license}</p>
      <p className="attr-row">
        <span className="attr-label">{isJa ? '取得日' : 'Accessed'}</span>
        <span>{row.accessed}</span>
      </p>
    </article>
  );
}

export function MimaFacilityLookup({locale, rows}: Props) {
  const isJa = locale === 'ja';
  const labels = isJa ? CATEGORY_LABEL.ja : CATEGORY_LABEL.en;
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
  const hoursCount = useMemo(() => rows.filter((row) => !isBlank(row.hours)).length, [rows]);

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
    <section className="lookup" aria-labelledby="mima-lookup-heading">
      <h2 id="mima-lookup-heading">{isJa ? '施設を探す' : 'Look up a place'}</h2>
      <p>
        {isJa
          ? `いま探せる施設は ${EXPECTED_ROW_COUNT} 件です。JIS ${MIMA_PACK_JIS} の凍結パックだけを使います。`
          : `${EXPECTED_ROW_COUNT} places you can look up. Frozen pack for JIS ${MIMA_PACK_JIS} only.`}
      </p>
      <p className="note">
        {isJa
          ? '避難所、緊急避難場所、AED、病院、観光などを名前で絞ります。同じ場所が複数の区分に出ることがあります。行は分けたままです。'
          : 'Filter shelters, emergency evacuation sites, AEDs, hospitals, and tourism by name. The same site can show up in more than one category. Rows stay separate.'}
      </p>
      <p className="note">
        {isJa
          ? '欠けている項目は未掲載と出します。緯度経度は推測しません。施設を足していません。'
          : "Missing fields say not published. We don't guess lat/lon. We didn't invent a facility to fill a hole."}
      </p>
      <p className="note" data-gap-geo={`${geoCount}/${EXPECTED_ROW_COUNT}`}>
        {isJa
          ? `公式の緯度経度は ${geoCount}/${EXPECTED_ROW_COUNT} 件。時間は ${hoursCount}/${EXPECTED_ROW_COUNT} 件。`
          : `Official lat/lon: ${geoCount}/${EXPECTED_ROW_COUNT}. Hours: ${hoursCount}/${EXPECTED_ROW_COUNT}.`}
      </p>
      <p className="note" data-category="gtfs_stop">
        {isJa
          ? `停留所（GTFS）は ${EXPECTED_CATEGORY_COUNTS.gtfs_stop} 件で未公開です。作っていません。`
          : `Transit stops (GTFS) are unpublished: ${EXPECTED_CATEGORY_COUNTS.gtfs_stop} rows. We didn't invent any.`}
      </p>

      <div className="lookup-toolbar" role="group" aria-label={isJa ? '区分' : 'Category'}>
        <button
          type="button"
          className={filter === 'all' ? 'chip is-active' : 'chip'}
          aria-pressed={filter === 'all'}
          data-category="all"
          onClick={() => setFilter('all')}
        >
          {isJa ? 'すべて' : 'All'}
          <span className="count-chip"> {EXPECTED_ROW_COUNT}</span>
        </button>
        {LOOKUP_CATEGORIES.map((cat) => {
          const n = counts[cat];
          const unpublished = n === 0;
          return (
            <button
              key={cat}
              type="button"
              className={[
                'chip',
                filter === cat ? 'is-active' : '',
                unpublished ? 'is-empty' : ''
              ]
                .filter(Boolean)
                .join(' ')}
              aria-pressed={filter === cat}
              data-category={cat}
              onClick={() => setFilter(cat)}
            >
              {labels[cat]}
              {unpublished
                ? isJa
                  ? '（未公開）'
                  : ' (unpublished)'
                : null}
              <span className="count-chip"> {n}</span>
            </button>
          );
        })}
      </div>

      <p>
        <label htmlFor="mima-place-search">{isJa ? '名前で検索' : 'Search by name'}</label>
      </p>
      <input
        id="mima-place-search"
        className="lookup-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={isJa ? '施設名または読み' : 'Place name or reading'}
        autoComplete="off"
      />
      <p className="note" aria-live="polite">
        {isJa ? `${visible.length} / ${EXPECTED_ROW_COUNT} 件` : `${visible.length} / ${EXPECTED_ROW_COUNT} places`}
      </p>

      {groups.map((cat) => {
        const groupRows = visible.filter((row) => row.category === cat);
        const unpublished = counts[cat] === 0;
        return (
          <section key={cat} className="place-group" data-category={cat}>
            <h3>
              {labels[cat]}
              <span className="count-chip"> {groupRows.length}</span>
            </h3>
            {unpublished ? (
              <p className="note">
                {isJa
                  ? 'この区分は未公開です。行はありません。'
                  : "This category is unpublished. There aren't any rows."}
              </p>
            ) : null}
            {groupRows.length === 0 && !unpublished ? (
              <p className="note">{isJa ? '一致する場所はありません。' : 'No matching places.'}</p>
            ) : null}
            {groupRows.length > 0 ? (
              <ul className="place-list">
                {groupRows.map((row) => (
                  <li key={row.id}>
                    <PlaceCard row={row} isJa={isJa} />
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
