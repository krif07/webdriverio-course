import contactPage from "../pages/contact.page";

describe('Contact Form', () => {

    it('Go to Form, Fill the form and assert message', async () => {
        await contactPage.open();
        await contactPage.contactLink.click();
        await contactPage.contactHeaderTitle.waitForDisplayed();

        await contactPage.submitForm('Cristian Dávila',
            'krif07@gmail.com',
            '3174739663',
            'Message to krif');

        await contactPage.alertMessageElement.waitForDisplayed();
        await expect(contactPage.alertMessageElement)
            .toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});
