describe('Blog List Tests', () => {

    it('Get the list of the all recent post and assert them', async () => {
        await browser.url('/');
        const blogLink = $("//ul[@id='primary-menu']//a[text()='Blog']");
        await blogLink.click();

        const blogTitleElement = $('h1.tg-page-header__title');
        //await contactTitleElement.waitForDisplayed();
        await browser.waitUntil( async () => {
            const blogTitleText = await blogTitleElement.getText();
            return (blogTitleText.toString() === "Blog");
        }, {
            timeoutMsg: 'Could not verify the blog title from locator'
        });

        const recentPostElements = await $$('#secondary ul a');

        //const totalPosts = recentPostElements.length;
        await expect(recentPostElements).toHaveLength(5);

        for(const element of recentPostElements){
            const text = await element.getText();
            await expect(text.length).toBeGreaterThan(10);
        }
    })
});
