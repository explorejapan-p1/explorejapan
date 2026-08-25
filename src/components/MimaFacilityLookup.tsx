import {useTranslations} from 'next-intl';
import {
  EXPECTED_CATEGORY_COUNTS,
  EXPECTED_GEO_COUNT,
  EXPECTED_ROW_COUNT,
  LOOKUP_CATEGORIES,
  licenseKind,
  type FacilityCategory,
  type FacilityGapBoard,
  type FacilityRow,
  type MimaOfficialMap
} from '@/data/facility-schema';
import {MIMA, MIMA_PLACE_PHOTO} from '@/data/mima';

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

type FilterId = 'all' | FacilityCategory;

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

function isBlank(value: string | null): boolean {
  return value === null || value.trim() === '';
}

function placementFromHours(hours: string | null): string | null {
  if (hours === null) return null;
  const marker = '設置位置:';
  const index = hours.indexOf(marker);
  if (index === -1) return null;
  const text = hours.slice(index + marker.length);
  return text === '' ? null : text;
}

function displayPlacement(hours: string | null): string | null {
  const raw = placementFromHours(hours);
  if (raw === null) return null;
  const cleaned = raw.replaceAll('_x000d_', '').replace(/[\r\n]+/g, '').trim();
  return cleaned === '' ? null : cleaned;
}

function readingMismatchHit(row: FacilityRow, q: string): boolean {
  if (q === '') return false;
  if (row.name_ja.toLowerCase().includes(q)) return false;
  return row.reading !== null && row.reading.toLowerCase().includes(q);
}

function chipHref(next: FilterId, q: string, locale: string, id?: string): string {
  const path = `/${locale}/tokushima/mima`;
  const parts: string[] = [];
  if (next !== 'all') parts.push(`c=${encodeURIComponent(next)}`);
  if (q) parts.push(`q=${encodeURIComponent(q)}`);
  if (id) parts.push(`id=${encodeURIComponent(id)}`);
  const qs = parts.length ? `?${parts.join('&')}` : '';
  return `${path}${qs}#mima-place-results`;
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

function chipClass(active: boolean, extra = ''): string {
  return ['chip', active ? 'is-active' : '', extra].filter(Boolean).join(' ');
}

export function MimaFacilityLookup({
  locale,
  gaps,
  map,
  rows,
  filter,
  query,
  engaged,
  openId
}: Props) {
  const t = useTranslations('lookup');

  const legendCats: FacilityCategory[] = [];
  const seen = new Set<FacilityCategory>();
  for (const point of map.points) {
    if (seen.has(point.category)) continue;
    seen.add(point.category);
    legendCats.push(point.category);
  }

  const missingGeo = gaps.total - gaps.geo;

  const q = query.trim().toLowerCase();
  const nameHitExists =
    q !== '' && rows.some((row) => row.name_ja.toLowerCase().includes(q));
  const filtered = rows.filter((row) => {
    if (filter !== 'all' && row.category !== filter) return false;
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
  });
  const pinned = openId ? filtered.find((row) => row.id === openId) : undefined;
  const visible = pinned
    ? [pinned, ...filtered.filter((row) => row.id !== openId)]
    : filtered;
  const shown = engaged ? visible : [];

  return (
    <section className="lookup" aria-labelledby="mima-lookup-heading" lang={locale}>
      <div className="hero-fold">
      <div className="hero-copy">
        <h1>
          {locale === 'ja' ? `${MIMA.nameJa}（${MIMA.prefectureJa}）` : `${MIMA.nameEn}, ${MIMA.prefectureEn}`}
        </h1>
        <p className="lede">
          {locale === 'ja' ? 'うだつの町並みと、穴吹川。' : 'Udatsu townscape, and the Anabuki River.'}
        </p>
      <div className="lookup-toolbar" role="group" aria-label={t('filters')}>
        <a
          className={chipClass(engaged && filter === 'all')}
          href={chipHref('all', query, locale)}
          data-category="all"
        >
          <ChipLabel id="all" />
          <span className="count-chip"> {EXPECTED_ROW_COUNT}</span>
        </a>
        {EMERGENCY_CHIPS.map((cat) => {
          const n = EXPECTED_CATEGORY_COUNTS[cat];
          return (
            <a
              key={cat}
              className={chipClass(engaged && filter === cat, 'is-emergency')}
              href={chipHref(cat, query, locale)}
              data-category={cat}
            >
              <ChipLabel id={cat} />
              <span className="count-chip"> {n}</span>
            </a>
          );
        })}
      </div>
      </div>
        <figure className="hero-photo">
          <img
            src={MIMA_PLACE_PHOTO.src}
            width={1920}
            height={1163}
            alt={locale === 'ja' ? MIMA_PLACE_PHOTO.altJa : MIMA_PLACE_PHOTO.altEn}
          />
          <figcaption className="photo-cite">
            {t('photoCite')}{' '}
            <a href={MIMA_PLACE_PHOTO.commons}>Wikimedia Commons</a>
            {' / '}
            <a href={MIMA_PLACE_PHOTO.licenseUrl}>{MIMA_PLACE_PHOTO.license}</a>
            {' / '}
            <a href={MIMA_PLACE_PHOTO.authorUrl}>{MIMA_PLACE_PHOTO.author}</a>
          </figcaption>
        </figure>
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
                <a href={chipHref(point.category, '', locale, point.id)}>
                  <circle
                    className={dotClass(point.category) + (openId === point.id ? ' is-active' : '')}
                    r={openId === point.id ? 5.5 : 4}
                    aria-label={point.name_ja}
                  >
                    <title>{point.name_ja}</title>
                  </circle>
                </a>
              </g>
            ))}
          </svg>
        </div>
      </div>
      <h2 id="mima-lookup-heading">{t('heading')}</h2>
      <form
        className="lookup-search-row"
        method="get"
        action={`/${locale}/tokushima/mima`}
      >
        {filter !== 'all' ? <input type="hidden" name="c" value={filter} /> : null}
        <label htmlFor="mima-place-search">{t('searchLabel')}</label>
        <div className="search-field">
          <input
            id="mima-place-search"
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

      <div className="lookup-toolbar lookup-toolbar-rest" role="group" aria-label={t('tally')}>
        {LOOKUP_CATEGORIES.filter(
          (cat) => !EMERGENCY.has(cat) && EXPECTED_CATEGORY_COUNTS[cat] !== 0
        ).map((cat) => {
          const n = EXPECTED_CATEGORY_COUNTS[cat];
          return (
            <a
              key={cat}
              className={chipClass(engaged && filter === cat)}
              href={chipHref(cat, query, locale)}
              data-category={cat}
            >
              <ChipLabel id={cat} />
              <span className="count-chip"> {n}</span>
            </a>
          );
        })}
      </div>

      <div id="mima-place-results">
        {!engaged ? <p className="note">{t('idleHint')}</p> : null}
        {engaged ? (
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
            {shown.map((row) => {
              const placement = displayPlacement(row.hours);
              const yomiMismatch = readingMismatchHit(row, q);
              return (
                <details key={row.id} open={openId === row.id}>
                  <summary className="place-row">
                    <span className="place-name">{row.name_ja}</span>
                    <span className="place-cat">
                      <ChipLabel id={row.category} />
                    </span>
                    {placement ? <span className="place-sub">{placement}</span> : null}
                    {yomiMismatch ? (
                      <span className="place-sub">
                        {t('reading')}: {row.reading}
                      </span>
                    ) : null}
                    {yomiMismatch ? (
                      <span className="place-sub">{t('readingPackNote')}</span>
                    ) : null}
                  </summary>
                  <PlaceCard row={row} />
                </details>
              );
            })}
          </>
        ) : null}
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
    </section>
  );
}
