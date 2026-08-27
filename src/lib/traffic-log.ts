'use client';

/** First-party traffic stub. No gtag, no GA, no ads pixels. */

export type TrafficEntry = {
  ts: string;
  path: string;
};

const STORE_KEY = 'explorejapan-p1-traffic';

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
