import { Component } from '@angular/core';
import { ImdbsService } from '../imdbs.service';

@Component({
  selector: 'app-imdbs',
  templateUrl: './imdbs.component.html',
  styleUrls: ['./imdbs.component.css']
})
export class ImdbsComponent {
  imdbs:any=[];
  constructor(private _imdbsService:ImdbsService){
    _imdbsService.getimdbs().subscribe(
      (data:any)=>{
        this.imdbs=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
  getimdb(rating:any){any:
    return(Math.floor(rating))
  }
}
