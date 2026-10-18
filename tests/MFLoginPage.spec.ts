
import{test, expect} from '@playwright/test';

test('MF Login Page', async ({ page }) => {

    page.goto('https://mutualfund.adityabirlacapital.com/portal/investor/login');
    console.log('Navigated to MF Login Page');

    await page.getByPlaceholder('Enter User ID').fill('vrunalirawool');
    console.log('User ID Entered');

    await page.locator('#Password').fill('$Money@4');
    console.log('Password Entered');

    await page.getByText('I agree with the').click();
    await page.locator('label').nth(2).click({ force: true });

   // await page.locator('label').nth(2).click();
   // console.log('Clicked on Remember Me checkbox');
  //  await page.locator('label').nth(2).check();
    //console.log('Checked Remember Me checkbox');

  //  const acceptTerms = page.locator('#acceptTerms');
   // await acceptTerms.locator('xpath=..').click({ position: { x: 10, y: 10 } });
    //await expect(acceptTerms).toBeChecked();


    console.log('Accepted Terms and Conditions');

    await page.getByRole('button', { name: 'Login' }).click();
    console.log('Clicked on Login button');

})
