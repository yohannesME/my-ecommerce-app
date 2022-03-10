import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, customers } from '../customer.object';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  id: number;
  index: number;
  customer: Customer;
  editedCustomer: Customer;
  constructor(private router: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.customer = customers.find((c, index) => {
      this.index = index;
      return c.id == this.id;
    })!;

    this.editedCustomer = Object.assign({}, this.customer);
  }
  customerEdit() {
    this.customer.address = this.editedCustomer.address;
    this.customer.email = this.editedCustomer.email;
    this.customer.id = this.editedCustomer.id;
    this.customer.imageUrl = this.editedCustomer.imageUrl;
    this.customer.name = this.editedCustomer.name;
    this.customer.phoneNum = this.editedCustomer.phoneNum;
    this.customer.registrationDate = this.editedCustomer.registrationDate;

    this.route.navigateByUrl('customers');
  }
  // validEmail(): boolean {
  //   const regEmail = /\w[@]\w\.\w/g;
  //   console.log(this.editedCustomer);
  //   return !regEmail.test(String(this.editedCustomer.email));
  // }
}
