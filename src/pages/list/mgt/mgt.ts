import { MgtServiceTsProvider } from '../../../providers/mgt-service-ts/mgt-service-ts';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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

  newsmgt: Observable < any > ;
  
   constructor(public navCtrl: NavController, public MgtServiceTsProvider: MgtServiceTsProvider) {
     this.loadnews();
   }

   loadnews() {
     this.newsmgt = this.MgtServiceTsProvider.getnews();
     
   }
  

}
