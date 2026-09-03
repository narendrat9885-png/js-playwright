
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder("username").fill('Admin')
    await page.getByPlaceholder("password").fill('admin123')
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
    await page.locator("//a[text()='Add Employee']").click()
    await page.getByPlaceholder('First Name').fill('indra')
    await page.getByPlaceholder('Middle Name').fill('T')
    await page.getByPlaceholder('Last Name').fill('reddy')
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator("//h6[text()='Personal Details']")).toContainText("Personal Details")

});

test('verify login functionality with invalied credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder("username").fill('Admin')
    await page.getByPlaceholder("password").fill('admin1234')
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible('Invalid credentials')
});

