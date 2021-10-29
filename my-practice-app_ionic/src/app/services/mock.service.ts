import { CustomerItem } from './../orders/customer-item.model';
import { Item } from './../items/item.model';
import { Customer } from './../customer/customer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  customers: Customer[] = [];
  items: Item[] = [];
  orders: CustomerItem[] = [];
  constructor() {
    this.populateCustomers();
    this.populateItems();
    this.populateOrders();
  }

  populateCustomers() {
    const cust1: Customer = new Customer();
    cust1.id = '001';
    cust1.location = 'Mumbai';
    cust1.name = 'Sonal';

    const cust2: Customer = new Customer();
    cust2.id = '002';
    cust2.location = 'Pune';
    cust2.name = 'Sejal';


    const cust3: Customer = new Customer();
    cust3.id = '003';
    cust3.location = 'Ahemdabhad';
    cust3.name = 'Pooja';

    this.customers.push(cust1);
    this.customers.push(cust2);
    this.customers.push(cust3);


  }
  populateItems() {
    const i1: Item = new Item();
    i1.name = 'Sample01';
    i1.id = '001';
    i1.qty = 20;

    const i2: Item = new Item();
    i2.name = 'Sample02';
    i2.id = '002';
    i2.qty = 100;

    const i3: Item = new Item();
    i3.name = 'Sample03';
    i3.id = '003';
    i3.qty = 70;

    this.items.push(i1);
    this.items.push(i2);
    this.items.push(i3);

  }
  populateOrders() {
    const order1 = new CustomerItem();
    order1.custId = '001';
    order1.itemId = '001';
    order1.qty = 300;



    const order2 = new CustomerItem();
    order2.custId = '002';
    order2.itemId = '002';
    order2.qty = 350;


    const order3 = new CustomerItem();
    order3.custId = '003';
    order3.itemId = '001';
    order3.qty = 120;


    this.orders.push(order1);

    this.orders.push(order2);
    this.orders.push(order3);


  }
  getAllCustomers() {

    return [...this.customers];
  }
  getAllItems() {

    return [...this.items];
  }


  getAllOrders() {
    return [...this.orders];
  }

}
