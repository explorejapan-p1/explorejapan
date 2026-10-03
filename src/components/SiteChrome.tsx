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
  if (isHome) {
    const prefs = isJa
      ? [
          ['tokushima', '徳島'],
          ['kagawa', '香川'],
          ['kochi', '高知'],
          ['ehime', '愛媛'],
          ['hiroshima', '広島'],
          ['okayama', '岡山']
        ]
      : [
          ['tokushima', 'Tokushima'],
          ['kagawa', 'Kagawa'],
          ['kochi', 'Kochi'],
          ['ehime', 'Ehime'],
          ['hiroshima', 'Hiroshima'],
          ['okayama', 'Okayama']
        ];
    return (
      <div className="shell shell-door" data-variant="home">
        <header className="door-mast">
          <div className="door-mast-inner">
            <Link href="/" className="door-brand">
              BokenJapan
            </Link>
            <nav className="door-nav" aria-label={isJa ? '市町村' : 'Directory'}>
              {prefs.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
              <LocaleSwitcher />
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="door-foot">
          <p className="door-wordmark">BokenJapan</p>
          <nav className="door-foot-nav" aria-label={isJa ? '市町村' : 'Directory'}>
            {prefs.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <p>
            {isJa
              ? '公開中の市町村ページへの案内。'
              : 'Links to municipality pages that are already up.'}
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="shell" data-variant="page">
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
          <LocaleSwitcher />
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p className="footer-brand">
          <img src={BRAND_LOCKUP_SRC} alt={brand} width={1024} height={1024} />
        </p>
        <p>
          {isJa
            ? '日本の市町村案内。'
            : 'A Japan municipalities guide.'}
        </p>
      </footer>
    </div>
  );
}
