import {MIMA_FACILITIES} from '@/data/mima-facilities';
import {
  EXPECTED_CATEGORY_COUNTS,
  EXPECTED_ROW_COUNT,
  MIMA_PACK_JIS,
  PACK_ACCESSED
} from '@/data/facility-schema';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export function GET() {
  return Response.json(
    {
      jis: MIMA_PACK_JIS,
      accessed: PACK_ACCESSED,
      total: EXPECTED_ROW_COUNT,
      counts: EXPECTED_CATEGORY_COUNTS,
      facilities: MIMA_FACILITIES
    },
    {
      headers: {
        'Cache-Control': 'private'
      }
    }
  );
}
