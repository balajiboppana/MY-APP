import { TestBed } from '@angular/core/testing';

import { ImdbsService } from './imdbs.service';

describe('ImdbsService', () => {
  let service: ImdbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
