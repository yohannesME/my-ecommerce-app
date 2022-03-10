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
  showProductForm() {
    const inputContainer: HTMLElement =
      document.querySelector('.input-container')!;
    inputContainer.style.display = '';
    window.scrollTo(0, document.body.scrollHeight);
  }

  onAddProduct() {
    const inputContainer: HTMLElement =
      document.querySelector('.input-container')!;

    const name: HTMLInputElement = <HTMLInputElement>(
      document.getElementById('name')
    );
    const desc: HTMLInputElement = <HTMLInputElement>(
      document.getElementById('desc')
    );
    const Url: HTMLInputElement = <HTMLInputElement>(
      document.getElementById('imageUrl')
    );
    const price: HTMLInputElement = <HTMLInputElement>(
      document.getElementById('price')
    );

    const product = new Product(
      1,
      name.value,
      desc.value,
      Url.value,
      Number(price.value)
    );
    this.products.push(product);
    name.value = '';
    desc.value = '';
    Url.value = '';
    price.value = '';

    inputContainer.style.display = 'none';
  }
}
