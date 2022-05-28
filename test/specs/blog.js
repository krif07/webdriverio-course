import blogPage from "../pages/blog.page";

describe('Blog List Tests', () => {

    it('Get the list of the all recent post and assert them', async () => {
        blogPage.open();
        await blogPage.blogLink.click();

        //await contactTitleElement.waitForDisplayed();
        await browser.waitUntil( async () => {
            const blogTitleText = await blogPage.blogHeaderTitle.getText();
            return (blogTitleText.toString() === "Blog");
        }, {
            timeoutMsg: 'Could not verify the blog title from locator'
        });

        const recentPostElements = await blogPage.listRecentPosts;

        //const totalPosts = recentPostElements.length;
        await expect(recentPostElements).toHaveLength(5);

        for(const element of recentPostElements){
            const text = await element.getText();
            await expect(text.length).toBeGreaterThan(10);
        }
    })
});
