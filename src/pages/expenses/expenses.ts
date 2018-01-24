import { DetailsPage } from './../details/details';
import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List } from 'ionic-angular';
import { CurrencyPipe } from '@angular/common';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html'
})
export class ExpensesPage {

  data: any[];

  constructor(public navCtrl: NavController,
    private storage: LocalstorageProvider,
    public modalCtrl: ModalController) {
  }

  presentModal(item) {
    let modal = this.modalCtrl.create(DetailsPage, item);
    modal.present();
  }

  ionViewDidEnter() {
    this.data = this.storage.getAllItems();
  }
}
