import {test, expect,Locator} from '@playwright/test';

const url= "https://testautomationpractice.blogspot.com/";

test('date picker test', async({page})=>{

 await page.goto(url);
 await page.locator('#datepicker').fill('10/09/1994');

 await page.waitForTimeout(4000);

 


})