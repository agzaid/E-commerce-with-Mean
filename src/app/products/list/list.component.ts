import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[] = [];
  isLoading: boolean = true;
  isError: boolean = true;
  modalProduct: any ='';

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.isError = false;
    this.productsService.getProducts().subscribe(res => {
      this.products = res;
      this.isLoading = false;

    }, error => {
      this.isLoading = false;
      this.isError = true;
    })
  }

  modal(product: Product) {
   this.modalProduct = product;
   console.log(this.modalProduct)
  }

}
