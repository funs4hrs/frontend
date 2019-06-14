import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication-service.service';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project/project.service';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/models/project/project';
import { Router, NavigationEnd, Event, NavigationStart } from '@angular/router';
import { Attendance } from 'src/app/models/attendance/attendance';
import { CompanyService } from 'src/app/services/company/company.service';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  currentAttendance = [];
  currentUser: User = new User();
  userProjects = [];

  constructor(authService: AuthenticationService, private projectService: ProjectService, private router: Router, private companyService: CompanyService, private attendanceService: AttendanceService) { 
    authService.currentUser.subscribe((x)=> {
      this.currentUser = x;
    });
  }

  async ngAfterViewInit() {
    var pResult = await this.projectService.getByUser(this.currentUser).toPromise() as any
    for (let i = 0; i < pResult._embedded.results.length; i++) {
      var project = pResult._embedded.results[i] as Project;
      project.owner = await this.companyService.getProjectOwner(project).toPromise() as any;
      this.userProjects.push(project)


      
      var att = await this.attendanceService.getOpenByUserAndProject(this.currentUser,project).toPromise() as Attendance;
      if(att){
      att.user = this.currentUser;
      att.project = project;
      }
      this.currentAttendance.push(att);


    }
    localStorage.setItem('userProjects', JSON.stringify(this.userProjects))



}

  async inklokken(id){

    var project = await this.projectService.getById(id).toPromise() as Project;

    var attendance = new Attendance();
    attendance.project = project;
    attendance.start_time = new Date().toJSON("yyyy/MM/dd HH:mm");
    attendance.user = this.currentUser;

    await this.attendanceService.add(attendance).toPromise();

    this.router.navigate(['home'])
  }

  async uitklokken(attendance: Attendance){

    attendance.end_time = new Date().toJSON("yyyy/MM/dd HH:mm");

    await this.attendanceService.update(attendance).toPromise();

    this.router.navigate(['home'])
    }

  ngOnInit() {
    
  }

}
