import { test, expect } from '@playwright/test';


export class loginpage {

    constructor(page) {
        this.page = page
        this.usernamebox = page.locator('#user-name');
        this.userpassword = page.locator('#password');
        this.loginbutton = page.locator('#login-button');

    }
    async performlogin(username, password)
     {
        await this.usernamebox.fill(username);
        await this.userpassword.fill(password);
        await this.loginbutton.click()
    }
}