/**
 * Website-offer engine: logged, held, never sent.
 * Scans TRAVEL_DINING + TRAVEL_STAY + pack rows with empty or weak official_url.
 * Does not invent names. Commerce chip stays 0. Does not write jsonl packs.
 * Identity: Explore Japan / explorejapan-p1. No personal names in copy.
 * No mail transport, no SMTP, no fetch-to-email.
 */

import {MIMA_FACILITIES} from '@/data/mima-facilities';
import type {FacilityCategory, FacilityRow} from '@/data/facility-schema';
import {TRAVEL_DINING, TRAVEL_STAY, type TravelRow} from '@/data/mima-travel';

export const OFFER_ARMED = true;
export const OFFER_SEND = false;

export const OFFER_ACCESSED = '2026-08-27' as const;

/** Held ledger. Not the frozen 515-row pack. Never write jsonl here. */
export const OFFER_LOG_PATH = 'data/website-offer-log.json';

export type OfferReason = 'no-site' | 'weak-site';

export type OfferDraft = {
  id: string;
  name_ja: string;
  source_url: string;
  reason: OfferReason;
  status: 'held';
  accessed: typeof OFFER_ACCESSED;
};

/**
 * Civic inventory is not a brochure-site customer.
 * AED / shelters / Wi-Fi / stops stay in the pack; they are not offer rows.
 */
const SKIP_OFFER_CATEGORIES: ReadonlySet<FacilityCategory> = new Set([
  'aed',
  'shelter',
  'emergency_evacuation_site',
  'wifi',
  'gtfs_stop'
]);

const WEAK_OFFICIAL_HOSTS: ReadonlySet<string> = new Set([
  'www.city.mima.lg.jp',
  'city.mima.lg.jp',
  'opendata.pref.tokushima.lg.jp'
]);

function isBlank(value: string | null | undefined): boolean {
  return value === null || value === undefined || value.trim() === '';
}

/** City CMS / open-data catalog is not the place's own site. */
export function classifyOfficialUrl(
  url: string | null | undefined
): OfferReason | null {
  if (isBlank(url)) return 'no-site';
  let host = '';
  try {
    host = new URL(url!.trim()).hostname;
  } catch {
    return 'weak-site';
  }
  if (WEAK_OFFICIAL_HOSTS.has(host)) return 'weak-site';
  return null;
}

function travelDraft(row: TravelRow): OfferDraft {
  return {
    id: row.id,
    name_ja: row.name_ja,
    source_url: row.source_url,
    reason: 'no-site',
    status: 'held',
    accessed: OFFER_ACCESSED
  };
}

function packDraft(row: FacilityRow, reason: OfferReason): OfferDraft {
  return {
    id: row.id,
    name_ja: row.name_ja,
    source_url: row.source_url,
    reason,
    status: 'held',
    accessed: OFFER_ACCESSED
  };
}

/**
 * Build held drafts from existing names only. No emails.
 * Phones/addresses stay on stay rows in travel data; not copied here.
 */
export function collectOfferDrafts(
  pack: readonly FacilityRow[] = MIMA_FACILITIES
): OfferDraft[] {
  const drafts: OfferDraft[] = [];
  for (const row of TRAVEL_DINING) drafts.push(travelDraft(row));
  for (const row of TRAVEL_STAY) drafts.push(travelDraft(row));
  for (const row of pack) {
    if (SKIP_OFFER_CATEGORIES.has(row.category)) continue;
    const reason = classifyOfficialUrl(row.official_url);
    if (reason === null) continue;
    drafts.push(packDraft(row, reason));
  }
  return drafts;
}

export const OFFER_DRAFTS: readonly OfferDraft[] = collectOfferDrafts();

/** Japanese first. Short, specific, not spammy. No mail is sent. */
export const OFFER_TEMPLATE_JA = `{name_ja} さま

美馬市の公開案内に「{name_ja}」とあります。Explore Japan は未公開の地方ディレクトリです。こちらに公式サイトが無いので、短い紹介ページ（日本語と英語）を置く案だけ、下書きに残しています。

ご不要なら無視してください。この段階では送っていません。

Explore Japan
`;

export const OFFER_TEMPLATE_EN = `{name_ja},

Your name is on Mima City's public listings. Explore Japan is an unpublished rural directory. We do not have an official website on file, so we only held a draft: a short Japanese/English page, if you want one.

Please ignore if this is not useful. Nothing has been sent.

Explore Japan
`;

export function renderOfferBody(name_ja: string, locale: 'ja' | 'en'): string {
  const template = locale === 'en' ? OFFER_TEMPLATE_EN : OFFER_TEMPLATE_JA;
  return template.replaceAll('{name_ja}', name_ja);
}

/**
 * Hard send guard. Mail APIs are not imported and must not be added here.
 * Flip OFFER_SEND only in a later unpublished commit that also adds a transport.
 */
export function sendHeldOffers(): {sent: number} {
  if (!OFFER_SEND) return {sent: 0};
  return {sent: 0};
}

export function publicOfferPayload(): {
  armed: true;
  sent: 0;
  pending: [];
} {
  sendHeldOffers();
  return {armed: true, sent: 0, pending: []};
}
