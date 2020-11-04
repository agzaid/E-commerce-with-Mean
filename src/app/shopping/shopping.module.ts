import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShoppingComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ShoppingModule { }
