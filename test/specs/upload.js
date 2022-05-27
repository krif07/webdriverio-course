const path = require('path');

describe('Upload Tests', () => {

    it('Simple upload test', async () => {
        await browser.url('https://the-internet.herokuapp.com/upload');

        console.log(__dirname);
        // store a test file path
        const filePath = path.join(__dirname, '../data/img.jpg');
        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);
        // set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();

        await expect($('h3')).toHaveText('File Uploaded!');
    });

    it('Upload on a hidden input field', async () => {
        await browser.url('/cart/');
        // store a test file path
        const filePath = path.join(__dirname, '../data/img.jpg');
        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        // remove hidden class
        await browser.execute("document.querySelector('input[type=file]').className = '';");

        // set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click();

        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
    });
});
