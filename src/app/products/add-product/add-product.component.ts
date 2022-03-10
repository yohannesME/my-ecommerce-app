import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, products } from '../product.object';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product = new Product(0, '', '', '', 0);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAddProduct() {
    this.product.id = products[products.length - 1].id + 1;
    products.push(this.product);
    this.router.navigateByUrl('products');
  }
}
