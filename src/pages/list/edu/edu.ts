import { EduServiceTsProvider } from '../../../providers/edu-service-ts/edu-service-ts';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-edu',
  templateUrl: 'edu.html',
})
export class EduPage {

  newsedu: Observable < any > ;
  
   constructor(public navCtrl: NavController, public EduServiceTsProvider: EduServiceTsProvider) {
     this.loadnews();
   }

   loadnews() {
     this.newsedu = this.EduServiceTsProvider.getnews();
     
   }
  }
