'use client';

import {Link, usePathname} from '@/i18n/navigation';
import {LocaleSwitcher} from './LocaleSwitcher';

type Props = {
  locale: string;
  children: React.ReactNode;
  variant?: 'home' | 'page';
};

export function SiteChrome({locale, children, variant}: Props) {
  const pathname = usePathname();
  const isHome = variant ? variant === 'home' : pathname === '/';
  const isJa = locale === 'ja';
  return (
    <div className="shell" data-home={isHome ? '' : undefined} data-variant={isHome ? 'home' : 'page'}>
      <header className="site-header">
        {isHome ? null : (
          <p className="hold-banner">
            {isJa ? 'SNS / 広告なし' : 'No SNS or ads'}
          </p>
        )}
        <div className="header-row">
          <Link href="/" className="wordmark">
            {isJa ? '日本の農村ディレクトリ' : 'Rural Japan Directory'}
          </Link>
          <LocaleSwitcher compact={isHome} />
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
