import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  Account:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _AccountService:AccountsService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        _AccountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.Account=data;
          }
        )
      }
    )
  }
}
