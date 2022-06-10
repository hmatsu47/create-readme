import puppeteer from 'puppeteer';

(async () => {
  const url_b = 'https://hmatsu47.github.io/create-readme/?route=blog';
  const url_s = 'https://hmatsu47.github.io/create-readme/?route=slides';

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 980,
      height: 1080,
    },
    headless: true
  });
  const page = await browser.newPage();

  await page.goto(url_b, { waitUntil: 'load' });
  await page.screenshot({ path: 'docs/blog.png' });
  await page.goto(url_s, { waitUntil: 'load' });
  await page.screenshot({ path: 'docs/slides.png' });
  await browser.close();
})();
