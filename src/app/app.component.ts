import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  productName: string = '';  // Store the product name from CreateProductComponent

  // This method is triggered when the product is created in CreateProductComponent
  onProductCreated(name: string) {
    this.productName = name;  // Store the product name in the parent component
    // You can also pass the name to other components or services if needed
  }
}
