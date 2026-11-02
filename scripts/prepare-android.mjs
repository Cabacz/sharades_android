import { cp, mkdir, rm, stat } from 'node:fs/promises';

const webDir = 'www';
const assets = ['index.html', 'manifest.webmanifest', 'service-worker.js', 'css', 'js', 'assets'];

await rm(webDir, { recursive: true, force: true });
await mkdir(webDir, { recursive: true });

for (const entry of assets) {
  const info = await stat(entry).catch(() => null);
  if (!info) throw new Error(`Required app asset is missing: ${entry}`);
  await cp(entry, `${webDir}/${entry}`, { recursive: true });
}

console.log(`Prepared ${assets.length} app entries in ${webDir}/ for Capacitor.`);
