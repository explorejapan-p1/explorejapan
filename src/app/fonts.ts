import {Inter, Noto_Sans_JP} from 'next/font/google';

export const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ja',
  preload: true
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-en',
  preload: true
});
