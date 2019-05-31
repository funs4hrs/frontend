import { ErrorInterceptor } from './error-interceptor';
import { TestBed } from '@angular/core/testing';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorInterceptor = TestBed.get(ErrorInterceptor);
    expect(service).toBeTruthy();
  });
});
