import  { test, expect, Locator, Page } from '@playwright/test';

test('check if dropdown is sorted or not', async ({ page }) =>
{
await page.goto('https://testautomationpractice.blogspot.com');
//const animal = page.locator('#animals>option'); //sorted list
const animal = page.locator('#colors>option'); //unsorted list

const animal1 = (await animal.allTextContents()).map((prani: string )=> prani.trim());
console.log(await animal.count())

const originalList =[...animal1];
const sortedlist =[...animal1].sort();

console.log(originalList);
console.log(sortedlist);

expect.soft(originalList).toEqual(sortedlist);
})