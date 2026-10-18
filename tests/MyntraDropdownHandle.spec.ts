import {test ,expect, Locator} from '@playwright/test';

test('myntra dropdown handle test ',async({page})=>{

    await page.goto('https://www.myntra.com/');

    await page.locator('.desktop-searchBar').fill('dress');
    await page.waitForTimeout(4000);
    
    const result:Locator = await page.locator("//ul[@class='desktop-group']/li");
    
    console.log('Total search results are: '+ await result.count());

    
 })