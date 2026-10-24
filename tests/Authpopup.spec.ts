import { chromium, expect, firefox, test } from "@playwright/test";

test('authenticated load popupapproch 1', async ({ browser }) => {

    const context = await browser.newContext();
    const page1 = await context.newPage();

    //page1.goto('https://the-internet.herokuapp.com/basic_auth');

    //to add username and passowrd below is the syntax
    // https://username:password@domain path

    // approch 1 : directly pass and username along with url
    await page1.goto('http://admin:admin@the-internet.herokuapp.com/basic_auth');

    await page1.waitForLoadState() //wait for page loaded completely.
    await expect(page1.getByText('Basic Auth')).toBeVisible();


})


test.only('authenticated load popup approch 2', async ({ browser }) => {

    const context = await browser.newContext({httpCredentials:{username:'admin', password:'admin'}});
    const page1 = await context.newPage();

    page1.goto('https://the-internet.herokuapp.com/basic_auth');

    //to add username and passowrd below is the syntax
    // https://username:password@domain path

    // approch 1 : directly pass and username along with url
   // await page1.goto('http://admin:admin@the-internet.herokuapp.com/basic_auth');

    await page1.waitForLoadState() //wait for page loaded completely.
    await expect(page1.getByText('Basic Auth')).toBeVisible();



})