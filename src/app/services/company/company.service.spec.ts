import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';
import { HttpClient } from '@angular/common/http';

describe('CompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: HttpClient}]
  }));

  it('should be created', () => {
    const service: CompanyService = TestBed.get(CompanyService);
    expect(service).toBeTruthy();
  });
});
