const puppeteer = require("puppeteer");

describe('marks', () => {

    beforeAll(async () => {
        await page.goto('file://C:/github/sick/index.html');
    })

    it('should display "google" text on page', async () => {
        //find text in page
        await expect(page).toMatch('Simple Interest Calculator');

    })
    it('02 Principal input box is present', async () => {
        const selected = await page.evaluate(() => {
            return document.getElementById("principal");

        });
        expect(selected).toBeTruthy();
    })
    it('03 Interest slider is present', async () => {
        const selected = await page.evaluate(() => {
            return document.getElementById("rate");

        });
        expect(selected).toBeTruthy();
    })

    it('04 the dropdown box expands to the number of years', async () => {
        let selected = await page.evaluate(() => {
            return parseInt(document.getElementById("years").value);

        });
        expect(selected).toBe(1);
        await page.select("#years", "10");

        selected = await page.evaluate(() => {
            return parseInt(document.getElementById("years").value);

        });
        expect(selected).toBe(10);

    })
    it('05 The compute interest button is present', async () => {
        const selected = await page.evaluate(() => {
            return document.getElementById("ComputeInterest");

        });
        expect(selected).toBeTruthy();
    })
    it('06 Amount 1000, rate 10, years 10', async () => {

        await page.type('#principal', "1000");
        await page.evaluate(() => {
            document.getElementById("rate").value = 10;
        })
        await page.select("#years", "10");
        const beforeText = await page.evaluate(() => {
            return document.getElementById("result").innerHTML;

        });
        expect(beforeText).toBe("");
        await page.click("#ComputeInterest");
        const afterText = await page.evaluate(() => {
            return document.getElementById("result").innerHTML;

        });
        expect(afterText).toBe("If you deposit <mark>1000</mark>,<br>at an interest rate of <mark>10</mark>,<br>you will receive an amount of <mark>1000</mark>,<br> in the year <mark>2032</mark>");


    })

    it('16 The title of the page is: Web App - Simple Interest Calculator', async () => {

        const title = await page.title();
        expect(title).toBe("Web App - Simple Interest Calculator");
    })


})
