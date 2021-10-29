import { OrderService } from './../../apis/order.service';
import { Item } from './../../model/Item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  constructor(private orderSrvce: OrderService) { }
  item: Item = new Item();
  onAddItem() {
    console.log(this.item);
    this.orderSrvce.createItem(this.item).subscribe(res=>{
      if(res){
        this.onReset();
        //Show success

      }
      console.log(res);
    });
  }
  onReset() {
    this.item = new Item();
  }
  ngOnInit() {
  }

}
