class BlogPage {

    open() {
        return browser.url('/blog');
    }

    get blogLink(){
        return $("//ul[@id='primary-menu']//a[text()='Blog']");
    }
    get blogHeaderTitle() {
        return $('h1.tg-page-header__title');
    }
    get listRecentPosts(){
        return $$('#secondary ul a');
    }
}
export default new BlogPage();