import { ItemService } from './../../services/item.service';
import { Item } from './../item.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  newItem: Item = new Item();
  constructor(private itemSrvc: ItemService, private router: Router) { }

  ngOnInit() {
  }
  onAddItem() {
    if (this.newItem) {
      this.itemSrvc.addItem(this.newItem);
      this.router.navigateByUrl('/main/tabs/items');

    }
  }
}
