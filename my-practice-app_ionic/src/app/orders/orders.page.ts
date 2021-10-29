import { CustomerItem } from './customer-item.model';
import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders = [];
  constructor(private orderSrvc: OrderService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.orders = this.orderSrvc.getOrderInfos();
    console.log(this.orders);
  }
}
