import { ProductsService } from './../products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  products: any = [];
  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.selectedProducts;
  }

  delete(product) {
    // const el = this.productsService.selectedProducts.find(el => el.product === product);
    // const index = this.products.findIndex(el => el.product === product);
    // console.log(index);
    // this.products.splice(index,1);
    this.productsService.removeFromCart(product);
  }
  preview(product) {

  }
}