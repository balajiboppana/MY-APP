import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any=[];
  constructor(private _productsService:ProductsService){
    _productsService.getproducts().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}

