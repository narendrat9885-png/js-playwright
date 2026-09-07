import { test, expect } from '@playwright/test';
import aqdata from "../testdata/Demoqa.json"
import prodtest from "../testdata/Demoprodde.json"

test('test', async ({ page }) => {
    let data;
     
    if(process.env.environment=="qa")
    {
        data=aqdata;
    }
    else if(process.env.environment =="prod")
    {
        data=prodtest;
    }

    await page.goto('https://demoqa.com/')
    await page.locator('//h5[text()="Elements"]').click()
    await page.locator('//span[text()="Text Box"]').click()
    await page.getByPlaceholder('Full Name').fill(data.fullname)
    await page.getByPlaceholder("name@example.com").fill(data.email)
    await page.getByPlaceholder("Current Address").fill(data.currentaddress)
    await page.locator('//textarea[@id="permanentAddress"]').fill(data.perminentaddress)

}); 