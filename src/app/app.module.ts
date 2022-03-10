import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CustomersComponent } from './customers/customers.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, SignInComponent, CustomersComponent, EditProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
