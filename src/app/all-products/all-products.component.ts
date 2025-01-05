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
        this.sharedService.products$.subscribe((products: any[]) => {
            this.products = products;
        });
    }

    viewProduct(product: any) {
        this.sharedService.setViewProduct(product);
    }

    generateStars(rating: number): string {
        let stars = '';

        // Full stars (integer part of the rating)
        const fullStars = Math.floor(rating);

        // Determine if we need a half star
        const decimalPart = rating % 1;
        const hasHalfStar = decimalPart >= 0.1 && decimalPart < 0.9;

        // Adjust empty stars count if we have a half star
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        // Add full stars
        stars += '<i class="fa-solid fa-star" style="color: gold;"></i>'.repeat(fullStars);

        // Add half star if needed
        if (hasHalfStar) {
            stars += '<i class="fa-solid fa-star-half-stroke" style="color: gold;"></i>';
        }

        // Add empty stars
        stars += '<i class="fa-regular fa-star" style="color: lightgray;"></i>'.repeat(emptyStars);

        // Include the rating number
        stars += ` <span class="rating-number">${rating.toFixed(1)}</span>`;

        return stars;
    } 
}
