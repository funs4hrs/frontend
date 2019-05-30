import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication-service.service';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project/project.service';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/models/project/project';
import { Router, NavigationEnd, Event, NavigationStart } from '@angular/router';
import { Attendance } from 'src/app/models/attendance/attendance';
import { CompanyService } from 'src/app/services/company/company.service';
import { Company } from 'src/app/models/company/company';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  currentAttendance: Attendance;
  currentUser: User;
  userProjects = [];

  async ngAfterViewInit() {
    console.log("test")
    var pResult = await this.projectService.getByUser(this.currentUser).toPromise() as any
    for (let i = 0; i < pResult._embedded.results.length; i++) {
      var project = pResult._embedded.results[i] as Project;
      var cResult = await this.companyService.getProjectOwner(project).toPromise() as any;
      project.owner = cResult as Company
      this.userProjects.push(project)
      
    }
    localStorage.setItem('userProjects', JSON.stringify(this.userProjects))

}


  constructor(authService: AuthenticationService, private projectService: ProjectService, private router: Router, private companyService: CompanyService) { 
    authService.currentUser.subscribe((x)=> {
      this.currentUser = x;
    });
  }

  inklokken(id){
    console.log(id)
    console.log(new Date().toJSON("yyyy/MM/dd HH:mm"))
  }
  uitklokken(projectId, attendanceId){
    console.log(new Date().toJSON("yyyy/MM/dd HH:mm"))
  }

  ngOnInit() {
    
  }

}
