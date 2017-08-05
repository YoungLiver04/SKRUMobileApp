import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hello = {
      name: 'Kuimron',
      lname: 'Mohamad'

  };

  constructor(public navCtrl: NavController) {

  }

 

}
