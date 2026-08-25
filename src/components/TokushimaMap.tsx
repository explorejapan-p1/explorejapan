import {TOKUSHIMA_MUNICIPALITIES} from '@/data/tokushima-municipalities';
import {Link} from '@/i18n/navigation';
import {loadTokushimaMap} from '@/lib/geo';
import {GeoCitation} from './GeoCitation';

type Props = {locale: string};

export function TokushimaMap({locale}: Props) {
  const map = loadTokushimaMap();
  const isJa = locale === 'ja';

  return (
    <div className="map-block">
      {map.source === 'placeholder' ? (
        <p className="map-banner" role="status">
          {isJa
            ? 'プレースホルダ地図（N03 形状ではない）· 美馬市だけ本文ページがあります'
            : 'Placeholder map (not N03 geometry) · only Mima has a full page'}
        </p>
      ) : null}
      <div className="map-grid">
        <svg
          className="choropleth"
          viewBox={map.viewBox}
          role="img"
          aria-label={isJa ? '徳島県の市町村地図' : 'Map of Tokushima municipalities'}
        >
          {map.shapes.map((s) => (
            <a
              key={s.slug}
              href={`/${locale}/tokushima/${s.slug}`}
              className={s.slug === 'mima' ? 'shape is-mima' : 'shape'}
            >
              <title>{isJa ? s.nameJa : s.nameEn}</title>
              <path d={s.d} />
            </a>
          ))}
        </svg>
        <nav className="name-list" aria-label={isJa ? '市町村一覧' : 'Municipality list'}>
          <ol>
            {TOKUSHIMA_MUNICIPALITIES.map((m) => (
              <li key={m.slug}>
                <Link href={`/tokushima/${m.slug}`}>{isJa ? m.nameJa : m.nameEn}</Link>
                {m.status === 'coming-soon' ? (
                  <span className="muted">{isJa ? '（準備中）' : ' (coming soon)'}</span>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <GeoCitation source={map.source} locale={locale} />
    </div>
  );
}
