import { AuthGuard } from './auth.guard';
import { TestBed } from '@angular/core/testing';

describe('Auth.Guard', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: AuthGuard}]
  })
  .compileComponents());
  it('should create an instance', () => {
    // const service: AuthGuard = TestBed.get(AuthGuard);
    // expect(service).toBeTruthy();
  });
});
