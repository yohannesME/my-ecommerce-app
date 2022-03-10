import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, customers } from './customer.object';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  constructor(private router: Router) {
    this.customers = customers;
  }

  checkRegistrationYear(registYear: String) {
    return new Date().getFullYear() < Number(registYear.match(/\d{4}/g)) + 2
      ? 'black'
      : 'orange';
  }
  onEditCustomer(id: number) {
    console.log('object');
    this.router.navigateByUrl('customers/edit/' + id);
  }

  ngOnInit(): void {}
}
