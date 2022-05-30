import homePage from "../pages/home.page";
import allureReporter from '@wdio/allure-reporter';

describe('Navigation Menu', () => {

    it('Get text of all menu elements and assert them', async () => {
        allureReporter.addFeature("Navigation Feature");
        allureReporter.addSeverity("Critical");

        await homePage.open();

        const actualElements = [];

        const menuElements = await homePage.navComponent.linksNavMenu;
        for(const element of menuElements){
            actualElements.push(await element.getText());
        }

        await expect(homePage.navComponent.menuListExpectedElements).toEqual(actualElements);
    });
});
