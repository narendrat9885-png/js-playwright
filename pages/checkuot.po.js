import { test, expect } from '@playwright/test';
export class checkoutinfopage
{
   constructor(page)
   {
     this.page=page;
     this.firstname= page.locator('#first-name'); 
     this.lastname=page.locator('#last-name'); 
     this.zipcode=page.locator('#postal-code')
     this.continbu=page.locator('#continue')
   }
   async checkoutinformation(firstname, lastname, postalcode)
         {
            this.firstname.fill(firstname); 
            this.lastname.fill(lastname);
            this.zipcode.fill(postalcode); 
            this.continbu.click


         }
     

}