import { MockService } from './mock.service';
import { Injectable } from '@angular/core';
import { Customer } from '../customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  addCustomer(newCustomer: Customer) {
    this.mock.customers.push(newCustomer);
  }

  constructor(private mock: MockService) { }

  getAllCustomers(){
    return this.mock.getAllCustomers();
  }
}
