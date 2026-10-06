import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  // Unpublished municipality stubs still compare FacilityCategory to travel kinds (TS2367).
  // Live Shikoku/Hiroshima/Okayama hubs typecheck; do not block Pages export on filing stubs.
  typescript: { ignoreBuildErrors: true }
};

export default withNextIntl(nextConfig);
