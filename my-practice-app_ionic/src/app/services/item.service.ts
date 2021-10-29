import { Item } from './../items/item.model';
import { MockService } from './mock.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItem(itemId): Item {
    return this.getAllItems().find(item => item.id === itemId);
  }

  updateItem(id, updatedQty) {
    this.getAllItems().filter(item => {
      if (item.id === id) {
        item.qty = updatedQty;
      }
    });

  }
  updateItemQty(id: string, selectedQty: number) {
    this.getAllItems().filter(item => {
      if (item.id === id) {
        item.qty = item.qty - selectedQty;
      }
    });
  }
  addItem(newItem: Item) {
    this.mock.items.push(newItem);
  }

  constructor(private mock: MockService) { }

  getAllItems() {
    return this.mock.getAllItems();
  }
}
