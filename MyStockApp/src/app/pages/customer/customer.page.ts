import { OrderService } from './../../apis/order.service';
import { Customer } from './../../model/Customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  constructor(private orderService: OrderService) { }

  customerList: Customer[] = [];
  ngOnInit() {
    this.orderService.getAllCutomers().subscribe((custList: Customer[]) => {
      if (custList) {
        console.log(custList);
        this.customerList = custList;
      }
    });
  }


  onAddCustomer(){
    console.log('Add new customer')
  }

}
