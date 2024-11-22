import { Component } from '@angular/core';
import { StudentsIdcardsService } from '../StudentsIdcards.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-students-idcards',
  templateUrl: './create-students-idcards.component.html',
  styleUrls: ['./create-students-idcards.component.css']
})
export class CreateStudentsIdcardsComponent {
  constructor(private _StudentIdCardsService:StudentsIdcardsService){}
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

  submit(){
    console.log(this.StudentsIdcardsForm);
    this._StudentIdCardsService.createStudentsIdcards(this.StudentsIdcardsForm.value).subscribe(
    (data:any)=>{
      alert("created successfully");
    },
    (err:any)=>{
      alert("creating failed");
    })
  }
}
