import { Injectable } from '@angular/core';
import { Attendance } from 'src/app/models/attendance/attendance';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  apiUrl = 'http://localhost:9000'

  constructor(private http: HttpClient) { }


  add(attendance: Attendance){
    return this.http.post(`http://localhost:9000/attendances/`, JSON.stringify(attendance))
  }

  getAll() {
    return this.http.get<Attendance[]>(`${this.apiUrl}/attendances`)
  }

  getById(id: number){
    return this.http.get(`${this.apiUrl}/attendances/${id}`)
  }

  update(attendance: Attendance) {
    return this.http.put(`${this.apiUrl}/attendances/${attendance.id}`, attendance);
}

delete(id: number) {
    return this.http.delete(`${this.apiUrl}/attendances/${id}`);
}
}
