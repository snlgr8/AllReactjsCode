import { Item } from './item.model';
import { ItemService } from './../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(private itemSrvc: ItemService) { }
  items: Item[] = [];
  ngOnInit() {

  }

  ionViewWillEnter() {
    this.items = this.itemSrvc.getAllItems();
  }

}
