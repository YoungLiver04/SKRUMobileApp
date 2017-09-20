import { EduServiceTsProvider } from '../../../providers/edu-service-ts/edu-service-ts';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EduPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edu',
  templateUrl: 'edu.html',
})
export class EduPage {

  users: Observable < any > ;
  
   constructor(public navCtrl: NavController, public EduServiceTsProvider: EduServiceTsProvider) {
     this.loadnews();
   }

   loadnews() {
     this.users = this.EduServiceTsProvider.getnews();
     
   }
  }
