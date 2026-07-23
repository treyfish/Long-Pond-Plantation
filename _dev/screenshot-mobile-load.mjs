import puppeteer from 'puppeteer';
import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const url = process.argv[2];
const label = process.argv[3];

if (!url) {
  console.error('Usage: node _dev/screenshot-mobile.mjs <url> [label]');
  process.exit(1);
}

const outDir = join(process.cwd(), 'temporary screenshots');
mkdirSync(outDir, { recursive: true });

const existing = readdirSync(outDir)
  .map((f) => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map((m) => Number(m[1]));
const next = existing.length ? Math.max(...existing) + 1 : 1;
const outPath = join(outDir, `screenshot-${next}${label ? `-${label}` : ''}.png`);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await new Promise((r) => setTimeout(r, 2500));
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(outPath);
