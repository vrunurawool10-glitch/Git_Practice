import { chromium, firefox, test } from "@playwright/test";

test('page context testing', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await page2.goto("https://playwright.dev/");

})

test('handle tabs', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const parentpage = await context.newPage();

    await parentpage.goto("https://testautomationpractice.blogspot.com/");

    // context.waitForEvent('page')  // waiting for event  pending, fullfield, rejected.
    //page1.getByText('New Tab').click() //on click of this new tab is opned.
    //promise.all () -> promising that all events should capure at time

    const [childpage] = await Promise.all([context.waitForEvent('page'), await parentpage.getByText('New Tab').click()]);

    const pages = context.pages();  // this will return number of tabs open

    console.log("how may tabs are opened " + pages.length);
    //approch 1

    // console.log("first tab title is" + await pages[0].title() + " " + "2nd tab title is " + await pages[1].title());

    //approch 2  - by calling parnet anc child
    console.log("first tab title is" + await parentpage.title() + " " + "2nd tab title is " + await childpage.title());


})


test.only('handle popup windows', async ({ browser }) => {

    const context = await browser.newContext();
    const parentpage = await context.newPage();

    await parentpage.goto("https://testautomationpractice.blogspot.com/");


    //  parentpage.waitForEvent('popup');
    //parentpage.locator("#popup").click();


     await Promise.all([parentpage.waitForEvent('popup'), await parentpage.locator('#PopUp').click()]);

    const allwindowpopups = context.pages(); // this will writern array of pages.
    console.log("total popup windows are" + allwindowpopups.length);

    console.log(allwindowpopups[1].url());
    console.log(allwindowpopups[0].url());
})