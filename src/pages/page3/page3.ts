﻿import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-page3',
    templateUrl: 'page3.html'
})
export class Page3 {
    searchStr: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.searchStr = "";
    }
    


    ionViewDidLoad() {
        console.log('ionViewDidLoad Page3');
    }

}
