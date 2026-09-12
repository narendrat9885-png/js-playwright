import { test, expect } from '@playwright/test';
import jsonsaucelogin from '../testdata/saucelogi.json'

import { pagefactory } from '../factory/pagefactory'

test.beforeEach('verify sauce login', async({page}) =>
    {
      await page.goto('https://www.saucedemo.com/')
      let nlogin=pagefactory.getpage(page, "login"); 
      await nlogin.performlogin(jsonsaucelogin.Username, jsonsaucelogin.password);
    })

test('verify add to cart', async({page}) =>
    {

      let prodhomepage=pagefactory.getpage(page, "home");
     await prodhomepage.prodclic();

      let nyourcart=pagefactory.getpage(page, "yourcart");
      await  nyourcart.checkoutbutton();

      let ncheckoutinfopage=pagefactory.getpage(page, "checkout");
      await ncheckoutinfopage.checkoutinformation("Narendra", "reddy", "787676");
       
    })

    test.afterEach(async({page})=>
    {
      let nlogout=pagefactory.getpage(page, "logout");
      await nlogout.logoutapplication();
    });