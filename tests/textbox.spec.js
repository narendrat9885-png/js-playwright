import { test } from '@playwright/test';

import { TextboxPage } from '../pages/textbox.po';

import testdata from '../testdata/login.json';

test('Execute Text Box Test', async ({ page }) => {

    const textbox = new TextboxPage(page);

    await textbox.launchUrl();

    await textbox.fillingDetails(
        testdata.fullname,
        testdata.email,
        testdata.currentaddress,
        testdata.permanentaddress
    );

    await textbox.resultDisplayed(
        testdata.fullname,
        testdata.email,
        testdata.currentaddress,
        testdata.permanentaddress
    );

});
