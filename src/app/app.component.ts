import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/users/user.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  username = 'Sign in'
  user: User;

  constructor(private userService : UserService){
    userService.getLoggedUser.subscribe((user: User) => {
      this.setUser(user)
    });
  }

  private setUser(user: User){
    this.user = user;
    console.log(user)
    if (user !== null && user !== undefined) {
      this.username = `Welcome ${this.user.firstName}`;
    } else {
      this.username = "Sign in"
    }
  }

  ngOnInit(){
    this.setUser(undefined)
  }
}
