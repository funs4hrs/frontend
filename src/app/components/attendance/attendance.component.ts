import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication-service.service';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';
import { User } from 'src/app/models/user';
import { Attendance } from 'src/app/models/attendance/attendance';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/project/project';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements AfterViewInit {

  currentUser: User;
  userAttendances = []

  constructor(authService: AuthenticationService,private attendanceService: AttendanceService, private projectService: ProjectService) { 
    authService.currentUser.subscribe((x)=> {
      this.currentUser = x;
    });
  }
  
  async ngAfterViewInit() {
    
    var aResult = await this.attendanceService.getAllByUser(this.currentUser).toPromise() as any;
    console.log(aResult)
    for (let i = 0; i < aResult._embedded.results.length; i++) {
      var attendance = aResult._embedded.results[i] as Attendance;

      var pResult = (await this.projectService.getByAttendance(attendance).toPromise() as any) as Project;
      attendance.project = pResult;

      var start_date = new Date(attendance.start_time);
      var end_date = new Date(attendance.end_time);


      attendance.time_worked = (Math.round((end_date.getTime() - start_date.getTime())/(3600*1000)))

      attendance.start_date = start_date.toLocaleString()
      attendance.end_date = end_date.toLocaleString()

      this.userAttendances.push(attendance)
    }
    console.log(this.userAttendances)
  }
}
