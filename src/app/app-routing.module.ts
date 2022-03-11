import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { DelProductComponent } from './products/del-product/del-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { DelCustomerComponent } from './customers/del-customer/del-customer.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CustomerProductComponent } from './customer-page/customer-product/customer-product.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/edit/:id', component: EditProductComponent },
  { path: 'products/delete/:id', component: DelProductComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/edit/:id', component: EditCustomerComponent },
  { path: 'customers/delete/:id', component: DelCustomerComponent },
  { path: 'customer', component: CustomerPageComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'customer/product', component: CustomerProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
