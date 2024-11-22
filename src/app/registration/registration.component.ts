import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  empName:string='';
  role:string='';
  employees:any=[];
  add(){
    let employeee ={
      name: this.empName,
      role: this.role
    }

    this.employees.push(employeee);
  }
}
