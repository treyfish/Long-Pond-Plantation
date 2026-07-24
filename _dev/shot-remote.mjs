import puppeteer from 'puppeteer';
import { mkdirSync } from 'node:fs';
const [url, label, scrollY] = process.argv.slice(2);
mkdirSync('temporary screenshots', { recursive: true });
const b = await puppeteer.launch();
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await p.goto(url, { waitUntil: 'load', timeout: 90000 });
await new Promise(r => setTimeout(r, 3500));
if (scrollY) { await p.evaluate(y => window.scrollTo(0, +y), scrollY); await new Promise(r => setTimeout(r, 1800)); }
await p.screenshot({ path: `temporary screenshots/${label}.png` });
await b.close();
console.log(label);
