import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, products } from 'src/app/products/product.object';

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.css'],
})
export class CustomerProductComponent implements OnInit {
  products: Product[];
  chartPrice: number = 0;

  // inputContainer: HTMLElement;

  constructor(private router: Router) {
    this.products = products;
  }

  ngOnInit(): void {}

  onAddToChart(event: any, price: number) {
    event.target.classList.toggle('btn-success');
    console.dir(event.target.textContent);
    event.target.textContent == ' Add To Chart '
      ? (event.target.textContent = ' Remove From Chart ')
      : (event.target.textContent = ' Add To Chart ');
    console.log('added');

    if (event.target.textContent == ' Remove From Chart ') {
      this.chartPrice -= price;
    } else {
      this.chartPrice += price;
    }
  }

  finishChart() {
    console.log('finished');
    if (
      window.confirm('Are You Sure You Want to Order: ' + this.chartPrice) ==
      true
    ) {
      alert('SUCCESSFULLY ORDERED');
    }
  }
}
