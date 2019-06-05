import { TestBed } from '@angular/core/testing';

import { AttendanceService } from './attendance.service';
import { HttpClient } from '@angular/common/http';

describe('AttendanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: HttpClient}]
  }));

  it('should be created', () => {
    const service: AttendanceService = TestBed.get(AttendanceService);
    expect(service).toBeTruthy();
  });
});
