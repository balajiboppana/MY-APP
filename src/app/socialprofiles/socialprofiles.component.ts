import { Component } from '@angular/core';
import { SocialprofilesService } from '../socialprofiles.service';

@Component({
  selector: 'app-socialprofiles',
  templateUrl: './socialprofiles.component.html',
  styleUrls: ['./socialprofiles.component.css']
})
export class SocialprofilesComponent {
  socialprofiles:any=[];
  constructor(private _socialprofilesService:SocialprofilesService){
    _socialprofilesService.getsocialprofiles().subscribe(
      (data:any)=>{
        this.socialprofiles=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
