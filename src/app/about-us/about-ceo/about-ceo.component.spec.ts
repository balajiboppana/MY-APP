import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCEOComponent } from './about-ceo.component';

describe('AboutCEOComponent', () => {
  let component: AboutCEOComponent;
  let fixture: ComponentFixture<AboutCEOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCEOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCEOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
