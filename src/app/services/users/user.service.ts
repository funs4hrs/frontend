import { Injectable, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from 'src/app/models/user';
import {RequestOptions, Request, RequestMethod, ResponseContentType } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: ApiService) { }

  public async login(email: String, password: String): Promise<User> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const options = {
      headers: headers
    };
    var user = await this.apiService.post("users/login", JSON.stringify({email: email, password: password}),options)
    .toPromise()
    .then((response) => {
      return response as User
    })

    console.log(user.firstName)

    this.getLoggedInName.emit(`Welcome ${user.firstName}`)

    return user;
  }

  
  public logout(): void {
    this.getLoggedInName.emit('Sign In');
  }
}
