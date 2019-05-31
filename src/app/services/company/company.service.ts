import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company/company';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/models/project/project';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = 'http://localhost:9000'

  constructor(private http: HttpClient) { }

  getProjectOwner(project: Project){
    return this.http.get<Company>(`${this.apiUrl}/projects/${project.id}/owner`);
  }

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
