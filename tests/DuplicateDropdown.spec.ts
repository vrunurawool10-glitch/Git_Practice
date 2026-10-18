
import  { test, expect, Locator, Page } from '@playwright/test';

test('check if dropdown having duplicates or not', async ({ page }) =>
{
    await page.goto('https://testautomationpractice.blogspot.com');

    const animal = page.locator('#animals>option'); //not having duplicate
    //const animal = page.locator('#colors>option'); //having duplicats

    const animal1 = (await animal.allTextContents()).map((prani: string )=> prani.trim());

    const myset=new Set<String>();
    const duplicatelist:String[]=[];

    for(const text of animal1)
    {
        if(myset.has(text))
        {
            duplicatelist.push(text);
        }
        else
        {
            myset.add(text);
        }
    }

    console.log(duplicatelist);
    expect(duplicatelist).toHaveLength(0);

})