'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: 'ja' | 'en') {
    router.replace(pathname, {locale: next});
  }

  return (
    <nav className="lang-switch" aria-label="Language">
      <button
        type="button"
        className={locale === 'ja' ? 'is-active' : undefined}
        aria-current={locale === 'ja' ? 'true' : undefined}
        onClick={() => switchTo('ja')}
      >
        日本語
      </button>
      <span aria-hidden="true">·</span>
      <button
        type="button"
        className={locale === 'en' ? 'is-active' : undefined}
        aria-current={locale === 'en' ? 'true' : undefined}
        onClick={() => switchTo('en')}
      >
        English
      </button>
    </nav>
  );
}
