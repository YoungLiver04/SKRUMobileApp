import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MgtPage } from '../list/mgt/mgt';
import { SciPage } from '../list/sci/sci';
import { HusoPage } from '../list/huso/huso';
import { ArtPage } from '../list/art/art';
import { EduPage } from '../list/edu/edu';
import { TechnoPage } from '../list/techno/techno';
import { AgriPage } from '../list/agri/agri';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  mgt(){
    this.navCtrl.push(MgtPage)
  }

  sci(){
    this.navCtrl.push(SciPage)
  }
  huso(){
    this.navCtrl.push(HusoPage)
  }
  art(){
    this.navCtrl.push(ArtPage)
  }
  edu(){
    this.navCtrl.push(EduPage)
  }
  techno(){
    this.navCtrl.push(TechnoPage)
  }
  agri(){
    this.navCtrl.push(AgriPage)
  }
}

