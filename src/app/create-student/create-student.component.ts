import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
[x: string]: any;
  public studentform:FormGroup = new FormGroup
  ({
    name: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    class: new FormControl(),
    fatherName: new FormControl(),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl('',[Validators.required]),
      state: new FormControl(),
      pincode: new FormControl('',[Validators.required,Validators.maxLength(6)]),
  }),
  type:new FormControl(),
  cards: new FormArray([])
})
  
get cardsFormArray(){
  return this.studentform.get('cards') as FormArray;
}
  submit(){
    console.log(this.studentform);
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.required, Validators.min(0),Validators.max(100)]),
      })
    )
  }
  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor(){
    this.studentform.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='daysScholar'){
          this.studentform.addControl('busFee', new FormControl());
          this.studentform.removeControl("hostelFee");
        }
        else{
          this.studentform.addControl('hostelFee', new FormControl());
          this.studentform.removeControl("busFee");
        }
      }
    )
  }
}
