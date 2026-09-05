import {geoMercator, geoPath} from 'd3-geo';
import type {Feature, FeatureCollection, Geometry} from 'geojson';
import fs from 'node:fs';
import path from 'node:path';
import {feature} from 'topojson-client';
import type {GeometryCollection, Topology} from 'topojson-specification';
import {
  MIMA_PACK_JIS,
  type MimaOfficialMap,
  type OfficialMapPoint
} from '@/data/facility-schema';
import {
  JAPAN_SCHEMATIC,
  JAPAN_VIEWBOX,
  TOKUSHIMA_SCHEMATIC,
  TOKUSHIMA_VIEWBOX,
  type SchematicBlock
} from '@/data/placeholder-japan';
import {PREFECTURE_BY_JIS, PREFECTURE_BY_SLUG, PREFECTURES} from '@/data/prefectures';
import {
  MUNICIPALITY_BY_JIS,
  MUNICIPALITY_BY_SLUG,
  TOKUSHIMA_MUNICIPALITIES
} from '@/data/tokushima-municipalities';

export type MapSource = 'n03' | 'placeholder';

export type RenderedShape = {
  slug: string;
  jis: string;
  nameJa: string;
  nameEn: string;
  d: string;
  status?: 'ready' | 'coming-soon' | 'rolling-out';
};

export type RenderedMap = {
  source: MapSource;
  viewBox: string;
  shapes: RenderedShape[];
  width: number;
  height: number;
};

const DERIVED_DIR = path.join(process.cwd(), 'data', 'derived');
const JAPAN_MAP_LITE_JSON = path.join(process.cwd(), 'src', 'data', 'japan-map-lite.json');
const SCATTER_WIDTH = 880;
const SCATTER_HEIGHT = 320;

function readTopo(filename: string): Topology | null {
  const file = path.join(DERIVED_DIR, filename);
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8')) as Topology;
  } catch {
    return null;
  }
}

function objectName(topo: Topology): string {
  return Object.keys(topo.objects)[0] ?? '';
}

function asCollection(topo: Topology): FeatureCollection {
  const name = objectName(topo);
  const obj = topo.objects[name] as GeometryCollection;
  const fc = feature(topo, obj) as FeatureCollection;
  return fc;
}

function propsOf(f: Feature<Geometry, Record<string, string | undefined>>) {
  const p = f.properties ?? {};
  return p;
}

function schematicPath(b: SchematicBlock): string {
  return `M${b.x} ${b.y}h${b.w}v${b.h}h${-b.w}z`;
}

type JapanMapLiteFile = {
  source?: string;
  viewBox?: string;
  width?: number;
  height?: number;
  shapes?: Array<{slug: string; jis: string; nameJa: string; nameEn: string; d: string}>;
};

function withPrefStatus(shapes: RenderedShape[]): RenderedShape[] {
  return shapes.map((s) => ({
    ...s,
    status: s.slug === 'tokushima' ? 'ready' : 'rolling-out'
  }));
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

const PATH_CMD = /([MLZmlz])|(-?\d*\.?\d+(?:e[-+]?\d+)?)/g;
/** Landscape cover used by the homepage pixel gate (slice will match this). */
const COVER_ASPECT = 1440 / 900;

type BBox = {minX: number; minY: number; maxX: number; maxY: number};

function pathSegments(d: string): Array<[[number, number], [number, number]]> {
  const segs: Array<[[number, number], [number, number]]> = [];
  let x = 0;
  let y = 0;
  let sx = 0;
  let sy = 0;
  let cmd = '';
  const args: number[] = [];
  const flush = () => {
    if (!cmd) return;
    let i = 0;
    const c = cmd.toUpperCase();
    while (true) {
      if (c === 'M') {
        if (i + 1 >= args.length) break;
        x = args[i++];
        y = args[i++];
        sx = x;
        sy = y;
        cmd = cmd === 'M' ? 'L' : 'l';
      } else if (c === 'L') {
        if (i + 1 >= args.length) break;
        const nx = args[i++];
        const ny = args[i++];
        segs.push([
          [x, y],
          [nx, ny]
        ]);
        x = nx;
        y = ny;
      } else if (c === 'Z') {
        segs.push([
          [x, y],
          [sx, sy]
        ]);
        x = sx;
        y = sy;
        break;
      } else {
        break;
      }
    }
    args.length = 0;
  };
  PATH_CMD.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = PATH_CMD.exec(d))) {
    if (m[1]) {
      flush();
      cmd = m[1];
      if (cmd === 'Z' || cmd === 'z') flush();
    } else if (m[2]) {
      args.push(Number(m[2]));
    }
  }
  flush();
  return segs;
}

function sampleSegments(segs: Array<[[number, number], [number, number]]>): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (const [a, b] of segs) {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const steps = Math.max(1, Math.ceil(len * 2));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      pts.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    }
  }
  return pts;
}

function bboxOf(pts: Array<[number, number]>): BBox | null {
  if (pts.length === 0) return null;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const [x, y] of pts) {
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }
  return {minX, minY, maxX, maxY};
}

function formatViewBox(b: BBox, pad: number): string | null {
  const x = round1(b.minX - pad);
  const y = round1(b.minY - pad);
  const w = round1(b.maxX + pad - x);
  const h = round1(b.maxY + pad - y);
  if (w <= 0 || h <= 0) return null;
  return `${x} ${y} ${w} ${h}`;
}

function mainlandCoverWindow(
  pts: Array<[number, number]>,
  toku: BBox
): BBox | null {
  let minY = Infinity;
  let maxY = -Infinity;
  for (const p of pts) {
    if (p[1] < minY) minY = p[1];
    if (p[1] > maxY) maxY = p[1];
  }
  const y0 = Math.floor(minY);
  const y1 = Math.ceil(maxY);
  const n = y1 - y0 + 1;
  if (n <= 2) return null;
  const rowMin = new Float64Array(n);
  const rowMax = new Float64Array(n);
  rowMin.fill(Infinity);
  rowMax.fill(-Infinity);
  for (const [x, y] of pts) {
    const i = Math.round(y) - y0;
    if (i < 0 || i >= n) continue;
    if (x < rowMin[i]) rowMin[i] = x;
    if (x > rowMax[i]) rowMax[i] = x;
  }

  let best: BBox | null = null;
  let bestW = -1;
  let bestErr = Infinity;
  const topMax = Math.floor(toku.minY);
  const botMin = Math.ceil(toku.maxY);
  for (let top = y0; top <= topMax; top++) {
    let xmin = Infinity;
    let xmax = -Infinity;
    for (let y = top; y <= y1; y++) {
      const i = y - y0;
      if (rowMin[i] < xmin) xmin = rowMin[i];
      if (rowMax[i] > xmax) xmax = rowMax[i];
      if (y < botMin) continue;
      const w = xmax - xmin;
      const h = y - top;
      if (w <= 1 || h <= 1) continue;
      if (xmin > toku.minX || xmax < toku.maxX) continue;
      const aspect = w / h;
      if (aspect > COVER_ASPECT + 0.002) continue;
      if (aspect < COVER_ASPECT - 0.03) continue;
      const err = Math.abs(aspect - COVER_ASPECT);
      if (w > bestW + 0.05 || (Math.abs(w - bestW) <= 0.05 && err < bestErr)) {
        bestW = w;
        bestErr = err;
        best = {minX: xmin, minY: top, maxX: xmax, maxY: y};
      }
    }
  }
  return best;
}

/** Homepage cover viewBox from path `d` coords. Okinawa inset excluded. */
export function coverViewBox(shapes: Array<{slug: string; d: string}>, pad = 0): string | null {
  const mainlandPts: Array<[number, number]> = [];
  let toku: BBox | null = null;
  for (const s of shapes) {
    if (s.slug === 'okinawa') continue;
    const pts = sampleSegments(pathSegments(s.d));
    if (pts.length === 0) continue;
    mainlandPts.push(...pts);
    if (s.slug === 'tokushima') toku = bboxOf(pts);
  }
  if (toku) {
    const fitted = mainlandCoverWindow(mainlandPts, toku);
    if (fitted) return formatViewBox(fitted, pad);
  }
  const fallback = bboxOf(mainlandPts);
  if (!fallback) return null;
  return formatViewBox(fallback, pad);
}

function withCoverViewBox(map: RenderedMap): RenderedMap {
  const vb = coverViewBox(map.shapes, 0);
  if (!vb) return map;
  const parts = vb.split(' ').map(Number);
  return {
    ...map,
    viewBox: vb,
    width: parts[2] ?? map.width,
    height: parts[3] ?? map.height
  };
}

function readJapanMapLiteJson(): RenderedMap | null {
  if (!fs.existsSync(JAPAN_MAP_LITE_JSON)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(JAPAN_MAP_LITE_JSON, 'utf8')) as JapanMapLiteFile;
    if (raw.source !== 'n03' || typeof raw.viewBox !== 'string') return null;
    if (typeof raw.width !== 'number' || typeof raw.height !== 'number') return null;
    if (!Array.isArray(raw.shapes) || raw.shapes.length !== 47) return null;
    if (!raw.shapes.some((s) => s.slug === 'tokushima' && s.d)) return null;
    return {
      source: 'n03',
      viewBox: raw.viewBox,
      width: raw.width,
      height: raw.height,
      shapes: withPrefStatus(
        raw.shapes.map((s) => ({
          slug: s.slug,
          jis: s.jis,
          nameJa: s.nameJa,
          nameEn: s.nameEn,
          d: s.d
        }))
      )
    };
  } catch {
    return null;
  }
}

function loadJapanMapFromLiteTopo(): RenderedMap | null {
  const topo = readTopo('japan-prefectures-lite.topojson');
  if (!topo) return null;
    const fc = asCollection(topo);
    const mainland: Feature[] = [];
    const okinawa: Feature[] = [];
    for (const f of fc.features) {
      const p = propsOf(f as Feature<Geometry, Record<string, string | undefined>>);
      const jis = String(p.jis ?? p.N03_007 ?? '').slice(0, 2).padStart(2, '0');
      if (jis === '47') okinawa.push(f);
      else mainland.push(f);
    }
    const width = JAPAN_VIEWBOX.width;
    const height = JAPAN_VIEWBOX.height;
    const mainlandFc: FeatureCollection = {type: 'FeatureCollection', features: mainland};
    const projection = geoMercator().fitExtent(
      [
        [36, 12],
        [width - 16, height - 180]
      ],
      mainlandFc
    );
    const path = geoPath(projection).digits(1);
    const shapes: RenderedShape[] = [];
    for (const f of mainland) {
      shapes.push(shapeFromPrefFeature(f, path));
    }
    if (okinawa.length > 0) {
      const okiFc: FeatureCollection = {type: 'FeatureCollection', features: okinawa};
      const okiProj = geoMercator().fitExtent(
        [
          [24, height - 110],
          [200, height - 16]
        ],
        okiFc
      );
      const okiPath = geoPath(okiProj).digits(1);
      for (const f of okinawa) {
        shapes.push(shapeFromPrefFeature(f, okiPath));
      }
    }
    const kept = shapes.filter((s) => s.d.length > 0);
    if (kept.length !== 47 || !kept.some((s) => s.slug === 'tokushima')) return null;
    return {
      source: 'n03',
      viewBox: `0 0 ${width} ${height}`,
      width,
      height,
      shapes: withPrefStatus(kept)
    };
}

export function loadJapanMap(): RenderedMap {
  const fromJson = readJapanMapLiteJson();
  if (fromJson) return withCoverViewBox(fromJson);
  const fromTopo = loadJapanMapFromLiteTopo();
  if (fromTopo) return withCoverViewBox(fromTopo);

  return {
    source: 'placeholder',
    viewBox: `0 0 ${JAPAN_VIEWBOX.width} ${JAPAN_VIEWBOX.height}`,
    width: JAPAN_VIEWBOX.width,
    height: JAPAN_VIEWBOX.height,
    shapes: JAPAN_SCHEMATIC.map((b) => {
      const pref = PREFECTURE_BY_SLUG.get(b.slug);
      return {
        slug: b.slug,
        jis: pref?.jis ?? '',
        nameJa: pref?.nameJa ?? b.slug,
        nameEn: pref?.nameEn ?? b.slug,
        d: schematicPath(b),
        status: b.slug === 'tokushima' ? 'ready' : 'rolling-out'
      };
    })
  };
}

function shapeFromPrefFeature(
  f: Feature,
  path: ReturnType<typeof geoPath>
): RenderedShape {
  const p = propsOf(f as Feature<Geometry, Record<string, string | undefined>>);
  const jisRaw = String(p.jis ?? p.N03_007 ?? '');
  const jis = jisRaw.length >= 2 ? jisRaw.slice(0, 2).padStart(2, '0') : '';
  const pref = PREFECTURE_BY_JIS.get(jis) ?? PREFECTURE_BY_SLUG.get(String(p.slug ?? ''));
  const slug = pref?.slug ?? String(p.slug ?? '');
  return {
    slug,
    jis: pref?.jis ?? jis,
    nameJa: pref?.nameJa ?? String(p.nameJa ?? p.N03_001 ?? slug),
    nameEn: pref?.nameEn ?? String(p.nameEn ?? slug),
    d: path(f) ?? '',
    status: slug === 'tokushima' ? 'ready' : 'rolling-out'
  };
}

export function loadTokushimaMap(): RenderedMap {
  const topo = readTopo('tokushima-municipalities.topojson');
  const width = TOKUSHIMA_VIEWBOX.width;
  const height = TOKUSHIMA_VIEWBOX.height;
  if (topo) {
    const fc = asCollection(topo);
    const projection = geoMercator().fitExtent(
      [
        [12, 12],
        [width - 12, height - 12]
      ],
      fc
    );
    const path = geoPath(projection);
    const shapes: RenderedShape[] = fc.features.map((f) => {
      const p = propsOf(f as Feature<Geometry, Record<string, string | undefined>>);
      const jis = String(p.jis ?? p.N03_007 ?? '');
      const muni =
        MUNICIPALITY_BY_JIS.get(jis) ?? MUNICIPALITY_BY_SLUG.get(String(p.slug ?? ''));
      const slug = muni?.slug ?? String(p.slug ?? '');
      return {
        slug,
        jis: muni?.jis ?? jis,
        nameJa: muni?.nameJa ?? String(p.nameJa ?? p.N03_004 ?? slug),
        nameEn: muni?.nameEn ?? String(p.nameEn ?? slug),
        d: path(f) ?? '',
        status: muni?.status ?? 'coming-soon'
      };
    });
    return {
      source: 'n03',
      viewBox: `0 0 ${width} ${height}`,
      width,
      height,
      shapes: shapes.filter((s) => s.d.length > 0 && s.slug)
    };
  }

  return {
    source: 'placeholder',
    viewBox: `0 0 ${width} ${height}`,
    width,
    height,
    shapes: TOKUSHIMA_SCHEMATIC.map((b) => {
      const muni = MUNICIPALITY_BY_SLUG.get(b.slug);
      return {
        slug: b.slug,
        jis: muni?.jis ?? '',
        nameJa: muni?.nameJa ?? b.slug,
        nameEn: muni?.nameEn ?? b.slug,
        d: schematicPath(b),
        status: muni?.status ?? 'coming-soon'
      };
    })
  };
}

export function prefectureCount(): number {
  return PREFECTURES.length;
}

export function projectMimaOfficialMap(
  points: readonly OfficialMapPoint[],
  jis: string = MIMA_PACK_JIS
): MimaOfficialMap {
  const width = SCATTER_WIDTH;
  const height = SCATTER_HEIGHT;
  const pointFc: FeatureCollection = {
    type: 'FeatureCollection',
    features: points.map((p) => ({
      type: 'Feature',
      properties: {id: p.id},
      geometry: {type: 'Point', coordinates: [p.lon, p.lat]}
    }))
  };

  let projection = geoMercator();
  let outline = '';
  let outlineSource: MimaOfficialMap['outlineSource'] = 'bbox';

  const topo = readTopo('tokushima-municipalities.topojson');
  if (topo) {
    const fc = asCollection(topo);
    const outlineFeat = fc.features.find((f) => {
      const p = propsOf(f as Feature<Geometry, Record<string, string | undefined>>);
      const featJis = String(p.jis ?? p.N03_007 ?? '');
      return featJis === jis || (jis === MIMA_PACK_JIS && String(p.slug ?? '') === 'mima');
    });
    if (outlineFeat) {
      projection = geoMercator().fitExtent(
        [
          [28, 18],
          [width - 28, height - 18]
        ],
        outlineFeat
      );
      const drawn = geoPath(projection)(outlineFeat) ?? '';
      if (drawn) {
        outline = drawn;
        outlineSource = 'n03';
      }
    }
  }

  if (!outline) {
    if (points.length === 0) {
      throw new Error('official xy scatter needs at least one pack coordinate or N03 outline');
    }
    projection = geoMercator().fitExtent(
      [
        [36, 28],
        [width - 36, height - 28]
      ],
      pointFc
    );
    const bounds = geoPath(projection).bounds(pointFc);
    const pad = 18;
    const x0 = bounds[0][0] - pad;
    const y0 = bounds[0][1] - pad;
    const x1 = bounds[1][0] + pad;
    const y1 = bounds[1][1] + pad;
    outline = `M${x0} ${y0}H${x1}V${y1}H${x0}Z`;
    outlineSource = 'bbox';
  }

  return {
    viewBox: `0 0 ${width} ${height}`,
    width,
    height,
    outline,
    outlineSource,
    points: points.map((p) => {
      const xy = projection([p.lon, p.lat]);
      if (!xy) {
        throw new Error(`official xy did not project: ${p.id}`);
      }
      return {
        id: p.id,
        name_ja: p.name_ja,
        category: p.category,
        x: xy[0],
        y: xy[1]
      };
    })
  };
}
