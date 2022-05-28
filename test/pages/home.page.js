import navComponent from "./components/nav.component";

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

    get navComponent(){
        return navComponent;
    }
}
export default new HomePage();