import { HusoServiceTsProvider } from '../../../providers/huso-service-ts/huso-service-ts';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HusoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-huso',
  templateUrl: 'huso.html',
})
export class HusoPage {

  newshuso: Observable < any > ;
  
   constructor(public navCtrl: NavController, public HusoServiceTsProvider: HusoServiceTsProvider) {
     this.loadnews();
   }

   loadnews() {
     this.newshuso = this.HusoServiceTsProvider.getnews();
     
   }
  }
