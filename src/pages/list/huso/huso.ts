import { HusoServiceTsProvider } from '../../../providers/huso-service-ts/huso-service-ts';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
