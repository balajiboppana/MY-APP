import { Component } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs:any=[];
  constructor(private _blogsService:BlogsService){
    _blogsService.getblogs().subscribe(
      (data:any)=>{
        this.blogs=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
