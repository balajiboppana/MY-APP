import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ages:number[]=[1,2,3,4];
  user:User={
    name:'a', 
    age:20,
    address:{
      city:'hyd',
      pin:39405
    },
    phones:[9998,7600]
  };
}
