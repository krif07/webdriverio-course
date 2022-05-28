class NavComponent {

    menuListExpectedElements = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account"
    ];

    get linksNavMenu(){
        return $$('#primary-menu li[id*=menu]');
    }
}
export default new NavComponent();