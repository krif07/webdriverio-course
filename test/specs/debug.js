describe('Contact Form', () => {

    it('Go to Form, Fill the form and assert message', async () => {
        await browser.url('/contact');

        const contactTitleElement = await $('h1.tg-page-header__title');
        await contactTitleElement.waitForDisplayed();

        const nameElement = await $('//span[text()="Name"]/parent::label/following-sibling::input');
        const emailElement = await $('//span[text()="Email"]/parent::label/following-sibling::input');
        const phoneElement = await $('//span[text()="Phone"]/parent::label/following-sibling::input');
        const messageElement = await $('//span[text()="Message"]/parent::label/following-sibling::textarea');

        const submitButton = await $('button[type="submt"]'); // wrong locator to use debug

        await nameElement.setValue('Cristian Dávila');
        await emailElement.setValue('krif07@gmail.com');
        await phoneElement.setValue('3174739663');
        await messageElement.setValue('Message to krif');

        // printing why is not finding the element
        //console.log(submitButton);

        // pause to check if we need a waiter and checking a time issue
        //browser.pause(5000);

        //All purpose debugging ---- increase mocha timeout -- mochaOpts:
        await browser.debug();

        await submitButton.click();

        const alertMessageElement = $('div[role="alert"]');
        await alertMessageElement.waitForDisplayed();
        await expect(alertMessageElement).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
})
