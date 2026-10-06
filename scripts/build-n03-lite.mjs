/**
 * Homepage-only N03: drop tiny islands, visvalingam-simplify with no shared
 * topology so coastline vertices are actually removable, then encode TopoJSON
 * and emit the committed SVG-path artifact used by loadJapanMap().
 *
 * Outputs:
 *   data/derived/japan-prefectures-lite.topojson (gitignored)
 *   src/data/japan-map-lite.json (committed)
 *
 * Full-res japan-prefectures.topojson and tokushima-municipalities.topojson stay put.
 */
import {geoMercator, geoPath} from 'd3-geo';
import {createRequire} from 'node:module';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const require = createRequire(import.meta.url);
const {feature} = require('topojson-client');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const derivedDir = path.join(root, 'data', 'derived');
const fullTopo = path.join(derivedDir, 'japan-prefectures.topojson');
const liteTopo = path.join(derivedDir, 'japan-prefectures-lite.topojson');
const liteJson = path.join(root, 'src', 'data', 'japan-map-lite.json');
const prefTs = path.join(root, 'src', 'data', 'prefectures.ts');

const WIDTH = 720;
const HEIGHT = 980;
const JSON_MAX_BYTES = 300000;

function mapshaperBin() {
  const local = path.join(root, 'node_modules', 'mapshaper', 'bin', 'mapshaper');
  if (fs.existsSync(local)) return local;
  throw new Error('mapshaper missing. Install devDependency mapshaper@0.7.55 first.');
}

function runMapshaper(args) {
  const r = spawnSync(mapshaperBin(), args, {stdio: 'inherit'});
  if (r.status !== 0) {
    throw new Error(`mapshaper failed: ${args.join(' ')}`);
  }
}

function simplifyLite(pct) {
  fs.mkdirSync(derivedDir, {recursive: true});
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'n03-lite-'));
  const islandsDropped = path.join(tmp, 'prefectures-no-islets.json');
  const simplified = path.join(tmp, 'prefectures-simplified.json');
  try {
    runMapshaper([
      fullTopo,
      '-filter-islands',
      'min-area=12km2',
      '-o',
      'format=geojson',
      islandsDropped
    ]);
    runMapshaper([
      '-i',
      'no-topology',
      islandsDropped,
      '-simplify',
      'visvalingam',
      pct,
      'keep-shapes',
      '-o',
      'format=geojson',
      'precision=0.005',
      simplified
    ]);
    runMapshaper([
      simplified,
      '-o',
      'format=topojson',
      'quantization=2000',
      liteTopo
    ]);
  } finally {
    fs.rmSync(tmp, {recursive: true, force: true});
  }
  const bytes = fs.statSync(liteTopo).size;
  console.log('wrote', liteTopo, bytes, 'bytes', 'simplify=' + pct);
}

function loadPrefectures() {
  const src = fs.readFileSync(prefTs, 'utf8');
  const re = /\{jis: '(\d+)', slug: '([^']+)', nameJa: '([^']+)', nameEn: '([^']+)'\}/g;
  const byJis = new Map();
  let m;
  while ((m = re.exec(src))) {
    byJis.set(m[1], {jis: m[1], slug: m[2], nameJa: m[3], nameEn: m[4]});
  }
  if (byJis.size !== 47) {
    throw new Error('expected 47 prefectures, got ' + byJis.size);
  }
  return byJis;
}

function emitLiteJson() {
  if (!fs.existsSync(liteTopo)) {
    throw new Error('lite topojson missing: ' + liteTopo);
  }
  const byJis = loadPrefectures();
  const topo = JSON.parse(fs.readFileSync(liteTopo, 'utf8'));
  const name = Object.keys(topo.objects)[0];
  const fc = feature(topo, topo.objects[name]);
  const mainland = [];
  const okinawa = [];
  for (const f of fc.features) {
    const p = f.properties ?? {};
    const jis = String(p.jis ?? p.N03_007 ?? '').slice(0, 2).padStart(2, '0');
    if (jis === '47') okinawa.push(f);
    else mainland.push(f);
  }
  const mainlandFc = {type: 'FeatureCollection', features: mainland};
  const projection = geoMercator().fitExtent(
    [
      [36, 12],
      [WIDTH - 16, HEIGHT - 180]
    ],
    mainlandFc
  );
  const pathFn = geoPath(projection).digits(1);
  const shapes = [];
  function pushFeature(f, pather) {
    const p = f.properties ?? {};
    const jisRaw = String(p.jis ?? p.N03_007 ?? '');
    const jis = jisRaw.length >= 2 ? jisRaw.slice(0, 2).padStart(2, '0') : '';
    const pref = byJis.get(jis);
    const slug = pref?.slug ?? String(p.slug ?? '');
    const d = pather(f) ?? '';
    if (!d || !slug) return;
    shapes.push({
      slug,
      jis: pref?.jis ?? jis,
      nameJa: pref?.nameJa ?? String(p.nameJa ?? p.N03_001 ?? slug),
      nameEn: pref?.nameEn ?? String(p.nameEn ?? slug),
      d
    });
  }
  for (const f of mainland) pushFeature(f, pathFn);
  if (okinawa.length > 0) {
    const okiFc = {type: 'FeatureCollection', features: okinawa};
    const okiProj = geoMercator().fitExtent(
      [
        [24, HEIGHT - 110],
        [200, HEIGHT - 16]
      ],
      okiFc
    );
    const okiPath = geoPath(okiProj).digits(1);
    for (const f of okinawa) pushFeature(f, okiPath);
  }
  if (shapes.length !== 47) {
    throw new Error('japan-map-lite.json expected 47 shapes, got ' + shapes.length);
  }
  if (!shapes.some((s) => s.slug === 'tokushima')) {
    throw new Error('japan-map-lite.json missing tokushima slug');
  }
  const payload = {
    viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
    width: WIDTH,
    height: HEIGHT,
    source: 'n03',
    shapes
  };
  fs.mkdirSync(path.dirname(liteJson), {recursive: true});
  fs.writeFileSync(liteJson, JSON.stringify(payload));
  const bytes = fs.statSync(liteJson).size;
  console.log('wrote', liteJson, bytes, 'bytes');
  return bytes;
}

function main() {
  const jsonOnly = process.argv.includes('--json-only');
  if (!jsonOnly) {
    if (!fs.existsSync(fullTopo)) {
      if (!fs.existsSync(liteTopo)) {
        console.log('skip lite N03: full prefecture topojson not present');
        return;
      }
      console.log('full topojson missing; emitting JSON from existing lite');
    } else if (!fs.existsSync(liteTopo)) {
      runMapshaper([
        fullTopo,
        '-simplify',
        'visvalingam',
        '0.4%',
        'keep-shapes',
        '-o',
        'format=topojson',
        liteTopo
      ]);
      console.log('wrote', liteTopo, fs.statSync(liteTopo).size, 'bytes', 'simplify=0.4%');
    } else {
      console.log('using existing', liteTopo, fs.statSync(liteTopo).size, 'bytes');
    }
  }

  let bytes = emitLiteJson();
  if (bytes > JSON_MAX_BYTES) {
    if (!fs.existsSync(fullTopo)) {
      throw new Error('japan-map-lite.json is ' + bytes + ' bytes (>300KB) and full topojson is missing');
    }
    console.log('JSON over 300KB; re-simplifying at 0.2%');
    simplifyLite('0.2%');
    bytes = emitLiteJson();
    if (bytes > JSON_MAX_BYTES) {
      throw new Error('japan-map-lite.json still ' + bytes + ' bytes after 0.2% simplify');
    }
  }
}

try {
  main();
} catch (err) {
  console.error('N03 lite build failed:', err.message);
  process.exit(1);
}
