import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbsComponent } from './imdbs.component';

describe('ImdbsComponent', () => {
  let component: ImdbsComponent;
  let fixture: ComponentFixture<ImdbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
