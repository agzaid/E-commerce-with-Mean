import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, Product } from '../shared';
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  searchKey: string;
  allProducts: Product[];
  selectedProducts: Selected[] = [];
  quantityChanged= new Subject<number>();


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(API.products)
      .pipe(map((res: any[]) => {
        const result: Product[] = [];
        res.forEach((el) => {
          result.push({
            imgUrl: el['imgUrl'],
            name: el['name'],
            price: el['price']
          })
        });
        this.allProducts = result;
        return result;
      }))
  };

  addToCart(product: Product, quantity: number) {
    this.selectedProducts.push({ product, quantity });
    this.quantityChanged.next(1);
  }

  decreaseQuantityFromCart(product: Product) {
    const el = this.selectedProducts.find(el => el.product === product);
    el.quantity--; 
    this.quantityChanged.next(-1);

  }

  increaseQuantityFromCart(product: Product) {
    const el = this.selectedProducts.find(el => el.product === product);
    el.quantity++; 
    this.quantityChanged.next(1);

  }

  removeFromCart(product: Product) {
    const el = this.selectedProducts.find(el => el.product === product);
    const index = this.selectedProducts.indexOf(el);
    this.selectedProducts.splice(index, 1);
    this.quantityChanged.next(-1);

  }
}

interface Selected { product: Product, quantity: number };


