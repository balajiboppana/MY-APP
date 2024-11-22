import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentsIdcardsComponent } from './create-students-idcards.component';

describe('CreateStudentsIdcardsComponent', () => {
  let component: CreateStudentsIdcardsComponent;
  let fixture: ComponentFixture<CreateStudentsIdcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentsIdcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentsIdcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
