import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialprofilesComponent } from './socialprofiles.component';

describe('SocialprofilesComponent', () => {
  let component: SocialprofilesComponent;
  let fixture: ComponentFixture<SocialprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialprofilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
