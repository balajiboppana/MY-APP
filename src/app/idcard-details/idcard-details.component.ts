import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsIdcardsService } from '../StudentsIdcards.service';

@Component({
  selector: 'app-idcard-details',
  templateUrl: './idcard-details.component.html',
  styleUrls: ['./idcard-details.component.css']
})
export class IdcardDetailsComponent {
  StudentsIdcard:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _studentsIdcardservice:StudentsIdcardsService){
    _activatedRoute.params.subscribe(
      (data:any)=>
        {console.log(data);
        _studentsIdcardservice.getStudentsIdcard(data.id).subscribe(
          (data:any)=>{
            this.StudentsIdcard=data;
          }
        )
      }
    )
  }
}
