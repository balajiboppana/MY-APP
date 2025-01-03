// all-products.component.ts

import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

// Define the Product interface for type safety
interface Product {
  name: string;
  // Add other properties like price, image, etc., if necessary
}

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: Product[] = []; // Declare the type of products array

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // Subscribe to the shared service to get the updated products list
    this.sharedService.products$.subscribe((products: Product[]) => {
      this.products = products; // Assign the received products list to the local array
    });
  }

  // Add type annotation for the 'product' parameter in viewProduct function
  viewProduct(product: Product): void {
    console.log('Viewing product:', product);
  }
}
