import { CustomerService } from './../services/customer.service';
import { Customer } from './customer.model';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  constructor(private authSrvc: AuthService, private custSrvc: CustomerService) { }
  user = '';
  customers: Customer[] = [];
  ngOnInit() {
    this.user = this.authSrvc.loggedInUser;

  }

  ionViewWillEnter(){
    this.customers = this.custSrvc.getAllCustomers();

  }

}
