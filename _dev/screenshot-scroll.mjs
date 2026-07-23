import puppeteer from 'puppeteer';
import { mkdirSync } from 'node:fs';
const url = process.argv[2];
const offsets = (process.argv[3] || '0').split(',').map(Number);
mkdirSync('temporary screenshots', { recursive: true });
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await new Promise(r => setTimeout(r, 2000));
let i = 0;
for (const y of offsets) {
  await page.evaluate(v => window.scrollTo(0, v), y);
  await new Promise(r => setTimeout(r, 900));
  await page.screenshot({ path: `temporary screenshots/scroll-${i++}-y${y}.png` });
}
await browser.close();
console.log('done');
