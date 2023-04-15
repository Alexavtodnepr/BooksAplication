import { TestBed } from '@angular/core/testing';

import { BackUpDataService } from './back-up-data.service';

describe('BackUpDataService', () => {
  let service: BackUpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackUpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
