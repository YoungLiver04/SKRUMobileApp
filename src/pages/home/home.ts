import { NewsServiceTsProvider } from '../../providers/news-service-ts/news-service-ts';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;
  newshome: Observable <any> ;
  
  
   constructor(public navCtrl: NavController, public NewsServiceTsProvider: NewsServiceTsProvider) {
     this.loadnews();
     this.tabBarElement = document.querySelector('.tabbar');
   }
  
   loadnews() {
     this.newshome = this.NewsServiceTsProvider.getnews();
     
   }

   ionViewDidLoad() {
    this.tabBarElement = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement = 'flex';
    }, 4000);
  }

  
  

}
