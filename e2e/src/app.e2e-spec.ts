import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { LoginComponent } from 'src/app/components/login/login.component';

describe('workspace-project App', () => {
  let page: AppPage;
  let EC = browser.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Login');
  });

  it('should login with user t@t.t', () => {
    page.navigateTo();
    page.getFieldEmail().sendKeys("t@t.t");
    page.getFieldPassword().sendKeys("t");
    page.getLoginButton().click();
    

    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
