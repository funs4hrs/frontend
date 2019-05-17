import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { Alert } from 'selenium-webdriver';
import { Router, NavigationStart } from '@angular/router';
import { AuthenticationService } from './services/AuthenticationService/authentication-service.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: User;

  constructor(private router: Router, private authService: AuthenticationService){
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
