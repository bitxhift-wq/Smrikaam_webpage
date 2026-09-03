import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const dirs = [path.join(rootDir, 'src'), path.join(rootDir, 'server/data')];
const imageRegex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\s"'\x27`<>)]*/g;

let allMatches = [];
let urlEntityMap = {};

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full);
    } else if ((full.endsWith('.js') || full.endsWith('.jsx') || full.endsWith('.json')) && !full.includes('.bak')) {
      const content = fs.readFileSync(full, 'utf8');
      let match;
      while ((match = imageRegex.exec(content)) !== null) {
        let cleanUrl = match[0].split('?')[0];
        allMatches.push({ file: path.relative(rootDir, full), url: cleanUrl });
        if (!urlEntityMap[cleanUrl]) urlEntityMap[cleanUrl] = [];
        urlEntityMap[cleanUrl].push(path.relative(rootDir, full));
      }
    }
  });
}

dirs.forEach(scanDir);

console.log('--- GLOBAL IMAGE AUDIT REPORT ---');
console.log('Total image references found:', allMatches.length);
console.log('Total unique photo URLs across codebase:', Object.keys(urlEntityMap).length);
console.log('Unique Image URLs List:');
Object.entries(urlEntityMap).forEach(([url, files], idx) => {
  console.log(`${idx + 1}. ${url} -> [${[...new Set(files)].join(', ')}]`);
});
