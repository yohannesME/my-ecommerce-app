import { Component, OnInit } from '@angular/core';
import { Product } from './product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
    new Product(
      1,
      'nike',
      `Description. NIKE, Inc., together with its subsidiaries, designs,
  develops, markets, and sells athletic footwear, apparel,
  equipment, and accessories worldwide. The company offers NIKE
  brand products in six categories, including running, NIKE
  basketball, the Jordan brand, football, training, and sportswear.`,
      `../../assets/products/Nike.jpg`,
      1000
    ),
    new Product(
      1,
      'Puma',
      `Puma SE, branded as Puma, is a German multinational corporation
    that designs and manufactures athletic and casual footwear,
    apparel and accessories, which is headquartered in Herzogenaurach,
    Bavaria, Germany. Puma is the third largest sportswear
    manufacturer in the world.`,
      `../../assets/products/puma.jpeg`,
      1000
    ),
    new Product(
      1,
      'Sketcher',
      `What kind of brand is Skechers? Image result for skechers detail
    Skechers USA, Inc. is an American footwear company. Headquartered
    in Manhattan Beach, California, the brand was founded in 1992 and
    is now the third largest athletic footwear brand in the United
    States.`,
      '../../assets/products/sketchers.jpg',
      1000
    ),
  ];

  // inputContainer: HTMLElement;

  // constructor() {
  //   this.inputContainer = document.querySelector('.input-container')!;
  // }

  ngOnInit(): void {}

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
