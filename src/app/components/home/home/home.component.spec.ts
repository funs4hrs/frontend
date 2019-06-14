import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { ProjectComponent } from '../../project/project.component';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication-service.service';
import { CompanyService } from 'src/app/services/company/company.service';

describe('HomeComponent', () => {
  // let component: HomeComponent;
  // let fixture: ComponentFixture<HomeComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ HomeComponent ],
  //     providers: [{provide: HttpClient},{provide: Router},{provide: CompanyService}, {provide: AttendanceService}, { provide: ProjectService }],
  //     imports: [  ]
  //   })

  //   //authService: AuthenticationService, 
  //   //private projectService: ProjectService, private router: Router, 
  //   //private companyService: CompanyService, private attendanceService: AttendanceService
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
