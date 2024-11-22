import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {
  height:number=0;
  weight:number=0;
  result:number=0;
  result1:string='';
  color:string='';

  calculate(){
    this.result=(this.weight/((this.height/100)*(this.height/100)));

    this.result=parseFloat(this.result.toFixed(2));

    if (this.result>35) {
      this.result1=(' you are EXTREMELY OBESE')
      this.color="DarkRed";
    } else if(this.result>30){
      this.result1=(' you are OBESE')
      this.color="red";
    } else if(this.result>25){
      this.result1=(' you are OVERWEIGHT')
      this.color="orange";
    } else if(this.result>20){
      this.result1=(' you are NORMAL')
      this.color="green";
    }
    else{
      this.result1=('you are UNDERWEIGHT')
      this.color="blue";
    }
  }

}
