import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';


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
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { HolidayServiceProvider } from '../providers/holiday-service-ts/holiday-service-ts';
import { EventServiceProvider } from '../providers/event-service/event-service';
import { NewsServiceTsProvider } from '../providers/news-service-ts/news-service-ts';
import { MgtServiceTsProvider } from '../providers/mgt-service-ts/mgt-service-ts';




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
    HttpModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey: ''})
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
    
   
    {provide: ErrorHandler, useClass: IonicErrorHandler },
    AppSettingsProvider,
    HolidayServiceProvider,
    EventServiceProvider,
    NewsServiceTsProvider,
    MgtServiceTsProvider,
    
  ]
})
export class AppModule {}
