/**
 * Download MLIT N03 2026 (official product page) and build local TopoJSON.
 * Output is written to data/derived/ which is gitignored.
 * Do not commit derived GeoJSON/TopoJSON.
 *
 * Official page: https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2026.html
 */
import {execFileSync, spawnSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const rawDir = path.join(root, 'data', 'raw', 'n03-2026');
const derivedDir = path.join(root, 'data', 'derived');
const workDir = path.join(root, 'data', 'raw', 'work');

const PRODUCT =
  'https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2026.html';
const ZIP_FOR = (jis) =>
  `https://nlftp.mlit.go.jp/ksj/gml/data/N03/N03-2026/N03-20260101_${jis}_GML.zip`;

const PREF_JIS = Array.from({length: 47}, (_, i) => String(i + 1).padStart(2, '0'));

const PREF_SLUG = {
  '01': 'hokkaido', '02': 'aomori', '03': 'iwate', '04': 'miyagi', '05': 'akita',
  '06': 'yamagata', '07': 'fukushima', '08': 'ibaraki', '09': 'tochigi', '10': 'gunma',
  '11': 'saitama', '12': 'chiba', '13': 'tokyo', '14': 'kanagawa', '15': 'niigata',
  '16': 'toyama', '17': 'ishikawa', '18': 'fukui', '19': 'yamanashi', '20': 'nagano',
  '21': 'gifu', '22': 'shizuoka', '23': 'aichi', '24': 'mie', '25': 'shiga',
  '26': 'kyoto', '27': 'osaka', '28': 'hyogo', '29': 'nara', '30': 'wakayama',
  '31': 'tottori', '32': 'shimane', '33': 'okayama', '34': 'hiroshima', '35': 'yamaguchi',
  '36': 'tokushima', '37': 'kagawa', '38': 'ehime', '39': 'kochi', '40': 'fukuoka',
  '41': 'saga', '42': 'nagasaki', '43': 'kumamoto', '44': 'oita', '45': 'miyazaki',
  '46': 'kagoshima', '47': 'okinawa'
};

const TOKU_SLUG = {
  '36201': 'tokushima', '36202': 'naruto', '36203': 'komatsushima', '36204': 'anan',
  '36205': 'yoshinogawa', '36206': 'awa', '36207': 'mima', '36208': 'miyoshi',
  '36301': 'katsuura', '36302': 'kamikatsu', '36321': 'sanagochi', '36341': 'ishii',
  '36342': 'kamiyama', '36368': 'naka', '36383': 'mugi', '36387': 'minami',
  '36388': 'kaiyo', '36401': 'matsushige', '36402': 'kitajima', '36403': 'aizumi',
  '36404': 'itano', '36405': 'kamiita', '36468': 'tsurugi', '36489': 'higashimiyoshi'
};

function mapshaperBin() {
  const local = path.join(root, 'node_modules', 'mapshaper', 'bin', 'mapshaper');
  if (fs.existsSync(local)) return local;
  throw new Error('mapshaper missing. Install devDependency mapshaper@0.7.55 first.');
}

function curlZip(jis, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    const existing = spawnSync('unzip', ['-tqq', dest]);
    if (existing.status === 0) {
      console.log('have', path.basename(dest));
      return;
    }
    try { fs.unlinkSync(dest); } catch {}
  }
  const url = ZIP_FOR(jis);
  console.log('GET', url);
  const r = spawnSync(
    'curl',
    ['-fL', '--retry', '3', '-A', 'explorejapan-unpublished-v0', '-e', PRODUCT, '-o', dest, url],
    {stdio: 'inherit'}
  );
  if (r.status !== 0) {
    throw new Error('Failed to download ' + url + ' (see official N03 2026 product page)');
  }
  const test = spawnSync('unzip', ['-tqq', dest]);
  if (test.status !== 0) {
    try { fs.unlinkSync(dest); } catch {}
    throw new Error('Downloaded zip failed integrity check: ' + url);
  }
}

function unzipGeojson(zipPath, destDir) {
  fs.mkdirSync(destDir, {recursive: true});
  execFileSync('unzip', ['-o', '-q', zipPath, '-d', destDir]);
  const found = fs.readdirSync(destDir).filter((f) => f.endsWith('.geojson') && !f.includes('subprefecture'));
  if (found.length === 0) {
    throw new Error(`No GeoJSON in ${zipPath}`);
  }
  return path.join(destDir, found[0]);
}

function runMapshaper(args) {
  const bin = mapshaperBin();
  const r = spawnSync(bin, args, {stdio: 'inherit'});
  if (r.status !== 0) {
    throw new Error(`mapshaper failed: ${args.join(' ')}`);
  }
}

function addPrefProps(geojsonPath, jis) {
  const gj = JSON.parse(fs.readFileSync(geojsonPath, 'utf8'));
  for (const f of gj.features) {
    const code = String(f.properties?.jis ?? f.properties?.N03_007 ?? jis).slice(0, 2).padStart(2, '0');
    f.properties = {
      ...f.properties,
      jis: code,
      slug: PREF_SLUG[code] ?? '',
      nameJa: f.properties?.N03_001 ?? f.properties?.nameJa ?? ''
    };
  }
  fs.writeFileSync(geojsonPath, JSON.stringify(gj));
}

function addMuniProps(geojsonPath) {
  const gj = JSON.parse(fs.readFileSync(geojsonPath, 'utf8'));
  for (const f of gj.features) {
    const code = String(f.properties?.jis ?? f.properties?.N03_007 ?? '');
    f.properties = {
      ...f.properties,
      jis: code,
      slug: TOKU_SLUG[code] ?? '',
      nameJa: f.properties?.N03_004 ?? f.properties?.nameJa ?? ''
    };
  }
  fs.writeFileSync(geojsonPath, JSON.stringify(gj));
}

function main() {
  const only = process.argv.includes('--tokushima-only');
  fs.mkdirSync(rawDir, {recursive: true});
  fs.mkdirSync(derivedDir, {recursive: true});
  fs.mkdirSync(workDir, {recursive: true});

  const targets = only ? ['36'] : PREF_JIS;
  const prefOuts = [];

  for (const jis of targets) {
    const zip = path.join(rawDir, `N03-20260101_${jis}_GML.zip`);
    curlZip(jis, zip);
    const extractDir = path.join(workDir, jis);
    const geojson = unzipGeojson(zip, extractDir);
    const dissolved = path.join(workDir, `pref-${jis}.json`);
    runMapshaper([
      geojson,
      '-each', 'jis=String(N03_007).slice(0,2)',
      '-dissolve', 'jis',
      'copy-fields=N03_001,N03_007',
      '-simplify', 'dp', '8%',
      'keep-shapes',
      '-o', dissolved
    ]);
    addPrefProps(dissolved, jis);
    prefOuts.push(dissolved);

    if (jis === '36') {
      const muniGj = path.join(workDir, 'tokushima-muni.json');
      runMapshaper([
        geojson,
        '-each', 'jis=String(N03_007)',
        '-dissolve', 'jis',
        'copy-fields=N03_001,N03_004,N03_007',
        '-simplify', 'dp', '10%',
        'keep-shapes',
        '-o', muniGj
      ]);
      addMuniProps(muniGj);
      const muniTopo = path.join(derivedDir, 'tokushima-municipalities.topojson');
      runMapshaper([muniGj, '-o', 'format=topojson', muniTopo]);
      console.log('wrote', muniTopo);
    }
  }

  const japanGj = path.join(workDir, 'japan-prefectures.json');
  runMapshaper([...prefOuts, 'combine-files', '-merge-layers', '-o', japanGj]);
  const japanTopo = path.join(derivedDir, 'japan-prefectures.topojson');
  runMapshaper([japanGj, '-o', 'format=topojson', japanTopo]);
  console.log('wrote', japanTopo);

  const lite = spawnSync(process.execPath, [path.join(__dirname, 'build-n03-lite.mjs')], {
    stdio: 'inherit'
  });
  if (lite.status !== 0) {
    throw new Error('lite N03 simplify failed');
  }

  const citation = {
    source: 'MLIT National Land Numerical Information N03 2026',
    url: PRODUCT,
    vintage: 'N03-20260101',
    license: 'CC BY 4.0',
    citationJa:
      '「国土数値情報（行政区域データ）」（国土交通省）（https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2026.html）を加工して作成',
    gsi: '測量法に基づく国土地理院長承認（複製）R 7JHf 351',
    hold: 'Do not commit this directory. GSI reproduction filing is gated before public redistribute.'
  };
  fs.writeFileSync(
    path.join(derivedDir, 'n03-2026-citation.json'),
    JSON.stringify(citation, null, 2)
  );
  console.log('done. derived files are gitignored.');
}

try {
  main();
} catch (err) {
  console.error('N03 build failed:', err.message);
  console.error('The app still runs with a labeled placeholder SVG.');
  process.exit(1);
}
