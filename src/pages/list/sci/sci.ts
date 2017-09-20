import { SciServiceTsProvider } from '../../../providers/sci-service-ts/sci-service-ts';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SciPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sci',
  templateUrl: 'sci.html',
})
export class SciPage {

  newssci: Observable < any > ;
  
   constructor(public navCtrl: NavController, public SciServiceTsProvider: SciServiceTsProvider) {
     this.loadnews();
   }

   loadnews() {
     this.newssci = this.SciServiceTsProvider.getnews();
     
   }
  }
