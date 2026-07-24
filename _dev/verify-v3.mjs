import puppeteer from 'puppeteer';
const b = await puppeteer.launch();
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
const reqs = [];
p.on('response', r => { const u = r.url(); if (/\.(jpg|mp4)$/.test(u)) reqs.push([u.split('/').pop(), r.status()]); });
const t0 = Date.now();
await p.goto('https://long-pond-v3.vercel.app/', { waitUntil: 'load', timeout: 90000 });
const loadMs = Date.now() - t0;
await new Promise(r => setTimeout(r, 3000));
const checks = await p.evaluate(() => {
  const txt = document.body.innerText;
  const dayImgs = [...document.querySelectorAll('img')].filter(i => /day-/.test(i.src));
  return {
    dustParticles: !!document.querySelector('canvas'),
    customCursor: !!document.querySelector('[class*="cursor"][class*="fixed"]'),
    spacesArrows: document.querySelectorAll('[aria-label="Next spaces"], [aria-label="Previous spaces"]').length,
    dayImagesInDom: dayImgs.length,
    dayImagesComplete: dayImgs.filter(i => i.complete && i.naturalWidth > 0).length,
    oakBanner: [...document.querySelectorAll('img')].some(i => /sunset-marsh-banner/.test(i.src)),
  };
});
console.log('load(ms):', loadMs);
console.log(JSON.stringify(checks, null, 1));
console.log('day/hero assets fetched:', reqs.filter(([n]) => /^(day-|hero)/.test(n)).map(([n,s]) => `${n}:${s}`).join(' '));
await b.close();
