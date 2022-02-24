import { TestBed } from '@angular/core/testing';

import { InMemoryLoginDataService } from './in-memory-login-data.service';

describe('InMemoryLoginDataService', () => {
  let service: InMemoryLoginDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryLoginDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
