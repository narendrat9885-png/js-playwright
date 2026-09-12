import { test, expect } from '@playwright/test';

export class checkoutlogoutpage
{
    constructor(page)
    {
        this.page=page; 
        this.openmenu= page.locator("//button[text()='Open Menu']")
        this.logoutbutton= page.locator('#logout_sidebar_link')
    }

    async logoutapplication()
    {
        await this.openmenu.click(); 
        await this.logoutbutton.click(); 
    }

}