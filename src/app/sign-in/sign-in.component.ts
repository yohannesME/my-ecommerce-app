import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, customers } from '../customers/customer.object';
import { Admin, admins } from './admin.object';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  admin: Admin = new Admin('', '');
  customer: Customer = new Customer(Number.MAX_VALUE, '', '', '', '', '', '');

  constructor(private router: Router) {}

  ngOnInit(): void {
    document.getElementById('navbar')?.classList.add('hidden');
  }

  onAdminLogin() {
    for (const a of admins) {
      if (a.email == this.admin.email) {
        if (this.admin.password == a.password) {
          this.router.navigateByUrl('products');
        }
      }
    }
  }
  onCustomerLogin() {
    for (const c of customers) {
      if (c.email.toLowerCase() == this.customer.email.toLowerCase()) {
        if (this.customer.password == c.password) {
          this.router.navigateByUrl('customer/product');
        }
      }
    }
  }
}
