import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Project } from 'src/app/models/project/project';
import { Company } from 'src/app/models/company/company';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements AfterViewInit, OnInit {
  constructor(private companyService: CompanyService, private projectService: ProjectService, private formBuilder: FormBuilder) { }
  projectForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  company: Company;
  companies = [];
  ngAfterViewInit() {
  }
  
  async ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      payout: ['',Validators.required],
      internal: ['',Validators.required],
      company: ['',Validators.required],
    });


    var result = await this.companyService.getAll().toPromise() as any;

    console.log(result)

    for (let i = 0; i < result._embedded.results.length; i++) {
      this.companies.push(result._embedded.results[i] as Company)      
    }

  }
  get f() { return this.projectForm.controls}

  onSubmit() {
    this.submitted = true;

    if (this.projectForm.invalid) {
      return;
    }

    this.loading = true;

    var project = new Project()

    this.companyService.getById(this.f.company.value).subscribe(x => {
      this.company = x as Company
    })

    project.name = this.f.name.value;
    project.description = this.f.description.value;
    project.payout = this.f.payout.value;
    project.internal = this.f.internal.value;
    project.owner = this.company

    this.projectService.add(project)
  }

}
