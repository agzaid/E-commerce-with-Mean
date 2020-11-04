import { CONFIG } from './shared/configs/pages-routes';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: CONFIG.home.route },
  { path: CONFIG.home.name, component: HomeComponent },
  {
    path: CONFIG.products.name,
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: CONFIG.admin.name,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: CONFIG.shoppingCart.name,
    loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule)
  },
  { path: '**', redirectTo: CONFIG.home.route }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
