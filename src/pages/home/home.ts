import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private expense: string = '0';
  private category: string;
  private location: any = {};

  constructor(public navCtrl: NavController,
    private storage: LocalstorageProvider,
    private geolocation: Geolocation
  ) {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.location.lat = resp.coords.latitude
      this.location.lon = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  private deleteChar(value) {
    if (this.expense.length === 1) {
      this.expense = '0';
    } else {
      this.expense = this.expense.slice(0, -1);
    }
  }

  private updateExpense(value) {
    if (value === '.') {
      if (this.expense.indexOf('.') === -1) {
        this.expense = this.expense + value;
      }
    } else if (value !== '<') {
      if (this.expense === '0') {
        this.expense = value;
      } else {
        this.expense = this.expense + value;
      }
    }
  }

  addExpense() {
    this.storage.setNewItem({
      spent: Number(this.expense),
      category: this.category,
      date: Date.now(),
      location: this.location
    });

    this.expense = '0';
    this.category = 'Home';
  }

}
