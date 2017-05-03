import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Page3 } from '../page3/page3';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  loadedItems: Array<{ title: string, note: string, icon: string }>;
  items: Array<{ title: string, note: string, icon: string }>;
  searchStr: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
      this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.searchStr = "";

    this.populateItems();
  }

  populateItems() {
      this.items = [];
      for (let i = 1; i < 11; i++) {
          this.items.push({
              title: 'Item ' + i,
              note: 'This is item #' + i,
              icon: this.icons[Math.floor(Math.random() * this.icons.length)]
          });
      }
  }

  searchItem() {
      this.populateItems();
      if (!this.searchStr) {
          return;
      }
      this.items = this.items.filter((v) => {
          return (v.title.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1);
      });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page3, {
      item: item
    });
  }
}
