import {test, expect} from "@playwright/test"

const url="https://demoblaze.com/index.html";

test('video capture test', async({page})=>
{

   const videopath= await page.video()?.path();
   console.log(videopath);
    await page.goto(url);

    //locator by id
    await page.click('id=login2');
    console.log("loginbutton is click");

    
    //locator by css
    await page.locator('#loginusername').fill('vrunali')
    console.log("username is enterd");
    
    //locator by xpath
    await page.type('id=loginpassword','test@123')
    console.log("password is enterd");      
    
    //locator xpath
    await page.click('//button[@onclick="logIn()"]');
    console.log("login is clicked");
    
    const nameofuser= page.locator('//a[@id="nameofuser"]');
    expect(nameofuser).toBeVisible;             // non-retryving assertions which is applied on value.
    console.log("name is visible" + nameofuser);

    await page.close();
    console.log("test close");
    
});

