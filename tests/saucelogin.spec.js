import { test, expect } from '@playwright/test';
import slogin from '../testdata/saucelogi.json'

import {loginpage} from '../pages/saucelogin.po'

test('verify sauce login', async({page}) =>
    {
      await page.goto('https://www.saucedemo.com/')
      let login=new loginpage(page)
      await login.performlogin(slogin.Username, slogin.password);
      

      

      
      

      
      
      
    }
)   