import { test, expect } from '@playwright/test';


import{loginpage} from '../pages/saucelogin.po'
import{homepage} from'../pages/homepage.po'
import{yourcart} from '../pages/yourcart.po'
import{checkoutinfopage}from '../pages/checkuot.po' 
import{checkoutlogoutpage} from '../pages/logout.po'

export class pagefactory
{

    static getpage(page, pagename)
    {
     switch(pagename)
     {
        case "login": return new loginpage(page);
        case "home": return new homepage(page); 
        case "yourcart": return new yourcart(page); 
        case "checkout": return new checkoutinfopage(page); 
        case "logout": return new checkoutlogoutpage(page); 
        defualt:  throw new Error(`Unknown page: ${pageName}`);

     }
    }
}
