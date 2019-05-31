import { AuthGuard } from './auth.guard';
import { TestBed } from '@angular/core/testing';

describe('Auth.Guard', () => {
  it('should create an instance', () => {
    const service: AuthGuard = TestBed.get(AuthGuard);
    expect(service).toBeTruthy();
  });
});
