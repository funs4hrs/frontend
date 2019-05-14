import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service'
import { User } from './models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'frontend'; 


  ngOnInit(){
    // console.log("KETA")
    // this.apiService.getUsers().subscribe((res:any) => {
    //   console.log(typeof (res.content as User[]));
    //   this.users = res.content as User[];
    // });
   
    
      
  }
}
