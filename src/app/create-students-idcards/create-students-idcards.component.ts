import { Component } from '@angular/core';
import { StudentsIdcardsService } from '../StudentsIdcards.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-students-idcards',
  templateUrl: './create-students-idcards.component.html',
  styleUrls: ['./create-students-idcards.component.css']
})
export class CreateStudentsIdcardsComponent {
  id:string='';
  constructor(private _StudentIdCardsService:StudentsIdcardsService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe((data: any) => {
      console.log(data);
      this.id = data.id;
      //api call
      _StudentIdCardsService.getStudentsIdcard(data.id).subscribe((data: any) => {
        this.StudentsIdcardsForm.patchValue(data);
      });
    });
  }
  public StudentsIdcardsForm:FormGroup = new FormGroup(
    {
      name: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      dob: new FormControl(),
      profile_picture: new FormControl(),
      email: new FormControl(),
      school_logo: new FormControl(),
      school_name: new FormControl(),
      school_city: new FormControl(),
      school_pin: new FormControl(),
    },
  )

  submit() {
    if (this.id) {
      //edit
      this._StudentIdCardsService
        .updateIdcard(this.id, this.StudentsIdcardsForm.value)
        .subscribe(
          (data: any) => {
            alert('updated successfully');
          },
          (err: any) => {
            alert('updation failed');
          }
        );
    } else {
      //create
      this._StudentIdCardsService.createStudentsIdcards(this.StudentsIdcardsForm.value).subscribe(
        (data: any) => {
          alert('created successfully');
        },
        (err: any) => {
          alert('creation failed');
        }
      );
    }
  }
}
