import {publicOfferPayload} from '@/lib/website-offer';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * Armed, no-send status only. pending stays [].
 * Does not expose business emails (we do not have them).
 * GET only — no mail POST.
 */
export function GET() {
  return Response.json(publicOfferPayload(), {
    headers: {
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex, nofollow'
    }
  });
}
