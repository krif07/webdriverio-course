import homePage from "../pages/home.page";

describe('Home', () => {
    it('Open url and assert title', async () => {
       await homePage.open();
       await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });

    it('Open about url and assert the entire url', async () => {
        await browser.url('https://practice.automationbro.com/about/');
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/')
    });

    it('Click get started button and assert url contains get-started text', async () => {
        await homePage.open();
        await homePage.btnGetStarted.click();
        await expect(browser).toHaveUrlContaining('get-started');
    });

    it('Click automation bro logo and assert url does not contain get-started text', async () => {
        await browser.url('https://practice.automationbro.com/#get-started');
        await $('.custom-logo-link').click();
        await expect(browser).not.toHaveUrlContaining('get-started');
    });

    it('Find heading text and assert the text', async () => {
        await homePage.open();
        const text = await homePage.textHeading.getText();
        await expect(text).toEqual('Think different. Make different.');
    });

    it('Find heading text and assert the text - second method', async () => {
        await homePage.open();
        const textElement = await homePage.textHeading;
        await expect(textElement).toHaveText('Think different. Make different.');
    });
});
