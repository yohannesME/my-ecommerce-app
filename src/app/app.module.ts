import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CustomersComponent } from './customers/customers.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { DelProductComponent } from './products/del-product/del-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, SignInComponent, CustomersComponent, EditProductComponent, EditCustomerComponent, DelProductComponent, AddProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
