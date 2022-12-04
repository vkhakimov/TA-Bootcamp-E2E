const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the home page', async () => {
    await browser.url(`https://www.newegg.com/`);
});

When(/^I enter the (.*) into the search bar$/, async (value) => {
    await $('//input[@type = "search"]').setValue(value);
});

When('I click on the Search button', async () => {
    await $('button.ico.ico-search').click();
});

Then(/^I should see at least one search result for (.*)$/, async (value) => {
    const searchResult = $('div.item-info > a')
    await expect(searchResult).toBeExisting();
    await expect(searchResult).toHaveTextContaining(value);
});

When("I click on the Today's Best Deals tab", async () => {
    await $(`//a//span[text() = "Today's Best Deals"]`).click();
});

When("I click on the first internet shop logo", async () => {
    await $(`(//div//div//a[@class="item-brand"])[1]`).click();
});

Then('I should see the main brand page opened', async () => {
    await expect($(`//div[contains(text(), 'Store at Newegg')]`)).toBeExisting();
});

When('I refresh the browser page to close the promo banner', async () => {
    browser.refresh();
});