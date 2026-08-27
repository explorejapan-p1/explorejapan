/**
 * Homepage-only N03: drop tiny islands, visvalingam-simplify with no shared
 * topology so coastline vertices are actually removable, then encode TopoJSON.
 * Full-res japan-prefectures.topojson and tokushima-municipalities.topojson stay put.
 *
 * Output: data/derived/japan-prefectures-lite.topojson (gitignored).
 */
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const derivedDir = path.join(root, 'data', 'derived');
const fullTopo = path.join(derivedDir, 'japan-prefectures.topojson');
const liteTopo = path.join(derivedDir, 'japan-prefectures-lite.topojson');

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

function main() {
  if (!fs.existsSync(fullTopo)) {
    console.log('skip lite N03: full prefecture topojson not present');
    return;
  }
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
    // no-topology so shared-arc endpoints are not locked; keep-shapes keeps all 47.
    runMapshaper([
      '-i',
      'no-topology',
      islandsDropped,
      '-simplify',
      'visvalingam',
      '0.2%',
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
  console.log('wrote', liteTopo, bytes, 'bytes');
}

try {
  main();
} catch (err) {
  console.error('N03 lite build failed:', err.message);
  process.exit(1);
}
