import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
    product: any;

    constructor(private sharedService: SharedService) {}

    ngOnInit(): void {
        this.sharedService.viewProduct$.subscribe(product => {
            this.product = product;
        });
    }

    generateStars(rating: number): string {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < rating ? '★' : '☆';
        }
        return stars;
    }
}
