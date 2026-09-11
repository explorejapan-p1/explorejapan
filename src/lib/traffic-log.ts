'use client';

/** First-party traffic stub. No gtag, no GA, no ads pixels. */

export type TrafficEntry = {
  ts: string;
  path: string;
};

export type CountMap = Record<string, number>;

const STORE_KEY = 'explorejapan-p1-traffic';
const VIEWS_KEY = 'explorejapan-p1-facility-views';
const SEARCHES_KEY = 'explorejapan-p1-facility-searches';

function readCounts(key: string): CountMap {
  try {
    const raw = window.localStorage.getItem(key);
    const prev: unknown = raw ? JSON.parse(raw) : {};
    if (!prev || typeof prev !== 'object' || Array.isArray(prev)) return {};
    const out: CountMap = {};
    for (const [id, n] of Object.entries(prev as Record<string, unknown>)) {
      if (typeof n === 'number' && Number.isFinite(n) && n > 0) out[id] = n;
    }
    return out;
  } catch {
    return {};
  }
}

function writeCounts(key: string, counts: CountMap): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(counts));
  } catch {
    // private mode / quota — first-party only
  }
}

function bump(key: string, id: string): CountMap {
  const counts = readCounts(key);
  if (!id) return counts;
  counts[id] = (counts[id] ?? 0) + 1;
  writeCounts(key, counts);
  return counts;
}

export function viewsById(): CountMap {
  if (typeof window === 'undefined') return {};
  return readCounts(VIEWS_KEY);
}

export function searchesById(): CountMap {
  if (typeof window === 'undefined') return {};
  return readCounts(SEARCHES_KEY);
}

/** Facility page view on our homepage (id= in the URL or a card open). */
export function recordFacilityView(id: string): CountMap {
  if (typeof window === 'undefined' || !id) return {};
  return bump(VIEWS_KEY, id);
}

/** Searches for a facility on our site: q matching name_ja. */
export function recordFacilitySearch(
  q: string,
  rows: readonly {id: string; name_ja: string}[]
): CountMap {
  if (typeof window === 'undefined') return searchesById();
  const needle = q.trim().toLowerCase();
  if (!needle) return searchesById();
  const counts = readCounts(SEARCHES_KEY);
  for (const row of rows) {
    if (row.name_ja.toLowerCase().includes(needle)) {
      counts[row.id] = (counts[row.id] ?? 0) + 1;
    }
  }
  writeCounts(SEARCHES_KEY, counts);
  return counts;
}

/**
 * Rank a copy of rows by our homepage traffic, then our name searches.
 * Public-review scores are not in the pack (we do not scrape Google/Tabelog),
 * so when all views+searches for this chip are 0 the sort key is editorial
 * index — TRAVEL_STAY / TRAVEL_DINING array order, onsen/experience pack
 * rows, rankSeeRows for 観光 — until our traffic+search has counts.
 */
export function rankByOurTraffic<T extends {id: string}>(
  rows: readonly T[],
  views: CountMap,
  searches: CountMap
): T[] {
  return rows
    .map((row, editorialIndex) => ({row, editorialIndex}))
    .sort((a, b) => {
      const dv = (views[b.row.id] ?? 0) - (views[a.row.id] ?? 0);
      if (dv !== 0) return dv;
      const ds = (searches[b.row.id] ?? 0) - (searches[a.row.id] ?? 0);
      if (ds !== 0) return ds;
      return a.editorialIndex - b.editorialIndex;
    })
    .map((item) => item.row);
}

export function recordFirstPartyTraffic(path: string): void {
  const entry: TrafficEntry = {ts: new Date().toISOString(), path};
  console.info('[explorejapan-traffic]', entry);
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    const prev: unknown = raw ? JSON.parse(raw) : [];
    const list = Array.isArray(prev) ? prev : [];
    list.push(entry);
    window.localStorage.setItem(STORE_KEY, JSON.stringify(list.slice(-200)));
  } catch {
    // private mode / quota — first-party only
  }
}
