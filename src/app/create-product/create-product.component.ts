import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
    @ViewChild('createProductForm', { static: true }) createProductForm!: NgForm;  // Use non-null assertion

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
                this.resetForm();
            }
        });
    }

    onSubmit() {
        if (this.product.name && this.product.price && this.product.rating && this.product.image) {
            this.sharedService.setProduct(this.product);
        }
    }

    resetForm() {
        this.product = { name: '', price: null, rating: null, image: '' };
        if (this.createProductForm) {
            this.createProductForm.resetForm();
        }
    }
}
