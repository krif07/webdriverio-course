describe('Contact Form', () => {

    it('Go to Form, Fill the form and assert message', async () => {
        await browser.url('/');

        const contactLink = $("//ul[@id='primary-menu']//a[text()='Contact']");
        await contactLink.click();

        const contactTitleElement = $('h1.tg-page-header__title');
        await contactTitleElement.waitForDisplayed();

        const nameElement = $('//span[text()="Name"]/parent::label/following-sibling::input');
        const emailElement = $('//span[text()="Email"]/parent::label/following-sibling::input');
        const phoneElement = $('//span[text()="Phone"]/parent::label/following-sibling::input');
        const messageElement = $('//span[text()="Message"]/parent::label/following-sibling::textarea');
        const submitButton = $('button[name="everest_forms[submit]"]');

        await nameElement.setValue('Cristian Dávila');
        await emailElement.setValue('krif07@gmail.com');
        await phoneElement.setValue('3174739663');
        await messageElement.setValue('Message to krif');
        await submitButton.click();

        const alertMessageElement = $('div[role="alert"]');
        await alertMessageElement.waitForDisplayed();
        await expect(alertMessageElement).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});
