const puppeteer = require("puppeteer");
describe('marks', () => {
    beforeAll(async () => {
        await page.goto('file://C:/github/sick/index.html');
    })
    it('07 Amount 4800, rate 15,25, years 5', async () => {

        await page.type('#principal', "4800");
        await page.evaluate(() => {
            document.getElementById("rate").value = 15.25;
        })
        await page.select("#years", "5");
        await page.click("#ComputeInterest");
        const afterText = await page.evaluate(() => {
            return document.getElementById("result").innerHTML;

        });
        expect(afterText).toBe("If you deposit <mark>4800</mark>,<br>at an interest rate of <mark>15.25</mark>,<br>you will receive an amount of <mark>3660</mark>,<br> in the year <mark>2027</mark>");


    })
});

describe('marks', () => {
    beforeAll(async () => {
        await page.goto('file://C:/github/sick/index.html');
    })
    it('10 alert for empty principal', async () => {
        let message;
        page.once('dialog', async dialog => {
            message = dialog.message();
            await dialog.dismiss();
        });
        await page.click("#ComputeInterest")
        expect(message).toContain("Enter a positive number");
    })
});
describe('marks', () => {
    beforeAll(async () => {
        await page.goto('file://C:/github/sick/index.html');
    })
    it('09 Amount -1 alert for negative principal', async () => {
        let message;
        page.once('dialog', async dialog => {
            message = dialog.message();
            await dialog.dismiss();
        });
        await page.evaluate(() => {
            document.getElementById("principal").value = -1;
        })
        await page.click("#ComputeInterest")
        expect(message).toContain("Enter a positive number");
    })
});
describe('marks', () => {
    beforeAll(async () => {
        await page.goto('file://C:/github/sick/index.html');
    })
    it('08 Amount 0 alert for 0 principal', async () => {
        let message;
        page.once('dialog', async dialog => {
            message = dialog.message();
            await dialog.dismiss();
        });
        await page.evaluate(() => {
            document.getElementById("principal").value = 0;
        })
        await page.click("#ComputeInterest")
        expect(message).toContain("Enter a positive number");
    })
});

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
            let slider = document.getElementById("rate");

            slider.value = 10;
            slider.dispatchEvent(new Event("input"));
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
        const rateSpan = await page.evaluate(() => {

            return document.getElementById("rateSpan").innerHTML;
        });
        expect(rateSpan).toBe("10%");
    })

    it('16 The title of the page is: Web App - Simple Interest Calculator', async () => {

        const title = await page.title();
        expect(title).toBe("Web App - Simple Interest Calculator");
    })


})

