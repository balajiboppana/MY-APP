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
        this.sharedService.product$.subscribe(product => {
            if (product) {
                this.productName = product.name;
                this.showConfirmation = true;
            } else {
                this.showConfirmation = false;
            }
        });
    }

    confirmCreate() {
        this.sharedService.confirmProduct();
        this.showConfirmation = false;
    }
}
