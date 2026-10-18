import {test ,expect, Locator} from '@playwright/test';

/*
test('check static table operations',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com');

//check if table is visible or nor
const table= await page.locator("table[name='BookTable']");
await expect(table).toBeVisible();

// check if row count

//const row:Locator = await page.locator("//table[@name='BookTable']/tbody/tr");

// chaining locator
const row:Locator = await table.locator("tr");
const rowcount:number = await row.count();
console.log(rowcount);

//check the colos

const cols= row.locator("td");
console.log( await cols.nth(2).innerText());
const colscount:number= await cols.count();
console.log(colscount);

//print the 1st 2 rows of the table.

for(let i=0; i<rowcount; i++)
{
    console.log(await row.nth(i).innerText());

    for(let j=0; j==i; j++)
    {
        console.log(await cols.nth(j).innerText());
    }

}
})
*/

test('print table with diff approch',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com');
//2nd approch to print all the table.
const header = page.locator("//table[@name='BookTable']/tbody/tr/th");
console.log('table header : '+ await header.allInnerTexts());

//to collect rows locator use the all() method.

const allrow:Locator[]= await page.locator("//table[@name='BookTable']/tbody/tr").all();

for(let data of await allrow.slice(1))
{
    const cols1 = await data.locator("td").allInnerTexts();
    console.log(cols1);
}

})