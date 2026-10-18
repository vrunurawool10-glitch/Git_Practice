import  { test, expect, Locator, Page } from '@playwright/test';

test('multi select dropdown handle', async ({ page }) =>
{
await page.goto('https://testautomationpractice.blogspot.com');
await  page.locator('#colors').selectOption(['Red', 'Green', 'Blue']); //by visible text
//await page.locator('#colors').selectOption([{ label: 'Red' }, { label: 'Green' }, { label: 'Blue' }]); //by label
//await page.locator('#colors').selectOption([{ value: 'red' }, { value: 'green' }, { value: 'blue' }]); //by value
await page.locator('#colors').selectOption([{ index: 0 }, { index: 1 }, { index: 2 }]); //by index

//check the number of selected options

const totaloptions = page.locator('#colors>option:checked').count();
console.log(await totaloptions);

    expect.soft(await totaloptions).toBe(3);

const coloroption = page.locator('#colors>option');
  const nameofcolor = (await coloroption.allTextContents()).map((color: string) => color.trim());

  console.log(nameofcolor);
  expect.soft(nameofcolor).toContain('Green');

})
