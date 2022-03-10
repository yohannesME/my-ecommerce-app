import { Component, OnInit } from '@angular/core';
import { Customer, customers } from './customer.object';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  constructor() {
    this.customers = customers;
  }

  checkRegistrationYear(registYear: String) {
    return new Date().getFullYear() < Number(registYear.match(/\d{4}/g)) + 2
      ? 'black'
      : 'orange';
  }
  toggleDetail(event: any) {
    // event.target.previousElementSibling.style.display === 'none'
    //   ? (event.target.previousElementSibling.style.display = '')
    //   : (event.target.previousElementSibling.style.display = 'none');
    event.target.previousElementSibling.classList.toggle('detail-hidden');
    event.target.textContent === ' View Details '
      ? (event.target.textContent = 'Hide Details')
      : (event.target.textContent = 'View Details');
  }
  ngOnInit(): void {}
}
