import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';

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
import { EduServiceTsProvider } from '../providers/edu-service-ts/edu-service-ts';
import { HusoServiceTsProvider } from '../providers/huso-service-ts/huso-service-ts';
import { AgriServiceTsProvider } from '../providers/agri-service-ts/agri-service-ts';
import { SciServiceTsProvider } from '../providers/sci-service-ts/sci-service-ts';
import { ArtServiceTsProvider } from '../providers/art-service-ts/art-service-ts';
import { TechnoServiceTsProvider } from '../providers/techno-service-ts/techno-service-ts';




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
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey: ''}),
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
    EduServiceTsProvider,
    HusoServiceTsProvider,
    AgriServiceTsProvider,
    SciServiceTsProvider,
    ArtServiceTsProvider,
    TechnoServiceTsProvider,
    
  ]
})
export class AppModule {}
