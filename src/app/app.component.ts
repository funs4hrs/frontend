import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service'
import { User } from './models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './services/users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'frontend'; 
  username = 'sign in'

  constructor(private userService : UserService){
    userService.getLoggedInName.subscribe(name => this.setName(name));
  }

  private setName(name){
    this.username = name;
  }

  ngOnInit(){
    // console.log("KETA")
    // this.apiService.getUsers().subscribe((res:any) => {
    //   console.log(typeof (res.content as User[]));
    //   this.users = res.content as User[];
    // });
   
    
      
  }
}
