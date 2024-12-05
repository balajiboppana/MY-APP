import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { capgeminiMail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public userform:FormGroup = new FormGroup
  ({
    name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required, Validators.min(18),Validators.max(60)]),
    email: new FormControl('',[Validators.required,Validators.email,capgeminiMail]),
    phone: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pin: new FormControl(),
    }),
    type:new FormControl(),
    // busFee:new FormControl(),
    // hostelFee:new FormControl(),
    cards: new FormArray([])
  })
  get cardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl('',[Validators.required]),
        expiry: new FormControl(),
        cvv: new FormControl(),
      })
    )
  }
  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  // constructor doesn't need an function like example "login()" in html to do some task,-
  // -it is automatically called before anything in the component. 
  constructor(){
    this.userform.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='daysScholar'){
          this.userform.addControl('busFee', new FormControl());
          this.userform.removeControl("hostelFee");
        }
        else{
          this.userform.addControl('hostelFee', new FormControl());
          this.userform.removeControl("busFee");
        }
      }
    )
  }
  submit(){
    console.log(this.userform);
  }
}

