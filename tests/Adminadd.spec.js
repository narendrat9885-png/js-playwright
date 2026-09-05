import { test, expect } from '@playwright/test';
import { fakerDE as faker } from '@faker-js/faker';
import orangehrmcred from "../testdata/HRML.json"
import addempdetails from "../testdata/HRMadddetails.json"

test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder("username").fill(orangehrmcred.username)
    await page.getByPlaceholder("password").fill(orangehrmcred.password)
    await page.locator('//button[@type="submit"]').click()

    console.log("login functionality working as expected")
    await page.locator("//span[text()='Admin']").click()
    await page.locator('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click()
    await page.getByText('Job Titles').click()
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(faker.person.jobTitle())
    await page.getByPlaceholder("Type description here").fill(addempdetails['Job Description'])
    await page.getByPlaceholder("Add note").fill(addempdetails.notes)
    await page.locator('//button[@type="submit"]').click()

});