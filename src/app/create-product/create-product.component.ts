import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product = {
    name: '',
    price: null,
    rating: null,
    image: ''
  };

  isFormDisabled = false; // Flag to disable form after confirmation

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // Subscribe to product changes
    this.sharedService.product$.subscribe((product) => {
      if (product === null) {
        // Reset the form when product is confirmed
        this.product = { name: '', price: null, rating: null, image: '' }; // Reset form
        this.isFormDisabled = false; // Re-enable the form if needed
      }
    });
  }

  // Submit form to SharedService
  onSubmit() {
    if (this.product.name && this.product.price && this.product.rating && this.product.image) {
      this.sharedService.setProduct(this.product); // Pass the product to SharedService
    }
  }
}
