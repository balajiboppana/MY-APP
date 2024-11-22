import { Component } from '@angular/core';
import { StudentsIdcardsService } from '../StudentsIdcards.service';

@Component({
  selector: 'app-StudentsIdcards',
  templateUrl: './StudentsIdcards.component.html',
  styleUrls: ['./StudentsIdcards.component.css']
})
export class StudentsIdcardsComponent {
  StudentsIdcards:any=[];
  term:string='';
  column:string='';
  order:string='';
  limit:number=0;
  page:number=0;
  constructor(private _StudentsIdcards:StudentsIdcardsService){
    _StudentsIdcards.getStudentsIdcards().subscribe(
      (data:any)=>{
        this.StudentsIdcards=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
  filter(){
    this._StudentsIdcards.getFilteredStudentsIdcards(this.term).subscribe(
      (data:any)=>{
        this.StudentsIdcards=data;
      },
      (err:any)=>{
        alert('Internal server error');
      })
}
sort(){
  this._StudentsIdcards.getSortedStudentsIdcards(this.column, this.order).subscribe(
    (data:any)=>{
      this.StudentsIdcards=data;
    },
    (err:any)=>{
      alert('Internal server error');
    })
}
pagination(){
  this._StudentsIdcards.getPagedStudentsIdcards(this.limit, this.page).subscribe(
    (data:any)=>{
      this.StudentsIdcards=data;
    },
    (err:any)=>{
      alert('Internal server error');
    })
  }
  delete(id:string){
    this._StudentsIdcards.deleteStudentIdcards(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
    }
}
