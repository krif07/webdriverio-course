class ContactPage {

    open(){
        return browser.url('/contact');
    }
    get contactLink() {
        return $("//ul[@id='primary-menu']//a[text()='Contact']");
    }
    get contactHeaderTitle() {
        return $('h1.tg-page-header__title');
    }
    get contactName() {
        return $('//span[text()="Name"]/parent::label/following-sibling::input');
    }
    get contactEmail() {
        return $('//span[text()="Email"]/parent::label/following-sibling::input');
    }
    get contactPhone() {
      return $('//span[text()="Phone"]/parent::label/following-sibling::input');
    }
    get contactMessage() {
        return $('//span[text()="Message"]/parent::label/following-sibling::textarea');
    }
    get submitButton() {
        return $('button[name="everest_forms[submit]"]');
    }
    get alertMessageElement() {
        return $('div[role="alert"]');
    }
}
export default new ContactPage();