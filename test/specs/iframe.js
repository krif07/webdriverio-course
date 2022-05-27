describe('Iframe Tests', () =>{

    it('Working with iframe', async () => {
        await browser.url('/iframe-sample/');

        // change the context to the iframe
        const iframe = await $('#advanced_iframe');
        await browser.switchToFrame(iframe);

        await expect($('#site-logo')).toExist();
    });
});
