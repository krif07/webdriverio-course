import homePage from "../pages/home.page";

describe('Navigation Menu', () => {

    it('Get text of all menu elements and assert them', async () => {
        await homePage.open();

        const actualElements = [];

        const menuElements = await homePage.navComponent.linksNavMenu;
        for(const element of menuElements){
            actualElements.push(await element.getText());
        }

        await expect(homePage.navComponent.menuListExpectedElements).toEqual(actualElements);
    });
});
