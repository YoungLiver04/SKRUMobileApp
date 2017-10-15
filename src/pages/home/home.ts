import { NewsServiceTsProvider } from '../../providers/news-service-ts/news-service-ts';
import { Observable } from 'rxjs/Observable';
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  newshome: Observable <any> ;
  url: string;
  
   constructor(public navCtrl: NavController, public NewsServiceTsProvider: NewsServiceTsProvider,private InAppBrowser: InAppBrowser) {
     this.loadnews();
     this.tabBarElement = document.querySelector('.tabbar');
    
   }
  
   loadnews() {
     this.newshome = this.NewsServiceTsProvider.getnews();
   }
  
   

}
