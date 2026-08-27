'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

type Props = {
  compact?: boolean;
};

export function LocaleSwitcher({compact = false}: Props) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: 'ja' | 'en') {
    router.replace(pathname, {locale: next});
  }

  return (
    <nav className={compact ? 'lang-switch is-compact' : 'lang-switch'} aria-label="Language">
      <button
        type="button"
        className={locale === 'ja' ? 'is-active' : undefined}
        aria-current={locale === 'ja' ? 'true' : undefined}
        aria-label="日本語"
        onClick={() => switchTo('ja')}
      >
        {compact ? 'JA' : '日本語'}
      </button>
      <span aria-hidden="true">·</span>
      <button
        type="button"
        className={locale === 'en' ? 'is-active' : undefined}
        aria-current={locale === 'en' ? 'true' : undefined}
        aria-label="English"
        onClick={() => switchTo('en')}
      >
        {compact ? 'EN' : 'English'}
      </button>
    </nav>
  );
}
