import { ProductsService } from './../products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  quantity: number = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.quantityChanged.subscribe(flag => {
      if (flag === -1) {
        this.quantity--;
      } else {
        this.quantity++; 
      }
    })
  }

}
