import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import _ from 'lodash';

const CATEGORIES = ["Home", "Car", "Food", "Going Out"];

@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html'
})
export class GraphPage {

  spendingGraph: any;

  @ViewChild('spendingGraphElement') spendingGraphElement;

  constructor(public navCtrl: NavController,
    private storage: LocalstorageProvider) {

  }

  ionViewDidEnter() {

    const data: any[] = this.storage.getAllItems();
    const groupedBy = _(data)
      .groupBy('category')
      .map((objs, key) => (
        _.sumBy(objs, 'spent')))
      .value();


    this.spendingGraph = new Chart(this.spendingGraphElement.nativeElement, {

      type: 'pie',
      data: {
        labels: CATEGORIES,
        datasets: [{
          label: 'precentage of spending',
          data: groupedBy,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
          ]
        }]
      }

    });
  }

}
