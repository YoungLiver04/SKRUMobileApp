import { MgtServiceTsProvider } from '../../../providers/mgt-service-ts/mgt-service-ts';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MgtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mgt',
  templateUrl: 'mgt.html',
})
export class MgtPage {

  users: Observable <any> ;
  
   constructor(public navCtrl: NavController, public MgtServiceTsProvider: MgtServiceTsProvider) {
     this.loadUsers();
   }
  
   loadUsers() {
     this.users = this.MgtServiceTsProvider.getnews();
     
   }
  

}
