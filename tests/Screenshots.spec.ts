
import {test, expect} from "@playwright/test"

test('screenshot practice', async ({page})=> {

    await page.goto("https://demoblaze.com/index.html");

    const newtime = Date.now();
    console.log(newtime);
// normal screenshot
  // await page.screenshot({path:'Screenshots/demoscreenot'+newtime+'.jpg'});
// full page screenshot top to bottom  even if page is scrollable
 //  await page.screenshot({path:'Screenshots'+'/demoscreenshot'+newtime+'.jpg', fullPage:true});
 //for single element
 await (page.locator('#nava')).screenshot({path:'test-results/Screenshots'+'/demoscreenshot'+newtime+'.jpg'});


})