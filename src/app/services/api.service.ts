import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user'
import { tap,map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURI: string = 'http://localhost:8090';

  constructor(private httpClient: HttpClient) { }

  public get(query: String){
    return this.httpClient.get<any>(`${this.apiURI}/${query}`)
  }

  public post(query: String, data: Object, options: Object){
    var variable = this.httpClient.post<any>(`${this.apiURI}/${query}`, data, options);
    return variable 
  }
}