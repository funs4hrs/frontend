import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication-service.service';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project/project.service';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/models/project/project';
import { Router, NavigationEnd, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  
  currentUser: User;
  userProjects = [];

  async ngAfterViewInit() {
    console.log("test")
    var result = await this.projectService.getByUser(this.currentUser).toPromise() as any
    console.log(result)
    for (let i = 0; i < result._embedded.results.length; i++) {
      this.userProjects.push(result._embedded.results[i] as Project)
      
    }
    localStorage.setItem('userProjects', JSON.stringify(this.userProjects))

}


  constructor(authService: AuthenticationService, private projectService: ProjectService, private router: Router) { 
    authService.currentUser.subscribe((x)=> {
      this.currentUser = x;
    });
  }


  ngOnInit() {
    
  }

}
