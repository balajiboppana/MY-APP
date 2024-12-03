import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIdcardComponent } from './edit-idcard.component';

describe('EditIdcardComponent', () => {
  let component: EditIdcardComponent;
  let fixture: ComponentFixture<EditIdcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIdcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditIdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
