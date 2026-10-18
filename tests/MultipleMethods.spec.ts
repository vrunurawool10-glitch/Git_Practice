import {test ,expect, Locator} from '@playwright/test';

test('check TextContent() vs innerText()',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

    const productTitle:Locator = await page.locator('.product-title');
    console.log('Total products are: '+ await productTitle.count());

    ///innerText() method is used to get the text content of an element, including its child elements, 
    // and returns a string representation of the visible text. eleminats whitespaces and line breaks
    //it only return string

 for(let i=0; i<await productTitle.count(); i++)
    {
              console.log('Product price is: '+ await productTitle.nth(i).innerText());
    }


    //textContent() method is used to get the text content of an element, excluding its child elements,
    // and returns a string representation of the text content of the element itself. including all whitespace and line breaks
    //it return null or string.

    for(let i=0; i<await productTitle.count(); i++)
    {

       const prodname:string|null= await productTitle.nth(i).textContent();
        console.log('Product title is: '+ prodname?.trim()); // due textContent() it carries whitespace with result hence we have to trim the result
      
    }


    //all() convert licators--> locator array

  const pname:Locator[]=await  productTitle.all();
  console.log(pname);

  //single element printing 
  console.log(await pname[1].innerText());

  for(let i of pname)
  {
  console.log(await i.innerText());

  }



})

test('check allInnerText() vs allTextContent()',async({page})=>{

     await page.goto('https://demowebshop.tricentis.com/');

   // const prodname:string [] = await page.locator('.product-title').allInnerTexts();
    //console.log('prod name with allinnertext ', prodname);

      const prodname:string [] = await page.locator('.product-title').allTextContents();
    console.log('prod name with alltextcontent ', prodname);

   const pname:string[]= await prodname.map(text=>text.trim())
        console.log('prod name with alltextcontent with trim ', pname);

})
