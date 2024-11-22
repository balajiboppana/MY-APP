import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  term:string='';
  column:string='';
  order:string='';
  limit:number=0;
  page:number=0;
  constructor(private _vehicleService:VehicleService){
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
    }
    filter(){
      this._vehicleService.getFilteredVehicles(this.term).subscribe(
        (data:any)=>{
          this.vehicles=data;
        },
        (err:any)=>{
          alert('Internal server error');
        })
  }
  sort(){
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert('Internal server error');
      })
}
delete(id:string){
  this._vehicleService.deleteVehicles(id).subscribe(
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
  this._vehicleService.getPagedVehicles(this.limit, this.page).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert('Internal server error');
    })
}
}
