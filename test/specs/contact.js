import contactPage from "../pages/contact.page";

describe('Contact Form', () => {

    it('Go to Form, Fill the form and assert message', async () => {
        await contactPage.open();
        await contactPage.contactLink.click();
        await contactPage.contactHeaderTitle.waitForDisplayed();

        await contactPage.contactName.setValue('Cristian Dávila');
        await contactPage.contactEmail.setValue('krif07@gmail.com');
        await contactPage.contactPhone.setValue('3174739663');
        await contactPage.contactMessage.setValue('Message to krif');
        await contactPage.submitButton.click();

        await contactPage.alertMessageElement.waitForDisplayed();
        await expect(contactPage.alertMessageElement)
            .toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});
