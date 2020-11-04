import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Product } from 'src/app/shared';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  quantity: number = 0;
  @Input() product: Product;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  increase() {
    this.quantity++;
    const p = this.getCurrentProduct();
    if (p) {
      this.productsService.increaseQuantityFromCart(this.product);
    } else {
      return this.productsService.addToCart(this.product, this.quantity);
    }
  }

  decrease() {
    this.quantity--;
    const p = this.getCurrentProduct();
    if (p.quantity < 1) {
      this.productsService.removeFromCart(this.product)
    } else {
      this.productsService.decreaseQuantityFromCart(this.product);
    }
  }

  getCurrentProduct() {
    return this.productsService.selectedProducts.find(
      el => el.product === this.product
    );
  }

}
