import { test, expect } from '@playwright/test';

export class yourcart
{

    constructor(page)
    {
        this.page=page; 
        this.checkoutbut= page.locator("#checkout"); 

    }

    async checkoutbutton()
    {
      await this.checkoutbut.click()
    }
}