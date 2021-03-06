import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = HomePage;

  public pages: Array<{title: string, component: any ,icon: string;} >;

  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าหลัก',              component: HomePage, icon: 'home'},
      { title: 'ข้อมูลและข่าวสารของคณะ', component: ListPage , icon: 'podium'},
      { title: 'กิจกรรม',               component: EventsPage , icon: 'pulse'},
      { title: 'ปฎิทินวันหยุด',           component: HolidayPage , icon: 'calendar'},
      { title: 'แผนที่ภายในมหาวิทยาลัย',  component: MapPage , icon: 'map'},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
