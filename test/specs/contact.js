import contactPage from "../pages/contact.page";
import { faker } from '@faker-js/faker';

describe('Contact Form', () => {

    it('Go to Form, Fill the form and assert message', async () => {
        await contactPage.open();
        await contactPage.contactLink.click();
        await contactPage.contactHeaderTitle.waitForDisplayed();

        await contactPage.submitForm(faker.name.findName(),
            faker.internet.email(),
            faker.phone.phoneNumber(),
            faker.lorem.paragraph(2));

        await contactPage.alertMessageElement.waitForDisplayed();
        await expect(contactPage.alertMessageElement)
            .toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});
