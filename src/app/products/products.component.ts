import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, products } from './product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  // inputContainer: HTMLElement;

  constructor(private router: Router) {
    this.products = products;
  }

  ngOnInit(): void {}

  onViewDetail(id: number) {
    this.router.navigateByUrl('/products/edit/' + id);
  }
  toProductForm() {
    this.router.navigateByUrl('products/add');
  }

  onDeleteProduct(id: number) {
    console.log('this exceite');
    this.router.navigateByUrl('/products/delete/' + id);
  }
}
