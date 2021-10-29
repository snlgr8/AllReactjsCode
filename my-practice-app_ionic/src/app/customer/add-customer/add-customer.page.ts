import { Router } from '@angular/router';
import { CustomerService } from './../../services/customer.service';
import { Customer } from './../customer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage implements OnInit {
  newCustomer: Customer = new Customer();
  constructor(private custSrvc: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  onAddCustomer(){
    console.log(this.newCustomer);
    this.custSrvc.addCustomer(this.newCustomer);
    this.router.navigateByUrl('/main/tabs/customer')
  }

}
