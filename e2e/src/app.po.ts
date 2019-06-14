import { browser, by, element } from 'protractor';

export class AppPage {

  async navigateToHome() {
    element(by.className('home')).click();
  }

  navigateTo(page: string) {
    return browser.get(browser.baseUrl+page) as Promise<any>;
  }

  getAllNavbarButtons(){
    return element.all(by.className("routerlink"))
  }

  getAttendanceButton(){
    return element(by.className("attendance"))
  }
  

  getProjectButton(){
    return element(by.className("project"))
  }

  getAddUserButton(){
    return element(by.className("add-user"))

  }
}