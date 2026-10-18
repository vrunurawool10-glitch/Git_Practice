import { test, expect, Locator, Page } from '@playwright/test';

const url = 'https://testautomationpractice.blogspot.com';

test('Dropdown Handle', async ({ page }) => 
    
{
  await page.goto(url);
  await page.locator('#country').selectOption('India'); //by visible text
  await page.locator('#country').selectOption({ label: 'India' }); //by label
  await page.locator('#country').selectOption({ value: 'uk' }); //by value
  await page.locator('#country').selectOption({ index: 3 }); //by index 
});

test ('check number of options', async ({ page }) => 
{

  await page.goto(url);

  //check number of options in the dropdown

  const totaloptions :Locator =page.locator('#country>option');
  console.log(await totaloptions.count());

  await expect(totaloptions).toHaveCount(10); 
})

test('Check the text of each option', async ({ page }) =>
{
  await page.goto(url);

  const countryOptions = page.locator('#country > option');
  const nameOfCountry = (await countryOptions.allTextContents()).map((country: string) => country.trim());

  console.log(nameOfCountry);
  expect(nameOfCountry).toContain('Canada');
})