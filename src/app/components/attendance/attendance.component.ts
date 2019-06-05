import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication-service.service';
import { UserService } from 'src/app/services/User/user.service';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';
import { User } from 'src/app/models/user';
import { Attendance } from 'src/app/models/attendance/attendance';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit, AfterViewInit {

  currentUser: User;
  userAttendances = []

  constructor(authService: AuthenticationService,private attendanceService: AttendanceService) { 
    authService.currentUser.subscribe((x)=> {
      this.currentUser = x;
    });
  }

  ngOnInit() {
  }
  
  async ngAfterViewInit() {
    
    var aResult = await this.attendanceService.getAllByUser(this.currentUser).toPromise() as any;
    console.log(aResult)
    for (let i = 0; i < aResult._embedded.results.length; i++) {
      var attendance = aResult._embedded.results[i] as Attendance;

      var start_date = new Date(attendance.start_time).getHours();
      var end_date = new Date(attendance.end_time).getHours();

      console.log(start_date)

      console.log(new Date(start_date-end_date).getHours())


      this.userAttendances.push(attendance)
    }
    console.log(this.userAttendances)
  }
}
