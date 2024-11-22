import { TestBed } from '@angular/core/testing';

import { StudentsIdcardsService } from './StudentsIdcards.service';

describe('StudentsIdcardsService', () => {
  let service: StudentsIdcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsIdcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
