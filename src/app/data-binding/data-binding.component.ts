import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
age:number = 23;
name:string = "balaji";
isIndian:boolean = true;
isInvalid:boolean= false;

phone:string="+91";

create(){
  alert("created successfully!!!")
}

typing(){
  alert("typing")
}
}
