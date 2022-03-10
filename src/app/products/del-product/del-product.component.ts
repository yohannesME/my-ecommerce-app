import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, products } from '../product.object';

@Component({
  selector: 'app-del-product',
  templateUrl: './del-product.component.html',
  styleUrls: ['./del-product.component.css'],
})
export class DelProductComponent implements OnInit {
  id: number;
  product: Product;
  index: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = products.find((p, index) => {
      this.index = index;
      return p.id == this.id;
    })!;
  }

  finishDelete() {
    let pro: any = products.splice(this.index, 1);
    pro = null;
    this.router.navigateByUrl('products');
  }
  returnBack() {
    this.router.navigateByUrl('products');
  }
}
