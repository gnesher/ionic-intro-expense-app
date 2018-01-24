import { DetailsPage } from './../pages/details/details';
import { ButtonComponent } from './../components/button/button';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ExpensesPage } from '../pages/expenses/expenses';
import { GraphPage } from '../pages/graph/graph';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { LocalstorageProvider } from '../providers/localstorage/localstorage';

@NgModule({
  declarations: [
    MyApp,
    ExpensesPage,
    GraphPage,
    HomePage,
    TabsPage,
    ButtonComponent,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExpensesPage,
    GraphPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  providers: [
    LocalstorageProvider,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation
  ]
})
export class AppModule { }
