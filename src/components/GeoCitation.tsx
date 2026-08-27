import {N03_CITATION} from '@/data/mima';

type Props = {
  source: 'n03' | 'placeholder';
  locale: string;
  variant?: 'default' | 'tiny';
};

export function GeoCitation({source, locale, variant = 'default'}: Props) {
  const isJa = locale === 'ja';
  if (variant === 'tiny') {
    return (
      <footer className="geo-cite geo-cite-tiny">
        <p>
          <span className="geo-cite-label">{isJa ? '出典' : 'Source'}</span>
          {isJa ? '国土数値情報（行政区域）' : 'NLNI Administrative Zones'}{' '}
          <a href={N03_CITATION.url} title={N03_CITATION.gsiNote}>
            {N03_CITATION.vintage}
          </a>
          {' / '}
          {N03_CITATION.license}
          {source === 'placeholder' ? (isJa ? ' · プレースホルダ' : ' · placeholder') : null}
        </p>
      </footer>
    );
  }
  return (
    <footer className="geo-cite">
      <p>
        <span className="geo-cite-label">{isJa ? '出典' : 'Source'}</span>
        {isJa ? N03_CITATION.productJa : N03_CITATION.productEn}（
        <a href={N03_CITATION.url}>{N03_CITATION.vintage}</a> / {N03_CITATION.license}）
      </p>
      <p className="geo-cite-note">{N03_CITATION.gsiNote}</p>
      {source === 'placeholder' ? (
        <p className="geo-cite-placeholder" role="status">
          {isJa
            ? '地図はプレースホルダです。MLIT N03 2026 の派生 TopoJSON はリポジトリに含めず、ローカルで scripts/build-n03.mjs を実行すると実形状に切り替わります。'
            : 'Placeholder map. Derived MLIT N03 2026 TopoJSON is not in git; run scripts/build-n03.mjs locally to swap in real shapes.'}
        </p>
      ) : (
        <p className="geo-cite-note">
          {isJa
            ? 'この地図は行政界の目安であり、境界の確定図ではありません。未確定境界を含みます。'
            : 'Indicative administrative boundaries, not a legal cadastre. Some lines are provisional.'}
        </p>
      )}
    </footer>
  );
}
