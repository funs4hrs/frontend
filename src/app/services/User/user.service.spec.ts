import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { ErrorInterceptor } from '../ErrorIntercepter/error-interceptor';
import { HttpClient } from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: ErrorInterceptor},{provide: HttpClient}]
  })
  .compileComponents());

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
