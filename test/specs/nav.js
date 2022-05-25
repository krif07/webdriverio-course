describe('Navigation Menu', () => {

    it('Get text of all menu elements and assert them', async () => {
        await browser.url('/');

        const expectedElements = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        const actualElements = [];

        //const menuElements = await $('#primary-menu').$$('li[id*=menu]');
        const menuElements = await $$('#primary-menu li[id*=menu]');
        for(const element of menuElements){
            actualElements.push(await element.getText());
        }

        await expect(expectedElements).toEqual(actualElements);
    });
});
