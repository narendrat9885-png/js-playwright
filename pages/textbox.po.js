import { test, expect } from '@playwright/test';

export class TextboxPage {

    constructor(page) {
        this.page = page;

        this.FullName = page.locator('#userName');
        this.FillEmail = page.locator('#userEmail');
        this.CurrentAddress = page.locator('#currentAddress');
        this.PermanentAddress = page.locator('#permanentAddress');
        this.SubmitButton = page.locator('#submit');

        this.DisplayName = page.locator('#name');
        this.DisplayEmail = page.locator('#email');
        this.DisplayCurrentAddress = page.locator('#output #currentAddress');
        this.DisplayPermanentAddress = page.locator('#output #permanentAddress');
    }

    async launchUrl() {
        await this.page.goto('https://demoqa.com/text-box');
    }

    async fillingDetails(name, email, currentaddress, permanentaddress) {

        await this.FullName.fill(name);
        await this.FillEmail.fill(email);
        await this.CurrentAddress.fill(currentaddress);
        await this.PermanentAddress.fill(permanentaddress);

        await this.SubmitButton.click();
    }

    async resultDisplayed(name, email, currentaddress, permanentaddress) {

        await expect(this.DisplayName).toContainText(name);
        await expect(this.DisplayEmail).toContainText(email);
        await expect(this.DisplayCurrentAddress).toContainText(currentaddress);
        await expect(this.DisplayPermanentAddress).toContainText(permanentaddress);
    }
}