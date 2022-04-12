
const puppeteer = require("puppeteer");
describe('Google', () => {
 //     beforeEach (async () => {
 //     browser = await puppeteer.launch({ headless: true });
 //     page = await browser.newPage();
 // })
    beforeAll(async () => {
        await page.goto('file://C:/github/sick/index.html');
    })

    it('should display "google" text on page', async () => {
        await expect(page).toMatch('google');
    })
})
