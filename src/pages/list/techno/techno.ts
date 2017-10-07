import { TechnoServiceTsProvider } from '../../../providers/techno-service-ts/techno-service-ts';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-techno',
  templateUrl: 'techno.html',
})
export class TechnoPage {

  newstechno: Observable < any > ;
  
   constructor(public navCtrl: NavController, public TechnoServiceTsProvider: TechnoServiceTsProvider) {
     this.loadnews();
   }

   loadnews() {
     this.newstechno = this.TechnoServiceTsProvider.getnews();
     
   }
  }
