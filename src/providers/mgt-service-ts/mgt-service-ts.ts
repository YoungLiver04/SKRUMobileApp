import { AppSettingsProvider } from '../app-settings/app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MgtServiceTsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MgtServiceTsProvider {

  apiUrl = this.AppSettingsProvider.getApiUrl();//ดึงข้อมูลมาจาก app set
  
   constructor(public http: Http, public AppSettingsProvider: AppSettingsProvider) {
   }
  
   public getnews() {
     return this.http.get(this.apiUrl + 'news')//http://localhost:3000/+dbholidays
       .map(response => response.json().result);
   }
}
