describe('Iframe Tests', () =>{

    it('Working with iframe', async () => {
        await browser.url('/iframe-sample/');

        // check page title
        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');

        // change the context to the iframe
        const iframe = await $('#advanced_iframe');
        await browser.switchToFrame(iframe);

        await expect($('#site-logo')).toExist();

        // return to the main frame
        await browser.switchToParentFrame();

        // check page title
        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
    });
});
