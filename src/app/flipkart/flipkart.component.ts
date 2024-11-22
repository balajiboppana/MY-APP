import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  delivery:any='';
  term:string='';
  name:string='';
  price:number=0;
  rating:number=0;
  Freedelivery:string='';
  freed:boolean=true;

  products: any = [
    { name: 'pen', price: 20, rating: 3, Freedelivery: 'No' },
    { name: 'iphone', price: 80000, rating:5, Freedelivery: 'yes' },
    { name: 'shirt', price: 3000, rating: 4, Freedelivery: 'yes' },
    { name: 'mobile case', price: 2500, rating:4, Freedelivery: 'yes' },
    { name: 'headCap', price: 2000, rating: 3.5, Freedelivery: 'yes' },
    { name: 'remote', price: 800, rating: 3.8, Freedelivery: 'No' },
  ];

  delete(i:number){
    this.products.splice(i,1);
  }

  pricehl(){
    this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  pricelh(){
    this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  ratinghl(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }
  ratinglh(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }
  OFD(){
    this.products=this.products.filter((product:any)=>product.Freedelivery=="yes"); 
  }
  // deliveryfilter(){
  //   this.products=this.products.filter((product:any)=>product.Freedelivery==this.delivery);
  // }

  search(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term));
  }

  discount(){
    this.products= this.products.map((product:any)=>{
    product.price=product.price/2;
    return product;
  })
  }
  dcharges(){
    let charges=this.products.map((product:any)=>{
      product.price=product.price+100;
      return product;
    }
    )
  }
  totalamount(){
    let totalCost = this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(totalCost);
  }
  totalitems(){
    // let totalitems = this.products.reduce((sum:any,product:any)=>sum+product.index,0);
    
    alert(this.products.length)
  }

  add(){
    let product = {
      name: this.name,
      price: this.price,
      rating:this.rating,
      Freedelivery:this.freed,
    }
    this.products.unshift(product);
  }

}
