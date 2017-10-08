import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  
  images = ['map.jpg'];

  constructor(public navCtrl: NavController, public navParams: NavParams,  ) {
   
  }

}