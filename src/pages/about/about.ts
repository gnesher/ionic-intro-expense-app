import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List } from 'ionic-angular';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  data: any[];

  constructor(public navCtrl: NavController,
    private storage: LocalstorageProvider, ) {
  }


  ionViewDidEnter() {
    this.data = this.storage.getAllItems();
  }
}
