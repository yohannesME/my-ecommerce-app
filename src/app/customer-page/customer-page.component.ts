import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, customers } from '../customers/customer.object';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
})
export class CustomerPageComponent implements OnInit {
  customer: Customer = new Customer(
    customers[customers.length - 1].id + 1,
    '',
    '',
    '',
    '',
    new Date().toLocaleDateString(),
    ''
  );
  constructor(private route: Router) {}

  ngOnInit(): void {}

  addCustomer() {
    customers.push(this.customer);
    this.route.navigateByUrl('signin');
  }
}
