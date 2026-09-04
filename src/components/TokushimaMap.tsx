import {BASE_PATH} from '@/data/mima';
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
            ? 'プレースホルダ地図（N03 形状ではない）· 本文があるのは徳島市・美馬市・つるぎ町・吉野川市・三好市'
            : 'Placeholder map (not N03 geometry) · full pages: Tokushima City, Mima, Tsurugi, Yoshinogawa, Miyoshi'}
        </p>
      ) : null}
      <div className="map-grid">
        <svg
          className="choropleth"
          viewBox={map.viewBox}
          role="img"
          aria-label={isJa ? '徳島県の市町村地図' : 'Map of Tokushima municipalities'}
        >
          {map.shapes.map((s) => {
            const muni = TOKUSHIMA_MUNICIPALITIES.find((m) => m.slug === s.slug);
            const ready = muni?.status === 'ready';
            return (
            <a
              key={s.slug}
              href={`${BASE_PATH}/${locale}/tokushima/${s.slug}/`}
              className={ready ? 'shape is-ready' : 'shape'}
            >
              <title>{isJa ? s.nameJa : s.nameEn}</title>
              <path d={s.d} />
            </a>
            );
          })}
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
