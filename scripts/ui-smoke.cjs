// Run against a production preview. QA dependencies may be supplied through NODE_PATH.
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('node:fs');
const assert = require('node:assert/strict');
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const output = 'artifacts';
fs.mkdirSync(output, { recursive: true });

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME_BIN || '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox'] });
  const report = { pages: [], interactions: [], accessibility: [] };
  const errors = [];
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    const routes = ['/', '/en/', '/ar/', '/mentions-legales/', '/en/legal-notice/', '/ar/legal/'];
    for (const slug of ['gueliz', 'medina', 'hivernage', 'palmeraie']) routes.push(`/quartiers/${slug}/`, `/en/areas/${slug}/`, `/ar/ahya/${slug}/`);
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, route);
      assert.equal(await page.locator('h1').count(), 1, `one h1: ${route}`);
      const brokenAnchors = await page.evaluate(() => Array.from(document.querySelectorAll('a[href]')).filter(a => {
        const u = new URL(a.href);
        return u.origin === location.origin && u.pathname === location.pathname && u.hash && !document.getElementById(decodeURIComponent(u.hash.slice(1)));
      }).map(a => a.href));
      assert.deepEqual(brokenAnchors, [], route);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `desktop overflow: ${route}`);
      report.pages.push({ route, status: response.status() });
    }
    for (const [route, lang] of [['/', 'fr'], ['/en/', 'en'], ['/ar/', 'ar']]) {
      for (const width of [1440, 768, 390, 360]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(base + route, { waitUntil: 'networkidle' });
        await page.evaluate(async () => {
          document.querySelectorAll('img').forEach(img => img.loading = 'eager');
          await document.fonts.ready;
          await Promise.all(Array.from(document.images).map(img => img.decode()));
        });
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${lang} overflow ${width}`);
        if (width === 1440 || width === 390) await page.screenshot({ path: `${output}/${lang}-${width}.png`, fullPage: true });
        if (width === 1440 || width === 390) {
          const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
          report.accessibility.push({ lang, width, violations: result.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })) });
        }
      }
      await page.locator('.menu-toggle').click();
      assert.equal(await page.locator('#mobile-nav').isVisible(), true);
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#mobile-nav').isVisible(), false);
      await page.locator('.faq summary').first().click();
      assert.equal(await page.locator('.faq details').first().getAttribute('open'), '');
      await page.locator('.more-services summary').click();
      assert.equal(await page.locator('.service:visible').count(), 8);
      const zoneLink = await page.locator('.chips a').first().getAttribute('href');
      assert.ok(new URL(zoneLink).searchParams.get('text').length > 15);
      assert.equal(await page.locator('.hero__actions a').first().getAttribute('href'), 'tel:+212604019495');
      report.interactions.push(`${lang}: mobile menu, Escape, FAQ, extra services, phone and WhatsApp links`);
    }
    await page.goto(base + '/quartiers/gueliz/');
    await page.locator('.language-picker summary').click();
    await page.locator('.language-picker a[lang="ar"]').click();
    assert.equal(new URL(page.url()).pathname, '/ar/ahya/gueliz/');
    report.interactions.push('Language switch preserves neighbourhood route');
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto(base + '/');
    await page.locator('#copy-number').click();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), '06 04 01 94 95');
    report.interactions.push('Clipboard contains the configured phone number');
    const nojs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    const plain = await nojs.newPage();
    await plain.goto(base + '/');
    await plain.locator('.faq summary').first().click();
    assert.equal(await plain.locator('.faq details').first().getAttribute('open'), '');
    await plain.locator('.language-picker summary').click();
    assert.equal(await plain.locator('.language-picker a[lang="en"]').isVisible(), true);
    assert.ok(await plain.locator('.chips a').first().getAttribute('href'));
    report.interactions.push('FAQ, language picker and district links work without JavaScript');
    report.browserErrors = errors;
    fs.writeFileSync(`${output}/ui-report.json`, JSON.stringify(report, null, 2));
    assert.deepEqual(errors, []);
    assert.equal(report.accessibility.reduce((n, r) => n + r.violations.length, 0), 0, 'Accessibility violations: see report');
    console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
