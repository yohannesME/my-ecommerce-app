import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs';
import { products, Product } from '../product.object';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  id: number = 0;
  product: Product;
  constructor(private route: ActivatedRoute) {}

  displayProduct() {
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

    name.value = this.product.name;
    desc.value = this.product.description;
    Url.value = this.product.imageUrl;
    price.value = String(this.product.price);
  }

  ngOnInit(): void {
    this.route.params.subscribe((prod) => {
      this.id = prod['id'];
    });

    this.product = products.find((p) => {
      return p.id == this.id;
    })!;

    this.displayProduct();
  }
}
