import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http'; 
import { Project } from 'src/app/models/project/project';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = 'http://localhost:9000'

  constructor(private http: HttpClient) { }

  add(project: Project){
    return this.http.post(`${this.apiUrl}/projects/`, JSON.stringify(project))
  }

  getByUser(user: User){
    return this.http.get<any>(`${this.apiUrl}/users/${user.id}/projects`)
  }

  getAll() {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`)
  }

  getById(id: number){
    return this.http.get(`${this.apiUrl}/projects/${id}`)
  }

  update(project: Project) {
    return this.http.put(`${this.apiUrl}/projects/`, project);
  }

  delete(id: number) {
      return this.http.delete(`${this.apiUrl}/projects/${id}`);
  }
}
