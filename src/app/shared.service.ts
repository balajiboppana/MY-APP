import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private productsSubject = new BehaviorSubject<any[]>([]);
    products$ = this.productsSubject.asObservable();

    private productSubject = new BehaviorSubject<any>(null);
    product$ = this.productSubject.asObservable();

    private viewProductSubject = new BehaviorSubject<any>(null);
    viewProduct$ = this.viewProductSubject.asObservable();

    setProduct(product: any) {
        this.productSubject.next(product);
    }

    confirmProduct() {
        const product = this.productSubject.value;
        if (product) {
            const products = this.productsSubject.value;
            this.productsSubject.next([...products, product]);
            this.resetProduct();
        }
    }

    resetProduct() {
        this.productSubject.next(null);
    }

    setViewProduct(product: any) {
        this.viewProductSubject.next(product);
    }
}
