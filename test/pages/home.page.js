class HomePage {
    open(){
        return browser.url('/');
    }
    get btnGetStarted(){
        return $('#get-started');
    }
    get textHeading(){
        return $('.elementor-widget-container h1');
    }
}
export default new HomePage();