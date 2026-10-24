import { expect, test } from "@playwright/test";

test('autowaiting checks', async({page})=>{


   await page.goto("https://demowebshop.tricentis.com/");
   await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

   await page.locator("#small-searchterms").fill("laptop", {force:true});  // this will fill forcefull fill the inputbox
   await page.locator("[type='submit']").click({force:true});  // this will forcefull click action

})