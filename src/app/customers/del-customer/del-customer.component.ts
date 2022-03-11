import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, customers } from '../customer.object';

@Component({
  selector: 'app-del-customer',
  templateUrl: './del-customer.component.html',
  styleUrls: ['./del-customer.component.css'],
})
export class DelCustomerComponent implements OnInit {
  customer: any;
  id: number;
  index: number;

  constructor(private router: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.customer = customers.find((c, index) => {
      this.index = index;
      return c.id == this.id;
    })!;
  }

  returnBack() {
    this.route.navigateByUrl('customers');
  }
  finishDelete() {
    customers.splice(this.index, 1);
    this.customer = null;
    this.returnBack();
  }
}
