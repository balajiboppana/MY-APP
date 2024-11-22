import { ParseTreeResult, TemplateBindingParseResult } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  Number1:number=0;
  Number2:number=0;
  result:number=0;

  Sum(){
    this.result = this.Number1+this.Number2;
  }
  sub(){
    this.result=this.Number1-this.Number2;
  }
  mul(){
    this.result=this.Number1*this.Number2;
  }
  div(){
    this.result=this.Number1/this.Number2
  }
}

