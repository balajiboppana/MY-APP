import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-all-products',
    templateUrl: './all-products.component.html',
    styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
    products: any[] = [];

    constructor(private sharedService: SharedService) {}

    ngOnInit(): void {
        this.sharedService.products$.subscribe(products => {
            this.products = products;
        });
    }

    viewProduct(product: any) {
        this.sharedService.setViewProduct(product);
    }
}
