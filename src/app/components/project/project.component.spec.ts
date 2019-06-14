import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from 'src/app/services/company/company.service';
import { ProjectService } from 'src/app/services/project/project.service';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent ],
      imports: [ReactiveFormsModule],
      providers: [{provide: HttpClient},{provide: CompanyService},{provide: ProjectService}]
      //private companyService: CompanyService, private projectService: ProjectService, private formBuilder: FormBuilder
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
