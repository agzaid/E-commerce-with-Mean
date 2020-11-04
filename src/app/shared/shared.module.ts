import { AddToCartComponent } from './components/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from '.';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingCartComponent, FilterPipe, AddToCartComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[FilterPipe, AddToCartComponent]
})
export class SharedModule { }
