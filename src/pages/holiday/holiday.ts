import { HolidayServiceProvider } from '../../providers/holiday-service-ts/holiday-service-ts';


import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-holiday',
  templateUrl: 'holiday.html',
})
export class HolidayPage {

   users: Observable <any> ;
 
  constructor(public navCtrl: NavController, public HolidayServiceProvider: HolidayServiceProvider) {
    this.loadUsers();
  }
 
  loadUsers() {
    this.users = this.HolidayServiceProvider.getdbholidays();
    
  }
 
}
