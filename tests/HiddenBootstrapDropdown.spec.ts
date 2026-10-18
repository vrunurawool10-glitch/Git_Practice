import {test, expect, Locator} from '@playwright/test';  

test('bootstrap hidden dropdown test', async ({ page }) => 
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')   // Replace with the actual URL of the dynamic dropdown page

   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');

   await page.getByRole('button', {name:'Login'}).click();

    //clcik on PIM option
    const PIM= await page.getByText('PIM').click();
 

    //select on job title:
    await page.locator('.oxd-select-text--after').nth(2).click();
   await page.waitForTimeout(4000);
    //get all the options from the dropdown

    const alljobrole: Locator = await page.locator("//div[@role='option']");

    console.log('Total job roles are: '+ await alljobrole.count());

    const alljobroletext= await alljobrole.allTextContents();
    console.log('Job role texts are: ', alljobroletext);

    for(let i=0; i<alljobroletext.length; i++)
    {
        const opt=await alljobrole.nth(i).textContent();
        if(opt==='QA Lead')
        {
            await alljobrole.nth(i).click();
            break;
        }
    }  
    
    page.waitForTimeout(4000);
})



