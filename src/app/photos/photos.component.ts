import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos:any=[];
  constructor(private _photoService:PhotosService){
    _photoService.getphotos().subscribe(
      (data:any)=>{
        this.photos=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
