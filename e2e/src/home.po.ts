import { browser, by, element } from 'protractor';

export class HomePage {

    getAllProjectRows(){
        return element.all(by.className("kaas"))
    }

    getInklokButton(){
        return element.all(by.css('tr.kaas > td > button'));
    }

}
