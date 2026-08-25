import {Link} from '@/i18n/navigation';
import {LocaleSwitcher} from './LocaleSwitcher';

type Props = {
  locale: string;
  children: React.ReactNode;
};

export function SiteChrome({locale, children}: Props) {
  const isJa = locale === 'ja';
  return (
    <div className="shell">
      <header className="site-header">
        <p className="hold-banner">
          {isJa
            ? '未公開 v0 · インデックスしません · Pages / SNS / 広告なし'
            : 'Unpublished v0 · noindex · no GitHub Pages, SNS, or ads'}
        </p>
        <div className="header-row">
          <Link href="/" className="wordmark">
            {isJa ? '日本の農村ディレクトリ' : 'Rural Japan Directory'}
          </Link>
          <LocaleSwitcher />
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>
          {isJa
            ? 'Project 1 · 美馬市から始める地方ディレクトリ。公開・DNS・派生地形データの再配布は別ゲート。'
            : 'Project 1 · a rural directory starting with Mima City. Public DNS and redistributing derived geo are gated.'}
        </p>
      </footer>
    </div>
  );
}
