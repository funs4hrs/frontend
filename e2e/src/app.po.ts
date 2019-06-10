import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl+"/login") as Promise<any>;
  }

  getTitleText() {
    return element(by.css(".title")).getText() as Promise<string>;
  }

  getFieldPassword(){
    return element(by.css("input[formControlName=password]"));
  }

  getFieldEmail(){
    return element(by.css("input[formControlName=email]"));
  }

  getLoginButton(){
    return element(by.id('loginBtn'));
  }

}
