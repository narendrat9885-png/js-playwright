import { test, expect } from '@playwright/test';
import {loginpage} from '../pages/saucelogin.po'

test('verify sauce login', async({page}) =>
    {
      await page.goto('https://www.saucedemo.com/')
      let login=new loginpage(page)
      await login.performlogin('standard_user', 'secret_sauce');
      
       
    });  