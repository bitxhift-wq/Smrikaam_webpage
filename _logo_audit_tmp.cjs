const { execFile } = require('child_process');
const puppeteer = require('puppeteer-core');
const path = require('path');

const ROOT = 'C:\\Users\\mukhe\\OneDrive\\Desktop\\smrikaam web\\Smrikaam_webpage';
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 4199;
const BASE = `http://localhost:${PORT}/`;

function waitForServer(url, timeoutMs) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const t = setInterval(() => {
      const http = require('http');
      const req = http.get(url, (res) => { clearInterval(t); resolve(); });
      req.on('error', () => {
        if (Date.now() - start > timeoutMs) { clearInterval(t); reject(new Error('server timeout')); }
      });
    }, 400);
  });
}

function startServer() {
  return new Promise((resolve) => {
    const p = execFile('cmd.exe', ['/c', 'npx vite preview --port ' + PORT + ' --strictPort'], {
      cwd: ROOT, windowsHide: true
    });
    p.stdout.on('data', () => { resolve(p); });
    p.stderr.on('data', () => { resolve(p); });
  });
}

(async () => {
  const server = await startServer();
  await waitForServer(BASE, 20000);

  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });

  const viewports = [
    { name: '390', width: 390, height: 844 },
    { name: '414', width: 414, height: 896 },
    { name: '430', width: 430, height: 932 },
    { name: '768', width: 768, height: 1024 },
    { name: '900', width: 900, height: 1024 },
    { name: '1280', width: 1280, height: 800 },
    { name: '1440', width: 1440, height: 900 },
    { name: '1920', width: 1920, height: 1080 },
  ];

  const page = await browser.newPage();

  const results = [];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 30000 });

    const info = await page.evaluate(() => {
      const doc = document.documentElement;
      const nav = document.querySelector('nav.nav') || document.querySelector('nav');
      const logos = Array.from(document.querySelectorAll('.nav-brand img, .smrikaam-brand-logo, .smrikaam-mobile-logo, nav img'));
      const theme = document.querySelector('nav button[aria-label*="Theme"], nav button[title*="Theme"]');
      const menuBtn = Array.from(document.querySelectorAll('nav button')).find(b => (b.getAttribute('aria-label')||'').includes('Navigation'));
      const logoInfo = logos.map(img => {
        const r = img.getBoundingClientRect();
        const cs = getComputedStyle(img);
        return {
          src: img.getAttribute('src'),
          w: Math.round(r.width), h: Math.round(r.height),
          display: cs.display, visibility: cs.visibility, opacity: cs.opacity,
          color: cs.color,
          naturalW: img.naturalWidth, naturalH: img.naturalHeight
        };
      });
      const overflow = doc.scrollWidth > doc.clientWidth;
      return {
        title: document.title,
        favicon: (document.querySelector('link[rel~="icon"]')||{}).href || null,
        themeIsDark: doc.classList.contains('dark'),
        navH: nav ? Math.round(nav.getBoundingClientRect().height) : null,
        navBg: nav ? getComputedStyle(nav).backgroundColor : null,
        logoCount: logos.length,
        logos: logoInfo,
        hasThemeBtn: !!theme,
        hasMenuBtn: !!menuBtn,
        overflowX: overflow,
        clientW: doc.clientWidth, scrollW: doc.scrollWidth
      };
    });

    results.push({ vp: vp.name, ...info });
  }

  // Theme toggle + hamburger functional test at 390
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.evaluate(() => localStorage.setItem('smrikaam_theme','dark'));
  await page.reload({ waitUntil: 'networkidle2' });
  const menuBtnEval = await page.evaluate(() => {
    const b = Array.from(document.querySelectorAll('nav button')).find(x => (x.getAttribute('aria-label')||'').includes('Navigation'));
    if (!b) return null;
    b.click();
    return true;
  });
  await new Promise(r => setTimeout(r, 400));
  const menuInfo = await page.evaluate(() => {
    const drawer = document.querySelector('nav .lg\\:hidden.fixed, nav div[class*="fixed"]');
    const links = Array.from(document.querySelectorAll('nav a')).map(a => a.textContent.trim()).filter(Boolean);
    return {
      drawerOpen: !!document.querySelector('nav .lg\\:hidden.fixed'),
      linkCount: links.length,
      hasHome: links.some(l => l === 'HOME'),
      hasServices: links.some(l => l === 'SERVICES'),
      hasProducts: links.some(l => l === 'PRODUCTS'),
      sampleLinkVisible: !!Array.from(document.querySelectorAll('nav a')).find(a => a.textContent.trim()==='SERVICES' && a.getBoundingClientRect().width>0)
    };
  });

  // toggle theme
  const toggled = await page.evaluate(() => {
    const t = document.querySelector('nav button[title*="Theme"], nav button[aria-label*="Theme"]');
    if (!t) return { ok:false };
    const before = document.documentElement.classList.contains('dark');
    t.click();
    const after = document.documentElement.classList.contains('dark');
    return { ok: true, before, after };
  });

  await browser.close();
  server.kill();

  console.log('=== HEADER/LOGO AUDIT ===');
  for (const r of results) {
    console.log(`\n[${r.vp}] theme=${r.themeIsDark?'dark':'light'} overflowX=${r.overflowX} favicon=${r.favicon} title=${r.title.slice(0,30)} navH=${r.navH} navBg=${r.navBg}`);
    for (const l of r.logos) {
      console.log(`  logo src=${l.src} ${l.w}x${l.h}px display=${l.display} vis=${l.visibility} op=${l.opacity} nat=${l.naturalW}x${l.naturalH}`);
    }
  }
  console.log('\n=== MENU TEST (390) ===');
  console.log(JSON.stringify({ menuBtnEval, menuInfo }));
  console.log('\n=== THEME TOGGLE TEST ===');
  console.log(JSON.stringify(toggled));

})().catch(e => { console.error('FATAL', e); process.exit(1); });
