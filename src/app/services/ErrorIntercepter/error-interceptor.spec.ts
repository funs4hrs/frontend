import { ErrorInterceptor } from './error-interceptor';
import { TestBed } from '@angular/core/testing';

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({providers:[{provide: ErrorInterceptor}]}));

  it('should be created', () => {
    // const service: ErrorInterceptor = TestBed.get(ErrorInterceptor);
    // expect(service).toBeTruthy();
  });
});
