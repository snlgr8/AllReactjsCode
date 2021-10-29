import { ItemService } from './../../services/item.service';
import { Item } from './../item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  item: Item;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private itemSrvc: ItemService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(i => {
      if (!i.has('itemId')) {
        this.navCtrl.navigateBack('/main/tabs/items');
        return;
      }
      this.item = this.itemSrvc.getItem(i.get('itemId'));

    });
  }

  onUpdateItem() {
    console.log(this.item);
    this.itemSrvc.updateItem(this.item.id, this.item.qty);
    this.navCtrl.navigateBack('main/tabs/items')
  }
}
