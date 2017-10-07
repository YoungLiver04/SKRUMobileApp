import { ArtServiceTsProvider } from '../../../providers/art-service-ts/art-service-ts';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-art',
  templateUrl: 'art.html',
})
export class ArtPage {

  newsart: Observable < any > ;
  
   constructor(public navCtrl: NavController, public ArtServiceTsProvider: ArtServiceTsProvider) {
     this.loadnews();
   }

   loadnews() {
     this.newsart = this.ArtServiceTsProvider.getnews();
     
   }
  }
