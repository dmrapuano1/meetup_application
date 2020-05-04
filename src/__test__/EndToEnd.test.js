import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(60000)
    browser = await puppeteer.launch({
      // headless: false,
      args: ["--no-sandbox"]
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const visibility = await page.$('.event .visibility');
    expect(visibility).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .detailsBtn');

    const visibility = await page.$('.event .visibility');
    expect(visibility).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .closeBtn');

    const visibility = await page.$('.event .visibility');
    expect(visibility).toBeNull();
  });
});