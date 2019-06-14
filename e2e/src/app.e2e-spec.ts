import { LoginPage } from './login.po';
import { AppPage } from './app.po'
import { browser, logging, element, ElementFinder, ElementArrayFinder, protractor } from 'protractor';
import { LoginComponent } from 'src/app/components/login/login.component';
import { User } from 'src/app/models/user';
import { async } from '@angular/core/testing';
import { HomePage } from './home.po';
import { AttendancePage } from './attendance.po';
import { ProjectPage } from './project.po';

var attendanceCount = 0;

describe('Login tests', () => {
  let login: LoginPage;
  let app: AppPage

  beforeEach(() => {
    login = new LoginPage();
    app = new AppPage();
  });

  it('should display welcome message', () => {
    app.navigateTo('login');
    expect(login.getTitleText()).toEqual('Login');
  });

  it('should not login with wrong credentials', () => {
    app.navigateTo('login');
    login.getFieldEmail().sendKeys("t@t.t");
    login.getFieldPassword().sendKeys("w");
    login.getLoginButton().click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"login?returnUrl=%2Fhome");
  })

  it('should login with user t@t.t', () => {
    app.navigateTo('login');
    login.getFieldEmail().sendKeys("t@t.t");
    login.getFieldPassword().sendKeys("t");
    login.getLoginButton().click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"home");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    browser.refresh();
  });
});

describe('Navbar tests', () => {
  let app: AppPage
  let attendance: AttendancePage

  beforeEach(() => {
    app = new AppPage();
    attendance = new AttendancePage();
  });

  it('should check all navbar options', async () => {
    var buttons = await app.getAllNavbarButtons().count();
    var value = await browser.executeScript("return window.localStorage.getItem('currentUser');") as string;
    if((JSON.parse(value) as User).isManager){
      expect(buttons).toEqual(6);
    } else {
      expect(buttons).toEqual(4)
    }
  })

  it('should go to attendance', async () => {
    app.navigateToHome();
    var button = await app.getAttendanceButton();
    button.click();

    browser.sleep(1000)

    attendanceCount = await attendance.getAllAttendanceRows().count();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"attendance");
  })

  
  it('should go to create project page', async () => {
    app.navigateToHome();
    var button = await app.getProjectButton();
    button.click();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"project");
  })

  
  it('should go to create add user to project page', async () => {
    app.navigateToHome();
    var button = await app.getAddUserButton();
    button.click();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"add-user");
  })



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    browser.refresh();
  });
});

describe('Home tests', () => {
  let app: AppPage
  let home: HomePage

  beforeEach(() => {
    app = new AppPage();
    home = new HomePage();
  });

  it('should check if there are any projects', async () => {
    app.navigateToHome();
    var amount = await home.getAllProjectRows().count();
    expect(amount).toBeGreaterThan(0);
  })


  it('should check if you can klok', async () => {
    app.navigateToHome();
    var amount = await home.getAllProjectRows().count();
    var text;
    if (amount > 0) {
      var btn = home.getInklokButton();
      expect(btn.getText()).toMatch("inklokken")
      
      btn.first().click()
      browser.sleep(1000)
      browser.refresh();
      browser.sleep(1000)
      expect(btn.first().getText()).toMatch("uitklokken")
      btn.first().click()
      browser.sleep(1000)
    }
  })



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    browser.refresh();
  });
});


describe('Attendance tests', () => {
  let app: AppPage
  let attendance: AttendancePage

  beforeEach(() => {
    app = new AppPage();
    attendance = new AttendancePage();
  });

  it('should check if attendances get logged', async () => {
    app.navigateTo("attendance");
    browser.sleep(1000)
    var amount = await attendance.getAllAttendanceRows().count();
    expect(amount).toEqual((attendanceCount+1))
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    browser.refresh();
  });
});



describe('Create Project tests', () => {
  let app: AppPage
  let project: ProjectPage

  beforeEach(() => {
    app = new AppPage();
    project = new ProjectPage();
  });

  it('should create new project', async () => {
    app.navigateTo("project");

    project.getFieldName().sendKeys("Test")
    project.getFieldDescription().sendKeys("Test")
    project.getFieldPayout().sendKeys(5)
    project.getFieldInternal().sendKeys(protractor.Key.SPACE)
    project.getFieldOwner().sendKeys("k",protractor.Key.ENTER)

    project.getSubmitButton().click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"add-user");


    // var amount = await attendance.getAllAttendanceRows().count();
    // expect(amount).toEqual((attendanceCount+1))
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    browser.refresh();
  });
}); 