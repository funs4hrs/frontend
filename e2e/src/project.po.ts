import { browser, by, element } from 'protractor';

export class ProjectPage {

  getFieldName(){
    return element(by.css("input[formControlName=name]"));
  }

  getFieldDescription(){
    return element(by.css("input[formControlName=description]"));
  }

  getFieldPayout(){
    return element(by.css("input[formControlName=payout]"));
  }
  
  getFieldInternal(){
    return element(by.css("input[formControlName=internal]"));
  }
  
  getFieldOwner(){
    return element(by.className("companies"));
  }
  
  getSubmitButton(){
    return element(by.className('create'));
  }

}
