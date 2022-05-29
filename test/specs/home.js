import homePage from "../pages/home.page";

describe('Home', () => {

    before(async () => {
        console.log("User for test setup");
    });

    beforeEach( async () => {
        console.log("Use before each test");
        await homePage.open();
    });

    after( async () => {
        console.log("Can be used for test clean up");
    });

    afterEach( async () => {
       console.log("can be used for log out");
    });

    it('Open url and assert title', async () => {
       await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });

    it('Open about url and assert the entire url', async () => {
        await browser.url('https://practice.automationbro.com/about/');
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/')
    });

    it('Click get started button and assert url contains get-started text', async () => {
        await homePage.btnGetStarted.click();
        await expect(browser).toHaveUrlContaining('get-started');
    });

    it('Click automation bro logo and assert url does not contain get-started text', async () => {
        await browser.url('https://practice.automationbro.com/#get-started');
        await $('.custom-logo-link').click();
        await expect(browser).not.toHaveUrlContaining('get-started');
    });

    it('Find heading text and assert the text', async () => {
        const text = await homePage.textHeading.getText();
        await expect(text).toEqual('Think different. Make different.');
    });

    it('Find heading text and assert the text - second method', async () => {
        const textElement = await homePage.textHeading;
        await expect(textElement).toHaveText('Think different. Make different.');
    });
});
