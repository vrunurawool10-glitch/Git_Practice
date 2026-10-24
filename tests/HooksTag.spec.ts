import { test, expect } from '@playwright/test';

test('prints messages to the test output', async ({ page }) => {
	console.log('Test started');

	await page.setContent('<h1>Hello, Playwright!</h1>');
	await expect(page.getByRole('heading', { name: 'Hello, Playwright!' })).toBeVisible();

	console.log('Test completed successfully');
    
});









