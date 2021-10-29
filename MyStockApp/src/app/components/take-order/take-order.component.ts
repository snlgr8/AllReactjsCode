import { CustomerItem } from './../../model/CustomerItem';
import { Customer } from './../../model/Customer';
import { OrderService } from './../../apis/order.service';
import { Item } from './../../model/Item';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.scss'],
})
export class TakeOrderComponent implements OnInit {
  selectedItemQty = '';
  items: Item[] = [];
  constructor(private orderService: OrderService, public toastController: ToastController) { }
  itemSelected: Item;
  custSelected: Customer;
  custItem: CustomerItem;
  customers: Customer[] = [];
  qtySelected  = 0;
  msg = 'Item added successfully!!';
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.msg,
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
    this.orderService.getAllItems().subscribe((items: any) => {
      if (items) {
        this.items = items;

      }
    });

    this.orderService.getAllCutomers().subscribe((cust: any) => {
      if (cust) {
        this.customers = cust;
      }
    })
  }
  onAdd(item) {
    this.orderService.addCustItem(item);
    this.itemSelected.qty += this.qtySelected;
    this.custItem = new CustomerItem(this.custSelected.id, this.itemSelected.id, this.qtySelected);
    this.orderService.addCustItem(this.custItem).subscribe(res => {
      if (res) {
        this.presentToast();
        this.resetValues();

      }
    }, err => {
      this.msg = 'Error!!' + err;
      this.presentToast();
    });
  }

  resetValues() {
    this.itemSelected = new Item();
    this.custSelected = new Customer();
    this.qtySelected = 0;
    this.selectedItemQty = '';
  }
  onItemChange() {
    if (this.itemSelected.qty > 0) {
      this.selectedItemQty = `Total : ${this.itemSelected.qty}`;
    }
  }
}