import { AgriServiceTsProvider } from '../../../providers/agri-service-ts/agri-service-ts';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-agri',
  templateUrl: 'agri.html',
})
export class AgriPage {

  newsagri: Observable < any > ;
  
   constructor(public navCtrl: NavController, public AgriServiceTsProvider: AgriServiceTsProvider) {
     this.loadnews();
   }

   loadnews() {
     this.newsagri = this.AgriServiceTsProvider.getnews();
     
   }
  }
