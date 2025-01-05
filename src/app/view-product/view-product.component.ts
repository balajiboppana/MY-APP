import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
    product: any = null;
    safeRating: SafeHtml = '';

    constructor(
        private sharedService: SharedService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this.sharedService.viewProduct$.subscribe((product: any) => {
            if (product) {
                this.product = product;
                this.safeRating = this.sanitizer.bypassSecurityTrustHtml(this.generateStars(product.rating));
            } else {
                this.product = null;
                this.safeRating = '';  // Reset safeRating if no product is selected
            }
        });
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
