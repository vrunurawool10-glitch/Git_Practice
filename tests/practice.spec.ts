
import{ test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('Navigated to playwright.dev');
})