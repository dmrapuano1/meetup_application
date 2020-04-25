import puppeteer from 'puppeteer';

describe('Show/hide an event\'s details', () => {

  test('an event is collapsed by default', async () => {
    jest.setTimeout(30000);
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto('http://localhost:3000/meetup_application');
    await page.waitForSelector('.events');
    const visibility = await page.$('.events .visibility');
    expect(visibility).toBeNull();
    browser.close();
  });
});