import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  Accounts:any=[];
  term:string='';
  column:string='';
  order:string='';
  limit:number=0;
  page:number=0;
  constructor(private _AccountsService:AccountsService){
    _AccountsService.getAccounts().subscribe(
      (data:any)=>{
        this.Accounts=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
  filter(){
    this._AccountsService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.Accounts=data;
      },
      (err:any)=>{
        alert('Internal server error');
      })
}
sort(){
  this._AccountsService.getSortedAccounts(this.column, this.order).subscribe(
    (data:any)=>{
      this.Accounts=data;
    },
    (err:any)=>{
      alert('Internal server error');
    })
}
delete(id:string){
this._AccountsService.deleteAccounts(id).subscribe(
  (data:any)=>{
    alert("deleted successfully");
    location.reload();
  },
  (err:any)=>{
    alert('Internal server error');
  }
)
}
pagination(){
this._AccountsService.getPagedAccounts(this.limit, this.page).subscribe(
  (data:any)=>{
    this.Accounts=data;
  },
  (err:any)=>{
    alert('Internal server error');
  })
}

}
