'use client';

import {useSelectedLayoutSegments} from 'next/navigation';
import {Link, usePathname} from '@/i18n/navigation';
import {LocaleSwitcher} from './LocaleSwitcher';
import {BRAND_LOCKUP_SRC, BRAND_NAME_EN, BRAND_NAME_JA} from '@/lib/brand';

type Props = {
  locale: string;
  children: React.ReactNode;
  variant?: 'home' | 'page';
};

export function SiteChrome({locale, children, variant}: Props) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  const pathIsHome = pathname === '/' && segments.length === 0;
  const isHome = variant === 'home' || (variant !== 'page' && pathIsHome);
  const isJa = locale === 'ja';
  const brand = isJa ? `${BRAND_NAME_JA} ${BRAND_NAME_EN}` : `${BRAND_NAME_EN} ${BRAND_NAME_JA}`;
  return (
    <div
      className={isHome ? 'shell shell-home' : 'shell'}
      data-home={isHome ? '' : undefined}
      data-variant={isHome ? 'home' : 'page'}
    >
      <header className="site-header">
        <div className="header-row">
          <Link href="/" className="brand-lockup" aria-label={brand}>
            <img
              src={BRAND_LOCKUP_SRC}
              alt={brand}
              width={1024}
              height={1024}
            />
          </Link>
          <LocaleSwitcher compact={isHome} />
        </div>
      </header>
      <main>{children}</main>
      {isHome ? null : (
        <footer className="site-footer">
          <p className="footer-brand">
            <img src={BRAND_LOCKUP_SRC} alt={brand} width={1024} height={1024} />
          </p>
          <p>
            {isJa
              ? '美馬市から始める、日本の市町村案内。'
              : 'A Japan municipalities guide, starting with Mima City.'}
          </p>
        </footer>
      )}
    </div>
  );
}
