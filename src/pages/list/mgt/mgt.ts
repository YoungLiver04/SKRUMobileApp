import { MgtServiceTsProvider } from '../../../providers/mgt-service-ts/mgt-service-ts';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-mgt',
  templateUrl: 'mgt.html',
})
export class MgtPage {

  newsmgt: Observable < any > ;
  url : string;
  
   constructor(public navCtrl: NavController, public MgtServiceTsProvider: MgtServiceTsProvider ,private InAppBrowser: InAppBrowser) {
     this.loadnews();
   }

   loadnews() {
     this.newsmgt = this.MgtServiceTsProvider.getnews();
     
   }
  

}
