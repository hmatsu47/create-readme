import puppeteer from 'puppeteer';

(async () => {
  const url_a = 'https://hmatsu47.github.io/create-readme/?route=articles';
  const url_s = 'https://hmatsu47.github.io/create-readme/?route=slides';

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 980,
      height: 1080,
    },
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto(url_a, { timeout: 60000, waitUntil: 'load' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'production/docs/articles.png' });
  await page.goto(url_s, { timeout: 60000, waituntil: 'load' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'production/docs/slides.png' });
  await browser.close();
})();
