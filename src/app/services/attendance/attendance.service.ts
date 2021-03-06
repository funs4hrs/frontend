import { Injectable } from '@angular/core';
import { Attendance } from 'src/app/models/attendance/attendance';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Project } from 'src/app/models/project/project';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {  
  apiUrl = 'http://51.77.195.120:9000'


  constructor(private http: HttpClient) { }


  add(attendance: Attendance){
    return this.http.post(`${this.apiUrl}/attendances/`, JSON.stringify(attendance))
  }

  
  getAllByUser(user: User){
    return this.http.get<Attendance>(`${this.apiUrl}/users/${user.id}/attendances`)
  }

  getOpenByUserAndProject(user: User, project: Project){
    return this.http.get<Attendance>(`${this.apiUrl}/attendances/openByUserAndProject?user=${user.id}&project=${project.id}`)
  }

  getAll() {
    return this.http.get<Attendance[]>(`${this.apiUrl}/attendances`)
  }

  getById(id: number){
    return this.http.get(`${this.apiUrl}/attendances/${id}`)
  }

  update(attendance: Attendance) {
    return this.http.put(`${this.apiUrl}/attendances/`, attendance);
}

delete(id: number) {
    return this.http.delete(`${this.apiUrl}/attendances/${id}`);
}
}
