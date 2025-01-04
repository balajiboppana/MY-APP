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

    constructor(private sharedService: SharedService) {}

    ngOnInit(): void {
        this.sharedService.product$.subscribe(product => {
            if (product === null) {
                this.product = { name: '', price: null, rating: null, image: '' }; // Reset form
            }
        });
    }

    onSubmit() {
        if (this.product.name && this.product.price && this.product.rating && this.product.image) {
            this.sharedService.setProduct(this.product);
        }
    }
}
