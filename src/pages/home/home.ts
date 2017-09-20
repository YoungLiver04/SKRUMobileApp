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
  users: Observable <any> ;
  
   constructor(public navCtrl: NavController, public NewsServiceTsProvider: NewsServiceTsProvider) {
     this.loadUsers();
     this.tabBarElement = document.querySelector('.tabbar');
   }
  
   loadUsers() {
     this.users = this.NewsServiceTsProvider.getnews();
     
   }

   ionViewDidLoad() {
    this.tabBarElement = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement = 'flex';
    }, 4000);
  }
  

}
