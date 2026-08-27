import {BASE_PATH} from '@/data/mima';
import {PREFECTURES} from '@/data/prefectures';
import {Link} from '@/i18n/navigation';
import {loadJapanMap} from '@/lib/geo';
import {GeoCitation} from './GeoCitation';

type Props = {locale: string; overlay?: string};

export function JapanMap({locale, overlay}: Props) {
  const map = loadJapanMap();
  const isJa = locale === 'ja';

  return (
    <div className="home-map">
      <div className="map-block">
        <div className="map-viewport">
          {map.source === 'placeholder' ? (
            <p className="map-banner" role="status">
              {isJa
                ? 'プレースホルダ地図（N03 形状ではない）'
                : 'Placeholder map (not N03 geometry)'}
            </p>
          ) : null}
          <svg
            className="choropleth"
            viewBox={map.viewBox}
            role="img"
            aria-label={
              isJa
                ? '日本の都道府県地図。県をクリックすると市町村一覧へ。'
                : 'Map of Japan. Click a prefecture for its municipality list.'
            }
            preserveAspectRatio="xMidYMid slice"
          >
            {map.shapes.map((s) => (
              <a
                key={s.slug}
                href={`${BASE_PATH}/${locale}/${s.slug}/`}
                className={s.slug === 'tokushima' ? 'shape is-tokushima' : 'shape'}
              >
                <title>{isJa ? s.nameJa : s.nameEn}</title>
                <path d={s.d} />
              </a>
            ))}
          </svg>
          {overlay ? <p className="home-line">{overlay}</p> : null}
          <GeoCitation source={map.source} locale={locale} variant="tiny" />
        </div>
      </div>
      <details className="name-list-fold">
        <summary>{isJa ? '都道府県' : 'Prefectures'}</summary>
        <nav className="name-list" aria-label={isJa ? '都道府県一覧' : 'Prefecture list'}>
          <ol>
            {PREFECTURES.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`}>{isJa ? p.nameJa : p.nameEn}</Link>
                {p.slug !== 'tokushima' ? (
                  <span className="muted">{isJa ? '（準備中）' : ' (rolling out)'}</span>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
      </details>
    </div>
  );
}
