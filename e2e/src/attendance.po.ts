import { browser, by, element } from 'protractor';

export class AttendancePage {

    getAllAttendanceRows(){
        return element.all(by.className("kaas"))
    }

}
