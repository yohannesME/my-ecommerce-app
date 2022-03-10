import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products, Product } from '../product.object';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  id: number = 0;
  product: Product;
  editedProduct: Product;
  constructor(private route: ActivatedRoute, private router: Router) {}

  // displayProduct() {
  //   const inputContainer: HTMLElement =
  //     document.querySelector('.input-container')!;

  //   const name: HTMLInputElement = <HTMLInputElement>(
  //     document.getElementById('name')
  //   );
  //   const desc: HTMLInputElement = <HTMLInputElement>(
  //     document.getElementById('desc')
  //   );
  //   const Url: HTMLInputElement = <HTMLInputElement>(
  //     document.getElementById('imageUrl')
  //   );
  //   const price: HTMLInputElement = <HTMLInputElement>(
  //     document.getElementById('price')
  //   );

  //   name.value = this.product.name;
  //   desc.value = this.product.description;
  //   Url.value = this.product.imageUrl;
  //   price.value = String(this.product.price);
  // }

  ngOnInit(): void {
    this.route.params.subscribe((prod) => {
      this.id = prod['id'];
      console.log(this.id);
    });

    this.product = products.find((p) => {
      return p.id == this.id;
    })!;

    this.editedProduct = Object.assign({}, this.product);
    console.log(this.editedProduct);
  }

  productEdit() {
    this.product.description = this.editedProduct.description;
    this.product.id = this.editedProduct.id;
    this.product.imageUrl = this.editedProduct.imageUrl;
    this.product.name = this.editedProduct.name;
    this.product.price = this.editedProduct.price;
    this.router.navigateByUrl('products');
  }
}
