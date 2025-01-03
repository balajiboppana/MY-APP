import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  productName: string = '';
  showConfirmation: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // Subscribe to get the product from the SharedService
    this.sharedService.product$.subscribe((product) => {
      if (product) {
        this.productName = product.name; // Show product name only
        this.showConfirmation = true;
      } else {
        this.showConfirmation = false;
      }
    });
  }

  // Confirm the product and add it to the list in Tile 2
  confirmCreate() {
    this.sharedService.confirmProduct(); // Confirm the product and add to product list
    this.showConfirmation = false; // Hide confirmation
    this.sharedService.resetProduct(); // Reset the product data after confirmation (clears form)
  }
}
