import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  apiUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) {
    this.updateUser();
   }

   private updateUser() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
     return this.currentUserSubject.value;
   }

   async login(email: string, password: string) {
     var result = await this.http.post<any>(`${this.apiUrl}/users/login`,{email: email,password:password}).toPromise()
     console.log(result)
    //  return  result.pipe(map(user => {
    //     if(user) {
    //       console.log(JSON.stringify(user))
    //       localStorage.setItem('currentUser', JSON.stringify(user))
    //       this.updateUser();
    //     }
    //     return user;
    //   }))
   }

   logout(){
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null)
   }
}
