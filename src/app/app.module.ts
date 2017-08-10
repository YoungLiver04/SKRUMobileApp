import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EventsPage } from '../pages/events/events';
import { HolidayPage } from '../pages/holiday/holiday';
import { MapPage } from '../pages/map/map';
import { MgtPage } from '../pages/list/mgt/mgt';
import { SciPage } from '../pages/list/sci/sci';
import { HusoPage } from '../pages/list/huso/huso';
import { ArtPage } from '../pages/list/art/art';
import { EduPage } from '../pages/list/edu/edu';
import { TechnoPage } from '../pages/list/techno/techno';
import { AgriPage } from '../pages/list/agri/agri';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps} from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EventsPage,
    HolidayPage,
    MapPage,
    MgtPage,
    SciPage,
    HusoPage,
    ArtPage,
    EduPage,
    TechnoPage,
    AgriPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EventsPage,
    HolidayPage,
    MapPage,
    MgtPage,
    SciPage,
    HusoPage,
    ArtPage,
    EduPage,
    TechnoPage,
    AgriPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
