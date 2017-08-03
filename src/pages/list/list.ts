import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 items = [
    'คณะวิทยาศาสตร์และเทคโนโลยี',
    'คณะมนุษยศาสตร์และสังคมศาสตร์ ',
    'คณะศิลปกรรมศารตร์',
    'คณะครุศาสตร์',
    'คณะครุศาสตร์',
    'คณะวิทยาการจัดการ',
    'คณะเทคโนโลยีอุตสาหกรรม',
    'คณะคณะเทคโนโลยีการเกษตร'
    
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}

