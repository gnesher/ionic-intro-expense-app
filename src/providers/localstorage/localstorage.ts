import { Injectable } from '@angular/core';

/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalstorageProvider {

  private data: any = [];

  constructor() {
  }

  setNewItem(newItem) {
    this.data.push(newItem);
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  getAllItems() {
    if (this.data.length > 0) {
      return this.data;
    }

    let storedData = localStorage.getItem('data');
    if (storedData) {
      this.data = JSON.parse(storedData);
      return this.data;
    } else {
      return null;
    }
  }
}
