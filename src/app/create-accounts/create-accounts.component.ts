import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {
  id:string='';
  constructor(private _AccountsService:AccountsService,private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{console.log(data);
        this.id=data.id;
    _AccountsService.getAccount(data.id).subscribe(
      (data:any)=>{this.AccountsForm.patchValue(data);}
    )
      }
    )
  }
  public AccountsForm:FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profie_picture: new FormControl(),
    },
  )
  submit(){
    if(this.id){
    this._AccountsService
    .updateAccounts(this.id,this.AccountsForm.value)
    .subscribe(
    (data:any)=>{
      alert("updated successfully");
    },
    (err:any)=>{
      alert("updation failed failed");
    }
  );
  } else{
    this._AccountsService.createAccounts(this.AccountsForm.value).subscribe(
    (data:any)=>{
      alert("created successfully");
    },
    (err:any)=>{
      alert("creating failed");
    }
   );
  }
}
}
