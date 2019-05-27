import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company/company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = 'http://localhost:8090'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`)
  }

  getById(id: number){
    return this.http.get(`${this.apiUrl}/companies/${id}`)
  }

  update(company: Company) {
    return this.http.put(`${this.apiUrl}/companies/${company.id}`, company);
  }

  delete(id: number) {
      return this.http.delete(`${this.apiUrl}/companies/${id}`);
  }
}
