import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
})
export class CreateVehicleComponent {
  id: string = '';
  constructor(
    private _vehicleService: VehicleService,
    private _activateRoute: ActivatedRoute
  ) {
    _activateRoute.params.subscribe((data: any) => {
      console.log(data); // is used primarily for debugging to inspect route parameters or any other data at runtime.
      this.id = data.id;  // (it is used to assign the id parameter from the route to the class property id)
      //api call
      _vehicleService.getVehicle(data.id).subscribe((data: any) => {
        this.vehicleForm.patchValue(data);
      });
    });
  }
  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  });

  submit() {
    if (this.id) {
      //edit
      this._vehicleService
        .updateVehicle(this.id, this.vehicleForm.value)
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
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
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
