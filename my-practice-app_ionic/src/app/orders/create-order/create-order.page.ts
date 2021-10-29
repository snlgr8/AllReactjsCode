import { Router } from '@angular/router';
import { CustomerService } from './../../services/customer.service';
import { ItemService } from './../../services/item.service';
import { Customer } from './../../customer/customer.model';
import { Item } from './../../items/item.model';
import { CustomerItem } from './../customer-item.model';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  newOrder: CustomerItem = new CustomerItem();
  custSelected: Customer;
  itemSelected: Item;
  selectedQty: number;
  items: Item[];
  customers: Customer[];
  inStockItem: number;
  constructor(private router: Router, private orderSrvc: OrderService, private itemSrvc: ItemService, private custSrvc: CustomerService) { }

  onItemChange() {
    this.inStockItem = this.itemSelected.qty;
  }
  onQtyChange() {
    console.log(this.selectedQty);
    this.inStockItem = this.itemSelected.qty - this.selectedQty;
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.items = this.itemSrvc.getAllItems();
    this.customers = this.custSrvc.getAllCustomers();
  }

  onAddOrder() {
    this.newOrder.custId = this.custSelected.id;
    this.newOrder.itemId = this.itemSelected.id;
    this.newOrder.qty = this.selectedQty;
    // Update item record
    this.itemSrvc.updateItemQty(this.itemSelected.id, this.selectedQty);
    this.orderSrvc.addOrder(this.newOrder);
    this.router.navigateByUrl('/main/tabs/orders')
  }
}
