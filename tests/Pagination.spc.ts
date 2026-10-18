
import{test, expect} from '@playwright/test'

test('pagination test',async({page})=>{

    await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');

    const table = page.locator('#example');
    const tableheader = page.locator('#example thead tr th');
    const rows = page.locator('#example tbody tr td');

})