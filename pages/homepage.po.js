import { test, expect } from '@playwright/test';
export class homepage{

    constructor(page)
    {
        this.page=page; 
        this.productselect= page.locator("//div[text()='Sauce Labs Backpack']"); 
        this.addtocare=page.locator("//button[text()='Add to cart']"); 
        this.addtocart=page.locator('//a[@data-test="shopping-cart-link"]')

    }
    async prodclic()
    {
        await this.productselect.click(); 
        await this.addtocare.click(); 
        await this.addtocart.click();

    }
    
}