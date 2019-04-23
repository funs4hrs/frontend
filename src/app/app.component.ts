import { Component, NgModule } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }
  

  title = 'FunS4Hrs';

  Login(){
    //console.log(this.rest.login());
    this.rest.login().subscribe((data: {}) => {
      console.log(data);
    });
  }
}
