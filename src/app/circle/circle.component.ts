import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  radius:number=0;

  result=0;
  area(){
    this.result=(this.radius*this.radius)*3.14;
  }
  perimeter(){
    this.result=(2*3.14*this.radius);
  }
}
