import puppeteer from 'puppeteer';

describe('Show/hide an event details', () => {

  test('an event is collapsed by default', async () => {
    jest.setTimeout(30000);
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
    const visibility = await page.$('.event .visibility');
    expect(visibility).toBeNull();
    browser.close();
  });
});