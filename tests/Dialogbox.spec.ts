import { expect, test } from "@playwright/test";

test('alert dialogboxes', async ({ page }) => {
    //Simpel dialog box
    await page.goto('https://testautomationpractice.blogspot.com/');
    //dialog handlar - aleret    
    page.on('dialog', dialog => {
        console.log(dialog.type() + dialog.message());
        dialog.accept();
    });

    await page.locator('#alertBtn').click();
    await page.waitForTimeout(2000);

})

test('confirm dialogboxes', async ({ page }) => {
    //Simpel dialog box
    await page.goto('https://testautomationpractice.blogspot.com/');
    //dialog handlar - confirm    
    page.on('dialog', dialog => {
        console.log(dialog.type() + dialog.message());
        //dialog.accept();  // accept dialog box with ok button
        dialog.dismiss(); //dismiss the dilog box with cancle button
    });

    await page.locator('#confirmBtn').click();

    const msg = await page.locator('#demo').innerText();
    // expect(msg).toContain('You pressed OK!');
    expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
})


test.only('prompt aleret/ dialogboxes', async ({ page }) => {
    //Simpel dialog box
    await page.goto('https://testautomationpractice.blogspot.com/');
    //dialog handlar - prompt    
    page.on('dialog', dialog => {
        console.log(dialog.type() +"  " + dialog.message() +" " + dialog.defaultValue());
        dialog.accept("John");     // accept dialog box with ok button   
        //dialog.dismiss(); //dismiss the dilog box with cancle button
    });

    await page.locator('#promptBtn').click();

    const msg = await page.locator('#demo').innerText();
    console.log(msg);
    //await expect(page.locator('#demo')).toHaveText("Hello John! How are you today?");
    //expect(msg).toContain('User cancelled the prompt.');
})



