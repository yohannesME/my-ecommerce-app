import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { DelProductComponent } from './products/del-product/del-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/edit/:id', component: EditProductComponent },
  { path: 'products/delete/:id', component: DelProductComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/edit/:id', component: EditCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
