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

export function loadJapanMap(): RenderedMap {
  const topo = readTopo('japan-prefectures.topojson');
  if (topo) {
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
    const path = geoPath(projection);
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
      const okiPath = geoPath(okiProj);
      for (const f of okinawa) {
        shapes.push(shapeFromPrefFeature(f, okiPath));
      }
    }
    return {
      source: 'n03',
      viewBox: `0 0 ${width} ${height}`,
      width,
      height,
      shapes: shapes.filter((s) => s.d.length > 0)
    };
  }

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

export function projectMimaOfficialMap(points: readonly OfficialMapPoint[]): MimaOfficialMap {
  if (points.length === 0) {
    throw new Error('official xy scatter needs at least one pack coordinate');
  }
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
    const mima = fc.features.find((f) => {
      const p = propsOf(f as Feature<Geometry, Record<string, string | undefined>>);
      const jis = String(p.jis ?? p.N03_007 ?? '');
      return jis === MIMA_PACK_JIS || String(p.slug ?? '') === 'mima';
    });
    if (mima) {
      projection = geoMercator().fitExtent(
        [
          [28, 18],
          [width - 28, height - 18]
        ],
        mima
      );
      const drawn = geoPath(projection)(mima) ?? '';
      if (drawn) {
        outline = drawn;
        outlineSource = 'n03';
      }
    }
  }

  if (!outline) {
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
