import { TestBed } from '@angular/core/testing';

import { SocialprofilesService } from './socialprofiles.service';

describe('SocialprofilesService', () => {
  let service: SocialprofilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialprofilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
