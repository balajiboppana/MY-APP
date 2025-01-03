import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private productsSubject = new BehaviorSubject<any[]>([]);  // For storing multiple products
  products$ = this.productsSubject.asObservable();  // Observable to get the products list

  private productSubject = new BehaviorSubject<any>(null);  // For storing a single product
  product$ = this.productSubject.asObservable();  // Observable for the single product

  // Set the single product data
  setProduct(product: any) {
    this.productSubject.next(product);  // Set a single product
  }

  // Confirm the product and reset
  confirmProduct() {
    const product = this.productSubject.value;
    if (product) {
      // Add to the list of products in the shared service
      const products = this.productsSubject.value;
      this.productsSubject.next([...products, product]);  // Add product to list
    }
    // Reset product data after confirmation
    this.resetProduct();  // Clear the product
  }

  // Reset the product (clear it)
  resetProduct() {
    this.productSubject.next(null);  // Clear the product
  }
}
