import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CONFIG } from '../shared';
import { ProductsComponent } from './products.component';


const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: CONFIG.products.children.list.route },
      { path: CONFIG.products.children.list.name, component: ListComponent },
      { path: CONFIG.products.children.details.name, component: ProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
