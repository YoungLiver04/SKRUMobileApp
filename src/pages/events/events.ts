import { EventServiceProvider } from '../../providers/event-service/event-service';

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  users: Observable <any> ;
  
   constructor(public navCtrl: NavController, public EventServiceProvider: EventServiceProvider) {
     this.loadUsers();
   }
  
   loadUsers() {
     this.users = this.EventServiceProvider.getdbholidays();
     
   }
}
