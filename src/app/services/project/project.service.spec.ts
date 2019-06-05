import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: HttpClient}]
  }));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
