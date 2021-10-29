import { CustomerItem } from './../orders/customer-item.model';
import { Item } from './../items/item.model';
import { Customer } from './../customer/customer.model';
import { CustomerService } from './customer.service';
import { ItemService } from './item.service';
import { MockService } from './mock.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderInfos = [];

  addOrder(newOrder: CustomerItem) {
// To add in database
    this.mock.orders.push(newOrder);
    this.orderInfos.push({
      customer: this.getCustomer(newOrder.custId),
      itemInfo: this.getItem(newOrder.itemId),
      qtyOrdered: newOrder.qty
    });
  }

  constructor(private mock: MockService) {
    this.initialiseOrderInfo();
  }

  getCustomer(custId) {
    return this.mock.getAllCustomers().find(cust => {
      return cust.id === custId;
    });
  }

  getItem(itemId): Item {
    return this.mock.getAllItems().find(item => {
      return item.id === itemId;
    });
  }

  getAllOrders() {
    return this.mock.getAllOrders();
  }


  initialiseOrderInfo() {
    this.addNewOrderInfo(this.getAllOrders());
  }

  private addNewOrderInfo(orders: CustomerItem[]) {
    orders.forEach(order => {
      const cust = this.getCustomer(order.custId);
      const item = this.getItem(order.itemId);
      const qty = order.qty;
      this.orderInfos.push({ customer: cust, itemInfo: item, qtyOrdered: qty });
    });
  }

  getOrderInfos() {
    return [...this.orderInfos];
  }

}
