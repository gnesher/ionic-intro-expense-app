import { GraphPage } from './../graph/graph';
import { Component } from '@angular/core';
import { ExpensesPage } from '../expenses/expenses';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExpensesPage;
  tab3Root = GraphPage;

  constructor() {

  }
}
