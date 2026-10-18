import {test, expect, Locator} from '@playwright/test';  

test('Dynamic Dropdown Test', async ({ page }) => {

    await page.goto('https://www.flipkart.com/'); // Replace with the actual URL of the dynamic dropdown page
   
    // Wait for the login popup and close it
    await page.getByRole('button', { name: '✕' }).click();

    const searchInput = page.locator('input.nw1UBF.v1zwn26:visible').fill('laptop'); // Replace with the actual input field selector
     
    const listofoptions = await page.locator('ul>li');
    await  page.waitForSelector('ul>li');

   const totalconut= await listofoptions.count();
  
   console.log(totalconut);

//printing all the suggested options

const text= await listofoptions.allTextContents();

console.log(text); 

//selecting the laptop stand option from the list
  if(text.includes('laptop stand'))
  {
    await listofoptions.nth(text.indexOf('laptop stand')).click();
  }

})