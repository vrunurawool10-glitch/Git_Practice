import {test, expect, Locator} from "@playwright/test";

test('For Chrome process get value of  CPU load.',async({page})=>{

    await page.goto('https://practice.expandtesting.com/dynamic-table');

   const table= page.locator('table.table tbody');

   await expect(table).toBeVisible();

   //to get rowpath
   const rowpath : Locator = table.locator("tr");
   
   //get all row path into array collection
   const rowarry:Locator[] = await rowpath.all();
    console.log(' total rows are : ' + rowarry.length);

    await expect(await rowpath.count()).toBe(4);

   //get single value of cell

   const headers = await page.locator('table.table thead tr th').allInnerTexts();
   let cpuloc:number = await headers.indexOf('CPU');
  
   const cellvalue:String[] = await rowpath.locator('td').allInnerTexts();
   
   //For Chrome process get value of  CPU load.

   let cpudata:string ='';
   for(let data of cellvalue) 
  {
    if(data==='Chrome')
    {
       cpudata = await rowpath.locator('td').nth(cpuloc).innerText();
        console.log('cpu data value', cpudata);
    }

   }

    //compare it with value in the yellow label.

    const yellotextloc = await page.locator('#chrome-cpu');

     expect(await yellotextloc.innerText()).toContain(cpudata);


})